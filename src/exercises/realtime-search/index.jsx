import { Link } from 'react-router-dom';
import './styles.scss';

export default function RealtimeSearch() {
  return (
    <div className="exercise">
      <header className="exercise__header">
        <Link to="/" className="exercise__back-link">
          &larr; Back
        </Link>
        <h1>Real-time Search with Caching</h1>
        <p className="exercise__difficulty exercise__difficulty--advanced">Advanced</p>
      </header>

      <section className="exercise__requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Search input that queries an API</li>
          <li>Debounce requests</li>
          <li>Cache previous search results</li>
          <li>Handle race conditions (ignore stale responses)</li>
          <li>Loading, error, and empty states</li>
          <li>Clear cache option</li>
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
