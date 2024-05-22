import { useTodoAction } from '../hooks/useTodo'
import { type Todo } from "../todoSlice"


export const TodoView: React.FC<Todo> = ({
  id,
  text,
  completed
}) => {
  //const inputEditTitle = useRef<HTMLInputElement>(null)
  const { toggleTodo, deleteTodo } = useTodoAction()

//   const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
//     if (e.key === 'Enter') {
//       setEditedTitle(editedTitle.trim())

//       if (editedTitle !== title) {
//         setTitle({ id, title: editedTitle })
//       }

//       if (editedTitle === '') removeTodo(id)

//       setIsEditing('')
//     }

//     if (e.key === 'Escape') {
//       setEditedTitle(title)
//       setIsEditing('')
//     }
//   }

//   useEffect(() => {
//     inputEditTitle.current?.focus()
//   }, [isEditing])

  return (
    <>
      <div className='todo'>
        <input
          className='toggle'
          checked={completed}
          type='checkbox'
          onChange={() => { toggleTodo(id) }}
        />
        <label>{text}</label>
        <button className='destroy' onClick={() => { deleteTodo(id) }}></button>
      </div>

      {/* <input
        className='edit'
        value={editedTitle}
        onChange={(e) => { setEditedTitle(e.target.value) }}
        onKeyDown={handleKeyDown}
        onBlur={() => { setIsEditing('') }}
        ref={inputEditTitle}
      /> */}
    </>
  )
}