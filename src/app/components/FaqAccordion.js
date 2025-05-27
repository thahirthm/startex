'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'Where do I start a business in the UAE–Mainland or Freezone?',
    answer:
      'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
  {
    question:
      'Can you tell me the visa requirements for business and employees for company formation in the UAE?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
  {
    question: 'What’s the cost of setting up a business in Dubai?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
  {
    question:
      'What are the various costs involved in the formation of a company in Dubai?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
  {
    question: 'Is open trading possible in Dubai?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
  {
    question: 'How can I set up a business in Dubai?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
  {
    question: 'Are there any legal complexities for setting up a business in Dubai?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
];

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="relative  pl-6">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="text-white py-4 border-b border-white/10 last:border-none"
        >
          <div
            className="flex justify-between items-start cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <h4 className="font-semibold max-w-[90%] text-left">
              {item.question}
            </h4>
            <div className="ml-4 shrink-0">
              {activeIndex === index ? (
                <Minus size={20} className="text-white" />
              ) : (
                <Plus size={20} className="text-white" />
              )}
            </div>
          </div>

          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden pr-8"
              >
                <p className="text-sm text-white/80 mt-3">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
