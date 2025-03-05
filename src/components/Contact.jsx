import React, { useRef } from "react";
import emailJs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents form from refreshing the page

    const formData = {
      FirstName: e.target.fName.value,
      LastName: e.target.lName.value,
      Email: e.target.email.value,
      Message: e.target.message.value,
    };

    console.log("Form Data:", formData); // Ensure form data appears in console
    // Send the email using EmailJS
    emailJs
      .sendForm(
        "service_ie1itfe",   // Replace with your EmailJS service ID
        "template_4ny2sdf",  // Replace with your EmailJS template ID
        formRef.current,
        "Dh8SY1zUfShEJMtz5"    // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!"); // Show success message
          e.target.reset(); // Reset form fields after submission
        },
        (error) => {
          console.error("Email sending failed:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="container my-5">
      <h2 className="mb-4">Contact</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="fName" className="form-label">
            First Name:
          </label>
          <input type="text" className="form-control" id="fName" name="fName" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="lName" className="form-label">
            Last Name:
          </label>
          <input type="text" className="form-control" id="lName" name="lName" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input type="email" className="form-control" id="email" name="email" required />
        </div>
        <div className="col-12">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
        </div>
        <div className="col-12 text-end mt-4">
          <button type="submit" className="btn btn-dark">
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
