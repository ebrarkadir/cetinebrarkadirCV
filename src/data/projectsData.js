// src/data/projectsData.js
const projects = [
  {
    id: 1,
    title: "ShiledWrt",
    image: "/assets/shieldwrt.png",
    shortDescription:
      "OpenWRT destekli Raspberry Pi cihazı üzerinden firewall yönetimi sağlayan, React arayüzlü ve Node.js API tabanlı modern güvenlik çözümü.",
    fullDescription:
      "ShieldWrt, React ile geliştirilen kullanıcı dostu bir arayüz ve Node.js ile oluşturulmuş bir API altyapısıyla entegre çalışan, gerçek zamanlı firewall yönetimi sağlayan bir güvenlik çözümüdür. Kullanıcılar arayüz üzerinden özel kurallar tanımlayabilir; bu kurallar backend aracılığıyla OpenWRT işletim sistemine sahip Raspberry Pi cihazına iletilerek orada firewall yapılandırmalarına dönüştürülür ve uygulanır. Sistem, hem yönlendirici (router) hem de güvenlik duvarı (firewall) görevini üstlenen Raspberry Pi üzerinde aktif olarak çalışmaktadır. Bu proje sayesinde ağ güvenliği, kuralların otomatik yönetimi, API tasarımı ve gömülü sistemlerle entegrasyon konularında deneyim kazandım. Gerçek donanım üzerinde çalışan uçtan uca bir ağ güvenlik çözümüdür.",
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
    title: ".NET Backend Project",
    images: [
      "/assets/dotnet3.jpg",
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
    id: 4,
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
    id: 6,
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
    id: 7,
    title: "ShareLocation",
    images: [
      "/assets/location.png",
      "/assets/location1.png",
      "/assets/location2.png",
      "/assets/location3.png",
    ],
    shortDescription:
      "JWT doğrulamalı, konum paylaşımı ve kullanıcı yönetimi özelliklerine sahip React tabanlı etkileşimli lokasyon platformu.",
    fullDescription:
      "ShareLocation, React ile geliştirilmiş ve bir backend servisiyle entegre çalışan, kullanıcıların konumlarını paylaşabildiği bir web uygulamasıdır. Kullanıcılar konum ekleyebilir, bu konumlara başlık ve açıklama yazabilir, harita üzerinden güncelleyebilir ve tüm lokasyonları topluca görüntüleyebilir. Uygulama, kullanıcı kimlik doğrulaması için JWT sistemi kullanır ve güvenlik odaklı bir oturum yönetimi yapısına sahiptir. React Router ile çok sayfalı yapı, useContext ve özel hook'lar ile yetki kontrolü, lazy loading ile performans iyileştirmeleri sağlanmıştır. Bu proje, gerçek dünya senaryolarında kullanıcı yönetimi, form işlemleri ve API entegrasyonu konularında deneyim kazanmamı sağladı.",
    github: "https://github.com/ebrarkadir/FRONTEND",
    demo: "#",
  },
  {
    id: 8,
    title: "OnlineExamSystem",
    images: [
      "/assets/boiler.jpeg",
      "/assets/boiler2.jpeg",
      "/assets/boiler3.jpeg",
      "/assets/boiler4.jpeg",
    ],
    shortDescription:
      "ASP.NET MVC ile geliştirilmiş online sınav sistemi şablonu (boilerplate).",
    fullDescription:
      "OnlineExamSystem, ASP.NET MVC ve boilerplate yapı kullanılarak geliştirilmiş bir online sınav sistemi şablonudur. Kullanıcı yönetimi, sınav oluşturma, soru ekleme ve sonuç görüntüleme gibi temel işlevleri içerir. Bu proje, .NET mimarisinde boilerplate tasarımı uygulamayı öğrenmemi ve daha büyük çaplı sistemlerde katmanlı yapıların entegrasyon mantığını kavramamı sağladı.",
    github: "https://github.com/ebrarkadir/OnlineExamSystem",
    demo: "#",
  },
  {
    id: 9,
    title: "NewsWebSite",
    images: [
      "/assets/news.jpeg",
      "/assets/news1.jpeg",
      "/assets/news2.jpeg",
      "/assets/news3.jpeg",
    ],
    shortDescription:
      "ASP.NET Core ile geliştirilen, kategori filtreleme ve bağlantı yönlendirmeli haber portalı.",
    fullDescription:
      "NewsWebsite, ASP.NET Core kullanılarak geliştirilen basit ama işlevsel bir haber portalı uygulamasıdır. Kullanıcılar farklı kategorilere göre haberleri filtreleyebilir ve haber detaylarına yönlendirilerek ilgili içeriklere ulaşabilir. Bu proje sayesinde veritabanı yönetimi, API kullanımı, boilerplate yapı kullanımı ve Entity Framework migrasyon işlemleri konularında deneyim kazandım.",
    github: "https://github.com/ebrarkadir/NewsWebsite",
    demo: "#",
  },
  {
    id: 10,
    title: "OnlineExam",
    images: [
      "/assets/oe.jpeg",
      "/assets/oe1.jpeg",
      "/assets/oe2.jpeg",
      "/assets/oe3.jpeg",
    ],
    shortDescription:
      "ASP.NET MVC ile geliştirilen çevrimiçi sınav sistemi şablonu.",
    fullDescription:
      "Bu proje, ASP.NET MVC kullanılarak geliştirilmiş bir çevrimiçi sınav sistemi backend uygulamasıdır. Yönetici ve öğrenci rolleriyle kullanıcıların sınav oluşturmasını, sınavlara katılmasını ve sonuçların yönetilmesini sağlar. Projede veritabanı yönetimi, Entity Framework ile migrasyon işlemleri ve Autofac gibi bağımlılık enjeksiyon yapıları kullanılarak modüler ve sürdürülebilir bir yapı oluşturulmuştur. Bu proje sayesinde kurumsal yapılarda backend mantığını daha iyi kavrama fırsatı buldum.",
    github: "https://github.com/ebrarkadir/onlineExamination",
    demo: "https://ebrarkadir.github.io/portfolio/",
  },
  {
    id: 11,
    title: "MekanBul",
    images: ["/assets/mekan.png", "/assets/mekan1.png", "/assets/mekan2.png"],
    shortDescription:
      "React ile geliştirilen, kullanıcıların mekan ekleyip puanlayabildiği etkileşimli bir mekan keşif platformu.",
    fullDescription:
      "MekanBul, React kullanılarak geliştirilen interaktif bir mekan paylaşım ve değerlendirme platformudur. Kullanıcılar ziyaret ettikleri mekanları sisteme ekleyebilir, diğer kullanıcıların eklediği mekanlara puan vererek öneride bulunabilir. Uygulamanın temel amacı, kullanıcı deneyimini merkeze alan bir arayüzle React konusundaki bilgi ve yetkinliğimi artırmaktı. Bu proje sayesinde component yapısı, props, state yönetimi ve kullanıcı etkileşimlerini yönetme gibi React’in temel yapı taşlarını uygulamalı olarak öğrendim.",
    github: "https://github.com/ebrarkadir/mekan-bul",
    demo: "#",
  },

  {
    id: 12,
    title: "WeatherWebsite",
    images: [
      "/assets/weather.jpeg",
      "/assets/weather1.jpeg",
      "/assets/weather2.jpeg",
    ],
    shortDescription:
      "Şehir adıyla hava durumu bilgisi sunan ASP.NET Core MVC uygulaması.",
    fullDescription:
      "WeatherWebsite, kullanıcıların şehir adı girerek hava durumu bilgilerini öğrenebildiği bir ASP.NET Core MVC uygulamasıdır. Dış bir hava durumu API'sinden veri çekerek kullanıcılara anlık sıcaklık, nem ve rüzgar gibi bilgileri sunar. Eğitim ve geliştirme amacıyla hazırlanmış, sade ve genişletilebilir bir boilerplate projedir. Bu proje sayesinde API tüketimi, veri modelleme ve kullanıcı arayüzü ile veri sunumu gibi temel beceriler üzerinde pratik yapma fırsatı buldum.",
    github: "https://github.com/ebrarkadir/WeatherWebsite",
    demo: "#",
  },
];

export default projects;
