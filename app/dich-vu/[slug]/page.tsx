"use client"

import { useParams } from 'next/navigation';
import { listService } from '../../../data/page';

const DetailService = () => {
  const { slug } = useParams<{ slug: string }>(); // Định nghĩa kiểu cho slug

  // Truy cập dịch vụ mà không cần kiểm tra kiểu phức tạp
  const service = slug ? listService[slug] : null;

  return (
    <div>
      <div className="services-full-box-details-main bg-flower-add">
        <div className="services-full-box-details-main-inner">
          <div className="box-img">
            <img src={service?.img}
              alt="Super Vip" />
          </div>
          <div className="box-content">
            <div className="box-title">vé <span>{service?.name}</span></div>
            <div className="box-list-menu">
              <ul className="ul-list-services-includes">
                {service?.detail.map((item,index) => (
                    <li key={index}>{item}</li>
                ))} 
              </ul>
            </div>
            <div className="box-time">Thời gian: {service?.time} phút</div>
            <div className="box-price">{service?.price}</div>
            <div className='box-note'>Giá vé chưa bao gồm tiền tip, tiền tip được quy định tối thiểu bằng tiền vé</div>
            <div className="box-book">
              <a data-toggle="modal" data-target=".modal-appointment" href="javascript:void(0);"
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
                  <span>Super Vip</span>
                </h1>
                <h3 className="content-summary"> Massage Super Vip - liệu pháp “đắt hàng” nhất tại Massage Queen Spa -
                  các chàng đã thử? Nếu chưa thử thì thật phí mất công đến Massage Queen. Bởi tại gói dịch vụ độc
                  đáo này, chúng tôi có massage lingam - massage “yêu chiều” quyền trượng ánh sáng của chàng
                  hiếm có khó tìm.
                </h3>
              </div>
              <div className="box-img">
                <img src="http://massagequeen.vn/asset/newimg/ms05.png"
                  alt="Super Vip" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailService;
