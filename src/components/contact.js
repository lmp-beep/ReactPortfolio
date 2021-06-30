import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import swal from "sweetalert2";

const ContactForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          swal.fire(
            "Message Sent",
            "Lisa will get back to you as soon as she can!",
            "success"
          );
        },
        (error) => {
          console.log(error.text);
          swal.fire("Message Error", error.text, "error");
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-form-card">
      <div className="card">
        <div className="form-header">
          <p>
            I would love to hear from you, so whether you have a question or
            just want to say hi, please feel free to drop me a line.
          </p>
        </div>

        <Form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <a>Name</a>
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              name="user_name"
              required
              //   icon="user circle"
              //   iconPosition="left"
            />
          </div>

          <div className="form-group">
            <a>Email</a>
            <Form.Field
              id="form-input-control-email"
              control={Input}
              name="user_email"
              placeholder="name@example.com"
              required
              // icon="mail"
              //   iconPosition="left"
            />
          </div>

          <div className="form-group">
            <a>Message</a>
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              name="user_message"
              required
            />
          </div>

          <div className="submit-btn">
            <Button className="submit-button">SUBMIT</Button>
          </div>

          {/* <Button 
          label="Send Message" 
          icon="send" 
          color="green" 
          /> */}
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
