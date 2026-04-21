// Demo data — mirrors the seed file, shaped exactly as the API returns it.
// Used when DEMO_MODE=true so the app runs without a database connection.

export const DEMO_USER = {
  id: 'demo-user',
  name: 'Alice M.',
  email: 'alice@example.com',
  photo: null,
  bio: 'Passionate about new beginnings and helping others find their path.',
  goals: ['Find work', 'Build confidence', 'Connect with others'],
  interests: ['Business basics', 'Communication', 'Leadership'],
  onboarded: true,
};

// ── Learning ──────────────────────────────────────────────────────────────────

export const paths = [
  {
    id: 'path-footing',
    title: 'Finding Your Footing',
    description: 'Rebuild confidence, set meaningful goals, and start telling your story on your own terms.',
    order: 1,
    modules: [
      {
        id: 'mod-1-1',
        pathId: 'path-footing',
        title: 'Who Are You Now?',
        description: 'Explore your values, strengths, and where you are today.',
        duration: '20 min',
        order: 1,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        userProgress: [],
      },
      {
        id: 'mod-1-2',
        pathId: 'path-footing',
        title: 'Setting Goals That Stick',
        description: 'Learn a simple framework for setting goals you can actually achieve.',
        duration: '25 min',
        order: 2,
        videoUrl: null,
        userProgress: [],
      },
      {
        id: 'mod-1-3',
        pathId: 'path-footing',
        title: 'Your Personal Brand',
        description: 'How to introduce yourself with confidence in any room.',
        duration: '30 min',
        order: 3,
        videoUrl: null,
        userProgress: [],
      },
      {
        id: 'mod-1-4',
        pathId: 'path-footing',
        title: 'Resilience & Bouncing Back',
        description: "How to keep going when it's hard — and why setbacks are part of the journey.",
        duration: '25 min',
        order: 4,
        videoUrl: null,
        userProgress: [],
      },
    ],
  },
  {
    id: 'path-business',
    title: 'Business Basics',
    description: 'Understand money, communicate with confidence, and develop the professional skills employers value.',
    order: 2,
    modules: [
      {
        id: 'mod-2-1',
        pathId: 'path-business',
        title: 'Money Without the Stress',
        description: 'A plain-English guide to understanding your finances.',
        duration: '30 min',
        order: 1,
        videoUrl: null,
        userProgress: [],
      },
      {
        id: 'mod-2-2',
        pathId: 'path-business',
        title: 'Communicating with Confidence',
        description: 'Speak up, be heard, and build trust in any conversation.',
        duration: '25 min',
        order: 2,
        videoUrl: null,
        userProgress: [],
      },
      {
        id: 'mod-2-3',
        pathId: 'path-business',
        title: 'Professional Skills That Open Doors',
        description: 'Emails, meetings, and workplace norms — decoded.',
        duration: '20 min',
        order: 3,
        videoUrl: null,
        userProgress: [],
      },
      {
        id: 'mod-2-4',
        pathId: 'path-business',
        title: 'Knowing Your Rights at Work',
        description: 'The basics of employment law every working woman should know.',
        duration: '30 min',
        order: 4,
        videoUrl: null,
        userProgress: [],
      },
    ],
  },
  {
    id: 'path-digital',
    title: 'Digital Ready',
    description: 'Master email, spreadsheets, LinkedIn, and everyday digital tools to thrive in a modern workplace.',
    order: 3,
    modules: [
      {
        id: 'mod-3-1',
        pathId: 'path-digital',
        title: 'Email & the Inbox',
        description: 'Set up, organise, and communicate professionally via email.',
        duration: '20 min',
        order: 1,
        videoUrl: null,
        userProgress: [],
      },
      {
        id: 'mod-3-2',
        pathId: 'path-digital',
        title: 'Spreadsheets Made Simple',
        description: 'Learn the basics of Google Sheets or Excel without the overwhelm.',
        duration: '35 min',
        order: 2,
        videoUrl: null,
        userProgress: [],
      },
      {
        id: 'mod-3-3',
        pathId: 'path-digital',
        title: 'LinkedIn for Real Life',
        description: 'Build a profile that works hard for you while you sleep.',
        duration: '30 min',
        order: 3,
        videoUrl: null,
        userProgress: [],
      },
      {
        id: 'mod-3-4',
        pathId: 'path-digital',
        title: 'Staying Safe Online',
        description: 'Protect yourself, your accounts, and your data in a digital world.',
        duration: '25 min',
        order: 4,
        videoUrl: null,
        userProgress: [],
      },
    ],
  },
];

