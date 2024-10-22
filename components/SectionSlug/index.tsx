"use client"


import { useParams } from 'next/navigation';

import { allGalery, listService } from '../../data/page';
import useModalStore from '../../store/store';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';


export default function SectionSlug() {
    const { slug } = useParams<{ slug: string }>();

    const service = slug ? listService[slug] : null;
    const { toggleModal } = useModalStore();
    return (
        <>
            <div className="services-full-box-details-main bg-flower-add">
                <div className="services-full-box-details-main-inner">
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="mySwiperSlug box-img">
                        {allGalery.map((item, index) => (

                            <SwiperSlide key={index}>
                                <img src={item}
                                    alt="Super Vip" /></SwiperSlide>
                        ))}

                    </Swiper>
                    <div className="box-content">
                        <div className="box-title">vé <span>{service?.name}</span></div>
                        <div className="box-list-menu">

                            <ul className="ul-list-services-includes">
                                {service?.detail.map((item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="box-time">Thời gian: {service?.time} phút</div>
                        <div className="box-price">{service?.price}</div>
                        <div className='box-note'>Giá vé chưa bao gồm tiền tip, tiền tip được quy định tối thiểu bằng tiền vé</div>
                        <div className="box-book">
                            <a data-toggle="modal" data-target=".modal-appointment" href="#" onClick={(e) => { e.preventDefault(); toggleModal(); }}
                                className="btn-animate">Đặt lịch ngay</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-full-box-content bg-flower-add">
                <div className="container">
                    <div className="col-lg-12 col-md-12">
                        <div className="box-content-top">
                            <div className="box-content-summary">
                                <h1 className="box-title">
                                    Đắm Mình Trong dịch vụ massage
                                    <span>{service?.name}</span>
                                </h1>
                                {service?.para.map((item: string, index: number) => (
                                    <h3 key={index} className="content-summary">{item}</h3>
                                ))}

                            </div>
                            <div className="box-img">
                                <img src={service?.imgsub}
                                    alt="Super Vip" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
