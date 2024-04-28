import '../styles/MenuContext.scss'
import { useState, useEffect, useRef } from "react";

const MenuContext = ({ title }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isContext, setIsContext] = useState({ x: 0, y: 0 });
  const contextRef = useRef(null);

  const showContext = (e) => {
    e.preventDefault();
    setIsContext({ x: e.clientX, y: e.clientY });
    setIsClicked(true);
  };


  const handleEdit = () => {
    console.log("edit");
  };

  const handleRemove = () => {
    console.log("remove");
  };

  const hideContext = () => {
    setIsClicked(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => contextRef.current && !contextRef.current.contains(e.target) ? hideContext() : null;
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isClicked]);

  return (
    <>
      <div className="box" onContextMenu={showContext}>{title}</div>
      {isClicked && (
        <div ref={contextRef} className="context-menu" style={{ top: isContext.y, left: isContext.x }} onClick={hideContext}>
          {title}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      )}
    </>
  )
}

export { MenuContext }