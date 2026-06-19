export type Lang = "ar" | "en";

export const translations = {
  ar: {
    dir: "rtl" as const,
    lang: "ar" as const,
    brand: "الأسواني",
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      packages: "الرحلات",
      about: "عن الأسواني",
      contact: "تواصل معنا",
    },
    common: {
      whatsapp: "واتساب",
      bookViaWhatsapp: "احجز عبر واتساب",
      explore: "استكشف",
      readMore: "اقرأ المزيد",
      from: "تبدأ من",
      langSwitch: "EN",
      langSwitchAria: "Switch to English",
    },
    hero: {
      eyebrow: "من قلب هولندا · إلى كل أوروبا",
      title: "أوروبا كما لم ترها من قبل.\nرحلة بهدوء، وذوقٍ، وقصص تُروى.",
      lede:
        "الأسواني شريكك الموثوق للسفر والتنقّل الفاخر في أوروبا، مع سائقين عرب محترفين، وحجوزات فنادق، وبرامج سياحية مصاغة بعناية.",
      cta: "اكتشف رحلاتنا",
      whatsapp: "تحدّث معنا الآن",
    },
    findTrip: {
      eyebrow: "ابحث عن رحلتك",
      title: "خطوات قليلة\nتفصلك عن أوّل حكاية.",
      body: "نصمّم لك رحلة على مقاسك: مدن أوروبية ساحرة، طبيعة جبلية، أو إجازة هادئة برفقة العائلة. نتولّى التفاصيل، أنت تستمتع باللحظة.",
      cta: "تصفّح الباقات",
    },
    services: {
      eyebrow: "خدماتنا",
      title: "كلّ ما تحتاجه لرحلةٍ مكتملة.",
      items: [
        {
          title: "رحلات سياحية",
          desc: "برامج سياحية مدروسة عبر أجمل مدن وقرى أوروبا.",
        },
        {
          title: "خدمات النقل",
          desc: "سيارات وفانات حديثة لنقل العائلات والمجموعات بأمان وراحة.",
        },
        {
          title: "سائقون عرب محترفون",
          desc: "سائقون يتحدّثون العربية، يعرفون الطرق ويهتمّون بتفاصيلك.",
        },
        {
          title: "حجز الفنادق",
          desc: "نحجز لك الفنادق الأنسب لذوقك وميزانيتك في كلّ وجهة.",
        },
      ],
    },
    lifestyle: {
      eyebrow: "أوقاتٌ تستحقّ أن تعيشها",
      title: "اترك كلّ شيء لنا.\nاستلقِ، وتنفّس، وتذكّر.",
      body: "كلّ تفصيل في رحلتك مدروس: من لحظة استقبالك في المطار، إلى الكوب الأخير من القهوة في الفندق.",
    },
    promise: {
      eyebrow: "وعدنا",
      title: "خدمة سياحية أوروبية\nبروحٍ عربية أصيلة.",
      body: "نخدم العائلات العربية والمسافرين الكرام منذ سنوات بنفس الالتزام: راحة بلا مفاجآت، وذوقٌ في كلّ التفاصيل.",
      cta: "احجز رحلتك",
    },
    testimonials: {
      eyebrow: "بكلماتهم",
      title: "قصصٌ سمعناها من ضيوفنا.",
      items: [
        {
          quote:
            "رحلة لا تُنسى من أمستردام إلى جبال الألب. السائق محترم، والخدمة فوق الممتاز.",
          name: "أبو خالد",
          city: "الرياض",
        },
        {
          quote:
            "أوّل مرة أسافر مع شركة عربية في أوروبا، صدقاً أحسست أني في بيتي.",
          name: "نور الهدى",
          city: "الكويت",
        },
        {
          quote:
            "نظّموا لنا رحلة عائلية بين باريس وبحيرة كومو، الأطفال انبسطوا جداً.",
          name: "عائلة الحربي",
          city: "جدّة",
        },
      ],
    },
    closing: {
      title: "هل أنت جاهز\nلكتابة فصلك الأوروبي؟",
      body: "تحدّث إلينا عبر واتساب، وسنبدأ بتفصيل رحلتك معاً.",
      cta: "ابدأ التخطيط",
    },
    footer: {
      tagline: "السفر، بهدوءِ من يعرف الطريق.",
      based: "ومقرّنا في هولندا · نخدمكم في أوروبا كلّها",
      rights: "© الأسواني للسفر والنقل. جميع الحقوق محفوظة.",
      columns: {
        explore: "تصفّح",
        company: "الشركة",
        contact: "تواصل",
      },
    },
    pages: {
      services: {
        title: "خدماتنا",
        lede:
          "أربع خدمات أساسية، مصاغة بكلّ عناية، لتشكّل معاً تجربة سفر مكتملة الأركان.",
      },
      packages: {
        title: "وجهاتٌ مختارة",
        lede:
          "مجموعة من الرحلات التي صمّمناها بأنفسنا، مستوحاة من أجمل لحظات السفر في أوروبا.",
      },
      about: {
        title: "عن الأسواني",
        lede:
          "بدأت الفكرة بسؤال بسيط: لماذا لا تكون رحلة المسافر العربي في أوروبا بنفس الذوق والراحة التي يعرفها في بيته؟",
        body1:
          "من مقرّنا في هولندا، وعلى مدار سنوات، نسجنا شبكة من السائقين العرب المحترفين، والشركاء الموثوقين في الفنادق والمطاعم، لنقدّم تجربة سفر تليق بضيوفنا.",
        body2:
          "نؤمن أنّ السفر ليس قائمة معالم تُزار، بل لحظات تُحفظ. ولذلك نهتم بالتفاصيل الصغيرة: نوع السيارة، توقيت الرحلة، الفندق الذي يطلّ على المنظر الصحيح.",
        values: [
          { title: "ثقة", body: "علاقتنا بضيوفنا قائمة على الصدق والوضوح." },
          { title: "ذوق", body: "اختياراتٌ مدروسة في كلّ تفصيل." },
          { title: "راحة", body: "أنت ضيف، ونحن نعتني بالباقي." },
        ],
      },
      contact: {
        title: "لنبدأ الحديث",
        lede:
          "أسرع طريقة للوصول إلينا هي واتساب. اكتب لنا، ونردّ عليك خلال ساعات قليلة.",
        hours: "أوقات الردّ: ٩ صباحاً حتى ٩ مساءً (بتوقيت أوروبا الوسطى)",
        areas: "نخدم: هولندا، بلجيكا، ألمانيا، فرنسا، سويسرا، النمسا، إيطاليا.",
      },
    },
  },
  en: {
    dir: "ltr" as const,
    lang: "en" as const,
    brand: "Al-Aswani",
    nav: {
      home: "Home",
      services: "Services",
      packages: "Journeys",
      about: "About",
      contact: "Contact",
    },
    common: {
      whatsapp: "WhatsApp",
      bookViaWhatsapp: "Book via WhatsApp",
      explore: "Explore",
      readMore: "Read more",
      from: "from",
      langSwitch: "AR",
      langSwitchAria: "التبديل إلى العربية",
    },
    hero: {
      eyebrow: "Based in the Netherlands · Driving across Europe",
      title: "Europe, the slow and elegant way.\nA journey worth telling.",
      lede:
        "Al-Aswani is your trusted partner for refined travel across Europe — professional Arabic-speaking chauffeurs, hand-picked hotels, and tours composed with care.",
      cta: "Browse journeys",
      whatsapp: "Talk to us",
    },
    findTrip: {
      eyebrow: "Find your trip",
      title: "A few small steps,\nand the first story begins.",
      body: "We compose your trip to fit you — storied cities, alpine mornings, or quiet family weeks by a lake. We carry the details; you keep the moment.",
      cta: "See packages",
    },
    services: {
      eyebrow: "What we do",
      title: "Everything a complete journey asks for.",
      items: [
        {
          title: "Tourist journeys",
          desc: "Tailored itineraries through Europe's most loved cities and quiet corners.",
        },
        {
          title: "Transportation",
          desc: "Modern, immaculate vans and cars for families and groups, anywhere in Europe.",
        },
        {
          title: "Arabic-speaking chauffeurs",
          desc: "Professional drivers who speak your language and know the road.",
        },
        {
          title: "Hotel booking",
          desc: "We arrange the right room, in the right neighbourhood, every time.",
        },
      ],
    },
    lifestyle: {
      eyebrow: "Time worth keeping",
      title: "Leave it all to us.\nLean back. Breathe. Remember.",
      body: "Every detail of your trip is considered — from the moment we meet you at arrivals, to the last cup of coffee at the hotel.",
    },
    promise: {
      eyebrow: "Our promise",
      title: "European travel,\nwith an Arab soul.",
      body: "We've quietly served families and travellers for years, with the same commitment: no surprises, only good taste in every detail.",
      cta: "Plan my trip",
    },
    testimonials: {
      eyebrow: "In their words",
      title: "Stories our guests have told us.",
      items: [
        {
          quote:
            "An unforgettable trip from Amsterdam to the Alps. Our driver was kind, the service was beyond excellent.",
          name: "Abu Khalid",
          city: "Riyadh",
        },
        {
          quote:
            "First time travelling in Europe with an Arab company — honestly, it felt like home.",
          name: "Nour Al-Huda",
          city: "Kuwait",
        },
        {
          quote:
            "They built us a family route from Paris to Lake Como. The kids are still talking about it.",
          name: "The Al-Harbi family",
          city: "Jeddah",
        },
      ],
    },
    closing: {
      title: "Ready to write\nyour European chapter?",
      body: "Message us on WhatsApp — we'll start sketching your trip together.",
      cta: "Start planning",
    },
    footer: {
      tagline: "Travel, with the quiet of someone who knows the road.",
      based: "Based in the Netherlands · Serving all of Europe",
      rights: "© Al-Aswani Travel & Transportation. All rights reserved.",
      columns: {
        explore: "Explore",
        company: "Company",
        contact: "Contact",
      },
    },
    pages: {
      services: {
        title: "Our services",
        lede:
          "Four core services, each composed with care, that together form a complete travel experience.",
      },
      packages: {
        title: "Curated destinations",
        lede:
          "A small collection of trips we've shaped ourselves, drawn from the moments we love most about Europe.",
      },
      about: {
        title: "About Al-Aswani",
        lede:
          "It began with a simple question: why shouldn't an Arab traveller find, in Europe, the same comfort and care they know at home?",
        body1:
          "From our base in the Netherlands, we've spent years building a quiet network of Arabic-speaking chauffeurs and trusted hotel and restaurant partners across Europe.",
        body2:
          "We believe a journey isn't a list of sights — it's a handful of moments. So we obsess over the small things: which car, which hour, which window looks at the right view.",
        values: [
          { title: "Trust", body: "Our relationship with guests is built on honesty and clarity." },
          { title: "Taste", body: "Considered choices, in every detail." },
          { title: "Ease", body: "You are the guest. We carry the rest." },
        ],
      },
      contact: {
        title: "Let's begin the conversation",
        lede:
          "The fastest way to reach us is on WhatsApp. Send a note — we reply within a few hours.",
        hours: "Reply hours: 9am–9pm Central European Time",
        areas: "We serve: Netherlands, Belgium, Germany, France, Switzerland, Austria, Italy.",
      },
    },
  },
} as const;

export type Dict = (typeof translations)[Lang];