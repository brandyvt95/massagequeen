"use client"
import {useEffect} from 'react'
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function SliderService() {
    useEffect(() => {
        new Swiper(".mySwiperServices", {
            navigation: {
                nextEl: ".swiper-services-checkid .swiper-button-next",
                prevEl: ".swiper-services-checkid .swiper-button-prev",
            },
            pagination: {
                el: ".swiper-services-checkid .swiper-pagination",
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
        });
    }, []);
  return (
    <>
    <div className="service-details-index bg-flower-add ">
    <div className="services-wrap normal-wrap ">
        <div className="container positionrelative swiper-services-checkid">
            <h2>Các&nbsp;gói&nbsp;dịch&nbsp;vụ nổi&nbsp;bật

                <a href="./dich-vu" className="view-all-btn">Xem tất cả</a>
            </h2>
            <div className="swiper mySwiperServices">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="box-item">
                            <h4>Vé Vip</h4>
                            <p className="box-price"> 500.000 VND</p>
                            <div className="box-note">Giá vé chưa bao gồm tiền tip (tip = tick)</div>
                            <div className="box-time">Thời gian: 70 phút</div>
                            <div className="box-readmore"> <a href="/dich-vu/massage-vip">Xem chi
                                    tiết</a> </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="box-item">
                            <h4>Vé SUPER VIP 01</h4>
                            <p className="box-price"> 800.000 VND</p>
                            <div className="box-note">Giá vé chưa bao gồm tiền tip (tip = tick)</div>
                            <div className="box-time">Thời gian: 80 phút</div>
                            <div className="box-readmore"> <a
                                    href="/dich-vu/massage-super-vip-01">Xem chi tiết</a>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="box-item">
                            <h4>Vé SUPER VIP 02</h4>
                            <p className="box-price"> 1.000.000 VND</p>
                            <div className="box-note">Giá vé chưa bao gồm tiền tip (tip = tick)</div>
                            <div className="box-time">Thời gian: 90 phút</div>
                            <div className="box-readmore"> <a
                                    href="/dich-vu/massage-super-vip-02">Xem chi tiết</a>
                            </div>
                        </div>
                    </div>
                     <div className="swiper-slide">
                        <div className="box-item">
                            <h4>Vé SUPER VIP 03</h4>
                            <p className="box-price"> 1.200.000 VND</p>
                            <div className="box-note">Giá vé chưa bao gồm tiền tip (tip = tick)</div>
                            <div className="box-time">Thời gian: 100 phút</div>
                            <div className="box-readmore"> <a
                                    href="/dich-vu/massage-super-vip-03">Xem chi tiết</a>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="box-item">
                            <h4>Vé SUPER VIP 04</h4>
                            <p className="box-price"> 1.500.000 VND</p>
                            <div className="box-note">Giá vé chưa bao gồm tiền tip (tip = tick)</div>
                            <div className="box-time">Thời gian: 120 phút</div>
                            <div className="box-readmore"> <a
                                    href="/dich-vu/massage-super-vip-04">Xem chi tiết</a>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="box-item">
                            <h4>Vé SUPER VIP QUEEN</h4>
                            <p className="box-price"> 2.000.000 VND</p>
                            <div className="box-note">Giá vé chưa bao gồm tiền tip (tip = tick)</div>
                            <div className="box-time">Thời gian: 140 phút</div>
                            <div className="box-readmore"> <a
                                    href="/dich-vu/massage-super-queen">Xem chi tiết</a>
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
    </div>
    
    </>
  )
}
