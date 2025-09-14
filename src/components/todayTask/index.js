'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMagnifyingGlass,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
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
  const [selectedPriority, setSelectedPriority] = useState('all');

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
          <div className="flex justify-between items-center grow border rounded-lg border-gray-200 hover:border-pink-500">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-400 px-4"
            />
            <input
              type="text"
              placeholder="جستجو..."
              className="w-full border border-none rounded-lg py-2 focus:outline-none text-sm"
            />
          </div>
          <div className="flex justify-between w-fit items-center border rounded-lg border-gray-200 hover:border-pink-500">
            <select
              value={selectedPriority}
              onChange={e => setSelectedPriority(e.target.value)}
              className="appearance-none border-none focus:outline-none text-sm border border-gray-200 rounded-lg px-4 py-2 cursor-pointer"
            >
              <option value="all">همه</option>
              <option value="high">اولویت بالا</option>
              <option value="medium">اولویت متوسط</option>
              <option value="low">اولویت پایین</option>
            </select>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-gray-400 px-2"
            />
          </div>
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
