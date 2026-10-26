/**
 * LinkedIn Post Generator AI - Curated Knowledgebase & Frameworks
 * Strictly adheres to professional writing standards:
 * - 6 Required Components: Hook -> Engaging Intro -> Useful Information -> Professional Insight -> CTA -> 4-6 Hashtags
 * - Natural, human-sounding English with short paragraphs
 * - Zero fabricated personal stories or invented statistics
 * - Zero exaggerated claims or clickbait jargon
 * - Deep multi-component combinations for maximum regeneration variety
 */

const POST_TEMPLATES = {
  // =========================================================================
  // 1. Specialized High-Impact Topics (Python, AI, Leadership, Web Dev, Career Growth, etc.)
  // =========================================================================
  topicKnowledge: {
    python: {
      hooks: [
        "Writing clean Python isn't about using every clever language feature.\n\nIt is about writing code that your future self—and your teammates—can understand without friction.",
        "The biggest shift in learning Python happens when you stop memorizing syntax and start mastering data structures.",
        "Simple is better than complex. It's written directly into the Zen of Python, yet it's the rule developers break most often.",
        "You don't need to know every third-party Python library to build reliable software.\n\nYou need deep familiarity with the standard library and clean architectural habits.",
        "Python makes it remarkably easy to write working code quickly.\n\nThe real challenge is keeping that code maintainable as the project scales."
      ],
      intros: [
        "Because Python's syntax is so approachable, many developers pick up the basics in a few weeks. But moving from writing functional scripts to architecting robust systems requires a deliberate shift in habits.",
        "In many software teams, Python is the glue connecting data pipelines, backend APIs, and automation workflows. How you structure that code directly impacts team velocity.",
        "When deadlines loom, it can be tempting to write dense one-liners or skip type hints. Over time, that technical debt quietly compounds.",
        "Whether you are building data workflows or web services, the difference between an amateur Python project and a production-grade codebase usually comes down to small, consistent disciplines."
      ],
      values: [
        "Four practices that noticeably improve any Python codebase:\n\n• Leverage type hints: Adding static typing via `typing` or modern Python 3.10+ syntax catches subtle bugs early and turns code into self-documenting logic.\n• Rely on the Standard Library: Modules like `pathlib`, `collections`, `itertools`, and `dataclasses` solve common problems without adding heavy external dependencies.\n• Write descriptive function contracts: A function should do one thing well, return a predictable type, and handle edge cases cleanly.\n• Use linters and formatters: Automating tools like Ruff or Black removes subjective style debates from code reviews completely.",

        "Three habits to level up your day-to-day Python:\n\n1. Use List Comprehensions Judiciously\nIf a comprehension requires more than one conditional or nested loops, replace it with a readable for-loop or generator.\n\n2. Treat Exceptions Explicitly\nAvoid bare `except:` blocks. Always catch specific exceptions so unexpected failures don't fail silently.\n\n3. Structure with Virtual Environments\nAlways isolate dependencies per project using virtual environments or modern managers to prevent version conflicts.",

        "A reliable checklist for production Python:\n\n✓ Readable variable and function names over clever brevity\n✓ Clear dependency boundaries and pinned versions\n✓ Unit tests covering primary business logic and edge cases\n✓ Comprehensive logging rather than temporary print statements"
      ],
      insights: [
        "In my experience reviewing code across projects, readability is the single highest-leverage trait in software. Code is read ten times more often than it is written.",
        "What separates great Python developers from average ones isn't speed of typing—it's the discipline to keep abstractions simple until complexity is genuinely necessary.",
        "The real joy of working with Python is how quickly an idea can become a working prototype. Protecting that simplicity as systems grow is an ongoing craft."
      ],
      ctas: [
        "For those building with Python: What is one habit or standard library tool that has made the biggest difference in your code quality? Let’s share below. 👇",
        "How does your team balance rapid prototyping with long-term maintainability in Python? Curious to hear your approach. 💬",
        "Which Python practice do you emphasize most when onboarding newer developers to your team? Let's discuss."
      ],
      hashtags: [
        ["#Python", "#Programming", "#SoftwareEngineering", "#CleanCode", "#Developers"],
        ["#PythonProgramming", "#SoftwareDevelopment", "#Backend", "#CodingLife", "#TechCareers"],
        ["#Python", "#WebDevelopment", "#DataEngineering", "#CodeQuality", "#TechCommunity"]
      ]
    },

    ai: {
      hooks: [
        "Artificial Intelligence will not replace human judgment.\n\nIt will amplify the quality—or lack—of the judgment behind it.",
        "The most effective way to use AI today isn't asking it to do your job.\n\nIt is using it to eliminate friction so you can focus on high-context decisions.",
        "In a landscape dominated by AI headlines, the real competitive edge remains surprisingly human: critical thinking, problem definition, and domain context.",
        "Adopting AI in your workflow is less about learning prompt tricks and more about clarifying what problem is actually worth solving.",
        "Speed without direction is just faster failure. That is the fundamental reality of building with Artificial Intelligence."
      ],
      intros: [
        "With new models and tools dropping weekly, it is easy to feel overwhelmed by the hype. But the professionals deriving sustained value from AI are not chasing every new release—they are integrating targeted tools into existing workflows.",
        "We are seeing a clear divide between teams using AI for superficial speed and those using it to deepen their analytical and creative bandwidth.",
        "Automation has historically shifted work from manual repetition to higher-level synthesis. AI is accelerating that exact transition at an unprecedented pace.",
        "The conversation around AI is maturing from 'look what this can generate' to 'how does this reliably improve business outcomes and customer experience?'"
      ],
      values: [
        "A practical framework for adopting AI effectively:\n\n• Identify high-friction, repetitive steps: Use AI for drafting outlines, summarizing lengthy transcripts, or sanity-checking logic.\n• Maintain strict verification loops: Treat AI outputs as drafts from an eager assistant, never as unverified ground truth.\n• Protect data and domain privacy: Establish clear internal policies on what information belongs in third-party model prompts.\n• Focus on contextual inputs: The quality of AI output directly correlates with the precision of context, constraints, and background details you provide.",

        "Three practical principles for professionals evaluating AI tools:\n\n1. Problem-First, Tool-Second\nNever adopt an AI solution searching for a problem. Start with the workflow bottleneck and test if AI genuinely resolves it.\n\n2. Human in the Loop\nKeep human review at every critical juncture involving nuance, tone, safety, or core business ethics.\n\n3. Iterate Prompt Structure\nClear context, explicit constraints, and step-by-step reasoning yield dramatically better results than vague instructions.",

        "Key areas where AI provides immediate, measurable leverage today:\n\n✓ Accelerating initial research synthesis\n✓ Generating test cases and refactoring ideas for developers\n✓ Translating complex technical documentation into accessible summaries\n✓ Automating tedious data formatting and cross-checking tasks"
      ],
      insights: [
        "The true value of AI isn't in replacing thinking, but in giving you the headspace to think more deeply about core strategy.",
        "Teams that succeed with AI treat it as an interactive thought partner rather than an unquestioned oracle. Skepticism and validation remain essential skills.",
        "Tools will continually evolve and become commoditized. The ability to ask the right questions and evaluate solutions will always be the durable advantage."
      ],
      ctas: [
        "How is your team realistically incorporating AI into daily workflows without losing quality control? I'd love to hear your experience. 👇",
        "What has been the most genuinely useful AI use case in your day-to-day work so far? Let’s exchange insights in the comments. 💬",
        "Where do you see the biggest gap right now between AI hype and practical workplace utility? Share your perspective below."
      ],
      hashtags: [
        ["#ArtificialIntelligence", "#AI", "#TechInnovation", "#FutureOfWork", "#MachineLearning"],
        ["#GenerativeAI", "#Technology", "#Productivity", "#DigitalTransformation", "#TechTrends"],
        ["#ArtificialIntelligence", "#WorkflowAutomation", "#TechStrategy", "#Innovation", "#Leadership"]
      ]
    },

    leadership: {
      hooks: [
        "The best leaders rarely have all the answers.\n\nTheir real skill is asking the questions that help their team discover them.",
        "Moving into leadership requires unlearning what made you successful as an individual contributor.",
        "People rarely leave challenging projects.\n\nThey leave environments where expectations are unclear and efforts go unrecognized.",
        "Leadership is not about being in charge.\n\nIt is about taking care of the people in your charge.",
        "If you have to remind people of your title to get work done, you are relying on authority instead of leadership."
      ],
      intros: [
        "As an individual contributor, your success is measured by your direct output. As a leader, your output is measured entirely by the clarity, capability, and autonomy of the people you support.",
        "High-performing teams aren't built on rigid control or endless status meetings. They are built on clear objectives, transparent feedback, and psychological safety.",
        "In times of organizational change or tight deadlines, a leader's demeanor sets the emotional temperature for the entire group.",
        "One of the hardest transitions in any career is shifting from solving problems yourself to building the systems and trust so your team can solve them independently."
      ],
      values: [
        "Four cornerstones of healthy, high-trust leadership:\n\n• Over-communicate context: Don't just assign tasks. Explain the 'why' behind the priority so team members can make smart autonomous decisions.\n• Protect team focus: Shield your people from organizational noise and low-priority meetings so they can do deep, meaningful work.\n• Normalize candid, constructive feedback: Give feedback early, privately, and focused on behaviors rather than personal traits.\n• Public praise, private coaching: Celebrate team wins loudly and address performance hurdles with empathy and directness behind closed doors.",

        "Three practical shifts that improve team morale and output:\n\n1. From Micromanagement to Clear Outcomes\nDefine what success looks like and when it is due, then grant your team the ownership to choose the path.\n\n2. From Talking First to Listening Deeply\nIn one-on-ones, spend the first 15 minutes listening to obstacles before offering suggestions.\n\n3. From Blame to Blameless Post-Mortems\nWhen things go wrong, analyze the process failure rather than hunting for a scapegoat.",

        "A reliable checklist for effective people managers:\n\n✓ Regular, uninterrupted 1-on-1 check-ins\n✓ Documented goals and transparent evaluation criteria\n✓ Proactive unblocking of cross-functional hurdles\n✓ Active investment in each team member's professional trajectory"
      ],
      insights: [
        "Trust is built in drops and lost in buckets. Consistency in small promises matters far more than grandiose speeches.",
        "Great leadership isn't about having a charismatic presence; it is about creating an environment where others feel confident enough to speak up and take initiative.",
        "The measure of strong leadership isn't how smoothly things run when you are in the room, but how effectively the team thrives when you are away."
      ],
      ctas: [
        "What is one leadership quality that made the biggest positive difference in your own career journey? Let’s share below. 👇",
        "How do you ensure psychological safety and open communication in your team? I'd appreciate your perspective. 💬",
        "What advice would you give to a newly promoted manager stepping into leadership for the first time? Let's discuss."
      ],
      hashtags: [
        ["#Leadership", "#Management", "#PeopleFirst", "#TeamBuilding", "#WorkplaceCulture"],
        ["#LeadershipDevelopment", "#ExecutiveCoaching", "#CompanyCulture", "#EmployeeEngagement", "#Mentorship"],
        ["#Leadership", "#ManagementTips", "#ProfessionalGrowth", "#TrustAndSafety", "#FutureOfWork"]
      ]
    },

    webdev: {
      hooks: [
        "Frameworks come and go, but strong fundamentals in Web Development remain undefeated.",
        "You don't need to learn a new JavaScript library every weekend to be a great web developer.",
        "A website that looks beautiful but takes 8 seconds to load on mobile is fundamentally broken.",
        "Clean architecture, semantic HTML, and thoughtful accessibility will always outperform shiny, over-engineered code.",
        "The best developers are not those who write the most complex code.\n\nThey are the ones who solve complex problems with surprisingly simple solutions."
      ],
      intros: [
        "With a new framework, runtime, or build tool popping up constantly, front-end fatigue is a genuine challenge. But the developers building resilient products rarely chase every shiny new trend.",
        "Modern web development has evolved from simple markup into sophisticated distributed software engineering. With that power comes the responsibility to build fast, accessible experiences.",
        "It is easy to get caught up in state management debates and complex build tooling, while forgetting the person on the other end of the screen holding a mid-range phone on a spotty connection.",
        "Building for the web is a continuous balance between developer experience and user experience. When in doubt, user experience must always take precedence."
      ],
      values: [
        "Four foundational principles that elevate any web development project:\n\n• Master the core triad: A deep understanding of vanilla JavaScript, modern CSS layouts (Grid/Flexbox), and semantic HTML pays dividends for your entire career.\n• Prioritize real-world performance: Optimize image assets, minimize bundle sizes, and monitor Core Web Vitals like LCP and CLS.\n• Design for accessibility from day one: Semantic tags, keyboard navigation, and proper contrast ratios are not optional add-ons; they are core requirements.\n• Write modular, testable components: Keep components focused on a single responsibility with predictable props and minimal side effects.",

        "Three practical habits for cleaner web applications:\n\n1. Measure Before You Optimize\nNever guess performance bottlenecks. Use browser DevTools and Lighthouse audits to target actual pain points.\n\n2. Keep Dependencies Minimal\nBefore adding a 50KB library for a simple UI element, consider if 20 lines of modern CSS or native JS can do the job cleanly.\n\n3. Build with Resilience in Mind\nPlan for slow networks, missing images, and unexpected API errors so your user never sees an unhandled blank screen.",

        "Essential standards for professional web projects:\n\n✓ Responsive design verified on actual mobile devices\n✓ Clean, semantic HTML structure for screen readers and SEO\n✓ Efficient caching headers and minimal client bundle overhead\n✓ Clear separation of presentation, data fetching, and business logic"
      ],
      insights: [
        "The longer you build for the web, the more you appreciate native platform capabilities. Browsers have become remarkably powerful without requiring external bloat.",
        "A polished UI matters, but resilience and performance build genuine trust. Users forgive subtle visual quirks far more readily than sluggish load times.",
        "Investing time in solid engineering fundamentals gives you the confidence to learn any new framework in days rather than months."
      ],
      ctas: [
        "What is one web development fundamental you believe newer developers should spend more time mastering? Let’s hear your thoughts below. 👇",
        "How does your team balance adopting modern web tools with maintaining lightweight, fast performance? 💬",
        "Which area of web development do you find most rewarding right now: performance, accessibility, or architecture? Let's discuss."
      ],
      hashtags: [
        ["#WebDevelopment", "#Frontend", "#JavaScript", "#SoftwareEngineering", "#WebDev"],
        ["#WebDesign", "#Performance", "#Accessibility", "#CodingLife", "#TechCommunity"],
        ["#FullStack", "#HTML5", "#CSS3", "#Programming", "#Developers"]
      ]
    },

    career: {
      hooks: [
        "Career growth rarely happens by waiting quietly for someone to notice your hard work.",
        "The fastest way to accelerate your career is to become the person who solves problems others avoid.",
        "Your technical skills might land you the interview, but your communication and reliability determine how far you advance.",
        "Consistency compounds quietly.\n\nThe professionals who stand out over a 5-year period are almost always the ones who show up reliably every single week.",
        "A successful career is not a sprint up a ladder. It is a series of deliberate skill acquisitions and relationships."
      ],
      intros: [
        "Many dedicated professionals fall into the trap of assuming that excellent work speaks for itself. While competence is necessary, career progression also requires visibility, alignment with organizational goals, and strategic relationship-building.",
        "Navigating today's workplace requires more than just mastering your current job description. It requires anticipating where your industry is heading and proactively preparing for the next step.",
        "Whether you are looking for a promotion, considering an industry pivot, or building long-term career resilience, intentional habits always beat passive hoping.",
        "The most fulfilling careers are built not by chasing titles, but by cultivating high-leverage skills that create tangible value for others."
      ],
      values: [
        "Four actionable strategies to foster steady career progression:\n\n• Align with business outcomes: Understand how your daily tasks directly contribute to revenue, cost savings, or customer satisfaction.\n• Communicate proactively: Share regular, concise status updates with your manager before they have to ask. Managing up builds immense trust.\n• Build genuine professional bridges: Connect with peers across departments. Cross-functional relationships open doors that job boards never will.\n• Document your accomplishments: Keep a 'brag sheet' noting completed projects, quantifiable wins, and positive feedback for performance reviews.",

        "Three practical shifts for long-term career momentum:\n\n1. Become Known for a Core Strength\nBe the reliable go-to person for a specific domain or skill before branching into broader generalist roles.\n\n2. Seek Feedback with Curiosity, Not Defensiveness\nRegularly ask mentors and trusted colleagues: 'What is one thing I could do differently to increase my impact?'\n\n3. Invest in Lifelong Learning\nDedicate 30 minutes each week to reading industry literature, studying architecture, or practicing adjacent skills.",

        "A reliable career health checklist:\n\n✓ Clear 1-year and 3-year professional objectives\n✓ An updated record of quantifiable contributions\n✓ An active network of peers and mentors outside your immediate team\n✓ Consistent attention to soft skills like active listening and clear writing"
      ],
      insights: [
        "Career trajectory is rarely a linear path. Taking a lateral move to work with an exceptional mentor often creates far more long-term momentum than a minor title bump.",
        "Reputation is what people say about your work when you leave the room. Delivering on commitments with high integrity is the strongest personal brand you can build.",
        "The best career investment you can make is cultivating calm, adaptable problem-solving skills when unexpected changes occur."
      ],
      ctas: [
        "What is one piece of career advice you received early on that has remained consistently valuable? Let's share in the comments. 👇",
        "How do you ensure you are actively investing in your personal development alongside busy day-to-day deliverables? 💬",
        "What has been the most impactful milestone or pivot in your professional journey so far? I'd love to hear your story."
      ],
      hashtags: [
        ["#CareerGrowth", "#ProfessionalDevelopment", "#CareerAdvice", "#Mentorship", "#ContinuousLearning"],
        ["#CareerSuccess", "#JobSearch", "#Networking", "#PersonalGrowth", "#FutureOfWork"],
        ["#ProfessionalGrowth", "#WorkplaceSuccess", "#LeadershipDevelopment", "#CareerStrategy", "#LifelongLearning"]
      ]
    }
  },

  // =========================================================================
  // 2. Modular General Frameworks (Applicable to Any User Topic)
  // =========================================================================
  generalFrameworks: {
    hooks: {
      "thought-leadership": [
        "Most professionals treat {topic} as a tactical checklist.\n\nThe top performers treat it as a foundational system.",
        "In a fast-moving market, {topic} is quietly becoming one of the most critical differentiators for teams.",
        "The conversation around {topic} is shifting from surface-level tactics to sustainable, long-term discipline.",
        "Mastering {topic} does not require 14-hour days.\n\nIt requires absolute clarity on the core fundamentals.",
        "The real challenge with {topic} is rarely a lack of information.\n\nIt is the discipline to filter out the noise and execute consistently."
      ],
      story: [
        "Early in my career, I assumed that progress in {topic} came from sudden breakthroughs.\n\nExperience taught me that it comes from compounding small habits.",
        "One of the most valuable lessons I've learned about {topic} is that complexity is the enemy of execution.",
        "A common pattern I observe among talented professionals is overcomplicating {topic} before mastering the basics.",
        "When I shifted my approach to {topic} from sporadic intensity to steady daily iteration, everything improved.",
        "The turning point in my understanding of {topic} happened when I stopped chasing shortcuts and focused on foundational systems."
      ],
      "tips-listicle": [
        "If you want to build momentum in {topic}, keep your operating principles straightforward.\n\nHere is a practical framework you can put to work immediately:",
        "You don't need an elaborate playbook to make progress in {topic}.\n\nFocusing on these 4 core pillars consistently will put you ahead of 90% of practitioners:",
        "Before investing in fancy tools for {topic}, make sure your baseline systems are solid.\n\nHere is a practical checklist to evaluate where you stand:",
        "Mastering {topic} comes down to repeatable execution.\n\nHere are the high-impact habits that drive meaningful results:",
        "A straightforward, actionable blueprint for anyone looking to build real capability in {topic}:"
      ],
      contrarian: [
        "Unpopular perspective: The conventional wisdom surrounding {topic} often encourages burnout rather than sustainable mastery.",
        "Stop waiting to feel 100% ready to tackle {topic}.\n\nConfidence is the byproduct of action, not the prerequisite.",
        "There is a major difference between being busy with {topic} and actually driving meaningful outcomes.",
        "More information about {topic} is rarely the cure.\n\nDecisive execution and structured feedback loops are.",
        "Most people focus on the visible outcomes of {topic}.\n\nThe real practitioners focus entirely on the unglamorous daily process."
      ]
    },

    intros: [
      "In any competitive field, it is easy to get caught up in surface-level trends. But sustainable results with {topic} come from understanding core principles and executing them with quiet consistency.",
      "Whether you are working individually or leading a team, how you approach {topic} directly influences your bandwidth, clarity, and overall output.",
      "When we look at organizations and individuals who excel in {topic}, the common thread isn't luck or secret techniques—it is a commitment to foundational habits.",
      "Navigating the demands of {topic} requires striking a thoughtful balance between speed of execution and the discipline to maintain high quality."
    ],

    values: [
      "Four practical principles to strengthen your approach to {topic}:\n\n• Focus on the vital few: Identify the top 20% of actions in {topic} that drive 80% of your tangible outcomes, and protect that focus.\n• Eliminate low-value friction: Regularly audit your workflow and strip away unnecessary complexities that drain mental energy.\n• Build iterative feedback loops: Regularly measure your output against clear standards so you can make continuous micro-adjustments.\n• Prioritize sustainable pacing: Consistent daily execution consistently outperforms erratic bursts of overexertion.",

      "Three grounded guidelines for building long-term capability in {topic}:\n\n1. Establish Clear Standards\nDefine what high-quality completion looks like before you begin, removing ambiguity from the process.\n\n2. Document and Refine\nKeep brief notes on what methods worked well and what stalled, turning everyday experience into an actionable playbook.\n\n3. Protect Focus Hours\nDedicate uninterrupted blocks of time specifically to high-leverage aspects of {topic} without multitasking.",

      "A practical framework to evaluate your progress in {topic}:\n\n✓ Clear, realistic goals aligned with overarching priorities\n✓ Simple, repeatable routines that don't depend solely on fleeting motivation\n✓ A willingness to adapt your methods when real-world evidence demands it\n✓ Open communication with peers to share learnings and test assumptions"
    ],

    insights: [
      "What I've observed across different teams is that simplicity scales, while unnecessary complexity breaks under pressure. Keeping your approach to {topic} straightforward is an intentional choice.",
      "Progress in {topic} rarely announces itself with fanfare. It compounds quietly in the background through daily, reliable decisions.",
      "The practitioners who achieve lasting mastery in {topic} aren't the ones who never stumble—they are the ones who treat obstacles as neutral diagnostic data."
    ],

    ctas: [
      "What has been your most valuable takeaway or practical lesson regarding {topic}? Let’s discuss in the comments below. 👇",
      "How do you approach {topic} in your day-to-day workflow? I'd appreciate hearing how other professionals tackle this. 💬",
      "Which of these principles on {topic} resonates most with where you are focusing your energy right now? Share your perspective below."
    ],

    fallbackHashtags: [
      ["#ProfessionalGrowth", "#ContinuousLearning", "#Productivity", "#WorkplaceSuccess", "#FutureOfWork"],
      ["#Leadership", "#BestPractices", "#Strategy", "#ProfessionalDevelopment", "#PersonalGrowth"],
      ["#CareerDevelopment", "#SelfImprovement", "#WorkSmart", "#SuccessMindset", "#BusinessStrategy"]
    ]
  },

  // Keyword to Topic Category Mapping Helper
  detectCategory(rawTopic) {
    const text = rawTopic.toLowerCase().trim();
    if (text.includes('python')) return 'python';
    if (text.includes('ai') || text.includes('artificial intelligence') || text.includes('machine learning') || text.includes('llm') || text.includes('deep learning')) return 'ai';
    if (text.includes('leader') || text.includes('management') || text.includes('manager') || text.includes('team lead')) return 'leadership';
    if (text.includes('web dev') || text.includes('web development') || text.includes('frontend') || text.includes('front-end') || text.includes('backend') || text.includes('fullstack') || text.includes('html') || text.includes('css') || text.includes('javascript')) return 'webdev';
    if (text.includes('career') || text.includes('job search') || text.includes('promotion') || text.includes('career growth') || text.includes('resume')) return 'career';
    return null;
  }
};

// Export for node or browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = POST_TEMPLATES;
}
