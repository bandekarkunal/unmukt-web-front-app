import Head from "next/head";
import React from "react";

interface metadataProps {
  title: any;
}

const Metadata: React.FunctionComponent<metadataProps> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title} | Unmukt</title>
        <meta
          name="description"
          content="Milaan Foundation is a non-profit, human rights-based organization, which envisions an inclusive and equal world, where every girl has the knowledge, skills, and social environment to pursue her dreams and explore her full potential."
        />
      </Head>
    </>
  );
};

export default Metadata;
