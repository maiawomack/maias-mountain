export type Difficulty = "green" | "blue" | "black" | "double-black";
export type Lens = "eng" | "product";

export interface Bullet {
  text: string;
  lens: Lens[];
}

export interface Trail {
  slug: string;
  name: string;
  difficulty: Difficulty;
  event: string;
  year: string;
  crew: string;
  summary: string;
  stack: string[];
  bullets: Bullet[];
  repo?: string;
  /** Closed trails show on the map but hide details until reopened */
  closed?: boolean;
  /** SVG path on the 1920x1200 trail map */
  path: string;
  /** Where the trail sign sits on the map */
  label: { x: number; y: number };
}

export const profile = {
  name: "Maia Womack",
  email: "maialwomack@gmail.com",
  linkedin: "https://www.linkedin.com/in/maia-womack",
  github: "https://github.com/maiawomack",
  school: "University of Washington",
  degree: "B.S. Computer Science & Physics",
  graduation: "Expected June 2029",
  location: "Seattle, WA",
};

export const DIFFICULTY_ORDER: Difficulty[] = ["green", "blue", "black", "double-black"];

export const difficultyRank = (d: Difficulty) => DIFFICULTY_ORDER.indexOf(d);

export const difficultyLabel: Record<Difficulty, string> = {
  green: "Easier",
  blue: "More Difficult",
  black: "Most Difficult",
  "double-black": "Experts Only",
};

