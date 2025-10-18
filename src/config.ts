import type {
	AnnouncementConfig,
	CommentConfig,
	ExpressiveCodeConfig,
	FooterConfig,
	FullscreenWallpaperConfig,
	LicenseConfig,
	MusicPlayerConfig,
	NavBarConfig,
	ProfileConfig,
	SakuraConfig,
	SidebarLayoutConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";


// Rimosso import di i18n per evitare dipendenze circolari

// Definizione della lingua del sito
const SITE_LANG = "it"; // Codice lingua, ad esempio: 'en', 'zh_CN', 'ja', ecc.

export const siteConfig: SiteConfig = {
	title: "LaCorteBlu",
	subtitle: "Emilio Cardaropoli",

	lang: SITE_LANG as any,

	themeColor: {
		hue: 240, // Tonalità del colore principale del tema, da 0 a 360. Es: rosso:0, ciano:200, turchese:250, rosa:345
		fixed: true, // Nasconde il selettore del colore tema ai visitatori
	},

	bangumi: {
		userId: "your-bangumi-id", // Imposta qui il tuo ID utente Bangumi, puoi usare "sai" come test
	},

	anime: {
		mode: "local", // Modalità pagina anime: "bangumi" usa l’API Bangumi, "local" usa configurazione locale
	},

	banner: {
		enable: true, // Abilita la modalità banner con sfondo

		// Supporta una singola immagine o un array. Se l’array > 1, attiva la modalità carosello
		src: {
			desktop: [
				"/assets/desktop-banner/Castellos.gif",
			], // Immagini banner desktop
			mobile: [
				"/assets/desktop-banner/Castellos.gif",
			], // Immagini banner mobile
		},

		position: "bottom", // Equivalente a object-position, supporta solo 'top', 'center', 'bottom'

		carousel: {
			enable: false, // Se true: abilita il carosello per immagini multiple. Se false: mostra una a caso
			interval: 1.5, // Intervallo del carosello (secondi)
		},

		// Supporto per API PicFlow (API immagini intelligenti)
		imageApi: {
			enable: false, // Abilita API immagini
			url: "http://domain.com/api_v2.php?format=text&count=4", // URL API, ritorna testo con link di immagini
		},
		// Deve usare il formato di ritorno "Text" da PicFlow API (format=text)
		// Progetto API: https://github.com/matsuzaka-yuki/PicFlow-API
		// Configurala tu stesso se necessario

		homeText: {
			enable: true, // Mostra testo personalizzato nella home
			title: "LaCorteBlu", // Titolo principale sul banner
			subtitle: [
				"Emilio Cardaropoli",
				"Game Developer",
				"Scrittore",
				"Sognatore",
			],
			typewriter: {
				enable: true, // Effetto macchina da scrivere sul sottotitolo
				speed: 90, // Velocità di scrittura (ms)
				deleteSpeed: 50, // Velocità di cancellazione (ms)
				pauseTime: 2000, // Pausa dopo il testo completo (ms)
			},
		},

		credit: {
			enable: false, // Mostra testo di credito per le immagini del banner
			text: "Descrizione", // Testo del credito
			url: "", // (Opzionale) Link alla fonte o all’artista
		},

		navbar: {
			transparentMode: "full", // Modalità trasparenza navbar: "semi", "full", "semifull" (dinamica)
		},
	},
	toc: {
		enable: true, // Abilita il sommario (Table of Contents)
		depth: 3, // Profondità TOC, da 1 a 6 (es: 2 mostra h1 e h2)
	},
	generateOgImages: false, // Genera immagini OpenGraph. Sconsigliato in locale (rallenta molto)
	favicon: [
		// Lascia vuoto per usare l’icona predefinita
		// {
		//   src: '/favicon/icon.png',
		//   theme: 'light',
		//   sizes: '32x32',
		// }
	],

	// Configurazione dei font
	font: {
		zenMaruGothic: {
			enable: true, // Font rotondo, adatto per giapponese e inglese (meno per cinese)
		},
		hanalei: {
			enable: false, // Font Hanalei, adatto per il cinese
		},
	},
	showLastModified: true, // Mostra la data di "ultima modifica" negli articoli
};

export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	enable: false, // Abilita sfondo a schermo intero (valido solo senza Banner)
	src: {
		desktop: [
			"assets/desktop-banner/d1.webp",
		],
		mobile: [
			"assets/mobile-banner/m1.webp",
		],
	},
	position: "center", // Posizione sfondo
	carousel: {
		enable: true, // Abilita carosello
		interval: 1, // Intervallo (secondi)
	},
	zIndex: -1, // Livello di profondità (dietro agli elementi principali)
	opacity: 0.8, // Opacità dello sfondo
	blur: 1, // Livello di sfocatura dello sfondo
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		// Supporta link personalizzati e menu a più livelli
		{
			name: "Link",
			url: "/links/",
			icon: "material-symbols:link",
			children: [
				{
					name: "GitHub",
					url: "https://github.com/matsuzaka-yuki/Mizuki",
					external: true,
					icon: "fa6-brands:github",
				},
				{
					name: "Bilibili",
					url: "https://space.bilibili.com/701864046",
					external: true,
					icon: "fa6-brands:bilibili",
				},
				{
					name: "Gitee",
					url: "https://gitee.com/matsuzakayuki/Mizuki",
					external: true,
					icon: "mdi:git",
				},
			],
		},
		{
			name: "My",
			url: "/content/",
			icon: "material-symbols:person",
			children: [
				LinkPreset.Anime,
				LinkPreset.Diary,
				{
					name: "Galleria",
					url: "/albums/",
					icon: "material-symbols:photo-library",
				},
			],
		},
		{
			name: "Altro",
			url: "#",
			icon: "material-symbols:more-horiz",
			children: [
				{
					name: "Progetti",
					url: "/projects/",
					icon: "material-symbols:work",
				},
				{
					name: "Competenze",
					url: "/skills/",
					icon: "material-symbols:psychology",
				},
				{
					name: "Cronologia",
					url: "/timeline/",
					icon: "material-symbols:timeline",
				},
			],
		},
		{
			name: "Info",
			url: "/content/",
			icon: "material-symbols:info",
			children: [LinkPreset.About, LinkPreset.Friends],
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/Avatar.jpg", // Percorso relativo a /src. Se inizia con "/", relativo a /public
	name: "Emilio Cardaropoli",
	bio: "Gamedeveloper e Scrittore",
	links: [
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/701864046",
		},
		{
			name: "Gitee",
			icon: "mdi:git",
			url: "https://gitee.com/matsuzakayuki",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/matsuzaka-yuki",
		},
		{
			name: "Discord",
			icon: "fa6-brands:discord",
			url: "https://discord.gg/MqW6TcQtVM",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Nota: alcuni stili (es. colore di sfondo) sono sovrascritti — vedi astro.config.mjs
	// Scegli un tema scuro, poiché questo tema supporta solo sfondi scuri
	theme: "github-dark",
};

export const commentConfig: CommentConfig = {
	enable: false, // Abilita i commenti. Se false, il componente non verrà mostrato
	twikoo: {
		envId: "https://twikoo.vercel.app",
		lang: "en", // Lingua del sistema di commenti Twikoo
	},
};

export const announcementConfig: AnnouncementConfig = {
	title: "Annuncio",
	content: "Benvenuto nel mio blog! Questo è un annuncio di esempio.",
	closable: true, // Permette all’utente di chiudere l’annuncio
	link: {
		enable: true, // Abilita link
		text: "Scopri di più", // Testo del link
		url: "/about/", // URL del link
		external: false, // Link interno
	},
};

export const musicPlayerConfig: MusicPlayerConfig = {
	enable: true, // Abilita il lettore musicale
};

export const footerConfig: FooterConfig = {
	enable: false, // Abilita HTML personalizzato nel footer
};

// Modifica direttamente FooterConfig.html per aggiungere contenuti personalizzati

/**
 * Configurazione layout della sidebar
 * Controlla visibilità, ordine, animazioni e comportamento responsive
 */
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	enable: true, // Abilita la sidebar
	position: "left", // Posizione: sinistra o destra
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
			type: "announcement", // Componente annunci
			enable: false,
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
				collapseThreshold: 5, // Collassa se più di 5 categorie
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
				collapseThreshold: 20, // Collassa se più di 20 tag
			},
		},
	],

	defaultAnimation: {
		enable: true,
		baseDelay: 0,
		increment: 50,
	},

	responsive: {
		breakpoints: {
			mobile: 768,
			tablet: 1024,
			desktop: 1280,
		},
		layout: {
			mobile: "sidebar",
			tablet: "sidebar",
			desktop: "sidebar",
		},
	},
};

