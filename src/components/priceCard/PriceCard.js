import React, { useState } from "react";
import "./priceCard.css";

const PriceCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="container">
        <header>
          <h1>Our Pricing</h1>
          <div className="toggle">
            <label>Annually</label>

            <div className="toggle-btn">
              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChange}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <label>Monthly</label>
          </div>
        </header>
        {/* card */}
        <div className="cards">
          <div className="price-card shadow">
            <ul>
              <li className="category">Basic</li>
              <li className="price bottom-line">
                {isChecked ? "$ 199.99" : "$ 129.99"}
              </li>
              <li className="bottom-line">560 GB Storage</li>
              <li className="bottom-line">2 User Allowed</li>
              <li className="bottom-line">Send Up To 3GB</li>
              <li>
                <button className="btn">Learn More</button>
              </li>
            </ul>
          </div>
          <div className="price-card-active active ">
            <ul>
              <li className="category">Professonal</li>
              <li className="price bottom-line">
                {isChecked ? "$ 299.99" : "$ 229.99"}
              </li>
              <li className="bottom-line">1 TB Storage</li>
              <li className="bottom-line">5 User Allowed</li>
              <li className="bottom-line">Send Up To 10 GB</li>
              <li>
                <button className="btn btn-active">Learn More</button>
              </li>
            </ul>
          </div>
          <div className="price-card shadow">
            <ul>
              <li className="category">Master</li>
              <li className="price bottom-line">
                {isChecked ? "$ 399.99" : "$ 329.99"}
              </li>
              <li className="bottom-line">2 TB Storage</li>
              <li className="bottom-line">10 User Allowed</li>
              <li className="bottom-line">Send Up To 20 GB</li>
              <li>
                <button className="btn">Learn More</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
