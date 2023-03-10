import moment, { Moment } from "moment";
import { isDate, isNil, isString } from "lodash";
import { safeMoment } from "./momentEx";

export function d1(datetime: Date | string | Moment | null | undefined): string {
  if (isNil(datetime)) {
    return "";
  }
  if (isString(datetime)) {
    return d1(moment(datetime));
  }
  if (isDate(datetime)) {
    return d1(moment(datetime));
  }

  return datetime.format("YYYY-MM-DD");
}

export function d2(datetime: Date | string | Moment | null | undefined): string {
  if (isNil(datetime)) {
    return "";
  }
  if (isString(datetime)) {
    return d2(moment(datetime));
  }
  if (isDate(datetime)) {
    return d2(moment(datetime));
  }

  return datetime.format("YYYY.MM.DD");
}

export function d3(datetime: Date | string | Moment | null | undefined): string {
  if (isNil(datetime)) {
    return "";
  }
  if (isString(datetime)) {
    return d3(moment(datetime));
  }
  if (isDate(datetime)) {
    return d3(moment(datetime));
  }

  return datetime.format("YYYY년 MM월 DD일");
}

export function dt1(datetime: Date | string | Moment | null | undefined): string {
  if (isNil(datetime)) {
    return "";
  }

  if (isString(datetime)) {
    return dt1(safeMoment(datetime));
  }

  if (isDate(datetime)) {
    return dt1(moment(datetime, true));
  }

  return datetime.format("YYYY-MM-DD HH:mm");
}

export function t1(datetime: Date | string | Moment | null | undefined): string {
  if (isNil(datetime)) {
    return "";
  }

  if (isString(datetime)) {
    return dt1(safeMoment(datetime));
  }

  if (isDate(datetime)) {
    return dt1(moment(datetime, true));
  }

  return datetime.format("HH:mm");
}

export function t2(time: string | null | undefined): string {
  if (isNil(time)) {
    return "";
  }

  if (isString(time)) {
    return moment(time, "HH:mm:ss Z").format("HH:mm");
  }

  return "";
}

export function dt2(datetime: Date | string | Moment | null | undefined): string {
  if (isNil(datetime)) {
    return "";
  }

  if (isString(datetime)) {
    return dt2(safeMoment(datetime));
  }

  if (isDate(datetime)) {
    return dt2(moment(datetime, true));
  }

  return datetime.format("YYYY.MM.DD HH:mm");
}

export function dt3(datetime: Date | string | Moment | null | undefined): string {
  if (isNil(datetime)) {
    return "";
  }

  if (isString(datetime)) {
    return dt3(safeMoment(datetime));
  }

  if (isDate(datetime)) {
    return dt3(moment(datetime, true));
  }

  return datetime.format("YYYYMMDDHHmm");
}

export function fromNow(datetime: Date | string | Moment | null | undefined): string {
  return moment(datetime).fromNow();
}

export function dateWithDayOfWeek(
  datetime: Date | string | Moment | null | undefined,
  isKor: boolean,
): string {
  if (isNil(datetime)) {
    return "";
  }
  const dateMoment = moment(datetime);
  const weekday = isKor ? korWeekday(dateMoment.weekday()) : engWeekday(dateMoment.weekday());
  if (isString(datetime)) {
    return `${d1(moment(datetime))} (${weekday})`;
  }
  if (isDate(datetime)) {
    return `${d1(moment(datetime))} (${weekday})`;
  }

  return datetime.format("YYYY-MM-DD");
}

export function korWeekday(weekdayIndex: number): string {
  switch (weekdayIndex) {
    case 0:
      return "일";
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
    default:
      return "";
  }
}

export function engWeekday(weekdayIndex: number): string {
  switch (weekdayIndex) {
    case 0:
      return "SUN";
    case 1:
      return "MON";
    case 2:
      return "THE";
    case 3:
      return "WEN";
    case 4:
      return "THU";
    case 5:
      return "FRI";
    case 6:
      return "SAT";
    default:
      return "";
  }
}

// REVIEW :: 정인아 - 년 / 월 / 일 / 시 / 분 / 초  단위 함수
export function korDateUnit(engUnit: string): string {
  switch (engUnit) {
    case "year":
      return "년";
    case "month":
      return "월";
    case "day":
      return "일";
    case "hour":
      return "시";
    case "minute":
      return "분";
    case "seconds":
      return "초";
    default:
      return "";
  }
}
