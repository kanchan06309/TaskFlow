import { Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";
import AppShell from "../components/AppShell";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

export default function AllTasks({user,tasks,onToggle,onDelete,onUpdate,onAdd,onLogout}) {
  const [search,setSearch]=useState(""); const [filter,setFilter]=useState("All"); const [show,setShow]=useState(false); const [editing,setEditing]=useState(null);
  const filtered=useMemo(()=>tasks.filter(t=>{const q=(t.title+" "+t.description).toLowerCase(); const matchQ=q.includes(search.toLowerCase()); const matchF=filter==="All"||(filter==="Overdue"?t.status!=="Completed"&&new Date(t.dueDate)<new Date(new Date().toDateString()):t.status===filter);return matchQ&&matchF}),[tasks,search,filter]);
  return <AppShell user={user} onLogout={onLogout}><div className="dashboard-head"><div><span className="eyebrow">WORKSPACE</span><h1>All tasks</h1><p>Everything you need to get done, in one place.</p></div><button className="btn btn-primary" onClick={()=>setShow(true)}><Plus size={18}/> Add task</button></div><div className="toolbar"><div className="inline-search"><Search size={17}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search tasks..." /></div><select value={filter} onChange={e=>setFilter(e.target.value)}><option>All</option><option>Pending</option><option>Completed</option><option>Overdue</option></select></div><div className="task-list">{filtered.map(t=><TaskCard key={t.id} task={t} onToggle={onToggle} onDelete={onDelete} onEdit={setEditing}/>)}</div>{filtered.length===0&&<div className="empty-state"><h3>No tasks found</h3><p>Try another search or create a new task.</p></div>}{show&&<TaskForm onClose={()=>setShow(false)} onSave={t=>{onAdd(t);setShow(false)}}/>}{editing&&<TaskForm task={editing} onClose={()=>setEditing(null)} onSave={t=>{onUpdate(t);setEditing(null)}}/>}</AppShell>
}