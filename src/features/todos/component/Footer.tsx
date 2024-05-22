import { Filter } from "../../filters/component/Filters"
import { useTodoAction } from "../hooks/useTodo"

export const Footer = () => {
    const { countTodos, deleteAllTodoCompleted } = useTodoAction()
    
    const count = countTodos()
    const completedCount = countTodos(true)
    
    const onClearCompleted = () => {
        deleteAllTodoCompleted()
    }

    return (
        <footer className="footer">
            <span className="todo-count">
                { count } active tasks
            </span>
            <Filter />
            {
                completedCount > 0 && (
                    <button
                        className="clear-completed"
                        onClick={onClearCompleted}>
                        Delete all completed
                    </button>
                )
            }
        
        </footer>
    )
}