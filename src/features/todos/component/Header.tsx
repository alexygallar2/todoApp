import { AddTodo } from "./AddTodo";

const Header = () => {
    return (
        <header className="header">
          <h1>
            My ToDo List!
            <img 
                style={{ width: '60px', height: 'auto', borderRadius: '50%'}}
                src ="https://avatars.githubusercontent.com/u/13223141?v=4" 
                alt="Avatar" 
                className="avatar"
            />
          </h1>
          <AddTodo />
            
        </header>
    );

}

export default Header;