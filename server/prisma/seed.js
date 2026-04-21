// Seed file — populates the database with realistic placeholder data
// Run with: npm run seed  (from /server directory)

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding Elio database...');

  const passwordHash = await bcrypt.hash('password123', 10);

  // ── Users ──────────────────────────────────────────────────────────────────
  // Five users double as mentor profiles; three more are community voices.

  const alice = await prisma.user.upsert({
    where: { email: 'alice@example.com' },
    update: {},
    create: {
      name: 'Alice M.',
      email: 'alice@example.com',
      passwordHash,
      bio: 'Passionate about new beginnings and helping others find their path.',
      goals: ['Find work', 'Build confidence', 'Connect with others'],
      interests: ['Business basics', 'Communication', 'Leadership'],
      onboarded: true,
    },
  });

  const bea = await prisma.user.upsert({
    where: { email: 'bea@example.com' },
    update: {},
    create: {
      name: 'Beatrice O.',
      email: 'bea@example.com',
      passwordHash,
      bio: 'Small business enthusiast. Love finance and making money work for me.',
      goals: ['Learn new skills', 'Find a mentor'],
      interests: ['Finance', 'Digital skills', 'Business basics'],
      onboarded: true,
    },
  });

  const cora = await prisma.user.upsert({
    where: { email: 'cora@example.com' },
    update: {},
    create: {
      name: 'Cora T.',
      email: 'cora@example.com',
      passwordHash,
      bio: 'Former teacher rediscovering herself. Creative at heart.',
      goals: ['Build confidence', 'Connect with others', 'Find work'],
      interests: ['Creative skills', 'Wellbeing', 'Communication'],
      onboarded: true,
    },
  });

  const diana = await prisma.user.upsert({
    where: { email: 'diana@example.com' },
    update: {},
    create: {
      name: 'Diana R.',
      email: 'diana@example.com',
      passwordHash,
      bio: 'Career coach with a background in leadership development. I believe every woman has a strategy inside her — she just needs the space to find it.',
      goals: ['Support other women', 'Share my knowledge'],
      interests: ['Leadership', 'Career development', 'Coaching'],
      onboarded: true,
    },
  });

  const elspeth = await prisma.user.upsert({
    where: { email: 'elspeth@example.com' },
    update: {},
    create: {
      name: 'Elspeth K.',
      email: 'elspeth@example.com',
      passwordHash,
      bio: "Digital trainer who loves demystifying tech for people who think it's not for them. Spoiler: it is.",
      goals: ['Help others get digital-confident', 'Stay connected to the community'],
      interests: ['Digital skills', 'Tech', 'Training'],
      onboarded: true,
    },
  });

  const fatima = await prisma.user.upsert({
    where: { email: 'fatima@example.com' },
    update: {},
    create: {
      name: 'Fatima H.',
      email: 'fatima@example.com',
      passwordHash,
      bio: 'Returning to work after raising three children. Taking it one step at a time.',
      goals: ['Find part-time work', 'Build digital skills'],
      interests: ['Digital skills', 'Wellbeing', 'Business basics'],
      onboarded: true,
    },
  });

  const grace = await prisma.user.upsert({
    where: { email: 'grace@example.com' },
    update: {},
    create: {
      name: 'Grace N.',
      email: 'grace@example.com',
      passwordHash,
      bio: 'Recently relocated and rebuilding everything from scratch. Finding my community here has meant the world.',
      goals: ['Connect with others', 'Find work', 'Learn new skills'],
      interests: ['Community', 'Communication', 'Wellbeing'],
      onboarded: true,
    },
  });

  const harriet = await prisma.user.upsert({
    where: { email: 'harriet@example.com' },
    update: {},
    create: {
      name: 'Harriet W.',
      email: 'harriet@example.com',
      passwordHash,
      bio: 'Bookkeeper turned spreadsheet evangelist. Numbers are friendlier than they look.',
      goals: ['Support other women', 'Keep learning'],
      interests: ['Finance', 'Digital skills', 'Business basics'],
      onboarded: true,
    },
  });

  // ── Mentor profiles ────────────────────────────────────────────────────────

  await prisma.mentor.upsert({
    where: { userId: alice.id },
    update: {},
    create: {
      userId: alice.id,
      bio: "HR professional with 12 years of experience. I love helping women craft their story and land opportunities they deserve. I've sat on both sides of the interview table and I know exactly what hiring managers are looking for.",
      expertise: ['CV writing', 'Interview prep', 'Career change', 'Confidence'],
      available: true,
    },
  });

  await prisma.mentor.upsert({
    where: { userId: bea.id },
    update: {},
    create: {
      userId: bea.id,
      bio: "Accountant turned entrepreneur. I demystify money and help women feel in control of their finances. Whether you're sorting out a budget, thinking about self-employment, or just want money to stop feeling scary — I've got you.",
      expertise: ['Finance', 'Business basics', 'Self-employment', 'Budgeting'],
      available: true,
    },
  });

  await prisma.mentor.upsert({
    where: { userId: cora.id },
    update: {},
    create: {
      userId: cora.id,
      bio: "After 15 years in the classroom I reinvented myself as a communications consultant. I help women find their voice and present themselves with warmth and confidence — whether that's in a job interview, a pitch, or just a difficult conversation.",
      expertise: ['Communication', 'Presentation skills', 'Confidence', 'Career change'],
      available: true,
    },
  });

  await prisma.mentor.upsert({
    where: { userId: diana.id },
    update: {},
    create: {
      userId: diana.id,
      bio: "Leadership coach with 10 years working with women in mid-career transitions. I specialise in helping you identify where your ambition has been hiding and build a plan to act on it. No jargon, no corporate fluff — just real conversations.",
      expertise: ['Leadership', 'Career strategy', 'Goal setting', 'Confidence'],
      available: true,
    },
  });

  await prisma.mentor.upsert({
    where: { userId: elspeth.id },
    update: {},
    create: {
      userId: elspeth.id,
      bio: "I've trained hundreds of women to feel at home with technology. If you're worried you're too old, too behind, or too confused — you're exactly who I love to work with. We start wherever you are, no rushing, no judgement.",
      expertise: ['Digital skills', 'Email & productivity', 'LinkedIn', 'Spreadsheets'],
      available: false,
    },
  });

  // ── Learning paths ─────────────────────────────────────────────────────────

  const path1 = await prisma.learningPath.upsert({
    where: { id: 'path-footing' },
    update: {},
    create: {
      id: 'path-footing',
      title: 'Finding Your Footing',
      description: 'Rebuild confidence, set meaningful goals, and start telling your story on your own terms.',
      order: 1,
    },
  });

  const path2 = await prisma.learningPath.upsert({
    where: { id: 'path-business' },
    update: {},
    create: {
      id: 'path-business',
      title: 'Business Basics',
      description: 'Understand money, communicate with confidence, and develop the professional skills employers value.',
      order: 2,
    },
  });

  const path3 = await prisma.learningPath.upsert({
    where: { id: 'path-digital' },
    update: {},
    create: {
      id: 'path-digital',
      title: 'Digital Ready',
      description: 'Master email, spreadsheets, LinkedIn, and everyday digital tools to thrive in a modern workplace.',
      order: 3,
    },
  });

  // ── Modules: Finding Your Footing ─────────────────────────────────────────

  const modulesPath1 = [
    {
      id: 'mod-1-1',
      title: 'Who Are You Now?',
      description: 'Explore your values, strengths, and where you are today.',
      duration: '20 min',
      order: 1,
      content: `<h2>Welcome to the beginning of something real.</h2><p>This module is about giving yourself permission to start fresh. Before we can plan where we're going, we spend a moment honouring where we've been.</p><h3>Your values</h3><p>Values are the things that matter most to you — honesty, family, creativity, independence. When your work and life align with your values, you feel more energised and more like yourself.</p><p>Take a moment to write down three values that feel most important to you right now.</p><h3>Your strengths</h3><p>You have more than you think. Strengths aren't just qualifications — they're qualities like resilience, empathy, organisation, creativity, and the ability to keep going when things are hard.</p>`,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quiz: [
        { question: 'What is a personal value?', options: ['A bank balance', 'Something that matters deeply to you', 'A job title', 'A qualification'], answer: 1 },
        { question: 'Strengths can include:', options: ['Only formal qualifications', 'Only physical skills', 'Qualities like resilience and empathy', 'Only work experience'], answer: 2 },
        { question: "Reflecting on where you've been helps you:", options: ['Stay stuck in the past', 'Understand what you bring forward', 'Forget your history', 'Compare yourself to others'], answer: 1 },
      ],
    },
    {
      id: 'mod-1-2',
      title: 'Setting Goals That Stick',
      description: 'Learn a simple framework for setting goals you can actually achieve.',
      duration: '25 min',
      order: 2,
      content: `<h2>Goals that feel like yours.</h2><p>There's a difference between goals you think you should want and goals that genuinely excite you. In this module we explore how to set goals that are rooted in what you actually care about.</p><h3>The WOOP method</h3><p><strong>Wish</strong> — What do you want to achieve?<br/><strong>Outcome</strong> — How will you feel when you get there?<br/><strong>Obstacle</strong> — What might get in the way?<br/><strong>Plan</strong> — What will you do when that obstacle shows up?</p><p>WOOP is backed by research and it works because it takes your real life into account — not some perfect version of it.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'What does the O in WOOP stand for?', options: ['Opportunity', 'Outcome', 'Obstacle', 'Output'], answer: 1 },
        { question: 'Why is it useful to identify obstacles?', options: ['To give up earlier', 'So you can plan how to handle them', 'To impress others', 'To avoid setting goals'], answer: 1 },
        { question: 'Goals that stick are:', options: ["Borrowed from someone else", "Rooted in what you genuinely care about", "Always about money", "Shared publicly"], answer: 1 },
      ],
    },
    {
      id: 'mod-1-3',
      title: 'Your Personal Brand',
      description: 'How to introduce yourself with confidence in any room.',
      duration: '30 min',
      order: 3,
      content: `<h2>Your story is your brand.</h2><p>A personal brand isn't a logo or a LinkedIn profile — it's how people experience you. It's the impression you leave and the story you tell.</p><h3>Crafting your introduction</h3><p>A powerful introduction answers three things:<br/>1. Who you are<br/>2. What you bring<br/>3. What you're looking for</p><p>It doesn't need to be perfect. It needs to be honest and warm.</p><h3>Practice makes permanent</h3><p>Write your introduction down. Say it out loud. Record yourself. Notice what feels authentic and what feels stiff — then adjust.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'A personal brand is:', options: ['Only for famous people', 'How others experience you', 'Just a social media profile', 'A business logo'], answer: 1 },
        { question: 'A good introduction should be:', options: ['Memorised word for word', 'Honest and warm', 'A full CV summary', 'Focused only on past jobs'], answer: 1 },
        { question: 'Practising your introduction helps because:', options: ["It impresses interviewers", "It builds confidence and authenticity", "It's a rule", "It memorises facts"], answer: 1 },
      ],
    },
    {
      id: 'mod-1-4',
      title: 'Resilience & Bouncing Back',
      description: "How to keep going when it's hard — and why setbacks are part of the journey.",
      duration: '25 min',
      order: 4,
      content: `<h2>Resilience isn't about not falling. It's about getting back up.</h2><p>Resilience is one of the most sought-after qualities in any workplace — and the good news is it's not a fixed personality trait. It's a skill you can build.</p><h3>What resilience looks like in practice</h3><p>Resilient people aren't people who don't feel setbacks. They feel them deeply — but they have strategies to process and move forward. Rest is part of resilience. Asking for help is part of resilience. Changing your approach when something isn't working is part of resilience.</p><h3>Your resilience toolkit</h3><p>Think about a time you got through something difficult. What helped? Who was there? What did you do? That's your toolkit — and it's more stocked than you think.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'Resilience is:', options: ['Never feeling setbacks', 'A fixed personality trait', 'A skill you can build over time', 'Only useful in sport'], answer: 2 },
        { question: 'Rest is:', options: ['A sign of weakness', 'Part of being resilient', 'Something to avoid', 'Unrelated to resilience'], answer: 1 },
        { question: 'Asking for help when things are hard is:', options: ['A sign of failure', 'Part of resilience', 'Something to be ashamed of', 'Only for beginners'], answer: 1 },
      ],
    },
  ];

  for (const mod of modulesPath1) {
    await prisma.module.upsert({
      where: { id: mod.id },
      update: {},
      create: { ...mod, pathId: path1.id },
    });
  }

  // ── Modules: Business Basics ───────────────────────────────────────────────

  const modulesPath2 = [
    {
      id: 'mod-2-1',
      title: 'Money Without the Stress',
      description: 'A plain-English guide to understanding your finances.',
      duration: '30 min',
      order: 1,
      content: `<h2>Money is just a tool. Let's make it work for you.</h2><p>This module is about getting comfortable with numbers — no judgement, no jargon. Whether you're managing a tight budget or just getting started, understanding your money is the first step to feeling in control.</p><h3>Your money story</h3><p>We all have feelings about money that come from our past. Taking a moment to understand those feelings helps us make clearer decisions.</p><h3>The 50/30/20 rule</h3><p>A simple framework: 50% needs, 30% wants, 20% saving or debt repayment. It won't work perfectly for everyone but it's a good place to start the conversation with yourself.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'In the 50/30/20 rule, what does the 20% represent?', options: ['Food', 'Entertainment', 'Saving or debt repayment', 'Rent'], answer: 2 },
        { question: 'Understanding your money story helps you:', options: ['Earn more immediately', 'Make clearer financial decisions', 'Impress banks', 'Avoid taxes'], answer: 1 },
        { question: 'This module aims to make money feel:', options: ['Complicated', 'Scary', 'Approachable and manageable', 'Only for experts'], answer: 2 },
      ],
    },
    {
      id: 'mod-2-2',
      title: 'Communicating with Confidence',
      description: 'Speak up, be heard, and build trust in any conversation.',
      duration: '25 min',
      order: 2,
      content: `<h2>Your voice matters.</h2><p>Communication is a skill — and like any skill, it gets better with practice. This module covers the basics of clear, confident communication in work settings.</p><h3>Active listening</h3><p>The most powerful communicators are great listeners first. Active listening means focusing fully on the other person, not planning your next sentence.</p><h3>Assertiveness vs aggression</h3><p>Being assertive means expressing your needs clearly and respectfully. It's not about being loud — it's about being clear.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'Active listening means:', options: ['Talking more than listening', 'Focusing fully on the other person', 'Planning your response while they speak', 'Only listening to managers'], answer: 1 },
        { question: 'Assertiveness is:', options: ['The same as aggression', 'Expressing your needs clearly and respectfully', 'Never saying no', 'Always being confident'], answer: 1 },
        { question: 'Communication is:', options: ['A fixed talent', 'A skill that improves with practice', 'Only verbal', 'Unimportant in work'], answer: 1 },
      ],
    },
    {
      id: 'mod-2-3',
      title: 'Professional Skills That Open Doors',
      description: 'Emails, meetings, and workplace norms — decoded.',
      duration: '20 min',
      order: 3,
      content: `<h2>The unwritten rules of professional life.</h2><p>Every workplace has a culture, and understanding that culture helps you feel less like an outsider. This module covers the practical skills that often aren't taught but are always expected.</p><h3>Writing professional emails</h3><p>Short, clear, and warm is the goal. Lead with what you need, give context, and always say thank you.</p><h3>Workplace meetings</h3><p>Come prepared. Contribute once with something meaningful rather than filling silence. Follow up on what you agreed to do.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'A good professional email is:', options: ['As long as possible', 'Short, clear, and warm', 'Formal and impersonal', 'Written without a greeting'], answer: 1 },
        { question: "In meetings, it's better to:", options: ['Talk constantly', 'Stay silent always', 'Contribute meaningfully once', 'Only speak if asked'], answer: 2 },
        { question: 'Understanding workplace culture helps you:', options: ['Stand out negatively', 'Feel less like an outsider', 'Break the rules', 'Avoid conversations'], answer: 1 },
      ],
    },
    {
      id: 'mod-2-4',
      title: 'Knowing Your Rights at Work',
      description: 'The basics of employment law every working woman should know.',
      duration: '30 min',
      order: 4,
      content: `<h2>Knowledge is power — especially at work.</h2><p>Understanding your rights isn't about being difficult. It's about knowing where you stand so you can make informed decisions and protect yourself if something goes wrong.</p><h3>Key rights at a glance</h3><p><strong>Pay:</strong> You are entitled to at least the National Minimum Wage. Check the current rate for your age group.<br/><strong>Breaks:</strong> If you work more than 6 hours, you're entitled to at least a 20-minute rest break.<br/><strong>Discrimination:</strong> It's illegal to be treated unfairly because of age, gender, race, disability, religion, or other protected characteristics.</p><h3>Where to get help</h3><p>ACAS (the Advisory, Conciliation and Arbitration Service) offers free, confidential advice on employment rights. Citizens Advice is another excellent resource.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'You are entitled to a break if you work more than:', options: ['4 hours', '5 hours', '6 hours', '8 hours'], answer: 2 },
        { question: 'ACAS provides:', options: ['Job listings', 'Free employment rights advice', 'Training courses only', 'Loan services'], answer: 1 },
        { question: 'Knowing your rights at work means:', options: ['Being difficult', 'Making informed decisions and protecting yourself', 'Avoiding your employer', 'Filing complaints immediately'], answer: 1 },
      ],
    },
  ];

  for (const mod of modulesPath2) {
    await prisma.module.upsert({
      where: { id: mod.id },
      update: {},
      create: { ...mod, pathId: path2.id },
    });
  }

  // ── Modules: Digital Ready ─────────────────────────────────────────────────

  const modulesPath3 = [
    {
      id: 'mod-3-1',
      title: 'Email & the Inbox',
      description: 'Set up, organise, and communicate professionally via email.',
      duration: '20 min',
      order: 1,
      content: `<h2>Email is your professional front door.</h2><p>Having a professional email address and knowing how to use it confidently is one of the most practical skills in any job search or workplace setting.</p><h3>Setting up a professional email</h3><p>Use your name, not a nickname from years ago. Gmail or Outlook both work well. firstname.lastname@gmail.com is a solid format.</p><h3>Organising your inbox</h3><p>Labels or folders, a clear subject line, and the habit of processing rather than ignoring — these three things will change your relationship with email forever.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'A professional email address should:', options: ['Include your nickname', 'Use your name', 'Be as short as possible', 'Not matter'], answer: 1 },
        { question: 'Organising your inbox with folders or labels helps you:', options: ['Receive fewer emails', 'Find things faster and feel less overwhelmed', 'Delete everything', 'Impress colleagues'], answer: 1 },
        { question: 'The best habit for email is:', options: ['Checking it once a year', 'Processing rather than ignoring', 'Only responding to important people', 'Using reply-all always'], answer: 1 },
      ],
    },
    {
      id: 'mod-3-2',
      title: 'Spreadsheets Made Simple',
      description: 'Learn the basics of Google Sheets or Excel without the overwhelm.',
      duration: '35 min',
      order: 2,
      content: `<h2>Spreadsheets are not scary.</h2><p>Millions of jobs use spreadsheets every day — and the basics are much simpler than they look. This module covers what you actually need to know to get started confidently.</p><h3>What a spreadsheet is</h3><p>It's a table of information. Rows go across, columns go down. Each box is called a cell.</p><h3>Basic formulas</h3><p>SUM adds numbers. AVERAGE gives you the average. These two alone will cover 80% of what most jobs need.</p><h3>Formatting for clarity</h3><p>Bold headers, alternate row shading, and consistent number formats make your data readable and professional.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'In a spreadsheet, what is a cell?', options: ['A phone', 'A row', 'A column', 'A single box in the table'], answer: 3 },
        { question: 'The SUM formula:', options: ['Averages numbers', 'Adds numbers together', 'Counts words', 'Formats cells'], answer: 1 },
        { question: 'Good spreadsheet formatting:', options: ['Is unnecessary', 'Makes data readable and professional', 'Uses many colours', 'Is only for designers'], answer: 1 },
      ],
    },
    {
      id: 'mod-3-3',
      title: 'LinkedIn for Real Life',
      description: 'Build a profile that works hard for you while you sleep.',
      duration: '30 min',
      order: 3,
      content: `<h2>LinkedIn is not just for suits.</h2><p>LinkedIn has evolved. It's now a place where real people tell real stories — and employers actively look for candidates there. A strong profile is one of the most powerful tools in your job search kit.</p><h3>Profile photo</h3><p>Smile. Good lighting. Clean background. That's it. You don't need a professional photographer.</p><h3>Headline</h3><p>Don't just put your job title. Tell people what you do and who you help. Example: "Customer service professional | Passionate about helping people feel heard."</p><h3>About section</h3><p>Write in first person. Be warm and honest. Tell your story — where you're headed and what you bring.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'Your LinkedIn headline should:', options: ['Only list your job title', 'Describe what you do and who you help', 'Be left blank', "Copy someone else's"], answer: 1 },
        { question: 'Your About section should be written in:', options: ['Third person', 'First person', 'As bullet points only', 'Technical jargon'], answer: 1 },
        { question: 'A good profile photo:', options: ['Needs a professional photographer', 'Should be formal', 'Uses good lighting and a smile', 'Should not show your face'], answer: 2 },
      ],
    },
    {
      id: 'mod-3-4',
      title: 'Staying Safe Online',
      description: 'Protect yourself, your accounts, and your data in a digital world.',
      duration: '25 min',
      order: 4,
      content: `<h2>The internet is wonderful. Let's keep it that way.</h2><p>Knowing how to stay safe online isn't about being paranoid — it's about being smart. These simple habits protect your money, your identity, and your peace of mind.</p><h3>Strong passwords</h3><p>Use a different password for every account. A password manager (like Bitwarden — it's free) remembers them all for you. Three random words strung together make a stronger password than one word with symbols.</p><h3>Phishing emails</h3><p>If an email asks you to click a link urgently, pause. Legitimate organisations never pressure you to act immediately. When in doubt, go directly to the website by typing the address yourself.</p><h3>Two-factor authentication</h3><p>Turn it on everywhere you can. It means that even if someone gets your password, they still can't get into your account without your phone.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'A strong password is:', options: ['Your birthday', 'The same password used everywhere', 'Three random words strung together', 'A single word with an exclamation mark'], answer: 2 },
        { question: 'If an email asks you to act urgently, you should:', options: ['Click immediately', 'Ignore all emails', 'Pause and check by going directly to the website', 'Forward it to friends'], answer: 2 },
        { question: 'Two-factor authentication means:', options: ['Two passwords', 'Extra protection even if your password is stolen', 'Logging in twice', 'A backup email only'], answer: 1 },
      ],
    },
  ];

  for (const mod of modulesPath3) {
    await prisma.module.upsert({
      where: { id: mod.id },
      update: {},
      create: { ...mod, pathId: path3.id },
    });
  }

  // ── Community circles ──────────────────────────────────────────────────────

  const circles = [
    { id: 'circle-jobs',  name: 'Job Hunting',      description: 'CVs, interviews, job boards, and celebrating those wins.',     topic: 'Work'      },
    { id: 'circle-money', name: 'Money & Budgeting', description: 'Honest conversations about money without the shame.',           topic: 'Finance'   },
    { id: 'circle-new',   name: 'New Beginnings',    description: "For when you're starting over and need a soft place to land.", topic: 'Wellbeing' },
    { id: 'circle-tech',  name: 'Tech & Digital',    description: 'Questions welcome, no such thing as a silly one here.',        topic: 'Digital'   },
  ];

  for (const circle of circles) {
    await prisma.circle.upsert({ where: { id: circle.id }, update: {}, create: circle });
  }

  // ── Posts: Job Hunting ─────────────────────────────────────────────────────

  await prisma.post.upsert({
    where: { id: 'post-job-1' },
    update: {},
    create: {
      id: 'post-job-1',
      circleId: 'circle-jobs',
      authorId: cora.id,
      content: 'Just had my first interview in years. I was so nervous but I did it! The practice sessions in the Learning Journey really helped me prepare. Whatever happens, I showed up and that feels huge.',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3),
    },
  });

  await prisma.post.upsert({
    where: { id: 'post-job-2' },
    update: {},
    create: {
      id: 'post-job-2',
      circleId: 'circle-jobs',
      authorId: fatima.id,
      content: "Does anyone have tips for explaining a gap in your CV? I've been out of work for five years raising my kids and I feel a bit lost about how to talk about it without it sounding like an apology.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 10),
    },
  });

  await prisma.post.upsert({
    where: { id: 'post-job-3' },
    update: {},
    create: {
      id: 'post-job-3',
      circleId: 'circle-jobs',
      authorId: grace.id,
      content: "Got the job!! Part-time admin role, flexible hours, lovely team. I cried when I got the call. Thank you to everyone who cheered me on in this circle — it genuinely kept me going. 🎉",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
    },
  });

  // ── Posts: Money & Budgeting ───────────────────────────────────────────────

  await prisma.post.upsert({
    where: { id: 'post-money-1' },
    update: {},
    create: {
      id: 'post-money-1',
      circleId: 'circle-money',
      authorId: bea.id,
      content: 'Shared the 50/30/20 rule with my sister yesterday and she said it was the first time money had ever made sense to her. Small wins! Sometimes the simplest frameworks are the most powerful.',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    },
  });

  await prisma.post.upsert({
    where: { id: 'post-money-2' },
    update: {},
    create: {
      id: 'post-money-2',
      circleId: 'circle-money',
      authorId: harriet.id,
      content: "Honest question: does anyone else feel almost ashamed talking about money? I grew up in a house where it was a forbidden topic and I'm only now realising how much that affected me. The module on money stories really hit home.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36),
    },
  });

  await prisma.post.upsert({
    where: { id: 'post-money-3' },
    update: {},
    create: {
      id: 'post-money-3',
      circleId: 'circle-money',
      authorId: alice.id,
      content: "Tip that changed my life: I set up a separate savings account with a different bank and I don't have the app on my phone. Out of sight, out of mind. I've saved more in 6 months than I did in the previous three years.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72),
    },
  });

  // ── Posts: New Beginnings ──────────────────────────────────────────────────

  await prisma.post.upsert({
    where: { id: 'post-new-1' },
    update: {},
    create: {
      id: 'post-new-1',
      circleId: 'circle-new',
      authorId: grace.id,
      content: "I moved here six months ago knowing nobody. Finding this community has been the best thing that's happened to me. I just wanted to say that — to whoever is reading this and feeling alone. You're not.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
    },
  });

  await prisma.post.upsert({
    where: { id: 'post-new-2' },
    update: {},
    create: {
      id: 'post-new-2',
      circleId: 'circle-new',
      authorId: cora.id,
      content: "Three months since I left teaching after 15 years. Some days it feels like freedom, other days it feels terrifying. Both can be true at the same time, right? Holding onto that.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 20),
    },
  });

  await prisma.post.upsert({
    where: { id: 'post-new-3' },
    update: {},
    create: {
      id: 'post-new-3',
      circleId: 'circle-new',
      authorId: fatima.id,
      content: "Completed my first full learning module today. It took me three sessions because the kids kept interrupting, but I did it. Celebrated with a cup of tea and five whole minutes of quiet. Progress looks different for everyone.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 30),
    },
  });

  // ── Posts: Tech & Digital ──────────────────────────────────────────────────

  await prisma.post.upsert({
    where: { id: 'post-tech-1' },
    update: {},
    create: {
      id: 'post-tech-1',
      circleId: 'circle-tech',
      authorId: elspeth.id,
      content: "Reminder that there is no such thing as a silly question in here. I've been teaching digital skills for 8 years and I still look things up constantly. The goal isn't to know everything — it's to know how to find out.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
  });

  await prisma.post.upsert({
    where: { id: 'post-tech-2' },
    update: {},
    create: {
      id: 'post-tech-2',
      circleId: 'circle-tech',
      authorId: harriet.id,
      content: "Can anyone recommend a free tool for making a simple CV? I've been using Word but it always ends up looking a bit plain. Preferably something I don't need to create an account for!",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 15),
    },
  });

  await prisma.post.upsert({
    where: { id: 'post-tech-3' },
    update: {},
    create: {
      id: 'post-tech-3',
      circleId: 'circle-tech',
      authorId: diana.id,
      content: "Just want to flag: I got a very convincing phishing email this week pretending to be from HMRC. It had my name on it and everything. Please always go directly to websites by typing the address yourself — never click links in emails you weren't expecting.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 42),
    },
  });

  // ── Replies ────────────────────────────────────────────────────────────────

  await prisma.reply.upsert({
    where: { id: 'reply-1' },
    update: {},
    create: {
      id: 'reply-1',
      postId: 'post-job-1',
      authorId: alice.id,
      content: 'That is HUGE. You should be so proud. How did it feel walking out?',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
  });

  await prisma.reply.upsert({
    where: { id: 'reply-2' },
    update: {},
    create: {
      id: 'reply-2',
      postId: 'post-job-2',
      authorId: alice.id,
      content: "Great question. I always advise being direct and proud about it: \"I took time out to raise my children, which required enormous organisation, patience, and resilience.\" That's not a gap — that's experience. Reframe it.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8),
    },
  });

  await prisma.reply.upsert({
    where: { id: 'reply-3' },
    update: {},
    create: {
      id: 'reply-3',
      postId: 'post-money-2',
      authorId: bea.id,
      content: "You're not alone in that at all. It's such a common thing — especially for women, who were often kept out of financial conversations entirely. Starting to talk about it, like you're doing right now, is the first step.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 30),
    },
  });

  await prisma.reply.upsert({
    where: { id: 'reply-4' },
    update: {},
    create: {
      id: 'reply-4',
      postId: 'post-tech-2',
      authorId: elspeth.id,
      content: "Canva! Go to canva.com — free, no account needed to browse, and they have beautiful CV templates. Just pick one, click edit, and replace the text with yours. Honestly takes about 20 minutes.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 13),
    },
  });

  // ── Job listings ───────────────────────────────────────────────────────────

  const jobs = [
    {
      id: 'job-1',
      title: 'Customer Experience Associate',
      company: 'Brightside Retail',
      location: 'Manchester',
      type: 'full-time',
      description: 'Join our friendly team helping customers find the perfect products. Full training provided — attitude matters more than experience. Flexible shift patterns available.',
      applyUrl: '#',
      isPartner: true,
      skillArea: 'Customer service',
    },
    {
      id: 'job-2',
      title: 'Admin & Office Support',
      company: 'Greenway Housing',
      location: 'Remote',
      type: 'part-time',
      description: 'Flexible part-time role supporting our housing team with scheduling, data entry, and correspondence. 20 hours per week. Great for anyone returning to work after a career break.',
      applyUrl: '#',
      isPartner: true,
      skillArea: 'Business basics',
    },
    {
      id: 'job-3',
      title: 'Social Media & Content Assistant',
      company: 'Bloom Creative',
      location: 'London (Hybrid)',
      type: 'full-time',
      description: "We're looking for someone with a creative eye and a passion for storytelling. You'll help manage our client social channels, write captions, and schedule posts. Training on all tools provided.",
      applyUrl: '#',
      isPartner: false,
      skillArea: 'Digital skills',
    },
    {
      id: 'job-4',
      title: 'Finance & Accounts Administrator',
      company: 'Northside Community Trust',
      location: 'Leeds',
      type: 'full-time',
      description: 'Manage invoices, expenses, and financial records for a small, purpose-led organisation. Spreadsheet skills a bonus but training available. A genuine passion for community work is a must.',
      applyUrl: '#',
      isPartner: false,
      skillArea: 'Finance',
    },
    {
      id: 'job-5',
      title: 'Wellbeing Programme Coordinator',
      company: 'The Anchor Foundation',
      location: 'Birmingham',
      type: 'part-time',
      description: 'Coordinate our wellbeing programme for women in the community. Liaise with facilitators, manage bookings, and support participants. Lived experience warmly welcomed.',
      applyUrl: '#',
      isPartner: true,
      skillArea: 'Leadership',
    },
    {
      id: 'job-6',
      title: 'Data Entry & Admin (Remote)',
      company: 'ClearPath Solutions',
      location: 'Remote',
      type: 'remote',
      description: 'Fully remote, flexible hours. Enter and verify data across multiple systems. Full training and equipment provided. Ideal for someone who wants to ease back into work on their own terms.',
      applyUrl: '#',
      isPartner: false,
      skillArea: 'Digital skills',
    },
    {
      id: 'job-7',
      title: 'Retail Team Leader',
      company: 'Brightside Retail',
      location: 'Birmingham',
      type: 'full-time',
      description: "Step into a leadership role with one of the UK's most inclusive employers. You'll coach a small team, manage rotas, and help create a great in-store experience. Previous retail or team lead experience preferred but not essential.",
      applyUrl: '#',
      isPartner: true,
      skillArea: 'Leadership',
    },
    {
      id: 'job-8',
      title: 'Digital Support Worker',
      company: 'TechBridge Solutions',
      location: 'Remote',
      type: 'remote',
      description: 'Help older adults and people in the community access online services and devices. Warmth and patience matter far more than technical expertise. Full training and ongoing support provided.',
      applyUrl: '#',
      isPartner: true,
      skillArea: 'Digital skills',
    },
  ];

  for (const job of jobs) {
    await prisma.jobListing.upsert({ where: { id: job.id }, update: {}, create: job });
  }

  // ── Corporate employer profiles ────────────────────────────────────────────

  const employers = [
    {
      id: 'employer-1',
      name: 'Brightside Retail',
      industry: 'Retail',
      description: "Brightside Retail is one of the UK's most inclusive high-street employers, with over 200 stores nationwide. We believe that a diverse team makes for a better business and a better customer experience. We actively encourage applications from women returning to work and offer flexible scheduling, mentoring, and a clear progression path.",
      website: 'https://brightsideretail.example.com',
      logoUrl: null,
      isPartner: true,
    },
    {
      id: 'employer-2',
      name: 'Greenway Housing',
      industry: 'Social Housing',
      description: "Greenway Housing has been providing affordable, safe homes for communities across the Midlands and the North for over 30 years. Our team is our greatest asset. We offer flexible working arrangements, a genuine commitment to work-life balance, and a culture where everyone's contribution is valued — whatever stage of their career they're at.",
      website: 'https://greenwayhousing.example.com',
      logoUrl: null,
      isPartner: true,
    },
    {
      id: 'employer-3',
      name: 'TechBridge Solutions',
      industry: 'Digital Inclusion',
      description: "TechBridge Solutions exists to make digital access a reality for everyone. We partner with charities, local authorities, and community organisations to deliver digital skills training and device access programmes. Our workforce reflects the communities we serve — we hire for values and train for skills, and we're proud supporters of the Elio initiative.",
      website: 'https://techbridgesolutions.example.com',
      logoUrl: null,
      isPartner: true,
    },
  ];

  for (const employer of employers) {
    await prisma.corporateEmployer.upsert({
      where: { id: employer.id },
      update: {},
      create: employer,
    });
  }

  console.log('✅ Seed complete!');
  console.log('   • 3 learning paths (4 modules each)');
  console.log('   • 5 mentor profiles');
  console.log('   • 4 community circles (3 posts each)');
  console.log('   • 8 job listings');
  console.log('   • 3 corporate employer profiles');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  const alice = await prisma.user.upsert({
    where: { email: 'alice@example.com' },
    update: {},
    create: {
      name: 'Alice M.',
      email: 'alice@example.com',
      passwordHash,
      bio: 'Passionate about new beginnings and helping others find their path.',
      goals: ['Find work', 'Build confidence', 'Connect with others'],
      interests: ['Business basics', 'Communication', 'Leadership'],
      onboarded: true,
    },
  });

  const bea = await prisma.user.upsert({
    where: { email: 'bea@example.com' },
    update: {},
    create: {
      name: 'Beatrice O.',
      email: 'bea@example.com',
      passwordHash,
      bio: 'Small business enthusiast. Love finance and making money work for me.',
      goals: ['Learn new skills', 'Find a mentor'],
      interests: ['Finance', 'Digital skills', 'Business basics'],
      onboarded: true,
    },
  });

  const cora = await prisma.user.upsert({
    where: { email: 'cora@example.com' },
    update: {},
    create: {
      name: 'Cora T.',
      email: 'cora@example.com',
      passwordHash,
      bio: 'Former teacher rediscovering herself. Creative at heart.',
      goals: ['Build confidence', 'Connect with others', 'Find work'],
      interests: ['Creative skills', 'Wellbeing', 'Communication'],
      onboarded: true,
    },
  });

  // ── Mentor profiles ──────────────────────────────────────────
  const aliceMentor = await prisma.mentor.upsert({
    where: { userId: alice.id },
    update: {},
    create: {
      userId: alice.id,
      bio: 'HR professional with 12 years of experience. I love helping women craft their story and land opportunities they deserve.',
      expertise: ['CV writing', 'Interview prep', 'Career change', 'Confidence'],
      available: true,
    },
  });

  const beaMentor = await prisma.mentor.upsert({
    where: { userId: bea.id },
    update: {},
    create: {
      userId: bea.id,
      bio: 'Accountant turned entrepreneur. I demystify money and help women feel in control of their finances.',
      expertise: ['Finance', 'Business basics', 'Self-employment', 'Budgeting'],
      available: true,
    },
  });

  // ── Learning paths & modules ─────────────────────────────────
  const path1 = await prisma.learningPath.upsert({
    where: { id: 'path-footing' },
    update: {},
    create: {
      id: 'path-footing',
      title: 'Finding Your Footing',
      description: 'Rebuild confidence, set meaningful goals, and start telling your story on your own terms.',
      order: 1,
    },
  });

  const path2 = await prisma.learningPath.upsert({
    where: { id: 'path-business' },
    update: {},
    create: {
      id: 'path-business',
      title: 'Business Basics',
      description: 'Understand money, communicate with confidence, and develop the professional skills employers value.',
      order: 2,
    },
  });

  const path3 = await prisma.learningPath.upsert({
    where: { id: 'path-digital' },
    update: {},
    create: {
      id: 'path-digital',
      title: 'Digital Ready',
      description: 'Master email, spreadsheets, LinkedIn, and everyday digital tools to thrive in a modern workplace.',
      order: 3,
    },
  });

  // Modules for path 1
  const modulesPath1 = [
    {
      id: 'mod-1-1',
      title: 'Who Are You Now?',
      description: 'Explore your values, strengths, and where you are today.',
      duration: '20 min',
      order: 1,
      content: `<h2>Welcome to the beginning of something real.</h2><p>This module is about giving yourself permission to start fresh. Before we can plan where we're going, we spend a moment honouring where we've been.</p><h3>Your values</h3><p>Values are the things that matter most to you — honesty, family, creativity, independence. When your work and life align with your values, you feel more energised and more like yourself.</p><p>Take a moment to write down three values that feel most important to you right now.</p><h3>Your strengths</h3><p>You have more than you think. Strengths aren't just qualifications — they're qualities like resilience, empathy, organisation, creativity, and the ability to keep going when things are hard.</p>`,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quiz: [
        { question: 'What is a personal value?', options: ['A bank balance', 'Something that matters deeply to you', 'A job title', 'A qualification'], answer: 1 },
        { question: 'Strengths can include:', options: ['Only formal qualifications', 'Only physical skills', 'Qualities like resilience and empathy', 'Only work experience'], answer: 2 },
        { question: 'Reflecting on where you\'ve been helps you:', options: ['Stay stuck in the past', 'Understand what you bring forward', 'Forget your history', 'Compare yourself to others'], answer: 1 },
      ],
    },
    {
      id: 'mod-1-2',
      title: 'Setting Goals That Stick',
      description: 'Learn a simple framework for setting goals you can actually achieve.',
      duration: '25 min',
      order: 2,
      content: `<h2>Goals that feel like yours.</h2><p>There's a difference between goals you think you should want and goals that genuinely excite you. In this module we explore how to set goals that are rooted in what you actually care about.</p><h3>The WOOP method</h3><p><strong>Wish</strong> — What do you want to achieve?<br/><strong>Outcome</strong> — How will you feel when you get there?<br/><strong>Obstacle</strong> — What might get in the way?<br/><strong>Plan</strong> — What will you do when that obstacle shows up?</p><p>WOOP is backed by research and it works because it takes your real life into account — not some perfect version of it.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'What does the O in WOOP stand for?', options: ['Opportunity', 'Outcome', 'Obstacle', 'Output'], answer: 1 },
        { question: 'Why is it useful to identify obstacles?', options: ['To give up earlier', 'So you can plan how to handle them', 'To impress others', 'To avoid setting goals'], answer: 1 },
        { question: 'Goals that stick are:', options: ['Borrowed from someone else', 'Rooted in what you genuinely care about', 'Always about money', 'Shared publicly'], answer: 1 },
      ],
    },
    {
      id: 'mod-1-3',
      title: 'Your Personal Brand',
      description: 'How to introduce yourself with confidence in any room.',
      duration: '30 min',
      order: 3,
      content: `<h2>Your story is your brand.</h2><p>A personal brand isn't a logo or a LinkedIn profile — it's how people experience you. It's the impression you leave and the story you tell.</p><h3>Crafting your introduction</h3><p>A powerful introduction answers three things:<br/>1. Who you are<br/>2. What you bring<br/>3. What you're looking for</p><p>It doesn't need to be perfect. It needs to be honest and warm.</p><h3>Practice makes permanent</h3><p>Write your introduction down. Say it out loud. Record yourself. Notice what feels authentic and what feels stiff — then adjust.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'A personal brand is:', options: ['Only for famous people', 'How others experience you', 'Just a social media profile', 'A business logo'], answer: 1 },
        { question: 'A good introduction should be:', options: ['Memorised word for word', 'Honest and warm', 'A full CV summary', 'Focused only on past jobs'], answer: 1 },
        { question: 'Practising your introduction helps because:', options: ['It impresses interviewers', 'It builds confidence and authenticity', 'It\'s a rule', 'It memorises facts'], answer: 1 },
      ],
    },
  ];

  for (const mod of modulesPath1) {
    await prisma.module.upsert({
      where: { id: mod.id },
      update: {},
      create: { ...mod, pathId: path1.id, quiz: mod.quiz },
    });
  }

  // Modules for path 2
  const modulesPath2 = [
    {
      id: 'mod-2-1',
      title: 'Money Without the Stress',
      description: 'A plain-English guide to understanding your finances.',
      duration: '30 min',
      order: 1,
      content: `<h2>Money is just a tool. Let's make it work for you.</h2><p>This module is about getting comfortable with numbers — no judgement, no jargon. Whether you're managing a tight budget or just getting started, understanding your money is the first step to feeling in control.</p><h3>Your money story</h3><p>We all have feelings about money that come from our past. Taking a moment to understand those feelings helps us make clearer decisions.</p><h3>The 50/30/20 rule</h3><p>A simple framework: 50% needs, 30% wants, 20% saving or debt repayment. It won't work perfectly for everyone but it's a good place to start the conversation with yourself.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'In the 50/30/20 rule, what does the 20% represent?', options: ['Food', 'Entertainment', 'Saving or debt repayment', 'Rent'], answer: 2 },
        { question: 'Understanding your money story helps you:', options: ['Earn more immediately', 'Make clearer financial decisions', 'Impress banks', 'Avoid taxes'], answer: 1 },
        { question: 'This module aims to make money feel:', options: ['Complicated', 'Scary', 'Approachable and manageable', 'Only for experts'], answer: 2 },
      ],
    },
    {
      id: 'mod-2-2',
      title: 'Communicating with Confidence',
      description: 'Speak up, be heard, and build trust in any conversation.',
      duration: '25 min',
      order: 2,
      content: `<h2>Your voice matters.</h2><p>Communication is a skill — and like any skill, it gets better with practice. This module covers the basics of clear, confident communication in work settings.</p><h3>Active listening</h3><p>The most powerful communicators are great listeners first. Active listening means focusing fully on the other person, not planning your next sentence.</p><h3>Assertiveness vs aggression</h3><p>Being assertive means expressing your needs clearly and respectfully. It's not about being loud — it's about being clear.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'Active listening means:', options: ['Talking more than listening', 'Focusing fully on the other person', 'Planning your response while they speak', 'Only listening to managers'], answer: 1 },
        { question: 'Assertiveness is:', options: ['The same as aggression', 'Expressing your needs clearly and respectfully', 'Never saying no', 'Always being confident'], answer: 1 },
        { question: 'Communication is:', options: ['A fixed talent', 'A skill that improves with practice', 'Only verbal', 'Unimportant in work'], answer: 1 },
      ],
    },
    {
      id: 'mod-2-3',
      title: 'Professional Skills That Open Doors',
      description: 'Emails, meetings, and workplace norms — decoded.',
      duration: '20 min',
      order: 3,
      content: `<h2>The unwritten rules of professional life.</h2><p>Every workplace has a culture, and understanding that culture helps you feel less like an outsider. This module covers the practical skills that often aren't taught but are always expected.</p><h3>Writing professional emails</h3><p>Short, clear, and warm is the goal. Lead with what you need, give context, and always say thank you.</p><h3>Workplace meetings</h3><p>Come prepared. Contribute once with something meaningful rather than filling silence. Follow up on what you agreed to do.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'A good professional email is:', options: ['As long as possible', 'Short, clear, and warm', 'Formal and impersonal', 'Written without a greeting'], answer: 1 },
        { question: 'In meetings, it\'s better to:', options: ['Talk constantly', 'Stay silent always', 'Contribute meaningfully once', 'Only speak if asked'], answer: 2 },
        { question: 'Understanding workplace culture helps you:', options: ['Stand out negatively', 'Feel less like an outsider', 'Break the rules', 'Avoid conversations'], answer: 1 },
      ],
    },
  ];

  for (const mod of modulesPath2) {
    await prisma.module.upsert({
      where: { id: mod.id },
      update: {},
      create: { ...mod, pathId: path2.id, quiz: mod.quiz },
    });
  }

  // Modules for path 3
  const modulesPath3 = [
    {
      id: 'mod-3-1',
      title: 'Email & the Inbox',
      description: 'Set up, organise, and communicate professionally via email.',
      duration: '20 min',
      order: 1,
      content: `<h2>Email is your professional front door.</h2><p>Having a professional email address and knowing how to use it confidently is one of the most practical skills in any job search or workplace setting.</p><h3>Setting up a professional email</h3><p>Use your name, not a nickname from years ago. Gmail or Outlook both work well. firstname.lastname@gmail.com is a solid format.</p><h3>Organising your inbox</h3><p>Labels or folders, a clear subject line, and the habit of processing rather than ignoring — these three things will change your relationship with email forever.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'A professional email address should:', options: ['Include your nickname', 'Use your name', 'Be as short as possible', 'Not matter'], answer: 1 },
        { question: 'Organising your inbox with folders or labels helps you:', options: ['Receive fewer emails', 'Find things faster and feel less overwhelmed', 'Delete everything', 'Impress colleagues'], answer: 1 },
        { question: 'The best habit for email is:', options: ['Checking it once a year', 'Processing rather than ignoring', 'Only responding to important people', 'Using reply-all always'], answer: 1 },
      ],
    },
    {
      id: 'mod-3-2',
      title: 'Spreadsheets Made Simple',
      description: 'Learn the basics of Google Sheets or Excel without the overwhelm.',
      duration: '35 min',
      order: 2,
      content: `<h2>Spreadsheets are not scary.</h2><p>Millions of jobs use spreadsheets every day — and the basics are much simpler than they look. This module covers what you actually need to know to get started confidently.</p><h3>What a spreadsheet is</h3><p>It's a table of information. Rows go across, columns go down. Each box is called a cell.</p><h3>Basic formulas</h3><p>SUM adds numbers. AVERAGE gives you the average. These two alone will cover 80% of what most jobs need.</p><h3>Formatting for clarity</h3><p>Bold headers, alternate row shading, and consistent number formats make your data readable and professional.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'In a spreadsheet, what is a cell?', options: ['A phone', 'A row', 'A column', 'A single box in the table'], answer: 3 },
        { question: 'The SUM formula:', options: ['Averages numbers', 'Adds numbers together', 'Counts words', 'Formats cells'], answer: 1 },
        { question: 'Good spreadsheet formatting:', options: ['Is unnecessary', 'Makes data readable and professional', 'Uses many colours', 'Is only for designers'], answer: 1 },
      ],
    },
    {
      id: 'mod-3-3',
      title: 'LinkedIn for Real Life',
      description: 'Build a profile that works hard for you while you sleep.',
      duration: '30 min',
      order: 3,
      content: `<h2>LinkedIn is not just for suits.</h2><p>LinkedIn has evolved. It's now a place where real people tell real stories — and employers actively look for candidates there. A strong profile is one of the most powerful tools in your job search kit.</p><h3>Profile photo</h3><p>Smile. Good lighting. Clean background. That's it. You don't need a professional photographer.</p><h3>Headline</h3><p>Don't just put your job title. Tell people what you do and who you help. Example: "Customer service professional | Passionate about helping people feel heard."</p><h3>About section</h3><p>Write in first person. Be warm and honest. Tell your story — where you're headed and what you bring.</p>`,
      videoUrl: null,
      quiz: [
        { question: 'Your LinkedIn headline should:', options: ['Only list your job title', 'Describe what you do and who you help', 'Be left blank', 'Copy someone else\'s'], answer: 1 },
        { question: 'Your About section should be written in:', options: ['Third person', 'First person', 'As bullet points only', 'Technical jargon'], answer: 1 },
        { question: 'A good profile photo:', options: ['Needs a professional photographer', 'Should be formal', 'Uses good lighting and a smile', 'Should not show your face'], answer: 2 },
      ],
    },
  ];

  for (const mod of modulesPath3) {
    await prisma.module.upsert({
      where: { id: mod.id },
      update: {},
      create: { ...mod, pathId: path3.id, quiz: mod.quiz },
    });
  }

  // ── Community circles ────────────────────────────────────────
  const circles = [
    { id: 'circle-jobs', name: 'Job Hunting', description: 'CVs, interviews, job boards, and celebrating those wins.', topic: 'Work' },
    { id: 'circle-money', name: 'Money & Budgeting', description: 'Honest conversations about money without the shame.', topic: 'Finance' },
    { id: 'circle-new', name: 'New Beginnings', description: 'For when you\'re starting over and need a soft place to land.', topic: 'Wellbeing' },
    { id: 'circle-tech', name: 'Tech & Digital', description: 'Questions welcome, no such thing as a silly one here.', topic: 'Digital' },
  ];

  for (const circle of circles) {
    await prisma.circle.upsert({
      where: { id: circle.id },
      update: {},
      create: circle,
    });
  }

  // Seed some posts
  await prisma.post.upsert({
    where: { id: 'post-1' },
    update: {},
    create: {
      id: 'post-1',
      circleId: 'circle-jobs',
      authorId: cora.id,
      content: 'Just had my first interview in years. I was so nervous but I did it! The practice sessions in the Learning Journey really helped me prepare.',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3),
    },
  });

  await prisma.post.upsert({
    where: { id: 'post-2' },
    update: {},
    create: {
      id: 'post-2',
      circleId: 'circle-money',
      authorId: bea.id,
      content: 'Shared the 50/30/20 rule with my sister yesterday and she said it was the first time money had ever made sense to her. Small wins! 🌱',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    },
  });

  await prisma.reply.upsert({
    where: { id: 'reply-1' },
    update: {},
    create: {
      id: 'reply-1',
      postId: 'post-1',
      authorId: alice.id,
      content: 'That is HUGE. You should be so proud. How did it feel walking out?',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
  });

  // ── Job listings ─────────────────────────────────────────────
  const jobs = [
    {
      id: 'job-1',
      title: 'Customer Experience Associate',
      company: 'Brightside Retail',
      location: 'Manchester',
      type: 'full-time',
      description: 'Join our friendly team helping customers find the perfect products. Full training provided — attitude matters more than experience.',
      applyUrl: '#',
      isPartner: true,
      skillArea: 'Customer service',
    },
    {
      id: 'job-2',
      title: 'Admin & Office Support',
      company: 'Greenway Housing',
      location: 'Remote',
      type: 'part-time',
      description: 'Flexible part-time role supporting our housing team with scheduling, data entry, and correspondence. Great for anyone returning to work.',
      applyUrl: '#',
      isPartner: true,
      skillArea: 'Business basics',
    },
    {
      id: 'job-3',
      title: 'Social Media & Content Assistant',
      company: 'Bloom Creative',
      location: 'London (Hybrid)',
      type: 'full-time',
      description: 'We\'re looking for someone with a creative eye and a passion for storytelling. Training on all tools provided.',
      applyUrl: '#',
      isPartner: false,
      skillArea: 'Digital skills',
    },
    {
      id: 'job-4',
      title: 'Finance & Accounts Administrator',
      company: 'Northside Community Trust',
      location: 'Leeds',
      type: 'full-time',
      description: 'Manage invoices, expenses, and financial records for a small, purpose-led organisation. Spreadsheet skills a bonus but training available.',
      applyUrl: '#',
      isPartner: false,
      skillArea: 'Finance',
    },
    {
      id: 'job-5',
      title: 'Wellbeing Programme Coordinator',
      company: 'The Anchor Foundation',
      location: 'Birmingham',
      type: 'part-time',
      description: 'Coordinate our wellbeing programme for women in the community. Passionate people who understand lived experience warmly welcomed.',
      applyUrl: '#',
      isPartner: true,
      skillArea: 'Leadership',
    },
    {
      id: 'job-6',
      title: 'Data Entry & Admin (Remote)',
      company: 'ClearPath Solutions',
      location: 'Remote',
      type: 'remote',
      description: 'Fully remote, flexible hours. Enter and verify data across multiple systems. Full training and equipment provided.',
      applyUrl: '#',
      isPartner: false,
      skillArea: 'Digital skills',
    },
  ];

  for (const job of jobs) {
    await prisma.jobListing.upsert({
      where: { id: job.id },
      update: {},
      create: job,
    });
  }

  console.log('✅ Seed complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
