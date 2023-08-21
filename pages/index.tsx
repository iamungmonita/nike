import { Banner, Slider } from "@/core";
import Head from "next/head";

import { getAllTrending } from "@/pages/service";
export default function Home() {
  return (
    <main>
      <Head><title>Nike</title></Head>
      <Banner />
    </main>
  )
}
