import * as React from "react";
import { Layout } from "../components/Layout";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

	const onSubmit = data => console.log(data);


  return (
    <Layout>
      <div class="l-main">
        <section class="p-contact">
          <div class="c-inner">
            <div class="c-section__title">
              <h2 class="c-section__title__text">お問い合わせ</h2>
            </div>

            <section class="p-contact__form">
              <form
                action="/success/"
                class="p-contact__form-body"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
								onSubmit={handleSubmit(onSubmit)}
              >
                <input type="hidden" name="form-name" value="contact" />
                <label for="name" class="p-contact__name">
                  おなまえ
                  <input {...register("name",{required: true})}/>
									{errors.name?.type === 'required' && "Name is required"}

                </label>
                <label for="email" class="p-contact__email">
                  メールアドレス
                  <input {...register("email",{required: true})}/>
									{errors.email?.type === 'required' && "Email is required"}

                </label>
                <label for="email_validate" class="p-contact__email_validate">
                  メールアドレス（確認）
                  <input
                    type="text"
                    name="email_validate"
                    id="email_validate"
										{...register("emailvalidation",{required: true})}
										/>
										{errors.emailvalidation?.type === 'required' && "Email is required"}
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
