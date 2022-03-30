import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./SubscribeForm.scss";

const postURL = `https://xyz.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

export const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="subscribe-form">
      <MailchimpSubscribe
        url={postURL}
        render={({ subscribe, status, message }) => {
          let form = (
            <form
              className="subscribe-form__field"
              onSubmit={(e) => {
                e.preventDefault();
                subscribe({
                  EMAIL: email,
                });
              }}
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              <button disabled={status === "sending"} type="submit">
                {status === "sending" ? "Subscribing" : "Subscribe"}
              </button>
            </form>
          );
          switch (status) {
            case "success":
              return (
                <div className="subscribe-form__message">
                  Successfully subscribed!
                </div>
              );
            case "error":
              return (
                <React.Fragment>
                  <div className="subscribe-form__message">
                    There was an error subscribing. Please try again.
                    {form}
                  </div>
                </React.Fragment>
              );
            default:
              return form;
          }
        }}
      />
    </div>
  );
};
