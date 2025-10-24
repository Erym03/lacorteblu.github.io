// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "gamedev" | "web" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
}

export const projectsData: Project[] = [
	{
		id: "TrickOrBeat",
		title: "Trick or Beat",
		description:
			"A platform rhythm game developed for Android and Windows",
		image: "https://erym03.github.io/lacorteblu.github.io/assets/images/Projects/Zucca.png",
		category: "gamedev",
		techStack: ["Unity", "C#", "Maya"],
		status: "completed",
		liveDemo: "https://erym03.itch.io/trick-or-beat",
		startDate: "2025-09-20",
		endDate: "2025-10-20",
		featured: false,
		tags: ["Gamedev", "Halloween", "Music", "Android"],
		
	},
	{
		id: "Castlevania-Remake",
		title: "DDD-Vania",
		description:
			"A Castlevania 3D remake of the first Castlevania made in Unity",
		image: "/src/assets/images/Projects/Vania.png",
		category: "gamedev",
		techStack: ["Unity", "C#", "Aseprite", "Magicavoxel"],
		status: "completed",
		liveDemo: "https://erym03.itch.io/ddd-vania",
		startDate: "2024-12-20",
		endDate: "2025-02-16",
		featured: false,
		tags: ["Gamedev", "Castlevania", "Remake", "Unity3D"],
		
	},
	{
		id: "Platform-Game",
		title: "Cable the Pirate Robot",
		description:
			"A 3D platformer inspired by classic platformers from the PS1 and PS2 era.",
		image: "/src/assets/images/Projects/Cable.png",
		category: "gamedev",
		techStack: ["Unity", "C#", "Maya"],
		status: "completed",
		startDate: "2024-03-01",
		endDate: "2024-06-11",
		tags: ["Gamedev", "Platform", "Retro", "Platformer"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => techSet.add(tech));
	});
	return Array.from(techSet).sort();
};
