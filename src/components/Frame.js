import React, { memo } from "react";

const Frame = memo(({ src }) => {
  return <iframe width={1200}height={900} src={src} />;
});

export default Frame;
