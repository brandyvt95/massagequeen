import Link from 'next/link'
import React from 'react'

export default function Banner() {
    return (
        <>
            <div className="banner-services">
                <Link href={'https://t.me/massagequeen93'}>
                <img src="/2025/banner.png" />
                </Link>
            </div>
            <div className="d-flex justify-content-center working-wrap">
                <div className="working-item">
                    <img src="./icon_times.svg" alt="time-icon" />
                    <div className="">
                        <span>Thời gian mở cửa</span><br />
                        <strong>(10:00 - 03:00 hàng ngày)</strong>
                    </div>
                </div>
                <div className="working-item">
                    <img src="./icon_loaction.svg" alt="location-icon" />
                    <div className="">
                        <span>Địa chỉ</span><br />
                        <a target="_blank"
                            href="https://www.google.com/maps/place/Massage+Hoa+Ki%E1%BB%81u/@10.758792,106.6528232,18z/data=!3m1!4b1!4m5!3m4!1s0x31752f23f906f13f:0xfac718f0133a7b9b!8m2!3d10.75879!4d106.653643"><strong>93
                                Trần Quang Khải, P Tân Định, Quận 1, TP.HCM</strong></a>
                    </div>
                </div>
                <div className="working-item">
                    <img src="./icon_phone.svg" alt="phone-icon" />
                    <div className="">
                        <span>Hotline đặt phòng</span><br />
                        <a href="tel:088 821 6666"><strong>088 821 6666</strong></a>
                    </div>
                </div>
            </div>
            <div className="working-shadow"></div>
        </>
    )
}
