import React, { useState } from "react";
import classNames from "classnames";
import css from "./tabs.scss";

const cn = classNames.bind(css);

const Tabs = ({ tabs, defaultActive }) => {
  const [activeTab, setActiveTab] = useState(defaultActive ?? tabs[0].key);
  return (
    <>
      <nav className="mypage-tabs-nav-container">
        <ul>
          {tabs.map(({ title }, index) => (
            <li key={String(index)}>
              <button
                className={cn({
                  active: index === activeTab
                })}
                onClick={() => setActiveTab(index)}
              >
                <span>{title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div>{tabs.find((_, i) => i === activeTab).render()}</div>
    </>
  );
};

export default Tabs;
