import { ArrowRight, CheckCircle2, CircleCheck, Filter, ListTodo, Search, ShieldCheck, Sparkles, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing({ user }) {
  return <div className="landing">
    <nav className="landing-nav">
      <Link className="brand landing-brand" to="/"><span className="brand-mark">✓</span>TaskFlow</Link>
      <div className="landing-links"><a href="#features">Features</a><a href="#how">How it works</a><a href="#why">Why TaskFlow</a><a href="#faq">FAQ</a></div>
      <div className="nav-ctas">{user ? <Link className="btn btn-primary small" to="/dashboard">Dashboard</Link> : <><Link className="btn btn-ghost small" to="/login">Login</Link><Link className="btn btn-dark small" to="/signup">Get started</Link></>}</div>
    </nav>

    <section className="hero">
      <div className="hero-copy">
        <div className="pill"><Sparkles size={14}/> Simple task management, thoughtfully designed</div>
        <h1>Plan your day.<br/><span>Accomplish more.</span></h1>
        <p>TaskFlow helps you organize tasks, prioritize what matters, and keep your momentum without the clutter.</p>
        <div className="hero-actions"><Link className="btn btn-dark btn-lg" to={user?"/dashboard":"/signup"}>Start organizing <ArrowRight size={18}/></Link><Link className="text-link" to="/login">Already have an account? Log in</Link></div>
        <div className="hero-proof"><span><CheckCircle2 size={17}/> Fast & simple</span><span><ShieldCheck size={17}/> Your tasks, private</span><span><Zap size={17}/> Built for focus</span></div>
      </div>
      <div className="hero-visual">
        <div className="float-card float-one"><CircleCheck size={18}/><div><b>Task completed</b><small>Project report</small></div></div>
        <div className="mock-dashboard">
          <div className="mock-top"><b>Dashboard</b><span>•••</span></div>
          <p className="mock-muted">Good morning, Kanchan 👋</p>
          <div className="mock-stats"><div className="active"><small>Total tasks</small><strong>12</strong><em>+3 this week</em></div><div><small>Completed</small><strong>7</strong><em>58% done</em></div><div><small>Pending</small><strong>5</strong><em>Stay focused</em></div></div>
          <div className="mock-grid"><div className="mock-panel"><div className="mock-head"><b>Upcoming tasks</b><span>View all</span></div>{["Complete DSA Assignment","Finish project dashboard","Prepare presentation"].map((x,i)=><div className="mock-task" key={x}><span className={`mock-check ${i===0?"":"done"}`}>{i>0&&"✓"}</span><div><b>{x}</b><small>{i===0?"Today":"Sep "+(14+i)}</small></div><span className="mock-dot"/></div>)}</div><div className="mock-progress"><b>Weekly progress</b><div className="donut"><span>72%<small>done</small></span></div><small>Keep going — you're doing great.</small></div></div>
        </div>
      </div>
    </section>

    <section className="trust-strip"><span>DESIGNED FOR FOCUS</span><b>Students</b><b>Developers</b><b>Teams</b><b>Everyday planning</b></section>

    <section id="features" className="section"><div className="section-title"><span>POWERFUL, WITHOUT THE COMPLEXITY</span><h2>Everything you need to stay organized.</h2><p>Simple tools that help you turn a long list into clear, achievable progress.</p></div>
      <div className="feature-grid"><Feature icon={ListTodo} title="Easy task management" text="Create, edit, complete, and delete tasks in seconds."/><Feature icon={Target} title="Smart priorities" text="Use priority levels and categories to focus on what matters."/><Feature icon={CircleCheck} title="Track progress" text="See completed, pending, and overdue work at a glance."/><Feature icon={Filter} title="Search & filter" text="Find exactly what you need with fast search and filters."/><Feature icon={ShieldCheck} title="Private by default" text="Your tasks belong to your account and stay separated from others."/><Feature icon={Zap} title="Made for momentum" text="A distraction-free workflow designed to keep you moving." /></div>
    </section>

    <section id="how" className="section soft-section"><div className="section-title"><span>HOW IT WORKS</span><h2>Three steps. Zero overwhelm.</h2></div><div className="steps"><Step n="01" title="Create your account" text="Sign up with email or continue with Google."/><Step n="02" title="Add your tasks" text="Give every task a deadline, priority, and category."/><Step n="03" title="Get things done" text="Check off progress and keep your day under control."/></div></section>

    <section id="why" className="section showcase"><div className="showcase-copy"><span className="eyebrow">YOUR WORK, YOUR WAY</span><h2>A calmer way to manage a busy day.</h2><p>Instead of juggling scattered notes and forgotten deadlines, bring everything into one clear workspace.</p><ul><li><CheckCircle2/> Know what needs attention next.</li><li><CheckCircle2/> See your progress without spreadsheets.</li><li><CheckCircle2/> Keep personal and college work organized.</li></ul></div><div className="showcase-card"><div className="showcase-head"><b>Today's focus</b><span>4 tasks</span></div>{["Build authentication UI","Solve 2 LeetCode problems","Review project README","Plan tomorrow"].map((x,i)=><div className="focus-row" key={x}><span className={i<2?"focus-check":""}>{i<2&&"✓"}</span><div><b>{x}</b><small>{i===0?"High priority":"Today"}</small></div></div>)}<div className="focus-footer"><span>Daily completion</span><b>50%</b></div><div className="progress-bar"><i style={{width:"50%"}}/></div></div></section>

    <section id="faq" className="section faq"><div className="section-title"><span>FAQ</span><h2>Questions, answered.</h2></div><div className="faq-list"><details open><summary>Is TaskFlow free to use?</summary><p>Yes. This portfolio version includes a free demo experience and can be connected to a production backend later.</p></details><details><summary>Can I sign in with Google?</summary><p>Yes. The UI includes Google sign-in. Connect the button to your FastAPI OAuth endpoint for production authentication.</p></details><details><summary>Will my tasks be private?</summary><p>In production, each task should be associated with the authenticated user's ID and authorized by the backend.</p></details></div></section>

    <section className="cta"><div><span>READY WHEN YOU ARE</span><h2>Turn your plans into progress.</h2><p>Start with a clean workspace and make your next task the only thing that matters.</p><Link className="btn btn-white btn-lg" to={user?"/dashboard":"/signup"}>Get started free <ArrowRight size={18}/></Link></div></section>
    <footer className="landing-footer"><div><Link className="brand landing-brand" to="/"><span className="brand-mark">✓</span>TaskFlow</Link><p>Simple task management for getting things done.</p></div><div><b>Product</b><a href="#features">Features</a><a href="#how">How it works</a></div><div><b>Account</b><Link to="/login">Login</Link><Link to="/signup">Sign up</Link></div><div><b>Legal</b><a href="#faq">FAQ</a><a href="#why">Privacy</a></div></footer>
    <div className="copyright">© 2026 TaskFlow. Portfolio demo.</div>
  </div>
}

function Feature({icon:Icon,title,text}){return <article className="feature-card"><div className="feature-icon"><Icon size={20}/></div><h3>{title}</h3><p>{text}</p><ArrowRight className="feature-arrow" size={18}/></article>}
function Step({n,title,text}){return <article className="step"><span>{n}</span><h3>{title}</h3><p>{text}</p></article>}