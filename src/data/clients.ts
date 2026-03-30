export interface Client {
  domain: string;
  label: string;
  slug?: string;
  description: { fr: string; en: string };
  sector?: string;
  status: 'active' | 'periodic' | 'ended';
  url: string;
  logoDomain?: string; // override domain used for logo lookup
  period?: string;
  missions?: string[];
  technologies?: string[];
}

export const clients: Client[] = [
  // ── Toujours en contrat ──────────────────────────────────────────────────
  {
    domain: 'imajing.eu',
    label: 'Imajing',
    slug: 'imajing',
    description: { fr: 'Solution de mobile mapping', en: 'Mobile mapping solution' },
    sector: 'Édition de logiciels',
    status: 'active',
    url: 'https://imajing.eu',
    period: 'Novembre 2020 — aujourd\'hui',
    missions: [
      'Maintien en conditions opérationnelles de la plateforme SaaS Imajnet (~1 Po de données)',
      'Infrastructure de calcul GPU pour le Machine Learning (Kubernetes + Triton Inference Server + Argo Workflows)',
      'Gestion des services internes avec Ansible',
      'Accompagnement des développeurs et chercheurs sur les pipelines CI/CD GitLab',
    ],
    technologies: ['Kubernetes', 'Ansible', 'GitLab CI/CD', 'HaProxy', 'PostgreSQL', 'Python', 'CUDA', 'Argo CD', 'ZFS'],
  },
  {
    domain: 'ipedis.com',
    label: 'Ipedis',
    description: {
      fr: "Conseil et automatisation de l'accessibilité des documents",
      en: 'Document accessibility consulting and automation',
    },
    status: 'active',
    url: 'https://ipedis.com',
  },
  {
    domain: 'arianeconseil.online',
    label: 'Ariane Conseil',
    description: {
      fr: 'Conseil en politiques de santé, QVT et handicap',
      en: 'Health policy, workplace wellbeing and disability consulting',
    },
    status: 'active',
    url: 'https://arianeconseil.online',
  },
  {
    domain: 'pnr-millevaches.fr',
    label: 'PNR Millevaches',
    description: { fr: 'Parc Naturel Régional du Limousin', en: 'Limousin Regional Nature Park' },
    status: 'active',
    url: 'https://pnr-millevaches.fr',
  },
  {
    domain: 'matiere-premiere.com',
    label: 'Matière Première',
    description: { fr: 'Parfumerie de luxe', en: 'Luxury perfumery' },
    status: 'active',
    url: 'https://matiere-premiere.com',
  },

  // ── Besoin périodique ────────────────────────────────────────────────────
  {
    domain: 'senscellbio.com',
    label: 'Senscell Bio',
    description: { fr: 'Biotechnologies', en: 'Biotechnology' },
    status: 'periodic',
    url: 'https://senscellbio.com',
  },
  {
    domain: 'cynkle.fr',
    label: 'Cynkle',
    description: { fr: "Recyclage de cartouches d'imprimante", en: 'Ink cartridge recycling' },
    status: 'periodic',
    url: 'https://cynkle.fr',
  },
  {
    domain: 'pallad.fr',
    label: 'Pallad',
    description: { fr: 'Conseil et audit en cybersécurité', en: 'Cybersecurity consulting and audit' },
    status: 'periodic',
    url: 'https://pallad.fr',
  },
  {
    domain: 'solefarma.com',
    label: 'Solefarma',
    description: {
      fr: 'Scanner pour semelles sur mesure en pharmacie',
      en: 'Custom insole scanner for pharmacies',
    },
    status: 'periodic',
    url: 'https://solefarma.com',
  },
  {
    domain: 'maillot-podologie.com',
    label: 'Maillot Podologie',
    description: {
      fr: 'Matériel spécialisé pour podologues',
      en: 'Specialized equipment for podiatrists',
    },
    status: 'periodic',
    url: 'https://maillot-podologie.com',
  },
  {
    domain: 'sportyjob.com',
    label: 'SportyJob',
    description: {
      fr: "Job board européen spécialisé dans les métiers du sport",
      en: 'European job board for sports careers',
    },
    status: 'periodic',
    url: 'https://sportyjob.com',
  },
  {
    domain: 'snazzy.fr',
    label: 'Snazzy',
    description: { fr: 'Agence web & communication', en: 'Web & communication agency' },
    status: 'periodic',
    url: 'https://snazzy.fr',
  },
  {
    domain: 'klappagency.com',
    label: 'Klapp Agency',
    description: { fr: 'Agence web spécialisée e-learning', en: 'E-learning web agency' },
    status: 'periodic',
    url: 'https://klappagency.com',
  },
  {
    domain: 'hackerouvert.fr',
    label: 'Hacker Ouvert',
    description: {
      fr: "Plateforme d'apprentissage au hacking éthique",
      en: 'Ethical hacking learning platform',
    },
    status: 'periodic',
    url: 'https://hackerouvert.fr',
  },
  {
    domain: 'makemestay.com',
    label: 'MakeMeStay',
    description: { fr: 'Financement immobilier sans banques', en: 'Real estate financing without banks' },
    status: 'periodic',
    url: 'https://makemestay.com',
  },
  {
    domain: 'occitem.fr',
    label: 'Occitem',
    description: {
      fr: 'Concepteur et fabricant de moteurs électriques',
      en: 'Electric motor designer and manufacturer',
    },
    status: 'periodic',
    url: 'https://occitem.fr',
  },
  {
    domain: 'filevert.fr',
    label: 'File Vert',
    description: {
      fr: 'Partage de fichiers éco-responsable',
      en: 'Eco-friendly file sharing',
    },
    status: 'periodic',
    url: 'https://filevert.fr',
  },
  {
    domain: 'ethersys.fr',
    label: 'Ethersys',
    description: {
      fr: 'Hébergeur web humain et de qualité',
      en: 'Quality web hosting with a human touch',
    },
    status: 'periodic',
    url: 'https://ethersys.fr',
  },
  {
    domain: 'infogerant.com',
    label: 'Infogérant',
    description: { fr: 'Infogérance à Toulouse', en: 'IT managed services in Toulouse' },
    status: 'periodic',
    url: 'https://infogerant.com',
  },
  {
    domain: 'mon-autoentreprise.fr',
    label: 'Mon Auto-Entreprise',
    description: {
      fr: 'Logiciel pour auto-entrepreneurs',
      en: 'Software for freelancers and micro-businesses',
    },
    status: 'periodic',
    url: 'https://mon-autoentreprise.fr',
  },
  {
    domain: 'stetoo.com',
    label: 'Stetoo',
    description: { fr: 'Agence de communication en santé', en: 'Healthcare communication agency' },
    status: 'periodic',
    url: 'https://stetoo.com',
  },
  {
    domain: 'mdp-data.com',
    label: 'MDP Data Protection',
    description: {
      fr: 'Protection et gestion des données personnelles',
      en: 'Personal data protection and management',
    },
    status: 'periodic',
    url: 'https://mdp-data.com',
  },
  {
    domain: 'docaposte.com',
    label: 'Docaposte',
    description: {
      fr: 'Éditeur de logiciel du groupe La Poste',
      en: 'Software publisher from La Poste Group',
    },
    status: 'periodic',
    url: 'https://docaposte.com',
  },

  // ── Contrat terminé ──────────────────────────────────────────────────────
  {
    domain: 'cozynergy.com',
    label: 'Cozynergy',
    slug: 'cozynergy',
    description: {
      fr: 'Leader français de la rénovation énergétique (racheté par BPCE)',
      en: 'French energy renovation leader (acquired by BPCE)',
    },
    sector: 'Énergie / Rénovation',
    status: 'ended',
    url: 'https://cozynergy.com',
    period: 'Mars 2025 — Décembre 2025',
    missions: [
      'Migration des pipelines CI/CD Jenkins vers GitHub Actions',
      'Architecture et déploiement de plusieurs plateformes sur Google Cloud',
      'Respect de contraintes réglementaires strictes pour le simulateur',
      'Optimisation des coûts Google Cloud : réduction de plus de 20% malgré des besoins croissants',
    ],
    technologies: ['GitHub Actions', 'Google Cloud', 'S3', 'DevOps'],
  },
  {
    domain: 'getboxy.co',
    label: 'Boxy',
    slug: 'boxy',
    logoDomain: 'boxy.eu',
    description: {
      fr: 'Supérettes autonomes connectées type Amazon Go',
      en: 'Autonomous connected convenience stores (Amazon Go-style)',
    },
    sector: 'Grande distribution / Retail tech',
    status: 'ended',
    url: 'https://getboxy.co',
    period: 'Octobre 2022 — Décembre 2023',
    missions: [
      'Fiabilisation et rationalisation du parc d\'une quarantaine de magasins connectés',
      'Industrialisation du déploiement matériel et logiciel (1 magasin/semaine)',
      'Supervision et alerting de l\'activité des magasins',
      'Gestion hybride local + cloud avec calcul GPU embarqué et connexions 4G instables',
      'Conseil sur les bonnes pratiques CI/CD, logging, configuration',
    ],
    technologies: ['Go', 'Kubernetes', 'GKE', 'RKE', 'VictoriaMetrics', 'Google Cloud', 'Linux'],
  },
  {
    domain: 'acadia-info.com',
    label: 'Acadia Info',
    description: { fr: 'Grossiste de matériel informatique', en: 'IT hardware wholesaler' },
    status: 'ended',
    url: 'https://acadia-info.com',
  },
  {
    domain: 'cofondateur.fr',
    label: 'Cofondateur',
    description: { fr: 'Trouvez votre cofondateur', en: 'Find your co-founder' },
    status: 'ended',
    url: 'https://cofondateur.fr',
  },
  {
    domain: 'asb-digital.fr',
    label: 'ASB Digital',
    description: { fr: 'Agence web à Lyon', en: 'Web agency in Lyon' },
    status: 'ended',
    url: 'https://asb-digital.fr',
  },
  {
    domain: 'chocolats-pralus.com',
    label: 'Chocolats Pralus',
    description: { fr: 'Chocolaterie réputée à Lyon', en: 'Renowned chocolate maker in Lyon' },
    status: 'ended',
    url: 'https://chocolats-pralus.com',
  },
  {
    domain: 'compilatio.net',
    label: 'Compilatio',
    description: { fr: 'Logiciel de détection du plagiat', en: 'Plagiarism detection software' },
    status: 'ended',
    url: 'https://compilatio.net',
  },
  {
    domain: 'myfamilyup.com',
    label: 'MyFamilyUp',
    description: { fr: "IA au service de la santé mentale", en: 'AI for mental health' },
    status: 'ended',
    url: 'https://myfamilyup.com',
  },
  {
    domain: 'ilexenvironnement.fr',
    label: 'Ilex Environnement',
    description: {
      fr: 'Conseil CEE & recherche de financements publics',
      en: 'Energy efficiency certificates & public funding advisory',
    },
    status: 'ended',
    url: 'https://ilexenvironnement.fr',
  },
  {
    domain: 'webexpr.fr',
    label: 'WebexpR',
    description: { fr: 'Agence digital et marketing', en: 'Digital & marketing agency' },
    status: 'ended',
    url: 'https://webexpr.fr',
  },
  {
    domain: 'medicall.fr',
    label: 'Medicall',
    description: {
      fr: "Logiciel SaaS & centre d'appel SOS Médecin",
      en: 'SaaS software & medical call center',
    },
    status: 'ended',
    url: 'https://medicall.fr',
  },
  {
    domain: 'infrafon.com',
    label: 'Infrafon',
    description: { fr: 'Device de sécurité physique', en: 'Physical security device' },
    status: 'ended',
    url: 'https://infrafon.com',
  },
  {
    domain: 'animalwebaction.com',
    label: 'Animal Web Action',
    description: {
      fr: 'Collecte de dons pour animaux en foyers',
      en: 'Donation platform for shelter animals',
    },
    status: 'ended',
    url: 'https://animalwebaction.com',
  },
];

export const activeClients = clients.filter((c) => c.status === 'active');
export const periodicClients = clients.filter((c) => c.status === 'periodic');
export const endedClients = clients.filter((c) => c.status === 'ended');
