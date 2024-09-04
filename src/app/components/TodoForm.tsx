// src/components/TodoForm.tsx
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';

interface Todo {
  id: string;
  task: string;
  date: string;
  completed: boolean;
}

interface TodoFormProps {
  addTodo: (todo: Todo) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task && date) {
      addTodo({
        id: uuidv4(),
        task,
        date: format(new Date(date), 'yyyy-MM-dd'),
        completed: false,
      });
      setTask('');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Add Todo</button>
    </form>
  );
}

export default TodoForm;