export const sakuraConfig: SakuraConfig = {
	enable: false, // Effetto petali di ciliegio disabilitato
	sakuraNum: 21, // Numero di petali
	limitTimes: -1, // Numero massimo di cicli (-1 = infinito)
	size: {
		min: 0.5, // Dimensione minima (moltiplicatore)
		max: 1.1, // Dimensione massima
	},
	opacity: {
		min: 0.3,
		max: 0.9,
	},
	speed: {
		horizontal: {
			min: -1.7,
			max: -1.2,
		},
		vertical: {
			min: 1.5,
			max: 2.2,
		},
		rotation: 0.03, // Velocità di rotazione
		fadeSpeed: 0.03, // Velocità di dissolvenza (non superare l’opacità minima)
	},
	zIndex: 100, // Livello di profondità
};

// Configurazione “Pio” (mascotte sullo schermo)
export const pioConfig: import("./types/config").PioConfig = {
	enable: false, // Abilita la mascotte
	models: ["/pio/models/pio/model.json"], // Percorso del modello
	position: "left", // Posizione predefinita a sinistra
	width: 280,
	height: 250,
	mode: "draggable", // Modalità trascinabile
	hiddenOnMobile: true, // Nascosta su dispositivi mobili
	dialog: {
		welcome: "Benvenuto sul sito Mizuki!",
		touch: [
			"Cosa stai facendo?",
			"Non toccarmi!",
			"HENTAI!",
			"Non farmi questo!",
		],
		home: "Clicca qui per tornare alla home!",
		skin: ["Vuoi vedere il mio nuovo vestito?", "Ti piace il mio nuovo look~"],
		close: "QWQ A presto~",
		link: "https://github.com/matsuzaka-yuki/Mizuki",
	},
};

// Esportazione delle configurazioni unificate
export const widgetConfigs = {
	profile: profileConfig,
	announcement: announcementConfig,
	music: musicPlayerConfig,
	layout: sidebarLayoutConfig,
	sakura: sakuraConfig,
	fullscreenWallpaper: fullscreenWallpaperConfig,
	pio: pioConfig,
} as const;

export const umamiConfig = {
	enabled: false, // Abilita le statistiche Umami
	apiKey: "api_XXXXXXXXXX", // La tua chiave API
	baseUrl: "https://api.umami.is", // URL API Umami Cloud
	scripts: `
<script defer src="XXXX.XXX" data-website-id="ABCD1234"></script>
  `.trim(), // Script da inserire (non serve aggiungerlo manualmente nel layout)
} as const;
