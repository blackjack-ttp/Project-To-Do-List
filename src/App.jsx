import { useEffect, useState } from 'react';
import './App.scss';
import { AiOutlineDelete, AiFillCheckSquare } from 'react-icons/ai';

function App() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [allTodo, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [completedTodo, setCompletedTodo] = useState([]);

  const handleChangeTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setNewDescription(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodoItem = {
      title: newTitle,
      description: newDescription,
    };

    const updateTodoArr = [...allTodo];

    updateTodoArr.push(newTodoItem);
    setTodos(updateTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updateTodoArr));
    setNewTitle('');
    setNewDescription('');
  };

  const handleDeleteTodo = (index) => {
    const reducedTodo = [...allTodo];
    reducedTodo.splice(index, 1);
    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  };

  const handleComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let hh = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    const completeOn = dd + ' - ' + mm + ' - ' + yyyy + ' at ' + hh + ' : ' + min + ' : ' + sec;
    const filteredItem = {
      ...allTodo[index],
      completeOn: completeOn,
    };
    const updatedCompleteArr = [...completedTodo];
    updatedCompleteArr.push(filteredItem);
    setCompletedTodo(updatedCompleteArr);
    handleDeleteTodo(index);
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompleteArr));
  };

  const handleDeleteCompletedTodo = (index) => {
    const reducedTodo = [...completedTodo];
    reducedTodo.splice(index, 1);
    localStorage.setItem('completedTodos', JSON.stringify(reducedTodo));
    setCompletedTodo(reducedTodo);
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
    if (savedTodo) {
      setTodos(savedTodo);
    }
    if (savedCompletedTodo) {
      setCompletedTodo(savedCompletedTodo);
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

          {isCompleted === false &&
            allTodo.map((item, index) => {
              return (
                <>
                  <div className="todo-list">
                    <div className="todo-list__item" key={index}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <div className="todo-list__icon">
                      <div className="todo-list__icon__delete" title="Delete">
                        <AiOutlineDelete onClick={() => handleDeleteTodo(index)} />
                      </div>
                      <div className="todo-list__icon__check" title="Check">
                        <AiFillCheckSquare onClick={() => handleComplete(index)} />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          {isCompleted === true &&
            completedTodo.map((item, index) => {
              return (
                <>
                  <div className="todo-list">
                    <div className="todo-list__item" key={index}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <p>
                        <small>Completed on: {item.completeOn}</small>
                      </p>
                    </div>
                    <div className="todo-list__icon">
                      <div className="todo-list__icon__delete" title="Delete">
                        <AiOutlineDelete onClick={() => handleDeleteCompletedTodo(index)} />
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
