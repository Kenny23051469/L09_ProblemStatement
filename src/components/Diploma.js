import { useParams, NavLink, Outlet } from "react-router-dom";
import { getDiploma } from "../api";

export default function Category() {
  const { dipId } = useParams();
  const diploma = getDiploma(dipId);

  return (
    <>
      <h1>Diploma in {diploma.name}</h1>

      <ul className="session-list">
        {diploma?.sessions.map(session => (
          <li className="session" key={session.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "session-active" : null}
              to={session.id}>
              <p className="session-name">{session.id} | {session.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  );
}
