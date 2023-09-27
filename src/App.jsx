import { useState } from 'react';
import './App.scss';
import { AiOutlineDelete, AiFillCheckSquare } from 'react-icons/ai';

function App() {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <>
      <div className="App">
        <h1>My Todos</h1>
        <div className="todo__wrapper">
          <div className="todo__wrapper__input">
            <div className="todo__wrapper__input__item">
              <label>Title</label>
              <input type="text" placeholder="What's the task title?" />
            </div>
            <div className="todo__wrapper__input__item">
              <label>Description</label>
              <input type="text" placeholder="What's the task description?" />
            </div>
            <div className="todo__wrapper__input__item">
              <button type="button" className="primaryBtn">
                Add
              </button>
            </div>
          </div>
          <div className="btn-area">
            <button
              className={`secondaryBtn ${isCompleted === false && 'active'}`}
              onClick={() => setIsCompleted(false)}
            >
              Todo
            </button>
            <button
              className={`secondaryBtn ${isCompleted === true && 'active'}`}
              onClick={() => setIsCompleted(true)}
            >
              Completed
            </button>
          </div>
          <div className="todo-list">
            <div className="todo-list__item">
              <h3>Task 1</h3>
              <p>Description</p>
            </div>
            <div className="todo-list__icon">
              <div className="todo-list__icon__delete">
                <AiOutlineDelete />
              </div>
              <div className="todo-list__icon__check">
                <AiFillCheckSquare />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
