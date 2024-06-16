import React from 'react'
import './addOrder.css'
import { Link } from 'react-router-dom'

export default function addOrder() {
  return (
    <main class="app-content">
      <div class="app-title">
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item">
            <Link to='/order'>Danh sách đơn hàng</Link>
          </li>
          <li class="breadcrumb-item">Thêm đơn hàng</li>
        </ul>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="tile">
            <h3 class="tile-title">Tạo mới đơn hàng</h3>
            <div class="tile-body">
              <form class="row">
                <div class="form-group  col-md-4">
                  <label class="control-label">ID đơn hàng</label>
                  <input class="form-control" type="text"/>
                </div>
                <div class="form-group  col-md-4">
                  <label class="control-label">Tên khách hàng</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="form-group  col-md-4">
                  <label class="control-label">Số điện thoại khách hàng</label>
                  <input class="form-control" type="number" />
                </div>
                <div class="form-group  col-md-4">
                  <label class="control-label">Địa chỉ</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="form-group  col-md-4">
                  <label class="control-label">Ngày làm đơn hàng</label>
                  <input class="form-control" type="date" />
                </div>
                <div class="form-group  col-md-4">
                  <label class="control-label">Số lượng</label>
                  <input class="form-control" type="number"/>
                </div>
                {/* <div class="form-group col-md-4">
                  <label for="exampleSelect1" class="control-label">Tình trạng</label>
                  <select class="form-control" id="exampleSelect1">
                    <option>-- Chọn tình trạng --</option>
                    <option>Đã xử lý</option>
                    <option>Đang chờ</option>
                    <option>Đã hủy</option>
                  </select>
                </div> */}
                <div class="form-group  col-md-4">
                  <label class="control-label">Ghi chú đơn hàng</label>
                  <textarea class="form-control" rows="4" ></textarea>
                </div> 
                </form> 
          </div>
          <button class="btn btn-save" type="button">Lưu lại</button>
          <Link class="btn btn-cancel" to="/order">Hủy bỏ</Link>
        </div>
        </div>
        </div>
    </main>
  )
}
