import React from 'react';
import { useState, useRef } from 'react';
import Todos from './Todos';
import { TodosType } from './types';
import uuid from 'react-uuid';

const TodoList = () => {
    const [todos, setTodos] = useState<TodosType[]>([]);
    const inputRefName = useRef<HTMLInputElement>(null);

    const toggleTodo = (id: string): void => {
        const copyTodos = [...todos];
        const todo = copyTodos.find((todo) => todo.id === id);
        if (todo) {
            todo.complete! = !todo.complete;
        }
        setTodos(copyTodos);
    };

    const addTodo = (e: React.MouseEvent): void => {
        const name = inputRefName.current?.value;
        if (name === '') return;
        setTodos([...todos, { id: uuid(), name: name!, complete: false }]);
        if (inputRefName.current !== null) {
            inputRefName.current.value = '';
        }
    };

    const deleteCompleteOnes = (): void => {
        const result = todos.filter((todo) => !todo.complete);
        setTodos(result);
    };

    return (
        <>
            <Todos todos={todos} toggleTodo={toggleTodo} />
            <input ref={inputRefName} type='text' />
            <button onClick={addTodo}>Add</button>
            <button onClick={deleteCompleteOnes}>Delete Completed Ones</button>
            <div>
                You have{' '}
                {
                    todos.filter((todo) => {
                        return !todo.complete;
                    }).length
                }{' '}
                Todos left
            </div>
        </>
    );
};

export default TodoList;
