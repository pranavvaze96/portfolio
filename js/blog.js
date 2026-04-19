/* ═══════════════════════════════════════════════════════════════════
   BLOG DATA
═══════════════════════════════════════════════════════════════════ */
const posts = [
  {
    id: 'ai-tools-swot',
    title: 'I Spent a Month Testing 9 AI Tools. Here\'s My Honest SWOT.',
    category: 'AI Tools',
    date: 'April 2026',
    readTime: '7 min',
    excerpt: 'Claude, Google AI Studio, Figma Make, Higgsfield, NotebookLM, Whispr Flow, ElevenLabs, Emergent, and Suno — the strengths that genuinely impressed me, the weaknesses nobody warns you about, and the threats worth taking seriously.',
    gradient: 'linear-gradient(145deg, #1e1e2e 0%, #2d1b69 50%, #06B6D4 100%)',
    content: `
      <p class="post-subtitle">Claude, Google AI Studio, Figma Make, Higgsfield, NotebookLM, Whispr Flow, ElevenLabs, Emergent, and Suno — the strengths that genuinely impressed me, the weaknesses nobody warns you about, and the threats worth taking seriously.</p>

      <p>There's a certain kind of chaos that happens when you give yourself permission to just try everything. One minute you're generating a full song on Suno, the next you're watching Higgsfield turn a two-line prompt into something that looks like it belongs in a film reel. At some point I had nine AI tools open in different tabs and genuinely forgot which one I was supposed to be focused on.</p>
      <p>So I stepped back and did what any slightly overwhelmed person does — I made a framework. Here's my honest SWOT breakdown of the tools I've been living inside: Claude, Google AI Studio, Figma Make, Higgsfield, NotebookLM, Whispr Flow, ElevenLabs, Emergent, and Suno.</p>

      <h3 class="swot-glance-heading">SWOT At a Glance</h3>
      <p>Before diving into the detail, here's the full picture organised by quadrant.</p>

      <div class="swot-table">
        <div class="swot-cell swot-strengths">
          <div class="swot-header">STRENGTHS</div>
          <div class="swot-item"><strong>Genuinely impressive reasoning</strong><p>Claude handles nuanced, multi-step problems with depth that still surprises. Great for drafts, code, and analysis.</p></div>
          <div class="swot-item"><strong>Voice &amp; audio that sounds human</strong><p>ElevenLabs and Whispr Flow make voice input/output feel natural — not robotic. Transcription is scarily accurate.</p></div>
          <div class="swot-item"><strong>Research you can trust</strong><p>NotebookLM grounds responses in your actual documents. No hallucinations about sources you didn't upload.</p></div>
          <div class="swot-item"><strong>Creativity on demand</strong><p>Suno generates full tracks in minutes. Higgsfield turns prompts into cinematic video. The creative barrier is essentially gone.</p></div>
        </div>
        <div class="swot-cell swot-weaknesses">
          <div class="swot-header">WEAKNESSES</div>
          <div class="swot-item"><strong>The context window problem</strong><p>Long conversations drift. AI tools forget earlier context, repeat themselves, or lose the thread on complex projects.</p></div>
          <div class="swot-item"><strong>Fragmented workflow</strong><p>Nine tools means nine tabs, nine logins, nine pricing tiers. There's no single hub that does everything well — yet.</p></div>
          <div class="swot-item"><strong>Inconsistent output quality</strong><p>Figma Make and Emergent can nail it one moment and miss entirely the next. Reproducing great results is hard.</p></div>
          <div class="swot-item"><strong>Steep learning curve in disguise</strong><p>Prompting well is a real skill. Google AI Studio rewards deep knowledge of parameters most beginners never touch.</p></div>
        </div>
        <div class="swot-cell swot-opportunities">
          <div class="swot-header">OPPORTUNITIES</div>
          <div class="swot-item"><strong>The solo creator is now a studio</strong><p>One person with Suno + Higgsfield + ElevenLabs can produce music videos with professional polish. The leverage is extraordinary.</p></div>
          <div class="swot-item"><strong>Compounding tools = compounding value</strong><p>Chain Claude's writing with ElevenLabs voice and Higgsfield visuals and you have a content pipeline that would've needed a team.</p></div>
          <div class="swot-item"><strong>Apps without engineers</strong><p>Emergent and Figma Make are opening real software development to people who just have ideas. Execution is no longer the bottleneck.</p></div>
          <div class="swot-item"><strong>Learning deeply at your own pace</strong><p>NotebookLM as a study partner for your own notes changes how people process information — like having a tutor inside your documents.</p></div>
        </div>
        <div class="swot-cell swot-threats">
          <div class="swot-header">THREATS</div>
          <div class="swot-item"><strong>Skill atrophy is real</strong><p>When AI writes your first draft every time, the muscle for starting from scratch weakens. Dependence creeps in quietly.</p></div>
          <div class="swot-item"><strong>Deepfake and misinformation potential</strong><p>ElevenLabs + Higgsfield together can clone voices and faces convincingly. The same power that's fun is genuinely dangerous at scale.</p></div>
          <div class="swot-item"><strong>Copyright in murky waters</strong><p>Suno's music, Higgsfield's video, and AI-generated writing all sit in unsettled legal territory. What you make today may be disputed tomorrow.</p></div>
          <div class="swot-item"><strong>Tool churn and subscription fatigue</strong><p>These tools evolve fast — and charge monthly. The one you build a workflow around can pivot, get acquired, or price you out overnight.</p></div>
        </div>
      </div>

      <h2 class="h2-strengths">Strengths — The Stuff That Actually Blew My Mind</h2>

      <h3>Genuinely impressive reasoning (Claude)</h3>
      <p>The reasoning quality on Claude is something I keep coming back to. Not just "it answered my question," but the kind of back-and-forth where it pushes back on your assumptions, catches contradictions, and builds complex documents that hold together. It's the tool I trust most for anything that requires actual thinking.</p>

      <h3>A research companion you can trust (NotebookLM)</h3>
      <p>NotebookLM quietly became my favourite tool in the stack. Upload your notes, PDFs, or articles, and it talks to you about your own material. No hallucinating sources that don't exist. No generic summaries. It's grounded, which is rare — and invaluable when accuracy matters.</p>

      <blockquote class="pull-quote"><p>NotebookLM talks to you about your own material. No hallucinating sources that don't exist. It's grounded, which is rare.</p></blockquote>

      <h3>Voice and audio that sounds human (ElevenLabs + Whispr Flow)</h3>
      <p>ElevenLabs and Whispr Flow together changed how I work. Voice transcription that's accurate enough to dictate full documents. Voice output that doesn't make you cringe. These sound like small things until you've actually used them and realise you haven't opened a keyboard in an hour.</p>

      <h3>Creativity on demand (Suno + Higgsfield)</h3>
      <p>Suno produces complete, stylised music tracks. Higgsfield generates cinematic video that would've required a production team two years ago. The barrier to making things is essentially zero now — and that's both exciting and slightly unnerving.</p>

      <h2 class="h2-weaknesses">Weaknesses — Let's Be Real</h2>

      <h3>The context window problem (all tools)</h3>
      <p>The biggest frustration? Long conversations drift. AI tools forget earlier context, repeat themselves, or lose the thread on complex, multi-stage projects. The longer your session, the more you feel the seams. It's the single biggest limitation that power users hit.</p>

      <h3>No connective tissue (workflow fragmentation)</h3>
      <p>Nine tools, nine accounts, nine pricing tiers. You end up spending mental energy just managing your toolkit instead of creating. The ideal — a single hub that does everything well — doesn't exist yet.</p>

      <h3>Inconsistent output quality (Figma Make + Emergent)</h3>
      <p>Figma Make and Emergent can generate something genuinely impressive, and then on the very next prompt produce something completely off. You can't always figure out why, which makes building reliable, repeatable workflows tricky.</p>

      <blockquote class="pull-quote"><p>Prompting is a real skill. Google AI Studio rewards people who understand temperature settings, system prompts, and model selection. The interface looks approachable, but great results take practice.</p></blockquote>

      <h3>A steep learning curve disguised as simplicity (Google AI Studio)</h3>
      <p>Google AI Studio looks approachable, but getting great results consistently takes real practice. Temperature settings, system prompts, model selection — the surface is simple, but the depth rewards those who invest time in learning it properly.</p>

      <h2 class="h2-opportunities">Opportunities — Where This Gets Exciting</h2>

      <h3>The solo creator is now a studio</h3>
      <p>This is not hyperbole. One person with Suno, Higgsfield, and ElevenLabs can produce a music video with professional polish. Chain Claude's writing with ElevenLabs narration and Higgsfield visuals and you have a content pipeline that would've required a 3-person team not long ago. The leverage is almost uncomfortable.</p>

      <blockquote class="pull-quote"><p>One person with Suno, Higgsfield, and ElevenLabs can produce a music video with professional polish. The leverage is almost uncomfortable.</p></blockquote>

      <h3>Apps without engineers (Emergent + Figma Make)</h3>
      <p>These tools are doing something more profound than just making design easier — they're removing execution as a bottleneck. If you have an idea for an app or a product, the gap between "I have this idea" and "I have this thing" is shrinking fast. That's not just a convenience; it's a shift in who gets to build things.</p>

      <h3>Learning deeply at your own pace (NotebookLM)</h3>
      <p>NotebookLM as a study partner for your own notes changes how people process information. Upload a dense academic paper, your personal research notes, a podcast transcript — then have a conversation with it. It's like having a tutor inside your documents, available at any hour.</p>

      <h2 class="h2-threats">Threats — The Part Worth Taking Seriously</h2>

      <h3>Skill atrophy is real</h3>
      <p>The dependence thing creeps in quietly. When every first draft starts with AI, the muscle for starting from scratch weakens. I noticed it around week three — I'd open a blank doc and immediately feel the pull to prompt something. That's worth paying attention to, especially for people who write or create professionally.</p>

      <h3>Deepfake and misinformation potential</h3>
      <p>ElevenLabs and Higgsfield together can clone a voice and generate realistic video. The same capabilities that make them exciting to experiment with are genuinely concerning at scale. The tools themselves aren't the problem — but the potential for misuse is not hypothetical, and it's moving faster than the regulation around it.</p>

      <blockquote class="pull-quote pull-quote--threat"><p>The same capabilities that make ElevenLabs and Higgsfield exciting to experiment with are genuinely concerning at scale. The potential for misuse is not hypothetical.</p></blockquote>

      <h3>Copyright in murky waters</h3>
      <p>Suno's music, Higgsfield's video, and AI-generated writing all sit in legal territory that lawyers and courts are still actively trying to define. Something you build a workflow around today might face challenges tomorrow. Proceed with awareness, especially if you're using AI-generated content commercially.</p>

      <h3>Tool churn and subscription fatigue</h3>
      <p>These tools charge monthly, they change fast, and the one you've built your process around can pivot its pricing, get acquired, or simply disappear. Don't build too deep a dependency on any single tool until it's shown some staying power.</p>

      <h2 class="h2-summary">The Honest Summary</h2>

      <p>This stack of tools is the most genuinely useful collection of software I've ever experimented with — and also the most chaotic. The strengths are real, the weaknesses are manageable, the opportunities are enormous, and the threats deserve more conversation than they're currently getting.</p>
      <p>The right approach? Start with two or three that solve a real problem for you. Build from there. Let the workflow develop naturally rather than trying to use all nine tools at once just because they're available.</p>
      <p>And maybe don't open all nine tabs at the same time.</p>

      <div class="tools-covered">
        <p class="tools-covered-label">Tools covered in this article</p>
        <p class="tools-covered-list">Claude · Google AI Studio · Figma Make · Higgsfield · NotebookLM · Whispr Flow · ElevenLabs · Emergent · Suno</p>
      </div>
    `
  },
  {
    id: 'shipping-ai-products',
    title: 'Shipping AI Products When Nobody Knows What "Done" Looks Like',
    category: 'AI',
    date: 'April 2026',
    readTime: '8 min',
    excerpt: 'The hardest part of building AI products isn\'t the technology — it\'s agreeing on what success looks like before you\'ve built anything.',
    gradient: 'linear-gradient(145deg, #06B6D4 0%, #0E7490 100%)',
    content: `
      <p>Building AI products is different from building traditional software. The determinism you're used to — input X produces output Y — disappears. Instead, you're dealing with probabilistic systems where the same input can produce different outputs, where "good" is subjective, and where your users' expectations shift as they learn what the technology can and can't do.</p>
      <p>I've spent the last two years leading product for two AI-powered SaaS platforms at MisticusMind. Here's what I've learned about shipping AI products when the definition of done is a moving target.</p>
      <h2>Start with the failure modes, not the features</h2>
      <p>Traditional product development starts with "what do users want to do?" AI product development has to start with "what could go wrong, and is that acceptable?" A contract analysis tool that misses a critical clause is far worse than one that flags too many things. Your failure mode taxonomy determines your architecture.</p>
      <h2>Precision metrics before user metrics</h2>
      <p>Before you talk to users about satisfaction, you need internal benchmarks. What does a "good" response look like? Who judges it? How do you measure it at scale? At MisticusMind, we built internal evaluation rubrics before we showed anything to customers. This gave us a baseline to improve against.</p>
      <h2>The moving target is a feature, not a bug</h2>
      <p>AI products get better over time in ways traditional software doesn't. A model fine-tuned on your domain data in month three will outperform the base model you shipped in month one. Build your roadmap around this: plan for improvement loops, not just feature additions. Your customers will notice — and that's the story you want to tell.</p>
    `
  },
  {
    id: 'roadmapping-in-ambiguity',
    title: 'How I Roadmap When Everything Is Urgent',
    category: 'Strategy',
    date: 'March 2026',
    readTime: '6 min',
    excerpt: 'Every stakeholder has a P0. Here\'s the framework I use to create roadmaps that hold up under pressure.',
    gradient: 'linear-gradient(145deg, #F59E0B 0%, #B45309 100%)',
    content: `
      <p>The most common situation I find myself in as a PM: a backlog of 200 items, five stakeholders each with their own "most important" feature, and a sprint planning meeting in two days.</p>
      <p>Over the years I've tried every prioritisation framework — RICE, MoSCoW, Impact/Effort matrices — and what I've learned is that no framework survives first contact with a strong-willed CTO. What does survive is a process that creates shared ownership of the prioritisation decision.</p>
      <h2>Make the trade-offs visible</h2>
      <p>The moment I stopped presenting "the roadmap" and started presenting "here's what we're giving up by choosing this" was the moment stakeholder conversations became productive. Every yes is a collection of nos. Show those nos explicitly.</p>
      <h2>Time-box the debate</h2>
      <p>Roadmap discussions can consume infinite time. I give each prioritisation debate a hard limit — usually 45 minutes for a quarterly roadmap. After that, I make the call. Stakeholders often agree more readily when they know the clock is running.</p>
      <h2>The sprint backlog is not the roadmap</h2>
      <p>One of the most important distinctions I've had to make clearly with engineering teams: the quarterly roadmap is a direction, not a commitment. The sprint backlog is the commitment. Confusing these two creates both over-promising to stakeholders and over-constraining engineers.</p>
    `
  },
  {
    id: 'rag-for-pms',
    title: 'RAG Pipelines for Product Managers: What You Actually Need to Know',
    category: 'AI',
    date: 'February 2026',
    readTime: '10 min',
    excerpt: 'You don\'t need to build one. But you do need to understand what makes them fail — because that\'s what your users will file tickets about.',
    gradient: 'linear-gradient(145deg, #0EA5E9 0%, #075985 100%)',
    content: `
      <p>When I joined MisticusMind, the engineering team was deep in RAG (Retrieval-Augmented Generation) architecture for our legal AI products. I had a decent understanding of LLMs but had never shipped a RAG-based product. Here's what I wish someone had told me on day one.</p>
      <h2>RAG is a retrieval problem as much as a generation problem</h2>
      <p>Most people focus on the LLM — the generation side. But the quality of your RAG output is often constrained by the retrieval side. If you're not pulling the right chunks of context, the best model in the world will hallucinate. Understanding this changed how I wrote specs: I started including retrieval accuracy as an explicit acceptance criterion.</p>
      <h2>The three failure modes your users will report</h2>
      <p><strong>Wrong answer stated confidently.</strong> The model retrieved irrelevant context and still produced fluent output. Users trust it. This is your highest-risk failure.<br><br><strong>Right topic, wrong details.</strong> The retrieval was close but not exact. The model filled the gap with plausible-sounding information. Hard to catch without domain expertise.<br><br><strong>No answer when there should be one.</strong> Retrieval missed relevant content entirely. Users interpret this as a product limitation, even when the information exists in the corpus.</p>
      <h2>What this means for product specs</h2>
      <p>Every feature that touches the RAG pipeline needs an explicit definition of "bad" — not just "good." I now write user stories that include failure mode scenarios. This makes QA tractable and gives engineers a shared definition of done.</p>
    `
  },
  {
    id: 'pm-and-engineer',
    title: 'The PM and the Engineer: A Working Relationship',
    category: 'Teams',
    date: 'January 2026',
    readTime: '5 min',
    excerpt: 'I was a software developer before I became a PM. Here\'s what I learned from being on both sides of the table.',
    gradient: 'linear-gradient(145deg, #8B5CF6 0%, #5B21B6 100%)',
    content: `
      <p>I spent two years as a Technology Analyst at Accenture before pivoting to product management. That time — writing ABAP, building SAP integrations, sitting in sprint ceremonies as an IC — gave me a perspective on the PM/engineer dynamic that I use every day.</p>
      <h2>Engineers don't want less context — they want more</h2>
      <p>The instinct to shield engineers from messy business context ("just give them clean requirements") is well-intentioned but counterproductive. In my experience, engineers who understand the why make better technical decisions, surface better trade-offs, and are more invested in the outcome. I over-share context deliberately.</p>
      <h2>Estimation is collaboration, not extraction</h2>
      <p>The worst estimation sessions I've witnessed treat engineers like vending machines: input requirements, extract time estimate. The best ones are a conversation about uncertainty. When I ask "what would need to be true for this to take half as long?" I get better estimates and often find opportunities to reduce scope.</p>
      <h2>Respect the craft</h2>
      <p>Codebase quality, testing practices, refactoring time — these aren't things to be negotiated away in a crunch. A PM who consistently deprioritises tech debt is borrowing time from their future self at a high interest rate. I try to be explicit about this in roadmap conversations: "this sprint, we're knowingly taking on debt — here's when we'll pay it back."</p>
    `
  },
  {
    id: 'career-pivot',
    title: 'From SAP Analyst to Product Manager: How I Made the Switch',
    category: 'Career',
    date: 'December 2025',
    readTime: '7 min',
    excerpt: 'The pivot wasn\'t as clean as LinkedIn makes it look. Here\'s what actually happened.',
    gradient: 'linear-gradient(145deg, #10B981 0%, #065F46 100%)',
    content: `
      <p>If you look at my LinkedIn, the pivot from Technology Analyst at Accenture to Product Manager looks deliberate and clean. A master's degree, then a PM role. That's not quite how it happened.</p>
      <h2>The realisation</h2>
      <p>About 18 months into my role at Accenture, I noticed something: the parts of my job I looked forward to most weren't the coding. They were the client workshops, the requirements discovery sessions, the moments where I had to translate between what a business user wanted and what the engineering team could actually build. I was doing informal product work without the title.</p>
      <h2>Why a master's degree?</h2>
      <p>I chose Seattle University's Information Systems programme deliberately — not for the credential, but for the exposure. I wanted to work on real product problems, build case studies, and most importantly, get into the US tech ecosystem. The programme delivered on all three. My capstone was essentially a six-month product sprint for a real client.</p>
      <h2>What I'd tell my past self</h2>
      <p>Your technical background is a genuine advantage in product — use it explicitly, not just as a "nice to have." I've won stakeholder trust in technical conversations that most PMs would have to defer on. That trust compounds over time. Don't underestimate it.</p>
    `
  },
  {
    id: 'vibe-coding-pm',
    title: "I'm Built a Full Portfolio Website — Without Writing a Single Line of Code",
    category: 'Vibe Coding',
    date: 'April 2026',
    readTime: '9 min',
    excerpt: "Vibe coding isn't just for developers anymore. Here's why every PM needs to learn it — and how I built a fully animated portfolio site using Claude Code.",
    gradient: 'linear-gradient(145deg, #431407 0%, #9a3412 55%, #f97316 100%)',
    content: `
      <p class="post-lead">There's a skill gap quietly opening up in product management, and most PMs haven't noticed it yet. It's not about learning to code. It's about something newer, faster, and honestly more fun than either of those things.</p>

      <p>It's called <strong>vibe coding</strong> — and I think it's about to become one of the most valuable skills a product manager can have. Let me show you what I mean.</p>

      <h2><span class="post-section-num">01</span>What I Built</h2>

      <p>A few weeks ago, I built a personal portfolio website from scratch. Not a Wix template. Not a Notion page. A real, custom-designed website with a dark/light theme toggle, smooth scroll animations, a custom animated cursor, a 3D rotating blog gallery, and a responsive layout that works beautifully on every screen size.</p>

      <p>I did it without writing thousands of lines of code. Without a frontend developer. The tools I used? <strong>Antigravity</strong> and <strong>Claude Code</strong>.</p>

      <div class="post-features">
        <div class="post-feat"><span class="post-feat-dot"></span> Dark / light theme</div>
        <div class="post-feat"><span class="post-feat-dot"></span> Custom animated cursor</div>
        <div class="post-feat"><span class="post-feat-dot"></span> Scroll-reveal animations</div>
        <div class="post-feat"><span class="post-feat-dot"></span> 3D rotating gallery</div>
        <div class="post-feat"><span class="post-feat-dot"></span> Sticky CV button</div>
        <div class="post-feat"><span class="post-feat-dot"></span> Mobile responsive</div>
      </div>

      <p>The site is live at <a href="https://pranavvaze.netlify.app/" target="_blank" rel="noopener">https://pranavvaze.netlify.app/</a> and the code is on <a href="https://github.com/pranavvaze96/portfolio" target="_blank" rel="noopener">GitHub</a> if you want to see what came out the other side.</p>

      <h2><span class="post-section-num">02</span>What Is Vibe Coding?</h2>

      <p>Vibe coding is a term floating around developer circles, but it describes something much broader than coding. The idea is simple: instead of writing code line by line, you <em>describe what you want</em> — the feeling, the functionality, the interaction — and an AI builds it. You react to what you see, refine your description, and iterate.</p>

      <p>There's no rigid spec. No ticket. Just you, the AI, and a clear picture of what you're trying to create. It sounds deceptively simple. But in practice, it's a genuine superpower — especially for people who understand products deeply but don't want to spend their lives in a code editor.</p>

      <div class="post-callout">
        <p>Which is, by the way, exactly the situation most product managers are in.</p>
      </div>

      <h2><span class="post-section-num">03</span>Why Vibe Coding Is an Immediate Need for Product Managers</h2>

      <p>This isn't a "nice to have in five years" kind of thing. The PMs who figure this out now are going to have a serious edge.</p>

      <div class="post-reasons">
        <div class="post-reason">
          <div class="post-reason-num">01</div>
          <div class="post-reason-body">
            <strong>Prototype at the speed of thought</strong>
            <p>Right now, an idea goes into a doc, then a Figma, then a backlog, then maybe a developer picks it up in two sprints. With vibe coding, you can go from idea to working prototype in an afternoon. That changes every conversation you have with stakeholders, designers, and engineers.</p>
          </div>
        </div>
        <div class="post-reason">
          <div class="post-reason-num">02</div>
          <div class="post-reason-body">
            <strong>Stop depending on engineering bandwidth</strong>
            <p>One of the most frustrating parts of being a PM is having ideas you can't test because you can't build them yourself. Vibe coding removes that bottleneck. You become someone who shows up with a working thing, not just a slide deck about the working thing.</p>
          </div>
        </div>
        <div class="post-reason">
          <div class="post-reason-num">03</div>
          <div class="post-reason-body">
            <strong>Speak the language of what's actually possible</strong>
            <p>PMs who understand how products are built make better decisions. Vibe coding deepens that intuition without requiring you to become an engineer. When you've actually built something yourself — even with AI — you understand the complexity in a way reading about it never gives you.</p>
          </div>
        </div>
        <div class="post-reason">
          <div class="post-reason-num">04</div>
          <div class="post-reason-body">
            <strong>AI is changing what "technical" means</strong>
            <p>Technical skill used to mean syntax. Now it means knowing how to direct, evaluate, and iterate on AI output. That's a product skill. It's systems thinking. It's exactly what good PMs already do — just applied to building instead of specifying.</p>
          </div>
        </div>
        <div class="post-reason">
          <div class="post-reason-num">05</div>
          <div class="post-reason-body">
            <strong>Cross-functional credibility goes through the roof</strong>
            <p>When you walk into sprint planning having already prototyped the thing you're proposing, the dynamic changes. Engineers respect it. Designers engage differently. Leadership notices. You're no longer the person who writes requirements — you're the person who ships ideas.</p>
          </div>
        </div>
      </div>

      <h2><span class="post-section-num">04</span>How I Actually Built It</h2>

      <p>I came into this with a clear vision and zero interest in spending weeks learning a frontend framework. I used Claude Code inside Antigravity to bring that feeling to life through conversation. My prompts weren't technical — they were descriptive.</p>

      <span class="post-prompts-label">Actual prompts I used</span>
      <div class="post-prompt-block">I want a cursor that feels like it has personality — a dot that follows the mouse with a trailing ring, and a burst effect when you click.</div>
      <div class="post-prompt-block">The navbar should feel like liquid glass — blurred, sticky, and elegant.</div>
      <div class="post-prompt-block">I want my profile photo to tilt slightly when someone hovers over it, like it's reacting to them.</div>

      <p style="margin-top: 2rem;">Each of those became a real, working feature. The AI handled the implementation. I handled the vision, the taste, and the iteration. None of that required me to understand CSS transforms at a deep level, or memorise JavaScript event listeners, or debug browser compatibility issues for hours.</p>

      <h2><span class="post-section-num">05</span>The Moment That Genuinely Surprised Me</h2>

      <div class="post-anecdote">
        <span class="post-anecdote-label">A real anecdote from building the site</span>
        <p>I went into this expecting to babysit a lot of details. I expected to make a design change and then have to separately tell Claude Code — <em>"now update the dark mode version, now fix the mobile layout, now reorganise the files."</em> I expected the AI to be good at one thing at a time.</p>
        <p>That's not what happened.</p>
        <p>Every time I made a design change — a new section, a tweaked colour, a different layout — Claude Code automatically kept the light and dark theme in sync across the entire site. I never once had to say <em>"now do the same thing for dark mode."</em> It just did it. Consistency across states is one of the hardest things to maintain in a product, and it was handling it quietly in the background the whole time.</p>
        <p>The mobile view was similar. Claude Code would automatically adapt layouts for smaller screens as we built. Was it perfect? No — I did have to go back and tweak a few things. But the fact that it was thinking about responsiveness without me asking changed the pace of the whole project.</p>
        <p>And then there was the folder structure. I hadn't even thought about how to organise the files — I was focused on the product, not the architecture. Claude Code structured everything cleanly on its own: separate CSS files for variables, animations, components, and sections. When I eventually looked at the project folder, it looked like something a thoughtful developer had planned from the start.</p>
      </div>

      <div class="post-callout">
        <p>You're not just getting code written. You're getting a collaborator that thinks about the whole product, not just the line you asked it to write.</p>
      </div>

      <h2><span class="post-section-num">06</span>The Skill That Made It Work</h2>

      <p>Here's what I noticed about myself that made vibe coding effective — and I think it's the same for most PMs. I'm good at articulating outcomes. I can describe what something should <em>do</em> and how it should <em>feel</em> with precision. That's literally the job. Writing PRDs, user stories, acceptance criteria — all of it trains you to be specific about desired behaviour.</p>

      <p>Vibe coding rewards exactly that skill. The PMs who will struggle are the ones who are vague. The ones who will thrive are the ones who already write sharp, specific product requirements. Which, if you've been doing this job for a while, is probably you.</p>

      <h2><span class="post-section-num">07</span>What I'd Tell Other PMs</h2>

      <div class="post-tips">
        <div class="post-tip">
          <div class="post-tip-icon">🎯</div>
          <div class="post-tip-body">
            <strong>Start with something you actually want</strong>
            <p>Don't build a to-do app as a tutorial exercise. Build something real — a portfolio, a prototype of a feature you've been thinking about, a tool that solves a problem you have. The motivation keeps you iterating.</p>
          </div>
        </div>
        <div class="post-tip">
          <div class="post-tip-icon">🎨</div>
          <div class="post-tip-body">
            <strong>Describe feelings, not specifications</strong>
            <p>You don't need to know the technical term for what you want. "I want it to feel like it slides in from below as I scroll" is a perfectly good prompt. Trust your product instincts.</p>
          </div>
        </div>
        <div class="post-tip">
          <div class="post-tip-icon">🔁</div>
          <div class="post-tip-body">
            <strong>Expect to iterate</strong>
            <p>Vibe coding isn't one prompt and done. It's a conversation. The first version gets you 70% there. The next few exchanges get you the rest. That loop is the skill.</p>
          </div>
        </div>
        <div class="post-tip">
          <div class="post-tip-icon">🚀</div>
          <div class="post-tip-body">
            <strong>Don't aim for perfect code — aim for working product</strong>
            <p>The goal isn't to write beautiful, production-grade software. The goal is to build something real enough to learn from, show to others, or ship. Lower that bar and you'll move much faster.</p>
          </div>
        </div>
      </div>

      <div class="post-next-banner">
        <span class="post-next-banner-badge">What's Next</span>
        <h3>The portfolio was just step one.</h3>
        <p>As a next step in my vibe coding journey, I'm building an app from scratch — and the scope is a whole level up from a portfolio site. I'll be documenting the journey as I go: the wins, the dead ends, the moments where the AI surprises me, and the moments where I have to take the wheel.</p>
        <p>Stay tuned for updates. The next one will be a lot more interesting.</p>
      </div>

      <h2><span class="post-section-num">08</span>The Bigger Picture</h2>

      <p>The PMs who thrive in the next few years won't just be the ones who write the best PRDs. They'll be the ones who can build fast, validate quickly, and show up to every conversation with something tangible. Vibe coding is how you do that without becoming a full-time engineer.</p>

      <p>I built a portfolio website to prove something to myself. That I could take a vision from my head and put it live on the internet, without a team, without a budget, and without compromising on the experience.</p>

      <p>It worked. And I'm not going back to waiting for dev bandwidth to test an idea.</p>
    `
  }
];

