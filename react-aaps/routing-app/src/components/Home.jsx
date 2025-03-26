import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home <Link to="/about-us">About</Link>
    </div>
  );
}

export default Home;
