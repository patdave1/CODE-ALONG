import React, { useEffect, useState } from 'react'
import { v4 as uuid } from "uuid";
import TaskItem from './TaskItem';


const TaskManager = () => {

 const [tasks,setTasks]= useState([]);

 const [input, setInput] = useState("");

 const handleSubmit=(e)=>{
  e.preventDefault();
  if (input ==="") return;

  const newTask = {
   id : uuid(),
   text : input,
   completed : false,
  };

 
  setTasks([newTask, ...tasks])
  setInput("");


  localStorage.setItem("tasks", JSON.stringify(tasks))
}

useEffect(()=>{
  localStorage.setItem("task",JSON.stringify(tasks))

},[tasks])


const removeTask= (id) => {
  const newTasks =tasks.filter((task)=>task.id !== id) 
    setTasks(newTasks);

    localStorage.removeItem(id);
  };
  


  return (
    <div className="h-screen bg-blue-600 flex justify-center items-center">
      <div className="max-w-xl bg-white rounded-xl py-10 px-5 max-h-96">
        <form className="space-x-5 flex w-[30rem] mb-10" onSubmit={handleSubmit}>
         <input type="text" className="border-2 border-blue-400 p-2 rounded-md outline-none w-10/12"
         onChange={(e)=>setInput(e.target.value)}
         value={input}
         />
         <button type="submit"  className="bg-blue-600 px-7 py-2 text-white text-lg rounded-md">Add</button>
        </form>
        <div className="space-y-2 overflow-y-auto h-56">
        {tasks.map((task)=> <TaskItem key={task.id} task={task}  removeTask={removeTask}/>)}
        </div>
      </div>  
    </div>
  )
}

export default TaskManager
