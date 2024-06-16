import React from 'react'
import './Customer.css'
import Search from '../../components/Search'

export default function Customer() {
  return (
    <main className="app-content">
      <div className="app-title">
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item active">
            <a href="#123">
              <b>Danh sách khách hàng</b>
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
                  <a
                    className="btn btn-add btn-sm"
                    href="form-add-nhan-vien.html"
                    title="Thêm"
                  >
                    <i className="fas fa-plus"></i>
                    Thêm mới khách hàng
                  </a>
                </div>
                
              </div>
              <Search />
              <table
                className="table table-hover table-bordered js-copytextarea"
                cellPadding="0"
                cellSpacing="0"
                border="0"
                id="sampleTable"
              >
                <thead>
                  <tr>
                    <th width="10">
                      <input type="checkbox" id="all" />
                    </th>
                    <th>ID khách hàng</th>
                    <th width="150">Họ và tên</th>
                    <th width="300">Địa chỉ</th>
                    <th>SĐT</th>
                    <th width="100">Tính năng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>#CD12837</td>
                    <td>Hồ Thị Thanh Ngân</td>
                    <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh </td>
                    <td>0926737168</td>
                    <td className="table-td-center">
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
                          <g fill="none" fillRule="evenodd">
                            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                            <path
                              fill="currentColor"
                              d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07A1.01 1.01 0 0 1 4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2zM9 10a1 1 0 0 0-.993.883L8 11v6a1 1 0 0 0 1.993.117L10 17v-6a1 1 0 0 0-1-1m6 0a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1m-.72-6H9.72l-.333 1h5.226z"
                            ></path>
                          </g>
                        </svg>
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                        id="show-emp"
                        data-toggle="modal"
                        data-target="#ModalUP"
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
  )
}
