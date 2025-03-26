import { useNavigate } from "react-router-dom";
import { useSiteInfoContext } from "../context/site.info.context";

function Contact() {
  let navigate = useNavigate();
  let { mobile, count } = useSiteInfoContext();
  return (
    <div>
      Contact <button onClick={() => navigate("/")}>Go to Home</button>
      {mobile}
      <p>{count}</p>
    </div>
  );
}

export default Contact;
