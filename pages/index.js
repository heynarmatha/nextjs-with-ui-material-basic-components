import Head from "next/head";
import * as React from "react";
// import MultiTypography from "../src/components/Typography";
// import MuiButton from "../src/components/button";
// import MuiTextField from "../src/components/MuiTextField";
import UiSelect from "../src/components/MuiSelect";
export default function Home() {

  return (
    <div>
      <Head>
        <title>UI Analysis</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="User CRUD app" />
      </Head>
      <main>
        {/* <MultiTypography/> */}
        {/* <MuiButton/> */}
        {/* <MuiTextField/> */}
        <UiSelect/>
      </main>

      <footer>

      </footer>
    </div>
  );
}
