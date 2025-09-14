'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { priorityClasses } from '../../constants/taskClasses';
import { categoryClasses } from './../../constants/taskClasses';
import Chip from '../ui/chip';

export default function TaskCard({
  taskTitle,
  taskDate,
  taskPriority,
  taskCategory,
  taskIsChecked,
  onCheckChange,
  taskId,
}) {
  const priorityTag = priorityClasses[taskPriority];
  const categoryTag = categoryClasses[taskCategory];
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
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
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
            <Chip
              chipText={priorityTag.label}
              chipBgColor={priorityTag.textColor}
              chipTextColor={priorityTag.bgColor}
            ></Chip>
            <Chip
              chipText={categoryTag.label}
              chipBgColor={categoryTag.textColor}
              chipTextColor={categoryTag.bgColor}
            ></Chip>
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
