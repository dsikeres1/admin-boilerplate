import flagsUs from "../../../public/pub-hyper/assets/images/flags/us.jpg";
import flagsGermany from "../../../public/pub-hyper/assets/images/flags/germany.jpg";
import flagsItaly from "../../../public/pub-hyper/assets/images/flags/italy.jpg";
import flagsSpain from "../../../public/pub-hyper/assets/images/flags/spain.jpg";
import flagsRussia from "../../../public/pub-hyper/assets/images/flags/russia.jpg";
import usersAvatar1 from "../../../public/pub-hyper/assets/images/users/avatar-1.jpg";
import usersAvatar2 from "../../../public/pub-hyper/assets/images/users/avatar-2.jpg";
import usersAvatar4 from "../../../public/pub-hyper/assets/images/users/avatar-4.jpg";
import usersAvatar5 from "../../../public/pub-hyper/assets/images/users/avatar-5.jpg";
import brandsSlack from "../../../public/pub-hyper/assets/images/brands/slack.png";
import brandsGithub from "../../../public/pub-hyper/assets/images/brands/github.png";
import brandsDribbble from "../../../public/pub-hyper/assets/images/brands/dribbble.png";
import brandsBitbucket from "../../../public/pub-hyper/assets/images/brands/bitbucket.png";
import brandsDropbox from "../../../public/pub-hyper/assets/images/brands/dropbox.png";
import brandsGsuite from "../../../public/pub-hyper/assets/images/brands/g-suite.png";
import Image from "next/image";

