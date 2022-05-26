import * as React from "react";
import { Layout } from "../components/Layout";
import { useForm } from "react-hook-form";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),

    })
      .then(() => {
        console.log("OK");
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
                  {/* <input type="text" name="name" /> */}
                  <input type="text" {...register("name", { required: true })} />
                  {errors.name?.type === "required" && "Name is required"}
                </label>
                <label for="email" className="p-contact__email">
                  メールアドレス
                  <input type="email" name="email" />
                  {/* {errors.email?.type === "required" && "Email is required"} */}
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
                    // {...register("emailvalidation", { required: true })}
                  />
                  {/* {errors.emailvalidation?.type === "required" &&
                    "Email is required"} */}
                </label>
                <label for="content" className="p-contact__content">
                  お問い合わせ内容
                  <textarea
                    // {...register("contents", { required: true })}
                    name="content"
                    id="content"
                    row="5"
                    cols="33"
                  />
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
