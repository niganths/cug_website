import Loader from "../../assets/gifs/cl.gif";
import "./PreLoader.css"
function Preloader() {
  return(
    <div className="full-screen-image">
    <img src={Loader} alt="Preloader" />
  </div>
  );
}
export default Preloader;
