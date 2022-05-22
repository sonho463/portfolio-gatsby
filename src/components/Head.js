import * as React from "react";
import { Helmet } from "react-helmet";

export const Head = (props) => {
  const { title } = props;

  return (
    <Helmet>
      <meta
        name="description"
        content="ウェブ制作、開発フリーランス事務所ウェブソン代表そんほんすのポートフォリオサイトです。"
      />
      <head prefix="og: http://ogp.me/ns#" />
      <meta property="og:url" content="https://portfolio.horumont.info" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="WEBSON・そんほんすのポートフォリオ" />
      <meta property="og:description" content="ウェブ制作、開発フリーランス事務所ウェブソン代表そんほんすのポートフォリオサイトです。" />
      <meta property="og:site_name" content="WEBSON・そんほんすのポートフォリオ" />
      <meta property="og:image" content="favicon.png" />


      <title>{title}</title>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-B88FLKC288"
      ></script>
      <script>
        {`
	window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-B88FLKC288');
	`}
      </script>
    </Helmet>
  );
};
