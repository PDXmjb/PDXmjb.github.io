import { Link } from 'react-router-dom';
import './styles.scss';

export default function ImageCarousel() {
  return (
    <div className="exercise">
      <header className="exercise__header">
        <Link to="/" className="exercise__back-link">
          &larr; Back
        </Link>
        <h1>Image Carousel</h1>
        <p className="exercise__difficulty exercise__difficulty--intermediate">Intermediate</p>
      </header>

      <section className="exercise__requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Display images in a slideshow</li>
          <li>Previous/Next navigation buttons</li>
          <li>Dot indicators showing current position</li>
          <li>Optional: autoplay with pause on hover</li>
          <li>Smooth slide transitions</li>
          <li>Loop back to start/end</li>
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