// Full module detail (content + quiz) — keyed by module id
export const moduleDetail = {
  'mod-1-1': {
    id: 'mod-1-1',
    pathId: 'path-footing',
    path: { id: 'path-footing', title: 'Finding Your Footing' },
    title: 'Who Are You Now?',
    description: 'Explore your values, strengths, and where you are today.',
    duration: '20 min',
    order: 1,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    content: `<h2>Welcome to the beginning of something real.</h2><p>This module is about giving yourself permission to start fresh. Before we can plan where we're going, we spend a moment honouring where we've been.</p><h3>Your values</h3><p>Values are the things that matter most to you — honesty, family, creativity, independence. When your work and life align with your values, you feel more energised and more like yourself.</p><p>Take a moment to write down three values that feel most important to you right now.</p><h3>Your strengths</h3><p>You have more than you think. Strengths aren't just qualifications — they're qualities like resilience, empathy, organisation, creativity, and the ability to keep going when things are hard.</p>`,
    quiz: [
      { question: 'What is a personal value?', options: ['A bank balance', 'Something that matters deeply to you', 'A job title', 'A qualification'], answer: 1 },
      { question: 'Strengths can include:', options: ['Only formal qualifications', 'Only physical skills', 'Qualities like resilience and empathy', 'Only work experience'], answer: 2 },
      { question: "Reflecting on where you've been helps you:", options: ['Stay stuck in the past', 'Understand what you bring forward', 'Forget your history', 'Compare yourself to others'], answer: 1 },
    ],
    userProgress: [],
  },
  'mod-1-2': {
    id: 'mod-1-2',
    pathId: 'path-footing',
    path: { id: 'path-footing', title: 'Finding Your Footing' },
    title: 'Setting Goals That Stick',
    description: 'Learn a simple framework for setting goals you can actually achieve.',
    duration: '25 min',
    order: 2,
    videoUrl: null,
    content: `<h2>Goals that feel like yours.</h2><p>There's a difference between goals you think you should want and goals that genuinely excite you. In this module we explore how to set goals that are rooted in what you actually care about.</p><h3>The WOOP method</h3><p><strong>Wish</strong> — What do you want to achieve?<br/><strong>Outcome</strong> — How will you feel when you get there?<br/><strong>Obstacle</strong> — What might get in the way?<br/><strong>Plan</strong> — What will you do when that obstacle shows up?</p><p>WOOP is backed by research and it works because it takes your real life into account — not some perfect version of it.</p>`,
    quiz: [
      { question: 'What does the O in WOOP stand for?', options: ['Opportunity', 'Outcome', 'Obstacle', 'Output'], answer: 1 },
      { question: 'Why is it useful to identify obstacles?', options: ['To give up earlier', 'So you can plan how to handle them', 'To impress others', 'To avoid setting goals'], answer: 1 },
      { question: 'Goals that stick are:', options: ['Borrowed from someone else', 'Rooted in what you genuinely care about', 'Always about money', 'Shared publicly'], answer: 1 },
    ],
    userProgress: [],
  },
  'mod-1-3': {
    id: 'mod-1-3',
    pathId: 'path-footing',
    path: { id: 'path-footing', title: 'Finding Your Footing' },
    title: 'Your Personal Brand',
    description: 'How to introduce yourself with confidence in any room.',
    duration: '30 min',
    order: 3,
    videoUrl: null,
    content: `<h2>Your story is your brand.</h2><p>A personal brand isn't a logo or a LinkedIn profile — it's how people experience you. It's the impression you leave and the story you tell.</p><h3>Crafting your introduction</h3><p>A powerful introduction answers three things:<br/>1. Who you are<br/>2. What you bring<br/>3. What you're looking for</p><p>It doesn't need to be perfect. It needs to be honest and warm.</p><h3>Practice makes permanent</h3><p>Write your introduction down. Say it out loud. Record yourself. Notice what feels authentic and what feels stiff — then adjust.</p>`,
    quiz: [
      { question: 'A personal brand is:', options: ['Only for famous people', 'How others experience you', 'Just a social media profile', 'A business logo'], answer: 1 },
      { question: 'A good introduction should be:', options: ['Memorised word for word', 'Honest and warm', 'A full CV summary', 'Focused only on past jobs'], answer: 1 },
      { question: 'Practising your introduction helps because:', options: ['It impresses interviewers', 'It builds confidence and authenticity', "It's a rule", 'It memorises facts'], answer: 1 },
    ],
    userProgress: [],
  },
  'mod-1-4': {
    id: 'mod-1-4',
    pathId: 'path-footing',
    path: { id: 'path-footing', title: 'Finding Your Footing' },
    title: 'Resilience & Bouncing Back',
    description: "How to keep going when it's hard — and why setbacks are part of the journey.",
    duration: '25 min',
    order: 4,
    videoUrl: null,
    content: `<h2>Resilience isn't about not falling. It's about getting back up.</h2><p>Resilience is one of the most sought-after qualities in any workplace — and the good news is it's not a fixed personality trait. It's a skill you can build.</p><h3>What resilience looks like in practice</h3><p>Resilient people aren't people who don't feel setbacks. They feel them deeply — but they have strategies to process and move forward. Rest is part of resilience. Asking for help is part of resilience. Changing your approach when something isn't working is part of resilience.</p><h3>Your resilience toolkit</h3><p>Think about a time you got through something difficult. What helped? Who was there? What did you do? That's your toolkit — and it's more stocked than you think.</p>`,
    quiz: [
      { question: 'Resilience is:', options: ['Never feeling setbacks', 'A fixed personality trait', 'A skill you can build over time', 'Only useful in sport'], answer: 2 },
      { question: 'Rest is:', options: ['A sign of weakness', 'Part of being resilient', 'Something to avoid', 'Unrelated to resilience'], answer: 1 },
      { question: 'Asking for help when things are hard is:', options: ['A sign of failure', 'Part of resilience', 'Something to be ashamed of', 'Only for beginners'], answer: 1 },
    ],
    userProgress: [],
  },
  'mod-2-1': {
    id: 'mod-2-1', pathId: 'path-business', path: { id: 'path-business', title: 'Business Basics' },
    title: 'Money Without the Stress', description: 'A plain-English guide to understanding your finances.', duration: '30 min', order: 1, videoUrl: null,
    content: `<h2>Money is just a tool. Let's make it work for you.</h2><p>This module is about getting comfortable with numbers — no judgement, no jargon. Whether you're managing a tight budget or just getting started, understanding your money is the first step to feeling in control.</p><h3>Your money story</h3><p>We all have feelings about money that come from our past. Taking a moment to understand those feelings helps us make clearer decisions.</p><h3>The 50/30/20 rule</h3><p>A simple framework: 50% needs, 30% wants, 20% saving or debt repayment.</p>`,
    quiz: [
      { question: 'In the 50/30/20 rule, what does the 20% represent?', options: ['Food', 'Entertainment', 'Saving or debt repayment', 'Rent'], answer: 2 },
      { question: 'Understanding your money story helps you:', options: ['Earn more immediately', 'Make clearer financial decisions', 'Impress banks', 'Avoid taxes'], answer: 1 },
      { question: 'This module aims to make money feel:', options: ['Complicated', 'Scary', 'Approachable and manageable', 'Only for experts'], answer: 2 },
    ],
    userProgress: [],
  },
  'mod-2-2': {
    id: 'mod-2-2', pathId: 'path-business', path: { id: 'path-business', title: 'Business Basics' },
    title: 'Communicating with Confidence', description: 'Speak up, be heard, and build trust in any conversation.', duration: '25 min', order: 2, videoUrl: null,
    content: `<h2>Your voice matters.</h2><p>Communication is a skill — and like any skill, it gets better with practice. This module covers the basics of clear, confident communication in work settings.</p><h3>Active listening</h3><p>The most powerful communicators are great listeners first.</p><h3>Assertiveness vs aggression</h3><p>Being assertive means expressing your needs clearly and respectfully. It's not about being loud — it's about being clear.</p>`,
    quiz: [
      { question: 'Active listening means:', options: ['Talking more than listening', 'Focusing fully on the other person', 'Planning your response while they speak', 'Only listening to managers'], answer: 1 },
      { question: 'Assertiveness is:', options: ['The same as aggression', 'Expressing your needs clearly and respectfully', 'Never saying no', 'Always being confident'], answer: 1 },
      { question: 'Communication is:', options: ['A fixed talent', 'A skill that improves with practice', 'Only verbal', 'Unimportant in work'], answer: 1 },
    ],
    userProgress: [],
  },
  'mod-2-3': {
    id: 'mod-2-3', pathId: 'path-business', path: { id: 'path-business', title: 'Business Basics' },
    title: 'Professional Skills That Open Doors', description: 'Emails, meetings, and workplace norms — decoded.', duration: '20 min', order: 3, videoUrl: null,
    content: `<h2>The unwritten rules of professional life.</h2><p>Every workplace has a culture, and understanding that culture helps you feel less like an outsider.</p><h3>Writing professional emails</h3><p>Short, clear, and warm is the goal. Lead with what you need, give context, and always say thank you.</p><h3>Workplace meetings</h3><p>Come prepared. Contribute once with something meaningful rather than filling silence.</p>`,
    quiz: [
      { question: 'A good professional email is:', options: ['As long as possible', 'Short, clear, and warm', 'Formal and impersonal', 'Written without a greeting'], answer: 1 },
      { question: "In meetings, it's better to:", options: ['Talk constantly', 'Stay silent always', 'Contribute meaningfully once', 'Only speak if asked'], answer: 2 },
      { question: 'Understanding workplace culture helps you:', options: ['Stand out negatively', 'Feel less like an outsider', 'Break the rules', 'Avoid conversations'], answer: 1 },
    ],
    userProgress: [],
  },
  'mod-2-4': {
    id: 'mod-2-4', pathId: 'path-business', path: { id: 'path-business', title: 'Business Basics' },
    title: 'Knowing Your Rights at Work', description: 'The basics of employment law every working woman should know.', duration: '30 min', order: 4, videoUrl: null,
    content: `<h2>Knowledge is power — especially at work.</h2><p>Understanding your rights isn't about being difficult. It's about knowing where you stand.</p><h3>Key rights at a glance</h3><p><strong>Pay:</strong> National Minimum Wage.<br/><strong>Breaks:</strong> 20 minutes for shifts over 6 hours.<br/><strong>Discrimination:</strong> Illegal on protected characteristics.</p><h3>Where to get help</h3><p>ACAS offers free, confidential advice. Citizens Advice is another excellent resource.</p>`,
    quiz: [
      { question: 'You are entitled to a break if you work more than:', options: ['4 hours', '5 hours', '6 hours', '8 hours'], answer: 2 },
      { question: 'ACAS provides:', options: ['Job listings', 'Free employment rights advice', 'Training courses only', 'Loan services'], answer: 1 },
      { question: 'Knowing your rights at work means:', options: ['Being difficult', 'Making informed decisions and protecting yourself', 'Avoiding your employer', 'Filing complaints immediately'], answer: 1 },
    ],
    userProgress: [],
  },
  'mod-3-1': {
    id: 'mod-3-1', pathId: 'path-digital', path: { id: 'path-digital', title: 'Digital Ready' },
    title: 'Email & the Inbox', description: 'Set up, organise, and communicate professionally via email.', duration: '20 min', order: 1, videoUrl: null,
    content: `<h2>Email is your professional front door.</h2><p>Having a professional email address and knowing how to use it confidently is one of the most practical skills in any job search.</p><h3>Setting up a professional email</h3><p>Use your name — firstname.lastname@gmail.com is a solid format.</p><h3>Organising your inbox</h3><p>Labels, clear subject lines, and the habit of processing rather than ignoring will change your relationship with email forever.</p>`,
    quiz: [
      { question: 'A professional email address should:', options: ['Include your nickname', 'Use your name', 'Be as short as possible', 'Not matter'], answer: 1 },
      { question: 'Organising your inbox with folders or labels helps you:', options: ['Receive fewer emails', 'Find things faster and feel less overwhelmed', 'Delete everything', 'Impress colleagues'], answer: 1 },
      { question: 'The best habit for email is:', options: ['Checking it once a year', 'Processing rather than ignoring', 'Only responding to important people', 'Using reply-all always'], answer: 1 },
    ],
    userProgress: [],
  },
  'mod-3-2': {
    id: 'mod-3-2', pathId: 'path-digital', path: { id: 'path-digital', title: 'Digital Ready' },
    title: 'Spreadsheets Made Simple', description: 'Learn the basics of Google Sheets or Excel without the overwhelm.', duration: '35 min', order: 2, videoUrl: null,
    content: `<h2>Spreadsheets are not scary.</h2><p>The basics are much simpler than they look. This module covers what you actually need to know.</p><h3>What a spreadsheet is</h3><p>A table of information. Rows go across, columns go down. Each box is a cell.</p><h3>Basic formulas</h3><p>SUM adds numbers. AVERAGE gives you the average. These two cover 80% of what most jobs need.</p>`,
    quiz: [
      { question: 'In a spreadsheet, what is a cell?', options: ['A phone', 'A row', 'A column', 'A single box in the table'], answer: 3 },
      { question: 'The SUM formula:', options: ['Averages numbers', 'Adds numbers together', 'Counts words', 'Formats cells'], answer: 1 },
      { question: 'Good spreadsheet formatting:', options: ['Is unnecessary', 'Makes data readable and professional', 'Uses many colours', 'Is only for designers'], answer: 1 },
    ],
    userProgress: [],
  },
  'mod-3-3': {
    id: 'mod-3-3', pathId: 'path-digital', path: { id: 'path-digital', title: 'Digital Ready' },
    title: 'LinkedIn for Real Life', description: 'Build a profile that works hard for you while you sleep.', duration: '30 min', order: 3, videoUrl: null,
    content: `<h2>LinkedIn is not just for suits.</h2><p>Employers actively look for candidates there. A strong profile is one of the most powerful tools in your job search kit.</p><h3>Profile photo</h3><p>Smile. Good lighting. Clean background.</p><h3>Headline</h3><p>Tell people what you do and who you help.</p><h3>About section</h3><p>Write in first person. Be warm and honest. Tell your story.</p>`,
    quiz: [
      { question: 'Your LinkedIn headline should:', options: ['Only list your job title', 'Describe what you do and who you help', 'Be left blank', "Copy someone else's"], answer: 1 },
      { question: 'Your About section should be written in:', options: ['Third person', 'First person', 'As bullet points only', 'Technical jargon'], answer: 1 },
      { question: 'A good profile photo:', options: ['Needs a professional photographer', 'Should be formal', 'Uses good lighting and a smile', 'Should not show your face'], answer: 2 },
    ],
    userProgress: [],
  },
  'mod-3-4': {
    id: 'mod-3-4', pathId: 'path-digital', path: { id: 'path-digital', title: 'Digital Ready' },
    title: 'Staying Safe Online', description: 'Protect yourself, your accounts, and your data in a digital world.', duration: '25 min', order: 4, videoUrl: null,
    content: `<h2>The internet is wonderful. Let's keep it that way.</h2><p>These simple habits protect your money, your identity, and your peace of mind.</p><h3>Strong passwords</h3><p>Use a different password for every account. A password manager like Bitwarden (free) remembers them all.</p><h3>Phishing emails</h3><p>If an email asks you to act urgently, pause. Go directly to the website by typing the address yourself.</p><h3>Two-factor authentication</h3><p>Turn it on everywhere. Even if someone gets your password, they still can't get in without your phone.</p>`,
    quiz: [
      { question: 'A strong password is:', options: ['Your birthday', 'The same password used everywhere', 'Three random words strung together', 'A single word with an exclamation mark'], answer: 2 },
      { question: 'If an email asks you to act urgently, you should:', options: ['Click immediately', 'Ignore all emails', 'Pause and check by going directly to the website', 'Forward it to friends'], answer: 2 },
      { question: 'Two-factor authentication means:', options: ['Two passwords', 'Extra protection even if your password is stolen', 'Logging in twice', 'A backup email only'], answer: 1 },
    ],
    userProgress: [],
  },
};

