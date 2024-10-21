import React from 'react'

export default function Booking() {
  return (
    <div className="appointments-wrap normal-wrap">
    <div className="container--ct-1200px positionrelative form-custom-wp">

        <img className="bgof-appointments-form" src="http://massagequeen.vn/asset/images/bg-modal-ct.png" alt=""/>

        <div className="appointments-form" data-wow-delay="0.4s" style={{background:"unset !important"}}>
            <h2>Đặt&nbsp;Phòng</h2>
            <p>Chúc Quý Khách Hàng có những trải nghiệm thư giãn tuyệt vời</p>
            <div className="d-flex justify-content-between appointments-div defend-style-sdgh">
                <div className="calendar-dropdown-wrap flex-fill ">
                    <span className="span-booking-date-meterial custom-input-dgfh hovaten-input-style-defend">
                        <img src="http://massagequeen.vn/asset/hovaten-form.png"
                            alt="calendar-dropdown-icon"/>
                        <input type="text" className="hk-input flex-fill"
                            placeholder="Họ tên" id="value-nameclient"/>
                    </span>
                </div>
                <div className="calendar-dropdown-wrap flex-fill">
                    <span className="span-booking-date-meterial custom-input-dgfh contact-input-style-defend">
                        <img src="http://massagequeen.vn/asset/contact-form.png"
                            alt="calendar-dropdown-icon"/>
                        <input type="text" className="hk-input flex-fill"
                            placeholder="Thông tin liên hệ" id="value-contactclient"/>
                    </span>
                </div>
            </div>
            <div className="d-flex justify-content-between appointments-div ">
               
                <div className="calendar-dropdown-wrap flex-fill" id="custom-action1354">
                    <span className="span-booking-date-meterial">
                        <img src="http://massagequeen.vn/asset/images/calendar-dropdown-icon.svg"
                            alt="calendar-dropdown-icon"/>
                        <input type="text" className="hk-input flex-fill" id="booking-date-meterial" name="booking-date"
                            placeholder="Chọn ngày đến"/>
                        <i className="fas fa-chevron-down"></i>
                    </span>
                </div>
                <div className="service-dropdown-wrap flex-fill">
                    <div className="service-dropdown-wrap-selected dropdown-selected">
                        <img src="http://massagequeen.vn/asset/images/service-dropdown-icon.svg"
                            alt="service-dropdown-icon"/>
                        <span id="value-typeservices">Chọn gói dịch vụ</span>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <input type="hidden" name="booking-service"/>
                    <div className="dropdown-content" id="customSelectsdfghb">
                        <div className="dropdoen-content-bg">
                        <ul>
                            <li className="custom-title-onListSerPick">
                                <p className="custom-title-onListSerPick--childtit">VÉ VIP</p>
                            </li>
                            <li >
                                <span className="small-title">Vé VIP</span>
                                <span className="float-right small-info">
                                    <span className="green">590K</span><span>/70 phút</span>
                                </span>
                            </li>
                            <li >
                                <span className="small-title">Vé SUPER 01</span>
                                <span className="float-right small-info">
                                    <span className="green">800K</span><span>/80 phút</span>
                                </span>
                            </li>
                            <li >
                                <span className="small-title">Vé SUPER 02</span>
                                <span className="float-right small-info">
                                    <span className="green">1.000K</span><span>/90 phút</span>
                                </span>
                            </li>
                            <li>
                                <span className="small-title">Vé SUPER 03</span>
                                <span className="float-right small-info">
                                    <span className="green">1.200K</span><span>/100 phút</span>
                                </span>
                            </li>
                            <li >
                                <span className="small-title">Vé SUPER 04</span>
                                <span className="float-right small-info">
                                    <span className="green">1.500K</span><span>/120 phút</span>
                                </span>
                            </li>
                            <li >
                                <span className="small-title">Vé QUEEN</span>
                                <span className="float-right small-info">
                                    <span className="green">2.000K</span><span>/140 phút</span>
                                </span>
                            </li>
                                        </ul>
                      
                        <a className="btn-close-dropdown-content" id="close-dropdown-content">
                            <img src="http://massagequeen.vn/asset/images/close.png"/>
                        </a>
                        </div>
                      
                    </div>
                </div>

            </div>
            <button className="booking-send flex-fill">Đặt phòng</button>
        </div>
    </div>
</div>
  )
}
