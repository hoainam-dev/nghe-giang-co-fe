import { ProductDetail } from "@/types";

export const siteConfig = {
  name: "Công ty TNHH Thương Mại và Tư Vấn Nghệ Giang",
  domain: "www.nghegiang.com.vn",
  slogan: "Đồng hành cùng những công trình bền vững",
  description: "Nghệ Giang cung cấp xi măng cho các công trình tại miền Trung và Tây Nguyên.",
  keywords: [
    "Xi măng",
    "Nghệ Giang",
    "Xi măng Nghệ Giang",
    "Xi măng miền Trung",
    "Xi măng Đà Nẵng",
  ],
  phone: "0394.389.999",
  email: "nghegiangdn2006@gmail.com",
  address: "89 Lê Văn Hưu, Phường Ngũ Hành Sơn, TP Đà Nẵng, Việt Nam",
};

export const navItems = [
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Sản phẩm", href: "/san-pham" },
  { label: "Đối tác", href: "/doi-tac" },
  { label: "Liên hệ", href: "/lien-he" },
];

export const companyInfo = {
  fullName: "CÔNG TY TNHH THƯƠNG MẠI VÀ TƯ VẤN NGHỆ GIANG",
  internationalName: "NGHE GIANG TRADE AND ADVISORY COMPANY LIMITED",
  address: "89 Lê Văn Hưu, Phường Ngũ Hành Sơn, TP Đà Nẵng, Việt Nam",
  phone: "0394.389.999",
  email: "nghegiangdn2006@gmail.com",
  taxCode: "0400539854",
  foundedYear: "2006",
  representative: "Ông Nguyễn Khắc Long - Giám đốc công ty",
};

export const coreValues = [
  {
    title: "Hệ thống",
    desc: "Hệ thống kho bãi, vận tải rộng khắp, vận hành trơn tru.",
  },
  {
    title: "Chất lượng",
    desc: "Cam kết cung cấp sản phẩm và dịch vụ với tiêu chuẩn cao nhất.",
  },
  {
    title: "Uy tín",
    desc: "Xây dựng niềm tin bằng sự minh bạch và chuyên nghiệp.",
  },
  {
    title: "Sáng tạo",
    desc: "Không ngừng đổi mới để mang lại giải pháp tối ưu.",
  },
  {
    title: "Hợp tác",
    desc: "Là đối tác chiến lược của các nhà sản xuất lớn và uy tín.",
  },
  {
    title: "Bền vững",
    desc: "Phát triển gắn liền với trách nhiệm xã hội và bảo vệ môi trường.",
  },
];

export const featuredProducts = [
  {
    slug: "xi-mang-hoang-thach-pcb30",
    name: "Xi măng Hoàng Thạch PCB30",
    brand: "Xi măng Hoàng Thạch",
    frontImage: "/images/products/HT_PCB30.png",
    backImage: "/images/products/HT_PCB30_1.png",
  },
  {
    slug: "xi-mang-hoang-thach-pcb40",
    name: "Xi măng Hoàng Thạch PCB40",
    brand: "Xi măng Hoàng Thạch",
    frontImage: "/images/products/HT_PCB40.png",
    backImage: "/images/products/HT_PCB40_1.png",
  },
];

export const productGroups = [
  {
    slug: "xi-mang-vicem-wall-cem-xay-to-cao-cap",
    name: "Xi măng Vicem Wall Cem xây tô cao cấp",
    image: "/images/products/HV_PCB30.png",
  },
  {
    slug: "xi-mang-vicem-wall-cem-da-dung-pcb40",
    name: "Xi măng Vicem Wall Cem đa dụng PCB40",
    image: "/images/products/HV_PCB40.png",
  },
  {
    slug: "xi-mang-kaito-pcb30",
    name: "Xi măng Kaito PCB30",
    image: "/images/products/KT_PCB30.png",
  },
  {
    slug: "xi-mang-kaito-pcb40",
    name: "Xi măng Kaito PCB40",
    image: "/images/products/KT_PCB40.png",
  },
];

