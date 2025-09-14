'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { priorityClasses } from '../../constants/priorityClasses';

export default function TaskCard({
  taskTitle,
  taskDate,
  taskPriority,
  taskTag,
  taskIsChecked,
  onCheckChange,
  taskId,
}) {
  return (
    <div
      className={`flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-200 ${
        taskIsChecked ? 'opacity-60' : 'hover:shadow-sm'
      }`}
    >
      <div className="flex items-center gap-4">
        <input
          id={taskId}
          type="checkbox"
          checked={taskIsChecked}
          onChange={onCheckChange}
          className="w-4 h-4"
        />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h3
              className={`text-sm font-bold text-gray-800 ${
                taskIsChecked ? 'line-through' : ''
              }`}
            >
              {taskTitle}
            </h3>
            <span className="text-xs text-gray-500">{taskDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                priorityClasses[taskPriority] || 'bg-gray-100 text-gray-500'
              }`}
            >
              {taskPriority}
            </span>
            <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full font-medium">
              {taskTag}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center text-gray-400 text-sm">
        <FontAwesomeIcon
          icon={faEdit}
          className="cursor-pointer hover:text-gray-700"
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="cursor-pointer hover:text-red-500"
        />
      </div>
    </div>
  );
}