// ── Community ─────────────────────────────────────────────────────────────────

export const circles = [
  { id: 'circle-jobs',  name: 'Job Hunting',      description: 'CVs, interviews, job boards, and celebrating those wins.',     topic: 'Work',      _count: { posts: 3 } },
  { id: 'circle-money', name: 'Money & Budgeting', description: 'Honest conversations about money without the shame.',           topic: 'Finance',   _count: { posts: 3 } },
  { id: 'circle-new',   name: 'New Beginnings',    description: "For when you're starting over and need a soft place to land.", topic: 'Wellbeing', _count: { posts: 3 } },
  { id: 'circle-tech',  name: 'Tech & Digital',    description: 'Questions welcome, no such thing as a silly one here.',        topic: 'Digital',   _count: { posts: 3 } },
];

const postsByCircle = {
  'circle-jobs': [
    {
      id: 'post-job-3', circleId: 'circle-jobs',
      author: { id: 'u-grace', name: 'Grace N.', photo: null },
      content: "Got the job!! Part-time admin role, flexible hours, lovely team. I cried when I got the call. Thank you to everyone who cheered me on in this circle — it genuinely kept me going. 🎉",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
      replies: [], likes: [], _count: { likes: 7, replies: 4 },
    },
    {
      id: 'post-job-2', circleId: 'circle-jobs',
      author: { id: 'u-fatima', name: 'Fatima H.', photo: null },
      content: "Does anyone have tips for explaining a gap in your CV? I've been out of work for five years raising my kids and I feel a bit lost about how to talk about it without it sounding like an apology.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 10).toISOString(),
      replies: [
        { id: 'reply-2', postId: 'post-job-2', author: { id: 'u-alice', name: 'Alice M.', photo: null }, content: "Great question. Be direct and proud: \"I took time out to raise my children, which required enormous organisation, patience, and resilience.\" That's not a gap — that's experience. Reframe it.", createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString() },
      ],
      likes: [], _count: { likes: 3, replies: 1 },
    },
    {
      id: 'post-job-1', circleId: 'circle-jobs',
      author: { id: 'u-cora', name: 'Cora T.', photo: null },
      content: 'Just had my first interview in years. I was so nervous but I did it! The practice sessions in the Learning Journey really helped me prepare. Whatever happens, I showed up and that feels huge.',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
      replies: [
        { id: 'reply-1', postId: 'post-job-1', author: { id: 'u-alice', name: 'Alice M.', photo: null }, content: 'That is HUGE. You should be so proud. How did it feel walking out?', createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString() },
      ],
      likes: [], _count: { likes: 5, replies: 1 },
    },
  ],
  'circle-money': [
    {
      id: 'post-money-1', circleId: 'circle-money',
      author: { id: 'u-bea', name: 'Beatrice O.', photo: null },
      content: 'Shared the 50/30/20 rule with my sister yesterday and she said it was the first time money had ever made sense to her. Small wins! Sometimes the simplest frameworks are the most powerful.',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
      replies: [], likes: [], _count: { likes: 9, replies: 0 },
    },
    {
      id: 'post-money-2', circleId: 'circle-money',
      author: { id: 'u-harriet', name: 'Harriet W.', photo: null },
      content: "Honest question: does anyone else feel almost ashamed talking about money? I grew up in a house where it was a forbidden topic and I'm only now realising how much that affected me.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(),
      replies: [
        { id: 'reply-3', postId: 'post-money-2', author: { id: 'u-bea', name: 'Beatrice O.', photo: null }, content: "You're not alone in that at all. It's such a common thing — especially for women, who were often kept out of financial conversations entirely. Starting to talk about it, like you're doing right now, is the first step.", createdAt: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString() },
      ],
      likes: [], _count: { likes: 11, replies: 1 },
    },
    {
      id: 'post-money-3', circleId: 'circle-money',
      author: { id: 'demo-user', name: 'Alice M.', photo: null },
      content: "Tip that changed my life: I set up a separate savings account with a different bank and don't have the app on my phone. Out of sight, out of mind. I've saved more in 6 months than I did in the previous three years.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
      replies: [], likes: [], _count: { likes: 14, replies: 2 },
    },
  ],
  'circle-new': [
    {
      id: 'post-new-1', circleId: 'circle-new',
      author: { id: 'u-grace', name: 'Grace N.', photo: null },
      content: "I moved here six months ago knowing nobody. Finding this community has been the best thing that's happened to me. I just wanted to say that — to whoever is reading this and feeling alone. You're not.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
      replies: [], likes: [], _count: { likes: 18, replies: 3 },
    },
    {
      id: 'post-new-2', circleId: 'circle-new',
      author: { id: 'u-cora', name: 'Cora T.', photo: null },
      content: "Three months since I left teaching after 15 years. Some days it feels like freedom, other days it feels terrifying. Both can be true at the same time, right?",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(),
      replies: [], likes: [], _count: { likes: 12, replies: 2 },
    },
    {
      id: 'post-new-3', circleId: 'circle-new',
      author: { id: 'u-fatima', name: 'Fatima H.', photo: null },
      content: "Completed my first full learning module today. It took me three sessions because the kids kept interrupting, but I did it. Celebrated with a cup of tea and five whole minutes of quiet. Progress looks different for everyone.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(),
      replies: [], likes: [], _count: { likes: 16, replies: 4 },
    },
  ],
  'circle-tech': [
    {
      id: 'post-tech-1', circleId: 'circle-tech',
      author: { id: 'u-elspeth', name: 'Elspeth K.', photo: null },
      content: "Reminder that there is no such thing as a silly question in here. I've been teaching digital skills for 8 years and I still look things up constantly. The goal isn't to know everything — it's to know how to find out.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
      replies: [], likes: [], _count: { likes: 8, replies: 0 },
    },
    {
      id: 'post-tech-2', circleId: 'circle-tech',
      author: { id: 'u-harriet', name: 'Harriet W.', photo: null },
      content: "Can anyone recommend a free tool for making a simple CV? I've been using Word but it always ends up looking a bit plain. Preferably something I don't need to create an account for!",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 15).toISOString(),
      replies: [
        { id: 'reply-4', postId: 'post-tech-2', author: { id: 'u-elspeth', name: 'Elspeth K.', photo: null }, content: "Canva! Go to canva.com — free, no account needed to browse, and they have beautiful CV templates. Takes about 20 minutes.", createdAt: new Date(Date.now() - 1000 * 60 * 60 * 13).toISOString() },
      ],
      likes: [], _count: { likes: 4, replies: 1 },
    },
    {
      id: 'post-tech-3', circleId: 'circle-tech',
      author: { id: 'u-diana', name: 'Diana R.', photo: null },
      content: "Just want to flag: I got a very convincing phishing email this week pretending to be from HMRC. Please always go directly to websites by typing the address yourself — never click links in emails you weren't expecting.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 42).toISOString(),
      replies: [], likes: [], _count: { likes: 10, replies: 0 },
    },
  ],
};

