import { useNavigate } from "react-router-dom";
import Carousel from "../components/carousal/Carousel";
function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <Carousel />
      <button
        className="real-button"
        onClick={() => navigate("/posts")}
      >
        Join Our Community!
      </button>
    </div>
  );
}

export default HomePage;
