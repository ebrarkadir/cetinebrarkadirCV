// src/data/projectsData.js
const projects = [
   {
    id: 1,
    title: "ShiledWrt",
    images: [
      "/assets/shieldwrt.png",
      "/assets/shieldwrt1.jpeg",
      "/assets/shieldwrt2.jpeg",
      "/assets/shieldwrt3.jpeg",
      "/assets/shieldwrt4.jpeg",
    ],
    github: "https://github.com/ebrarkadir/ShieldWrt",
    demo: "#",
    translations: {
      tr: {
        title: "ShiledWrt",
        shortDescription:
          "OpenWRT destekli Raspberry Pi cihazı üzerinden firewall yönetimi sağlayan, React arayüzlü ve Node.js API tabanlı modern güvenlik çözümü.",
        fullDescription:
          "ShieldWrt, React ile geliştirilen kullanıcı dostu bir arayüz ve Node.js ile oluşturulmuş bir API altyapısıyla entegre çalışan, gerçek zamanlı firewall yönetimi sağlayan bir güvenlik çözümüdür. Kullanıcılar arayüz üzerinden özel kurallar tanımlayabilir; bu kurallar backend aracılığıyla OpenWRT işletim sistemine sahip Raspberry Pi cihazına iletilerek orada firewall yapılandırmalarına dönüştürülür ve uygulanır. Sistem, hem yönlendirici (router) hem de güvenlik duvarı (firewall) görevini üstlenen Raspberry Pi üzerinde aktif olarak çalışmaktadır. Bu proje sayesinde ağ güvenliği, kuralların otomatik yönetimi, API tasarımı ve gömülü sistemlerle entegrasyon konularında deneyim kazandım. Gerçek donanım üzerinde çalışan uçtan uca bir ağ güvenlik çözümüdür."
      },
      en: {
        title: "ShiledWrt",
        shortDescription:
          "A modern security solution with React UI and Node.js API for firewall management on Raspberry Pi running OpenWRT.",
        fullDescription:
          "ShieldWrt is a security solution that integrates a user-friendly React interface and a Node.js API backend for real-time firewall management. Users can define custom rules via the UI, which are then transmitted to a Raspberry Pi running OpenWRT where they are applied as firewall configurations. The system functions as both a router and a firewall directly on the Raspberry Pi. Through this project, I gained experience in network security, automated rule management, API design, and embedded systems integration. It is a full end-to-end network security system running on real hardware."
      }
    }
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
    github: "https://github.com/ebrarkadir/insurance_site",
    demo: "#",
    translations: {
      tr: {
        title: "mcetinsigorta.com",
        shortDescription:
          "MCetin Sigorta için geliştirilen ve aktif olarak kullanılan kapsamlı bir React tabanlı sigorta platformu.",
        fullDescription:
          "Bu proje, MCetin Sigorta şirketi için özel olarak tasarlanmış ve şirket tarafından aktif olarak kullanılan bir web platformudur. React ile geliştirilen sistem, kullanıcıların farklı sigorta türleri (trafik, kasko, sağlık vb.) hakkında bilgi almasını, teminat detaylarını incelemesini ve fiyat teklifi talep etmesini sağlar. Aynı zamanda, hasar anında izlenmesi gereken adımlar, sıkça sorulan sorular ve doğrudan iletişim seçenekleri gibi bilgilendirici içerikler sunar. Kullanıcı dostu arayüzü ve çok yönlü içeriğiyle MCetin Sigorta'nın dijital hizmet kanalını temsil eder. Proje yayında: https://mcetinsigorta.com/"
      },
      en: {
        title: "mcetinsigorta.com",
        shortDescription:
          "A comprehensive React-based insurance platform developed for and actively used by MCetin Sigorta.",
        fullDescription:
          "This project is a custom-built web platform actively used by MCetin Sigorta. Developed with React, it enables users to explore various insurance types (traffic, auto, health, etc.), review coverage details, and request quotes. It also provides guidance on claim processes, FAQs, and direct contact options. Its user-friendly design and versatile content make it the primary digital service channel for MCetin Sigorta. Live at: https://mcetinsigorta.com/"
      }
    }
  },
  {
    id: 3,
    title: ".NET Backend Project",
    images: [
      "/assets/dotnet3.jpg",
      "/assets/dotnet1.jpeg",
      "/assets/dotnet2.jpg",
    ],
    github: "https://github.com/ebrarkadir/.NetBackendProject",
    demo: "#",
    translations: {
      tr: {
        title: ".NET Backend Project",
        shortDescription:
          "ASP.NET Core Web API ile geliştirilen katmanlı mimariye sahip bir rent-a-car backend projesi.",
        fullDescription:
          ".NetBackendProject, ASP.NET Core Web API (.NET 6) kullanılarak geliştirilmiş, katmanlı mimariye sahip güçlü bir backend altyapısıdır. Temiz kod prensipleri, sürdürülebilirlik ve genişletilebilirlik ön planda tutularak yapılandırılmıştır. Proje, bir rent-a-car (araç kiralama) şirketi örneği üzerinden modellenmiş olup, eğitim, geliştirme veya hızlı başlangıç amaçlarıyla idealdir. Repository, Entity, Service ve Controller katmanlarını içeren yapısıyla backend geliştirme konusunda rehber niteliğindedir."
      },
      en: {
        title: ".NET Backend Project",
        shortDescription:
          "A layered architecture rent-a-car backend project built with ASP.NET Core Web API.",
        fullDescription:
          ".NetBackendProject is a robust backend system built using ASP.NET Core Web API (.NET 6) with layered architecture. It follows clean code principles and emphasizes sustainability and scalability. Modeled on a car rental company example, the project is ideal for educational, development, or quick-start purposes. With its Repository, Entity, Service, and Controller layers, it serves as a guide for backend development practices."
      }
    }
  },
  {
    id: 4,
    title: "Ip_port_scan",
    image: "/assets/scan.png",
    github: "https://github.com/ebrarkadir/Ip_Port_Scan",
    demo: "#",
    translations: {
      tr: {
        title: "Ip_port_scan",
        shortDescription:
          "Go ile geliştirilen, düşük seviyeli TCP SYN tabanlı port tarama aracı.",
        fullDescription:
          "Bu proje, Go programlama dili ile geliştirilmiş, düşük seviyeli TCP SYN taraması gerçekleştiren bir port tarama aracıdır. Gopacket ve pcap kütüphaneleri kullanılarak özel TCP SYN paketleri oluşturulur ve hedef IP adresine gönderilir. Gelen cevaplara göre portların açık ya da kapalı olduğu belirlenir. Bu yöntem, klasik connect() temelli tarayıcılardan farklı olarak, nmap’in -sS parametresinde kullandığı half-open scan (yarı-açık tarama) yaklaşımına benzer bir şekilde çalışır. Güvenlik araştırmaları ve ağ analizleri için güçlü bir araçtır."
      },
      en: {
        title: "Ip_port_scan",
        shortDescription:
          "A low-level TCP SYN-based port scanning tool developed with Go.",
        fullDescription:
          "This project is a port scanning tool developed in Go that performs low-level TCP SYN scans. Using gopacket and pcap libraries, it crafts custom SYN packets sent to the target IP address. Responses determine whether ports are open or closed. Unlike traditional connect() based scanners, this tool uses a half-open scan method similar to nmap’s -sS parameter. It is a powerful tool for security research and network analysis."
      }
    }
  },

  {
    id: 5,
    title: "Tcp_server_client",
    image: "/assets/tcp.png",
    github: "https://github.com/ebrarkadir/TCP_server-client",
    demo: "#",
    translations: {
      tr: {
        title: "Tcp_server_client",
        shortDescription:
          "Go dili ile geliştirilmiş, özel protokol kullanan TCP istemci-sunucu haberleşme uygulaması.",
        fullDescription:
          "Bu proje, Go programlama dili ile geliştirilmiş bir TCP sunucu-istemci uygulamasıdır. Uygulama, iki uç arasında veri iletimini sağlamak için özel olarak tasarlanmış bir binary protokol kullanır. Sistem performansını artırmak ve verimliliği maksimize etmek amacıyla çeşitli optimizasyon teknikleri entegre edilmiştir. Özellikle düşük seviye haberleşme, ağ programlama ve sistem geliştirme alanlarında öğrenim ve deneyim kazanmak isteyenler için ideal bir projedir."
      },
      en: {
        title: "Tcp_server_client",
        shortDescription:
          "A TCP client-server communication app using a custom protocol, developed in Go.",
        fullDescription:
          "This project is a TCP client-server application developed in Go. It uses a custom binary protocol designed specifically for data transmission between two endpoints. Various optimization techniques were integrated to boost performance and maximize efficiency. It’s an ideal project for gaining experience in low-level communication, network programming, and system development."
      }
    }
  },
  {
    id: 6,
    title: "FoodDB",
    images: [
      "/assets/fooddb.png",
      "/assets/fooddb1.png",
      "/assets/fooddb2.png"
    ],
    github: "https://github.com/ebrarkadir/FoodDB",
    demo: "#",
    translations: {
      tr: {
        title: "FoodDB",
        shortDescription:
          "FoodDb, React-Next.js kullanılarak yazılmış bir restoran yemek sipariş projesi.",
        fullDescription:
          "foodDB adlı yemek sipariş sitemiz, kullanıcıları ve restoranları doğrudan bir araya getirmek için tasarlanmıştır. Piyasadaki diğer yemek sipariş platformlarının aksine, aracı kurum olmadan kullanıcıları ve restoranları buluşturmayı amaçlamaktadır. Bu yaklaşım, yüksek komisyon ücretlerini ortadan kaldırarak kullanıcıların daha uygun fiyatlarla yemek siparişi vermelerini sağlarken, restoranların da aracı kuruluşlara komisyon ödemeden ürünlerini sergilemelerine imkan tanır."
      },
      en: {
        title: "FoodDB",
        shortDescription:
          "A restaurant food ordering project built with React and Next.js.",
        fullDescription:
          "FoodDB is a food ordering platform designed to connect customers directly with restaurants. Unlike other food delivery apps, it eliminates the middleman, allowing users to place orders at lower costs and restaurants to showcase their menu without paying high commissions. It was built using React and Next.js."
      }
    }
  },
  {
    id: 7,
    title: "ShareLocation",
    images: [
      "/assets/location.png",
      "/assets/location1.png",
      "/assets/location2.png",
      "/assets/location3.png"
    ],
    github: "https://github.com/ebrarkadir/FRONTEND",
    demo: "#",
    translations: {
      tr: {
        title: "ShareLocation",
        shortDescription:
          "JWT doğrulamalı, konum paylaşımı ve kullanıcı yönetimi özelliklerine sahip React tabanlı etkileşimli lokasyon platformu.",
        fullDescription:
          "ShareLocation, React ile geliştirilmiş ve bir backend servisiyle entegre çalışan, kullanıcıların konumlarını paylaşabildiği bir web uygulamasıdır. Kullanıcılar konum ekleyebilir, bu konumlara başlık ve açıklama yazabilir, harita üzerinden güncelleyebilir ve tüm lokasyonları topluca görüntüleyebilir. Uygulama, kullanıcı kimlik doğrulaması için JWT sistemi kullanır ve güvenlik odaklı bir oturum yönetimi yapısına sahiptir. React Router ile çok sayfalı yapı, useContext ve özel hook'lar ile yetki kontrolü, lazy loading ile performans iyileştirmeleri sağlanmıştır. Bu proje, gerçek dünya senaryolarında kullanıcı yönetimi, form işlemleri ve API entegrasyonu konularında deneyim kazanmamı sağladı."
      },
      en: {
        title: "ShareLocation",
        shortDescription:
          "An interactive location-sharing platform with JWT authentication and user management built using React.",
        fullDescription:
          "ShareLocation is a web application built with React and integrated with a backend service that allows users to share their locations. Users can add locations, write titles and descriptions, update them on the map, and view all locations collectively. The app uses JWT for authentication and features secure session management. It utilizes React Router for multi-page structure, useContext and custom hooks for access control, and lazy loading for performance. This project provided experience in real-world scenarios including user management, form handling, and API integration."
      }
    }
  },
  {
    id: 8,
    title: "OnlineExamSystem",
    images: [
      "/assets/boiler.jpeg",
      "/assets/boiler2.jpeg",
      "/assets/boiler3.jpeg",
      "/assets/boiler4.jpeg"
    ],
    github: "https://github.com/ebrarkadir/OnlineExamSystem",
    demo: "#",
    translations: {
      tr: {
        title: "OnlineExamSystem",
        shortDescription:
          "ASP.NET MVC ile geliştirilmiş online sınav sistemi şablonu (boilerplate).",
        fullDescription:
          "OnlineExamSystem, ASP.NET MVC ve boilerplate yapı kullanılarak geliştirilmiş bir online sınav sistemi şablonudur. Kullanıcı yönetimi, sınav oluşturma, soru ekleme ve sonuç görüntüleme gibi temel işlevleri içerir. Bu proje, .NET mimarisinde boilerplate tasarımı uygulamayı öğrenmemi ve daha büyük çaplı sistemlerde katmanlı yapıların entegrasyon mantığını kavramamı sağladı."
      },
      en: {
        title: "OnlineExamSystem",
        shortDescription:
          "An online exam system boilerplate developed using ASP.NET MVC.",
        fullDescription:
          "OnlineExamSystem is a boilerplate online exam system built with ASP.NET MVC. It includes core features such as user management, exam creation, question addition, and result viewing. This project helped me learn how to apply boilerplate structure in .NET architecture and understand the integration logic of layered systems in larger applications."
      }
    }
  },
  {
    id: 9,
    title: "NewsWebSite",
    images: [
      "/assets/news.jpeg",
      "/assets/news1.jpeg",
      "/assets/news2.jpeg",
      "/assets/news3.jpeg"
    ],
    github: "https://github.com/ebrarkadir/NewsWebsite",
    demo: "#",
    translations: {
      tr: {
        title: "NewsWebSite",
        shortDescription:
          "ASP.NET Core ile geliştirilen, kategori filtreleme ve bağlantı yönlendirmeli haber portalı.",
        fullDescription:
          "NewsWebsite, ASP.NET Core kullanılarak geliştirilen basit ama işlevsel bir haber portalı uygulamasıdır. Kullanıcılar farklı kategorilere göre haberleri filtreleyebilir ve haber detaylarına yönlendirilerek ilgili içeriklere ulaşabilir. Bu proje sayesinde veritabanı yönetimi, API kullanımı, boilerplate yapı kullanımı ve Entity Framework migrasyon işlemleri konularında deneyim kazandım."
      },
      en: {
        title: "NewsWebSite",
        shortDescription:
          "A news portal developed with ASP.NET Core, offering category filtering and article linking.",
        fullDescription:
          "NewsWebsite is a simple yet functional news portal application developed using ASP.NET Core. Users can filter news articles by category and are redirected to detailed content pages. Through this project, I gained experience in database management, API usage, implementing boilerplate structures, and applying Entity Framework migrations."
      }
    }
  },
  {
    id: 10,
    title: "OnlineExam",
    images: [
      "/assets/oe.jpeg",
      "/assets/oe1.jpeg",
      "/assets/oe2.jpeg",
      "/assets/oe3.jpeg"
    ],
    github: "https://github.com/ebrarkadir/onlineExamination",
    demo: "https://ebrarkadir.github.io/portfolio/",
    translations: {
      tr: {
        title: "OnlineExam",
        shortDescription:
          "ASP.NET MVC ile geliştirilen çevrimiçi sınav sistemi şablonu.",
        fullDescription:
          "Bu proje, ASP.NET MVC kullanılarak geliştirilmiş bir çevrimiçi sınav sistemi backend uygulamasıdır. Yönetici ve öğrenci rolleriyle kullanıcıların sınav oluşturmasını, sınavlara katılmasını ve sonuçların yönetilmesini sağlar. Projede veritabanı yönetimi, Entity Framework ile migrasyon işlemleri ve Autofac gibi bağımlılık enjeksiyon yapıları kullanılarak modüler ve sürdürülebilir bir yapı oluşturulmuştur. Bu proje sayesinde kurumsal yapılarda backend mantığını daha iyi kavrama fırsatı buldum."
      },
      en: {
        title: "OnlineExam",
        shortDescription:
          "An online exam system template developed using ASP.NET MVC.",
        fullDescription:
          "This project is an online exam backend application developed using ASP.NET MVC. It allows users with admin and student roles to create exams, participate in them, and manage results. It features modular and sustainable architecture using database management, Entity Framework migrations, and dependency injection via Autofac. Through this project, I gained deeper insight into backend logic in corporate-scale systems."
      }
    }
  },
  {
    id: 11,
    title: "MekanBul",
    images: [
      "/assets/mekan.png",
      "/assets/mekan1.png",
      "/assets/mekan2.png"
    ],
    github: "https://github.com/ebrarkadir/mekan-bul",
    demo: "#",
    translations: {
      tr: {
        title: "MekanBul",
        shortDescription:
          "React ile geliştirilen, kullanıcıların mekan ekleyip puanlayabildiği etkileşimli bir mekan keşif platformu.",
        fullDescription:
          "MekanBul, React kullanılarak geliştirilen interaktif bir mekan paylaşım ve değerlendirme platformudur. Kullanıcılar ziyaret ettikleri mekanları sisteme ekleyebilir, diğer kullanıcıların eklediği mekanlara puan vererek öneride bulunabilir. Uygulamanın temel amacı, kullanıcı deneyimini merkeze alan bir arayüzle React konusundaki bilgi ve yetkinliğimi artırmaktı. Bu proje sayesinde component yapısı, props, state yönetimi ve kullanıcı etkileşimlerini yönetme gibi React’in temel yapı taşlarını uygulamalı olarak öğrendim."
      },
      en: {
        title: "MekanBul",
        shortDescription:
          "An interactive place discovery platform where users can add and rate locations, built with React.",
        fullDescription:
          "MekanBul is an interactive place sharing and rating platform developed with React. Users can add locations they've visited, rate places added by others, and view recommendations. The main purpose of this app was to improve my skills in React with a focus on user experience. This project helped me understand core concepts like component structure, props, state management, and handling user interactions."
      }
    }
  },
  {
    id: 12,
    title: "WeatherWebsite",
    images: [
      "/assets/weather.jpeg",
      "/assets/weather1.jpeg",
      "/assets/weather2.jpeg"
    ],
    github: "https://github.com/ebrarkadir/WeatherWebsite",
    demo: "#",
    translations: {
      tr: {
        title: "WeatherWebsite",
        shortDescription:
          "Şehir adıyla hava durumu bilgisi sunan ASP.NET Core MVC uygulaması.",
        fullDescription:
          "WeatherWebsite, kullanıcıların şehir adı girerek hava durumu bilgilerini öğrenebildiği bir ASP.NET Core MVC uygulamasıdır. Dış bir hava durumu API'sinden veri çekerek kullanıcılara anlık sıcaklık, nem ve rüzgar gibi bilgileri sunar. Eğitim ve geliştirme amacıyla hazırlanmış, sade ve genişletilebilir bir boilerplate projedir. Bu proje sayesinde API tüketimi, veri modelleme ve kullanıcı arayüzü ile veri sunumu gibi temel beceriler üzerinde pratik yapma fırsatı buldum."
      },
      en: {
        title: "WeatherWebsite",
        shortDescription:
          "An ASP.NET Core MVC app that provides weather information by city name.",
        fullDescription:
          "WeatherWebsite is an ASP.NET Core MVC application that allows users to get real-time weather information by entering a city name. It fetches data from an external weather API and displays temperature, humidity, wind speed, and more. Created for educational and development purposes, it's a simple and extensible boilerplate project. I gained hands-on experience with API consumption, data modeling, and presenting data via user interfaces."
      }
    }
  }
];

export default projects;
