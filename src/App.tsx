  import { useState } from "react";


  function Content() {
    interface Task {id:string,text:string,done:boolean}
  const [tasks,setTask] = useState<Task[]>([])
  const [action,setAction] = useState<string>('')

  const addTaskHandler = ()=>{
    const taskObj = {
      id:crypto.randomUUID(),
      text:action,
      done:false
    }
    setTask([...tasks,taskObj])
  }
  const CheckDone = (id:string)=>{
    setTask(tasks.map(task=> task.id === id ? {...task,done:!task.done} : task))
  }
  const deleteId = (id:string)=>{
    const updatedTasks = [...tasks]
    const deleted = updatedTasks.filter(e=>e.id !== id) 
    setTask(deleted)
  }
    return (
      <div>
        <h1>To-Do List</h1>
        <div className="input-wrapper">
          <input value={action} onChange={e=>setAction(e.target.value)} type="text" placeholder="Add your task" />
          <button onClick={addTaskHandler}>Add</button>
        </div>
        <br />
        <div className="todos">{tasks.map((task)=>(
          <div className="action" key={task.id}>
            <input type="checkbox" checked={task.done} onChange={()=>CheckDone(task.id)} />
            <p style={task.done ? {textDecoration:'line-through'} : {}}>{task.text}</p>
            <button onClick={()=>{deleteId(task.id)}}>delete</button>
            </div>
        ))}</div>
      </div>
    );
  }
  function App() {
  return <div className="todo-list">
    <Content/>
  </div>
  }


  export default App
