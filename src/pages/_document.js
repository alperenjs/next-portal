import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <div id="myportal">
          <iframe width={800} height={600} src="http://www.alperensozen.com/onedose"></iframe>
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
