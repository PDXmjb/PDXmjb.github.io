import { Link } from 'react-router-dom';
import './Home.scss';

const exercises = [
  // Novice
  {
    path: '/counter',
    title: 'Counter',
    description: 'Basic state management with increment/decrement',
    tags: ['state', 'events'],
    difficulty: 'novice',
    disabled: false,
  },
  {
    path: '/toggle-switch',
    title: 'Toggle Switch',
    description: 'CSS transitions and controlled components',
    tags: ['css', 'a11y'],
    difficulty: 'novice',
    disabled: false,
  },
  {
    path: '/accordion',
    title: 'Accordion',
    description: 'Collapsible sections with animations',
    tags: ['conditional rendering', 'state'],
    difficulty: 'novice',
    disabled: false,
  },
  {
    path: '/star-rating',
    title: 'Star Rating',
    description: 'Interactive rating with hover preview',
    tags: ['events', 'dynamic styling'],
    difficulty: 'novice',
    disabled: false,
  },
  {
    path: '/tabs',
    title: 'Tabs Component',
    description: 'Tab navigation with keyboard support',
    tags: ['composition', 'a11y'],
    difficulty: 'novice',
    disabled: false,
  },

  // Intermediate
  {
    path: '/todo-list',
    title: 'Todo List',
    description: 'CRUD operations with localStorage persistence',
    tags: ['state', 'forms', 'localStorage'],
    difficulty: 'intermediate',
    disabled: false,
  },
  {
    path: '/modal-dialog',
    title: 'Modal Dialog',
    description: 'Accessible modal with focus trap and portal',
    tags: ['portals', 'a11y', 'focus'],
    difficulty: 'intermediate',
    disabled: false,
  },
  {
    path: '/infinite-scroll',
    title: 'Infinite Scroll',
    description: 'Load more data as user scrolls',
    tags: ['Intersection Observer', 'pagination'],
    difficulty: 'intermediate',
    disabled: false,
  },
  {
    path: '/autocomplete',
    title: 'Autocomplete',
    description: 'Typeahead with debounce and keyboard nav',
    tags: ['debounce', 'async', 'keyboard'],
    difficulty: 'intermediate',
    disabled: false,
  },
  {
    path: '/form-validation',
    title: 'Form Validation',
    description: 'Real-time validation with error states',
    tags: ['forms', 'validation'],
    difficulty: 'intermediate',
    disabled: false,
  },
  {
    path: '/image-carousel',
    title: 'Image Carousel',
    description: 'Slideshow with navigation and autoplay',
    tags: ['css transforms', 'timers'],
    difficulty: 'intermediate',
    disabled: false,
  },
  {
    path: '/drag-and-drop-list',
    title: 'Drag and Drop List',
    description: 'Reorderable list with visual feedback',
    tags: ['DnD API', 'reordering'],
    difficulty: 'intermediate',
    disabled: false,
  },
  {
    path: '/product-page',
    title: 'Product Page',
    description: 'E-commerce product display with cart interactions',
    tags: ['state', 'forms', 'e-commerce'],
    difficulty: 'intermediate',
    disabled: false,
  },
  {
    path: '/js-exercises',
    title: 'JS Exercises',
    description: 'Various Leetcode exercises',
    tags: ['Leetcode', 'Trees'],
    difficulty: 'intermediate',
    disabled: false,
  },

  // Advanced
  {
    path: '/data-table',
    title: 'Data Table',
    description: 'Sortable, filterable table with pagination',
    tags: ['useMemo', 'performance'],
    difficulty: 'advanced',
    disabled: false,
  },
  {
    path: '/multi-step-form',
    title: 'Multi-step Form',
    description: 'Wizard with step validation and review',
    tags: ['forms', 'state machine'],
    difficulty: 'advanced',
    disabled: false,
  },
  {
    path: '/kanban-board',
    title: 'Kanban Board',
    description: 'Drag cards between columns',
    tags: ['DnD', 'complex state'],
    difficulty: 'advanced',
    disabled: false,
  },
  {
    path: '/realtime-search',
    title: 'Real-time Search',
    description: 'Cached API search with race condition handling',
    tags: ['caching', 'async'],
    difficulty: 'advanced',
    disabled: false,
  },
  {
    path: '/undo-redo',
    title: 'Undo/Redo',
    description: 'Command pattern with state history',
    tags: ['patterns', 'history'],
    difficulty: 'advanced',
    disabled: false,
  },
  {
    path: '/vector',
    title: 'Vector exercise',
    description: 'Exercise during the 3rd interview with Vector',
    tags: ['interview'],
    difficulty: 'advanced',
    disabled: false,
  },

  // Expert
  {
    path: '/virtual-list',
    title: 'Virtual List',
    description: 'Render 10k+ items efficiently',
    tags: ['virtualization', 'performance'],
    difficulty: 'expert',
    disabled: false,
  },
  {
    path: '/spreadsheet',
    title: 'Spreadsheet',
    description: 'Grid editor with formulas and cell refs',
    tags: ['grid', 'formulas', 'keyboard'],
    difficulty: 'expert',
    disabled: false,
  },
  {
    path: '/collaborative-editor',
    title: 'Collaborative Editor',
    description: 'Real-time sync with conflict resolution',
    tags: ['CRDT', 'WebSocket'],
    difficulty: 'expert',
    disabled: true,
  },
];

const difficultyOrder = { novice: 0, intermediate: 1, advanced: 2, expert: 3 };
const difficultyLabels = {
  novice: 'Novice',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  expert: 'Expert',
};

function Home() {
  const grouped = exercises.reduce((acc, ex) => {
    if (!acc[ex.difficulty]) acc[ex.difficulty] = [];
    acc[ex.difficulty].push(ex);
    return acc;
  }, {});

  const sortedDifficulties = Object.keys(grouped).sort(
    (a, b) => difficultyOrder[a] - difficultyOrder[b],
  );

  return (
    <main className="home">
      <header className="home__header">
        <h1>Frontend Exercises</h1>
        <p className="home__subtitle">
          Practice projects for senior-level frontend interviews
        </p>
      </header>

      {sortedDifficulties.map((difficulty) => (
        <section className="home__section" key={difficulty}>
          <h2
            className={`home__section-title home__section-title--${difficulty}`}
          >
            {difficultyLabels[difficulty]}
          </h2>
          <ul className="home__grid">
            {grouped[difficulty].map((exercise) => (
              <li key={exercise.path}>
                {exercise.disabled ? (
                  <div className="home__card home__card--disabled">
                    <h3>{exercise.title}</h3>
                    <p>{exercise.description}</p>
                    <div className="home__tags">
                      {exercise.tags.map((tag) => (
                        <span className="home__tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    className="home__card"
                    disabled={exercise.disabled}
                    to={exercise.path}
                  >
                    <h3>{exercise.title}</h3>
                    <p>{exercise.description}</p>
                    <div className="home__tags">
                      {exercise.tags.map((tag) => (
                        <span className="home__tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}

export default Home;
