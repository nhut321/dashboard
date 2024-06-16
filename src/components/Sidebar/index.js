import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
      <div className="app-sidebar">
        <div className="app-sidebar__user">
          <img
            className="app-sidebar__user-avatar"
            src={require("../../assets/img/team.jpg")}
            width="50px"
            alt="avatar"
          />
          <div>
            <p className="app-sidebar__user-name">
              <b>Võ Trường</b>
            </p>
            <p className="app-sidebar__user-designation">Chào mừng bạn trở lại</p>
          </div>
        </div>
        <hr />
        <ul className="app-menu">
          <li>
            <Link className="app-menu__item haha" to="#">
              <svg
                className="app-menu__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
                ></path>
              </svg>
              <span className="app-menu__label">POS Bán Hàng</span>
            </Link>
          </li>
          <li>
            <Link className="app-menu__item active" to="/panel">
              <svg
                className="app-menu__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 36 36"
              >
                <path
                  fill="currentColor"
                  d="m25.18 12.32l-5.91 5.81a3 3 0 1 0 1.41 1.42l5.92-5.81Z"
                  className="clr-i-outline clr-i-outline-path-1"
                ></path>
                <path
                  fill="currentColor"
                  d="M18 4.25A16.49 16.49 0 0 0 5.4 31.4l.3.35h24.6l.3-.35A16.49 16.49 0 0 0 18 4.25m11.34 25.5H6.66a14.43 14.43 0 0 1-3.11-7.84H7v-2H3.55A14.41 14.41 0 0 1 7 11.29l2.45 2.45l1.41-1.41l-2.43-2.46A14.41 14.41 0 0 1 17 6.29v3.5h2V6.3a14.47 14.47 0 0 1 13.4 13.61h-3.48v2h3.53a14.43 14.43 0 0 1-3.11 7.84"
                  className="clr-i-outline clr-i-outline-path-2"
                ></path>
                <path fill="none" d="M0 0h36v36H0z"></path>
              </svg>
              <span className="app-menu__label">Bảng điều khiển</span>
            </Link>
          </li>
          <li>
            <Link className="app-menu__item " to="/personal">
              <svg
                className="app-menu__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M9 6.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M7.75 9a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0M9 12.25c-1.196 0-2.315.24-3.164.665c-.803.402-1.586 1.096-1.586 2.085v.063c-.002.51-.004 1.37.81 1.959c.378.273.877.448 1.495.559c.623.112 1.422.169 2.445.169s1.822-.057 2.445-.169c.618-.111 1.117-.286 1.495-.56c.814-.589.812-1.448.81-1.959V15c0-.99-.783-1.683-1.586-2.085c-.849-.424-1.968-.665-3.164-.665M5.75 15c0-.115.113-.421.757-.743c.6-.3 1.48-.507 2.493-.507s1.894.207 2.493.507c.644.322.757.628.757.743c0 .604-.039.697-.19.807c-.122.088-.373.206-.88.298c-.502.09-1.203.145-2.18.145c-.977 0-1.678-.055-2.18-.145c-.507-.092-.758-.21-.88-.298c-.152-.11-.19-.203-.19-.807"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="currentColor"
                  d="M19 12.75a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5zM19.75 9a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75M19 15.75a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5z"
                ></path>
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M9.944 3.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.945c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M5.71 4.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.423-.423.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008c-.423-.423-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="app-menu__label">Quản lý nhân viên</span>
            </Link>
          </li>
          <li>
            <Link className="app-menu__item" to="/customer">
              <svg
                className="app-menu__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 14 14"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.284 3.503a1.621 1.621 0 1 0 3.242 0a1.621 1.621 0 1 0-3.242 0"></path>
                  <path d="M8.473 8.367v-.81a2.432 2.432 0 0 1 4.865 0v.81M6.6 8.369h6.738M3.604 5.612a1.712 1.712 0 1 0 0-3.425a1.712 1.712 0 0 0 0 3.425"></path>
                  <path d="M6.6 8.609a2.996 2.996 0 1 0-5.993 0v1.284h1.285l.428 3.424h2.568l.428-3.424H6.6z"></path>
                </g>
              </svg>
              <span className="app-menu__label">Quản lý khách hàng</span>
            </Link>
          </li>
          <li>
            <Link className="app-menu__item" to="/warehouse">
              <svg
                className="app-menu__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
              >
                <defs>
                  <mask id="ipTGreenHouse0">
                    <g
                      fill="none"
                      stroke="#fff"
                      strokeLinejoin="round"
                      strokeWidth={4}
                    >
                      <path d="M42 20v24H6V20L24 4z"></path>
                      <path
                        strokeLinecap="round"
                        d="M6 24h36M13 14v30m22-30v30"
                      ></path>
                      <path
                        fill="#555"
                        strokeLinecap="round"
                        d="M20 32h8v12h-8z"
                      ></path>
                    </g>
                  </mask>
                </defs>
                <path
                  fill="currentColor"
                  d="M0 0h48v48H0z"
                  mask="url(#ipTGreenHouse0)"
                ></path>
              </svg>
              <span className="app-menu__label">Quản lý kho</span>
            </Link>
          </li>
          <li>
            <Link className="app-menu__item" to="/order">
              <svg
                className="app-menu__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7M8 9.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
                ></path>
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M9.945 1.25c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337v8.11c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h4.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982c.602-.602.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-8.11c0-1.367 0-2.47-.116-3.337c-.122-.9-.38-1.658-.982-2.26c-.602-.602-1.36-.86-2.26-.981c-.867-.117-1.97-.117-3.337-.117zM5.41 3.409c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103h4c1.435 0 2.436.002 3.192.103c.734.099 1.122.28 1.399.556c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191v7.25H7.782c-.818 0-1.376 0-1.855.128a3.748 3.748 0 0 0-1.177.548V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399m-.632 14.84c.015.354.039.665.076.943c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h4c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.083-.615.099-1.395.102-2.441H7.898c-.978 0-1.32.006-1.583.077a2.25 2.25 0 0 0-1.538 1.422"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="app-menu__label">Quản lý đơn hàng</span>
            </Link>
          </li>
          {/* <li>
            <Link className="app-menu__item" to="table-data-banned.html">
              <i className="app-menu__icon bx bx-run"></i>
              <span className="app-menu__label">Quản lý nội bộ</span>
            </Link>
          </li>
          <li>
            <Link className="app-menu__item" to="table-data-money.html">
              <i className="app-menu__icon bx bx-dollar"></i>
              <span className="app-menu__label">Bảng kê lương</span>
            </Link>
          </li>
          <li>
            <Link className="app-menu__item" to="quan-ly-bao-cao.html">
              <i className="app-menu__icon bx bx-pie-chart-alt-2"></i>
              <span className="app-menu__label">Báo cáo doanh thu</span>
            </Link>
          </li>
          <li>
            <Link className="app-menu__item" to="page-calendar.html">
              <i className="app-menu__icon bx bx-calendar-check"></i>
              <span className="app-menu__label">Lịch công tác </span>
            </Link>
          </li> */}
          <li>
            <Link className="app-menu__item" to="#123">
              <svg
                className="app-menu__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
                ></path>
              </svg>
              <span className="app-menu__label">Cài đặt hệ thống</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
