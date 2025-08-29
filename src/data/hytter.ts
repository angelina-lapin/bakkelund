export type Hytte = {
  id: string;
  name: string;
  description: string;
  image: string;
  airbnbUrl: string;
};

export const hytter: Hytte[] = [
  {
    id: "trehytte",
    name: "Trehytte",
    description: "Unik tretopphytte midt i naturen.",
    image: "/src/assets/hytter.jpg",
    airbnbUrl: "https://airbnb.com/rooms/XXXX", // замени ссылками
  },
  {
    id: "fjellhytte",
    name: "Fjellhytte",
    description: "Koselig hytte med utsikt.",
    image: "/src/assets/hytter.jpg",
    airbnbUrl: "https://airbnb.com/rooms/YYYY",
  },
  {
    id: "skogshytte",
    name: "Skogshytte",
    description: "Rolig sted for avkobling.",
    image: "/src/assets/hytter.jpg",
    airbnbUrl: "https://airbnb.com/rooms/ZZZZ",
  },
];
