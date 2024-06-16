import React, {useContext} from "react";
import "./CPanel.css";
import { MainContext } from "../../Context/MainContext";

export default function CPanel() {
  const mainContext = useContext(MainContext)
  return (
    <main className="app-content" onClick={mainContext.selectTab}>
      <div className="row">
        <div className="col-md-12">
          <div className="app-title">
            <ul className="app-breadcrumb breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">
                  <b>Bảng điều khiển</b>
                </a>
              </li>
            </ul>
            <div id="clock"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <div className="row">
            <div className="col-md-6">
              <div className="widget-small primary coloured-icon">
                <div>
                  <svg
                    className="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                      <circle cx={12} cy={8} r={2}></circle>
                      <path d="M15 13a3 3 0 1 0-6 0"></path>
                    </g>
                  </svg>
                </div>
                <div className="info">
                  <h4>Tổng khách hàng</h4>
                  <p>
                    <b>56 khách hàng</b>
                  </p>
                  <p className="info-tong">Tổng số khách hàng được quản lý.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="widget-small info coloured-icon">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 6c0-2.168-3.663-4-8-4S4 3.832 4 6v2c0 2.168 3.663 4 8 4s8-1.832 8-4zm-8 13c-4.337 0-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3c0 2.168-3.663 4-8 4"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M20 10c0 2.168-3.663 4-8 4s-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4z"
                  ></path>
                </svg>
                <div className="info">
                  <h4>Tổng sản phẩm</h4>
                  <p>
                    <b>1850 sản phẩm</b>
                  </p>
                  <p className="info-tong">Tổng số sản phẩm được quản lý.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="widget-small warning coloured-icon">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.25em"
                  height="1em"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32h16c8.8 0 16 7.2 16 16v288c0 44.2 35.8 80 80 80h18.7c-1.8 5-2.7 10.4-2.7 16c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16h197.4c-1.8 5-2.7 10.4-2.7 16c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H144c-8.8 0-16-7.2-16-16V80c0-44.2-35.8-80-80-80zm160 80v192c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-96v144c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L400 163.2l-39.1 26.1c-4.9 3.3-11.2 3.6-16.4.8s-8.5-8.2-8.5-14.1V32h-96c-26.5 0-48 21.5-48 48"
                  ></path>
                </svg>
                <div className="info">
                  <h4>Tổng đơn hàng</h4>
                  <p>
                    <b>247 đơn hàng</b>
                  </p>
                  <p className="info-tong">Tổng số hóa đơn bán hàng trong tháng.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="widget-small danger coloured-icon">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.12em"
                  height="1em"
                  viewBox="0 0 1856 1664"
                >
                  <path
                    fill="currentColor"
                    d="M1056 1375v-190q0-14-9.5-23.5t-22.5-9.5H832q-13 0-22.5 9.5T800 1185v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5m-2-374l18-459q0-12-10-19q-13-11-24-11H818q-11 0-24 11q-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5m-14-934l768 1408q35 63-2 126q-17 29-46.5 46t-63.5 17H160q-34 0-63.5-17T50 1601q-37-63-2-126L816 67q17-31 47-49t65-18t65 18t47 49"
                  ></path>
                </svg>
                <div className="info">
                  <h4>Sắp hết hàng</h4>
                  <p>
                    <b>4 sản phẩm</b>
                  </p>
                  <p className="info-tong">
                    Số sản phẩm cảnh báo hết cần nhập thêm.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="tile">
                <h3 className="tile-title">Tình trạng đơn hàng</h3>
                <div>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID đơn hàng</th>
                        <th>Tên khách hàng</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>AL3947</td>
                        <td>Phạm Thị Ngọc</td>
                        <td>19.770.000 đ</td>
                        <td>
                          <span className="badge bg-info">Chờ xử lý</span>
                        </td>
                      </tr>
                      <tr>
                        <td>ER3835</td>
                        <td>Nguyễn Thị Mỹ Yến</td>
                        <td>16.770.000 đ</td>
                        <td>
                          <span className="badge bg-warning">Đang vận chuyển</span>
                        </td>
                      </tr>
                      <tr>
                        <td>MD0837</td>
                        <td>Triệu Thanh Phú</td>
                        <td>9.400.000 đ</td>
                        <td>
                          <span className="badge bg-success">Đã hoàn thành</span>
                        </td>
                      </tr>
                      <tr>
                        <td>MT9835</td>
                        <td>Đặng Hoàng Phúc </td>
                        <td>40.650.000 đ</td>
                        <td>
                          <span className="badge bg-danger">Đã hủy </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="tile">
                <h3 className="tile-title">Khách hàng mới</h3>
                <div>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Tên khách hàng</th>
                        <th>Ngày sinh</th>
                        <th>Số điện thoại</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#183</td>
                        <td>Hột vịt muối</td>
                        <td>21/7/1992</td>
                        <td>
                          <span className="tag tag-success">0921387221</span>
                        </td>
                      </tr>
                      <tr>
                        <td>#219</td>
                        <td>Bánh tráng trộn</td>
                        <td>30/4/1975</td>
                        <td>
                          <span className="tag tag-warning">0912376352</span>
                        </td>
                      </tr>
                      <tr>
                        <td>#627</td>
                        <td>Cút rang bơ</td>
                        <td>12/3/1999</td>
                        <td>
                          <span className="tag tag-primary">01287326654</span>
                        </td>
                      </tr>
                      <tr>
                        <td>#175</td>
                        <td>Hủ tiếu nam vang</td>
                        <td>4/12/20000</td>
                        <td>
                          <span className="tag tag-danger">0912376763</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center" style={{ fontSize: "13px" }}>
        <p>
          <b>
            Copyright
            <script type="text/javascript">
              document.write(new Date().getFullYear());
            </script>{" "}
            Phần mềm quản lý bán hàng | Dev By Trường
          </b>
        </p>
      </div>
    </main>
  );
}
