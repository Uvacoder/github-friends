// @flow
import React, { type Node } from "react";
import Head from "next/head";

type Props = {
  children: Node,
  title?: string,
};

export default function Page({
  children,
  title = "Github Friends",
  ...rest
}: Props) {
  return (
    <>
      <section {...rest}>
        <Head>
          <title>{title}</title>
          <meta property="og:title" content="Github Friends" />
          <meta
            property="og:description"
            content="find your friends on github"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://github-friends.vercel.app.now.sh"
          />
          <meta
            property="og:image"
            content="https://github-friends.vercel.app/preview_frame_censored.png"
          />
        </Head>
        {children}
      </section>
    </>
  );
}
