import "./globals.css";

export const metadata = {
  title: "Brisa Roofing | Free Roof Inspection in Miami",
  description: "Free roof inspections in Miami-Dade and Broward. We call you within 24 hours.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
