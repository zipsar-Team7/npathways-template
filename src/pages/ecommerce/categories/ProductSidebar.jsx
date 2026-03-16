import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./CategoryPages.css";

const ProductSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const categories = [
    { name: "Assessments", link: "/products/assessments" },
    { name: "Bootcamps", link: "/products/bootcamps" },
    { name: "Programs", link: "/products/programs" },
    { name: "Full Pathways", link: "/products/pathways" },
  ];

  return (
    <nav className="product-topbar">
      <ul className="topbar-nav">
        {categories.map((cat) => (
          <li key={cat.name}>
            <Link
              to={cat.link}
              className={`topbar-link ${
                currentPath === cat.link ? "active" : ""
              }`}
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProductSidebar;
