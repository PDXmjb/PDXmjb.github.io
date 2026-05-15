import { createContext, useContext, useMemo, useState } from 'react';

const AccordionContext = createContext(null);

function Accordion({ allowMultiple = false, children }) {
  const [openItemIds, setOpenItemIds] = useState([]);

  const toggle = (id) => {
    const isItemOpen = !!openItemIds.find((i) => i === id);
    if (isItemOpen) {
      setOpenItemIds(openItemIds.filter((i) => i !== id));
      return;
    }

    if (allowMultiple) {
      setOpenItemIds([...openItemIds, id]);
    } else {
      setOpenItemIds([id]);
    }
  };

  return (
    <AccordionContext.Provider value={{ openItemIds, toggle }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

function Title({ children }) {
  return <h2 className="accordion__title">{children}</h2>;
}

function Item({ title, children }) {
  const [id] = useState(() => crypto.randomUUID());
  const { openItemIds, toggle } = useContext(AccordionContext);
  const isOpen = useMemo(
    () => openItemIds?.find((i) => i === id),
    [id, openItemIds],
  );
  return (
    <div className="accordion__item">
      <button type="button" className="accordion__item-header" onClick={() => toggle(id)}>
        <h3 className="accordion__item-title">{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      <div className={`accordion__content ${isOpen ? 'accordion__content--open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

Accordion.Title = Title;
Accordion.Item = Item;

export default Accordion;