/* ═══════════════════════════════════════════════════════════════════
   GALLERY PAGE
═══════════════════════════════════════════════════════════════════ */
const gallery3d        = document.getElementById('gallery-3d');
const galleryScroll    = document.getElementById('gallery-scroll');
const galleryInnerHint = document.getElementById('gallery-inner-hint');

if (gallery3d) {
  const RADIUS     = window.innerWidth < 1100 ? 390 : 480;
  const ANGLE_STEP = 360 / posts.length;
  const AUTO_SPEED = 0.04;

  let rotation   = 0;
  let isScrolling = false;
  let scrollTimer = null;

  /* ── Build gallery cards ────────────────────────────────────────── */
  function buildGallery() {
    posts.forEach((post, i) => {
      const btn = document.createElement('button');
      btn.className = 'gallery-card-3d';
      btn.setAttribute('aria-label', `Read: ${post.title}`);
      btn.dataset.postId = post.id;

      btn.style.transform = `rotateY(${i * ANGLE_STEP}deg) translateZ(${RADIUS}px)`;

      btn.innerHTML = `
        <div class="gallery-card-inner" style="background: ${post.gradient};">
          <span class="gallery-card-category">${post.category}</span>
          <div class="gallery-card-footer">
            <h3 class="gallery-card-title">${post.title}</h3>
            <span class="gallery-card-meta">${post.date} · ${post.readTime} read</span>
          </div>
        </div>
      `;

      btn.addEventListener('click', () => {
        window.location.href = `post.html?id=${post.id}`;
      });
      gallery3d.appendChild(btn);
    });
  }

  /* ── Build mobile list ──────────────────────────────────────────── */
  function buildMobileList() {
    const list = document.getElementById('blog-mobile-list');
    posts.forEach(post => {
      const li  = document.createElement('li');
      li.className = 'blog-mobile-item';

      const btn = document.createElement('button');
      btn.className = 'blog-mobile-card';
      btn.setAttribute('aria-label', `Read: ${post.title}`);
      btn.innerHTML = `
        <p class="blog-mobile-category">${post.category}</p>
        <h2 class="blog-mobile-title">${post.title}</h2>
        <p class="blog-mobile-excerpt">${post.excerpt}</p>
        <div class="blog-mobile-meta">
          <span>${post.date}</span>
          <span class="blog-mobile-meta-dot"></span>
          <span>${post.readTime} read</span>
        </div>
      `;
      btn.addEventListener('click', () => {
        window.location.href = `post.html?id=${post.id}`;
      });

      li.appendChild(btn);
      list.appendChild(li);
    });
  }

  /* ── Animation loop ─────────────────────────────────────────────── */
  function applyRotation() {
    gallery3d.style.transform = `rotateY(${rotation}deg)`;
    gallery3d.querySelectorAll('.gallery-card-3d').forEach((card, i) => {
      const combined    = ((i * ANGLE_STEP + rotation) % 360 + 360) % 360;
      const facingAngle = combined > 180 ? 360 - combined : combined;
      card.style.opacity = Math.max(0.12, 1 - facingAngle / 190);
    });
  }

  function autoRotateLoop() {
    if (!isScrolling) {
      rotation += AUTO_SPEED;
      applyRotation();
    }
    requestAnimationFrame(autoRotateLoop);
  }

  /* ── Scroll drives rotation ─────────────────────────────────────── */
  window.addEventListener('scroll', () => {
    const rect      = galleryScroll.getBoundingClientRect();
    const scrollable = galleryScroll.offsetHeight - window.innerHeight;
    const scrolled  = Math.max(0, -rect.top);
    const progress  = Math.min(1, scrolled / scrollable);
    rotation        = progress * 420;

    isScrolling = true;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => { isScrolling = false; }, 200);

    if (scrolled > 60) galleryInnerHint.classList.add('hidden');
    else               galleryInnerHint.classList.remove('hidden');

    applyRotation();
  }, { passive: true });

  buildGallery();
  buildMobileList();
  autoRotateLoop();
}

/* ═══════════════════════════════════════════════════════════════════
   POST PAGE  (post.html?id=xxx)
═══════════════════════════════════════════════════════════════════ */
const postArticleEl = document.getElementById('post-article');

if (postArticleEl && !gallery3d) {
  const id   = new URLSearchParams(window.location.search).get('id');
  const post = posts.find(p => p.id === id);

  if (!post) {
    window.location.replace('blog.html');
  } else {
    document.title = `${post.title} — Pranav Vaze`;

    postArticleEl.innerHTML = `
      <div class="post-header">
        <div class="post-header-tint" style="background: ${post.gradient};"></div>
        <div class="container">
          <span class="post-category-tag">${post.category}</span>
          <h1 class="post-title">${post.title}</h1>
          <div class="post-meta-row">
            <span>${post.date}</span>
            <span class="post-meta-sep"></span>
            <span>${post.readTime} read</span>
          </div>
        </div>
      </div>
      <div class="post-body">
        ${post.content}
      </div>
      <div class="post-end-rule">
        <hr>
        <div class="post-end-cta">
          <p class="post-end-label">That's a wrap</p>
          <a class="post-end-link" href="blog.html">← Back to all posts</a>
        </div>
      </div>
    `;
  }
}
