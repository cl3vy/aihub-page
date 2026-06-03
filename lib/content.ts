/* ============================================================
   AI HUB · Site content (single source of truth)
   All page copy/data lives here so pages stay declarative.
   ============================================================ */

export type Domain = {
  n: string;
  name: string;
  short: string;
  aim: string;
  dirs: string[];
  why: string;
};

export const DOMAINS: Domain[] = [
  {
    n: '01',
    name: 'Policy & Legislation',
    short: 'Policy',
    aim: 'AI to assist drafting and reviewing legislation, analyse policy impact and unintended consequences, predict socioeconomic trends, and detect algorithmic bias to promote transparency in public institutions.',
    dirs: ['Legislative drafting assistants', 'Policy-impact simulation', 'Bias & transparency auditing'],
    why: 'Albania is writing the rules for AI now. Good tools can make legislation faster, fairer and evidence-based.',
  },
  {
    n: '02',
    name: 'Education & Training',
    short: 'Education',
    aim: 'AI-ethics and development certifications, free and low-cost bootcamps and mentorship for women, minorities and underserved communities, AI-powered platforms for local schools, and inclusive tools for students with disabilities.',
    dirs: ['Bootcamps & mentorship', 'AI tools for local schools', 'Inclusive learning tech'],
    why: 'A skilled, inclusive talent base is the foundation for everything else, and it must reach everyone.',
  },
  {
    n: '03',
    name: 'Social Impact',
    short: 'Social Impact',
    aim: 'AI to address systemic inequalities across education, employment and healthcare; public-awareness campaigns; an accelerator for NGOs; human-rights monitoring; and open-source tools for disaster relief and public health.',
    dirs: ['NGO accelerator', 'Human-rights monitoring', 'Open-source relief tools'],
    why: 'Technology should narrow gaps, not widen them. Social impact is a first-class research goal.',
  },
  {
    n: '04',
    name: 'Public Health',
    short: 'Public Health',
    aim: 'Disease surveillance and resource distribution, disaster-response platforms, predictive outbreak management, mental-health support, and personalized healthcare.',
    dirs: ['Outbreak prediction', 'Resource distribution', 'Mental-health support'],
    why: 'A small health system gains the most from prediction, prevention and smart resource use.',
  },
  {
    n: '05',
    name: 'Environmental Solutions',
    short: 'Environment',
    aim: 'Air-quality monitoring, deforestation detection, waste management, climate-effect prediction, and renewable-energy optimization.',
    dirs: ['Air-quality monitoring', 'Deforestation detection', 'Renewable optimization'],
    why: 'Environmental monitoring turns scarce data into decisions for air, land and energy.',
  },
  {
    n: '06',
    name: 'Governance & Public Services',
    short: 'Governance',
    aim: 'Civic tech for citizen participation, optimizing public-service delivery, predictive policy-making, local-government operations, national AI strategies, and staff training on AI ethics.',
    dirs: ['Civic participation tech', 'Service-delivery optimization', 'National AI strategy'],
    why: 'Better public services are one of the most direct ways AI can improve daily life.',
  },
  {
    n: '07',
    name: 'Community Engagement',
    short: 'Community',
    aim: 'Public programs, events and outreach that bring people into the conversation around AI: meetups, hackathons, talks and open forums that turn a research agenda into a shared, participatory community.',
    dirs: ['Meetups & hackathons', 'Public lectures', 'Open community forums'],
    why: 'Research only matters if people are part of it, and engagement is how the work stays accountable.',
  },
];

export const VOICES = [
  {
    q: 'Co-founded AI Hub to grow a world-class, collaborative AI community in Albania, bridging rigorous research with real-world impact.',
    n: 'Emiliano Mankolli, PhD',
    r: 'Co-Founder & CEO · Lecturer, Data Science & AI · Tirana',
  },
  {
    q: 'Connects diaspora engineering talent in Munich back to projects and people at home.',
    n: 'Artur Daci',
    r: 'Co-Founder · Senior DevOps Engineer · Munich',
  },
  {
    q: 'Brings frontier machine-learning research practice and standards from San Francisco.',
    n: 'Euxhen Hasanaj',
    r: 'Research Scientist, Machine Learning · San Francisco',
  },
  {
    q: 'Shapes the policy and regulatory groundwork so AI earns public trust.',
    n: 'Besarta Vladi',
    r: 'AI Policy & Regulatory Expert · Tirana',
  },
];

export const VALUES: [string, string, string][] = [
  ['01', 'Ethics', 'Responsible, transparent AI is the precondition for everything we build, not a feature added later.'],
  ['02', 'Innovation', 'We pursue novel, rigorous work, and the courage to apply it to real problems.'],
  ['03', 'Impact', 'We measure ourselves by outcomes for people and institutions, not by output.'],
  ['04', 'Collaboration', 'Open community, shared knowledge, and partnership across academia, industry and government.'],
  ['05', 'Lifelong learning', 'Education for everyone: students, professionals, and underserved communities alike.'],
];

