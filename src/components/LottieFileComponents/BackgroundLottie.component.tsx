import Lottie from "react-lottie";
import animationData from "../../../public/lottie/background.json";

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const BackgroundLottie: React.FC = () => <Lottie options={lottieOptions} />;

export default BackgroundLottie;
