import { useEffect, useState } from 'react';
import './App.scss';
import { AiOutlineDelete, AiFillCheckSquare } from 'react-icons/ai';

function App() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [allTodo, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleChangeTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setNewDescription(e.target.value);
  };

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    };

    let updateTodoArr = [...allTodo];

    updateTodoArr.push(newTodoItem);
    setTodos(updateTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updateTodoArr));
    setNewTitle('');
    setNewDescription('');
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    if (savedTodo) {
      setTodos(savedTodo);
    }
  }, []);

  return (
    <>
      <div className="App">
        <h1>My Todos</h1>
        <div className="todo__wrapper">
          <div className="todo__wrapper__input">
            <div className="todo__wrapper__input__item">
              <label>Title</label>
              <input
                type="text"
                value={newTitle}
                onChange={handleChangeTitle}
                placeholder="What's the task title?"
              />
            </div>
            <div className="todo__wrapper__input__item">
              <label>Description</label>
              <input
                type="text"
                value={newDescription}
                onChange={handleChangeDescription}
                placeholder="What's the task description?"
              />
            </div>
            <div className="todo__wrapper__input__item">
              <button type="button" onClick={handleAddTodo} className="primaryBtn">
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

          {allTodo.map((item, index) => {
            return (
              <>
                <div className="todo-list">
                  <div className="todo-list__item" key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
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
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
