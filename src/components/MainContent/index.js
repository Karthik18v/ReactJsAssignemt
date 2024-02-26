import { CiCircleCheck } from "react-icons/ci";
import { CiCircleAlert } from "react-icons/ci";
import { FaTrophy } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoDiamond } from "react-icons/io5";

import "./index.scss";

const MainContent = () => {
  return (
    <div className="main-container">
      <h1 className="heading">Best Website builders in the US</h1>
      <hr className="horizontal-line" />
      <div className="details-container">
        <div className="details-container-elements">
          <div className="updated-date">
            <CiCircleCheck />
            <p>Last Updated- February 22, 2020</p>
          </div>
          <div className="updated-date">
            <CiCircleAlert />
            <p>Advertising Disclosure</p>
          </div>
        </div>
        <div>
          <select>
            <option value="Top Relevant">Top Relevant</option>
            <option value="Price Low-High">Price Low-High</option>
            <option value="Price High-Low">Price High-Low</option>
            <option value="Rating Low-Hig">Rating Low-High</option>
            <option value="Rating High-Low">Rating High-Low</option>
          </select>
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="service-items-container">
        <p>Tools</p>
        <p>AWS Builder</p>
        <p>Start Build</p>
        <p>Build Supplies</p>
        <p>Tooling</p>
      </div>
      <div className="best-container">
        <FaTrophy />
        <p>Best Choice</p>
      </div>
      <div className="builder-details-container">
        <img
          className="builder-image"
          src="https://img.hotimg.com/187db358671328189d3da83955a6ffe9.png"
          alt="builder"
        />
        <div className="builder-details">
          <p className="builder-content">
            <span className="builder-details-heading">
              WixPro 72-Inch Responsive Website Builder
            </span>
            - Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
          </p>
          <p>
            <span className="builder-details-heading">Main highlights</span>
          </p>
          <p>
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </p>
          <div className="show-more-container">
            <p>Show more</p>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="rating-container">
          <h3>9.8</h3>
          <p>Exceptional</p>
          <img
            className="rating-image"
            src="https://img.hotimg.com/downloadd9adc75dfa011f8b.png"
            alt="rating"
            border="0"
          />
        </div>
      </div>
      <div className="best-container">
        <IoDiamond />
        <p>Best Value</p>
      </div>
      <div className="builder-details-container">
        <img
          className="builder-image"
          src="https://img.hotimg.com/187db358671328189d3da83955a6ffe9.png"
          alt="builder"
        />
        <div className="builder-details">
          <p className="builder-content">
            <span className="builder-details-heading">
              SiteCraft 68-Inch Ultimate Web Design Studio
            </span>
            - Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for
            Dynamic Websites and E-commerce Platforms (Green/White)
          </p>
          <p>
            <span className="builder-details-heading">Main highlights</span>
          </p>
          <p>
            [What You Get]: Gain access to the SiteCraft design studio,
            featuring a robust selection of design elements, SEO optimization
            tools, and e-commerce integrations.
          </p>
          <div className="show-more-container">
            <p>Show more</p>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="rating-container">
          <h3>9.8</h3>
          <p>Exceptional</p>
          <img
            className="rating-image"
            src="https://img.hotimg.com/downloadd9adc75dfa011f8b.png"
            alt="rating"
            border="0"
          />
        </div>
      </div>
      <div className="builder-details-container">
        <img
          className="builder-image"
          src="https://img.hotimg.com/187db358671328189d3da83955a6ffe9.png"
          alt="builder"
        />
        <div className="builder-details">
          <p className="builder-content">
            <span className="builder-details-heading">
              WixPro 72-Inch Responsive Website Builder
            </span>
            - Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
          </p>
          <p>
            <span className="builder-details-heading">Main highlights</span>
          </p>
          <p>
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </p>
          <div className="show-more-container">
            <p>Show more</p>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="rating-container">
          <h3>9.8</h3>
          <p>Exceptional</p>
          <img
            className="rating-image"
            src="https://img.hotimg.com/downloadd9adc75dfa011f8b.png"
            alt="rating"
            border="0"
          />
        </div>
      </div>
      <div className="builder-details-container">
        <img
          className="builder-image"
          src="https://img.hotimg.com/187db358671328189d3da83955a6ffe9.png"
          alt="builder"
        />
        <div className="builder-details">
          <p className="builder-content">
            <span className="builder-details-heading">
              WixPro 72-Inch Responsive Website Builder
            </span>
            - Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
          </p>
          <p>
            <span className="builder-details-heading">Main highlights</span>
          </p>
          <div className="main-highlights-container">
            <div className="main-highlights">
              <h6 className="sub-head">9.9</h6>
              <h6 className="sub-desc">building responsive</h6>
            </div>
            <div className="main-highlights">
              <h6 className="sub-head">8.9</h6>
              <h6 className="sub-desc">Cool</h6>
            </div>
            <div className="main-highlights">
              <h6 className="sub-head">8.9</h6>
              <h6 className="sub-desc">Docs</h6>
            </div>
          </div>
          <p>Why we love it</p>
          <div className="features-container">
            <img
              className="right-image"
              src="https://img.hotimg.com/IMAGE-1.png"
              alt="right"
              border="0"
            />
            <p>Documentation</p>
          </div>
          <div className="features-container">
            <img
              className="right-image"
              src="https://img.hotimg.com/IMAGE-1.png"
              alt="right"
              border="0"
            />
            <p>Easy Use</p>
          </div>
          <div className="features-container">
            <img
              className="right-image"
              src="https://img.hotimg.com/IMAGE-1.png"
              alt="right"
              border="0"
            />
            <p>Out of box</p>
          </div>
          <div className="show-more-container">
            <p>Show more</p>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="rating-container">
          <h3>9.8</h3>
          <p>Exceptional</p>
          <img
            className="rating-image"
            src="https://img.hotimg.com/downloadd9adc75dfa011f8b.png"
            alt="rating"
            border="0"
          />
        </div>
      </div>
      <h1>Related deals you might like for</h1>
      <div className="products-container">
        <div className="product-details">
          <img
            className="product-image"
            src="https://img.hotimg.com/187db358671328189d3da83955a6ffe9.png"
            alt="builder"
          />
          <div className="offers-container">
            <p className="offer-details">20% Off</p>
            <p className="offer-details">Limited time</p>
          </div>
          <h6 className="offer-heading">Webbuilder 1</h6>
          <p>Computer Modern classic with wix support</p>
          <div className="price-container">
            <p className="price">$39.96</p>
            <p className="discount">$49.96</p>
            <p className="percentage">(20% Off)</p>
          </div>
          <button className="view-deal-button">view Deal</button>
        </div>
        <div className="product-details">
          <img
            className="product-image"
            src="https://img.hotimg.com/187db358671328189d3da83955a6ffe9.png"
            alt="builder"
          />
          <div className="offers-container">
            <p className="offer-details">20% Off</p>
            <p className="offer-details">Limited time</p>
          </div>
          <h6 className="offer-heading">Webbuilder 1</h6>
          <p>Computer Modern classic with wix support</p>
          <div className="price-container">
            <p className="price">$39.96</p>
            <p className="discount">$49.96</p>
            <p className="percentage">(20% Off)</p>
          </div>
          <button className="view-deal-button">view Deal</button>
        </div>
        <div className="product-details">
          <img
            className="product-image"
            src="https://img.hotimg.com/187db358671328189d3da83955a6ffe9.png"
            alt="builder"
          />
          <div className="offers-container">
            <p className="offer-details">20% Off</p>
            <p className="offer-details">Limited time</p>
          </div>
          <h6 className="offer-heading">Webbuilder 1</h6>
          <p>Computer Modern classic with wix support</p>
          <div className="price-container">
            <p className="price">$39.96</p>
            <p className="discount">$49.96</p>
            <p className="percentage">(20% Off)</p>
          </div>
          <button className="view-deal-button">view Deal</button>
        </div>
      </div>
      <div className="sign-up-container">
        <p className="sign-description">
          Sign up and get sexclusive special deals
        </p>
        <div>
          <input type="text" className="sign-up-input" />
          <button className="view-deal-button">Signup</button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
