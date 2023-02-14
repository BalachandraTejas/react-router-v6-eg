import { useLocation } from "react-router-dom"

export default function Confirmation() {
  const { state } = useLocation();
  return (
    <>
      <p>Thank you <strong>{state.email}</strong>, for subscribing!</p>
    </>
  )
};