export type Person = { name: string; role: string; place: string; focus: string; open?: boolean };
export const TEAM: Person[] = [
  { name: 'Emiliano Mankolli, PhD', role: 'Co-Founder & CEO · Lecturer', place: 'Tirana', focus: 'Leads research and education; data science and AI expert.' },
  { name: 'Artur Daci', role: 'Co-Founder · Senior DevOps Engineer', place: 'Munich', focus: 'Connects diaspora engineering talent back to projects at home.' },
  { name: 'Euxhen Hasanaj', role: 'Research Scientist, Machine Learning', place: 'San Francisco', focus: 'Brings frontier ML research practice and standards.' },
  { name: 'Besarta Vladi', role: 'AI Policy & Regulatory Expert', place: 'Tirana', focus: 'Shapes the policy and regulatory groundwork for trustworthy AI.' },
  { name: 'Ervis Trupja', role: 'Software Engineer, Author', place: 'Tirana', focus: 'Builds tools and writes to make AI accessible to more people.' },
  { name: 'Dejvis Sheshi', role: 'Solutions Architect', place: 'Tirana', focus: 'Designs the systems that take research from prototype to pilot.' },
  { name: 'Denis Demko', role: 'Machine Learning Engineer', place: 'Tirana', focus: 'Trains and ships the models behind AI Hub initiatives.' },
  { name: 'You?', role: 'Open role · Researcher / Contributor', place: 'Anywhere', focus: 'We are always looking for people who want to build.', open: true },
];

export type Project = { d: string; t: string; s: string; empty?: boolean; image?: string };
export const PROJECTS: Project[] = [
  { d: 'Governance', t: 'Civic participation tooling', s: 'AI that widens citizen input into local-government decisions.', image: '/assets/images/event-talk.jpg' },
  { d: 'Environment', t: 'Air-quality monitoring', s: 'Sensing and modelling urban air quality for health and policy.', image: '/assets/images/panel-climate.jpg' },
  { d: 'Policy', t: 'Legislative drafting assistant', s: 'Tools to help draft and review legislation and flag unintended effects.', image: '/assets/images/legal-ai.jpg' },
  { d: 'Public Health', t: 'Outbreak prediction', s: 'Predictive surveillance and resource distribution for the health system.', image: '/assets/images/conference.jpg' },
  { d: 'Education', t: 'School AI platform', s: 'AI-powered learning tools piloted with local schools.', empty: true },
  { d: 'Social Impact', t: 'NGO accelerator tooling', s: 'Open tools that help non-profits do more with less.', empty: true },
];

export const PROJECT_FILTERS = ['All', 'Policy', 'Education', 'Social Impact', 'Public Health', 'Environment', 'Governance'];

export const FORMATS: [string, string][] = [
  ['Meetups', 'Regular community gatherings: talks, demos and time to connect.'],
  ['Hackathons', 'Intense build sprints on real problems across the domains.'],
  ['Public lectures', 'Open talks that bring AI to a wider, non-technical audience.'],
  ['Policy discussions', 'Roundtables on regulation, ethics and national AI strategy.'],
  ['Workshops', 'Hands-on, skills-first sessions for members at every level.'],
];

export const BENEFITS: [string, string][] = [
  ['AI education', 'Bootcamps, certifications and mentorship, with inclusive tracks for those underrepresented in tech.'],
  ['Networking', 'Meet peers and mentors through events, meetups and hackathons.'],
  ['Startup support', 'Access the incubator, technology, and connections to capital.'],
  ['Ethical-AI voice', 'Join discussion and policy advocacy on how AI should be built and governed.'],
];

export const CHANNELS: [string, string, string][] = [
  ['Telegram', 'Community chat', 'https://t.me/AIHubAlb'],
  ['Instagram', '@aihub.al', 'https://instagram.com/aihub.al'],
  ['LinkedIn', '/company/ai-hub-albania', 'https://www.linkedin.com/company/ai-hub-albania'],
  ['Email', 'info@aihub.al', 'mailto:info@aihub.al'],
];

export const UNIVERSITIES = [
  'University of Tirana',
  'Polytechnic University of Tirana',
  'EPOKA University',
  'Metropolitan Tirana',
  'European University of Tirana',
  'Aleksandër Moisiu',
  'Luigj Gurakuqi',
  'Fan S. Noli',
  'University of Korçë',
];

/* ---- Asset paths (real photography + brand) ---- */
export const IMG = {
  eventTalk: '/assets/images/event-talk.jpg',
  eventTalkSq: '/assets/images/event-talk-sq.png',
  audience1: '/assets/images/audience-1.jpg',
  audience2: '/assets/images/audience-2.jpg',
  audienceFront: '/assets/images/audience-front.jpg',
  conference: '/assets/images/conference.jpg',
  panelClimate: '/assets/images/panel-climate.jpg',
  legalAi: '/assets/images/legal-ai.jpg',
  officeMeeting: '/assets/images/office-meeting.jpg',
  officeMeetingSq: '/assets/images/office-meeting-sq.png',
  graduation: '/assets/images/graduation.jpg',
  workshop: '/assets/images/workshop.jpg',
  discussion: '/assets/images/discussion.jpg',
  mentorship: '/assets/images/mentorship.png',
  teamGroup: '/assets/images/team-group.png',
  networking: '/assets/images/networking.png',
};

export const LOGO = {
  landscape: '/assets/logos/logo-landscape.png',
  stacked: '/assets/logos/logo-stacked.png',
  full: '/assets/logos/aihub-logo.png',
  telegram: '/assets/logos/telegram.png',
  icon: '/assets/images/aihub-icon.png',
};

/** Domain → representative photo (keyed by Domain.short). */
export const DOMAIN_IMAGES: Record<string, string> = {
  Policy: IMG.legalAi,
  Education: IMG.mentorship,
  'Social Impact': IMG.discussion,
  'Public Health': IMG.conference,
  Environment: IMG.panelClimate,
  Governance: IMG.audienceFront,
  Community: IMG.networking,
};

export const ACTIVITY_BARS = [
  { l: 'Meetups', v: 9 },
  { l: 'Talks', v: 6 },
  { l: 'Workshops', v: 5 },
  { l: 'Hackathons', v: 3, proj: true },
  { l: 'Policy', v: 2, proj: true },
];
