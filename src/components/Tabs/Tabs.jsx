export const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  <ul>
    {tabs.map(tab => (
      <li
        key={tab.id}
        data-cy="Tab"
        className={tab.id === activeTabId ? 'is-active' : ''}
      >
        <a
          data-cy="TabLink"
          href={`#${tab.id}`}
          onClick={e => {
            e.preventDefault();
            if (tab.id !== activeTabId) {
              onTabSelected(tab.id);
            }
          }}
        >
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
);
