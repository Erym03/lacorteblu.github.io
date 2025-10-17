import type {
  AnnouncementConfig,
  CommentConfig,
  ExpressiveCodeConfig,
  FooterConfig,
  LicenseConfig,
  ProfileConfig,
  SakuraConfig,
  SiteConfig,
} from "./types/config";
import { adConfig1, adConfig2 } from "./config/adConfig";
import { spineModelConfig, live2dModelConfig } from "./config/pioConfig";
import { sidebarLayoutConfig } from "./config/sidebarConfig";
import { fontConfig } from "./config/fontConfig";

// Lingua del sito
const SITE_LANG = "it";

export const siteConfig: SiteConfig = {
  title: "LaCorteBlu",
  subtitle: "Sviluppatore di videogiochi e scrittore fantasy",
  description:
    "Portfolio ufficiale di LaCorteBlu, dove convergono mondi di pixel e parole. Dai racconti di 'Una Corte di Corvi' ai progetti di game design e 3D art.",
  keywords: [
    "LaCorteBlu",
    "GameDev",
    "Pixel Art",
    "Scrittura Fantasy",
    "Astro",
    "Portfolio",
  ],

  lang: SITE_LANG,

  themeColor: {
    hue: 240, // Blu
    fixed: true,
    defaultMode: "dark",
  },
  

  favicon: [
    {
      src: "/assets/images/Favicon.png",
      sizes: "32x32",
    },
  ],

  logoIcon: {
    type: "image",
    value: "/assets/images/Avatar.jpg",
    alt: "LaCorteBlu Logo",
  },

  bangumi: { userId: "" },

  showLastModified: true,
  generateOgImages: false,

  pages: {
    anime: false,
    projects: true,
    timeline: true,
    skills: true,
  },

  backgroundWallpaper: {
    enable: true,
    mode: "banner", //O banner o overlay (sopra o trasparente)
    src: {
      desktop: "/assets/images/Castellos.gif",
      mobile: "/assets/images/bg-dark.jpg",
    },
    position: "100% 85%",
    banner: {
      homeText: {
        enable: true,
        title: "LaCorteBlu",
        subtitle: [
          "Emilio Cardaropoli",
          "Sviluppatore di videogiochi",
          "Scrittore di Fantasy e Fantascienza",
          "Sognatore",
        ],
        typewriter: {
          enable: true,
          speed: 90,
          deleteSpeed: 50,
          pauseTime: 2000,
        },
      },
      credit: {
        enable: { desktop: false, mobile: false },
        text: { desktop: "", mobile: "" },
        url: { desktop: "", mobile: "" },
      },
      navbar: {
        transparentMode: "full", //Semi o full
      },
      waves: {
        enable: { desktop: false, mobile: false },
      },
    },
    overlay: {
      zIndex: -1,
      opacity: 0.8,
      blur: 1,
    },
  },

  toc: { enable: true, depth: 3 },
  font: fontConfig,
};

export const profileConfig: ProfileConfig = {
  avatar: "/assets/images/Avatar.jpg",
  name: "LaCorteBlu",
  bio: "Ciao! Sono uno sviluppatore di videogiochi e scrittore fantasy. Amo creare mondi, scrivere storie e trasformarle in esperienze interattive.",
  links: [
    { name: "YouTube", icon: "fa6-brands:youtube", url: "https://www.youtube.com/@lacorteblu" },
    { name: "Instagram", icon: "fa6-brands:instagram", url: "https://www.instagram.com/lacorteblu" },
    { name: "GitHub", icon: "fa6-brands:github", url: "https://github.com/erym03" },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
  theme: "github-dark",
};

export const commentConfig: CommentConfig = {
  enable: false,
  twikoo: { envId: "https://twikoo.vercel.app", lang: "it" },
};

export const announcementConfig: AnnouncementConfig = {
  title: "Annuncio",
  content: "Benvenuto nel mio sito! Questo è un annuncio dimostrativo.",
  closable: true,
  link: { enable: true, text: "Scopri di più", url: "/chi-sono/", external: false },
};

export const footerConfig: FooterConfig = { enable: false };

export const sakuraConfig: SakuraConfig = {
  enable: false,
  sakuraNum: 21,
  limitTimes: -1,
  size: { min: 0.5, max: 1.1 },
  speed: { horizontal: { min: -1.7, max: -1.2 }, vertical: { min: 1.5, max: 2.2 }, rotation: 0.03 },
  zIndex: 100,
};

export const widgetConfigs = {
  profile: profileConfig,
  announcement: announcementConfig,
  layout: sidebarLayoutConfig,
  sakura: sakuraConfig,
  spine: spineModelConfig,
  live2d: live2dModelConfig,
  advertisement: adConfig1,
  advertisement2: adConfig2,
} as const;

export const umamiConfig = {
  enabled: false,
  apiKey: "api_XXXXXXXXXX",
  baseUrl: "https://api.umami.is",
  scripts: `<script defer src="XXXX.XXX" data-website-id="ABCD1234"></script>`.trim(),
} as const;
