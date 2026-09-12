import { Bell, CheckSquare, CircleHelp, LayoutDashboard, ListTodo, LogOut, Menu, Search, Settings, UserRound, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AppShell({ user, children, onLogout }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const nav = [{to:"/dashboard", label:"Dashboard", icon:LayoutDashboard},{to:"/tasks", label:"All Tasks", icon:ListTodo},{to:"/profile", label:"Profile", icon:UserRound}];

  const logout = () => { if (onLogout) onLogout(); else { localStorage.removeItem("taskflow_user"); window.location.href="/"; } };

  return (
    <div className="app-shell">
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="brand"><span className="brand-mark">✓</span><span>TaskFlow</span><button className="mobile-close icon-btn" onClick={()=>setOpen(false)}><X/></button></div>
        <div className="side-label">MENU</div>
        <nav>{nav.map(({to,label,icon:Icon})=><NavLink key={to} to={to} onClick={()=>setOpen(false)}><Icon size={18}/>{label}</NavLink>)}</nav>
        <div className="side-label">GENERAL</div>
        <nav><button onClick={()=>navigate("/profile")}><Settings size={18}/> Settings</button><button><CircleHelp size={18}/> Help</button><button onClick={logout}><LogOut size={18}/> Logout</button></nav>
        <div className="sidebar-promo"><div className="promo-glow"/><b>Make every day count.</b><p>Turn plans into progress with TaskFlow.</p></div>
      </aside>
      {open && <div className="mobile-overlay" onClick={()=>setOpen(false)}/>}
      <main className="main-area">
        <header className="topbar"><button className="mobile-menu icon-btn" onClick={()=>setOpen(true)}><Menu/></button><div className="search-box"><Search size={18}/><input placeholder="Search tasks..." /></div><div className="top-actions"><button className="icon-btn"><Bell size={19}/></button><button className="user-chip" onClick={()=>navigate("/profile")}><span className="avatar">{user.name.charAt(0).toUpperCase()}</span><span><b>{user.name}</b><small>{user.email}</small></span></button></div></header>
        <div className="page-content">{children}</div>
      </main>
    </div>
  );
}