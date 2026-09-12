import { useState } from "react";
import { X } from "lucide-react";

const empty = { title: "", description: "", dueDate: "", priority: "Medium", category: "Study", status: "Pending" };

export default function TaskForm({ task, onSave, onClose }) {
  const [form, setForm] = useState(task || empty);
  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    if (!form.title.trim() || !form.dueDate) return;
    onSave(form);
  };

  return (
    <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && onClose()}>
      <form className="modal-card" onSubmit={submit}>
        <div className="modal-head">
          <div><span className="eyebrow">Task</span><h2>{task ? "Edit task" : "Create a task"}</h2></div>
          <button className="icon-btn" type="button" onClick={onClose}><X size={20}/></button>
        </div>
        <label>Task title<input name="title" value={form.title} onChange={change} placeholder="e.g. Finish project report" autoFocus /></label>
        <label>Description<textarea name="description" value={form.description} onChange={change} placeholder="Add some details..." rows="4" /></label>
        <div className="form-grid">
          <label>Due date<input type="date" name="dueDate" value={form.dueDate} onChange={change} /></label>
          <label>Priority<select name="priority" value={form.priority} onChange={change}><option>Low</option><option>Medium</option><option>High</option></select></label>
        </div>
        <div className="form-grid">
          <label>Category<select name="category" value={form.category} onChange={change}><option>Study</option><option>Work</option><option>College</option><option>Personal</option><option>Learning</option><option>Other</option></select></label>
          <label>Status<select name="status" value={form.status} onChange={change}><option>Pending</option><option>Completed</option></select></label>
        </div>
        <div className="modal-actions"><button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button><button className="btn btn-primary">{task ? "Update task" : "Save task"}</button></div>
      </form>
    </div>
  );
}