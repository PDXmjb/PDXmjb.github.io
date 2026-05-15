import { createContext, useContext, useState } from 'react';

const TabsContext = createContext(null);

function TabsContainer({ tabs, children }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const selectTab = (tab) => setSelectedTab(tab);

  return (
    <TabsContext.Provider value={{ selectedTab, selectTab }}>
      <div className="tabs">
        {tabs.map((t) => (
          <button
            type="button"
            key={t}
            className={selectedTab === t ? 'tabs__button tabs__button--active' : 'tabs__button'}
            onClick={() => selectTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

function Tab({ label, children }) {
  const { selectedTab } = useContext(TabsContext);

  if (label !== selectedTab) {
    return null;
  }

  return <div className="tabs__content">{children}</div>;
}

TabsContainer.Tab = Tab;

export default TabsContainer;
