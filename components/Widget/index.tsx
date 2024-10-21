import React from 'react'
import Modal from '../Modal'

export default function Widget() {
    return (
        <div className='fixedWidget'>
            <div id="topcontrol" title="Scroll to Top"><i className="fa fa-angle-up fa-lg fa-angle-style"></i></div>
            <a id="phonering-alo-phoneIcon"
                className="phonering-alo-phone phonering-alo-show phonering-alo-green phonering-alo-show ui-link" title="Liên hệ"
                href="tel:088 821 6666">
                <div className="phonering-alo-ph-circle"></div>
                <div className="phonering-alo-ph-circle-fill"></div>
                <div className="phonering-alo-ph-img-circle"></div>
            </a>

            <Modal/>
            <div className='phone-widget-des'>
                <a href="tel:+8488 821 6666">
                    <div className="quick-alo-ph-circle"></div>
                    <div className="quick-alo-ph-circle-fill"></div>
                    <div className="quick-alo-ph-img-circle"></div>
                </a>
            </div>
        </div>
    )
}
