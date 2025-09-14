'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  priorityClasses,
  categoryClasses,
  Priority,
  Category,
} from '../../constants/taskClasses';
import Chip from '../ui/chip';
import React from 'react';

interface TaskCardProps {
  taskTitle: string;
  taskDate: string;
  taskPriority: Priority;
  taskCategory: Category;
  taskIsChecked: boolean;
  onCheckChange: () => void;
  taskId: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  taskTitle,
  taskDate,
  taskPriority,
  taskCategory,
  taskIsChecked,
  onCheckChange,
  taskId,
}) => {
  const priorityTag = priorityClasses[taskPriority];
  const categoryTag = categoryClasses[taskCategory];

  return (
    <div
      className={`group flex items-center bg-gray-50 p-4 rounded-lg border border-gray-200 transition-all duration-300 ${
        taskIsChecked ? 'opacity-60 bg-gray-100' : 'hover:shadow-md'
      }`}
    >
      <div className="flex items-center gap-4 grow">
        <input
          id={taskId}
          type="checkbox"
          checked={taskIsChecked}
          onChange={onCheckChange}
          className="w-4 h-4 rounded border-gray-300 text-brand focus:ring-brand"
        />
        <div className="flex flex-col gap-2 grow">
          <div className="flex flex-col">
            <h3
              className={`text-sm font-bold text-gray-800 transition-colors ${
                taskIsChecked ? 'line-through text-gray-500' : ''
              }`}
            >
              {taskTitle}
            </h3>
            <span
              className={`text-xs text-gray-500 transition-colors ${
                taskIsChecked ? 'line-through' : ''
              }`}
            >
              {taskDate}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Chip
              chipText={priorityTag.label}
              chipBgColor={priorityTag.bgColor}
              chipTextColor={priorityTag.textColor}
            ></Chip>
            <Chip
              chipText={categoryTag.label}
              chipBgColor={categoryTag.bgColor}
              chipTextColor={categoryTag.textColor}
            ></Chip>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
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
};

export default TaskCard;
