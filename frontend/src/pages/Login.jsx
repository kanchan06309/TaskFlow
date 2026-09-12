import { useState } from "react";
import { CheckCircle2, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const nav = useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [show,setShow]=useState(false);
  const [error,setError]=useState("");

  const submit=e=>{e.preventDefault();const r=onLogin(email,password);if(r.ok)nav("/dashboard");else setError(r.message)};
  const demo=()=>{setEmail("demo@taskflow.app");setPassword("Demo@123");setError("")};

  return <div className="auth-page">
    <div className="auth-left">
      <Link className="brand auth-brand" to="/"><span className="brand-mark">✓</span>TaskFlow</Link>
      <div className="auth-form-wrap">
        <span className="eyebrow">WELCOME BACK</span><h1>Let's get things done.</h1><p className="auth-sub">Sign in to your TaskFlow workspace and pick up where you left off.</p>
        <button className="google-btn" onClick={()=>alert("Google OAuth is a frontend placeholder. Connect this button to your FastAPI /auth/google endpoint.")}><span className="google-g">G</span> Continue with Google</button>
        <div className="or"><span>or continue with email</span></div>
        {error&&<div className="form-error">{error}</div>}
        <form onSubmit={submit}>
          <label>Email address<input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" required /></label>
          <label>Password<div className="password-input"><input type={show?"text":"password"} value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" required/><button type="button" onClick={()=>setShow(!show)}>{show?<EyeOff size={18}/>:<Eye size={18}/>}</button></div></label>
          <div className="form-row"><label className="check-label"><input type="checkbox"/> Remember me</label><a href="#forgot">Forgot password?</a></div>
          <button className="btn btn-dark full">Sign in</button>
        </form>
        <p className="auth-bottom">Don't have an account? <Link to="/signup">Create an account</Link></p>
        <button className="demo-fill" onClick={demo}>Use demo credentials</button>
        <div className="demo-box"><b>Demo login</b><span>Email: demo@taskflow.app</span><span>Password: Demo@123</span></div>
      </div>
    </div>
    <div className="auth-art"><div className="art-glow"/><div className="art-card"><div className="art-top"><span className="brand-mark">✓</span><b>TaskFlow</b></div><div className="art-checks"><div>✓ <span>Build your priority list</span></div><div>✓ <span>Focus on what matters</span></div><div>○ <span>Finish today's goals</span></div></div><div className="art-progress"><span>Daily progress</span><b>72%</b></div><div className="art-bar"><i/></div></div><div className="art-copy"><h2>Make every task count.</h2><p>Plan clearly. Focus deeply. Finish confidently.</p></div></div>
  </div>
}