export function TopBarView() {
  return (
    <div className="navbar-custom">
      <ul className="list-unstyled topbar-menu float-end mb-0">
        <li className="dropdown notification-list d-lg-none">
          <a
            className="nav-link dropdown-toggle arrow-none"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <i className="dripicons-search noti-icon" />
          </a>
          <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
            <form className="p-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search ..."
                aria-label="Recipient's username"
              />
            </form>
          </div>
        </li>
        <li className="dropdown notification-list topbar-dropdown">
          <a
            className="nav-link dropdown-toggle arrow-none"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <Image src={flagsUs} alt="user-image" className="me-0 me-sm-1" height={12} />
            <span className="align-middle d-none d-sm-inline-block">English</span>{" "}
            <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle" />
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu">
            {/* item */}
            <a href="#" className="dropdown-item notify-item">
              <Image src={flagsGermany} alt="user-image" className="me-1" height={12} />{" "}
              <span className="align-middle">German</span>
            </a>
            {/* item */}
            <a href="#" className="dropdown-item notify-item">
              <Image src={flagsItaly} alt="user-image" className="me-1" height={12} />{" "}
              <span className="align-middle">Italian</span>
            </a>
            {/* item */}
            <a href="#" className="dropdown-item notify-item">
              <Image src={flagsSpain} alt="user-image" className="me-1" height={12} />{" "}
              <span className="align-middle">Spanish</span>
            </a>
            {/* item */}
            <a href="#" className="dropdown-item notify-item">
              <Image src={flagsRussia} alt="user-image" className="me-1" height={12} />{" "}
              <span className="align-middle">Russian</span>
            </a>
          </div>
        </li>
        <li className="dropdown notification-list">
          <a
            className="nav-link dropdown-toggle arrow-none"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <i className="dripicons-bell noti-icon" />
            <span className="noti-icon-badge" />
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg">
            {/* item */}
            <div className="dropdown-item noti-title">
              <h5 className="m-0">
                <span className="float-end">
                  <a href="#" className="text-dark">
                    <small>Clear All</small>
                  </a>
                </span>
                Notification
              </h5>
            </div>
            <div style={{ maxHeight: 230 }} data-simplebar="">
              {/* item */}
              <a href="#" className="dropdown-item notify-item">
                <div className="notify-icon bg-primary">
                  <i className="mdi mdi-comment-account-outline" />
                </div>
                <p className="notify-details">
                  Caleb Flakelar commented on Admin
                  <small className="text-muted">1 min ago</small>
                </p>
              </a>
              {/* item */}
              <a href="#" className="dropdown-item notify-item">
                <div className="notify-icon bg-info">
                  <i className="mdi mdi-account-plus" />
                </div>
                <p className="notify-details">
                  New user registered.
                  <small className="text-muted">5 hours ago</small>
                </p>
              </a>
              {/* item */}
              <a href="#" className="dropdown-item notify-item">
                <div className="notify-icon">
                  <Image src={usersAvatar2} className="img-fluid rounded-circle" alt="" />{" "}
                </div>
                <p className="notify-details">Cristina Pride</p>
                <p className="text-muted mb-0 user-msg">
                  <small>Hi, How are you? What about our next meeting</small>
                </p>
              </a>
              {/* item */}
              <a href="#" className="dropdown-item notify-item">
                <div className="notify-icon bg-primary">
                  <i className="mdi mdi-comment-account-outline" />
                </div>
                <p className="notify-details">
                  Caleb Flakelar commented on Admin
                  <small className="text-muted">4 days ago</small>
                </p>
              </a>
              {/* item */}
              <a href="#" className="dropdown-item notify-item">
                <div className="notify-icon">
                  <Image src={usersAvatar4} className="img-fluid rounded-circle" alt="" />{" "}
                </div>
                <p className="notify-details">Karen Robinson</p>
                <p className="text-muted mb-0 user-msg">
                  <small>Wow ! this admin looks good and awesome design</small>
                </p>
              </a>
              {/* item */}
              <a href="#" className="dropdown-item notify-item">
                <div className="notify-icon bg-info">
                  <i className="mdi mdi-heart" />
                </div>
                <p className="notify-details">
                  Carlos Crouch liked
                  <b>Admin</b>
                  <small className="text-muted">13 days ago</small>
                </p>
              </a>
            </div>
            {/* All */}
            <a href="#" className="dropdown-item text-center text-primary notify-item notify-all">
              View All
            </a>
          </div>
        </li>
        <li className="dropdown notification-list d-none d-sm-inline-block">
          <a
            className="nav-link dropdown-toggle arrow-none"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <i className="dripicons-view-apps noti-icon" />
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">
            <div className="p-2">
              <div className="row g-0">
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <Image src={brandsSlack} alt="slack" />
                    <span>Slack</span>
                  </a>
                </div>
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <Image src={brandsGithub} alt="Github" />
                    <span>GitHub</span>
                  </a>
                </div>
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <Image src={brandsDribbble} alt="dribbble" />
                    <span>Dribbble</span>
                  </a>
                </div>
              </div>
              <div className="row g-0">
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <Image src={brandsBitbucket} alt="bitbucket" />
                    <span>Bitbucket</span>
                  </a>
                </div>
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <Image src={brandsDropbox} alt="dropbox" />
                    <span>Dropbox</span>
                  </a>
                </div>
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <Image src={brandsGsuite} alt="G Suite" />
                    <span>G Suite</span>
                  </a>
                </div>
              </div>{" "}
              {/* end row */}
            </div>
          </div>
        </li>
        <li className="notification-list">
          <a className="nav-link end-bar-toggle" href="#">
            <i className="dripicons-gear noti-icon" />
          </a>
        </li>
        <li className="dropdown notification-list">
          <a
            className="nav-link dropdown-toggle nav-user arrow-none me-0"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <span className="account-user-avatar">
              <Image src={usersAvatar1} alt="user-image" className="rounded-circle" />
            </span>
            <span>
              <span className="account-user-name">Dominic Keller</span>
              <span className="account-position">Founder</span>
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
            {/* item */}
            <div className=" dropdown-header noti-title">
              <h6 className="text-overflow m-0">Welcome !</h6>
            </div>
            {/* item */}
            <a href="#" className="dropdown-item notify-item">
              <i className="mdi mdi-account-circle me-1" />
              <span>My Account</span>
            </a>
            {/* item */}
            <a href="#" className="dropdown-item notify-item">
              <i className="mdi mdi-account-edit me-1" />
              <span>Settings</span>
            </a>
            {/* item */}
            <a href="#" className="dropdown-item notify-item">
              <i className="mdi mdi-lifebuoy me-1" />
              <span>Support</span>
            </a>
            {/* item */}
            <a href="#" className="dropdown-item notify-item">
              <i className="mdi mdi-lock-outline me-1" />
              <span>Lock Screen</span>
            </a>
            {/* item */}
            <a href="#" className="dropdown-item notify-item">
              <i className="mdi mdi-logout me-1" />
              <span>Logout</span>
            </a>
          </div>
        </li>
      </ul>
      <button type="button" className="button-menu-mobile open-left">
        <i className="mdi mdi-menu" />
      </button>
      <div className="app-search dropdown d-none d-lg-block">
        <form>
          <div className="input-group">
            <input
              type="text"
              className="form-control dropdown-toggle"
              placeholder="Search..."
              id="top-search"
            />
            <span className="mdi mdi-magnify search-icon" />
            <button className="input-group-text btn-primary" type="submit">
              Search
            </button>
          </div>
        </form>
        <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
          {/* item */}
          <div className="dropdown-header noti-title">
            <h5 className="text-overflow mb-2">
              Found <span className="text-danger">17</span> results
            </h5>
          </div>
          {/* item */}
          <a href="#" className="dropdown-item notify-item">
            <i className="uil-notes font-16 me-1" />
            <span>Analytics Report</span>
          </a>
          {/* item */}
          <a href="#" className="dropdown-item notify-item">
            <i className="uil-life-ring font-16 me-1" />
            <span>How can I help you?</span>
          </a>
          {/* item */}
          <a href="#" className="dropdown-item notify-item">
            <i className="uil-cog font-16 me-1" />
            <span>User profile settings</span>
          </a>
          {/* item */}
          <div className="dropdown-header noti-title">
            <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
          </div>
          <div className="notification-list">
            {/* item */}
            <a href="#" className="dropdown-item notify-item">
              <div className="d-flex">
                <Image
                  className="d-flex me-2 rounded-circle"
                  src={usersAvatar2}
                  alt="Generic placeholder image"
                  height={32}
                />
                <div className="w-100">
                  <h5 className="m-0 font-14">Erwin Brown</h5>
                  <span className="font-12 mb-0">UI Designer</span>
                </div>
              </div>
            </a>
            {/* item */}
            <a href="#" className="dropdown-item notify-item">
              <div className="d-flex">
                <Image
                  src={usersAvatar5}
                  className="d-flex me-2 rounded-circle"
                  alt="Generic placeholder image"
                  height={32}
                />
                <div className="w-100">
                  <h5 className="m-0 font-14">Jacob Deo</h5>
                  <span className="font-12 mb-0">Developer</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
