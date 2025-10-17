import type { AdConfig } from "../types/config";

// Configurazione pubblicità (testi tradotti in italiano)

// Annuncio 1 - Solo immagine (senza margini)
export const adConfig1: AdConfig = {
  image: {
    src: "/assets/images/d1.webp",
    alt: "Banner pubblicitario",
    link: "#",
    external: true,
  },
  closable: true, // Può essere chiuso dall'utente
  displayCount: -1,
  padding: {
    all: "0", // Zero margini, immagine a piena larghezza
  },
};

// Annuncio 2 - Contenuto completo
export const adConfig2: AdConfig = {
  title: "Supporta l'autore",
  content:
    "Se trovi utile questo sito, puoi supportare le mie creazioni! Il tuo aiuto mi permette di continuare a sviluppare giochi e scrivere storie.",
  image: {
    src: "/assets/images/d2.webp",
    alt: "Supporta l'autore",
    link: "/chi-sono/",
    external: false,
  },
  link: {
    text: "Dona supporto",
    url: "/chi-sono/",
    external: false,
  },
  closable: true,
  displayCount: -1,
  padding: {
    // all: "1rem", // puoi aggiungere margini se vuoi
  },
};
