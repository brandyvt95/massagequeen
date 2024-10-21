import React from 'react'
  /* var swiper = new Swiper(".mySwiperVoucher", {
    navigation: {
        nextEl: ".swiper-vouchers-checkid .swiper-button-next",
        prevEl: ".swiper-vouchers-checkid .swiper-button-prev",
    },
    pagination: {
        el: ".swiper-vouchers-checkid .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
}); */
export default function Vouchers() {
    return (
        <>
            <div className="promotions-wrap normal-wrap">
                <div className="container positionrelative swiper-vouchers-checkid">
                    <h2>
                        Ưu&nbsp;đãi Massage&nbsp;Queen
                        <a href="http://massagequeen.vn/khuyen-mai.php" className="view-all-btn">Xem tất cả</a>
                    </h2>
                    <p>Nhiều gói dịch vụ Massage tại Massage Queen, đem đến cho Quý Khách Hàng trải nghiệm thư giãn tuyệt vời</p>
                    <div className="swiper mySwiperVoucher">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="item">
                                    <a href="http://massagequeen.vn/khuyen-mai.php">
                                        <img loading="lazy" src="http://massagequeen.vn/asset/images/picture/SALE-ALL-VIP.png"
                                            alt="Giảm giá 20% Trải nghiệm Massage Queen" />
                                    </a>
                                    <div className="promotion-content">
                                        <div className="promotion-title">
                                            <h3><a>Giảm giá 20% Trải nghiệm Vé VIP</a></h3>
                                        </div>
                                        <div className="promotion-info">
                                            <a href="http://massagequeen.vn/khuyen-mai.php" className="btn-red">
                                                Lấy code giảm giá
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="item">
                                    <a href="http://massagequeen.vn/khuyen-mai.php">
                                        <img loading="lazy" src="http://massagequeen.vn/asset/images/picture/SALE-ALL-VIPROOM.png"
                                            alt="Giảm giá 20% Trải nghiệm Massage Queen" />
                                    </a>
                                    <div className="promotion-content">
                                        <div className="promotion-title">
                                            <h3><a>Giảm giá 20% Trải nghiệm Vé QUEEN</a></h3>
                                        </div>
                                        <div className="promotion-info">
                                            <a href="http://massagequeen.vn/khuyen-mai.php" className="btn-red">
                                                Lấy code giảm giá
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="item">
                                    <a href="http://massagequeen.vn/khuyen-mai.php">
                                        <img loading="lazy" src="http://massagequeen.vn/asset/images/picture/SALE-ALL-VOUCHER.png"
                                            alt="Giảm giá 20% Trải nghiệm Massage Queen" />
                                    </a>
                                    <div className="promotion-content">
                                        <div className="promotion-title">
                                            <h3><a>Giảm giá 20% Trải nghiệm Vé SUPER QUEEN</a></h3>
                                        </div>
                                        <div className="promotion-info">
                                            <a href="http://massagequeen.vn/khuyen-mai.php" className="btn-red">
                                                Lấy code giảm giá
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="item">
                                    <a href="http://massagequeen.vn/khuyen-mai.php">
                                        <img loading="lazy" src="http://massagequeen.vn/asset/images/picture/SALE-ALL-VIP.png"
                                            alt="Giảm giá 20% Trải nghiệm Massage Queen" />
                                    </a>
                                    <div className="promotion-content">
                                        <div className="promotion-title">
                                            <h3><a>Giảm giá 20% Trải nghiệm Vé QUEEN ROOM</a></h3>
                                        </div>
                                        <div className="promotion-info">
                                            <a href="http://massagequeen.vn/khuyen-mai.php" className="btn-red">
                                                Lấy code giảm giá
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="item">
                                    <a href="http://massagequeen.vn/khuyen-mai.php">
                                        <img loading="lazy" src="http://massagequeen.vn/asset/images/picture/SALE-ALL-VIP.png"
                                            alt="Giảm giá 20% Trải nghiệm Massage Queen" />
                                    </a>
                                    <div className="promotion-content">
                                        <div className="promotion-title">
                                            <h3><a>Giảm 30% giá vé Massage Super Queen</a></h3>
                                        </div>
                                        <div className="promotion-info">
                                            <a href="http://massagequeen.vn/khuyen-mai.php" className="btn-red">
                                                Lấy code giảm giá
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </div>
        </>
    )
}
