import React from 'react'

const Card = () => {
  // const dummyList = [{num1:'num', 'yum']
  const faqList = [
    {
      question: 'How many team members can I invite?',
      answer: '20',
    },
    {
      question: 'What is the maximum file upload size?',
      answer: 'No more than 2gb',
    },
    {
      question: 'How do I reset my password?',
      answer: 'Just reset it, jeeze',
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'No, this is for life. No cancellations',
    },
    {
      question: 'Do you provide additional Support?',
      answer: 'If you are nice',
    },
  ]
  return (
    <main>
      <p>{faqList[0].question}</p>
    </main>
  )
}

export default Card
