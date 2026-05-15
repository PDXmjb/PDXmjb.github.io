import { Link } from 'react-router-dom';
import './styles.scss';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function TodoList() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem('taskList')) || [],
  ); // Load in from localstorage

  const [filter, setFilter] = useState(
    JSON.parse(localStorage.getItem('taskFilter') || null),
  );

  const setFilterHandler = (filterBy) => {
    setFilter(filterBy);
    localStorage.setItem('taskFilter', JSON.stringify(filterBy));
  };

  const {
    register,
    getValues,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm();

  const addItemHandler = (event) => {
    event.preventDefault();
    const newList = [
      ...taskList,
      { id: crypto.randomUUID(), task: getValues('task'), complete: false },
    ];
    setTaskList(newList);
    localStorage.setItem('taskList', JSON.stringify(newList));
    setValue('task', '');
    setFocus('task');
  };

  const updateValue = (updatedArray) => {
    setTaskList(updatedArray);
    localStorage.setItem('taskList', JSON.stringify(updatedArray));
  };

  const removeItemHandler = (id) => {
    const updatedList = taskList.filter((t) => t.id !== id);
    updateValue(updatedList);
  };

  const toggleCompleteItemHandler = (id) => {
    const itemIndex = taskList.findIndex((t) => t.id === id);

    if (itemIndex > -1) {
      const updatedList = [...taskList];
      updatedList[itemIndex].complete = !updatedList[itemIndex].complete;
      updateValue(updatedList);
    }
  };

  const filteredTaskList = useMemo(
    () =>
      filter === null
        ? taskList
        : taskList.filter((t) => t.complete === filter),
    [taskList, filter],
  );

  console.log(getValues(), errors);

  return (
    <div className="exercise">
      <header className="exercise__header">
        <Link className="exercise__back-link" to="/">
          &larr; Back
        </Link>
        <h1>Todo List</h1>
        <p className="exercise__difficulty exercise__difficulty--intermediate">Intermediate</p>
      </header>

      <section className="exercise__requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Add new todos via input field</li>
          <li>Mark todos as complete/incomplete</li>
          <li>Delete todos</li>
          <li>Filter by: All, Active, Completed</li>
          <li>Persist to localStorage</li>
          <li>Show remaining count</li>
        </ul>
      </section>

      <section className="exercise__workspace">
        <h2>Your Solution</h2>
        <form className="todo__form" onSubmit={addItemHandler}>
          <label htmlFor="task">Task:</label>
          <input
            className="todo__input"
            {...register('task')}
            autoComplete="off"
            name="task"
            type="text"
          />
          <button className="todo__submit" type="submit">
            Add
          </button>
        </form>
        <div className="todo__filters">
          <button
            className={filter === null ? 'todo__filter-button todo__filter-button--active' : 'todo__filter-button'}
            type="button"
            onClick={() => setFilterHandler(null)}
          >
            All tasks
          </button>
          <button
            className={filter ? 'todo__filter-button todo__filter-button--active' : 'todo__filter-button'}
            type="button"
            onClick={() => setFilterHandler(true)}
          >
            Complete
          </button>
          <button
            className={filter === false ? 'todo__filter-button todo__filter-button--active' : 'todo__filter-button'}
            type="button"
            onClick={() => setFilterHandler(false)}
          >
            Incomplete
          </button>
        </div>

        <section className="todo__list">
          {filteredTaskList.map((t, _index) => (
            <div className="todo__item" key={t.id}>
              <p className="todo__item-text"> {t.task}</p>
              <div className="todo__item-actions">
                <button type="button" onClick={() => removeItemHandler(t.id)}>
                  🗑️
                </button>
                <button
                  className="todo__complete-button"
                  type="button"
                  onClick={() => toggleCompleteItemHandler(t.id)}
                >
                  {t.complete ? '☑' : '☐'}
                </button>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
