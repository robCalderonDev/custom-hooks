import React, { useReducer, useEffect, useState } from 'react'
import { TodoReducer } from './TodoReducer';
const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del ama',
    //     done: false
    // },

];
const init = () => {
    return JSON.parse(localStorage.getItem('todos') || [])
}
const useTodos = () => {


    const [todos, dispatch] = useReducer(TodoReducer, initialState, init)


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))


    }, [todos])
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo
        }
        dispatch(action)
    }
    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] remove todo',
            payload: id
        })
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] toggle todo',
            payload: id
        })
    }


    return {
        todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount: todos.length, pendingTodosCount: todos.filter(todo => !todo.done).length
    }
}
export { useTodos }



