import * as React from "react";
import { Layout } from "../components/Layout";
import { useForm } from "react-hook-form";
import { navigate } from "gatsby";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur", criteriaMode: "all" });

  const onSubmit = (data) => {
    console.log(data);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => {
        console.log("OK");
        navigate("/success/");
      })
      .catch((error) => {
        // 失敗時の処理
        console.log("NG");
      });
  };

  return (
    <Layout>
      <div className="l-main">
        <section className="p-contact">
          <div className="c-inner">
            <div className="c-section__title">
              <h2 className="c-section__title__text">お問い合わせ</h2>
            </div>

            <section className="p-contact__form">
              <form
                // noValidate
                action="/success/"
                className="p-contact__form-body"
                name="contact"
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input type="hidden" name="form-name" value="contact" />
                <label for="name" className="p-contact__name">
                  おなまえ
                  <input
                    type="text"
                    {...register("name", { required: true })}
                  />
                  {errors.name?.type === "required" && (
                    <span className="u-text-alert">お名前をご記入下さい</span>
                  )}
                </label>
                <label for="email" className="p-contact__email">
                  メールアドレス
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
											onBlur:()=>{
												if (getValues("email_confirmation")) {
													trigger("email_confirmation");
												}
											}
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <span className="u-text-alert">
                      メールアドレスをご記入下さい
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="u-text-alert">
                      入力形式がメールアドレスではありません
                    </span>
                  )}
                </label>
                <label
                  for="email_validate"
                  className="p-contact__email_validate"
                >
                  メールアドレス（確認）
                  <input
                    type="email"
                    name="email_validate"
                    id="email_validate"
                    {...register("emailvalidation", {
                      required: true,
                      validate: (value) => value === getValues("email"),
                    })}
                  />
                  {errors.emailvalidation?.type === "required" && (
                    <span className="u-text-alert">
                      メールアドレスをもう一度ご記入下さい
                    </span>
                  )}
                  {errors.emailvalidation?.type === "validate" && (
                    <span className="u-text-alert">メールアドレスが一致しません</span>
                  )}
                </label>
                <label for="content" className="p-contact__content">
                  お問い合わせ内容
                  <textarea
                    {...register("content", { required: true })}
                    name="content"
                    id="content"
                    row="5"
                    cols="33"
                  />
                  {errors.content?.type === "required" && (
                    <span className="u-text-alert">
                      問い合わせ内容をご記入下さい
                    </span>
                  )}
                </label>

                <input
                  type="submit"
                  value="送信"
                  className="p-contact__submit-button"
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
