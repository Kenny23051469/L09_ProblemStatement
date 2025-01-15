import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { getDiplomas } from "../api";

export default function Diplomas() {
  const [searchTerm, setSearchTerm] = useState("");
  const diplomas = getDiplomas();

  const filteredDiplomas = diplomas.filter((dip) =>
    dip.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Diplomas</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search diplomas or courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="diploma-list">
        {filteredDiplomas.map((dip) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "category-active" : null
            }
            to={dip.id}
          >
            <div className="diploma-item" key={dip.id}>
              <img
                src={dip.banner}
                alt={dip.name}
                className="diploma-image"
              />
              <h3>{dip.name}</h3>
            </div>
          </NavLink>
        ))}
      </div>

      <Outlet />
    </div>
  );
}


