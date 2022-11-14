import React from 'react';
import { TodosType } from './types';

type PropData = {
    todo: TodosType;
    toggleTodo: (v: string) => void;
};

const Todo = ({ todo, toggleTodo }: PropData) => {
    const handleTodoClick = (): void => {
        toggleTodo(todo.id);
    };

    return (
        <div>
            <label>
                <input
                    type='checkbox'
                    checked={todo.complete}
                    onChange={handleTodoClick}
                />
                {todo.name}
            </label>
        </div>
    );
};

export default Todo;
