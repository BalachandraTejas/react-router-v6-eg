import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Subscription() {
  const navigate = useNavigate();
  const emailRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmed", { state: { email: emailRef.current.value }});
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter email:&nbsp;
          <input type="email" ref={emailRef}></input>
        </label>&nbsp;
        <button type="submit">Submit</button>
      </form>
    </>
  );
};