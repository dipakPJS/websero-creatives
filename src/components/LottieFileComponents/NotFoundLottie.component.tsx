import Lottie from "react-lottie";
import animationData from "../../../public/lottie/404.json";

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const ErrorLottie: React.FC = () => (
  <div style={{ pointerEvents: "none",
    
   }}>
    <Lottie options={lottieOptions} />
  </div>
);;

export default ErrorLottie;
