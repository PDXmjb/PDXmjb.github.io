import { Link } from 'react-router-dom';
import './styles.scss';

export default function DragAndDropList() {
  return (
    <div className="exercise">
      <header className="exercise__header">
        <Link to="/" className="exercise__back-link">
          &larr; Back
        </Link>
        <h1>Drag and Drop List</h1>
        <p className="exercise__difficulty exercise__difficulty--intermediate">Intermediate</p>
      </header>

      <section className="exercise__requirements">
        <h2>Requirements</h2>
        <ul>
          <li>List of reorderable items</li>
          <li>Drag item to new position</li>
          <li>Visual feedback during drag (placeholder/ghost)</li>
          <li>Drop indicator showing insertion point</li>
          <li>Update list order on drop</li>
          <li>Use HTML5 Drag and Drop or Pointer Events</li>
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
