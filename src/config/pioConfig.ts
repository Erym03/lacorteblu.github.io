import type { SpineModelConfig, Live2DModelConfig } from "../types/config";

// Configurazione Spine (kanban musume) Avatar virtuale cringe e inutile
export const spineModelConfig: SpineModelConfig = {
  enable: false,
  model: {
    path: "/pio/models/spine/firefly/1310.json",
    scale: 1.0,
    x: 0,
    y: 0,
  },
  position: {
    corner: "bottom-left",
    offsetX: 0,
    offsetY: 0,
  },
  size: {
    width: 250,
    height: 280,
  },
  interactive: {
    enabled: true,
    clickAnimations: [
      "emoji_0",
      "emoji_1",
      "emoji_2",
      "emoji_3",
      "emoji_4",
      "emoji_5",
      "emoji_6",
    ],
    clickMessages: [
      "Ciao! Sono LaCorteBlu~",
      "Oggi è un buon giorno per creare! ✨",
      "Vuoi esplorare mondi fantastici insieme? 🌟",
      "Ricorda di prenderti una pausa ogni tanto~",
      "Hai qualcosa da condividere? 💫",
      "Andiamo a scoprire nuove avventure! 🚀",
      "Ogni storia ha il suo segreto~⭐",
      "Spero di portarti gioia e ispirazione! 💖",
    ],
    messageDisplayTime: 3000,
    idleAnimations: ["idle", "emoji_0", "emoji_1", "emoji_3", "emoji_4"],
    idleInterval: 8000,
  },
  responsive: {
    hideOnMobile: true,
    mobileBreakpoint: 768,
  },
  zIndex: 1000,
  opacity: 1.0,
};

// Configurazione Live2D (kanban musume)
export const live2dModelConfig: Live2DModelConfig = {
  enable: false,
  model: {
    path: "/pio/models/live2d/snow_miku/model.json",
  },
  position: {
    corner: "bottom-right",
    offsetX: 0,
    offsetY: 0,
  },
  size: {
    width: 230,
    height: 280,
  },
  interactive: {
    enabled: true,
    clickMessages: [
      "Ciao! Sono Miku~",
      "Hai bisogno di aiuto?",
      "Che bel tempo oggi!",
      "Vuoi giocare insieme?",
      "Non dimenticare di fare una pausa!",
    ],
    messageDisplayTime: 3000,
  },
  responsive: {
    hideOnMobile: true,
    mobileBreakpoint: 768,
  },
};
