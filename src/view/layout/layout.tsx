import { PropsWithChildren } from "react";

export function DefaultLayoutView(props: PropsWithChildren<Record<never, any>>) {
  // noinspection HtmlRequiredTitleElement
  return <>{props.children}</>;
}
