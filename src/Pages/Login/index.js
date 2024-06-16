import React from 'react'
import './Login.css'

export default function Login() {
  return (
    
    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100">
                <div class="login100-pic js-tilt" data-tilt>
                    <img src={require('../../assets/img/team.jpg')} alt="IMG" />
                </div>
                
                <form class="login100-form validate-form">
                    <span class="login100-form-title">
                        <b>ĐĂNG NHẬP HỆ THỐNG POS</b>
                    </span>
                    
                    <form action="">
                        <div class="wrap-input100 validate-input">
                            <input class="input100" type="text" placeholder="Tài khoản quản trị" name="username"
                                id="username"/>
                            <span class="focus-input100"></span>
                            <span class="symbol-input100 bx">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"></path></svg>
                                
                            </span>
                            
                        </div>
                        <div class="wrap-input100 validate-input">
                            <input autocomplete="off" class="input100" type="password" placeholder="Mật khẩu"
                                name="current-password" id="password-field" />
                            <span toggle="#password-field" class="bx fa-fw bx-hide field-icon click-eye"></span>
                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 13.23q-.517 0-.874-.356q-.357-.357-.357-.874t.357-.874q.357-.357.874-.357t.874.357q.357.357.357.874t-.357.874q-.357.357-.874.357M7 17q-2.077 0-3.538-1.462Q2 14.077 2 12t1.462-3.538Q4.923 7 7 7q1.54 0 2.778.835q1.237.834 1.807 2.165h9.203l2 2l-3.192 3.154l-1.711-1.289l-1.808 1.327L14.298 14h-2.713q-.57 1.312-1.807 2.156Q8.54 17 7 17m0-1q1.477 0 2.52-.888q1.043-.889 1.336-2.112h3.76l1.43.967l1.858-1.332l1.621 1.22L21.381 12l-1-1h-9.525q-.293-1.223-1.336-2.112Q8.477 8 7 8Q5.35 8 4.175 9.175T3 12q0 1.65 1.175 2.825T7 16"></path></svg>
                            </span>
                        </div>

                       
                        <div class="container-login100-form-btn">
                            <input type="button" value="Đăng nhập" id="submit" onclick="validate()" />
                          
                        </div>
                        <div class="text-right p-t-12">
                            <a class="txt2" href="/forgot.html">
                                Bạn quên mật khẩu?
                            </a>
                        </div>
                    </form>
                </form>
                
                   
                <div class="text-center p-t-70 txt2">
                        <h3>Phần mềm quản lý bán hàng</h3>
                        </div>
            </div>
        </div>
    </div>
  )
}
