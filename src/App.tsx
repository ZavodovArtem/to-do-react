import React, { useState } from 'react';
import './App.css';
import Todolist from './Todolist';



export type FilterValuesType = 'all' |  'complited' |  'active';

function App() {
  

  // let initTasks = [
  //   {id:1, title: 'CSS', isDone: true},
  //   {id:2, title: 'JsdfsdfgregS', isDone: true},
  //   {id: 3, title: 'React', isDone: true},
  //   {id:4, title: 'redux', isDone: false}
  // ]

  let tasks2 = [
    {id:1, title: 'DOM', isDone: false},
    {id:2, title: 'old', isDone: false},
    {id: 3, title: 'basket', isDone: false},
    {id:1, title: 'DOM', isDone: false},
    {id:2, title: 'old', isDone: false},
    {id: 3, title: 'basket', isDone: false},
  ]


  // let [tasks1, setTasks] = useState(initTasks);  Вместо такой строки с переменной
  let [tasks1, setTasks] = useState([
    {id:1, title: 'CSS', isDone: true},
    {id:2, title: 'JsdfsdfgregS', isDone: true},
    {id: 3, title: 'React', isDone: true},
    {id:4, title: 'redux', isDone: false}
  ]);

  let [filter, setFilter] = useState <FilterValuesType> ('active'); 



  function removeTask(id: number) {
    // debugger
    // let removeT = tasks1.filter( (t) => { 
    //   // -------------------------  ниже расписана строка, (строки самой нижней)
    //   // if (t.id !== id) {return true;
    //   // } else{
    //   // return false} 
    //   // --------------- ниже отдельная строка говорит о том, что t.id не равен тому id, который необходимо удалить.
    //   // return t.id !== id
    // })

    // console.log(removeT);
    
    let filteredTasks = tasks1.filter( t => t.id !== id)
    setTasks(filteredTasks);
  }

  function changeFilter (value: FilterValuesType) {
    setFilter (value);
  }



  let tasksForTodoList = tasks1;
  if(filter === 'complited') {
    tasksForTodoList = tasks1.filter( t => t.isDone === true)
  }
  if(filter === 'active') {
    tasksForTodoList = tasks1.filter( t => t.isDone === false)
  }

  return (
    <div className="App">
      <Todolist title = 'what is learn' 
        tasks = {tasksForTodoList}  
        removeTask={removeTask}
        changeFilter = {changeFilter}
      />
      <Todolist  title = "werwer" tasks = {tasks2} />
      {/* <Todolist title = 'erhweth'/> */}
      {/* <input type='checkbox' /> */}
      {/* <input type='date' /> */}
    </div>
  );
}



export default App;
function useState2(initTasks: { id: number; title: string; isDone: boolean; }[]): [any, any] {
  throw new Error('Function not implemented.');
}

