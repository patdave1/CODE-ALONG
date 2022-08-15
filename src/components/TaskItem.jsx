import React from 'react'
import {TrashIcon} from '@heroicons/react/outline';


const TaskItem = ({task , removeTask}) => {
 

  return (
        <div className="flex items-center bg-teal-100 p-2 border-2 border-gray-300 rounded-md ">
          <div className="flex-1">{task}</div>
          <button className="bg-blue-800 p-1 rounded-md ">
             <TrashIcon height={24} color="white" onClick={()=>removeTask(task)} />
          </button>
         </div>
  )
}


export default TaskItem