import { Link } from 'react-router-dom';
import './styles.scss';

export default function CollaborativeEditor() {
  return (
    <div className="exercise">
      <header className="exercise__header">
        <Link className="exercise__back-link" to="/">
          &larr; Back
        </Link>
        <h1>Collaborative Text Editor</h1>
        <p className="exercise__difficulty exercise__difficulty--expert">Expert</p>
      </header>

      <section className="exercise__requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Rich text editing (bold, italic, lists)</li>
          <li>Real-time sync between multiple clients</li>
          <li>Conflict resolution (OT or CRDT approach)</li>
          <li>Show other users' cursors</li>
          <li>Handle network disconnection gracefully</li>
          <li>WebSocket or similar for real-time updates</li>
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