export const trails: Trail[] = [
  {
    slug: "cairn",
    name: "Cairn",
    difficulty: "double-black",
    event: "Cal Hacks 13",
    year: "2026",
    crew: "Solo",
    summary:
      "An AI safety agent that gives skiers spoken hazard warnings on expert terrain — a backup safety layer for people skiing alone or off piste.",
    stack: ["Python", "FastAPI", "WebSockets", "CREAO", "Cartesia"],
    bullets: [
      {
        text: "Built Cairn solo, an AI safety agent that gives skiers spoken hazard warnings on expert terrain, using CREAO, Cartesia voice, and Python.",
        lens: ["eng", "product"],
      },
      {
        text: "Streamed live route and hazard updates from a FastAPI backend to a web dashboard over WebSockets, so alerts reach the dashboard instantly.",
        lens: ["eng"],
      },
      {
        text: "Interviewed 10 skiers, including a ski accident survivor, to scope Cairn as a backup safety layer for people skiing alone or off piste.",
        lens: ["product"],
      },
    ],
    repo: "https://github.com/maiawomack/Cairn",
    path: "M985,92 C1010,190 1045,280 1060,380 S1120,600 1150,760 S1090,960 1000,1030",
    label: { x: 1085, y: 470 },
  },
  {
    slug: "robotic-dog",
    name: "Robotic Dog Companion",
    difficulty: "double-black",
    event: "Buildspace at CSEED",
    year: "2026",
    crew: "Team of roommates",
    summary:
      "A fully walking four-legged robotic dog with custom CAD, hand-built circuitry, and Gemini voice control.",
    stack: ["SolidWorks", "Custom PCBs", "Soldering", "Gemini API", "Embedded control"],
    bullets: [
      {
        text: "Built a fully walking 4-legged robotic dog with roommates, pairing custom SolidWorks CAD and custom circuitry with Gemini voice control.",
        lens: ["eng", "product"],
      },
      {
        text: "Fabricated and soldered the control boards from scratch, then manufactured and assembled all 4 legs at the UW Mill makerspace.",
        lens: ["eng"],
      },
      {
        text: "Wrote real-time control logic turning sensor input into movement, mapping Gemini voice commands to every pose the dog can hold.",
        lens: ["eng"],
      },
    ],
    path: "M412,178 C455,260 505,330 545,420 S560,600 520,720 S430,900 560,1020",
    label: { x: 455, y: 320 },
  },
  {
    slug: "robotic-arm-simulation",
    name: "Robotic Arm Simulation",
    difficulty: "black",
    event: "Corvinus Labs Technical Challenge",
    year: "2026",
    crew: "Solo",
    summary:
      "Programmed a simulated Franka Panda arm in MuJoCo, completing every goal of the challenge and earning an internship offer.",
    stack: ["Python", "MuJoCo", "Robotics"],
    bullets: [
      {
        text: "Completed 5/5 goals in Corvinus Labs' robotics challenge, programming a simulated Franka Panda arm in MuJoCo, earning an internship offer.",
        lens: ["eng", "product"],
      },
      {
        text: "Learned Python from scratch for the challenge, logging joint and sensor data across every pick-and-place run to debug the arm's motion.",
        lens: ["eng"],
      },
    ],
    path: "M1490,228 C1450,320 1385,420 1355,520 S1330,720 1385,860 S1300,990 1180,1030",
    label: { x: 1330, y: 640 },
  },
  {
    slug: "beatdrop",
    name: "BeatDrop",
    difficulty: "black",
    event: "DubHacks 2026",
    year: "2026",
    crew: "Team of 3",
    summary:
      "A DJ setup played entirely by hand gestures — webcam hand tracking to scratch, crossfade, and set tempo.",
    stack: ["TypeScript", "Hand tracking", "Demucs", "Web Audio"],
    bullets: [
      {
        text: "Built a DJ setup with a team of 3 that is played entirely by hand gestures, using webcam hand tracking to scratch, crossfade, and set tempo.",
        lens: ["eng", "product"],
      },
      {
        text: "Owned the stem pipeline, splitting tracks with Demucs into 4 aligned stems (vocals, drums, bass, instrumental) for independent mixing.",
        lens: ["eng"],
      },
      {
        text: "Co-built the two-deck UI and synced it with the gesture camera view so hand gestures and on-screen sliders drive one shared audio engine.",
        lens: ["eng", "product"],
      },
    ],
    repo: "https://github.com/maiawomack/beatdrop",
    path: "M930,170 C850,260 720,300 650,400 S600,560 640,680 S720,880 800,1030",
    label: { x: 640, y: 520 },
  },
  {
    slug: "dispatch-ai",
    name: "Dispatch AI",
    difficulty: "blue",
    event: "UC Berkeley AI Hackathon",
    year: "2026",
    crew: "Team of 4",
    summary:
      "A multi-agent pipeline that turns live 911 calls into action-first alerts so dispatchers can act on what they can't stop to watch.",
    stack: ["Python", "Claude API", "Fetch.ai Agentverse", "Multi-agent"],
    bullets: [
      {
        text: "Shipped TriageAlertAgent in Python, using Claude to turn 911 calls into action-first alerts that load the moment a call comes in.",
        lens: ["eng", "product"],
      },
      {
        text: "Delivered the triage layer of a 4-person multi-agent system on Fetch.ai Agentverse, integrating with teammates' agents and vision pipeline.",
        lens: ["eng", "product"],
      },
    ],
    repo: "https://github.com/maiawomack/dispatchAI",
    path: "M1650,430 C1690,520 1715,620 1705,720 S1640,890 1500,1000",
    label: { x: 1700, y: 650 },
  },
  {
    slug: "coursework",
    closed: true,
    name: "Coursework Projects",
    difficulty: "green",
    event: "University of Washington",
    year: "2026",
    crew: "Solo",
    summary:
      "Data structures built from the ground up in Java and C — clean, leak-free, and fast.",
    stack: ["Java", "C", "Valgrind", "cpplint"],
    bullets: [
      {
        text: "Implemented a generic Java queue with O(1) dequeue using an ArrayList, dual hash maps, and a front pointer for an office hours app.",
        lens: ["eng"],
      },
      {
        text: "Built a doubly linked list and chained hash table in C for CSE 333 with zero memory leaks under Valgrind and clean cpplint checks.",
        lens: ["eng"],
      },
    ],
    path: "M150,520 C230,620 300,700 360,790 S470,960 640,1040",
    label: { x: 250, y: 680 },
  },
  {
    slug: "desktop-todo-app",
    name: "Desktop Todo App",
    difficulty: "green",
    event: "Personal project",
    year: "2026",
    crew: "Solo",
    summary: "A native Mac todo app, built with Electron, React, and Vite and shipped with source on GitHub.",
    stack: ["Electron", "React", "Vite", "JavaScript"],
    bullets: [
      {
        text: "Built and shipped a Mac desktop todo app with Electron, React, and Vite, packaging it as a native app with source published on GitHub.",
        lens: ["eng", "product"],
      },
    ],
    repo: "https://github.com/maiawomack/todo-app",
    path: "M700,1080 C820,1060 940,1100 1080,1090 S1330,1060 1480,1100",
    label: { x: 1090, y: 1130 },
  },
];

export interface Role {
  title: string;
  org: string;
  dates: string;
  bullets: Bullet[];
}

