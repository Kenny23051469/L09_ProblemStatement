import React, { useState } from "react";
import { getFaqs } from "../api";

function FAQ() {
  const faqs = getFaqs();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container container">
      <h1>Frequently Asked Questions</h1>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <h4
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {faq.question}
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </h4>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQ;
