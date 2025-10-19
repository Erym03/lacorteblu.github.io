// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "Game Development" | "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [

	//Gamedev skills
{
	id: "unity",
	name: "Unity",
	description:
		"A powerful and widely-used game engine supporting 2D, 3D, and VR development. Ideal for cross-platform projects and rapid prototyping.",
	icon: "skill-icons:unity-light",
	category: "Game Development",
	level: "advanced",
	experience: { years: 4, months: 0 },
	projects: ["Castlevania 3D Remake", "Indie Game Prototypes"],
	color: "#000000",
},
{
	id: "unreal",
	name: "Unreal Engine",
	description:
		"A high-end game engine known for photorealistic graphics and AAA production capabilities, using Blueprints and C++ for flexible development.",
	icon: "skill-icons:unrealengine",
	category: "Game Development",
	level: "intermediate",
	experience: { years: 2, months: 0 },
	projects: ["CoD Zombie Inspired Game", "Super Mario Remake"],
	color: "#0E1128",
},
{
	id: "godot",
	name: "Godot Engine",
	description:
		"An open-source and lightweight game engine with an intuitive node-based system, ideal for 2D and stylized 3D games.",
	icon: "logos:godot-icon",
	category: "Game Development",
	level: "intermediate",
	experience: { years: 1, months: 0 },
	color: "#478CBF",
},
{
	id: "gamemakerstudio1",
	name: "GameMaker Studio 1",
	description:
		"An accessible yet powerful 2D game engine that allows for rapid development with GML scripting and drag-and-drop tools.",
	icon: "skill-icons:gamemakerstudio",
	category: "Game Development",
	level: "intermediate",
	experience: { years: 0, months: 6 },
	projects: ["Retro Platformers", "Action Prototypes"],
	color: "#00B42A",
},
{
	id: "rpgmaker",
	name: "RPG Maker",
	description:
		"A user-friendly engine for creating 2D RPGs with built-in tilemaps, events, and scripting via JavaScript.",
	icon: "mdi:sword-cross",
	category: "Game Development",
	level: "intermediate",
	experience: { years: 1, months: 0 },
	projects: ["Classic RPG Prototypes", "Story-driven Experiments"],
	color: "#E43E2B",
},
{
	id: "gbstudio",
	name: "GB Studio",
	description:
		"A retro-inspired visual game builder for creating Game Boy-style adventures without coding. Great for pixel art and nostalgia-driven projects.",
	icon: "game-icons:gamepad-cross",
	category: "Game Development",
	level: "beginner",
	experience: { years: 0, months: 2 },
	color: "#8BC34A",
},
	// Frontend Skills
	{
		id: "javascript",
		name: "JavaScript",
		description:
			"Modern JavaScript development, including ES6+ syntax, asynchronous programming, and modular development.",
		icon: "logos:javascript",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#F7DF1E",
	},
	{
		id: "bootstrap",
		name: "Bootstrap",
		description:
			"One of the most popular CSS frameworks for building responsive and modern user interfaces, based on a flexible grid system and reusable components.",
		icon: "logos:bootstrap",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 2 },
		color: "#7952B3",
	},
	{
		id: "mdbootstrap",
		name: "MDBootstrap",
		description:
			"An extended version of Bootstrap built with Material Design principles, ideal for creating clean, modern, and interactive interfaces.",
		icon: "logos:material-ui",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["lacorteblu.github.io"],
		color: "#41B883",
	},
	{
		id: "astro",
		name: "Astro",
		description:
			"A modern static site generator supporting multi-framework integration and excellent performance.",
		icon: "logos:astro-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 2 },
		color: "#FF5D01",
	},

	// Backend Skills
	{
		id: "csharp",
		name: "C#",
		description:
			"A modern object-oriented programming language developed by Microsoft, suitable for the .NET ecosystem.",
		icon: "devicon:csharp",
		category: "backend",
		level: "advanced",
		experience: { years: 4, months: 0 },
		projects: ["desktop-application", "web-api"],
		color: "#239120",
	},
	{
		id: "cpp",
		name: "C++",
		description:
			"A high-performance systems programming language widely used in game development, system software, and embedded development.",
		icon: "logos:c-plusplus",
		category: "backend",
		level: "advanced",
		experience: { years: 3, months: 0 },
		color: "#00599C",
	},
	{
		id: "java",
		name: "Java",
		description:
			"A mainstream programming language for enterprise application development, cross-platform and object-oriented.",
		icon: "logos:java",
		category: "backend",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		color: "#ED8B00",
	},
	{
		id: "c",
		name: "C",
		description:
			"A low-level systems programming language, the foundation for operating systems and embedded systems development.",
		icon: "logos:c",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#A8B9CC",
	},
	{
		id: "php",
		name: "PHP",
		description:
			"A widely-used server-side scripting language, particularly suitable for web development.",
		icon: "logos:php",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		color: "#777BB4",
	},
	{
		id: "python",
		name: "Python",
		description:
			"A general-purpose programming language suitable for web development, data analysis, machine learning, and more.",
		icon: "logos:python",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#3776AB",
	},
	{
		id: "nodejs",
		name: "Node.js",
		description:
			"A JavaScript runtime based on Chrome V8 engine, used for server-side development.",
		icon: "logos:nodejs-icon",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 3 },
		color: "#339933",
	},

	// Database Skills
	{
		id: "mysql",
		name: "MySQL",
		description:
			"The world's most popular open-source relational database management system, widely used in web applications.",
		icon: "logos:mysql-icon",
		category: "database",
		level: "intermediate",
		experience: { years: 2, months: 6 },
		projects: ["e-commerce-platform", "blog-system",],
		color: "#4479A1",
	},

	// Tools
	{
		id: "git",
		name: "Github",
		description:
			"A distributed version control system, an essential tool for code management and team collaboration.",
		icon: "skill-icons:github-dark",
		category: "tools",
		level: "advanced",
		experience: { years: 4, months: 0 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"A lightweight but powerful code editor with a rich plugin ecosystem.",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "expert",
		experience: { years: 4, months: 6 },
		color: "#007ACC",
	},
	{
		id: "aws",
		name: "AWS",
		description:
			"Amazon's cloud platform providing comprehensive cloud computing solutions.",
		icon: "logos:aws",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#FF9900",
	},
	{
		id: "linux",
		name: "Linux",
		description:
			"An open-source operating system, the preferred choice for server deployment and development environments.",
		icon: "logos:linux-tux",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		color: "#FCC624",
	},
	{
		id: "photoshop",
		name: "Photoshop",
		description: "Professional image editing and design software.",
		icon: "logos:adobe-photoshop",
		category: "tools",
		level: "beginner",
		experience: { years: 1, months: 0},
		color: "#31A8FF",
	},

	// Other Skills
	{
	id: "blender",
	name: "Blender",
	description:
		"A free and open-source 3D creation suite used for modeling, animation, sculpting, and rendering. Essential for creating stylized or realistic assets.",
	icon: "logos:blender",
	category: "other",
	level: "intermediate",
	experience: { years: 3, months: 0 },
	color: "#F5792A",
	},
	{
		id: "maya",
		name: "Autodesk Maya",
		description:
			"A professional 3D modeling and animation software widely used in film and game production for complex rigging and high-quality rendering.",
		icon: "game-icons:3d-stairs",
		category: "other",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		color: "#33A1A8",
	},
	{
		id: "aseprite",
		name: "Aseprite",
		description:
			"A dedicated pixel art tool for creating animations, sprites, and tilesets. Perfect for retro and indie game development.",
		icon: "mdi:palette",
		category: "other",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		color: "#7D4E8D",
	},

];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
