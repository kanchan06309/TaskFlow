import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppShell from "../components/AppShell";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

export default function Dashboard({user,tasks,onToggle,onDelete,onAdd,onUpdate,onLogout}) {
  const [show,setShow]=useState(false); const [editing,setEditing]=useState(null);
  const total=tasks.length, completed=tasks.filter(t=>t.status==="Completed").length, pending=total-completed, overdue=tasks.filter(t=>t.status!=="Completed"&&new Date(t.dueDate)<new Date(new Date().toDateString())).length;
  return <AppShell user={user} onLogout={onLogout}><div className="dashboard-head"><div><span className="eyebrow">OVERVIEW</span><h1>Dashboard</h1><p>Plan, prioritize, and accomplish your tasks with ease.</p></div><button className="btn btn-primary" onClick={()=>setShow(true)}><Plus size={18}/> Add task</button></div>
  <div className="stats-grid"><Stat active title="Total tasks" value={total} note="+3 this week"/><Stat title="Completed" value={completed} note={`${total?Math.round(completed/total*100):0}% completion`}/><Stat title="Pending" value={pending} note="Keep going"/><Stat title="Overdue" value={overdue} note={overdue?"Needs attention":"You're on track"}/></div>
  <div className="dashboard-grid"><section className="panel"><div className="panel-head"><div><h2>Upcoming tasks</h2><p>Your next priorities</p></div><Link to="/tasks">View all <ArrowUpRight size={15}/></Link></div>{tasks.slice(0,4).map(t=><TaskCard key={t.id} task={t} onToggle={onToggle} onDelete={onDelete} onEdit={setEditing}/>)}</section><section className="panel progress-panel"><div className="panel-head"><div><h2>Progress</h2><p>Your overall completion</p></div></div><div className="big-donut" style={{"--p":`${total?completed/total*360:0}deg`}}><div><strong>{total?Math.round(completed/total*100):0}%</strong><span>Completed</span></div></div><div className="legend"><span><i className="dot completed"/>Completed <b>{completed}</b></span><span><i className="dot pending"/>Pending <b>{pending}</b></span></div></section></div>
  {show&&<TaskForm onClose={()=>setShow(false)} onSave={t=>{onAdd?.(t);setShow(false)}}/>}{editing&&<TaskForm task={editing} onClose={()=>setEditing(null)} onSave={t=>{onUpdate?.(t);setEditing(null)}}/>}</AppShell>
}
function Stat({title,value,note,active}){return <div className={`stat-card ${active?"active":""}`}><div><span>{title}</span><strong>{value}</strong><small>{note}</small></div><ArrowUpRight size={17}/></div>}