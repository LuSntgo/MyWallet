import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Hearts } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <Hearts
        type="Hearts"
        color="pink"
        arialLabel="loading-indicator"
        height={45}
        width={45}
      />
    </>
  );
};
export default Loading;
