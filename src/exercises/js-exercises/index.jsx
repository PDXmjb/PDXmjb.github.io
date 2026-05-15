import { Link } from 'react-router-dom';
import './styles.scss';
import { convertStringToTree } from './convert-string-to-tree';

export default function JSExercisesDisplayer() {
  const result = convertStringToTree('4(2(3)(1))(6(5))');
  return (
    <div className="exercise">
      <header className="exercise__header">
        <Link to="/" className="exercise__back-link">
          &larr; Back
        </Link>
        <h1>JS Exercises</h1>
        <p className="exercise__difficulty exercise__difficulty--intermediate">Intermediate</p>
      </header>

      <section className="exercise__requirements">
        <h2>Requirements</h2>
      </section>

      <section className="exercise__workspace">
        <h2>Your Solution</h2>
        <p className="exercise__placeholder">Start coding!</p>
        <p>{JSON.stringify(result)}</p>
      </section>
    </div>
  );
}
