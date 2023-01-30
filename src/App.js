import { useState, useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './Components/header/Header.jsx';
import Main from './Components/main/Main.jsx';
import Footer from './Components/footer/Footer.jsx';

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Main tasks={tasks} setTasks={setTasks}/>
          <Footer tasks={tasks}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
