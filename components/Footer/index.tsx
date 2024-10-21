import React from 'react'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-5">
                                <img style={{ width: '252px', height: 'auto' }} loading="lazy" className="logo-footer"
                                    src="http://massagequeen.vn/asset/images/picture/logo-queen-massage.png"
                                    alt="Massage Queen" />
                                <div className="footer-content mobile-hide">
                                    <p>CÔNG TY TNHH Massage Queen</p>
                                </div>
                                <ul className="company-info">
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i>
                                        <a><span>93 Trần Quang Khải, P Tân Định, Quận 1, TP.HCM</span></a>
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i>
                                        <a href="tel:088 821 6666"><span>088 821 6666</span></a>
                                    </li>
                                    <li>
                                        <i className="far fa-envelope"></i>
                                        <a href="mailto:contact@hoakieu.vn"><span>phamkim158@gmail.com</span></a>
                                    </li>
                                    <li>
                                        <i className="fas fa-paper-plane"></i>
                                        <a href="https://t.me/MassageQueen93TQK1">
                                            <span>Telegram: @massagequeen1</span>
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fas fa-paper-plane"></i>
                                        <a href="https://t.me/masgequeen9393tqkquan1">
                                            <span>Telegram: @massagequeen2</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4 mobile-hide">
                                <h4 className="footer-title">Gói dịch vụ</h4>
                                <div className="service-line"></div>
                                <ul className="service-footer">
                                    <li>
                                        <div className="media">
                                            <div className="media-body">
                                                <h5 className="mt-0"> <a href="http://massagequeen.vn/dich-vu/massage-vip.php">Vé VIP</a> </h5>
                                                <a>
                                                    <div className="service-footer-price"> 500K/70 phút </div>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="media">
                                            <div className="media-body">
                                                <h5 className="mt-0"> <a href="http://massagequeen.vn/dich-vu/massage-super-vip-01.php">Vé SUPER VIP 01</a> </h5>
                                                <a>
                                                    <div className="service-footer-price"> 800K/80 phút </div>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="media">
                                            <div className="media-body">
                                                <h5 className="mt-0"> <a href="http://massagequeen.vn/dich-vu/massage-super-vip-02.php">Vé SUPER VIP 02</a> </h5>
                                                <a href="#sdfsd">
                                                    <div className="service-footer-price"> 1.000K/90 phút </div>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="media">
                                            <div className="media-body">
                                                <h5 className="mt-0"> <a href="http://massagequeen.vn/dich-vu/massage-super-vip-03.php">Vé SUPER VIP 03</a> </h5>
                                                <a >
                                                    <div className="service-footer-price"> 1.200K/100 phút </div>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="media">
                                            <div className="media-body">
                                                <h5 className="mt-0"> <a href="http://massagequeen.vn/dich-vu/massage-super-vip-04.php">Vé SUPER VIP 04</a> </h5>
                                                <a href="#sdfsd">
                                                    <div className="service-footer-price"> 1.500K/120 phút </div>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="media">
                                            <div className="media-body">
                                                <h5 className="mt-0"> <a href="http://massagequeen.vn/dich-vu/massage-super-queen.php">Vé SUPER VIP QUEEN</a> </h5>
                                                <a href="#sdfsd">
                                                    <div className="service-footer-price"> 2.000K/140 phút </div>
                                                </a>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-3 kjabsd">
                                <h4 className="footer-title">Về chúng tôi</h4>
                                <div className="service-line"></div>
                                <iframe title="Bản đồ Massage Queen"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2514192917447!2d106.6907563153294!3d10.792045892310947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529c0e7ed3065%3A0x24394eed84176d9b!2sMassage%20Queen!5e0!3m2!1svi!2s!4v1666533649110!5m2!1svi!2s"
                                    width="320px" height="150px" style={{ border: 0 }} loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>

                                <h4 className="footer-title">Danh mục</h4>

                                <div className="service-line"></div>
                                <h5><a href="/">Trang chủ</a></h5>
                                <h5><a href="/dich-vu">Dịch vụ</a></h5>
                                <h5><a href="/khuyen-mai">Ưu đãi</a></h5>
                                <h5><a href="/tin-tuc">Chia sẻ</a></h5>
                                <h5><a data-toggle="modal" data-target=".modal-appointment" href="#sdfsd">Đặt phòng</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

         


        </>
    )
}
