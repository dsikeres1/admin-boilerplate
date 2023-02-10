import { PropsWithChildren } from "react";
import { Container } from "react-bootstrap";
import { LeftSideMenuView } from "./leftSideMenu";
import { TopBarView } from "./topBar";
import Head from "next/head";
import Favicon from "../../../public/favicon.ico";

export function LayoutView(props: PropsWithChildren) {
  return (
    <div className="wrapper">
      <LeftSideMenuView />
      <div className="content-page">
        <div className="content">
          <TopBarView />
          <Container fluid>
            <ContentHeader />
            {props.children}
          </Container>
          <FooterView />
        </div>
      </div>
    </div>
  );
}

function ContentHeader() {
  // TODO :: 메뉴 모델에 따라서 적절하게 출력하기
  return (
    <div className="row">
      <div className="col-12">
        <div className="page-title-box">
          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item">
                <a href="#">Hyper</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">eCommerce</a>
              </li>
              <li className="breadcrumb-item active">Products</li>
            </ol>
          </div>
          <h4 className="page-title">Products</h4>
        </div>
      </div>
    </div>
  );
}

function FooterView() {
  // TODO :: 다자인 요소가 있어서 추가해 두기는 하였지만, 아마도 사용하지 않을 것이다.
  //  기획 결정 후 필요 없으면 삭제할 것
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">2022© Hyper - Coderthemes.com</div>
          <div className="col-md-6">
            <div className="text-md-end footer-links d-none d-md-block">
              <a href="#">About</a>
              <a href="#">Support</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function DefaultLayoutView(props: PropsWithChildren<Record<never, any>>) {
  // noinspection HtmlRequiredTitleElement
  return (
    <>
      <Head>
        {/* TODO :: Favicon 변경 */}
        <link rel="shortcut icon" type="image/x-icon" href={Favicon.src} />
      </Head>
      {props.children}
    </>
  );
}
