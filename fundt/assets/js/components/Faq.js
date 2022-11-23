import React from "react";

const faqs = [
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",

    },
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",

    },
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",

    },
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",

    },
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",

    },
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",

    },
]

export default function Faq() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="max-w-4xl lg:mx-auto lg:text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center mb-10">Frequently asked questions</h2>
                    <p className="mt-4 text-gray-500 text-lg ">
                        Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
                        Urna, sed a lectus elementum blandit et.
                    </p>
                </div>
                <div className="mt-20">
                    <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
                        {faqs.map((faq) => (
                            <div key={faq.id}>
                                <dt className="font-semibold text-gray-900 text-xl">{faq.question}</dt>
                                <dd className="mt-3 text-gray-500 text-lg">{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}