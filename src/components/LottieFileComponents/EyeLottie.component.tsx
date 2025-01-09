import Lottie from "react-lottie";
import animationData from "../../../public/lottie/eye.json";

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const EyeLottie: React.FC = () => (
    <div style={{
        pointerEvents: "none",
        
    }}>
        <Lottie options={lottieOptions}/>
    </div>
);

export default EyeLottie;
