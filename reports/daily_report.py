"""Daily lead report for Brisa Roofing.

Reads the Google Sheet export and prints how many new leads came in each day.
We run this every morning and email the output to the client.

Usage:
    python3 reports/daily_report.py [path/to/leads_export.csv]
"""
import csv
import sys
from collections import Counter
from datetime import date
from pathlib import Path

DEFAULT_CSV = Path(__file__).resolve().parent.parent / "data" / "leads_export.csv"


def load_leads(path):
    with open(path, newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))


def unique_leads(leads):
    """Keep only the first submission from each person."""
    seen = set()
    unique = []
    for lead in leads:
        if lead["email"] in seen:
            continue
        seen.add(lead["email"])
        unique.append(lead)
    return unique


def count_by_day(leads):
    """Count leads per day. received_at looks like '2026-10-05 14:30:00'."""
    days = Counter()
    for lead in leads:
        day = lead["received_at"][:10]
        days[day] += 1
    return days


def print_report(days):
    print("Brisa Roofing - new leads per day")
    print("-" * 34)
    for day in sorted(days):
        weekday = date.fromisoformat(day).strftime("%a")
        print(f"{weekday} {day}   {days[day]:>3}")
    print("-" * 34)
    print(f"Total              {sum(days.values()):>3}")


def main():
    path = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_CSV
    leads = unique_leads(load_leads(path))
    print_report(count_by_day(leads))


if __name__ == "__main__":
    main()
