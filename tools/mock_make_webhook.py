"""Fake Make webhook for local testing.

In production the website sends every lead to a Make webhook. This script
stands in for it: it listens on http://localhost:8787/hook and prints
whatever it receives, so you can see exactly what the site sends.

Run:
    python3 tools/mock_make_webhook.py
"""
import json
from http.server import BaseHTTPRequestHandler, HTTPServer

PORT = 8787


class Handler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path != "/hook":
            self.send_response(404)
            self.end_headers()
            return

        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length).decode("utf-8", errors="replace")
        print("\n[mock-make] lead received:", flush=True)
        try:
            print(json.dumps(json.loads(body), indent=2, ensure_ascii=False), flush=True)
        except json.JSONDecodeError:
            print(body, flush=True)

        # Same response the real Make webhook gives.
        self.send_response(200)
        self.send_header("Content-Type", "text/plain")
        self.end_headers()
        self.wfile.write(b"Accepted")

    def log_message(self, *args):
        pass  # keep the output clean; we print what matters above


if __name__ == "__main__":
    print(f"[mock-make] listening on http://localhost:{PORT}/hook  (Ctrl+C to stop)", flush=True)
    HTTPServer(("localhost", PORT), Handler).serve_forever()
