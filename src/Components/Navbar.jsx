import React from "react";
import "../Components/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt=""
          width="150px"
          className="logo"
        />

        <div >
          <select name="language">
            <option value="">English</option>
            <option value="">हिन्दी</option>
          </select>
          <button id="signin">Sign In</button>
        </div>
      </nav>


    </div>
  );
};

export default Navbar;
