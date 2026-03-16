import { useNavigate } from "react-router-dom";
import "./BackButton.css";

const BackButton = ({ label = "Back" }) => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      <span className="back-arrow">←</span>
      <span className="back-label">{label}</span>
    </button>
  );
};

export default BackButton;
