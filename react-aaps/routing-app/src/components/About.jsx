import { useSiteInfoContext } from "../context/site.info.context";

function About() {
  let { mobile, setCount, count } = useSiteInfoContext();
  return (
    <div>
      About {mobile} <button onClick={() => setCount(count + 1)}>INC</button>
    </div>
  );
}

export default About;