export function getPostsForCircle(circleId) {
  return postsByCircle[circleId] || [];
}

// ── Mentors ───────────────────────────────────────────────────────────────────

export const mentors = [
  {
    id: 'mentor-alice',
    userId: 'demo-user',
    bio: "HR professional with 12 years of experience. I love helping women craft their story and land opportunities they deserve. I've sat on both sides of the interview table and I know exactly what hiring managers are looking for.",
    expertise: ['CV writing', 'Interview prep', 'Career change', 'Confidence'],
    available: true,
    user: { id: 'demo-user', name: 'Alice M.', photo: null },
  },
  {
    id: 'mentor-bea',
    userId: 'u-bea',
    bio: "Accountant turned entrepreneur. I demystify money and help women feel in control of their finances. Whether you're sorting out a budget, thinking about self-employment, or just want money to stop feeling scary — I've got you.",
    expertise: ['Finance', 'Business basics', 'Self-employment', 'Budgeting'],
    available: true,
    user: { id: 'u-bea', name: 'Beatrice O.', photo: null },
  },
  {
    id: 'mentor-cora',
    userId: 'u-cora',
    bio: "After 15 years in the classroom I reinvented myself as a communications consultant. I help women find their voice and present themselves with warmth and confidence — in a job interview, a pitch, or just a difficult conversation.",
    expertise: ['Communication', 'Presentation skills', 'Confidence', 'Career change'],
    available: true,
    user: { id: 'u-cora', name: 'Cora T.', photo: null },
  },
  {
    id: 'mentor-diana',
    userId: 'u-diana',
    bio: "Leadership coach with 10 years working with women in mid-career transitions. I specialise in helping you identify where your ambition has been hiding and build a plan to act on it. No jargon, no corporate fluff — just real conversations.",
    expertise: ['Leadership', 'Career strategy', 'Goal setting', 'Confidence'],
    available: true,
    user: { id: 'u-diana', name: 'Diana R.', photo: null },
  },
  {
    id: 'mentor-elspeth',
    userId: 'u-elspeth',
    bio: "I've trained hundreds of women to feel at home with technology. If you're worried you're too old, too behind, or too confused — you're exactly who I love to work with. We start wherever you are, no rushing, no judgement.",
    expertise: ['Digital skills', 'Email & productivity', 'LinkedIn', 'Spreadsheets'],
    available: false,
    user: { id: 'u-elspeth', name: 'Elspeth K.', photo: null },
  },
];

