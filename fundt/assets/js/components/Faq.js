import React from "react";

const faqs = [
    {
        id: 1,
        question: "Where my money goes ?",
        answer:
            "Once deposited, your assets are transferred to our automated investment strategies. Revenues are shared and returned in part to the campaign",

    },
    {
        id: 1,
        question: "How can I be sure I will get my funds back?",
        answer:
            "You will receive an amount of interest-bearing Tokens equal to the amount of your initial deposit plus earnings. You can withdraw your initial deposit and rewards at any time.",

    },
    {
        id: 1,
        question: "What type of automated strategies are applied",
        answer:
            "We limit any investment risk through yield farming and fee return strategies on stable currencies",

    },
    {
        id: 1,
        question: "What types of campaigns are featured on Fund Together",
        answer:
            "Any project with a virtuous goal and validated by the community can be presented on the platform, whether it is educational, informative or many others..",

    },
    {
        id: 1,
        question: "Where can I vote for new projects?",
        answer:
            "You can find the different campaigns being voted on our discord",

    },
    {
        id: 1,
        question: "How are the funds collected by the fees used?",
        answer:
            "In life it’s really better to never expect anything at all.",

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