import { useParams } from "react-router-dom";
import { getSession } from "../api";

export default function Session() {
  const { dipId, sessionId } = useParams();

  const { name, desc } = getSession({ dipId, sessionId });

  return (
    <>
      <h2>Module</h2>
      <h3>{name}</h3>
      <p>{desc}</p>
    </>
  );
}
