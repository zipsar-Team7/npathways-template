import { useState, useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Quick fade out - don't block image loading
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <span className="logo-text">Zipway</span>
          <span className="logo-sub">Global</span>
        </div>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
