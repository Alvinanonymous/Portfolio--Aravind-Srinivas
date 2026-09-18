export interface TimelineItem {
  period: string;
  organization: string;
  role: string;
  description: string;
  highlight?: string;
}

export interface ResearchArea {
  icon: string;
  title: string;
  summary: string;
  details: string;
  tags: string[];
}

export interface MediaPhoto {
  url: string;
  title: string;
  caption: string;
  tag: string;
}

export const PORTFOLIO_DATA = {
  name: "Aravind Srinivas",
  shortName: "Aravind",
  marqueeName: "Aravind — Srinivas",
  title: "Co-founder, President & CEO of Perplexity",
  professions: ["Computer Scientist", "Entrepreneur", "AI Researcher"],
  location: "San Francisco Bay Area, California",
  origin: "Chennai, Tamil Nadu, India",
  headline: "Building the future of AI-powered information discovery.",
  
  bio: "Aravind Srinivas is a computer scientist and entrepreneur best known as the co-founder and CEO of Perplexity, an AI-powered answer engine. His career combines academic research in artificial intelligence with experience at leading AI research organizations including OpenAI, Google and DeepMind.",
  
  bioExtended: "He studied Electrical Engineering at IIT Madras before completing doctoral studies in Computer Science at UC Berkeley. His research interests have included machine learning, reinforcement learning, contrastive learning, transformers, generative models and computer vision.",

  education: [
    {
      institution: "Indian Institute of Technology Madras (IIT Madras)",
      degree: "Dual Degree — B.Tech + M.Tech",
      field: "Electrical Engineering",
      year: "2017",
      note: "Recipient of the Young Alumni Achiever Award 2026, KVPY Fellowship, and National Talent Search Scholarship."
    },
    {
      institution: "University of California, Berkeley",
      degree: "Ph.D. in Computer Science",
      field: "Artificial Intelligence & Deep Learning",
      year: "2021",
      note: "Research focused on reinforcement learning, unsupervised representation learning, contrastive learning, and transformers for visual recognition."
    }
  ],

  perplexity: {
    name: "Perplexity",
    founded: "2022",
    role: "Co-founder & CEO",
    industry: "Artificial Intelligence / Search / Information Retrieval",
    url: "https://www.perplexity.ai",
    summary: "In 2022, Aravind Srinivas co-founded Perplexity, an AI-powered answer engine designed to make information discovery more direct and useful. As CEO, he has played a central role in developing the company's AI products and expanding its search and research capabilities.",
    features: [
      {
        title: "Direct Answer Synthesis",
        desc: "Synthesizing conversational, authoritative answers directly rather than displaying ten blue links."
      },
      {
        title: "Cited Grounding",
        desc: "Every factual assertion is backed by verifiable, clickable inline sources from across the open web."
      },
      {
        title: "Pro Search & Reasoning",
        desc: "Multi-step reasoning engine executing follow-up queries, code execution, and deep investigative workflows."
      }
    ]
  },

  timeline: [
    {
      period: "2022 — Present",
      organization: "Perplexity",
      role: "Co-founder & CEO",
      description: "Leading company vision, product architecture, and enterprise AI search development, revolutionizing real-time information retrieval globally.",
      highlight: "Current"
    },
    {
      period: "2021 — 2022",
      organization: "OpenAI",
      role: "Research Scientist",
      description: "Worked on advanced generative modeling, large language models, and foundational research at the frontier of deep learning.",
      highlight: "Research"
    },
    {
      period: "2020 — 2021",
      organization: "Google",
      role: "Research Intern",
      description: "Conducted groundbreaking research in transformer-based computer vision and visual recognition architectures.",
      highlight: "Research"
    },
    {
      period: "2019",
      organization: "DeepMind",
      role: "Research Intern",
      description: "Investigated large-scale contrastive learning representations and self-supervised visual algorithms.",
      highlight: "Research"
    },
    {
      period: "2018",
      organization: "OpenAI",
      role: "Research Intern",
      description: "Researched policy-gradient methods and reinforcement learning algorithms for robotic and simulated decision tasks.",
      highlight: "Research"
    },
    {
      period: "2013 — 2017",
      organization: "IIT Madras",
      role: "Dual Degree Scholar",
      description: "B.Tech + M.Tech in Electrical Engineering. Built core foundations in mathematics, signal processing, and algorithms.",
      highlight: "Academic"
    }
  ] as TimelineItem[],

  researchAreas: [
    {
      icon: "🤖",
      title: "Artificial Intelligence",
      summary: "Modern AI systems and generative foundational architectures.",
      details: "Research and product development involving modern AI systems, prompt-grounded synthesis, and conversational intelligence.",
      tags: ["GenAI", "LLMs", "Reasoning"]
    },
    {
      icon: "🧠",
      title: "Machine Learning",
      summary: "Representation learning and statistical algorithms.",
      details: "Fundamental machine-learning algorithms, unsupervised and self-supervised representation learning from massive unlabelled datasets.",
      tags: ["Deep Learning", "Representations", "Optimization"]
    },
    {
      icon: "🔄",
      title: "Reinforcement Learning",
      summary: "Decision-making algorithms learning through feedback.",
      details: "Research into algorithms that allow models to learn through interaction, policy gradients, and trial-and-error environmental feedback.",
      tags: ["Policy Gradients", "RLHF", "Reward Models"]
    },
    {
      icon: "👁️",
      title: "Computer Vision",
      summary: "Visual recognition and multimodal architectures.",
      details: "Research involving visual recognition, patch-based image processing, and vision-language integration.",
      tags: ["Vision Transformers", "Contrastive Learning", "Multimodal"]
    },
    {
      icon: "🔢",
      title: "Transformers",
      summary: "Attention mechanisms across vision and language.",
      details: "Research involving transformer architectures and their foundational application to computer vision, generative AI, and scale.",
      tags: ["Self-Attention", "Scale", "Sequence Models"]
    },
    {
      icon: "🔍",
      title: "AI Search",
      summary: "Retrieval-augmented generation and search systems.",
      details: "Development of systems that combine real-time index retrieval, reranking, and language models to deliver cited answers.",
      tags: ["RAG", "Information Retrieval", "Source Grounding"]
    }
  ] as ResearchArea[],

  skills: {
    technical: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Reinforcement Learning",
      "Generative AI",
      "Computer Vision",
      "Natural Language Processing",
      "Transformers",
      "Contrastive Learning",
      "Representation Learning",
      "AI Search",
      "Information Retrieval"
    ],
    professional: [
      "Entrepreneurship",
      "Product Development",
      "Frontier AI Research",
      "Technical Leadership",
      "Startup Building",
      "AI Strategy",
      "Executive Management"
    ]
  },

  achievements: [
    {
      year: "2026",
      title: "Young Alumni Achiever Award",
      organization: "IIT Madras",
      desc: "Honored by IIT Madras for transformative contributions to artificial intelligence, entrepreneurship, and search technology."
    },
    {
      year: "2022",
      title: "Co-founded Perplexity",
      organization: "San Francisco",
      desc: "Pioneered the conversational AI answer engine, scaling it into one of the most recognized AI products in the world."
    },
    {
      year: "2021",
      title: "Ph.D. in Computer Science",
      organization: "UC Berkeley",
      desc: "Completed doctoral dissertation under top faculty in machine learning, reinforcement learning, and computer vision."
    },
    {
      year: "2018–22",
      title: "Elite Research Appointments",
      organization: "OpenAI, Google & DeepMind",
      desc: "Contributed to pioneering generative modeling, contrastive learning, and transformer architectures."
    },
    {
      year: "Earlier",
      title: "National Academic Honors",
      organization: "Govt of India",
      desc: "Recipient of the prestigious Kishore Vaigyanik Protsahan Yojana (KVPY) fellowship and National Talent Search Scholarship."
    }
  ],

  mediaPhotos: [
    {
      url: "/aravind-portrait.jpg",
      title: "Studio Portrait",
      caption: "Aravind Srinivas, Co-founder and CEO of Perplexity.",
      tag: "Official"
    },
    {
      url: "/aravind-talk.jpg",
      title: "Keynote & Discussion",
      caption: "Sharing insights on generative search architecture and the future of knowledge retrieval.",
      tag: "Speaking"
    },
    {
      url: "/aravind-stage.jpg",
      title: "Tech Summit Fireside",
      caption: "Presenting Perplexity's vision for direct answer engines and conversational research.",
      tag: "Fireside"
    },
    {
      url: "/aravind-press.jpg",
      title: "Industry Conference",
      caption: "Press briefing on scaling retrieval-augmented models and citation fidelity.",
      tag: "Conference"
    },
    {
      url: "/aravind-interview.jpg",
      title: "Deep Dive Interview",
      caption: "Discussion on reinforcement learning, transformer scaling, and founding Perplexity.",
      tag: "Interview"
    },
    {
      url: "/aravind-square.jpg",
      title: "Executive Profile",
      caption: "Leading Perplexity from the San Francisco Bay Area.",
      tag: "Profile"
    }
  ] as MediaPhoto[],

  socialLinks: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aravind-srinivas-16051987"
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/AravindSrinivas"
    },
    {
      name: "Perplexity",
      href: "https://www.perplexity.ai"
    }
  ]
};
