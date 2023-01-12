import { StaticImageData } from "next/image";
import {
  facebookIcon,
  instagrammIcon,
  youtubeIcon,
} from "../assets/images/icons";

export const footerLinks: {
  id: number;
  image: StaticImageData;
  href: string;
}[] = [
  { id: 1, image: facebookIcon, href: "/facebook" },
  { id: 2, image: instagrammIcon, href: "/instagramm" },
  { id: 3, image: youtubeIcon, href: "/youtube" },
];

export const footer: {
  id: number;
  title: string;
  children: {
    id: number;
    title: string;
  }[];
}[] = [
  {
    id: 1,
    title: "Ofis",
    children: [
      {
        id: 1.1,
        title: "Saint-Petersburg 9th Krasno, house 8, office 88",
      },
      {
        id: 1.2,
        title: "Uzbekistan Kichik xalqa yo’li, house 11, office 2",
      },
    ],
  },
  {
    id: 2,
    title: "Xizmatlar",
    children: [
      {
        id: 2.1,
        title: "Joy band qilish",
      },
      {
        id: 2.2,
        title: "Ovqat tanlash",
      },
      {
        id: 2.3,
        title: "CIP va VIP",
      },
      {
        id: 2.4,
        title: "Yuklarni joylashtirish",
      },
    ],
  },
  {
    id: 3,
    title: "Biz haqimizda",
    children: [
      {
        id: 3.1,
        title: "Biz bilan bog’lanish",
      },
      {
        id: 3.2,
        title: "Biz haqimizda",
      },
    ],
  },
];
