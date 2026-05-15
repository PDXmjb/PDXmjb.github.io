import { Link } from 'react-router-dom';
import './styles.scss';

export default function UndoRedo() {
  return (
    <div className="exercise">
      <header className="exercise__header">
        <Link to="/" className="exercise__back-link">
          &larr; Back
        </Link>
        <h1>Undo/Redo Functionality</h1>
        <p className="exercise__difficulty exercise__difficulty--advanced">Advanced</p>
      </header>

      <section className="exercise__requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Canvas or editor with user actions</li>
          <li>Undo button reverts last action</li>
          <li>Redo button re-applies undone action</li>
          <li>Keyboard shortcuts (Ctrl+Z, Ctrl+Y)</li>
          <li>Disable buttons when history is empty</li>
          <li>Clear redo stack on new action</li>
        </ul>
      </section>

      <section className="exercise__workspace">
        <h2>Your Solution</h2>
        {/* Build your solution here */}
        <p className="exercise__placeholder">Start coding!</p>
      </section>
    </div>
  );
}
