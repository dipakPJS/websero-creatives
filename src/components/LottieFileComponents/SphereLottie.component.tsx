import Lottie from "react-lottie";
import animationData from "../../../public/lottie/globe.json";

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const SphereLottie: React.FC = () => <Lottie options={lottieOptions} />;

export default SphereLottie;
