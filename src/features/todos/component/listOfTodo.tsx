import { RootState } from "../../../store/store";
import { useAppSelector } from "../hooks/store";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { TodoView } from "./Todo";
import { useFilterAction } from "../hooks/useFilters";
import { useMemo } from "react";
import { TODO_FILTERS } from "../../filters/filtersSlice";


const ListOfTodo = () => {
    const { todos } = useAppSelector((state: RootState) => state);
    const { currentFilter } = useFilterAction()

    const [parent] = useAutoAnimate(/* optional config */)
    
    const filterTodos = useMemo(() => {
        return todos.filter(
            todo => {
                if (currentFilter == TODO_FILTERS.ALL) return true
                if (currentFilter == TODO_FILTERS.ACTIVE) return !todo.completed
                if (currentFilter == TODO_FILTERS.COMPLETED) return todo.completed
            }
        )
    }, [currentFilter, todos])

    return (
        <ul className='todo-list' ref={parent}>
            {filterTodos.map((todo) => (
                <li
                key={todo.id}
                //onDoubleClick={() => { setIsEditing(todo.id) }}
                className={`${todo.completed ? 'completed' : ''}`}
              >
                <TodoView 
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                />
            </li>
            ))}
        </ul>
    );
    }

export default ListOfTodo;