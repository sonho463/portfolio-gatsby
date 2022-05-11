import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const CvButton = ({inView}) => {
  console.log(inView);
  return (
    <div class="cv-button">
      {inView ? (
        <span></span>
      ) : (
        <nav className="l-cv-button js-cv-button">
          <a href="/contact.html" className="l-cv-button__link">
            <StaticImage
              className="l-cv-button__image"
              src="../images/mv/cv-button.png"
              alt="お問い合わせ"
            />
          </a>
        </nav>
      )}
    </div>
  );
};
