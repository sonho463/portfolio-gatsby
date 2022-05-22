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
