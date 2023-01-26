import { useState } from 'react';
import './Components/UI/Form/Form.css';
import Form from './Components/UI/Form/Form';
import UserList from './Components/UserLlist/UserList';
import Header from './Components/Header/Header';

function App() {
  const[userlist, setUserList] = useState([]);

  const AddUser = (name) =>{
    setUserList((prevUserList) =>{
      return [...prevUserList, {name:name, isDone: false, id: Math.random().toString()}]
    })
  }

  const deleteUser = (index) =>{
    const deletetodo = [...userlist];
    deletetodo.splice(index, 1);
    setUserList(deletetodo);
  }

  const markTodo = (index) =>{
    const doneTodo = [...userlist];
    doneTodo[index].isDone = true;
    setUserList(doneTodo);
  }

  return (
        <>
          <Header />
          <div className="main-content">
            <div className='main-content-items'>
              <Form AddUser={AddUser} />
              <UserList userlist={userlist} deleteUser={deleteUser} markTodo={markTodo} />
            </div>
          </div>
        </>
  );
}

export default App;
