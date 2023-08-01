// import images
import AboutImg from "./assets/img/about.svg";
import Feature1Img from "./assets/img/features/feature1.png";
import Feature2Img from "./assets/img/features/feature2.png";
import Feature3Img from "./assets/img/features/feature3.png";
import Feature4Img from "./assets/img/features/feature4.png";
import Avatar1Img from "./assets/img/testimonials/avatar1.png";
import Avatar2Img from "./assets/img/testimonials/avatar2.png";
import Avatar3Img from "./assets/img/testimonials/avatar3.png";
import Logo from "./assets/img/logo.png";
import HeroImage from "./assets/img/hero-img.png";
import Feature1BgImg from "./assets/img/features/feature1_bg.png";
import Feature2BgImg from "./assets/img/features/feature2_bg.png";
import Feature3BgImg from "./assets/img/features/feature3_bg.png";
import Feature4BgImg from "./assets/img/features/feature4_bg.png";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

export const navigationData = [
  {
    name: "Deliver",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Signup",
    href: "#",
  },
];

export const heroData = {
  title: `Order Products Faster Easier`,
  subtitle: `Order your favorite foods at any time and we will deliver them right to where you are.`,
  btnText: "Get Started",
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: "Find Out A Little More About Us",
  subtitle: "We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery",
};

export const featuresData = {
  title: "Some Services We Offer",
  subtitle: "With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "Payment Done",
      description: "Pay with Bank BCA or Gopay and without much ado",
      linkText: "Learn more",
      delay: "400",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "Find Your Product",
      description: "We offer sale of products through the Internet..",
      linkText: "Learn more",
      delay: "700",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "Print Out",
      description: "Print out service gives you convenience if someday you need print data",
      linkText: "Learn more",
      delay: "1000",
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: "Product Received",
      description: "In our app you can see the delay time of your order...",
      linkText: "Learn more",
      delay: "1300",
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: "Adnan",
    web: "adnan.com",
    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda iure saepe cupiditate incidunt. Fuga ex iure debitis, saepe quas error!",
    delay: "300",
  },
  {
    image: Avatar2Img,
    name: "Selfia",
    web: "selfia.com",
    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda iure saepe cupiditate incidunt. Fuga ex iure debitis, saepe quas error!",
    delay: "600",
  },
  {
    image: Avatar3Img,
    name: "Fathino",
    web: "fathino.com",
    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda iure saepe cupiditate incidunt. Fuga ex iure debitis, saepe quas error!",
    delay: "900",
  },
];

export const ctaData = {
  title: "Contact Us From Here",
  subtitle: "Get limited 1 week free try our features!",
  btnText1: "Learn more",
  btnText2: "Request Demo",
};

export const footerData = {
  logo: Logo,
  address: "Product Indonesia, Jl. Kemang II no.84b Depok, Jawa Barat",
  email: "fathinoadnan@gmail.com",
  phone: "085883056168",
  list1: [
    {
      name: "Profile",
      href: "#",
    },
    {
      name: "Feature",
      href: "#",
    },
    {
      name: "Careers",
      href: "#",
    },
    {
      name: "DW News",
      href: "#",
    },
  ],
  list2: [
    {
      name: "Support",
      href: "#",
    },
    {
      name: "Sign Up",
      href: "#",
    },
    {
      name: "Guide",
      href: "#",
    },
    {
      name: "Reports",
      href: "#",
    },
    {
      name: "Q & A",
      href: "#",
    },
  ],
  // socialList: [
  //   {
  //     icon: <FaInstagram />,
  //     href: "#",
  //   },
  //   {
  //     icon: <FaGithub />,
  //     href: "#",
  //   },
  // ],
};

export const copyrightData = {
  text: "@copyright Product Indonesia, 2023. All rights reserved",
  // icon: <BsChatDotsFill />,
};
