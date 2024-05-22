

import { todoAdded, todoToggled, todoDelete, type Todo, todoDeleteAllCompleted } from "../../../features/todos/todoSlice";
import { useAppDispatch, useAppSelector } from "./store";

export const useTodoAction = () => {
	const dispatch = useAppDispatch();
    const todos = useAppSelector(state => state.todos);

	const addTodo = ( todo: Todo ) => {
		dispatch(todoAdded(todo))
	}

	const toggleTodo = (id: string) => {
		dispatch(todoToggled(id));
	};

    const deleteTodo = (id: string) => {
        dispatch(todoDelete(id));
    }

    const deleteAllTodoCompleted = () => {
        dispatch(todoDeleteAllCompleted())
    }

    const countTodos = ( countCompleted = false) => {
        return todos.filter(todo => countCompleted ? todo.completed : !todo.completed)?.length || 0;
    }

	return { addTodo, toggleTodo, deleteTodo, countTodos, deleteAllTodoCompleted };
};