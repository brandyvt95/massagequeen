"use client"
import {useEffect} from 'react'
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SliderNewfeed() {
    useEffect(() => {
        new Swiper(".mySwiperNewfeeds", {
            navigation: {
                nextEl: ".swiper-newfeeds-checkid .swiper-button-next",
                prevEl: ".swiper-newfeeds-checkid .swiper-button-prev",
            },
            pagination: {
                el: ".swiper-newfeeds-checkid .swiper-pagination",
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
    <div className="posts-wrap normal-wrap bg-flower-add ">
    <div className="container positionrelative swiper-newfeeds-checkid">
        <h2>
            Massage&nbsp;Queen chia&nbsp;sẻ
            <a href="/tin-tuc" className="view-all-btn">Xem tất cả</a>
        </h2>
        <div className="swiper mySwiperNewfeeds">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="post-item" data-wow-delay="1s" data-wow-duration="2s">
                        <a href="/tin-tuc">
                            <img className="w-100" loading="lazy"
                                src="http://massagequeen.vn/asset/images/post_type/post-share/01.jpg"
                                alt="Massage Queen Happy Day &#8211; 6 &#8211; 7 &#8211; CN ngất ngây"/>
                        </a>
                        <div className="post-content">
                            <h3><a href="index.html@p=2210.html">Massage Queen Happy Day &#8211; 6 &#8211; 7 &#8211; CN
                                    ngất
                                    ngây</a></h3>
                            <p> Massage Queen Happy Day là chương trình cosplay mới nhất và độc đáo nhất mà Massage
                                Queen vừa
                                cho ra
                                đời phục vụ quý ... </p>
                            <hr/>
                            <div className="post-other-info d-flex justify-content-between">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-calendar3" viewBox="0 0 16 16">
                                        <path
                                            d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                        <path
                                            d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                    <span>22/04/2022</span>
                                </div>

                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                        className="bi bi-person" viewBox="0 0 16 16">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    </svg>
                                    <span>
                                        By
                                        Massage Queen Team </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="post-item" data-wow-delay="0s" data-wow-duration="2s">
                        <a href="/tin-tuc">
                            <img className="w-100" loading="lazy"
                                src="http://massagequeen.vn/asset/images/post_type/post-share/02.jpg"
                                alt="Đi khung giờ vàng &#8211; gửi chàng 30% khuyến mãi giá vé"/>
                        </a>
                        <div className="post-content">
                            <h3><a href="index.html@p=2061.html">Đi khung giờ vàng &#8211; gửi chàng 30% khuyến mãi giá
                                    vé</a></h3>
                            <p> Quý anh em thân mến có biết, Massage Queen vừa tung khuyến mãi cực khủng: Giảm giá 30%
                                theo
                                khung
                                giờ cho quý an... </p>
                            <hr/>
                            <div className="post-other-info d-flex justify-content-between">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-calendar3" viewBox="0 0 16 16">
                                        <path
                                            d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                        <path
                                            d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                    <span>18/03/2022</span>
                                </div>

                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                        className="bi bi-person" viewBox="0 0 16 16">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    </svg>
                                    <span>
                                        By
                                        Massage Queen Team </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="post-item" data-wow-delay="1s" data-wow-duration="2s">
                        <a href="index.html@p=1947.html">
                            <img className="w-100" loading="lazy"
                                src="http://massagequeen.vn/asset/images/post_type/post-share/05.jpg"
                                alt="&#8220;Mãn nhãn&#8221; phong cách massage thư giãn cho chàng tại Massage Queen"/>
                        </a>
                        <div className="post-content">
                            <h3><a href="/tin-tuc">&#8220;Mãn nhãn&#8221; phong cách massage
                                    thư giãn
                                    cho
                                    chàng tại Massage Queen</a></h3>
                            <p> Massage thư giãn đã và đang đóng một vai trò quan trọn trong thời đại ngày nay &#8211;
                                thời
                                đại mà gia tốc ... </p>
                            <hr/>
                            <div className="post-other-info d-flex justify-content-between">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-calendar3" viewBox="0 0 16 16">
                                        <path
                                            d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                        <path
                                            d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                    <span>27/01/2022</span>
                                </div>

                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                        className="bi bi-person" viewBox="0 0 16 16">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    </svg>
                                    <span>
                                        By
                                        Massage Queen Team </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="post-item" data-wow-delay="1s" data-wow-duration="2s">
                        <a href="index.html@p=1947.html">
                            <img className="w-100" loading="lazy"
                                src="http://massagequeen.vn/asset/images/post_type/post-share/05.jpg"
                                alt="&#8220;Mãn nhãn&#8221; phong cách massage thư giãn cho chàng tại Massage Queen"/>
                        </a>
                        <div className="post-content">
                            <h3><a href="/tin-tuc">&#8220;Mãn nhãn&#8221; phong cách massage
                                    thư giãn
                                    cho
                                    chàng tại Massage Queen</a></h3>
                            <p> Massage thư giãn đã và đang đóng một vai trò quan trọn trong thời đại ngày nay &#8211;
                                thời
                                đại mà gia tốc ... </p>
                            <hr/>
                            <div className="post-other-info d-flex justify-content-between">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-calendar3" viewBox="0 0 16 16">
                                        <path
                                            d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                        <path
                                            d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                    <span>27/01/2022</span>
                                </div>

                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                        className="bi bi-person" viewBox="0 0 16 16">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    </svg>
                                    <span>
                                        By
                                        Massage Queen Team </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="post-item" data-wow-delay="1s" data-wow-duration="2s">
                        <a href="index.html@p=1947.html">
                            <img className="w-100" loading="lazy"
                                src="http://massagequeen.vn/asset/images/post_type/post-share/05.jpg"
                                alt="&#8220;Mãn nhãn&#8221; phong cách massage thư giãn cho chàng tại Massage Queen"/>
                        </a>
                        <div className="post-content">
                            <h3><a href="tin-tuc">&#8220;Mãn nhãn&#8221; phong cách massage
                                    thư giãn
                                    cho
                                    chàng tại Massage Queen</a></h3>
                            <p> Massage thư giãn đã và đang đóng một vai trò quan trọn trong thời đại ngày nay &#8211;
                                thời
                                đại mà gia tốc ... </p>
                            <hr/>
                            <div className="post-other-info d-flex justify-content-between">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-calendar3" viewBox="0 0 16 16">
                                        <path
                                            d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                        <path
                                            d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                    <span>27/01/2022</span>
                                </div>

                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                        className="bi bi-person" viewBox="0 0 16 16">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    </svg>
                                    <span>
                                        By
                                        Massage Queen Team </span>
                                </div>
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
  )
}
