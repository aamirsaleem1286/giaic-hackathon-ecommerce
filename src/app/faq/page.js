// pages/faq.js
import React from "react";

const FAQ = () => {
  const faqs = [
    { question: "What types of chairs do you offer?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "How can we get in touch with you?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "Do your chairs come with a warranty?",answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "What will be delivered? And When?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "Can I try a chair before purchasing?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "How do I clean and maintain my Comforty chair?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
  ];

  return (
    <div className="min-h-screen bg-lightgray p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Questions Looks Here</h1>
      <p className="text-center text-[#4F4F4F]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
      <div className="grid lg:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white lg:mt-4 p-4 bg-[#F7F7F7] rounded-lg shadow-md">
            <div className="flex justify-between items-center ">
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              <span className="text-xl font-bold text-gray-500">+</span>
            </div>
            <p className="mt-2 text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
