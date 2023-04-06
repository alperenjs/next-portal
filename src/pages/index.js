import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Portal from "@/hoc/Portal";
import { useRouter } from "next/router";
import Frame from "@/components/Frame";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const navigate = () => {
    router.push("/second");
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button onClick={() => navigate()}>To 2</button>
          <Frame />
      </main>
    </>
  );
}
