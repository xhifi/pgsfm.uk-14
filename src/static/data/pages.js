import Slide1 from "@/static/images/slides/1.png";
import Slide2 from "@/static/images/slides/2.png";
import Slide3 from "@/static/images/slides/3.png";
import FeatureSecurityGuard from "@/static/images/features/security-guard-uk.jpg";
import FeatureSecurityGuard2 from "@/static/images/features/security-uk-2.jpg";
import FeatureSecurityGuard3 from "@/static/images/features/security-uk.jpg";
import ServiceUniformedSecurity from "@/static/images/features/uniformed-security.jpg";
import ServiceElectronicSecurity from "@/static/images/features/electronic-security.jpg";
import ServicePhysicalSecurity from "@/static/images/features/physical-security.png";
import ServiceCleaning from "@/static/images/features/cleaning.jpg";
import CleaningContractedCleaning from "@/static/images/slides/contracted-cleaning.jpg";
import CleaningOnDemandCleaning from "@/static/images/slides/on-demand-cleaning.jpg";
import CleaningOnSiteCleaning from "@/static/images/slides/on-site-cleaning.jpg";

const data = [
  {
    title: "Home",
    path: "/",
    icon: "house-fill",
    callToAction: {
      title: "Welcome to Professional Guard Services Ltd.",
      description: "",
      content: [
        {
          p: "We are a privately owned and independent Security company based in the United Kingdom. We provide highly experienced SIA licensed security professionals throughout the United Kingdom. We are a team of reliable, dedicated and proud ambitions and offer a complete security guard services to our clients while offering static and mobile guards plus key holding and alarm response solutions.",
        },
        {
          p: " We are experienced in providing security guard services to anyone for whatever reason and currently support to many industrial aspects including corporate sector, construction sites, private events as well as many industrial warehouses etc. Whether you need a temporary cover or long-term solution to your security needs, we help you to protect your lives, businesses and properties from crime.",
        },
      ],
    },
    slides: [
      {
        image: Slide3,
        title: "We serve Individuals and Companies alike",
        description:
          "We are a contractor and private company that provides security services to a wide range of industries. We are a team of reliable, dedicated and proud ambitions and offer a complete security guard services to our clients.",
        link: {
          icon: "whatsapp",
          text: "Chat over WhatsApp",
          ref: "https://wa.me/447888105705?text=Hi,%20I%20am%20interested%20in%20your%20services.%20Can%20we%20talk?",
        },
      },
      {
        image: Slide2,
        title: "Protecting You Like Our Own",
        description:
          "For whatever reason, if you want protection, we will protect you. We are experienced in providing security guard services to a range of industries including the corporate sector, construction sites or even an event.",
        link: {
          text: "Contact Us Today",
          ref: "/contact",
        },
      },
      {
        image: Slide1,
        title: "Serving Individuals and Companies in the whole United Kingdom",
        description:
          "We have been providing security services to a wide range of industries and individuals in the United Kingdom. We are a team of reliable, dedicated and proud ambitions and offer a complete security guard services to our clients.",
        certification: {
          badge: "",
          alt: "",
        },
        link: {
          text: "About Us",
          ref: "/about-us",
        },
      },
    ],
    features: [
      {
        heading: "About Us",
        image: FeatureSecurityGuard,
        orientation: "left",
        content: {
          p: [
            "We are a Security company based in London, United Kingdom and made of a team of professional and dedicated members striving to give you the excellence your security needs demand. we have the experience to appreciate why you need responsiveness, dependability, honesty and excellent value for money. And that’s what we deliver.",
            "We provide the best choice of reliable, effective and appropriate ways to meet your individual site requirements, risks and budgets.",
            "Working around the clock, today we boast an almost outstanding record of satisfying our clients. We work 24/7 to receive your calls and queries so that no delay is induced in the process.",
          ],
        },
        ref: {
          path: "",
          text: "",
        },
      },
      {
        heading: "Why Choose us?",
        image: FeatureSecurityGuard2,
        orientation: "right",
        content: {
          p: [
            "◉ We regularly update the sites we guard, do monthly administrative visits onsite and record officer data for any complaints.",
            "◉ We consider communication to be the paramount feature of our services. We keep you informed of any changes or updates that are made to your site.",
            "◉ We work tirelessly to protect you and your property from any potential harm that may befell it.",
            "◉ We are always available, around the clock, 24/7 to answer your calls and to respond you as soon as we can.",
            "◉ We charge competitive rates and provide the best services in the industry.",
          ],
        },
        ref: {
          path: "",
          text: "",
        },
      },
    ],
    solutions: [
      {
        heading: "Based in the United Kingdom",
        content: [
          {
            p: "We are located in the United Kingdom Croydon area and from there, we get to deal in the whole United Kingdom with each and every potential or existing client. Being in the United Kingdom also helps us mitigate potential local threats and gives us a much diverse identification of problems that can occur for you.",
          },
        ],
      },
      {
        heading: "Meeting the Industry Standards",
        content: [
          {
            p: "We carry out vetting process to recruit staff as per British standards so you can rely on us in the hour of need. We make sure that each and everything that is done for you is done right and by the books.",
          },
        ],
      },
      {
        heading: "Around the Clock Support",
        content: [
          {
            p: "You can call us anytime and from anywhere and we will make sure that we respond you. Our 24/7 calls policy has helped many people and we will continue to make sure that it keeps working that way.",
          },
        ],
      },
      {
        heading: "Satisfaction & Peace of Mind",
        content: [
          {
            p: "We strive to meet client-centered expectations and requirements. If any adjustments are requested by the client or officer, we promptly implement the necessary changes without delay.",
          },
        ],
      },
    ],
    expertise: [
      {
        heading: "Calls Answered",
        percent: "100",
      },
      {
        heading: "Sites Visited in 24 Hours",
        percent: "90",
      },
      {
        heading: "Work Scheduled within 24 Hours",
        percent: "93",
      },
      {
        heading: "Customer Satisfaction",
        percent: "90",
      },
    ],
  },
  {
    title: "About Us",
    description: "",
    path: "/about",
    icon: "info-circle-fill",
    features: [
      {
        heading: "About Us",
        image: FeatureSecurityGuard3,
        orientation: "left",
        content: {
          h: "Welcome to Professional Guard Services Ltd.",
          p: [
            "We are a privately owned and independent Security company based in the United Kingdom. We provide highly experienced SIA licensed security professionals throughout the United Kingdom. We are a team of reliable, dedicated and proud ambitions and offer a complete security guard services to our clients.",
            "We are experienced in providing security guard services to anyone for whatever reason and currently support to many industrial aspects including corporate sector, construction sites, private events as well as many industrial warehouses etc. Whether you need a temporary cover or long-term solution to your security needs, we help you to protect your lives, businesses and properties from crime.",
          ],
        },
        ref: {
          path: "",
          text: "",
        },
      },
    ],
  },
  {
    title: "Services",
    path: "/services",
    icon: "clipboard2-check-fill",
    services: [
      {
        heading: "Concierge Services",
        icon: "door-closed-fill",
        content: [
          {
            p: "Our front-of-house and reception services are focused on creating a positive first impression and ensuring an exceptional visitor experience.",
          },
        ],
        ref: {
          path: "/",
          text: "Learn More",
        },
      },
      {
        heading: "Uniformed Services",
        icon: "shield-shaded",
        content: [
          {
            p: "Our exceptionally experienced uniformed and identifiable guards are always ready to meet the client's needs & expectation at market competitive rate.",
          },
        ],
        ref: {
          path: "/",
          text: "Learn More",
        },
      },
      {
        heading: "Mobile Patrols",
        icon: "megaphone-fill",
        content: [
          {
            p: "We also provide GPS equipped mobile patrol guards around your premesis so that they can actively monitor and accurately record times of visits and alarm responses.",
          },
        ],
        ref: {
          path: "/",
          text: "Learn More",
        },
      },
      {
        heading: "CCTV Monitoring",
        icon: "gear-wide-connected",
        content: [
          {
            p: "Provided the equipment, we provide outstanding CCTV monitoring services to our clients with a team of professionals who are always on the lookout for any suspicious activity.",
          },
        ],
        ref: {
          path: "/",
          text: "Learn More",
        },
      },
      {
        heading: "Industrial / Warehouse Security",
        icon: "buildings-fill",
        content: [
          {
            p: "Our warehouse and industrial security services are designed to safeguard your assets, personnel, and operations around the clock. With specialized teams trained to handle the unique challenges of industrial environments, we provide comprehensive protection.",
          },
        ],
        ref: {
          path: "/",
          text: "Learn More",
        },
      },
      {
        heading: "Cleaning Services",
        icon: "recycle",
        content: [
          {
            p: "We provide a comprehensive cleaning services to our clients that include regular cleanups for offices, warehouses and end to end site cleaning.",
          },
        ],
        ref: {
          path: "/",
          text: "Learn More",
        },
      },
    ],
    features: [
      {
        heading: "Contracted Cleaning Services",
        image: ServiceCleaning,
        orientation: "right",
        content: {
          p: [
            "Our contracted cleaning services are tailored to meet the specific needs of offices, corporate buildings, and warehouses. We ensure a spotless and hygienic environment, promoting productivity and well-being for your employees and visitors. With flexible scheduling, eco-friendly products, and a professional team, we deliver consistent and thorough cleaning solutions that maintain the highest standards of cleanliness and presentation across your facilities.",
          ],
          ul: [
            "• Secure and safe after-hours cleaning",
            "• Contracted Office Cleaning",
            "• Corporate Buildings Cleaning",
            "• Regular Contracted Cleaning",
            "• Regular and hygenic Office and School cleaning",
          ],
        },
        ref: {
          path: "",
          text: "",
        },
      },
    ],
    sprites: [
      {
        heading: "Construction",
        description:
          "Integrating wireless or hardwired construction site CCTV systems with full-reporting biometric access control turnstiles and fire alarms to properly protect your site as well as your workforce.",
        icon: "building-fill",
      },
      {
        heading: "Vacant Property",
        description:
          "All the services landlords and property managers need to mitigate risks at vulnerable sites, and ensure insurance compliance – pro-actively, efficiently and cost-effectively.",
        icon: "building-fill-dash",
      },
      {
        heading: "Retail Businesses",
        description:
          "You need discretion, trust and responsiveness when managing multiple closures. Our expert teams of guards and locksmiths ensure sites and stock are protected.",
        icon: "shop",
      },
    ],
    miscellaneous: [
      {
        heading: "Uniformed Security",
        image: ServiceUniformedSecurity,
        list: ["Licensed Security Guards", "Security Patrol", "Risk Mitigation & Management", "Site Security", "Event Security"],
      },
      {
        heading: "Physical Security",
        image: ServiceElectronicSecurity,
        list: ["Door Supervisors", "Corporate Protection & Security", "Static Guarding", "Immediate Response Team", "Event Security"],
      },
      {
        heading: "Some Specialized Sectors",
        image: ServicePhysicalSecurity,
        list: [
          "Corporate Buildings",
          "Warehouse Facilities Management",
          "Hospitals & Schools",
          "Public Sector Facilities Management",
          "Retail Facilities Management",
        ],
      },
    ],
  },
  {
    title: "Cleaning",
    path: "/cleaning",
    icon: "stars",
    features: [
      {
        heading: "Some Heading",
        image: "",
        content: [
          {
            p: "First Line of the Paragraph.",
          },
        ],
        ref: {
          path: "",
          text: "",
        },
      },
    ],
    services: [
      {
        heading: "Site Inspection",
        icon: "binoculars-fill",
        content: [
          {
            p: "Site inspection for cleaning is also a part of our top services in this category. It is important to know how much time and effort would it take to clean a site and a survey should be in order.",
          },
        ],
        ref: {
          path: "/",
          text: "Learn More",
        },
      },
      {
        heading: "Site Cleaning",
        icon: "geo-fill",
        content: [
          {
            p: "Contracted or on-demand, we have crews specifically built for on-site cleaning for you.",
          },
        ],
        ref: {
          path: "/",
          text: "Learn More",
        },
      },
      {
        heading: "Contracted Cleaning",
        icon: "lightning-charge-fill",
        content: [
          {
            p: "If your workforce uses your site regularly we can manage regular and secure after-hours cleaning services.",
          },
        ],
        ref: {
          path: "/",
          text: "Learn More",
        },
      },
    ],
    slides: [
      {
        image: CleaningContractedCleaning,
        title: "Contracted Cleaning",
        description:
          "We provide cleaning services to the masses such as big corporations, hospitals, schools and hotels etc. on contracted basis. We provide all contracted and regular cleaning services to the corporate sector. We also offer disaster cleaning as a service.",
        link: {
          text: "About Us",
          ref: "/about-us",
        },
      },
      {
        image: CleaningOnDemandCleaning,
        title: "On-Demand Cleaning",
        description:
          "We are also available for on-demand cleaning as in, we will clean your site and fabric without any contract as well. You can just bring in or hire us for a one-time service.",
        link: {
          text: "Our Services",
          ref: "/services",
        },
      },
      {
        image: CleaningOnSiteCleaning,
        title: "On Site Cleaning",
        description:
          "We specefically specialize in on-site cleaning and disaster cleaning. If you need us to specefically clean a warehouse or a building, regardless the cause, we will do it for you.",
        link: {
          text: "Our Services",
          ref: "/services",
        },
      },
    ],
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: "telephone-fill",
    features: [
      {
        heading: "Some Heading",
        image: "",
        content: [
          {
            p: "First Line of the Paragraph.",
          },
        ],
        ref: {
          path: "",
          text: "",
        },
      },
    ],
  },
];

export default data;
