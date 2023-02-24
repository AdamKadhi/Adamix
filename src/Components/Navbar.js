import React, { useState, useEffect } from "react";
const Navbar = (props) => {
  const { show,setShow, handleInputChange } = props;

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 280) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  
  return (
    <nav className={`nav_bar ${scroll ? "scroll" : ""}`}>
      <div className="left_nav_bar">
        <h1>ADAMIX</h1>
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li onClick={()=>setShow(!show)}>Add <i className="fa-solid fa-plus"></i></li>
        </ul>
      </div>

      <div className="right_nav_bar">
        <div className="search-box">
          <button className="btn-search">
            <i className="fas fa-search"></i>
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Type to Search..."
            onChange={handleInputChange}
          />
        </div>
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-circle-user"></i>
      </div>
      
    </nav>
    
    
  );
  
};


export default Navbar;
