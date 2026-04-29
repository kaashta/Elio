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
        videoUrl: null,
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
    videoUrl: null,
    content: `<h2>Welcome to the beginning of something real.</h2><p>This module is about giving yourself permission to start fresh. Before we can plan where we're going, we spend a moment honouring where we've been.</p>`,
    chapters: [
      {
        id: 'mod-1-1-ch1',
        title: 'Welcome to the Beginning',
        content: `<h2>Welcome to the beginning of something real.</h2>
<p>This module is about giving yourself permission to start fresh. Not pretending the past didn't happen — but choosing to move forward anyway.</p>
<p>Before we can plan where we're going, we spend a moment honouring where we've been. Everything you've experienced — the hard parts especially — has shaped you into someone with real depth, real wisdom, and real resilience.</p>
<p>You don't need to arrive here with everything figured out. You just need to arrive. And you already have.</p>
<h3>How to use this module</h3>
<p>Work through each section at your own pace. There are no right or wrong answers — only yours. You might want to keep a notebook nearby for the reflection exercises.</p>
<p>Take your time. This is a space to think, not rush.</p>`,
      },
      {
        id: 'mod-1-1-ch2',
        title: 'Your Values',
        content: `<h2>What matters most to you?</h2>
<p>Values are the things that matter deeply to you — honesty, family, creativity, independence, fairness, kindness. When your work and life align with your values, you feel more energised, more purposeful, and more like yourself.</p>
<p>When they're out of alignment, you often feel a vague sense of wrongness, even when you can't put your finger on why.</p>
<h3>Common values — which ones resonate?</h3>
<ul>
  <li><strong>Honesty</strong> — being truthful with yourself and others</li>
  <li><strong>Connection</strong> — meaningful relationships and belonging</li>
  <li><strong>Creativity</strong> — making, building, imagining</li>
  <li><strong>Independence</strong> — freedom to make your own choices</li>
  <li><strong>Growth</strong> — always learning and evolving</li>
  <li><strong>Security</strong> — stability, safety, predictability</li>
  <li><strong>Contribution</strong> — making a difference, giving back</li>
  <li><strong>Fairness</strong> — justice and equal treatment</li>
</ul>
<h3>Your turn</h3>
<p>Read through the list above slowly. Notice which ones cause a little spark of recognition — a "yes, that's me." Write down the three that feel most important to you right now.</p>
<p>There's no pressure to be consistent with who you were five years ago. Values evolve. What matters is what's true for you <em>today</em>.</p>`,
      },
      {
        id: 'mod-1-1-ch3',
        title: 'Your Strengths',
        content: `<h2>You have more than you think.</h2>
<p>Strengths aren't just qualifications or years of experience. They are qualities — and you've been building them your whole life, whether you realised it or not.</p>
<h3>Strengths you might be overlooking</h3>
<p>Think about the role you've played in your family, your friendships, your community. Consider what people come to you for. Think about the hardest thing you've ever been through, and how you got through it.</p>
<ul>
  <li><strong>Resilience</strong> — the ability to keep going when things are hard</li>
  <li><strong>Empathy</strong> — truly understanding how other people feel</li>
  <li><strong>Organisation</strong> — managing complexity, keeping things on track</li>
  <li><strong>Reliability</strong> — being someone others can count on</li>
  <li><strong>Creativity</strong> — finding solutions others don't see</li>
  <li><strong>Communication</strong> — helping people understand and feel heard</li>
  <li><strong>Calm under pressure</strong> — thinking clearly when things go wrong</li>
</ul>
<h3>A reflection exercise</h3>
<p>Ask yourself: <em>What have I managed that most people would find hard?</em> The answer reveals a strength you carry — even if you've never put it on a CV.</p>
<p>Try to name three strengths. If you struggle to name your own, think about what a friend who knows you well would say.</p>`,
      },
      {
        id: 'mod-1-1-ch4',
        title: 'Where Are You Today?',
        content: `<h2>An honest check-in.</h2>
<p>Before setting any goals, it helps to get clear on where you are right now — practically and emotionally. Not to judge yourself, but to understand your starting point.</p>
<h3>The four areas of your life</h3>
<p>Take a moment to rate each area on a scale of 1–10, where 1 means struggling significantly and 10 means thriving.</p>
<ul>
  <li><strong>Work and finances</strong> — income, stability, career direction</li>
  <li><strong>Relationships</strong> — support network, connection, community</li>
  <li><strong>Health and wellbeing</strong> — physical, emotional, mental</li>
  <li><strong>Personal growth</strong> — learning, confidence, sense of direction</li>
</ul>
<h3>What does this tell you?</h3>
<p>The areas with lower scores aren't failures — they're opportunities. They're the places where small changes will make the biggest difference.</p>
<p>In the next module, we'll use this awareness to start setting goals that actually match your real life.</p>
<h3>One thing to remember</h3>
<p>You don't need to fix everything at once. The most powerful approach is to choose one area to focus on first — and make a small, consistent change there.</p>`,
      },
    ],
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
    content: `<h2>Goals that feel like yours.</h2><p>There's a difference between goals you think you should want and goals that genuinely excite you.</p>`,
    chapters: [
      {
        id: 'mod-1-2-ch1',
        title: 'Why Most Goals Fail',
        content: `<h2>Why most goals don't stick.</h2>
<p>Most of us have set goals that faded within days or weeks. A new year's resolution that lasted until January 10th. A plan to exercise three times a week that became once a week, then not at all.</p>
<p>This doesn't mean you lack willpower or discipline. It usually means the goal wasn't set in a way that accounted for your real life.</p>
<h3>The most common mistakes</h3>
<ul>
  <li><strong>Vague goals</strong> — "get healthier" doesn't tell you what to actually do</li>
  <li><strong>Other people's goals</strong> — goals borrowed from someone else rarely feel worth fighting for</li>
  <li><strong>Ignoring obstacles</strong> — if you don't plan for what might go wrong, you'll give up the moment something does</li>
  <li><strong>Too big, too fast</strong> — goals so ambitious they feel impossible before you've started</li>
</ul>
<h3>The good news</h3>
<p>Goal-setting is a skill. And like every skill, it gets better with practice and the right approach. In the next section, we'll look at a framework that's backed by research and genuinely works.</p>`,
      },
      {
        id: 'mod-1-2-ch2',
        title: 'The WOOP Method',
        content: `<h2>Meet WOOP — your new best friend.</h2>
<p>WOOP is a goal-setting method developed by Professor Gabriele Oettingen at New York University. It works because it takes your actual life into account — not some perfect, obstacle-free version of it.</p>
<h3>Breaking it down</h3>
<ul>
  <li><strong>W — Wish</strong>: What is one meaningful goal you want to achieve? Be specific. Not "get a job" but "find a part-time customer service role in Manchester within 3 months."</li>
  <li><strong>O — Outcome</strong>: How will you feel when you achieve it? Really imagine it. Joy? Relief? Pride? Write it down. This is your fuel.</li>
  <li><strong>O — Obstacle</strong>: What is the main inner obstacle that might get in the way? Fear of rejection? Lack of confidence? Childcare? Be honest.</li>
  <li><strong>P — Plan</strong>: If [obstacle] happens, then I will [specific action]. This is called an "if-then" plan, and it dramatically increases follow-through.</li>
</ul>
<h3>Example</h3>
<p><strong>Wish:</strong> Complete the Digital Ready learning path in Elio by the end of May.<br/>
<strong>Outcome:</strong> I'll feel proud and more confident applying for jobs that need digital skills.<br/>
<strong>Obstacle:</strong> When I'm tired in the evenings, I'll skip modules.<br/>
<strong>Plan:</strong> If I feel too tired in the evening, I'll do one 10-minute chapter during my lunch break instead.</p>`,
      },
      {
        id: 'mod-1-2-ch3',
        title: 'Making Your First Goal',
        content: `<h2>Your turn.</h2>
<p>Now it's time to put WOOP into practice. Use the framework below to create your first real goal.</p>
<h3>Step by step</h3>
<p><strong>1. Choose something that actually matters to you.</strong><br/>
Not what you think you should want. What do <em>you</em> want? Start with one goal — not five. One.</p>
<p><strong>2. Make it specific and time-bound.</strong><br/>
"I want to find flexible work" → "I want to apply for three jobs per week for the next four weeks."</p>
<p><strong>3. Imagine the outcome vividly.</strong><br/>
Close your eyes if it helps. Picture yourself having achieved the goal. What does it feel like? What's different? Let that feeling be real.</p>
<p><strong>4. Identify your real obstacle.</strong><br/>
Be honest. Not external obstacles (though those matter too) — focus on your inner obstacles. The fear, the doubt, the habit that holds you back.</p>
<p><strong>5. Write your if-then plan.</strong><br/>
"If [obstacle], then I will [specific response]."</p>
<h3>Write it down</h3>
<p>Goals you write down are significantly more likely to happen than goals you only think. Grab a notebook, or notes on your phone, and write your WOOP out now.</p>`,
      },
      {
        id: 'mod-1-2-ch4',
        title: 'Reviewing & Adjusting',
        content: `<h2>Goals aren't set in stone — and that's okay.</h2>
<p>Life changes. Circumstances shift. A good goal is one you're willing to revisit and adjust, not one you abandon the moment it stops being convenient.</p>
<h3>A weekly check-in</h3>
<p>At the end of each week, ask yourself three questions:</p>
<ol>
  <li>Did I take any steps towards my goal this week?</li>
  <li>What got in the way (if anything)?</li>
  <li>What's one action I can take next week?</li>
</ol>
<p>This doesn't need to take more than five minutes. Consistency matters more than length.</p>
<h3>When to adjust your goal</h3>
<p>If you're consistently not making progress, don't just give up — adjust. Ask: Is this goal too big? Is this the right goal? Is the timing wrong? Sometimes the goal is right but the approach needs to change.</p>
<h3>Celebrate small wins</h3>
<p>Progress isn't always visible. Some weeks you'll send one email, and that's everything. Notice it. Acknowledge it. A small step forward is still forward.</p>`,
      },
    ],
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
    content: `<h2>Your story is your brand.</h2><p>A personal brand isn't a logo or a LinkedIn profile — it's how people experience you.</p>`,
    chapters: [
      {
        id: 'mod-1-3-ch1',
        title: 'What Is a Personal Brand?',
        content: `<h2>Your story is your brand.</h2>
<p>A personal brand isn't a logo. It isn't a catchy tagline or a colour palette on Instagram. It's much simpler and much more powerful: it's the impression you leave, the way people describe you when you're not in the room.</p>
<h3>Why it matters right now</h3>
<p>When you're looking for work, a mentor, or simply trying to connect with new people, the way you present yourself matters. Not because you need to perform or pretend — but because a clear, confident self-presentation opens doors that confusion keeps shut.</p>
<p>Think of it this way: you already have a personal brand. Everyone does. The question is whether it's intentional or accidental.</p>
<h3>What makes a strong personal brand?</h3>
<ul>
  <li><strong>Authenticity</strong> — it reflects who you actually are, not who you think you should be</li>
  <li><strong>Clarity</strong> — people understand what you do and what you bring</li>
  <li><strong>Consistency</strong> — it's the same whether you're in an interview, a networking event, or a community group</li>
</ul>`,
      },
      {
        id: 'mod-1-3-ch2',
        title: 'Crafting Your Story',
        content: `<h2>Your story is worth telling.</h2>
<p>Every career path has a narrative arc — including non-linear ones. The gap in employment. The change of direction. The years spent raising children or caring for someone else. These aren't weaknesses to apologise for. They're chapters of a story that made you who you are.</p>
<h3>The three-part story framework</h3>
<ol>
  <li><strong>Where I've been</strong> — a brief, honest description of your background. Not a full CV. Just the key threads that led you here.</li>
  <li><strong>What I bring</strong> — your skills, qualities, and experience. Remember: soft skills count enormously. Empathy, resilience, organisation, communication — these are what employers remember.</li>
  <li><strong>Where I'm going</strong> — what you're looking for and why. This shows intention and direction, which builds confidence in others.</li>
</ol>
<h3>Reframing your narrative</h3>
<p>The words you use matter. Instead of "I've been out of work for three years," try: "I spent three years developing skills in household management, budgeting, and raising two children — and now I'm ready to bring that organisational ability into a professional setting."</p>
<p>Same facts. Completely different framing. One shrinks; one expands.</p>`,
      },
      {
        id: 'mod-1-3-ch3',
        title: 'Your 60-Second Introduction',
        content: `<h2>The power of a confident introduction.</h2>
<p>You will be asked "Tell me about yourself" more times than you can count — in interviews, networking events, community groups, and chance encounters. Having a considered, warm answer ready changes everything.</p>
<h3>The structure</h3>
<p>A good 60-second introduction does three things:</p>
<ol>
  <li><strong>Says who you are</strong> — your name and a brief context</li>
  <li><strong>Shares what you bring</strong> — one or two key strengths or experiences</li>
  <li><strong>States what you're looking for</strong> — in plain, confident language</li>
</ol>
<h3>Example</h3>
<p><em>"Hi, I'm Sarah. I spent eight years working in retail customer service, then took time out to raise my kids. During that time I also managed our household budget and volunteered with a local food bank, which taught me a lot about logistics and working with people under pressure. I'm now looking for a part-time role where I can use those skills in a supportive team environment."</em></p>
<h3>What makes it work</h3>
<ul>
  <li>It's honest, not defensive</li>
  <li>It frames all experience — paid and unpaid — as valuable</li>
  <li>It ends with clear intention, which invites the conversation to continue</li>
</ul>`,
      },
      {
        id: 'mod-1-3-ch4',
        title: 'Putting It Into Practice',
        content: `<h2>Practice makes permanent.</h2>
<p>Reading about introductions doesn't build confidence. Saying your introduction out loud does. This section is about getting from knowing to doing.</p>
<h3>Write it first</h3>
<p>Write your introduction down. Not to memorise word for word — but to get the ideas clear. Use the three-part structure from the previous section. Keep it to around 100 words.</p>
<h3>Say it out loud</h3>
<p>Read it to yourself. Then record yourself on your phone. This feels uncomfortable for almost everyone — that's normal. Watch it back once. Notice what feels authentic and what feels stiff. Adjust.</p>
<h3>Practice with someone you trust</h3>
<p>Ask a friend, family member, or fellow Elio member to listen to your introduction and give feedback. You're not looking for praise — you're looking for whether it's clear and memorable.</p>
<h3>Use it in real situations</h3>
<p>Start small. Introduce yourself at a community event. Try it in a phone call. Each real use builds a layer of confidence that practice alone can't.</p>
<p>Your story is worth telling. Start telling it.</p>`,
      },
    ],
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
    content: `<h2>Resilience isn't about not falling. It's about getting back up.</h2><p>Resilience is a skill you can build.</p>`,
    chapters: [
      {
        id: 'mod-1-4-ch1',
        title: 'What Resilience Really Is',
        content: `<h2>Resilience isn't about not falling. It's about getting back up.</h2>
<p>There's a common myth about resilience: that resilient people don't feel the impact of setbacks. That they shrug things off and keep going, unfazed.</p>
<p>This is wrong — and it's harmful, because it makes people feel that their very natural pain and struggle is a sign of weakness.</p>
<h3>The truth about resilience</h3>
<p>Resilient people feel setbacks deeply. They grieve. They get angry. They lie awake at night. The difference is that they also have strategies — conscious or not — that allow them to process what happened and move forward.</p>
<p>Resilience is not a fixed personality trait. It is a skill. And like any skill, it can be learned, practised, and strengthened over time.</p>
<h3>What resilience looks like in real life</h3>
<ul>
  <li>Asking for help when you need it</li>
  <li>Taking a rest when you're running on empty</li>
  <li>Changing your approach when something isn't working</li>
  <li>Finding meaning in difficult experiences</li>
  <li>Maintaining perspective — this moment is not forever</li>
</ul>`,
      },
      {
        id: 'mod-1-4-ch2',
        title: 'The Science of Bouncing Back',
        content: `<h2>What research tells us.</h2>
<p>Psychologists have studied resilience for decades. Their findings are reassuring: the ability to recover from adversity is something humans are remarkably good at — far better than most of us believe.</p>
<h3>Post-traumatic growth</h3>
<p>There is a well-documented phenomenon called post-traumatic growth — the experience of positive psychological change following a struggle with highly challenging life circumstances. People who go through very difficult experiences often report greater personal strength, deeper relationships, a greater appreciation for life, and new possibilities they hadn't considered before.</p>
<p>This doesn't mean suffering is good, or that you should minimise what you've been through. It means that the human capacity for growth is remarkable — and you are not an exception to this.</p>
<h3>The three ingredients of resilience</h3>
<ol>
  <li><strong>Connection</strong> — having people to lean on, to talk to, to share the load</li>
  <li><strong>Meaning</strong> — being able to make some sense of what happened, or find purpose in what comes next</li>
  <li><strong>Agency</strong> — believing that your choices and actions make a difference</li>
</ol>`,
      },
      {
        id: 'mod-1-4-ch3',
        title: 'Building Your Toolkit',
        content: `<h2>Your resilience toolkit.</h2>
<p>You already have one. You've been building it your entire life — through every difficulty you've come through, every time you found a way forward, every person who helped you and every strategy that worked.</p>
<h3>Look back to see your toolkit</h3>
<p>Think of a time in your life when things were genuinely hard. Not just stressful — genuinely difficult. Now ask:</p>
<ul>
  <li>What got you through it?</li>
  <li>Who was there for you?</li>
  <li>What did you do — consciously or unconsciously — that helped?</li>
  <li>What did you learn about yourself?</li>
</ul>
<p>The answers to those questions are your toolkit. Write them down. They are real, they are yours, and they work.</p>
<h3>Adding to your toolkit</h3>
<p>The best strategies for resilience include:</p>
<ul>
  <li><strong>Physical care</strong> — sleep, movement, food. The basics matter enormously.</li>
  <li><strong>Connection</strong> — Elio's community circles are here for exactly this</li>
  <li><strong>Journalling</strong> — writing about your experiences helps process them</li>
  <li><strong>Mindfulness</strong> — staying in the present, not the worst-case future</li>
  <li><strong>Structure</strong> — routines give stability when everything else feels uncertain</li>
</ul>`,
      },
      {
        id: 'mod-1-4-ch4',
        title: 'When Things Get Hard',
        content: `<h2>What to do in the difficult moments.</h2>
<p>Resilience isn't just something you build over time — it's something you practise in real time, in the difficult moments themselves. Here's a framework for those moments.</p>
<h3>The STOP technique</h3>
<ol>
  <li><strong>S — Stop</strong>: Pause. Just for a moment. Don't react automatically.</li>
  <li><strong>T — Take a breath</strong>: One slow breath in, one slow breath out. This genuinely helps regulate the stress response.</li>
  <li><strong>O — Observe</strong>: What am I feeling? What am I thinking? What does my body feel like right now? Just notice, without judging.</li>
  <li><strong>P — Proceed</strong>: Now respond — thoughtfully, not reactively.</li>
</ol>
<h3>Give yourself permission to not be okay</h3>
<p>You don't have to be strong all the time. You don't have to have it together every day. Resilience includes the permission to fall apart sometimes — knowing that you can also put yourself back together.</p>
<h3>Reaching out</h3>
<p>If things feel really hard, please reach out. To someone in the Elio community. To a friend. To a professional. Asking for help is not weakness — it is one of the most resilient things you can do.</p>`,
      },
    ],
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
    content: `<h2>Money is just a tool. Let's make it work for you.</h2><p>This module is about getting comfortable with numbers — no judgement, no jargon.</p>`,
    chapters: [
      {
        id: 'mod-2-1-ch1', title: 'Your Money Story',
        content: `<h2>Your money story.</h2>
<p>We all have a relationship with money — and for most of us, that relationship was shaped long before we had any money of our own. How your family talked (or didn't talk) about money, what messages you absorbed about wealth and worth, what you've been through financially — all of it shapes how you feel and behave with money today.</p>
<h3>Common money stories</h3>
<ul>
  <li><em>"Money is shameful to talk about"</em> — common in families where finances were kept secret or taboo</li>
  <li><em>"Rich people are greedy"</em> — can make you unconsciously avoid financial success</li>
  <li><em>"I'm just not good with money"</em> — a label, not a fact, and one that can become self-fulfilling</li>
  <li><em>"There's never enough"</em> — a scarcity mindset that can make it hard to plan ahead</li>
</ul>
<h3>Why this matters</h3>
<p>Understanding your money story doesn't mean being paralysed by it. It means you can see where your instincts come from — and choose differently when those instincts aren't serving you.</p>
<p>Take a moment to ask yourself: what is the first memory I have involving money? What did that teach me?</p>`,
      },
      {
        id: 'mod-2-1-ch2', title: 'Income & Outgoings',
        content: `<h2>Understanding your numbers.</h2>
<p>The single most powerful thing you can do for your financial wellbeing is to know, with clarity, what comes in and what goes out.</p>
<h3>Your income</h3>
<p>List everything that comes in each month: wages, benefits, child support, tax credits, freelance income. Include only regular, reliable income — not occasional extras.</p>
<h3>Your outgoings</h3>
<p>Now list everything that goes out. Split it into two categories:</p>
<ul>
  <li><strong>Fixed costs</strong> — rent or mortgage, council tax, insurance, phone, subscriptions. These don't change month to month.</li>
  <li><strong>Variable costs</strong> — food, transport, clothing, going out. These vary, so look back at bank statements to find your average.</li>
</ul>
<h3>The big picture</h3>
<p>Income − outgoings = what's left. If this number is positive, you have room to save or pay off debt. If it's negative, you need to either increase income or reduce outgoings — and this module will help you think through both.</p>
<p>There is no judgement here. This is just data. And data is power.</p>`,
      },
      {
        id: 'mod-2-1-ch3', title: 'The 50/30/20 Rule',
        content: `<h2>A simple framework that actually works.</h2>
<p>The 50/30/20 rule is a widely used budgeting framework that gives you a starting point without overwhelming complexity. Here's how it works:</p>
<h3>50% — Needs</h3>
<p>Half your after-tax income goes towards things you genuinely can't live without: housing, food, utilities, transport to work, childcare, minimum debt repayments.</p>
<h3>30% — Wants</h3>
<p>30% goes towards things that improve your quality of life but aren't strictly necessary: eating out, hobbies, clothes beyond the basics, streaming services, treats.</p>
<h3>20% — Saving & debt</h3>
<p>20% goes towards building security: an emergency fund, saving for a goal, or paying down debt faster than the minimum.</p>
<h3>Using it realistically</h3>
<p>In reality, especially if your income is low, 50/30/20 may not be achievable right now. That's okay. Use it as a direction, not a rule. Even a 70/25/5 split builds habits that serve you over time.</p>
<p>The goal isn't perfection. The goal is intention.</p>`,
      },
      {
        id: 'mod-2-1-ch4', title: 'Saving & Emergency Funds',
        content: `<h2>Building your safety net.</h2>
<p>An emergency fund is one of the most important financial tools you can build. It's the buffer between a surprise expense — a broken boiler, an unexpected bill, a job loss — and a financial crisis.</p>
<h3>How much do you need?</h3>
<p>The advice is typically three to six months of essential expenses. If that feels impossibly large, start with a smaller goal: £500. Then £1,000. Progress matters more than perfection.</p>
<h3>How to build it</h3>
<ul>
  <li>Set up a separate savings account — ideally at a different bank</li>
  <li>Set up an automatic transfer on payday, even if it's just £10 or £20</li>
  <li>Don't give yourself easy access to the account (no card, no app)</li>
  <li>Treat saving like a bill — not optional</li>
</ul>
<h3>The psychological benefit</h3>
<p>Beyond the practical protection, an emergency fund changes how you feel about money. Having even a small cushion reduces financial anxiety significantly. It means you're not one unexpected bill away from crisis.</p>
<p>You deserve that security. Start building it today.</p>`,
      },
    ],
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
    content: `<h2>Your voice matters.</h2><p>Communication is a skill — and like any skill, it gets better with practice.</p>`,
    chapters: [
      {
        id: 'mod-2-2-ch1', title: 'Why Communication Matters',
        content: `<h2>Your voice matters.</h2>
<p>Communication is the foundation of every relationship, every career opportunity, and every chance to be understood. And yet for many people — especially those who've been through difficult or isolating experiences — finding that voice feels hard.</p>
<h3>What this module covers</h3>
<p>We'll look at four key areas: active listening, assertiveness, navigating difficult conversations, and written communication. Each one is a skill you can practise and improve.</p>
<h3>The biggest misconception</h3>
<p>Many people believe confident communicators are born, not made. This is false. The most effective communicators in the world practise constantly. They have strategies, habits, and tools they've developed over years.</p>
<p>You are not behind. You are at the beginning of a skill-building journey.</p>`,
      },
      {
        id: 'mod-2-2-ch2', title: 'Active Listening',
        content: `<h2>The most underrated communication skill.</h2>
<p>The most powerful communicators are great listeners first. Listening — really listening — is not the same as waiting for your turn to speak.</p>
<h3>What active listening looks like</h3>
<ul>
  <li>Giving full attention — phone down, eye contact, body turned towards the other person</li>
  <li>Not interrupting or planning your response while they're still talking</li>
  <li>Reflecting back what you've heard: <em>"So what I'm hearing is that you felt..."</em></li>
  <li>Asking follow-up questions that show genuine curiosity</li>
  <li>Tolerating silences rather than rushing to fill them</li>
</ul>
<h3>Why it builds trust</h3>
<p>When people feel truly heard, they trust you. They're more open, more honest, and more willing to work with you. Active listening isn't just kind — it's one of the most effective professional tools you have.</p>
<h3>Practice this week</h3>
<p>In your next conversation, challenge yourself to listen for 80% of the time. Notice what it feels like. Notice how the other person responds.</p>`,
      },
      {
        id: 'mod-2-2-ch3', title: 'Assertiveness',
        content: `<h2>Assertiveness: the middle ground.</h2>
<p>There are three main communication styles: passive, aggressive, and assertive. Most of us swing between the first two depending on the situation — and assertive is the one worth aiming for.</p>
<h3>The three styles</h3>
<ul>
  <li><strong>Passive</strong> — avoiding conflict by not expressing your needs. Short-term peace, long-term resentment.</li>
  <li><strong>Aggressive</strong> — expressing your needs forcefully, without regard for others. Gets short-term compliance, damages relationships.</li>
  <li><strong>Assertive</strong> — expressing your needs clearly and respectfully, while acknowledging others. Gets real results without damaging the relationship.</li>
</ul>
<h3>Assertive language</h3>
<p>Try these formulas:</p>
<ul>
  <li><em>"I feel [emotion] when [situation]. I would like [request]."</em></li>
  <li><em>"I understand your perspective. My view is [position]."</em></li>
  <li><em>"I'm not able to [request], but I can [alternative]."</em></li>
</ul>
<h3>Important note</h3>
<p>Being assertive does not mean being cold or confrontational. The most assertive communicators are warm, clear, and direct. All three at once.</p>`,
      },
      {
        id: 'mod-2-2-ch4', title: 'Difficult Conversations',
        content: `<h2>How to have the conversations that matter.</h2>
<p>Some conversations feel loaded before they start — asking for a pay rise, addressing a conflict, saying no to someone important to you. These are the conversations most people avoid. And they're the conversations that change everything.</p>
<h3>Prepare, don't script</h3>
<p>Know what outcome you want. Know your key points. But don't script it word for word — that leads to robotic delivery and leaves no room for the other person.</p>
<h3>Start with curiosity</h3>
<p>Even when you feel certain you're right, opening with a question is powerful: <em>"I'd love to understand your thinking on this."</em> This lowers defences and often reveals information that changes everything.</p>
<h3>Stay calm in your body</h3>
<p>When we feel threatened, our bodies prepare for fight or flight — which is not ideal for a nuanced conversation. Before a difficult conversation: breathe slowly. Relax your shoulders. Speak more slowly than feels natural. Pause before responding.</p>
<h3>After the conversation</h3>
<p>Difficult conversations are rarely clean. There may be unresolved feelings. Give yourself time to process. If the conversation didn't go well, that's information — not failure.</p>`,
      },
    ],
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
    content: `<h2>The unwritten rules of professional life.</h2><p>Every workplace has a culture, and understanding that culture helps you feel less like an outsider.</p>`,
    chapters: [
      {
        id: 'mod-2-3-ch1', title: 'Understanding Workplace Culture',
        content: `<h2>The unwritten rules.</h2>
<p>Every workplace has two sets of rules: the written ones (contracts, policies, handbooks) and the unwritten ones — the norms, expectations, and ways of doing things that nobody explicitly tells you but everyone is expected to know.</p>
<h3>What is workplace culture?</h3>
<p>Culture is the personality of an organisation. It's in the way people greet each other, the tone of emails, whether humour is welcome in meetings, how problems are raised, and whether people are expected to stay late even when there's no work to do.</p>
<h3>Reading a culture quickly</h3>
<p>In your first week at any new job, observe before participating. Notice:</p>
<ul>
  <li>How do people communicate — formal emails or quick messages?</li>
  <li>What time do people arrive and leave?</li>
  <li>How do people dress?</li>
  <li>How are decisions made — by one person or by the group?</li>
  <li>How do people handle disagreement?</li>
</ul>
<p>You don't need to change yourself to fit in. But understanding the culture means you can navigate it — and change it from the inside over time.</p>`,
      },
      {
        id: 'mod-2-3-ch2', title: 'Professional Emails',
        content: `<h2>Writing emails that get results.</h2>
<p>Email is one of the most important professional communication tools — and most people use it poorly. A well-written email is clear, concise, warm, and gets a response. Here's how to write them.</p>
<h3>Structure every email</h3>
<ol>
  <li><strong>Subject line</strong> — clear and specific. <em>"Question about tomorrow's meeting"</em> is better than <em>"Hi."</em></li>
  <li><strong>Greeting</strong> — match the tone of the relationship. <em>"Hi Sarah"</em> for colleagues; <em>"Dear Ms. Jones"</em> for formal first contact.</li>
  <li><strong>Purpose — first sentence</strong> — lead with what you need. Don't bury it at the end.</li>
  <li><strong>Context</strong> — brief background if needed. Keep it short.</li>
  <li><strong>Call to action</strong> — what do you want the person to do? Be specific: <em>"Could you confirm by Friday?"</em></li>
  <li><strong>Close</strong> — thank them and sign off warmly.</li>
</ol>
<h3>The golden rules</h3>
<ul>
  <li>Short is almost always better than long</li>
  <li>Re-read before sending — tone can be hard to judge in text</li>
  <li>Avoid exclamation marks in every sentence — it reads as anxious</li>
  <li>Never send an angry email — write it, wait an hour, then decide</li>
</ul>`,
      },
      {
        id: 'mod-2-3-ch3', title: 'Workplace Meetings',
        content: `<h2>Making meetings work for you.</h2>
<p>Meetings are where decisions get made, relationships get built, and — if you're not careful — time gets wasted. Here's how to approach them strategically.</p>
<h3>Before the meeting</h3>
<ul>
  <li>Read any agenda or materials sent in advance</li>
  <li>Know why you're there — what's your role? Are you there to contribute, observe, or decide?</li>
  <li>Prepare one thoughtful contribution if you're expected to speak</li>
</ul>
<h3>During the meeting</h3>
<ul>
  <li>Arrive on time — or one minute early for online meetings</li>
  <li>Take brief notes — it shows engagement and helps you remember actions</li>
  <li>Speak up at least once — even asking a question counts as contribution</li>
  <li>Don't fill silence — one meaningful comment is worth ten filler remarks</li>
</ul>
<h3>After the meeting</h3>
<ul>
  <li>Follow up on any actions you agreed to take — and do them</li>
  <li>If you didn't understand something, ask for clarification by email afterwards</li>
</ul>
<h3>If you're nervous</h3>
<p>Prepare one thing to say before the meeting starts. Knowing you have something to contribute removes a huge amount of anxiety.</p>`,
      },
      {
        id: 'mod-2-3-ch4', title: 'Building Workplace Relationships',
        content: `<h2>It's not what you know — it's also who you know.</h2>
<p>Strong workplace relationships make your day better, your work better, and your career more sustainable. And they don't require being the most outgoing person in the room.</p>
<h3>The basics of relationship-building at work</h3>
<ul>
  <li><strong>Remember names</strong> — use someone's name when you greet them. It's simple and incredibly effective.</li>
  <li><strong>Be reliable</strong> — do what you say you'll do. This builds trust faster than anything.</li>
  <li><strong>Show genuine interest</strong> — ask questions and actually listen to the answers</li>
  <li><strong>Offer to help</strong> — not in a way that overextends you, but small gestures matter</li>
  <li><strong>Say thank you</strong> — out loud, specifically, and sincerely</li>
</ul>
<h3>What to do when you're new</h3>
<p>Ask questions. People love explaining things they know well. Being curious — not competitive — is the fastest way to build rapport in a new environment.</p>
<h3>Managing up</h3>
<p>Your relationship with your manager matters enormously. Be proactive: give them updates without being asked. Ask for feedback. Let them know when you've completed something. Managers notice people who make their lives easier.</p>`,
      },
    ],
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
    content: `<h2>Knowledge is power — especially at work.</h2><p>Understanding your rights isn't about being difficult. It's about knowing where you stand.</p>`,
    chapters: [
      {
        id: 'mod-2-4-ch1', title: 'Why Your Rights Matter',
        content: `<h2>Knowledge is power — especially at work.</h2>
<p>Understanding your employment rights is not about being difficult or litigious. It's about knowing where you stand — so you can make informed decisions, protect yourself when needed, and feel more secure in any job you take.</p>
<h3>Why this is especially important for women</h3>
<p>Women — and particularly women returning to work after a break — are sometimes treated less fairly than they should be. This isn't universal, and most employers do the right thing. But knowing your rights means you're not reliant on hope.</p>
<h3>Key principle: employment rights apply from day one</h3>
<p>Many people believe rights only kick in after a probationary period. This is a myth. Rights around pay, discrimination, and health and safety apply from your very first day of employment.</p>`,
      },
      {
        id: 'mod-2-4-ch2', title: 'Pay & Working Hours',
        content: `<h2>What you're entitled to.</h2>
<h3>National Minimum Wage</h3>
<p>As of 2025, the National Living Wage (for workers aged 21 and over) is £11.44 per hour. If you're being paid less than this, your employer is breaking the law.</p>
<h3>Pay slips</h3>
<p>You have a legal right to a payslip for every payment you receive. It must show your gross pay, deductions, and net pay. If you're not receiving one, ask for it.</p>
<h3>Working hours</h3>
<p>The Working Time Regulations give you these rights:</p>
<ul>
  <li>A maximum working week of 48 hours (on average) — you can opt out of this in writing</li>
  <li>A rest break of at least 20 minutes if you work more than 6 hours</li>
  <li>At least 11 consecutive hours off between each working day</li>
  <li>28 days' paid holiday per year (for full-time workers), including bank holidays</li>
</ul>
<h3>Sick pay</h3>
<p>Statutory Sick Pay (SSP) kicks in after four consecutive days off sick and applies once you've been employed for a short period. Many employers offer enhanced sick pay on top of SSP — check your contract.</p>`,
      },
      {
        id: 'mod-2-4-ch3', title: 'Discrimination & Equality',
        content: `<h2>Your right to be treated fairly.</h2>
<p>The Equality Act 2010 protects you from discrimination based on what are called "protected characteristics." It is illegal for employers to discriminate against you in hiring, pay, promotion, or any other employment matter based on these characteristics.</p>
<h3>The nine protected characteristics</h3>
<ol>
  <li>Age</li>
  <li>Disability</li>
  <li>Gender reassignment</li>
  <li>Marriage and civil partnership</li>
  <li>Pregnancy and maternity</li>
  <li>Race</li>
  <li>Religion or belief</li>
  <li>Sex</li>
  <li>Sexual orientation</li>
</ol>
<h3>Types of discrimination</h3>
<ul>
  <li><strong>Direct discrimination</strong> — treating you less favourably because of a protected characteristic</li>
  <li><strong>Indirect discrimination</strong> — a policy or rule that applies to everyone but puts people with a protected characteristic at a disadvantage</li>
  <li><strong>Harassment</strong> — unwanted conduct related to a protected characteristic</li>
  <li><strong>Victimisation</strong> — treating you badly because you raised a discrimination complaint</li>
</ul>`,
      },
      {
        id: 'mod-2-4-ch4', title: 'What To Do If Something Goes Wrong',
        content: `<h2>If something feels wrong, you have options.</h2>
<p>Many people suffer in silence at work because they don't know what to do, or they're afraid of the consequences of speaking up. This section gives you a clear map of what to do.</p>
<h3>Step 1: Document everything</h3>
<p>Start a written record immediately. Note dates, times, what happened, who was involved, and who witnessed it. Keep this somewhere personal, not on work systems.</p>
<h3>Step 2: Raise it informally</h3>
<p>Most workplace issues are best resolved informally first. Speak to your manager (or their manager if your manager is the problem). Be calm, specific, and focused on what you want to happen.</p>
<h3>Step 3: Use the formal grievance procedure</h3>
<p>Every employer with five or more employees must have a formal grievance procedure. If informal resolution hasn't worked, you can submit a formal grievance in writing.</p>
<h3>Step 4: External help</h3>
<ul>
  <li><strong>ACAS</strong> (acas.org.uk) — free, confidential advice on employment rights. You can call their helpline on 0300 123 1100.</li>
  <li><strong>Citizens Advice</strong> — free advice on work, benefits, and legal issues</li>
  <li><strong>Employment Tribunal</strong> — a last resort, but a real and accessible one</li>
</ul>
<h3>You are not alone</h3>
<p>Raising a concern at work takes courage. But knowing your rights, and knowing help exists, means you're never completely alone in dealing with it.</p>`,
      },
    ],
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
    content: `<h2>Email is your professional front door.</h2><p>Having a professional email address and knowing how to use it confidently is one of the most practical skills in any job search.</p>`,
    chapters: [
      {
        id: 'mod-3-1-ch1', title: 'Your Professional Front Door',
        content: `<h2>Email is your professional front door.</h2>
<p>In the modern workplace, email is often the first impression you make. A professional email address, a well-written message, and an organised inbox signal to employers that you're competent, reliable, and easy to work with.</p>
<h3>Why it matters more than you think</h3>
<p>Consider this: two identical CVs arrive by email. One comes from <em>cupcake_queen_forever@hotmail.co.uk</em>. One comes from <em>sarah.thompson@gmail.com</em>. Employers notice. This detail — which takes five minutes to fix — can affect whether your application is taken seriously.</p>
<h3>What we'll cover</h3>
<ul>
  <li>Setting up a professional email address</li>
  <li>Writing emails that get read and responded to</li>
  <li>Managing your inbox so it works for you, not against you</li>
  <li>Email etiquette — the unspoken rules that matter</li>
</ul>`,
      },
      {
        id: 'mod-3-1-ch2', title: 'Setting Up Your Email',
        content: `<h2>Setting up a professional email address.</h2>
<p>If you don't already have a professional email address, now is the time to create one. Here's what works:</p>
<h3>The formula</h3>
<p><strong>firstname.lastname@gmail.com</strong> is the gold standard. If that's taken, try:
<ul>
  <li>firstnamelastname@gmail.com</li>
  <li>firstname.lastname1@gmail.com</li>
  <li>f.lastname@gmail.com</li>
</ul>
<h3>Which email provider?</h3>
<p>Gmail (Google) is the most widely used and professionally respected. It's free, reliable, and has good spam filtering. Outlook (Microsoft) is a close second.</p>
<h3>Setting it up</h3>
<ol>
  <li>Go to gmail.com and click "Create account"</li>
  <li>Follow the prompts — you'll need a mobile number for verification</li>
  <li>Choose your email address carefully — you'll be using it for years</li>
  <li>Set up a recovery phone number and backup email in case you ever get locked out</li>
</ol>
<h3>Adding a signature</h3>
<p>In Gmail: Settings → See all settings → General → Signature. Include your name, phone number, and optionally LinkedIn profile. Keep it simple.</p>`,
      },
      {
        id: 'mod-3-1-ch3', title: 'Writing Good Emails',
        content: `<h2>Emails that get results.</h2>
<p>There is an art to writing a good email. It's not complicated — but most people don't think about it consciously, which is why so many emails are ignored, misunderstood, or cause unnecessary friction.</p>
<h3>The anatomy of an effective email</h3>
<ul>
  <li><strong>Subject line</strong>: Clear and specific. <em>"Application for Customer Service Role — Sarah Thompson"</em></li>
  <li><strong>Greeting</strong>: Use their name if you have it. <em>"Dear Ms. Collins"</em> for formal; <em>"Hi James"</em> once you know them.</li>
  <li><strong>Opening line</strong>: State your purpose immediately. <em>"I'm writing to apply for the part-time admin role advertised on Indeed."</em></li>
  <li><strong>Body</strong>: Necessary context only. One paragraph usually suffices.</li>
  <li><strong>Call to action</strong>: What do you want them to do? Be specific.</li>
  <li><strong>Sign-off</strong>: <em>"Kind regards"</em> is always safe. <em>"Best"</em> or <em>"Thanks"</em> once you know them.</li>
</ul>
<h3>Common mistakes to avoid</h3>
<ul>
  <li>Replying to all when you only need to reply to one person</li>
  <li>Forwarding chains without context</li>
  <li>Writing in capital letters (reads as shouting)</li>
  <li>Sending anything when you're emotional — wait, then decide</li>
</ul>`,
      },
      {
        id: 'mod-3-1-ch4', title: 'Managing Your Inbox',
        content: `<h2>Taming the inbox.</h2>
<p>An overflowing inbox is stressful and makes important emails easy to miss. Here's a simple system that keeps things manageable.</p>
<h3>The four-step inbox approach</h3>
<ol>
  <li><strong>Delete</strong> — anything you don't need immediately goes in the bin</li>
  <li><strong>Do</strong> — if it takes less than two minutes, respond now</li>
  <li><strong>Defer</strong> — if it requires real thought, move it to a folder called "To Do" and deal with it later</li>
  <li><strong>Delegate</strong> — if someone else should handle it, forward and follow up</li>
</ol>
<h3>Use folders/labels</h3>
<p>Create folders for ongoing things: "Job Applications," "Important Documents," "Receipts," etc. This means you can find things quickly without searching.</p>
<h3>Unsubscribe ruthlessly</h3>
<p>Every email list you don't want is noise. Use the unsubscribe link (it's usually at the bottom) rather than just deleting — this stops the problem at the source.</p>
<h3>Check at set times</h3>
<p>Rather than having your inbox open all day, check it at set times: morning, midday, and end of day. This dramatically reduces the mental load of email.</p>`,
      },
    ],
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
    content: `<h2>Spreadsheets are not scary.</h2><p>The basics are much simpler than they look. This module covers what you actually need to know.</p>`,
    chapters: [
      {
        id: 'mod-3-2-ch1', title: 'What Is a Spreadsheet?',
        content: `<h2>Spreadsheets are not scary.</h2>
<p>If the word "spreadsheet" has ever made you want to close the laptop and go for a walk — this module is for you.</p>
<h3>The basics</h3>
<p>A spreadsheet is a table — rows going across, columns going down. Each individual box is called a <strong>cell</strong>. You can put text, numbers, or formulas into cells.</p>
<h3>What they're used for</h3>
<ul>
  <li>Budgets and financial tracking</li>
  <li>Lists — of anything</li>
  <li>Scheduling and rotas</li>
  <li>Data analysis (don't panic — we mean simple things like totals and averages)</li>
  <li>Forms and records</li>
</ul>
<h3>Google Sheets vs Excel</h3>
<p><strong>Google Sheets</strong> is free and works in your browser — no download needed. Great for most purposes and easy to share.</p>
<p><strong>Microsoft Excel</strong> is more powerful and widely used in offices. It comes with Office 365 (which many jobs will provide).</p>
<p>We'll focus on Google Sheets for this module as it's free and immediately accessible.</p>`,
      },
      {
        id: 'mod-3-2-ch2', title: 'Entering & Formatting Data',
        content: `<h2>Getting your data in order.</h2>
<p>Before you can do anything useful with a spreadsheet, you need to get your data in cleanly. Good data in → useful information out.</p>
<h3>Navigating cells</h3>
<ul>
  <li>Click on a cell to select it</li>
  <li>Type to enter data — press Enter to confirm and move down, or Tab to move right</li>
  <li>Cells are referenced by their column letter and row number: A1, B3, C12</li>
</ul>
<h3>Formatting for clarity</h3>
<ul>
  <li><strong>Bold headers</strong> — make the top row bold so it's clear what each column means</li>
  <li><strong>Freeze the top row</strong> — so headers stay visible as you scroll (View → Freeze → 1 row)</li>
  <li><strong>Format numbers</strong> — select a column of prices and choose "Currency" format so £ symbols and decimal places are consistent</li>
  <li><strong>Column width</strong> — double-click the line between column headers to auto-fit the width</li>
</ul>
<h3>The golden rule</h3>
<p>One piece of data per cell. Never combine things in one cell that you might want to sort or filter separately later — e.g., put first name and last name in separate columns, not one "Full Name" column.</p>`,
      },
      {
        id: 'mod-3-2-ch3', title: 'Basic Formulas',
        content: `<h2>The formulas that cover 80% of what you'll ever need.</h2>
<p>Formulas are instructions to the spreadsheet. They always start with an equals sign (=). They're not as mysterious as they look.</p>
<h3>SUM — add numbers together</h3>
<p><code>=SUM(A2:A10)</code> — adds all the numbers in cells A2 through A10</p>
<p>Use this for: totalling up a column of expenses, adding hours worked, counting anything numerical.</p>
<h3>AVERAGE — find the average</h3>
<p><code>=AVERAGE(B2:B10)</code> — gives you the mean of all numbers in B2 through B10</p>
<h3>COUNT — count how many cells have numbers</h3>
<p><code>=COUNT(C2:C10)</code> — tells you how many cells in that range have numbers in them</p>
<h3>IF — make a decision</h3>
<p><code>=IF(D2>100, "Over budget", "Within budget")</code> — if the value in D2 is more than 100, show "Over budget"; otherwise show "Within budget"</p>
<h3>How to enter a formula</h3>
<ol>
  <li>Click on the cell where you want the result</li>
  <li>Type = and then the formula name</li>
  <li>The spreadsheet will suggest autocomplete options — use them</li>
  <li>Press Enter</li>
</ol>`,
      },
      {
        id: 'mod-3-2-ch4', title: 'Practical Uses',
        content: `<h2>Putting it all together.</h2>
<p>Let's look at a practical example that combines everything you've learned: a simple monthly budget tracker.</p>
<h3>Set it up</h3>
<ol>
  <li>Open Google Sheets (sheets.google.com)</li>
  <li>Column A: Category (e.g., Rent, Food, Transport)</li>
  <li>Column B: Budgeted amount</li>
  <li>Column C: Actual amount spent</li>
  <li>Column D: Difference (formula: =B2-C2)</li>
</ol>
<h3>Add totals</h3>
<p>At the bottom of columns B, C, and D, use =SUM() to add everything up. Now you can see your total budget, total spending, and whether you're over or under.</p>
<h3>Add colour for clarity</h3>
<p>Select column D, click Format → Conditional formatting. Add a rule: if the value is less than 0, make the cell red (over budget). If it's more than 0, make it green (under budget). Now your budget tracker is visual and easy to read at a glance.</p>
<h3>Save and share</h3>
<p>In Google Sheets, your work saves automatically. To share with someone, click the Share button — you can choose whether they can view, comment, or edit.</p>
<p>You've just built a genuinely useful tool. This is what spreadsheets are for.</p>`,
      },
    ],
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
    content: `<h2>LinkedIn is not just for suits.</h2><p>Employers actively look for candidates there. A strong profile is one of the most powerful tools in your job search kit.</p>`,
    chapters: [
      {
        id: 'mod-3-3-ch1', title: 'Why LinkedIn Matters',
        content: `<h2>LinkedIn is not just for suits.</h2>
<p>Many people assume LinkedIn is only for corporate professionals in expensive clothes. This is wrong — and believing it means you're leaving one of the most powerful job-search tools unused.</p>
<h3>The facts</h3>
<ul>
  <li>Over 90% of recruiters use LinkedIn to find candidates</li>
  <li>Many jobs are filled through LinkedIn before they're ever advertised publicly</li>
  <li>Employers often search for candidates directly, even if they haven't applied</li>
</ul>
<h3>What LinkedIn is for</h3>
<ul>
  <li>Making yourself findable by employers</li>
  <li>Building a professional network, even from scratch</li>
  <li>Showcasing your skills and experience in a visual, searchable way</li>
  <li>Staying connected with people you've worked with</li>
</ul>
<h3>You don't need to be flashy</h3>
<p>You don't need a hundred connections or a thought leadership post. A complete, honest profile is enough to make a real difference to your job search.</p>`,
      },
      {
        id: 'mod-3-3-ch2', title: 'Setting Up Your Profile',
        content: `<h2>Your LinkedIn profile — section by section.</h2>
<h3>Profile photo</h3>
<p>Good lighting. Natural smile. Clean background. That's it. You don't need a professional photographer — a friend with a phone in good daylight is perfectly fine. Profiles with photos get far more views than those without.</p>
<h3>Background photo</h3>
<p>This is the banner image behind your profile photo. A neutral pattern or a simple image relevant to your field works well. Canva has free LinkedIn banner templates.</p>
<h3>Headline</h3>
<p>Don't just put your job title. Use the headline to say what you do and who you help. Example: <em>"Customer Service Professional | Passionate About People | Open to New Opportunities"</em></p>
<h3>About section</h3>
<p>Write in first person. Be warm, honest, and specific. Tell your story — including career breaks, if relevant, framed positively. Three paragraphs is plenty: who you are, what you bring, what you're looking for.</p>
<h3>Experience</h3>
<p>List your paid work experience, including part-time and contract roles. For each role, include 2–3 bullet points of what you achieved (not just what you did). Use numbers when possible: <em>"Managed inbox of 50+ customer queries daily."</em></p>`,
      },
      {
        id: 'mod-3-3-ch3', title: 'Making Connections',
        content: `<h2>Building your network — without the awkwardness.</h2>
<p>The word "networking" makes many people want to hide. But LinkedIn networking is much gentler than room-full-of-strangers networking. Here's how to build connections comfortably.</p>
<h3>Who to connect with</h3>
<ul>
  <li>People you already know — former colleagues, classmates, neighbours</li>
  <li>Recruiters in your target field — they often accept connections from candidates</li>
  <li>People who work at companies you'd love to work for</li>
  <li>Members of professional groups you join on LinkedIn</li>
</ul>
<h3>How to connect</h3>
<p>Always include a personal note when connecting. It doesn't need to be long: <em>"Hi Sarah, I came across your profile and I'm really interested in the work your team is doing at Greenway Housing. I'd love to connect."</em></p>
<h3>What not to do</h3>
<ul>
  <li>Don't mass-connect without personal notes — it looks spammy</li>
  <li>Don't immediately pitch yourself for a job after connecting</li>
  <li>Don't connect with someone and then never interact with anything they post</li>
</ul>`,
      },
      {
        id: 'mod-3-3-ch4', title: 'Being Active (Without the Overwhelm)',
        content: `<h2>Showing up without burning out.</h2>
<p>You don't need to post every day to get value from LinkedIn. But being occasionally visible helps enormously — people are far more likely to remember and recommend you if they see you occasionally.</p>
<h3>Three simple ways to be active</h3>
<ol>
  <li><strong>Like and comment on other people's posts</strong> — takes 30 seconds and puts your name in front of their network</li>
  <li><strong>Share an article or resource</strong> — add a sentence about why you found it interesting</li>
  <li><strong>Post an update about something you've learned</strong> — could be a module you've just finished, a skill you're developing, or a goal you've achieved</li>
</ol>
<h3>What to post</h3>
<p>Authenticity performs better than polish on LinkedIn. A genuine post about a challenge you overcame, a lesson you learned, or something you found helpful will resonate more than a perfectly crafted corporate statement.</p>
<h3>Turning on "Open to Work"</h3>
<p>LinkedIn has a feature that lets you signal to recruiters that you're open to opportunities — either publicly or just to recruiters. Go to your profile → Open to → Finding a new job. This is one of the simplest things you can do to get more attention from employers.</p>`,
      },
    ],
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
    content: `<h2>The internet is wonderful. Let's keep it that way.</h2><p>These simple habits protect your money, your identity, and your peace of mind.</p>`,
    chapters: [
      {
        id: 'mod-3-4-ch1', title: 'The Digital Landscape',
        content: `<h2>The internet is wonderful. Let's keep it that way.</h2>
<p>The internet has transformed life for the better in countless ways. It's also created new ways for people to be dishonest, manipulative, and harmful. The good news: a small number of simple habits protect you from the vast majority of online threats.</p>
<h3>The most common risks</h3>
<ul>
  <li><strong>Phishing</strong> — fake emails or messages designed to steal your login details or personal information</li>
  <li><strong>Weak passwords</strong> — accounts with easy-to-guess passwords that can be broken in seconds</li>
  <li><strong>Oversharing on social media</strong> — sharing information that criminals can use to impersonate you</li>
  <li><strong>Malware</strong> — software that gets onto your device through downloads or infected links</li>
</ul>
<h3>The reassuring truth</h3>
<p>You don't need to become a cybersecurity expert. The habits in this module address the risks that catch most people out — and they're all genuinely straightforward to adopt.</p>`,
      },
      {
        id: 'mod-3-4-ch2', title: 'Passwords & Account Security',
        content: `<h2>Your passwords are the keys to everything.</h2>
<p>Most people use the same password — or a small variation of the same password — everywhere. This means that when one account is breached (and data breaches happen constantly), every other account with the same password is instantly at risk.</p>
<h3>What makes a strong password</h3>
<ul>
  <li>Long — at least 12 characters</li>
  <li>Random — not based on your name, birthday, or pet's name</li>
  <li>Unique — different for every account</li>
</ul>
<p>The easiest way to create strong, memorable passwords is three random words: <em>purple-lamp-Tuesday</em> is far stronger than <em>P@ssw0rd1</em>.</p>
<h3>Password managers</h3>
<p>A password manager (like <strong>Bitwarden</strong> — free — or 1Password) remembers all your passwords for you. You only need to remember one master password. This means every account can have a unique, complex password without you having to remember any of them.</p>
<h3>Two-factor authentication (2FA)</h3>
<p>Turn this on everywhere that offers it. When you log in, you'll be asked for a second verification — usually a code sent to your phone. Even if someone has your password, they can't get in without your phone. Enable it on email, banking, and any account with personal information.</p>`,
      },
      {
        id: 'mod-3-4-ch3', title: 'Recognising Scams & Phishing',
        content: `<h2>How to spot a scam before it catches you.</h2>
<p>Scammers are getting better. Modern phishing emails are often indistinguishable from legitimate ones at first glance. But there are patterns, and once you know them, they become much easier to spot.</p>
<h3>Red flags in emails and messages</h3>
<ul>
  <li><strong>Urgency</strong> — "Your account will be closed in 24 hours unless you act NOW"</li>
  <li><strong>Unexpected contact</strong> — from HMRC, your bank, or a delivery company you didn't contact</li>
  <li><strong>Requests for personal information</strong> — legitimate organisations almost never ask for passwords or PINs by email</li>
  <li><strong>Suspicious links</strong> — hover over a link (on desktop) before clicking. If the web address looks odd, don't click.</li>
  <li><strong>Generic greetings</strong> — "Dear valued customer" instead of your name</li>
</ul>
<h3>The golden rule</h3>
<p>If an email or message asks you to do something — click a link, call a number, provide information — <strong>don't act on it directly</strong>. Instead, go to the organisation's official website by typing the address yourself, and contact them from there.</p>
<h3>If you think you've been scammed</h3>
<p>Act quickly: change your passwords, contact your bank, and report it to Action Fraud (actionfraud.police.uk).</p>`,
      },
      {
        id: 'mod-3-4-ch4', title: 'Social Media & Privacy',
        content: `<h2>What you share — and who sees it.</h2>
<p>Social media is valuable, fun, and genuinely connective. It's also a place where sharing too much can create risks — from criminal exploitation of personal information to professional consequences of old posts.</p>
<h3>Privacy settings — audit them now</h3>
<ul>
  <li>Facebook: Settings → Privacy → Who can see your future posts? Set to Friends (not Public)</li>
  <li>Instagram: Account → Privacy → Private account</li>
  <li>Twitter/X: Settings → Privacy and safety → Protect your posts</li>
</ul>
<h3>What not to share publicly</h3>
<ul>
  <li>Your home address or postcode</li>
  <li>When you're on holiday (announces your home is empty)</li>
  <li>Your full date of birth</li>
  <li>Financial information of any kind</li>
  <li>Photos of children without thinking carefully about who can see them</li>
</ul>
<h3>Google yourself</h3>
<p>Search your own name in Google. What comes up? Many employers do this. If there's anything public that you wouldn't want an employer to see, adjust your privacy settings so it's not visible.</p>
<h3>Your digital footprint</h3>
<p>Everything you post online leaves a trace. The good news: you can shape that trace by choosing what to share, what to keep private, and what to remove.</p>`,
      },
    ],
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

