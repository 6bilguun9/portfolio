import "/src/styles/contact.css";
import { useState } from "react";
import { supabase } from "/src/supabaseClient";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleCreate = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const { data, error } = await supabase
      .from("messages")
      .insert([{ name, email, phone, message }])
      .select();
    if (data) {
      console.log("Post created:", data);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else if (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p className="hook">
        Have an exciting opportunity or project in mind? Send me a message—I’d
        love to collaborate and bring your ideas to life!
      </p>
      <div className="cntc name">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name*"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="cntc email">
        <input
          type="email"
          placeholder="Enter Your Mail*"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="cntc tel">
        <input
          type="tel"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="cntc message">
        <textarea
          className="textArea"
          id="dynamic-textarea"
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button className="submitButton" onClick={handleCreate}>
        Submit
      </button>
    </div>
  );
}

export default Contact;
