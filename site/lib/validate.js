export function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// US phone numbers: 10 digits.
export function isValidPhone(phone) {
  return typeof phone === "string" && /^\d{10}$/.test(phone);
}
