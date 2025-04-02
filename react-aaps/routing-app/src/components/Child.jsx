import { forwardRef, memo, useImperativeHandle } from "react";

function Child({ result, MoreCalc }, ref) {
  console.log("Child Component");

  useImperativeHandle(ref, () => {
    return {
      getValue() {
        console.log("getValueFunction");
      },
      setValue() {
        console.log("set Value");
      },
    };
  });
  return (
    <div>
      Child {result} {MoreCalc()}
    </div>
  );
}

export default memo(forwardRef(Child));
