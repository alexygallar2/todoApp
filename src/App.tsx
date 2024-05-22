import { Footer } from "./features/todos/component/Footer"
import Header from "./features/todos/component/Header"
import ListOfTodo from "./features/todos/component/listOfTodo"

function App() {
  return (
    <div className="todoapp">
      <Header />
      <ListOfTodo />
      <Footer />
    </div>
  )
}

export default App
