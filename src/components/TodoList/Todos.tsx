import React from 'react';
import { TodosType } from './types';
import Todo from './Todo';

type PropData = {
    todos: TodosType[];
    toggleTodo: (v: string) => void;
};
const Todos = ({ todos, toggleTodo }: PropData) => {
    return (
        <>
            <div>
                {todos.map((todo) => {
                    return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />;
                })}
            </div>{' '}
        </>
    );
};

export default Todos;