export const experience: Role[] = [
  {
    title: "Firmware Engineer",
    org: "Husky Robotics",
    dates: "Fall 2026 – Present",
    bullets: [
      {
        text: "Developing STM32 firmware in C for the arm's Hand board, controlling grip open/close and all arm peripherals over the team's CAN26 protocol.",
        lens: ["eng"],
      },
      {
        text: "Integrating a 12V stepper motor with limit switch, 3 depth-sensing lasers, and a linear actuator to give the arm precise, repeatable control.",
        lens: ["eng"],
      },
    ],
  },
  {
    title: "Instructor",
    org: "iCode Bellevue",
    dates: "Summer 2026",
    bullets: [
      {
        text: "Taught 100+ K-12 students across 5 summer camps and 5 belt-level classes covering VEX robotics, Minecraft modding, HTML/CSS, and pitching.",
        lens: ["product"],
      },
      {
        text: "Adapted lesson plans across ages and skill levels, turning technical concepts into hands-on projects students built and demoed by week's end.",
        lens: ["eng", "product"],
      },
    ],
  },
  {
    title: "Operations and Product Intern",
    org: "DAT Freight & Analytics (Outgo Inc.)",
    dates: "Summers 2023, 2024, 2025",
    bullets: [
      {
        text: "Built a transaction export feature end to end, from spec and design to React UI and SQL data pulls, after 25+ carriers requested it.",
        lens: ["eng", "product"],
      },
      {
        text: "Learned JavaScript, React, and SQL from scratch to ship the export feature, which went live on the platform after my internship ended.",
        lens: ["eng"],
      },
      {
        text: "Queried deposit, reconciliation, and remittance tables in SQL, finding manual deposits took 8x longer to reconcile than automatic ones.",
        lens: ["eng", "product"],
      },
      {
        text: "Ranked the 5 worst offender brokers by reconciliation time and manual match rate, flagging the top one at 21 hrs vs a 5 hr company average.",
        lens: ["product"],
      },
      {
        text: "Proposed next steps from the analysis, including outreach to slow-remitting brokers and copying the process of fast high-volume brokers.",
        lens: ["product"],
      },
      {
        text: "Processed 1,189 check deposits totaling $2M+ in 4 weeks while resolving carrier inquiries on payments and lost checks through HubSpot.",
        lens: ["product"],
      },
      {
        text: "Partnered with the risk team on broker and carrier onboarding, vetting 25+ brokers by flagging the signals that predict reliable customers.",
        lens: ["product"],
      },
    ],
  },
];

export const leadership: Role[] = [
  {
    title: "Operations Lead",
    org: "CSEED",
    dates: "Fall 2026 – Present",
    bullets: [
      {
        text: "Run operations across Buildspace and CSEED's core team, handling logistics, programming, recruiting, and communications.",
        lens: ["product"],
      },
      {
        text: "Guide cohorts of 50+ student builders from ideation and prototyping to demo day, with 35+ completed projects shipped every quarter.",
        lens: ["eng", "product"],
      },
      {
        text: "Recruiting speakers for 5 to 10 events this year, sourcing startup founders for the Creator Series and big tech engineers for Core talks.",
        lens: ["product"],
      },
    ],
  },
  {
    title: "PR Lead",
    org: "Husky Robotics",
    dates: "Fall 2025 – Present",
    bullets: [
      {
        text: "Managed outreach generating 90k+ impressions highlighting the rover team's progress, engineering milestones, and competition results.",
        lens: ["product"],
      },
      {
        text: "Grew followers 50% from 1,700 to 2,550 by writing a brand guide that set platform strategy and hashtag tiers for Instagram and LinkedIn.",
        lens: ["product"],
      },
      {
        text: "Ran PR solo for 9 months after the subteam lost 5 members, then rebuilt it by screening 60+ applicants and hiring 3 new members.",
        lens: ["product"],
      },
      {
        text: "Produced internal and sponsor newsletters reaching 320+ readers by interviewing 10+ members per cycle to translate their engineering work.",
        lens: ["eng", "product"],
      },
      {
        text: "Shaped a UW magazine feature on the team, writing the hook, title, and tagline to show how one rover pulls in students from every major.",
        lens: ["product"],
      },
    ],
  },
  {
    title: "Engineering Portfolio Coordinator",
    org: "Overlake School Robotics (FTC 7330, 16965)",
    dates: "2022 – 2025",
    bullets: [
      {
        text: "Built a documentation system across 3 teams connecting 30+ students through structured engineering records and diagrams for judges.",
        lens: ["eng", "product"],
      },
      {
        text: "Mentored 30+ students and grew female participation from 3 to 15 across 3 teams, with 10 girls joining through the middle school team.",
        lens: ["product"],
      },
    ],
  },
];

export const coursework = [
  "Computer Vision",
  "Systems Programming",
  "Hardware/Software Interface",
  "Data Structures and Parallelism",
  "Foundations of Computing II",
  "Linear Algebra",
  "Differential Equations",
  "Calculus III",
  "Discrete Math",
  "Physics: E&M",
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "C", "Java", "JavaScript", "TypeScript", "SQL", "R", "HTML/CSS"],
  },
  {
    group: "Frameworks & Tools",
    items: [
      "React",
      "FastAPI",
      "WebSockets",
      "Electron",
      "Vite",
      "Git/GitHub",
      "MuJoCo",
      "Demucs",
      "Claude API",
      "Gemini API",
      "Cartesia",
      "CREAO",
      "Fetch.ai",
    ],
  },
  {
    group: "Hardware & CAD",
    items: [
      "STM32",
      "CAN Protocol",
      "Stepper Motor Control",
      "Sensor Integration",
      "Soldering",
      "Board Assembly",
      "Arduino",
      "SolidWorks",
      "Fusion 360",
    ],
  },
  {
    group: "Product & Media",
    items: ["Metabase", "HubSpot", "Valgrind", "RStudio", "IntelliJ", "Adobe Premiere Pro"],
  },
];

export const getTrail = (slug: string) => trails.find((t) => t.slug === slug);

export const trailsByDifficulty = () =>
  [...trails].sort((a, b) => difficultyRank(a.difficulty) - difficultyRank(b.difficulty));
