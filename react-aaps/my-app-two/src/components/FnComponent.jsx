import { useEffect, useState } from "react";

function FnComponent() {
  let [count, setCount] = useState(0);

  // mount => single
  useEffect(() => {
    // logic => call an api
  }, []);

  // update => multiple
  useEffect(() => {
    // on delete a data call api of server
  }, [count]);

  // unmounting => single
  useEffect(() => {
    return () => {
      // reset a comp data
    };
  }, []);

  return (
    <>
      <h1>Function Comp {count}</h1>
    </>
  );
}

export default FnComponent;
