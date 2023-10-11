import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [setError] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vxhhzxp",
        "template_ni1228u",
        form.current,
        "S1xzbifbxjXJJbZFj"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success("Messages sent");
          }
        },
        (error) => {
          setError(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="container" style={{ maxWidth: "400px" }}>
      <h2 className="mb-5 text-center">Contact Me:</h2>

      <form id="contact-form" noValidate ref={form} onSubmit={sendEmail}>
        <div className="col" id="contactform">
          <div className="col-12 m-auto">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              className="form-control mb-2 text-center"
              placeholder="Name"
            ></input>
          </div>
          <div className="col-12 m-auto">
            <label>Email address</label>
            <input
              type="email"
              name="user_email"
              className="form-control mb-2 text-center"
              placeholder="Email address"
            ></input>
          </div>
          <div className="col-12 m-auto">
            <label>Message</label>
            <textarea
              rows={3}
              name="message"
              className="form-control mb-4 text-center"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="col-12 m-auto">
            <button className="btn btn-primary w-100 mb-5" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