export const productDetails: ProductDetail[] = [
  {
    slug: "xi-mang-hoang-thach-pcb30",
    name: "Xi măng Hoàng Thạch PCB30",
    brand: "Xi măng Hoàng Thạch",
    image: "/images/products/HT_PCB30.png",
    packageImage: "/images/products/HT_PCB30_2.jpg",
    frontImage: "/images/products/HT_PCB30.png",
    backImage: "/images/products/HT_PCB30_1.png",
    desc: "Xi măng poóclăng hỗn hợp PCB30, phù hợp cho các hạng mục xây dựng dân dụng và công nghiệp.",
    isMain: true,
    usage: {
      storage: [
        "Các bao xi măng không được xếp quá 10 bao.",
        "Giữ nơi khô ráo, cách mặt đất và cách tường hơn 20 cm.",
      ],
      mixRatio: [
        { material: "Xi măng", unit: "kg", concrete250: "434", mortar100: "385" },
        { material: "Cát vàng", unit: "m³", concrete250: "0,415", mortar100: "1,09" },
        { material: "Đá dăm cỡ 1x2", unit: "m³", concrete250: "0,858", mortar100: "—" },
        { material: "Nước ngọt", unit: "lít", concrete250: "195", mortar100: "260" },
      ],
    },
  },
  {
    slug: "xi-mang-hoang-thach-pcb40",
    name: "Xi măng Hoàng Thạch PCB40",
    brand: "Xi măng Hoàng Thạch",
    image: "/images/products/HT_PCB40.png",
    packageImage: "/images/products/HT_PCB40_2.jpg",
    frontImage: "/images/products/HT_PCB40.png",
    backImage: "/images/products/HT_PCB40_1.png",
    desc: "Xi măng poóclăng hỗn hợp PCB40, cường độ cao, phù hợp công trình yêu cầu tiến độ và chất lượng ổn định.",
    isMain: true,
    usage: {
      storage: [
        "Các bao xi măng không được xếp quá 10 bao.",
        "Giữ nơi khô ráo, cách mặt đất và cách tường hơn 20 cm.",
      ],
      mixRatio: [
        { material: "Xi măng", unit: "kg", concrete250: "344", mortar100: "297" },
        { material: "Cát vàng", unit: "m³", concrete250: "0,456", mortar100: "1,11" },
        { material: "Đá dăm cỡ 1x2", unit: "m³", concrete250: "0,872", mortar100: "—" },
        { material: "Nước ngọt", unit: "lít", concrete250: "195", mortar100: "260" },
      ],
    },
  },
  {
    slug: "xi-mang-vicem-wall-cem-xay-to-cao-cap",
    name: "Xi măng Vicem Wall Cem xây tô cao cấp",
    brand: "Xi măng Vicem Wall Cem",
    image: "/images/products/HV_PCB30.png",
    frontImage: "/images/products/HV_PCB30.png",
    desc: "Sản phẩm phù hợp cho xây dựng dân dụng, xây tô và các hạng mục phổ thông.",
    usage: {
      storage: [
        "Các bao xi măng không được xếp quá 10 bao.",
        "Giữ nơi khô ráo, cách mặt đất và cách tường hơn 20 cm.",
      ],
      mixRatio: [
        { material: "Xi măng", unit: "kg", concrete250: "430", mortar100: "410" },
        { material: "Cát vàng", unit: "m³", concrete250: "0,407", mortar100: "1,020" },
        { material: "Đá dăm cỡ 1x2", unit: "m³", concrete250: "0,825", mortar100: "—" },
        { material: "Nước ngọt", unit: "lít", concrete250: "195", mortar100: "260" },
      ],
    },
  },
  {
    slug: "xi-mang-vicem-wall-cem-da-dung-pcb40",
    name: "Xi măng Vicem Wall Cem đa dụng PCB40",
    brand: "Xi măng Vicem Wall Cem",
    image: "/images/products/HV_PCB40.png",
    frontImage: "/images/products/HV_PCB40.png",
    desc: "Sản phẩm có cường độ ổn định, phù hợp nhiều hạng mục công trình.",
    usage: {
      storage: [
        "Các bao xi măng không được xếp quá 10 bao.",
        "Giữ nơi khô ráo, cách mặt đất và cách tường hơn 20 cm.",
      ],
      mixRatio: [
        { material: "Xi măng", unit: "kg", concrete250: "341", mortar100: "320" },
        { material: "Cát vàng", unit: "m³", concrete250: "0,447", mortar100: "1,060" },
        { material: "Đá dăm cỡ 1x2", unit: "m³", concrete250: "0,838", mortar100: "—" },
        { material: "Nước ngọt", unit: "lít", concrete250: "195", mortar100: "260" },
      ],
    },
  },
  {
    slug: "xi-mang-kaito-pcb30",
    name: "Xi măng Kaito PCB30",
    brand: "Xi măng Kaito",
    image: "/images/products/KT_PCB30.png",
    frontImage: "/images/products/KT_PCB30.png",
    desc: "Phù hợp cho các hạng mục xây, trát trong công trình dân dụng.",
    usage: {
      storage: [
        "Các bao xi măng không được xếp quá 10 bao.",
        "Giữ nơi khô ráo, cách mặt đất và cách tường hơn 20 cm.",
      ],
      advantages: [
        "Độ mịn cao.",
        "Khả năng chống thấm tốt.",
        "Giúp thi công dễ dàng, tăng độ bền và tuổi thọ cho công trình.",
      ],
      applications: ["Sử dụng cho các hạng mục như xây, trát, tô công trình."],
    },
  },
  {
    slug: "xi-mang-kaito-pcb40",
    name: "Xi măng Kaito PCB40",
    brand: "Xi măng Kaito",
    image: "/images/products/KT_PCB40.png",
    frontImage: "/images/products/KT_PCB40.png",
    desc: "Cường độ cao, đóng rắn nhanh, phù hợp các kết cấu chịu lực.",
    usage: {
      storage: [
        "Các bao xi măng không được xếp quá 10 bao.",
        "Giữ nơi khô ráo, cách mặt đất và cách tường hơn 20 cm.",
      ],
      advantages: [
        "Cường độ xi măng cao.",
        "Thời gian đóng rắn nhanh, giúp rút ngắn thời gian thi công.",
        "Phù hợp với khí hậu Việt Nam, chống ăn mòn và xâm thực trong điều kiện môi trường khắc nghiệt.",
      ],
      applications: ["Phù hợp cho các kết cấu như móng, cột, mái, dầm."],
    },
  },
];

