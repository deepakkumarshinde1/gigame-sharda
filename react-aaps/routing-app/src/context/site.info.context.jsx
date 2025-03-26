import { createContext, useContext, useState } from "react";

// #1 create context
const SiteInfoContext = createContext();

// #2 create hook => access data
export function useSiteInfoContext() {
  return useContext(SiteInfoContext);
}

// #3 create a wrapperComponent => provider
export function SiteInfoContextProvider(props) {
  let [count, setCount] = useState(0);

  let shared = {
    mobile: "8007070845",
    count,
    setCount,
  };
  return (
    <SiteInfoContext.Provider value={shared}>
      {props.children}
    </SiteInfoContext.Provider>
  );
}

// Hooks => function component or customCompo => use
