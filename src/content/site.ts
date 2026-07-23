import type {
  GalleryImage,
  HeroContent,
  NavLink,
  Review,
  Service,
  SiteConfig,
  TeamMember,
} from "@/types";

export const siteConfig: SiteConfig = {
  name: "Thessa Disain",
  tagline: "Luxury Beauty Salon",
  description:
    "Thessa Disain on luksuslik ilusalong Eestis — personaalne juuksehooldus, küüned, püsimeik ja näohooldused minimalistlikus, kõrgetasemelises keskkonnas.",
  url: "https://thessadisain.ee",
  locale: "et_EE",
  contact: {
    address: "Pärnu mnt 28, Tallinn 10141",
    phone: "+372 555 9876",
    email: "info@thessadisain.ee",
    hours: {
      weekdays: "E–R 10:00 – 19:00",
      saturday: "L 10:00 – 15:00",
    },
  },
};

export const navigationLinks: NavLink[] = [
  { href: "#teenused", label: "Teenused" },
  { href: "#hinnakiri", label: "Hinnakiri" },
  { href: "#meeskond", label: "Meeskond" },
  { href: "#galerii", label: "Galerii" },
  { href: "#kontakt", label: "Kontakt" },
];

export const footerLinks: NavLink[] = [
  { href: "/toopakkumised", label: "Tööpakkumised" },
];

export const heroContent: HeroContent = {
  eyebrow: "Premium ilusalong Tallinnas",
  title: "THESSA DISAIN",
  subtitle: "Luxury Beauty Salon",
  features: [
    { icon: "✨", label: "Professionaalsed iluspetsialistid" },
    { icon: "📍", label: "Mugav asukoht Tallinnas" },
    { icon: "🚗", label: "Tasuta parkimine klientidele" },
  ],
  primaryCta: {
    label: "Broneeri aeg",
    href: "#kontakt",
  },
  secondaryCta: {
    label: "Vaata teenuseid",
    href: "#teenused",
  },
  image: {
    src: "/images/hero.jpg",
    alt: "Thessa Disain luksuslik ilusalongi interjöör sooja valguse ja elegantse disainiga",
  },
};

export const services: Service[] = [
  {
    title: "Küünehooldus",
    icon: "💅",
    description:
      "Maniküür, geellakk, geelküüned ja pediküür — viimistletud tulemus premium toodetega.",
    href: "#kontakt",
  },
  {
    title: "Juuksuriteenused",
    icon: "💇",
    description:
      "Lõikus, värvimine ja hooldus, mis toob esile sinu loomuliku ilu ja isikliku stiili.",
    href: "#kontakt",
  },
  {
    title: "Püsimeik",
    icon: "✨",
    description:
      "Kulmude, huulte ja silmade püsimeik peente, püsivate ja loomulike tulemustega.",
    href: "#kontakt",
  },
  {
    title: "Ripsmed ja kulmud",
    icon: "👁️",
    description:
      "Ripsmepikendused ja kulmuhooldus harmoonilise, elegantse ja loomuliku ilmega.",
    href: "#kontakt",
  },
  {
    title: "Depilatsioon",
    icon: "🌿",
    description:
      "Professionaalne depilatsioon siledaks ja pehmeks nahuks — delikaatne ja tõhus hoolitsus.",
    href: "#kontakt",
  },
  {
    title: "Tätoveerimine",
    icon: "🖋️",
    description:
      "Kunstiline tätoveerimine personaalsete kujundite, täpse tehnika ja puhta stiiliga.",
    href: "#kontakt",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Thessa K.",
    role: "Asutaja & juhtstilist",
    bio: "Üle 15 aasta kogemust ajatu, modernse ilu loomisel.",
    image: "/images/team-1.jpg",
  },
  {
    name: "Liisa M.",
    role: "Vanemkolurist",
    bio: "Balayage ja dimensioonilise värvi spetsialist loomuliku liikumisega.",
    image: "/images/team-2.jpg",
  },
  {
    name: "Anna R.",
    role: "Küüned & nahahooldus",
    bio: "Detailidenle pühendunud hoolitsus, mis annab laitmatu tulemuse.",
    image: "/images/gallery-1.jpg",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/hero.jpg",
    alt: "Salongi interjöör sooja beeži toonidega",
    span: "wide",
  },
  {
    src: "/images/gallery-1.jpg",
    alt: "Stilist teeb juukselõikus",
    span: "tall",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Luksuslik maniküürijaam",
    span: "normal",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Näohoolduse protseduur",
    span: "normal",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Elegantne küünekunst",
    span: "wide",
  },
];

export const reviews: Review[] = [
  {
    quote:
      "Tõeline pühamu. Iga külastus tundub nagu privaatne puhkus — tähelepanu detailidele on võrratu.",
    name: "Sophie L.",
    service: "Juuksed & värv",
    rating: 5,
  },
  {
    quote:
      "Kõige stiilsem salongikogemus Tallinnas. Vaikne luksus parimal moel.",
    name: "Elena V.",
    service: "Näohooldus",
    rating: 5,
  },
  {
    quote:
      "Laitmatu teenindus, ilus ruum ja tulemused, mis alati ületavad ootusi.",
    name: "Maria T.",
    service: "Küünehooldus",
    rating: 5,
  },
];
