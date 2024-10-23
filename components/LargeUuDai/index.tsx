"use client"
import React from 'react'
import useModalStore from '../../store/store';
export default function LargeUuDai() {
    const {  toggleModal } = useModalStore();
    return (
        <>
            <div className="banner-services">
                <img src="/BANNER-VOUCHERS.png" />
            </div>
            <div className="single-campaign-wrapper">
                <div className="container">
                    <div className="wrapper single-div single-campaign-div">

                        <div className="row">
                            <div className="col-8">



                                <div className="entry">
                                    <h1 className="single-title" style={{margin:" 0 !important",color:"darkred",fontWeight:"bold"}}>Ưu đãi
                                        từ Massage Queen</h1>
                                </div>
                                <div className="campaign-list-coupon">

                                    <ul>
                                        <li>
                                            <div className="d-flex justify-content-between">
                                                <div className="campaign-coupon-left">
                                                    <h5>Giảm lên tới 20% cho Vé VIP</h5>
                                                    <div className="campaign-coupon-condition">
                                                        <i className="fas fa-ticket-alt"></i>
                                                        <span className="grey">Áp dụng cho: </span>
                                                        <span>VIP ROOM</span>
                                                    </div>
                                                    <div className="campaign-coupon-condition">
                                                        <i className="far fa-calendar-alt"></i>
                                                        <span className="grey">Thời gian áp dụng: </span>
                                                        <span> - </span>
                                                    </div>
                                                    <div className="campaign-coupon-condition">
                                                        <i className="fas fa-exclamation-circle"></i>
                                                        <span className="grey">Điều kiện: </span>
                                                        <div className="rule-box">
                                                            <div className='rule-item'>Khung giờ vàng từ 10h cho tới 14h mỗi ngày
                                                            </div>
                                                            <div className='rule-item'>Khung giờ vàng từ 17h cho tới 20h mỗi ngày
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="campaign-coupon-right">
                                                    <div className="campaign-coupon-code">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="linehight1">
                                                                <span className="grey">Nhập code</span>
                                                                <p>KTSUPKING</p>
                                                            </div>
                                                            <div>
                                                                <a data-code="KTSUPKING"
                                                                  
                                                                    className="copy-code" data-toggle="tooltip"
                                                                    data-placement="bottom" title="Copy Code">
                                                                    <i className="far fa-clone"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a
                                                     href="#" onClick={(e) => { e.preventDefault(); toggleModal(); }}
                                                    
                                                        className="btn-red">Đặt ngay</a>
                                                    <span className="hidden-code">KTSUPKING</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex justify-content-between">
                                                <div className="campaign-coupon-left">
                                                    <h5>Giảm lên tới 20% cho VIP ROOM</h5>
                                                    <div className="campaign-coupon-condition">
                                                        <i className="fas fa-ticket-alt"></i>
                                                        <span className="grey">Áp dụng cho: </span>
                                                        <span>Vé VIP ROOM</span>
                                                    </div>
                                                    <div className="campaign-coupon-condition">
                                                        <i className="far fa-calendar-alt"></i>
                                                        <span className="grey">Thời gian áp dụng: </span>
                                                        <span> - </span>
                                                    </div>
                                                    <div className="campaign-coupon-condition">
                                                        <i className="fas fa-exclamation-circle"></i>
                                                        <span className="grey">Điều kiện: </span>
                                                        <div className="rule-box">
                                                            <div className='rule-item'>Khung giờ vàng từ 10h cho tới 14h mỗi ngày
                                                            </div>
                                                            <div className='rule-item'>Khung giờ vàng từ 17h cho tới 20h mỗi ngày
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="campaign-coupon-right">
                                                    <div className="campaign-coupon-code">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="linehight1">
                                                                <span className="grey">Nhập code</span>
                                                                <p>KTKING</p>
                                                            </div>
                                                            <div>
                                                                <a data-code="KTKING"
                                                                   
                                                                    className="copy-code" data-toggle="tooltip"
                                                                    data-placement="bottom" title="Copy Code">
                                                                    <i className="far fa-clone"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a  href="#" onClick={(e) => { e.preventDefault(); toggleModal(); }}
                                                        className="btn-red">Đặt ngay</a>
                                                    <span className="hidden-code">KTKING</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex justify-content-between">
                                                <div className="campaign-coupon-left">
                                                    <h5>Giảm lên tới 20% cho Vé QUEEN</h5>
                                                    <div className="campaign-coupon-condition">
                                                        <i className="fas fa-ticket-alt"></i>
                                                        <span className="grey">Áp dụng cho: </span>
                                                        <span>QUEEN ROOM</span>
                                                    </div>
                                                    <div className="campaign-coupon-condition">
                                                        <i className="far fa-calendar-alt"></i>
                                                        <span className="grey">Thời gian áp dụng: </span>
                                                        <span> - </span>
                                                    </div>
                                                    <div className="campaign-coupon-condition">
                                                        <i className="fas fa-exclamation-circle"></i>
                                                        <span className="grey">Điều kiện: </span>
                                                        <div className="rule-box">
                                                            <div className='rule-item'>Khung giờ vàng từ 10h cho tới 14h mỗi ngày
                                                            </div>
                                                            <div className='rule-item'>Khung giờ vàng từ 17h cho tới 20h mỗi ngày
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="campaign-coupon-right">
                                                    <div className="campaign-coupon-code">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="linehight1">
                                                                <span className="grey">Nhập code</span>
                                                                <p>KTSUPVIP</p>
                                                            </div>
                                                            <div>
                                                                <a data-code="KTSUPVIP"
                                                                 
                                                                    className="copy-code" data-toggle="tooltip"
                                                                    data-placement="bottom" title="Copy Code">
                                                                    <i className="far fa-clone"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a  href="#" onClick={(e) => { e.preventDefault(); toggleModal(); }}
                                                        className="btn-red">Đặt ngay</a>
                                                    <span className="hidden-code">KTSUPVIP</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex justify-content-between">
                                                <div className="campaign-coupon-left">
                                                    <h5>Giảm lên tới 20% cho Vé VIP ROOM</h5>
                                                    <div className="campaign-coupon-condition">
                                                        <i className="fas fa-ticket-alt"></i>
                                                        <span className="grey">Áp dụng cho: </span>
                                                        <span>VIP ROOM</span>
                                                    </div>
                                                    <div className="campaign-coupon-condition">
                                                        <i className="far fa-calendar-alt"></i>
                                                        <span className="grey">Thời gian áp dụng: </span>
                                                        <span> - </span>
                                                    </div>
                                                    <div className="campaign-coupon-condition">
                                                        <i className="fas fa-exclamation-circle"></i>
                                                        <span className="grey">Điều kiện: </span>
                                                        <div className="rule-box">
                                                            <div className='rule-item'>Khung giờ vàng từ 10h cho tới 14h mỗi ngày
                                                            </div>
                                                            <div className='rule-item'>Khung giờ vàng từ 17h cho tới 20h mỗi ngày
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="campaign-coupon-right">
                                                    <div className="campaign-coupon-code">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="linehight1">
                                                                <span className="grey">Nhập code</span>
                                                                <p>KTVIP</p>
                                                            </div>
                                                            <div>
                                                                <a data-code="KTVIP"
                                                                   
                                                                    className="copy-code" data-toggle="tooltip"
                                                                    data-placement="bottom" title="Copy Code">
                                                                    <i className="far fa-clone"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a  href="#" onClick={(e) => { e.preventDefault(); toggleModal(); }}
                                                        className="btn-red">Đặt ngay</a>
                                                    <span className="hidden-code">KTVIP</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="widget-item">
                                    <h2 className="blog-heading">Khuyến mãi khác</h2>
                                    <div className="most-post-list similar-campaign-div">
                                        <ul>
                                            <li>
                                                <a href="/dich-vu">
                                                    <img loading="lazy" src="/SALE-ALL-VIP.png"
                                                        alt="Giảm giá 20% Trải nghiệm Massage Queen" />
                                                </a>
                                                <a className="campaign-title" href="/dich-vu">
                                                    Giảm giá 20% Trải nghiệm Massage Queen </a>
                                            </li>
                                            <li>
                                                <a href="/dich-vu">
                                                    <img loading="lazy" src="/SALE-ALL-VIP.png"
                                                        alt="Giảm giá 20% Trải nghiệm Massage Queen" />
                                                </a>
                                                <a className="campaign-title" href="/dich-vu">
                                                    Giảm 20% giá Vé Vip </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/dich-vu">
                                                    <img loading="lazy" src="/SALE-ALL-VIP.png"
                                                        alt="Giảm giá 20% Trải nghiệm Massage Queen" />
                                                </a>
                                                <a className="campaign-title"
                                                    href="/dich-vu">
                                                    Giảm 20% giá Vé SUPER VIP </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img loading="lazy" src="/SALE-ALL-VOUCHER.png"
                                                        alt="Giảm giá 20% Trải nghiệm Massage Queen" />
                                                </a>
                                                <a className="campaign-title"
                                                    href="/dich-vu">
                                                    Giảm 20% giá Vé QUEEN ROOM</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="newsletter-wrap normal-wrap">
                <div className="container">
                    <div className="newsletter-form newsletter-box">
                        <h3>Nhận thông tin khuyến mãi</h3>
                        <p>Nhập email hoặc số điện thoại để theo dõi những chương trình khuyến mãi hấp dẫn của Massage Queen.</p>
                        <div className="error-noti"></div>
                        <div className="success-noti" style={{ display: "none" }}>
                            <p>Đăng ký thành công</p>
                        </div>
                        <div className="d-flex">
                            <input type="text" className="hk-input flex-fill" name="newsletter-email" id="newsletter-email"
                                placeholder="Nhập địa chỉ email" />
                            <button className="newsletter-btn flex-fill newsletter-send">Đăng ký</button>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>

        </>
    )
}
