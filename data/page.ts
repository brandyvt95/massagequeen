export const common = {

}

type Service = {
    img: string;
    imgsub: string;
    name: string;
    detail: string[];
    time: number;
    price: string;
    note: string;
    para: string[];
};
export const allGalery = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
    "/11.jpg",
    "/12.jpg",
    "/13.jpg",
]
// Sử dụng Record để định nghĩa listService
export const listService: Record<string, Service> = {
    "massage-vip": {
        img: "/1.jpg",
        imgsub: "/ms1.png",
        name: "VIP",
        detail: [
            "Xông ướt",
            "Xông khô",
            "Massage body",
            "Massage đá nóng",
            "Bj 1 short 💦",
        ],
        time: 70,
        price: "500,000 VND",
        note: "Giá vé chưa bao gồm tiền tip, tiền tip được quy định tối thiểu bằng tiền vé.",
        para: [
            "Người ta thường nói “cơ thể con người là một ngôi đền bí ẩn cần được khám phá”. Vậy thì hôm nay, với dịch vụ Massage Vip – Massage chuẩn phái mạnh của Hoa Kiều - sẽ giúp các chàng khám phá các “bí mật” ẩn sâu bên trong “ngôi đền” của chính mình.",
            "Thử tưởng tượng các anh sau những mỏi mệt bộn bề của một ngày dài làm việc, sau cuộc vui chếnh choáng cùng bạn bè và men say ngà ngà phảng phất trong người, ai chẳng muốn tìm đến một nơi để đắm mình thư giãn và chìm vào những giờ phút đắm say tuyệt vời?",
            "Đến với Massage Queen để trải nghiệm liệu pháp massage vip độc đáo, bảo đảm các chàng tha hồ đắm mình vào những phút giây đầy mơ ước ấy.",
            "Hương tinh dầu thoang thoảng cùng hương hoa mật ngọt tiết ra từ cơ thể các kỹ thuật viên xinh đẹp, quyện hòa trong không gian sang trọng kín đáo, sẽ kích thích những giác quan trong cơ thể chàng, giúp chàng từ từ thả lỏng, đưa chàng đến những thư giãn thuần túy, rồi những khoái cảm đặc sắc, tuyệt vời. Những bộn bề cuộc sống cứ thế mà gác lại đằng sau, mảy may tiêu biến.",
            "Massage Vip - đẩy lùi những muộn phiền cuộc sống, đong đầy những ngọt ngào bay bổng."
        ]
    },
   
    "massage-super-vip-02": {
        img: "/3.jpg",
        imgsub: "/ms3.png",
        name: "VIP NURU 1",
        detail: [
            "Xông ướt",
            "Xông khô",
            "Massage body",
            "Massage đá nóng",
            "Massage Nuru",
            "Tắm onsen",
            "Thư giản 69, wc, cia",
            "Thư giãn trong bồn tắm hoặc giường 1 lần 💦"
        ],
        time: 90,
        price: "1,000,000 VND",
        note: "Giá vé chưa bao gồm tiền tip, tiền tip được quy định tối thiểu bằng tiền vé.",
        para: [
            'Ai mà chẳng muốn một lần làm bậc Đế Vương, được yêu chiều cung phụng? Thế thì hôm nay, Massage Queen vừa hay cho ra đời gói Massage King - phục vụ những "ông hoàng" trên ngôi báu.',
            'Bảo đảm các anh lúc đi hết mình, lúc về hết hồn. Hết hồn bởi vì các em kỹ thuật viên ở đây làm việc hết lòng quá, mà body em nào cũng "hết nước chấm", khiến các anh mê mẩn mãi không thôi. Đến với gói King độc đáo này, các chàng tha hồ ôm các tiên nữ vào lòng, tha hồ cùng nàng "tắm tiên hái đào" trong dòng rượu vang ngọt ngào. Những giấc mơ thư giãn tình yêu nồng cháy, nóng bỏng và đê mê sẽ theo chàng len lỏi vào sâu bên trong căn phòng kín đáo, nơi cả 2 cùng nhau trải qua những phút giây tuyệt diệu. Muốn được yêu chiều? Đến ngay Massage Queen! Kỹ thuật viên với bờ môi căn mọng, thân hình nõn nà "ngon cơm & mọng nước", thêm cả các skill đỉnh của chóp, ắt hẳn sẽ làm siêu lòng cả những vị khách khó tính nhất. Chàng nào muốn được ôm trọn combo trườn nuru nóng bỏng "full HD", thư giãn "tuyệt đỉnh thăng hoa", nhất định không được bỏ qua gói Massage King này nhé. Tại Massage Queen chỉ tuyển chọn những gì tinh túy nhất dành cho chàng, hệt như bậc Đế Vương thượng đẳng chỉ có thể dùng những "mồi ngon" hảo hạng. Massage King - in đậm dấu ấn của bậc Đế Vương'
        ]
    },
    "massage-super-vip-03": {
        img: "/4.jpg",
        imgsub: "/ms4.png",
        name: "VIP NURU 2",
        detail: [
            "Xông ướt",
            "Xông khô",
            "Massage body",
            "Massage đá nóng",
            "Tắm onsen",
            "Trườn thảo dược",
            "Nuru phao",
            "Thư giản 69, wc, cia 1 lần bồn tắm 1 lần trên phao hoặc giường (2 lần thư giãn 💦💦1 lần bồn tắm 1 lần trên phao hoặc giường )",
        ],
        time: 100,
        price: "1,200,000 VND",
        note: "Giá vé chưa bao gồm tiền tip, tiền tip được quy định tối thiểu bằng tiền vé.",
        para: [
            'Ai mà chẳng muốn một lần làm bậc Đế Vương, được yêu chiều cung phụng? Thế thì hôm nay, Massage Queen vừa hay cho ra đời gói Massage King - phục vụ những "ông hoàng" trên ngôi báu.',
            'Bảo đảm các anh lúc đi hết mình, lúc về hết hồn. Hết hồn bởi vì các em kỹ thuật viên ở đây làm việc hết lòng quá, mà body em nào cũng "hết nước chấm", khiến các anh mê mẩn mãi không thôi. Đến với gói King độc đáo này, các chàng tha hồ ôm các tiên nữ vào lòng, tha hồ cùng nàng "tắm tiên hái đào" trong dòng rượu vang ngọt ngào. Những giấc mơ thư giãn tình yêu nồng cháy, nóng bỏng và đê mê sẽ theo chàng len lỏi vào sâu bên trong căn phòng kín đáo, nơi cả 2 cùng nhau trải qua những phút giây tuyệt diệu. Muốn được yêu chiều? Đến ngay Massage Queen! Kỹ thuật viên với bờ môi căn mọng, thân hình nõn nà "ngon cơm & mọng nước", thêm cả các skill đỉnh của chóp, ắt hẳn sẽ làm siêu lòng cả những vị khách khó tính nhất. Chàng nào muốn được ôm trọn combo trườn nuru nóng bỏng "full HD", thư giãn "tuyệt đỉnh thăng hoa", nhất định không được bỏ qua gói Massage King này nhé. Tại Massage Queen chỉ tuyển chọn những gì tinh túy nhất dành cho chàng, hệt như bậc Đế Vương thượng đẳng chỉ có thể dùng những "mồi ngon" hảo hạng. Massage King - in đậm dấu ấn của bậc Đế Vương'
        ]
    },
    "massage-super-vip-04": {
        img: "/5.jpg",
        imgsub: "/ms5.png",
        name: "VIP QUEEN",
        detail: [
            "Xông ướt",
            "Xông khô",
            "Massage body",
            "Massage đá nóng",
            "Tắm onsen",
            "Trườn thảo dược",
            "Thư giản 69, wc, cia ...",
            "Thư giãn 3 lần💦💦💦",
            "Được chọn KTV trực tiếp trên phòng 🍑🍑",
            "🎗️Tip 1500k 🎗️"
        ],
        time: 120,
        price: "1,500,000 VND",
        note: "Giá vé chưa bao gồm tiền tip, tiền tip được quy định tối thiểu bằng tiền vé.",
        para: [
            'Massage Super Vip - liệu pháp “đắt hàng” nhất tại Massage Queen Spa - các chàng đã thử? Nếu chưa thử thì thật phí mất công đến Massage Queen. Bởi tại gói dịch vụ độc đáo này, chúng tôi có massage lingam - massage “yêu chiều” quyền trượng ánh sáng của chàng hiếm có khó tìm.',

        ]
    },
    "massage-super-queen": {
        img: "/6.jpg",
        imgsub: "/ms5.png",
        name: "VVIP QUEEN",
        detail: [
            "Xông ướt",
            "Xông khô",
            "Massage body",
            "Massage đá nóng",
            "Tắm onsen",
            "Trườn thảo dược",
            "Thư giản 69, wc, cia ...",
            "2ktv phục vụ 🍒🍒",
            "Thư giãn 2 lần ( mỗi bạn 1 lần ạ )💦"
        ],
        time: 120,
        price: "2,000,000 VND",
        note: "Giá vé chưa bao gồm tiền tip, tiền tip được quy định tối thiểu bằng tiền vé.",
        para: [
            'Massage Super Queen - In hằn những khát khao thèm muống của các đấng mày râu. Đến với gói Massage Super Queen, những khát khao thỏa mãn cơ thể của chàng sẽ được được đánh thức, vực dậy bản năng tuyệt vời vốn có của một người đàn ông.',
            'Massage Super Queen là một liệu pháp vô cùng đặc biệt dành cho các vị khách thượng đẳng của Massage Queen. Với liệu pháp đáng đồng tiền bát gạo này, chàng sẽ được chăm sóc bởi tận 2 nàng kỹ thuật viên xinh đẹp của chúng tôi, chắc chắn sẽ là một trải nghiệm thư giãn lí thú và khó quên. Tại đây, chàng tha hồi tắm tiên hái đào trong dòng rượu vang ngọt ngào, thư giãn "thân tình" cùng các phương pháp chăm sóc "độc chiêu" của các nàng. Massage Super Queen đảm bảo đưa chàng đến bến bờ nồng cháy, với tận 2 lần "lên đỉnh" thăng hoa cùng 2 tiên nữ quyến rũ. Bao muộn phiền cuộc sống sẽ chỉ còn lại phía sau, nhường chỗ cho không gian ăn chơi vương giả bậc nhất Sài Thành. Trong không gian uy quyền rực rỡ đó, chàng cùng các nàng quấn lấy nhau, trao nhau những phút giây tuyệt vời. Hơi thở của cả 3 dồn dập liên hồi khi 2 nàng trườn cơ thể ướt đẫm dầu lên chàng, yêu chiều chàng cùng những skill đỉnh của chóp, khiến chàng không kìm nén được mà tuôn trào khoái cảm đắm say. Những dục vọng thầm kín nhất của chàng đều được các tiên nữ lấp đầy, làm cho rạo rực và đê mê ngây ngất. Thử một lần đến với Massage Queen, cùng các nàng yêu chiều những xúc cảm ngọt ngào cho riêng mình, chàng nhé?'

        ]
    }
}