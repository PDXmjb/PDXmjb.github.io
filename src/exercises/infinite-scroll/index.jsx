import { Link } from 'react-router-dom';
import './styles.scss';

export default function InfiniteScroll() {
  return (
    <div className="exercise">
      <header className="exercise__header">
        <Link to="/" className="exercise__back-link">
          &larr; Back
        </Link>
        <h1>Infinite Scroll</h1>
        <p className="exercise__difficulty exercise__difficulty--intermediate">Intermediate</p>
      </header>

      <section className="exercise__requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Load initial batch of items</li>
          <li>Detect when user scrolls near bottom</li>
          <li>Fetch and append next batch</li>
          <li>Show loading indicator while fetching</li>
          <li>Handle end of data gracefully</li>
          <li>Use Intersection Observer API</li>
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
