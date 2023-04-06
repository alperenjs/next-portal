import { useState, useEffect } from "react";
import Router from "next/router";
import Portal from "@/hoc/Portal";

export function Frame() {
  const [key, setKey] = useState(Date.now());

  const handleRouteChange = () => {
    setKey(Date.now());
  };

  useEffect(() => {
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <Portal>
      <iframe
        key={key}
        src="http://www.alperensozen.com/onedose"
        style={{ width: "100%", height: "500px" }}
      />
    </Portal>
  );
}

export default Frame;
