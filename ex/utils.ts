import { isEmpty } from "lodash";
import { cPk, cPkIsNew, defineQuery, mergedUrl, Pk } from "./query";
import Router from "next/router";
import { reloadRouter } from "./next";

export function alertSuccessModify() {
  alert("수정하였습니다.");
  reloadRouter();
}

const PkQuery = defineQuery({ pk: cPk });

export function alertSuccessEdit(pk: Pk, newPk: number) {
  alert(cPkIsNew(pk) ? "추가하였습니다." : "수정하였습니다.");
  const ignore = Router.replace(mergedUrl(PkQuery, { pk: newPk }));
}

export function alertErrors(errors: string[]): boolean {
  if (isEmpty(errors)) {
    return false;
  }
  alert(errors[0]);
  return true;
}

export function getAbsoluteUrl(url: string): string {
  if (!/^https?:\/\//.test(url)) {
    return `http://${url}`;
  }

  return url;
}
