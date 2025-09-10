export type FacilityKey =
  | "wifi"
  | "parkering"
  | "utsikt"
  | "dyr"
  | "fellesKjokken"
  | "fellesBad"
  | "uteomrade"
  | "barnevennlig"
  | "boblebad";

export type Hytte = {
  id: string;
  name: string;
  priceNok: number;
  images: string[];
  facilities: FacilityKey[];
  guestsMax: number;
  bedrooms: number;
  bedsDesc: string;
  airbnbUrl?: string;
};

// TREHYTTE
import tre01 from "../assets/hytter/trehytte/01.jpg";

// SKOGSBAD
import sko01 from "../assets/hytter/skogsbad/01.jpg";
import sko02 from "../assets/hytter/skogsbad/02.jpg";
import sko03 from "../assets/hytter/skogsbad/03.jpg";
import sko04 from "../assets/hytter/skogsbad/04.jpg";
import sko05 from "../assets/hytter/skogsbad/05.jpg";
import sko06 from "../assets/hytter/skogsbad/06.jpg";
import sko07 from "../assets/hytter/skogsbad/07.jpg";
import sko08 from "../assets/hytter/skogsbad/08.jpg";
import sko09 from "../assets/hytter/skogsbad/09.jpg";
import sko10 from "../assets/hytter/skogsbad/10.jpg";
import sko11 from "../assets/hytter/skogsbad/11.jpg";

// MINIHUS
import mini01 from "../assets/hytter/minihus/01.jpg";
import mini02 from "../assets/hytter/minihus/02.jpg";
import mini03 from "../assets/hytter/minihus/03.jpg";

// TEA GARDEN
import tea01 from "../assets/hytter/teagarden/01.jpg";
import tea02 from "../assets/hytter/teagarden/02.jpg";

export const hytter: Hytte[] = [
  {
    id: "trehytte",
    name: "Trehytte",
    priceNok: 1100,
    images: [tre01],
    facilities: [
      "wifi",
      "parkering",
      "utsikt",
      "dyr",
      "fellesKjokken",
      "fellesBad",
      "uteomrade",
      "barnevennlig",
    ],
    guestsMax: 2,
    bedrooms: 1,
    bedsDesc: "1 dobbeltseng",
    // airbnbUrl: "", // если будет ссылка — добавь
  },
  {
    id: "skogsbad",
    name: "Skogsbad",
    priceNok: 1066,
    images: [
      sko01,
      sko02,
      sko03,
      sko04,
      sko05,
      sko06,
      sko07,
      sko08,
      sko09,
      sko10,
      sko11,
    ],
    facilities: [
      "wifi",
      "parkering",
      "utsikt",
      "dyr",
      "fellesKjokken",
      "fellesBad",
      "uteomrade",
      "boblebad",
      "barnevennlig",
    ],
    guestsMax: 2,
    bedrooms: 1,
    bedsDesc: "1 dobbeltseng",
    airbnbUrl: "https://www.airbnb.com/l/AxQqDlfT",
  },
  {
    id: "minihus",
    name: "Minihus",
    priceNok: 1053,
    images: [mini01, mini02, mini03],
    facilities: [
      "wifi",
      "parkering",
      "utsikt",
      "dyr",
      "uteomrade",
      "barnevennlig",
    ],
    guestsMax: 4,
    bedrooms: 2,
    bedsDesc: "Soverom 1: 1 sovesofa • Soverom 2: 1 dobbeltseng",
    airbnbUrl: "https://www.airbnb.com/l/TSz75acS",
  },
  {
    id: "teagarden",
    name: "Tea garden",
    priceNok: 880,
    images: [tea01, tea02],
    facilities: [
      "wifi",
      "parkering",
      "utsikt",
      "dyr",
      "fellesKjokken",
      "fellesBad",
      "uteomrade",
    ],
    guestsMax: 1,
    bedrooms: 1,
    bedsDesc: "1 enkeltseng",
    airbnbUrl: "https://www.airbnb.com/l/9yDKTGiA",
  },
];