// ── Opportunities ─────────────────────────────────────────────────────────────

export const jobs = [
  { id: 'job-1', title: 'Customer Experience Associate', company: 'Brightside Retail',       location: 'Manchester',       type: 'full-time',  description: 'Join our friendly team helping customers find the perfect products. Full training provided — attitude matters more than experience. Flexible shift patterns available.', applyUrl: '#', isPartner: true,  skillArea: 'Customer service', createdAt: new Date(Date.now() - 86400000 * 1).toISOString() },
  { id: 'job-2', title: 'Admin & Office Support',        company: 'Greenway Housing',         location: 'Remote',           type: 'part-time',  description: 'Flexible part-time role supporting our housing team with scheduling, data entry, and correspondence. 20 hours per week. Great for anyone returning to work after a career break.', applyUrl: '#', isPartner: true,  skillArea: 'Business basics',  createdAt: new Date(Date.now() - 86400000 * 2).toISOString() },
  { id: 'job-7', title: 'Retail Team Leader',            company: 'Brightside Retail',        location: 'Birmingham',       type: 'full-time',  description: "Step into a leadership role with one of the UK's most inclusive employers. You'll coach a small team, manage rotas, and help create a great in-store experience.", applyUrl: '#', isPartner: true,  skillArea: 'Leadership',       createdAt: new Date(Date.now() - 86400000 * 2).toISOString() },
  { id: 'job-5', title: 'Wellbeing Programme Coordinator', company: 'The Anchor Foundation', location: 'Birmingham',       type: 'part-time',  description: 'Coordinate our wellbeing programme for women in the community. Liaise with facilitators, manage bookings, and support participants. Lived experience warmly welcomed.', applyUrl: '#', isPartner: true,  skillArea: 'Leadership',       createdAt: new Date(Date.now() - 86400000 * 3).toISOString() },
  { id: 'job-8', title: 'Digital Support Worker',        company: 'TechBridge Solutions',     location: 'Remote',           type: 'remote',     description: 'Help older adults and people in the community access online services and devices. Warmth and patience matter far more than technical expertise. Full training provided.', applyUrl: '#', isPartner: true,  skillArea: 'Digital skills',   createdAt: new Date(Date.now() - 86400000 * 3).toISOString() },
  { id: 'job-3', title: 'Social Media & Content Assistant', company: 'Bloom Creative',       location: 'London (Hybrid)',  type: 'full-time',  description: "We're looking for someone with a creative eye and a passion for storytelling. You'll help manage client social channels, write captions, and schedule posts. Training on all tools provided.", applyUrl: '#', isPartner: false, skillArea: 'Digital skills',   createdAt: new Date(Date.now() - 86400000 * 4).toISOString() },
  { id: 'job-4', title: 'Finance & Accounts Administrator', company: 'Northside Community Trust', location: 'Leeds',       type: 'full-time',  description: 'Manage invoices, expenses, and financial records for a small, purpose-led organisation. Spreadsheet skills a bonus but training available.', applyUrl: '#', isPartner: false, skillArea: 'Finance',          createdAt: new Date(Date.now() - 86400000 * 5).toISOString() },
  { id: 'job-6', title: 'Data Entry & Admin (Remote)',    company: 'ClearPath Solutions',      location: 'Remote',           type: 'remote',     description: 'Fully remote, flexible hours. Enter and verify data across multiple systems. Full training and equipment provided. Ideal for someone easing back into work.', applyUrl: '#', isPartner: false, skillArea: 'Digital skills',   createdAt: new Date(Date.now() - 86400000 * 6).toISOString() },
];

export const employers = [
  { company: 'Brightside Retail',    jobCount: 2, roles: ['Customer Experience Associate', 'Retail Team Leader'] },
  { company: 'Greenway Housing',     jobCount: 1, roles: ['Admin & Office Support'] },
  { company: 'The Anchor Foundation',jobCount: 1, roles: ['Wellbeing Programme Coordinator'] },
  { company: 'TechBridge Solutions', jobCount: 1, roles: ['Digital Support Worker'] },
];
