import React from "react";
import logo from "./logo.svg";
import { useGlobalContext } from "./context";
import { social, links } from "./data";
import { FaTimes } from "react-icons/fa";

const SideBar = () => {
  const { isSidebarOpen, closeSideBar } = useGlobalContext();
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
