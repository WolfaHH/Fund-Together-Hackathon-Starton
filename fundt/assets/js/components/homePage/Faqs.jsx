//import Image from 'next/image'
import React from "react";
import { Container } from './Container'
import backgroundImage from '../../images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Where my money goes ?',
      answer:
        'Once deposited, your assets are transferred to our automated investment strategies. Revenues are shared and returned in part to the campaign.',
    },
    {
      question: 'How can I be sure I will get my funds back?',
      answer: 'You will receive an amount of interest-bearing Tokens equal to the amount of your initial deposit plus earnings. You can withdraw your initial deposit and rewards at any time.',
    },
    {
      question: 'What type of automated strategies are applied',
      answer:
        'We limit any investment risk through yield farming and fee return strategies on stable currencies.',
    },
  ],
  [
    {
      question: 'What types of campaigns are featured on Fund Together',
      answer:
        'Any project with a virtuous goal and validated by the community can be presented on the platform, whether it is educational, informative or many others.',
    },
    {
      question:
        'Where can I vote for new projects?',
      answer:
        'You can find the different campaigns being voted on our discord',
    },
  ],
  [
    {
      question: 'What is the Lottery ?',
      answer:
        "Roll a number between 1-100 based on a blockchain protocol. If you roll 42 (1% of chances), we'll stake $100 your most staked campaign ! You have 1 roll a day (20hours countdown)",
    },
    {
      question: 'How are the funds collected by the fees used?',
      answer: 'In life it’s really better to never expect anything at all.'
    },
    {
      question: "What's Next",
      answer:
        'Come and chat with us on discord to know about the future of the protocol and the surprises that await you!',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-white py-20 sm:py-32"
    >
      <img
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email of contact our support team on discord
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
