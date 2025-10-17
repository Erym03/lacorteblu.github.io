import type { SidebarLayoutConfig } from "../types/config";

/**
 * Configurazione layout della barra laterale
 * Controlla quali componenti mostrare, l'ordine, le animazioni e il comportamento responsive
 */
export const sidebarLayoutConfig: SidebarLayoutConfig = {
  enable: true, // Abilita la barra laterale
  position: "left", // Posizione: left o right

  // Componenti della barra laterale
  components: [
    {
      type: "profile", // Componente profilo
      enable: true,
      order: 1,
      position: "top",
      class: "onload-animation",
      animationDelay: 0,
    },
    {
      type: "announcement", // Componente annuncio
      enable: true,
      order: 2,
      position: "top",
      class: "onload-animation",
      animationDelay: 50,
    },
    {
      type: "categories", // Componente categorie
      enable: true,
      order: 3,
      position: "sticky",
      class: "onload-animation",
      animationDelay: 150,
      responsive: {
        collapseThreshold: 5, // Collassa automaticamente se ci sono più di 5 categorie
      },
    },
    {
      type: "tags", // Componente tag
      enable: true,
      order: 5,
      position: "sticky",
      class: "onload-animation",
      animationDelay: 250,
      responsive: {
        collapseThreshold: 20, // Collassa automaticamente se ci sono più di 20 tag
      },
    },
    {
      type: "advertisement", // Componente pubblicità 1
      enable: false,
      order: 6,
      position: "sticky",
      class: "onload-animation",
      animationDelay: 300,
      configId: "ad1",
    },
    {
      type: "advertisement", // Componente pubblicità 2
      enable: false,
      order: 7,
      position: "sticky",
      class: "onload-animation",
      animationDelay: 350,
      configId: "ad2",
    },
  ],

  // Configurazione animazione predefinita
  defaultAnimation: {
    enable: true,
    baseDelay: 0,
    increment: 50, // Ogni componente aumenta il ritardo di 50ms
  },

  // Configurazione responsive
  responsive: {
    breakpoints: {
      mobile: 768, // Smartphone
      tablet: 1024, // Tablet
      desktop: 1280, // Desktop
    },
    layout: {
      mobile: "sidebar", // Mobile: barra laterale visibile
      tablet: "sidebar", // Tablet: barra laterale visibile
      desktop: "sidebar", // Desktop: barra laterale visibile
    },
  },
};
