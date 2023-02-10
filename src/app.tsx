import { AppProps } from "next/app";
import { DefaultLayoutView, LayoutView } from "./view/layout/layout";
import { PropsWithChildren, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { some } from "lodash";
import { observer } from "mobx-react-lite";
import { UrlObject } from "url";

export function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutSelector>
      <Component {...pageProps} />
    </LayoutSelector>
  );
}

function LayoutSelector(props: PropsWithChildren) {
  const router = useRouter();
  // 예외 URL
  const isSpecialUrl = some(["/_"], (prefix) => router.pathname.startsWith(prefix));
  if (isSpecialUrl) {
    return <>{props.children}</>;
  }

  // 로그인
  if (router.pathname.startsWith("/sign/")) {
    return <DefaultLayoutView>{props.children}</DefaultLayoutView>;
  }

  return <AdminApp>{props.children}</AdminApp>;
}

const AdminApp = observer((props: PropsWithChildren<Record<never, any>>) => {
  return <LayoutView>{props.children}</LayoutView>;
});

export function Replace(props: { url: UrlObject | string }) {
  useEffect(() => {
    const ignore = Router.replace(props.url);
  }, [props.url]);
  return <></>;
}
