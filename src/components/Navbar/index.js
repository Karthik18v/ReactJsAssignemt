import { IoMdSearch } from "react-icons/io";

import "./index.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="search-container">
          <IoMdSearch className="search-icon" />
          <input type="search" className="search-box" />
        </div>
        <p>Categories</p>
        <p>Website Builders</p>
        <p>Today's deals</p>
      </div>
    </div>
  );
};

export default Navbar;
