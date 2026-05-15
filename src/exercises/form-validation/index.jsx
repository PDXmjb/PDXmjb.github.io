import { Link } from 'react-router-dom';
import './styles.scss';

export default function FormValidation() {
  return (
    <div className="exercise">
      <header className="exercise__header">
        <Link to="/" className="exercise__back-link">
          &larr; Back
        </Link>
        <h1>Form Validation</h1>
        <p className="exercise__difficulty exercise__difficulty--intermediate">Intermediate</p>
      </header>

      <section className="exercise__requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Multiple field types: text, email, password, select</li>
          <li>Real-time validation as user types</li>
          <li>Display error messages per field</li>
          <li>Disable submit until form is valid</li>
          <li>Show success state on valid submit</li>
          <li>Password confirmation matching</li>
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
