
import * as React from "react";
import { Layout } from "../components/Layout";

const ContactForm = () => {
  return (
    <Layout>
      <div class="l-main">
        <section class="p-success">
          <div class="c-inner">
            <div class="c-section__title">
              <h2 class="c-section__title__text">お問い合わせを受け付けました。</h2>
            </div>

            <section class="p-success__body">
							<p>
								お問い合わせありがとうございます。<br />
								3営業日以内には返信いたします。

							</p>

            </section>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactForm;
