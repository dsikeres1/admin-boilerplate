import "../styles/globals.css";
import type { AppProps, AppType } from "next/app";
import { App } from "../app";

const NextApp: AppType = (props: AppProps) => <App {...props} />;
// SSR 은 사용하지 않는다.
// https://nextjs.org/docs/advanced-features/custom-app#caveats
NextApp.getInitialProps = () => ({});
// noinspection JSUnusedGlobalSymbols
export default NextApp;
