import "../../public/pub-hyper/assets/css/vendor/jquery-jvectormap-1.2.2.css";
import "../../public/pub-hyper/assets/css/icons.min.css";
import "../../public/pub-hyper/assets/css/app.min.css";
import "../styles/globals.css";
import type { AppProps, AppType } from "next/app";
import { App } from "../app";

const NextApp: AppType = (props: AppProps) => <App {...props} />;
// SSR 은 사용하지 않는다.
// https://nextjs.org/docs/advanced-features/custom-app#caveats
NextApp.getInitialProps = () => ({ ssr: false });
// noinspection JSUnusedGlobalSymbols
export default NextApp;
