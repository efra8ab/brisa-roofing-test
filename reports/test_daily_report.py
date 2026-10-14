"""Tests for daily_report.py.

Run from the project root:
    python3 -m unittest discover -s reports -v
"""
import unittest

from daily_report import count_by_day, unique_leads


def lead(received_at, email):
    return {"received_at": received_at, "email": email}


class UniqueLeadsTest(unittest.TestCase):
    def test_drops_repeat_submissions(self):
        leads = [
            lead("2026-10-01 10:00:00", "a@example.com"),
            lead("2026-10-01 10:00:05", "a@example.com"),
            lead("2026-10-01 11:00:00", "b@example.com"),
        ]
        self.assertEqual(len(unique_leads(leads)), 2)


class CountByDayTest(unittest.TestCase):
    def test_counts_per_day(self):
        leads = [
            lead("2026-10-01 10:00:00", "a@example.com"),
            lead("2026-10-01 15:00:00", "b@example.com"),
            lead("2026-10-02 09:00:00", "c@example.com"),
        ]
        days = count_by_day(leads)
        self.assertEqual(days["2026-10-01"], 2)
        self.assertEqual(days["2026-10-02"], 1)


if __name__ == "__main__":
    unittest.main()
