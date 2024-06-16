import React from "react";
import Search from "../../components/Search";
import { Link } from "react-router-dom";

export default function Order() {
  return (
    <main className="app-content">
      <div className="app-title">
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item active">
            <a href="#">
              <b>Danh sách đơn hàng</b>
            </a>
          </li>
        </ul>
        <div id="clock"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <div className="tile-body">
              <div className="row element-button">
                <div className="col-sm-2">
                  <Link
                    className="btn btn-add btn-sm"
                    to="/order/add-order"
                    title="Thêm"
                  >
                    <i className="fas fa-plus"></i>
                    Tạo mới đơn hàng
                  </Link>
                </div>
                <div className="col-sm-2">
                  <a
                    className="btn btn-delete btn-sm nhap-tu-file"
                    type="button"
                    title="Nhập"
                   
                  >
                    <i className="fas fa-file-upload"></i> Tải từ file
                  </a>
                </div>

                <div className="col-sm-2">
                  <a
                    className="btn btn-delete btn-sm print-file"
                    type="button"
                    title="In"
                   
                  >
                    <i className="fas fa-print"></i> In dữ liệu
                  </a>
                </div>
                <div className="col-sm-2">
                  <a
                    className="btn btn-delete btn-sm print-file js-textareacopybtn"
                    type="button"
                    title="Sao chép"
                  >
                    <i className="fas fa-copy"></i> Sao chép
                  </a>
                </div>

                <div className="col-sm-2">
                  <a className="btn btn-excel btn-sm" href="" title="In">
                    <i className="fas fa-file-excel"></i> Xuất Excel
                  </a>
                </div>
                <div className="col-sm-2">
                  <a
                    className="btn btn-delete btn-sm pdf-file"
                    type="button"
                    title="In"
                   
                  >
                    <i className="fas fa-file-pdf"></i> Xuất PDF
                  </a>
                </div>
                <div className="col-sm-2">
                  <a
                    className="btn btn-delete btn-sm"
                    type="button"
                    title="Xóa"
                   
                  >
                    <i className="fas fa-trash-alt"></i> Xóa tất cả{" "}
                  </a>
                </div>
              </div>
              <Search />
              <table className="table table-hover table-bordered" id="sampleTable">
                <thead>
                  <tr>
                    <th width="10">
                      <input type="checkbox" id="all" />
                    </th>
                    <th>ID đơn hàng</th>
                    <th>Khách hàng</th>
                    <th>Đơn hàng</th>
                    <th>Số lượng</th>
                    <th>Tổng tiền</th>
                    <th>Tình trạng</th>
                    <th>Tính năng</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>MT9835</td>
                    <td>Đặng Hoàng Phúc</td>
                    <td>
                      Giường ngủ Jimmy, Bàn ăn mở rộng cao cấp Dolas, Ghế làm
                      việc Zuno
                    </td>
                    <td>3 </td>
                    <td>40.650.000 đ</td>
                    <td>
                      <span className="badge bg-success">Hoàn thành</span>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            width={"1em"}
                            height={"1em"}
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M8.106 2.553A1 1 0 0 1 9 2h6a1 1 0 0 1 .894.553L17.618 6H20a1 1 0 1 1 0 2h-1v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8H4a1 1 0 0 1 0-2h2.382zM14.382 4l1 2H8.618l1-2zM11 11a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="-0.5 -0.5 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m21.289.98l.59.59c.813.814.69 2.257-.277 3.223L9.435 16.96l-3.942 1.442c-.495.182-.977-.054-1.075-.525a.928.928 0 0 1 .045-.51l1.47-3.976L18.066 1.257c.967-.966 2.41-1.09 3.223-.276zM8.904 2.19a1 1 0 1 1 0 2h-4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a1 1 0 0 1 2 0v4a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4z"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>ER3835</td>
                    <td>Nguyễn Thị Mỹ Yến</td>
                    <td>Bàn ăn mở rộng Gepa</td>
                    <td>1 </td>
                    <td>16.770.000 đ</td>
                    <td>
                      <span className="badge bg-info">Chờ thanh toán</span>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            width={"1em"}
                            height={"1em"}
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M8.106 2.553A1 1 0 0 1 9 2h6a1 1 0 0 1 .894.553L17.618 6H20a1 1 0 1 1 0 2h-1v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8H4a1 1 0 0 1 0-2h2.382zM14.382 4l1 2H8.618l1-2zM11 11a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="-0.5 -0.5 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m21.289.98l.59.59c.813.814.69 2.257-.277 3.223L9.435 16.96l-3.942 1.442c-.495.182-.977-.054-1.075-.525a.928.928 0 0 1 .045-.51l1.47-3.976L18.066 1.257c.967-.966 2.41-1.09 3.223-.276zM8.904 2.19a1 1 0 1 1 0 2h-4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a1 1 0 0 1 2 0v4a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4z"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>AL3947</td>
                    <td>Phạm Thị Ngọc</td>
                    <td>Bàn ăn Vitali mặt đá, Ghế ăn gỗ Lucy màu trắng</td>
                    <td>2 </td>
                    <td>19.770.000 đ</td>
                    <td>
                      <span className="badge bg-warning">Đang giao hàng</span>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            width={"1em"}
                            height={"1em"}
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M8.106 2.553A1 1 0 0 1 9 2h6a1 1 0 0 1 .894.553L17.618 6H20a1 1 0 1 1 0 2h-1v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8H4a1 1 0 0 1 0-2h2.382zM14.382 4l1 2H8.618l1-2zM11 11a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="-0.5 -0.5 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m21.289.98l.59.59c.813.814.69 2.257-.277 3.223L9.435 16.96l-3.942 1.442c-.495.182-.977-.054-1.075-.525a.928.928 0 0 1 .045-.51l1.47-3.976L18.066 1.257c.967-.966 2.41-1.09 3.223-.276zM8.904 2.19a1 1 0 1 1 0 2h-4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a1 1 0 0 1 2 0v4a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4z"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>QY8723</td>
                    <td>Ngô Thái An</td>
                    <td>Giường ngủ Kara 1.6x2m</td>
                    <td>1 </td>
                    <td>14.500.000 đ</td>
                    <td>
                      <span className="badge bg-danger">Đã hủy</span>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            width={"1em"}
                            height={"1em"}
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M8.106 2.553A1 1 0 0 1 9 2h6a1 1 0 0 1 .894.553L17.618 6H20a1 1 0 1 1 0 2h-1v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8H4a1 1 0 0 1 0-2h2.382zM14.382 4l1 2H8.618l1-2zM11 11a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="-0.5 -0.5 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m21.289.98l.59.59c.813.814.69 2.257-.277 3.223L9.435 16.96l-3.942 1.442c-.495.182-.977-.054-1.075-.525a.928.928 0 0 1 .045-.51l1.47-3.976L18.066 1.257c.967-.966 2.41-1.09 3.223-.276zM8.904 2.19a1 1 0 1 1 0 2h-4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a1 1 0 0 1 2 0v4a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4z"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
