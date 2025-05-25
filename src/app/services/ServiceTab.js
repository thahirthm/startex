'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import VerticalSlider from '../components/VerticalSlider';
import ScheduleChat from '../components/ScheduleChat';
const faqData = [
    {
        question: 'Guidance of Business Set Up',
        answer:
            'Professionals will provide you with expert guidance concerning business services in Dubai and the best business solutions. They will undertake the business set-up activities on behalf of you. Off from the burden of business set-up formalities, you can concentrate on other activities.',
    },
    {
        question:
            'Legal Formalities',
        answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
    },
    {
        question: 'Ascertaining the Total Cost and Advising You Accordingly',
        answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
    },
    {
        question:
            'Identifying Teething Troubles',
        answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
    },
    {
        question: 'Hassle-Free Registration and Functioning',
        answer: 'When it comes to starting a business in UAE Mainland or Freezone, you should know the approving authority, business setup cost, licensing procedure, and the rules and regulations of these jurisdictions. It is preferable to get in touch with our business setup consultants in Dubai for expert guidance.',
    },

];



function ServiceTab() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleIndex = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className=' pt-0 md:pt-10 pb-10'>
            <div className='md:flex'>
                <div className='md:w-[60%] pe-10 md:pt-0 pt-5'>
                    <h4 className='md:text-[25px] text-[18px] font-[400] text-white'>How Business Consultants Can Help You with Your New Business?</h4>
                    <p className='font-[200] text-white text-[15px] pt-5'>Hiring a business consultant in the UAE will augment your chances of success. They act as the supporting pillars for your firm. Professional business consultants constantly observe the business world and have ample insight into the UAE business arena. Thus, they can guide you in ascertaining the changing winds and help you formulate better strategies.</p>

                    <div className="relative  pt-10">
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

                                {activeIndex === index && item.answer && (
                                    <p className="text-sm text-white/80 mt-3 pr-8">{item.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>


                </div>

                 <div className="flex md:w-[40%] pt-10 md:pt-0 flex-col gap-8">
              {/* Consultants */}
              <VerticalSlider />

              {/* Chat Box */}
              <ScheduleChat />

            </div>

            </div>
        </div>
    )
}

export default ServiceTab