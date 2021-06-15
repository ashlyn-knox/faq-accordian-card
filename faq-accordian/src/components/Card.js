import React from "react";

const Card = () => {
  const faqList = [
    {
      questionOne: "How many team members can I invite?",
      answerOne: "20",
    },
    {
      questionTwo: "What is the maximum file upload size?",
      answerTwo: "No more than 2gb",
    },
    {
      questionThree: "How do I reset my password?",
      answerThree: "Just reset it, jeeze",
    },
    {
      questionFour: "Can I cancel my subscription?",
      answerFour: "No, this is for life. No cancellations",
    },
    {
      questionFive: "Do you provide additional Support?",
      answerFive: "If you are nice",
    },
  ];

  return { faqList };
};

export default Card;
