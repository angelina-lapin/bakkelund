function globToArray(glob: Record<string, string>): string[] {
  return Object.entries(glob)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, v]) => v);
}

export type BadstuFacilityKey =
  | "wifi"
  | "parkering"
  | "utsikt"
  | "dyr"
  | "dusj"
  | "uteomrade"
  | "barnevennlig"
  | "privatBoblebad"; // пример, можно потом поменять/дополнить

export type Badstu = {
  id: string;
  name: string;
  description?: string;
  pricePerHourNok: number;
  images: string[];
  facilities: BadstuFacilityKey[];
  whatsapp?: string; // в формате "47XXXXXXXX"
  email?: string; // например "post@bakkelund.no"
};

// ГАЛЕРЕИ: положи сюда реальные фото (см. структуру ниже)
const skogensRoGallery = globToArray(
  import.meta.glob("../assets/badstuer/skogens-ro/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  }) as Record<string, string>
);

const underjordiskGallery = globToArray(
  import.meta.glob(
    "../assets/badstuer/underjordisk-badehall/*.{jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    }
  ) as Record<string, string>
);

const tredjeGallery = globToArray(
  import.meta.glob("../assets/badstuer/tredje/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  }) as Record<string, string>
);

export const badstuer: Badstu[] = [
  {
    id: "skogens-ro",
    name: "Skogens ro",
    description:
      "Kort beskrivelse — oppdaterer når vi får tekst fra kunden. En intim badstue i skogkanten.",
    pricePerHourNok: 100,
    images: skogensRoGallery,
    facilities: [
      "wifi",
      "parkering",
      "utsikt",
      "dyr",
      "dusj",
      "uteomrade",
      "barnevennlig",
    ],
    whatsapp: "47XXXXXXXX", // замени на реальный номер без +
    email: "post@bakkelund.no", // замени на реальную почту
  },
  {
    id: "underjordisk-badehall",
    name: "Underjordisk badehall",
    description:
      "Stemningsfull underjordisk badstue. Tekst-рыба — изменим позже.",
    pricePerHourNok: 70,
    images: underjordiskGallery,
    facilities: ["wifi", "parkering", "dusj", "uteomrade"],
    whatsapp: "47XXXXXXXX",
    email: "post@bakkelund.no",
  },
  {
    id: "tredje",
    name: "Tredje badstue",
    description: "Forberedelse til info — kommer snart.",
    pricePerHourNok: 0, // пока пусто/заготовка
    images: tredjeGallery, // можно оставить пустую папку
    facilities: [],
    whatsapp: "47XXXXXXXX",
    email: "post@bakkelund.no",
  },
];
