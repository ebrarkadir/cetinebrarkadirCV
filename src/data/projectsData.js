// src/data/projectsData.js
const projects = [
  {
    id: 1,
    title: "ShiledWrt",
    image: "/assets/shieldwrt.png",
    shortDescription: "OpenWRT tabanlı güvenlik duvarı projesi.",
    fullDescription: "Bu alana proje hakkında daha detaylı açıklama gelecek.",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "mcetinsigorta.com",
    images: [
      "/assets/cetinsigorta.png",
      "/assets/cetinsigorta1.png",
      "/assets/cetinsigorta2.png",
      "/assets/cetinsigorta3.png",
      "/assets/cetinsigorta4.png",
      "/assets/cetinsigorta5.png",
      "/assets/cetinsigorta6.png",
    ],
    shortDescription:
      "MCetin Sigorta için geliştirilen ve aktif olarak kullanılan kapsamlı bir React tabanlı sigorta platformu.",

    fullDescription:
      "Bu proje, MCetin Sigorta şirketi için özel olarak tasarlanmış ve şirket tarafından aktif olarak kullanılan bir web platformudur. React ile geliştirilen sistem, kullanıcıların farklı sigorta türleri (trafik, kasko, sağlık vb.) hakkında bilgi almasını, teminat detaylarını incelemesini ve fiyat teklifi talep etmesini sağlar. Aynı zamanda, hasar anında izlenmesi gereken adımlar, sıkça sorulan sorular ve doğrudan iletişim seçenekleri gibi bilgilendirici içerikler sunar. Kullanıcı dostu arayüzü ve çok yönlü içeriğiyle MCetin Sigorta'nın dijital hizmet kanalını temsil eder. Proje yayında: https://mcetinsigorta.com/",

    github: "https://github.com/ebrarkadir/insurance_site",
    demo: "#",
  },
  {
    id: 3,
    title: "FoodDB",
    images: [
      "/assets/fooddb.png",
      "/assets/fooddb1.png",
      "/assets/fooddb2.png",
    ],
    shortDescription:
      "FoodDb, React-Next.js kullanılarak yazılmış bir restoran yemek sipariş projesi.",
    fullDescription:
      " foodDB adlı yemek sipariş sitemiz, kullanıcıları ve restoranları doğrudan bir araya getirmek için tasarlanmıştır.Piyasadaki diğer yemek sipariş platformlarının aksine, aracı kurum olmadan kullanıcıları ve restoranları buluşturmayı amaçlamaktadır. Bu yaklaşım, yüksek komisyon ücretlerini ortadan kaldırarak kullanıcıların daha uygun fiyatlarla yemek siparişi vermelerini sağlarken, restoranların da aracı kuruluşlara komisyon ödemeden ürünlerini sergilemelerine imkan tanır..",
    github: "https://github.com/ebrarkadir/FoodDB",
    demo: "#",
  },
  {
    id: 4,
    title: ".NET Backend Project",
    images: [
      "/assets/dotnet.jpg",
      "/assets/dotnet1.jpeg",
      "/assets/dotnet2.jpg",
    ],
    shortDescription:
      "ASP.NET Core Web API ile geliştirilen katmanlı mimariye sahip bir rent-a-car backend projesi.",

    fullDescription:
      ".NetBackendProject, ASP.NET Core Web API (.NET 6) kullanılarak geliştirilmiş, katmanlı mimariye sahip güçlü bir backend altyapısıdır. Temiz kod prensipleri, sürdürülebilirlik ve genişletilebilirlik ön planda tutularak yapılandırılmıştır. Proje, bir rent-a-car (araç kiralama) şirketi örneği üzerinden modellenmiş olup, eğitim, geliştirme veya hızlı başlangıç amaçlarıyla idealdir. Repository, Entity, Service ve Controller katmanlarını içeren yapısıyla backend geliştirme konusunda rehber niteliğindedir.",

    github: "https://github.com/ebrarkadir/.NetBackendProject",
    demo: "#",
  },
  {
    id: 6,
    title: "Ip_port_scan",
    image: "/assets/scan.png",
    shortDescription:
      "Go ile geliştirilen, düşük seviyeli TCP SYN tabanlı port tarama aracı.",

    fullDescription:
      "Bu proje, Go programlama dili ile geliştirilmiş, düşük seviyeli TCP SYN taraması gerçekleştiren bir port tarama aracıdır. Gopacket ve pcap kütüphaneleri kullanılarak özel TCP SYN paketleri oluşturulur ve hedef IP adresine gönderilir. Gelen cevaplara göre portların açık ya da kapalı olduğu belirlenir. Bu yöntem, klasik connect() temelli tarayıcılardan farklı olarak, nmap’in -sS parametresinde kullandığı half-open scan (yarı-açık tarama) yaklaşımına benzer bir şekilde çalışır. Güvenlik araştırmaları ve ağ analizleri için güçlü bir araçtır.",

    github: "https://github.com/ebrarkadir/Ip_Port_Scan",
    demo: "#",
  },
  {
    id: 5,
    title: "Tcp_server_client",
    image: "/assets/tcp.png",
    shortDescription:
      "Go dili ile geliştirilmiş, özel protokol kullanan TCP istemci-sunucu haberleşme uygulaması.",

    fullDescription:
      "Bu proje, Go programlama dili ile geliştirilmiş bir TCP sunucu-istemci uygulamasıdır. Uygulama, iki uç arasında veri iletimini sağlamak için özel olarak tasarlanmış bir binary protokol kullanır. Sistem performansını artırmak ve verimliliği maksimize etmek amacıyla çeşitli optimizasyon teknikleri entegre edilmiştir. Özellikle düşük seviye haberleşme, ağ programlama ve sistem geliştirme alanlarında öğrenim ve deneyim kazanmak isteyenler için ideal bir projedir.",

    github: "https://github.com/ebrarkadir/TCP_server-client",
    demo: "#",
  },
  {
    id: 7,
    title: "ShareLocation",
    images: [
      "/assets/location.png",
      "/assets/location1.png",
      "/assets/location2.png",
      "/assets/location3.png",
      
    ],
    shortDescription: "Gerçek zamanlı konum paylaşma uygulaması.",
    fullDescription: "Bu alana proje hakkında daha detaylı açıklama gelecek.",
    github: "#",
    demo: "#",
  },
];

export default projects;
