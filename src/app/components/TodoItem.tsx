// src/components/TodoItem.tsx
import React, { useState } from 'react';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

interface Todo {
  id: number;
  task: string;
  date: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  updateTodo: (id: number, updatedTodo: Todo) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);
  const [newDate, setNewDate] = useState(todo.date);

  const handleUpdate = () => {
    updateTodo(todo.id, { ...todo, task: newTask, date: newDate });
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center mb-2">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border p-2 rounded w-full mr-2"
          />
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="border p-2 rounded w-full mr-2"
          />
          <button onClick={handleUpdate} className="bg-green-500 text-white p-2 rounded"><FaCheck /></button>
        </>
      ) : (
        <>
          <span>{todo.task} - {todo.date}</span>
          <div>
            <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white p-2 rounded mr-2"><FaEdit /></button>
            <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white p-2 rounded"><FaTrash /></button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
