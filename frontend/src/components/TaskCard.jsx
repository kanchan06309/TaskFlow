import { CalendarDays, Check, Pencil, Trash2 } from "lucide-react";

export default function TaskCard({ task, onToggle, onDelete, onEdit }) {
  const overdue = task.status !== "Completed" && new Date(task.dueDate) < new Date(new Date().toDateString());
  return (
    <div className={`task-card ${task.status === "Completed" ? "is-done" : ""}`}>
      <button className={`check ${task.status === "Completed" ? "checked" : ""}`} onClick={() => onToggle(task.id)} aria-label="Toggle task">
        {task.status === "Completed" && <Check size={15}/>}
      </button>
      <div className="task-main">
        <div className="task-title-row"><h3>{task.title}</h3><span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span></div>
        {task.description && <p>{task.description}</p>}
        <div className="task-meta"><span><CalendarDays size={14}/> {new Date(task.dueDate).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}</span><span>{task.category}</span>{overdue && <span className="overdue">Overdue</span>}</div>
      </div>
      <div className="task-actions"><button className="icon-btn" onClick={() => onEdit?.(task)} title="Edit"><Pencil size={16}/></button><button className="icon-btn danger" onClick={() => onDelete(task.id)} title="Delete"><Trash2 size={16}/></button></div>
    </div>
  );
}