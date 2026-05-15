import { Link } from 'react-router-dom';
import './styles.scss';

export default function KanbanBoard() {
  return (
    <div className="exercise">
      <header className="exercise__header">
        <Link to="/" className="exercise__back-link">
          &larr; Back
        </Link>
        <h1>Kanban Board</h1>
        <p className="exercise__difficulty exercise__difficulty--advanced">Advanced</p>
      </header>

      <section className="exercise__requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Multiple columns (e.g., Todo, In Progress, Done)</li>
          <li>Cards within each column</li>
          <li>Drag cards between columns</li>
          <li>Reorder cards within a column</li>
          <li>Add new cards</li>
          <li>Edit/delete cards</li>
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
