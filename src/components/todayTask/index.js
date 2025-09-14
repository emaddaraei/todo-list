'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import TaskCard from './taskCard';
import { initialTasks } from './../../constants/tasks';

export default function TodayTask() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleCheckChange = taskId => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  return (
    <div className="flex flex-col py-4 border border-gray-200 rounded-lg gap-4 h-fit">
      <div className="flex flex-col gap-4 px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-md font-bold">وظایف امروز</h2>
          <button className="flex gap-1 items-center text-sm bg-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90">
            <FontAwesomeIcon icon={faPlus} />
            <span>وظیفه جدید</span>
          </button>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="flex border border-gray-200 rounded-lg grow items-center px-4 py-2 hover:shadow-xs">
            جستجو...
          </span>
          <span className="flex border border-gray-200 rounded-lg w-fit items-center px-4 py-2">
            فیلتر
          </span>
        </div>
      </div>

      <div className="border-t border-gray-200 w-full"></div>

      <div className="flex flex-col gap-4 px-4">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            taskId={task.id}
            taskTitle={task.title}
            taskDate={task.date}
            taskPriority={task.priority}
            taskTag={task.tag}
            taskIsChecked={task.isChecked}
            onCheckChange={() => handleCheckChange(task.id)}
          />
        ))}
      </div>
    </div>
  );
}
