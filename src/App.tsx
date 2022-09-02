import { useState } from "react";
import ArrowDown from "./components/ArrowDown";

type Faq = {
  question: string;
  answer: string;
};

function App() {
  const [active, setActive] = useState<null | number>(null);

  const faq: Faq[] = [
    {
      question: "How many team members can i invite?",
      answer: "You can invite a maximum of two members.",
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your alloted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer: 'Click on the "forgot password" link and set a new passord.',
    },
    {
      question: "Can I cancel my Subscription?",
      answer: "You can cancel your subscription at any time.",
    },
    {
      question: "Do you provide additional support?",
      answer: "We provide round the clock support, just call the help lines.",
    },
  ];

  // set active link
  const handleToggle = (e: any, index: number) => {
    e.stopPropagation();
    setActive(index);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="img-desktop">
          <img src="/images/illustration-box-desktop.svg" alt="box" />
        </div>
        <div className="img-mobile">
          <img src="/images/illustration-woman-online-mobile.svg" alt="" />
        </div>
        <div className="faq">
          <h1>FAQ</h1>
          <div className="faq-box-container">
            {faq.map((item, index) => (
              <div className="faq-box" key={index}>
                <div
                  className="question"
                  onClick={(e) => handleToggle(e, index)}
                >
                  <p className={`normal ${index === active ? "bold" : ""}`}>
                    {item.question}
                  </p>
                  <ArrowDown />
                </div>
                <div className={`ans ${index === active ? "show" : ""}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
