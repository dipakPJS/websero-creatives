import Lottie from "react-lottie";
import animationData from "../../../public/lottie/ring.json";

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const RingLottie: React.FC = () => <Lottie options={lottieOptions} />;

export default RingLottie;