// ── Events ────────────────────────────────────────────────────────────────────
export const events = [
  {
    id: 'evt-1',
    title: 'CV Writing Workshop',
    date: '2026-06-05',
    time: '10:00',
    location: 'Online (Zoom)',
    host: 'Alice M.',
    type: 'workshop',
    description: 'A hands-on session covering everything you need to write a confident, modern CV — from structure and layout to how to frame a career break. Bring your current CV (or a blank page) and leave with something you can send tomorrow.',
    capacity: 20,
    registered: 14,
    registrations: [],
  },
  {
    id: 'evt-2',
    title: 'Interview Confidence Masterclass',
    date: '2026-06-12',
    time: '14:00',
    location: 'Online (Zoom)',
    host: 'Priya K.',
    type: 'masterclass',
    description: 'Learn how to answer the toughest interview questions with calm and clarity. We\'ll cover the STAR method, body language, managing nerves, and how to handle tricky questions like "Why did you leave your last job?" — with live practice and peer feedback.',
    capacity: 16,
    registered: 9,
    registrations: [],
  },
  {
    id: 'evt-3',
    title: 'Networking Breakfast — Manchester',
    date: '2026-06-18',
    time: '09:00',
    location: 'Manchester (Northern Quarter Café)',
    host: 'Elio Team',
    type: 'in-person',
    description: 'A relaxed, in-person morning for Elio members in Manchester. Chat to women at similar stages of their career journey, swap tips, and leave with a few new connections and a lot of encouragement. Breakfast included.',
    capacity: 25,
    registered: 17,
    registrations: [],
  },
  {
    id: 'evt-4',
    title: 'Money & Benefits Q&A',
    date: '2026-06-24',
    time: '11:00',
    location: 'Online (Zoom)',
    host: 'Citizens Advice Partnership',
    type: 'q-and-a',
    description: 'Got questions about benefits, tax credits, Universal Credit, or budgeting on a lower income? Bring them here. An adviser from Citizens Advice will answer your questions live in a safe, judgement-free environment.',
    capacity: 30,
    registered: 21,
    registrations: [],
  },
  {
    id: 'evt-5',
    title: 'LinkedIn Profile Review Session',
    date: '2026-07-03',
    time: '13:00',
    location: 'Online (Zoom)',
    host: 'Rachel T.',
    type: 'workshop',
    description: 'Share your LinkedIn profile (or build one from scratch) and get live, personalised feedback. We\'ll look at photos, headlines, About sections, and experience — and leave you with a profile that makes recruiters want to reach out.',
    capacity: 12,
    registered: 7,
    registrations: [],
  },
];
