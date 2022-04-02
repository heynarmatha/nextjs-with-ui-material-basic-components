import Head from "next/head";
import * as React from "react";
import MultiTypography from "../src/components/Typography";
export default function Home() {

  return (
    <div>
      <Head>
        <title>UI Analysis</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="User CRUD app" />
      </Head>
      <main>
        <MultiTypography/>
      </main>

      <footer>

      </footer>
    </div>
  );
}
