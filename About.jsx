import React from "react";
import "../Pages/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About DailyDose-News</h1>
      <p>
        Welcome to <strong>DailyDose-News</strong>, your trusted source for the latest and most
        reliable news updates. We are committed to providing accurate and
        up-to-date news coverage across a wide range of topics, including
        health, science, sports, technology, and business.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to inform, educate, and engage our audience with high-quality journalism
        and in-depth reporting. We believe in the power of knowledge to drive
        meaningful conversations and empower our readers.
      </p>
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Comprehensive news coverage from trusted sources.</li>
        <li>Breaking news delivered as it happens.</li>
        <li>Insightful analysis and expert opinions.</li>
        <li>Easy-to-navigate website for a seamless experience.</li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        Got questions, feedback, or suggestions? We’d love to hear from you!
        Reach out to us at <a href="mailto:support@dailydose-news.com">support@dailydose-news.com</a>.
      </p>
      <span> Design & built  by Nitesh Gurjar</span>
    </div>
  );
};

export default About;
