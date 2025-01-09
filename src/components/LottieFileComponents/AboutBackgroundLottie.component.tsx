import Lottie from "react-lottie";
import animationData from "../../../public/lottie/AboutBackground.json";

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const AboutBackgroundLottie: React.FC = () => (
    <div className="h-full w-full">
        <Lottie options={lottieOptions} />
    </div>
);

export default AboutBackgroundLottie;
