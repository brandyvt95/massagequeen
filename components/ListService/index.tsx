import React from 'react'

export default function ListService() {
    return (
        <>
            <div className="service-content-main">
                <h1 className="h1-services-cat">Các gói dịch vụ</h1>
                <ul className='ul-list-content-main'>
                    <li className="li-item-content-main"
                        style={{ background: "url('http://massagequeen.vn/asset/images/post_type/services/services_bg_king.jpg') no-repeat top center" }}>
                        <div className="box-item-inner">
                            <div className="box-img">
                                <img src="http://massagequeen.vn/asset/images/picture/room01.jpg" alt="VIP" />
                            </div>
                            <div className="box-content">
                                <h2 className="box-title">Gói massage <span>Vip</span></h2>
                                <div className="box-price"> 500,000 VND</div>
                                <div className="box-note">Giá vé chưa bao gồm tiền tip (tip = tick)</div>
                                <div className="box-time">Thời gian: 70 phút</div>
                                <div className="box-readmore"> <a href="/dich-vu/massage-vip">Xem chi tiết</a></div>
                            </div>
                        </div>
                    </li>
                    <li className="li-item-content-main"
                        style={{background:"url('http://massagequeen.vn/asset/images/post_type/services/services_bg_king.jpg') no-repeat top center"}}>
                        <div className="box-item-inner">
                            <div className="box-img">
                                <img src="http://massagequeen.vn/asset/images/picture/phong01.jpg" alt="Super Vip" />
                            </div>
                            <div className="box-content">
                                <h2 className="box-title">Gói massage <span>Super Vip 01</span></h2>
                                <div className="box-price"> 800,000 VND</div>
                                <div className="box-note">Giá vé chưa bao gồm tiền tip (tip = tick)</div>
                                <div className="box-time">Thời gian: 80 phút</div>
                                <div className="box-readmore"> <a href="/dich-vu/massage-super-vip-01">Xem chi tiết</a></div>
                            </div>
                        </div>
                    </li>
                    <li className="li-item-content-main"
                        style={{ background: "url('http://massagequeen.vn/asset/images/post_type/services/services_bg_king.jpg') no-repeat top center" }}>
                        <div className="box-item-inner">
                            <div className="box-img">
                                <img src="http://massagequeen.vn/asset/images/picture/room02.jpg" alt="King" />
                            </div>
                            <div className="box-content">
                                <h2 className="box-title">Gói massage <span>Super Vip 02</span></h2>
                                <div className="box-price"> 1,000,000 VND</div>
                                <div className="box-note">Giá vé chưa bao gồm tiền tip (tip = tick)</div>
                                <div className="box-time">Thời gian: 90 phút</div>
                                <div className="box-readmore"> <a href="/dich-vu/massage-super-vip-02">Xem chi tiết</a></div>
                            </div>
                        </div>
                    </li>
                    <li className="li-item-content-main"
                        style={{ background: "url('http://massagequeen.vn/asset/images/post_type/services/services_bg_super_king.jpg') no-repeat top center" }}>
                        <div className="box-item-inner">
                            <div className="box-img">
                                <img src="http://massagequeen.vn/asset/images/picture/fb-oo1.jpg" alt="Super Queen" />
                            </div>
                            <div className="box-content">
                                <h2 className="box-title">Gói massage <span>Super Vip 03</span></h2>
                                <div className="box-price"> 1,200,000 VND</div>
                                <div className="box-note">Giá vé chưa bao gồm tiền tip (tip = tick)</div>
                                <div className="box-time">Thời gian: 100 phút</div>
                                <div className="box-readmore"> <a href="/dich-vu/massage-super-vip-03">Xem chi tiết</a></div>
                            </div>
                        </div>
                    </li>
                    <li className="li-item-content-main"
                        style={{ background: "url('http://massagequeen.vn/asset/images/post_type/services/services_bg_super_king.jpg') no-repeat top center" }}>
                        <div className="box-item-inner">
                            <div className="box-img">
                                <img src="http://massagequeen.vn/asset/images/picture/bg-booking.jpg" alt="Massage Lingam" />
                            </div>
                            <div className="box-content">
                                <h2 className="box-title">Gói massage <span>Super Vip 04</span></h2>
                                <div className="box-price"> 1,500,000 VND</div>
                                <div className="box-note">Giá vé chưa bao gồm tiền tip (tip = tick)</div>
                                <div className="box-time">Thời gian: 120 phút</div>
                                <div className="box-readmore"> <a href="/dich-vu/massage-super-vip-04">Xem chi tiết</a></div>
                            </div>
                        </div>
                    </li>
                    <li className="li-item-content-main"
                        style={{ background: "url('http://massagequeen.vn/asset/images/post_type/services/services_bg_super_king.jpg') no-repeat top center" }}>
                        <div className="box-item-inner">
                            <div className="box-img">
                                <img src="http://massagequeen.vn/asset/images/picture/bg-booking.jpg" alt="Massage Lingam" />
                            </div>
                            <div className="box-content">
                                <h2 className="box-title">Gói massage <span>Super Queen</span></h2>
                                <div className="box-price"> 2,000,000 VND</div>
                                <div className="box-note">Giá vé chưa bao gồm tiền tip (tip = tick)</div>
                                <div className="box-time">Thời gian: 140 phút</div>
                                <div className="box-readmore"> <a href="/dich-vu/massage-super-queen">Xem chi tiết</a></div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </>
    )
}