export const pcbCommonInfo = {
  title: "Đặc điểm xi măng PCB30 - PCB40",
  desc: [
    "PCB là ký hiệu quy ước cho xi măng poóclăng hỗn hợp.",
    "Các trị số 30, 40 là giới hạn cường độ chịu nén của mẫu vữa xi măng sau 28 ngày dưỡng hộ, tính bằng N/mm².",
    "Xi măng có độ mịn cao, màu sắc xanh xám - đen.",
    "Thời gian ninh kết: bắt đầu khoảng 110 ÷ 140 phút, kết thúc sau 3 ÷ 4 giờ.",
    "Tốc độ phát triển cường độ ban đầu nhanh, phù hợp cho các công trình cần tháo dỡ cốp pha nhanh.",
    "Xi măng Vicem Hoàng Thạch có hàm lượng khoáng C3S cao, hàm lượng C3A thấp, hàm lượng vôi tự do nhỏ, độ ổn định thể tích tốt.",
    "Trong nhiều năm qua, xi măng Vicem Hoàng Thạch đã được sử dụng cho nhiều công trình công nghiệp trọng điểm và dân dụng trên cả nước.",
  ],
};

export const partners = [
  {
    name: "Coteccons",
    logo: "/images/partner/logo-coteccons.png",
    website: "https://www.coteccons.vn/about-us-building-futures-vn/",
    desc: "Một trong những tổng thầu xây dựng uy tín tại Việt Nam, đồng hành trong nhiều dự án dân dụng, công nghiệp và hạ tầng.",
  },
  {
    name: "Unicons",
    logo: "/images/partner/logo-unicons.png",
    website: "https://vi.wikipedia.org/wiki/Unicons",
    desc: "Đơn vị hoạt động trong lĩnh vực xây dựng, thi công và quản lý dự án với năng lực triển khai chuyên nghiệp.",
  },
  {
    name: "Handico",
    logo: "/images/partner/logo-handico.png",
    website: "https://www.handico.com.vn/vi/gioi-thieu",
    desc: "Tổng công ty đầu tư và phát triển nhà, có kinh nghiệm trong lĩnh vực bất động sản, xây dựng và phát triển đô thị.",
  },
  {
    name: "Hòa Bình",
    logo: "/images/partner/logo-hoa-binh.png",
    website: "https://hbcg.vn/",
    desc: "Tập đoàn xây dựng có nhiều năm kinh nghiệm trong thi công công trình dân dụng, thương mại và công nghiệp.",
  },
  {
    name: "Landcom",
    logo: "/images/partner/logo-landcom.png",
    website: "https://landcom.org/gioi-thieu.htm",
    desc: "Đơn vị hoạt động trong lĩnh vực đầu tư, phát triển và xây dựng các dự án bất động sản.",
  },
  {
    name: "Tân Minh Nhân",
    logo: "/images/partner/logo-tan-minh-nhan.png",
    website: "https://www.tanminhnhan.com.vn/gioi-thieu/tong-quan-cong-ty.html",
    desc: "Doanh nghiệp xây dựng và phát triển dự án với định hướng chuyên nghiệp, uy tín và bền vững.",
  },
  {
    name: "Central",
    logo: "/images/partner/logo-central.png",
    website: "https://www.centralcons.vn/about-central/tong-quan/",
    desc: "Tổng thầu xây dựng chuyên nghiệp, tham gia nhiều dự án quy mô lớn trên toàn quốc.",
  },
  {
    name: "Thành Quân",
    logo: "/images/partner/logo-thanh-quan.webp",
    website: "https://thanhquan.com.vn/page_gioi_thieu/vai-net-ve-thanh-quan-2",
    desc: "Đơn vị xây dựng và thi công công trình, đồng hành cùng nhiều dự án trong lĩnh vực xây dựng.",
  },
];

