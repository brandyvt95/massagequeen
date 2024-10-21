"use client"
import { useParams,useRouter } from 'next/navigation';
import { useState, FormEvent, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './style.module.css'
import useModalStore from '../../store/store';

export default function Modal() {
    const router = useRouter()
    const { slug } = useParams<{ slug: string }>();
    const listSlugActive = ["massage-vip", "massage-super-vip-01", "massage-super-vip-02", "massage-super-vip-03", "massage-super-vip-04", "massage-super-queen"]
    const listDetail = {
        "massage-vip": {
            name: "Vé VIP",
            price: "590K",
            time: "/70 phút"
        },
        "massage-super-vip-01": {
            name: "Vé SUPER 01",
            price: "800K",
            time: "/80 phút"
        },
        "massage-super-vip-02": {
            name: "Vé SUPER 02",
            price: "1.000K",
            time: "/90 phút"
        },
        "massage-super-vip-03": {
            name: "Vé SUPER 03",
            price: "1.200K",
            time: "/100 phút"
        },
        "massage-super-vip-04": {
            name: "Vé SUPER 04",
            price: "1.500K",
            time: "/120 phút"
        },
        "massage-super-queen": {
            name: "Vé SUPER QUEEN",
            price: "2.000K",
            time: "/140 phút"
        }
    }
    const { isOpen, toggleModal } = useModalStore();
    const [value, setValue] = useState({
        fullName: "",
        phone: "",
        date: "",
        typeService: ""
    });
    const thisDate = useRef<HTMLInputElement>(null)
    const thisTypeService = useRef<HTMLInputElement>(null)
    const thisForm = useRef<HTMLFormElement>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        thisForm.current?.style.setProperty("pointer-events", "none");
        const promise = fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fullName: value.fullName,
                phone: value.phone,
                date: thisDate.current?.value,
                typeService: thisTypeService.current?.innerHTML
            }),
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Có lỗi, vui lòng thừ lại");
            }
            return response;
        });

        toast.promise(
            promise,
            {
                pending: 'Đang gửi thông tin...',
                success: 'Chúng tôi đã nhận được thông tin! 🎉',
                error: 'Có lỗi, vui lòng thừ lại',
            }
        );

        promise.then(() => {
            setValue({
                fullName: "",
                phone: "",
                date: "",
                typeService: "",

            });
            setTimeout(() => {
                toggleModal()
                router.push("/")
            }, 1000)
        });

    };

    return (
        <div style={{ display: isOpen ? 'flex' : 'none' }} className={s.modal}>
            <ToastContainer />
            <div className="modal-content">
                <div className="appointments-wrap normal-wrap">
                    <div className="container--ct-1200px positionrelative form-custom-wp">

                        <img className="bgof-appointments-form"
                            src="/bg-modal-ct.png" alt="" />

                        <form ref={thisForm} className="appointments-form" style={{ background: "unset !important" }} name="sentMessage" onSubmit={(e) => handleSubmit(e)}>


                            <h2>Đặt&nbsp;Phòng</h2>
                            <p>Chúc Quý Khách Hàng có những trải nghiệm thư giãn tuyệt vời</p>
                            <div className="d-flex justify-content-between appointments-div defend-style-sdgh">
                                <div className="calendar-dropdown-wrap flex-fill ">
                                    <span className="span-booking-date-meterial custom-input-dgfh hovaten-input-style-defend">
                                        <img src="/hovaten-form.png"
                                            alt="calendar-dropdown-icon" />
                                        <input type="text" className="hk-input flex-fill" placeholder="Họ tên"
                                            value={value.fullName}
                                            onChange={(e) =>
                                                setValue((prev) => ({
                                                    ...prev,
                                                    fullName: e.target.value,
                                                }))
                                            }
                                            required
                                            id="value-nameclient" />
                                    </span>
                                </div>
                                <div className="calendar-dropdown-wrap flex-fill">
                                    <span className="span-booking-date-meterial custom-input-dgfh contact-input-style-defend">
                                        <img src="/contact-form.png"
                                            alt="calendar-dropdown-icon" />
                                        <input type="text" className="hk-input flex-fill" placeholder="Thông tin liên hệ"
                                            value={value.phone}
                                            onChange={(e) =>
                                                setValue((prev) => ({
                                                    ...prev,
                                                    phone: e.target.value,
                                                }))
                                            }
                                            required
                                            id="value-contactclient" />
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between appointments-div ">

                                <div className="calendar-dropdown-wrap flex-fill" id="custom-action1354">
                                    <span className="span-booking-date-meterial">
                                        <img src="/calendar-dropdown-icon.svg"
                                            alt="calendar-dropdown-icon" />
                                        <input ref={thisDate} type="text" className="hk-input flex-fill" id="booking-date-meterial"
                                            name="booking-date" placeholder="Chọn ngày đến" />
                                        <i className="fas fa-chevron-down"></i>
                                    </span>
                                </div>
                                {listSlugActive.includes(slug) ?
                                    <div className="service-dropdown-wrap flex-fill">
                                        <div className="service-dropdown-wrap-selected dropdown-selected">
                                            <img src="/service-dropdown-icon.svg"
                                                alt="service-dropdown-icon" />
                                            <span id="value-typeservices" ref={thisTypeService}>
                                                {listDetail[slug as keyof typeof listDetail].name}
                                                <span style={{ color: "#34c183", marginLeft: "1rem" }}>
                                                    {listDetail[slug as keyof typeof listDetail].price}
                                                </span>
                                                {listDetail[slug as keyof typeof listDetail].time}
                                            </span>
                                            <i className="fas fa-chevron-down"></i>
                                        </div>
                                        <input type="hidden" name="booking-service" />
                                    </div>
                                    :
                                    <div className="service-dropdown-wrap flex-fill">
                                        <div className="service-dropdown-wrap-selected dropdown-selected">
                                            <img src="/service-dropdown-icon.svg"
                                                alt="service-dropdown-icon" />
                                            <span id="value-typeservices" ref={thisTypeService}>Chọn gói dịch vụ</span>
                                            <i className="fas fa-chevron-down"></i>
                                        </div>
                                        <input type="hidden" name="booking-service" />
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
                                                    <img src="/close.png" />
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                }


                            </div>
                            <div className="btn-wp-sdv">
                                <button className="flex-fill" type="submit">Đặt phòng</button>
                                <button onClick={toggleModal} id="close-modal-voucher">Đóng</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}
