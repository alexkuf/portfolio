import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Joi from "joi";
import { formikValidateUsingJoi } from "../utils/formikValidateUsingJoi";
import { useFormik } from "formik";
import Input from "./common/input";
import Textarea from "./common/textarea";

const ContactForm = () => {
  const [error, setError] = useState("");
  const form = useRef();

  const form1 = useFormik({
    validateOnMount: true,
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    validate: formikValidateUsingJoi({
      user_name: Joi.string().min(4).max(255).required(),
      user_email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      message: Joi.string().min(6).max(1024).required(),
    }),
  });

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
          toast.success("Your message has been sent successfully", result);
          setTimeout(function () {
            window.location.reload(true);
          }, 6000);
        },
        (error) => {
          setError(error.text);
        }
      );
  };

  return (
    <div className="container">
      <h2 className="text-center pt-5">Contact me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        noValidate
        style={{
          maxWidth: "32rem",
          justifyContent: "center",
          margin: "auto",
          padding: "5px",
        }}
      >
        {error && <div className="alert alert-danger">{error}</div>}
        <Input
          {...form1.getFieldProps("user_name")}
          type="user_name"
          name="user_name"
          label="Name"
          required
          error={form1.touched.user_name && form1.errors.user_name}
        />
        <Input
          {...form1.getFieldProps("user_email")}
          type="user_email"
          name="user_email"
          label="Email"
          required
          error={form1.touched.user_email && form1.errors.user_email}
        />
        <Textarea
          {...form1.getFieldProps("message")}
          type="message"
          name="message"
          label="Message"
          required
          error={form1.touched.message && form1.errors.message}
        />

        <div className="d-grid gap-2 mt-2 pb-5">
          <button
            type="submit"
            className="btn btn-primary mt-2"
            disabled={!form1.isValid}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
