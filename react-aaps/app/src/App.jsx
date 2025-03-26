import { useState } from "react";
import Input from "./Input";

function App() {
  // hooks => function in javascript which handles a complex task
  // useState => hook which is used to handle state in functional component
  // useState => returns an array with two elements
  // 1. state variable
  // 2. function to update the state variable

  const [inputs, setInputs] = useState({
    username: "",
    userEmail: "",
    mobile: "",
    address: "",
  });

  let handelChange = (event) => {
    let { value, name } = event.target;
    setInputs({ ...inputs, [name]: value });
  };
  return (
    <div>
      <h1>Hello, World!</h1>
      <Input
        label="Name"
        placeholder="Enter Name"
        handelChange={handelChange}
        name="username"
      />
      <Input
        label="Email"
        placeholder="Enter Email Id"
        type="email"
        handelChange={handelChange}
        name="userEmail"
      />

      <Input
        label="Mobile"
        placeholder="Enter Mobile Number"
        type="number"
        handelChange={handelChange}
        name="mobile"
      />
      <Input
        label="Address"
        placeholder="Enter Address"
        handelChange={handelChange}
        name="address"
      />
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
