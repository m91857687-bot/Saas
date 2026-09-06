const translations = {

  ar: {

    "nav.overview": "نظرة عامة",
    "nav.features": "المميزات",
    "nav.tech": "التقنيات",
    "nav.structure": "البنية",
    "nav.docs": "التوثيق",
    "nav.about": "عن المشروع",

    "hero.eyebrow":
      "قالب Android تجاري احترافي",

    "hero.title1":
      "ابنِ تطبيق الذكاء الاصطناعي",

    "hero.title2":
      "على أساس احترافي",

    "hero.description":
      "NexAI هو قالب Android تجاري احترافي مبني بـ Kotlin وJetpack Compose، مع Clean Architecture وMVVM وبنية AI قابلة للتبديل والتوسع.",

    "hero.kotlin":
      "Kotlin",

    "hero.providers":
      "مزودات AI قابلة للتبديل",

    "hero.supabase":
      "جاهز لـ Supabase",

    "preview.user":
      "اكتب لي فكرة لتطبيق جديد",

    "preview.ai":
      "بالتأكيد. يمكننا تحويل فكرتك إلى مشروع Android منظم وقابل للتوسع.",

    "preview.input":
      "اكتب رسالتك...",

    "overview.label":
      "NEXAI",

    "overview.title":
      "قالب مبني لمشروع حقيقي",

    "overview.description":
      "NexAI ليس تطبيقًا تعليميًا بسيطًا أو مجرد واجهة. تم بناء القالب باستخدام بنية تفصل منطق الأعمال عن الواجهة ومصادر البيانات، مما يجعله أساسًا مناسبًا لتطوير منتجات AI مختلفة.",

    "overview.card1.title":
      "Production-Oriented",

    "overview.card1.text":
      "بنية منظمة ومكونات واضحة بدل تجميع كل منطق التطبيق داخل الشاشات.",

    "overview.card2.title":
      "AI Agnostic",

    "overview.card2.text":
      "واجهة AIProvider تسمح بإضافة مزود ذكاء اصطناعي دون إعادة بناء واجهة المحادثة.",

    "overview.card3.title":
      "Offline First",

    "overview.card3.text":
      "يتم حفظ المحادثات والرسائل محليًا باستخدام Room لإتاحة الوصول إلى السجل دون اتصال.",

    "overview.card4.title":
      "Supabase Ready",

    "overview.card4.text":
      "يتضمن المشروع مخطط Supabase مع Profiles وConversations وMessages وSubscriptions وRLS.",

    "features.label":
      "FEATURES",

    "features.title":
      "مميزات القالب",

    "features.description":
      "المزايا الموجودة في المشروع كما هي موضحة في وثائق المستودع.",

    "feature.ai.title":
      "Pluggable AI Architecture",

    "feature.ai.text":
      "بنية AIProvider تسمح بالتكامل مع Google Gemini وOpenAI وAnthropic أو Backend مخصص.",

    "feature.chat.title":
      "Professional Chat UI",

    "feature.chat.text":
      "واجهة محادثة مبنية باستخدام Jetpack Compose مع فقاعات رسائل وتخطيط متجاوب.",

    "feature.room.title":
      "Room Database",

    "feature.room.text":
      "قاعدة بيانات محلية باستخدام Room / SQLite لتخزين المحادثات والرسائل.",

    "feature.supabase.title":
      "Supabase Integration",

    "feature.supabase.text":
      "ملف supabase_schema.sql يتضمن الجداول والسياسات المطلوبة للبنية السحابية.",

    "feature.security.title":
      "Secure Secrets",

    "feature.security.text":
      "استخدام Secrets Gradle Plugin لمنع وضع مفاتيح API داخل Git.",

    "feature.theme.title":
      "Theme & Branding Engine",

    "feature.theme.text":
      "يمكن تغيير الألوان والخطوط والنصوص وهوية التطبيق من AppConfig وThemeConfig.",

    "tech.label":
      "TECH STACK",

    "tech.title":
      "التقنيات المستخدمة",

    "tech.kotlin":
      "لغة المشروع",

    "tech.compose":
      "واجهة المستخدم",

    "tech.material":
      "نظام التصميم",

    "tech.clean":
      "بنية التطبيق",

    "tech.mvvm":
      "إدارة منطق الواجهة",

    "tech.room":
      "التخزين المحلي",

    "tech.state":
      "إدارة الحالة",

    "tech.supabase":
      "Backend اختياري",

    "structure.label":
      "PROJECT STRUCTURE",

    "structure.title":
      "بنية المشروع",

    "structure.description":
      "المشروع مقسم إلى طبقات واضحة، مما يجعل قراءة الكود وتطويره أسهل.",

    "folder.core":
      "AppConfig وThemeConfig والثيم المركزي.",

    "folder.domain":
      "Business Logic وInterfaces وModels.",

    "folder.data":
      "Room DAOs وAI Providers وتنفيذ مصادر البيانات.",

    "folder.presentation":
      "شاشات Compose وViewModels وواجهات التطبيق.",

    "folder.di":
      "AppContainer وإدارة Dependency Injection.",

    "security.label":
      "SECURITY",

    "security.title":
      "المفاتيح السرية لا تنتمي إلى Git",

    "security.text":
      "يعتمد المشروع على Secrets Gradle Plugin لإدارة مفاتيح API وحقنها وقت البناء بدل تضمينها مباشرة داخل الكود المصدري.",

    "docs.label":
      "DOCUMENTATION",

    "docs.title":
      "التوثيق الموجود مع المشروع",

    "docs.description":
      "يتضمن المستودع ملفات توثيق مخصصة لمساعدة المطور على إعداد المشروع وفهم مكوناته.",

    "docs.readme":
      "نظرة عامة على المشروع والمميزات والتقنيات.",

    "docs.setup":
      "تعليمات إعداد وتشغيل المشروع.",

    "docs.supabase":
      "شرح إعداد قاعدة البيانات السحابية والمخطط.",

    "docs.features":
      "تفاصيل أعمق عن خصائص المنتج.",

    "faq.title":
      "أسئلة شائعة",

    "faq.q1":
      "ما هو NexAI؟",

    "faq.a1":
      "قالب Android تجاري لتسريع تطوير تطبيقات الذكاء الاصطناعي باستخدام Kotlin وJetpack Compose.",

    "faq.q2":
      "ما هي بنية التطبيق؟",

    "faq.a2":
      "يعتمد المشروع على Clean Architecture وMVVM مع فصل طبقات Presentation وDomain وData.",

    "faq.q3":
      "هل يمكن استخدام مزود AI مختلف؟",

    "faq.a3":
      "نعم. تم تصميم AIProvider ليكون نقطة التكامل مع Gemini أو OpenAI أو Anthropic أو Backend مخصص.",

    "faq.q4":
      "هل يحتاج التطبيق إلى الإنترنت دائمًا؟",

    "faq.a4":
      "المحادثات والسجل المحلي يمكن حفظهما باستخدام Room، مما يوفر تجربة Offline-First للبيانات المحلية.",

    "about.label":
      "ABOUT",

    "about.text":
      "مشروع يركز على تقديم أساس Android احترافي لتطبيقات الذكاء الاصطناعي، مع بنية حديثة وقابلة للتخصيص والتطوير.",

    "about.developer":
      "المطور",

    "about.company":
      "الشركة",

    "about.location":
      "المقر",

    "about.albaha":
      "الباحة، المملكة العربية السعودية",

    "footer.description":
      "قالب Android تجاري احترافي لتطبيقات الذكاء الاصطناعي."

  },


  en: {

    "nav.overview": "Overview",
    "nav.features": "Features",
    "nav.tech": "Tech Stack",
    "nav.structure": "Architecture",
    "nav.docs": "Documentation",
    "nav.about": "About",

    "hero.eyebrow":
      "Premium Commercial Android Template",

    "hero.title1":
      "Build your AI application",

    "hero.title2":
      "on a professional foundation",

    "hero.description":
      "NexAI is a commercial-grade Android template built with Kotlin and Jetpack Compose, featuring Clean Architecture, MVVM and a pluggable AI architecture.",

    "hero.kotlin":
      "Kotlin",

    "hero.providers":
      "Pluggable AI Providers",

    "hero.supabase":
      "Supabase Ready",

    "preview.user":
      "Give me an idea for a new app",

    "preview.ai":
      "Absolutely. We can turn your idea into a structured and scalable Android project.",

    "preview.input":
      "Write your message...",

    "overview.label":
      "NEXAI",

    "overview.title":
      "Built for a real project",

    "overview.description":
      "NexAI is not a simple tutorial application or just a UI prototype. It uses an architecture that separates business logic from UI and data sources, providing a strong foundation for different AI products.",

    "overview.card1.title":
      "Production-Oriented",

    "overview.card1.text":
      "Organized architecture and clear components instead of placing application logic directly inside screens.",

    "overview.card2.title":
      "AI Agnostic",

    "overview.card2.text":
      "The AIProvider interface allows AI providers to be added without rebuilding the chat UI.",

    "overview.card3.title":
      "Offline First",

    "overview.card3.text":
      "Conversations and messages are stored locally using Room for offline history access.",

    "overview.card4.title":
      "Supabase Ready",

    "overview.card4.text":
      "Includes a Supabase schema with Profiles, Conversations, Messages, Subscriptions and RLS.",

    "features.label":
      "FEATURES",

    "features.title":
      "Template Features",

    "features.description":
      "Features included in the project according to the repository documentation.",

    "feature.ai.title":
      "Pluggable AI Architecture",

    "feature.ai.text":
      "The AIProvider architecture supports Google Gemini, OpenAI, Anthropic or a custom backend.",

    "feature.chat.title":
      "Professional Chat UI",

    "feature.chat.text":
      "A Jetpack Compose chat interface with custom message bubbles and responsive layouts.",

    "feature.room.title":
      "Room Database",

    "feature.room.text":
      "Local Room / SQLite storage for conversations and messages.",

    "feature.supabase.title":
      "Supabase Integration",

    "feature.supabase.text":
      "The supabase_schema.sql file contains the required tables and security policies.",

    "feature.security.title":
      "Secure Secrets",

    "feature.security.text":
      "Uses the Secrets Gradle Plugin to keep API keys out of Git.",

    "feature.theme.title":
      "Theme & Branding Engine",

    "feature.theme.text":
      "Colors, typography, strings and application branding can be configured through AppConfig and ThemeConfig.",

    "tech.label":
      "TECH STACK",

    "tech.title":
      "Technology Stack",

    "tech.kotlin":
      "Project language",

    "tech.compose":
      "User interface",

    "tech.material":
      "Design system",

    "tech.clean":
      "Application architecture",

    "tech.mvvm":
      "UI logic",

    "tech.room":
      "Local storage",

    "tech.state":
      "State management",

    "tech.supabase":
      "Optional backend",

    "structure.label":
      "PROJECT STRUCTURE",

    "structure.title":
      "Project Structure",

    "structure.description":
      "The project is divided into clear layers, making the code easier to understand and extend.",

    "folder.core":
      "AppConfig, ThemeConfig and centralized UI theme.",

    "folder.domain":
      "Business logic, interfaces and models.",

    "folder.data":
      "Room DAOs, AI providers and data implementations.",

    "folder.presentation":
      "Compose screens, ViewModels and application UI.",

    "folder.di":
      "AppContainer and dependency injection.",

    "security.label":
      "SECURITY",

    "security.title":
      "Secrets do not belong in Git",

    "security.text":
      "The project uses the Secrets Gradle Plugin to manage API keys and inject them at build time instead of placing them directly in source code.",

    "docs.label":
      "DOCUMENTATION",

    "docs.title":
      "Included Documentation",

    "docs.description":
      "The repository includes dedicated documentation files to help developers configure and understand the project.",

    "docs.readme":
      "Project overview, features and technology stack.",

    "docs.setup":
      "Project setup and run instructions.",

    "docs.supabase":
      "Supabase database and schema integration guide.",

    "docs.features":
      "Detailed product feature information.",

    "faq.title":
      "Frequently Asked Questions",

    "faq.q1":
      "What is NexAI?",

    "faq.a1":
      "A commercial Android template designed to accelerate AI application development using Kotlin and Jetpack Compose.",

    "faq.q2":
      "What architecture does it use?",

    "faq.a2":
      "The project uses Clean Architecture and MVVM with separated Presentation, Domain and Data layers.",

    "faq.q3":
      "Can I use a different AI provider?",

    "faq.a3":
      "Yes. AIProvider is designed as the integration point for Gemini, OpenAI, Anthropic or a custom backend.",

    "faq.q4":
      "Does the application always require internet?",

    "faq.a4":
      "Conversations and local history can be stored with Room, providing an Offline-First experience for local data.",

    "about.label":
      "ABOUT",

    "about.text":
      "A project focused on providing a professional Android foundation for AI applications with a modern, customizable and extensible architecture.",

    "about.developer":
      "Developer",

    "about.company":
      "Company",

    "about.location":
      "Headquarters",

    "about.albaha":
      "Al-Baha, Saudi Arabia",

    "footer.description":
      "Premium commercial Android template for AI applications."

  }

};


function setLanguage(lang) {

  const dictionary = translations[lang];

  document.documentElement.lang = lang;

  document.documentElement.dir =
    lang === "ar" ? "rtl" : "ltr";


  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key = element.dataset.i18n;

      if (dictionary[key]) {
        element.textContent = dictionary[key];
      }

    });


  document.getElementById("languageBtn")
    .textContent =
      lang === "ar"
        ? "English"
        : "العربية";


  localStorage.setItem(
    "nexai-language",
    lang
  );
}


const savedLanguage =
  localStorage.getItem("nexai-language")
  || "ar";


setLanguage(savedLanguage);


document
  .getElementById("languageBtn")
  .addEventListener("click", () => {

    const current =
      document.documentElement.lang;

    setLanguage(
      current === "ar"
        ? "en"
        : "ar"
    );

  });
