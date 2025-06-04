'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'Why should I choose Startex Hub for business setup in Dubai?',
    answer:
      'Startex is one of the most trusted names in business setup services across the UAE. With a proven track record and years of experience, we simplify the entire process—from selecting the right license to setting up your office and opening your bank account. Our team handles documentation, legal approvals, visa processing, and more, ensuring a seamless and cost-effective journey for your business. We also provide guidance on choosing the most suitable business structure and location (Mainland, Free Zone, or Offshore) tailored to your goals.',
  },
  {
    question:
      'What types of business licenses are available in the UAE?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
  {
    question: 'How does startex support the company formation process in Dubai?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
  {
    question:
      'What documents are needed to start a business in the UAE?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
  {
    question: 'How do I obtain a business license with startex’ assistance?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
  {
    question: 'Can startex help with the visa process for my business and employees?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
  {
    question: 'Will startex assist with opening a corporate bank account in Dubai?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },

    {
    question: 'What is the difference between Mainland, Free Zone, and Offshore company formation?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
    {
    question: 'How much does it cost to start a business in Dubai or the UAE?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
    {
    question: 'Which business setup is more affordable: Mainland or Free Zone?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
    {
    question: 'Does startex provide local sponsorship services?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
    {
    question: 'Can startex help me find office or commercial space in Dubai?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
    {
    question: 'Do I need brand protection or trademark registration for my business?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
    {
    question: 'What PRO services does startex offer for company formation?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
    {
    question: 'How long does it take to set up a business in Dubai with startex?',
    answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
  },
];

export default function AbtFaq() {
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
