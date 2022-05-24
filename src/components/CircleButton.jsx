import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Link, useStaticQuery } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";
// import { ImageRender } from "./imageRender";

// 必要なprops
// url リンク先
// alt 画像に渡すalt情報
// text ボタンのテキスト
// name 使用する画像ファイルのname情報（拡張子なしで）

export const CircleButton = (props) => {
  const { url, alt, text, name } = props;

  const data = useStaticQuery(graphql`
    query {
      webson_arrow_up: file(name: { eq: "webson_arrow_up" }) {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
      webson_arrow_down: file(name: { eq: "webson_arrow_down" }) {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
      webson_arrow_side: file(name: { eq: "webson_arrow_side" }) {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  // console.log(imageUrl);
  const arrow_up = getImage(data.webson_arrow_up);
  const arrow_down = getImage(data.webson_arrow_down);
  const arrow_side = getImage(data.webson_arrow_side);

  const Button = (arrow) => (
    <Link className="c-circle-button" to={url} target="_blank" rel="noopener noreferrer">
      <div className="c-circle-button__inner">
        <GatsbyImage
          image={arrow}
          alt={alt}
          className="c-circle-button__image"
        />
        <p className="c-circle-button__text">{text}</p>
      </div>
    </Link>
  );

  switch (name) {
    case "arrow_up":
      return Button(arrow_up);
    case "arrow_down":
      return Button(arrow_down);
    case "arrow_side":
      return Button(arrow_side);
  }
};
