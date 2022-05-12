import * as React from "react";
import { Layout } from "../components/Layout";

const ContactForm = () => {
  return (
    <Layout>
      <div class="l-main">
        <section class="p-contact">
          <div class="c-inner">
            <div class="c-section__title">
              <h2 class="c-section__title__text">お問い合わせ</h2>
            </div>

            <section class="p-contact__form">
              <form action="" class="p-contact__form-body">
                <label for="name" class="p-contact__name">
                  おなまえ
                  <input type="text" name="name" id="name" />
                </label>
                <label for="email" class="p-contact__email">
                  メールアドレス
                  <input type="email" name="email" id="email" />
                </label>
                <label for="email_validate" class="p-contact__email_validate">
                  メールアドレス（確認）
                  <input
                    type="text"
                    name="email_validate"
                    id="email_validate"
                  />
                </label>
                <label for="content" class="p-contact__content">
                  お問い合わせ内容
                  <textarea name="content" id="content" row="5" cols="33" />
                </label>

                <input
                  type="submit"
                  value="送信"
                  class="p-contact__submit-button"
                />
              </form>
            </section>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactForm;