export const contactInfo = {
  company: "Công ty TNHH Thương Mại và Tư Vấn Nghệ Giang",
  address: "Miền Trung và Tây Nguyên",
  phone: "0394.389.999",
  email: "nghegiangdn2006@gmail.com",
  workingTime: "Thứ 2 - Thứ 7: 07:30 - 17:30",
  mapUrl:
    "https://maps.google.com/?q=89+L%C3%AA+V%C4%83n+H%C6%B0u,+Ph%C6%B0%E1%BB%9Dng+Ng%C5%A9+H%C3%A0nh+S%C6%A1n,+TP+%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=89+L%C3%AA+V%C4%83n+H%C6%B0u,+Ph%C6%B0%E1%BB%9Dng+Ng%C5%A9+H%C3%A0nh+S%C6%A1n,+TP+%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam&hl=vi&z=16&output=embed",
};

export const featuredProjects = [
  {
    title: "Sun Symphony Residence",
    slug: "sun-symphony-residence",
    category: "Khu đô thị / Căn hộ cao cấp",
    location: "Trần Hưng Đạo, Sơn Trà, Đà Nẵng",
    image: "/images/projects/sun-symphony-residence.jpg",
    website: "https://smartrealtors.vn/sun-symphony-residence-tran-hung-dao-da-nang/",
    desc: "Dự án phức hợp cao cấp bên bờ sông Hàn, sở hữu vị trí nổi bật trên trục Trần Hưng Đạo – Lê Văn Duyệt.",
  },
  {
    title: "The Sun Cosmo Residence",
    slug: "the-sun-cosmo-residence",
    category: "Căn hộ / Shophouse cao cấp",
    location: "Đà Nẵng",
    image: "/images/projects/the-sun-cosmo-residence.jpg",
    website: "https://smartrealtors.vn/sun-cosmo-residence-da-nang/",
    desc: "Dự án bất động sản cao cấp tại Đà Nẵng, kết nối các khu vực trọng điểm và sở hữu lợi thế về cảnh quan đô thị, sông và biển.",
  },
  {
    title: "Chung cư Bàu Tràm Lakeside Đà Nẵng",
    slug: "chung-cu-bau-tram-lakeside-da-nang",
    category: "Chung cư / Khu đô thị",
    location: "Liên Chiểu, Đà Nẵng",
    image: "/images/projects/bau-tram-lakeside.jpg",
    website: "https://royaland.com.vn/du-an/du-an-lakeside-palace-lien-chieu-da-nang.htm",
    desc: "Công trình thuộc khu đô thị Lakeside Bàu Tràm, khu vực phát triển năng động tại quận Liên Chiểu, Đà Nẵng.",
  },
  {
    title: "Bệnh viện Đa khoa Đà Nẵng",
    slug: "benh-vien-da-khoa-da-nang",
    category: "Công trình y tế",
    location: "Hải Phòng, Hải Châu, Đà Nẵng",
    image: "/images/projects/benh-vien-da-khoa-da-nang.jpg",
    website: "https://maps.app.goo.gl/2fAEdnevSd299GLt8",
    desc: "Công trình y tế trọng điểm tại trung tâm thành phố Đà Nẵng, phục vụ nhu cầu khám chữa bệnh của người dân khu vực.",
  },
  {
    title: "Công ty Cổ phần Kim Long Motor Huế",
    slug: "cong-ty-co-phan-kim-long-motor-hue",
    category: "Công nghiệp / Nhà máy",
    location: "Huế",
    image: "/images/projects/kim-long-motor-hue.jpg",
    website: "https://kimlongmotor.vn/",
    desc: "Dự án thuộc lĩnh vực công nghiệp ô tô, gắn với hoạt động sản xuất, lắp ráp, kinh doanh ô tô và hạ tầng công nghiệp.",
  },
];
