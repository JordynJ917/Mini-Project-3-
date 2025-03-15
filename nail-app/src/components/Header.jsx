import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for styling


const title="Nailed It!" 
const subtitle="Good Quality Press-On's for a Great Price" 

const Header = ({ title, subtitle }) => {
    
  return (
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder" style={{ fontFamily: "'Playwrite AU SA', serif" }}>
            {title}
          </h1>
          <p className="lead fw-normal text-white-50 mb-0">{subtitle}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
