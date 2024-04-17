import { useState } from "react";
export default function Box({ children }) {

  const [isOpen, setIsOpen] = useState(true);

  function handleOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  
  return (
    <div className="box">
      <button className="btn-toggle" onClick={handleOpen}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
