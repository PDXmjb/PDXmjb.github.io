import { Link } from 'react-router-dom';
import './styles.scss';

export default function Autocomplete() {
  return (
    <div className="exercise">
      <header className="exercise__header">
        <Link to="/" className="exercise__back-link">
          &larr; Back
        </Link>
        <h1>Autocomplete / Typeahead</h1>
        <p className="exercise__difficulty exercise__difficulty--intermediate">Intermediate</p>
      </header>

      <section className="exercise__requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Text input with suggestions dropdown</li>
          <li>Debounce input to limit API calls</li>
          <li>Keyboard navigation (up/down arrows, Enter, Escape)</li>
          <li>Highlight matching text in suggestions</li>
          <li>Handle loading and empty states</li>
          <li>Close dropdown on outside click</li>
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
