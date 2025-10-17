import type { NavBarConfig, NavBarLink } from "../types/config";
import { LinkPreset } from "../types/config";
import { siteConfig } from "../config";

// Genera la configurazione della navbar dinamicamente in base alle pagine attive
const getDynamicNavBarConfig = (): NavBarConfig => {
  const links: (NavBarLink | LinkPreset)[] = [
    LinkPreset.Home,
    LinkPreset.Archive, // Archivio dei racconti
  ];

  // Se è attiva la sezione anime (qui non usata)
  if (siteConfig.pages.anime) {
    links.push(LinkPreset.Anime);
  }

  // Link personalizzati, con menu a più livelli
  links.push({
    name: "Link utili",
    url: "/links/",
    icon: "material-symbols:link",
    children: [
      {
        name: "GitHub",
        url: "https://github.com/erym03",
        external: true,
        icon: "fa6-brands:github",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/@lacorteblu",
        external: true,
        icon: "fa6-brands:youtube",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/lacorteblu",
        external: true,
        icon: "fa6-brands:instagram",
      },
    ],
  });

  links.push(LinkPreset.Friends); // Preset amici/collegamenti

  // Altri link in base alle pagine attive
  const otherChildren: NavBarLink[] = [];

  if (siteConfig.pages.projects) {
    otherChildren.push({
      name: "Progetti",
      url: "/projects/",
      icon: "material-symbols:work",
    });
  }

  if (siteConfig.pages.skills) {
    otherChildren.push({
      name: "Competenze",
      url: "/skills/",
      icon: "material-symbols:psychology",
    });
  }

  if (siteConfig.pages.timeline) {
    otherChildren.push({
      name: "Cronologia",
      url: "/timeline/",
      icon: "material-symbols:timeline",
    });
  }

  links.push({
    name: "Chi sono",
    url: "/content/",
    icon: "material-symbols:info",
    children: [LinkPreset.About, ...otherChildren],
  });

  return { links };
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
