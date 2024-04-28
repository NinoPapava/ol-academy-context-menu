import '../styles/Menu.scss'
import { useState } from "react";

const Menu = ({ title }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isContext, setIsContext] = useState({ x: 0, y: 0 });

  const showContext = (e) => {
    e.preventDefault();
    setIsContext({ x: e.clientX, y: e.clientY });
    setIsClicked(true);
  };

  const hideContext = () => {
    setIsClicked(false);
  };

  return (
    <>
      <div onContextMenu={showContext}>{title}</div>
      {isClicked && (
        <div className="context-menu" style={{ top: isContext.y, left: isContext.x }} onClick={hideContext}>
          Context Menu for {title}
        </div>
      )}
    </>
  )
}

export { Menu }