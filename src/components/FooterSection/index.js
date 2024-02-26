import "./index.scss";

const FooterSection = () => {
  return (
    <div className="footer-section">
      <div className="categories-container">
        <h6 className="category-heading">Category</h6>
        <p className="category-item">Web Builder</p>
        <p className="category-item">Hosting</p>
        <p className="category-item">Data Center</p>
        <p className="category-item">Robotic-Automation</p>
      </div>
      <div className="categories-container">
        <h6 className="category-heading">Contact</h6>
        <p className="category-item">Contact</p>
        <p className="category-item">Privacy Policy</p>
        <p className="category-item">Terms Of Service</p>
        <p className="category-item">Categories</p>
        <p className="category-item">About</p>
      </div>
      <div>
        <select className="select-element">
          <option>United States</option>
          <option>India</option>
        </select>
      </div>
    </div>
  );
};

export default FooterSection;
