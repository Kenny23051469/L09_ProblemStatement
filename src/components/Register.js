import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { getDiplomas } from "../api";

export default function Register() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const courseRef = useRef(null);
  const [diplomas, setDiplomas] = useState([]);

  useEffect(() => {
    // Fetch diplomas when the component mounts
    const fetchDiplomas = async () => {
      const diplomaList = await getDiplomas();
      setDiplomas(diplomaList);
    };
    fetchDiplomas();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmed", { 
      state: { 
        name: nameRef.current.value,  
        email: emailRef.current.value, 
        course: courseRef.current.value 
      }, 
    });
  }

  return (
    <div className="container">
      <h1>Register your interest</h1>
      <p>Please register the course you are interested in!</p>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name:
          <input type="text" name="name" ref={nameRef} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" ref={emailRef} required />
        </label>
        <label>
          Course:
          <select name="course" ref={courseRef} required>
            <option value="">Select a Diploma</option>
            {diplomas.map((diploma) => (
              <option key={diploma.name} value={diploma.name}>
                {diploma.name}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
