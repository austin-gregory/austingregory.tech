// Site content lives here so updating the bio or adding a project doesn't
// mean touching any components.

export const SITE = {
  name: "Austin Gregory",
  url: "https://austingregory.tech",
  // TODO: review — drafted from the old site's "Network Administrator" tagline
  // plus Dark Game Factory.
  role: "Infrastructure engineer & indie game developer",
  tagline:
    "I keep networks and servers running by day, and build multiplayer web games under Dark Game Factory.",
  email: "aag5194@outlook.com",
  linkedin: "https://www.linkedin.com/in/austinggregory/",
  github: "https://github.com/austin-gregory",
  studio: { name: "Dark Game Factory", url: "https://darkgamefactory.com" },
};

// TODO: review — placeholder copy, written from what's in the repos.
export const ABOUT = {
  paragraphs: [
    "I started out in systems and network administration: Windows domains, group policy, virtualization labs, storage. That's still the foundation for how I build things: start with how it gets deployed and kept running.",
    "These days most of my side time goes into Dark Game Factory, a solo, AI-native game studio. I prototype fast, ship to the web, and host everything myself on Azure.",
  ],
  skills: [
    "Networking",
    "Windows Server / AD",
    "Virtualization",
    "Azure",
    "Docker",
    "Node.js",
    "TypeScript",
    "React / Next.js",
    "Phaser 3",
    "three.js",
    "Colyseus",
  ],
};

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  stack: string[];
  status: string;
  url?: string;
  repo?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "dark-game-factory",
    title: "Dark Game Factory",
    blurb:
      "My solo game studio's home: a walkable 3D CRT back room that dives into a feed of prototypes and devlogs.",
    stack: ["Next.js", "three.js", "React Three Fiber", "Azure SWA"],
    status: "live",
    url: "https://darkgamefactory.com",
    repo: "https://github.com/austin-gregory/webgamehomepage",
    featured: true,
  },
  {
    slug: "nest-run",
    title: "Nest Run",
    blurb:
      "Realtime arena prototype with RTS-flavored unit control. Push the cart, spawn commanders, spring the trap.",
    stack: ["Colyseus", "Node", "Docker", "Canvas"],
    status: "in active dev",
    url: "https://nestrun.darkgamefactory.com",
    repo: "https://github.com/austin-gregory/nest_run",
  },
  {
    slug: "tenzi",
    title: "Tenzi",
    blurb:
      "Roll ten dice to match and beat your best time. Multiplayer dice with persistent avatars.",
    stack: ["React", "Node"],
    status: "shipped",
    url: "https://tenzi.darkgamefactory.com",
    repo: "https://github.com/austin-gregory/tenzi",
  },
  {
    slug: "beasthunter",
    title: "Beasthunter",
    blurb:
      "Tame wolves, tigers and spiders, then cash them in at the safe zone. Multiplayer with tile-mapped worlds.",
    stack: ["Phaser 3", "Colyseus", "Tiled"],
    status: "prototype",
    url: "https://beasthunter-e3g4aahtdfbkg5a3.canadacentral-01.azurewebsites.net/",
    repo: "https://github.com/austin-gregory/beasthunter",
  },
  {
    slug: "arcane-climbers",
    title: "Arcane Climbers",
    blurb:
      "Multiplayer wizard platformer with goblins and portals. Scale the tower and spell your way up.",
    stack: ["Phaser 3", "Node", "Azure"],
    status: "prototype",
    url: "https://arcaneclimbers-fhgge6c8cmarfaax.canadacentral-01.azurewebsites.net/",
  },
  {
    slug: "astro-brawl",
    title: "Astro Brawl",
    blurb:
      "3D spaceman fighter on a lunar arena with combos, knockdowns and a CPU that fights back. Built from a single prompt.",
    stack: ["three.js", "Vite", "Meshy AI"],
    status: "one-shot",
  },
];
