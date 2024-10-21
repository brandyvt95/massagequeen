import React from 'react'

export default function Navbar() {
  return (
    <div className="container">
            <div>
                <nav className="navbar navbar-expand-md ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src="/logo-massage-queen-red.png"
                                alt="Massage Queen" />
                           {/*  <h1 style="display: none">Massage Queen Spa & Massage - Khoảnh khắc ngọt ngào</h1> */}
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul id="main-menu" className="navbar-nav me-auto mb-2 mb-md-0">
                                <li id="menu-item-237"
                                    className="menu-item menu-item-type-custom menu-item-object-custom  menu-item-237 nav-item">
                                    <a className="nav-link" href="/" aria-current="page">Trang chủ</a></li>
                                <li id="menu-item-3194"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3194 nav-item">
                                    <a className="nav-link" href="/dich-vu">Dịch vụ</a></li>
                                <li id="menu-item-1852"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1852 nav-item">
                                    <a className="nav-link" href="/khuyen-mai">Ưu đãi</a></li>
                                <li id="menu-item-3196"
                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3196 nav-item">
                                    <a className="nav-link" href="/tin-tuc">Chia sẻ</a></li>
                             
                              
                            </ul>
                            <div className="d-flex phone-top mobile-hide">
                                <img style={{width: "24px", height: "24px"}}
                                    src="/icon_phone_top_menu.svg" alt="phone-icon" />
                                <span>088 821 6666</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
  )
}
