import { Link } from 'react-router-dom';
import './styles.scss';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="exercise">
      <header className="exercise__header">
        <Link className="exercise__back-link" to="/">
          &larr; Back
        </Link>
        <h1>Counter</h1>
        <p className="exercise__difficulty exercise__difficulty--beginner">Novice</p>
      </header>

      <section className="exercise__requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Display a count starting at 0</li>
          <li>Increment button increases count by 1</li>
          <li>Decrement button decreases count by 1</li>
          <li>Reset button sets count back to 0</li>
        </ul>
      </section>

      <section className="exercise__workspace">
        <h2>Your Solution</h2>
        <h3>Current count: {count}</h3>
        <div className="counter__buttons">
          <button
            className="counter__button counter__button--positive"
            type="button"
            onClick={() => {
              setCount((count) => count + 1);
            }}
          >
            Increment
          </button>
          <button
            aria-disabled={count === 0}
            className={`counter__button counter__button--negative ${count === 0 ? 'counter__button--disabled' : ''}`}
            disabled={count === 0}
            type="button"
            onClick={() => {
              setCount((count) => count - 1);
            }}
          >
            Decrement
          </button>
          <button
            className="counter__button"
            type="button"
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      </section>
    </div>
  );
}
