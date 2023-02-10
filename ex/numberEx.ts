import { isNaN, isNil } from "lodash";

export function parseIntSafe(value: string): number | undefined {
  const i = parseInt(value, 10);
  return isNaN(i) ? undefined : i;
}

export function parseFloatSafe(value: string): number | undefined {
  const i = parseFloat(value);
  return isNaN(i) ? undefined : i;
}

// return "123,456,789"
export function mf1(value: number | null | undefined): string {
  if (isNil(value)) {
    return "";
  }
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// return "12,123.00"
export function mf2(value: number | null | undefined): string {
  if (isNil(value)) {
    return "";
  }
  return value
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function phoneNum(phone: string | null): string {
  if (isNil(phone)) {
    return "";
  }
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length > 11) {
    return "";
  }

  let matcher: RegExp = /^(\d{3})(\d{4})(\d{4})$/;
  if (cleaned.length === 10) {
    matcher = /^(\d{3})(\d{3})(\d{4})$/;
  }

  const match = cleaned.match(matcher);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return "";
}
