import { useState } from "react"
import { useTodoAction } from "../hooks/useTodo"
import { type Todo } from "../todoSlice"

export const AddTodo = () => {
    const [inputValue, setInputValue] = useState('')
    const { addTodo } = useTodoAction()

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            const text = inputValue.trim()
            const newTodo: Todo = {
                id: crypto.randomUUID(),
                text,
                completed: false,
            }
            addTodo(newTodo)
            setInputValue('')
        }
    }

    return (
        <input
          className='new-todo'
          value={inputValue}
          onChange={(e) => { setInputValue(e.target.value) }}
          onKeyDown={handleKeyDown}
          placeholder='What needs to be done?'
          autoFocus
        />
    )
} 