'use client';
import React, { useState } from 'react';

const steps = ['Activity', 'Your Information', 'Additional Details', ];

export default function CostCalculator() {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);
  const [customActivity, setCustomActivity] = useState('');
  const activities = [
    'E-commerce', 'General Trading', 'Media', 'Freelancing',
    'IT Consultant & Trading', 'Management Consultancy', 'Event Management',
    'PR', 'Digital Marketing', 'Educational Support Activities'
  ];
  const [selected, setSelected] = useState('');

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const closeModal = () => {
    setShow(false);
    setStep(0);
    setSelected('');
    setCustomActivity('');
  };

  return (
    <>
      <button onClick={() => setShow(true)} className="bg-progress text-white px-4 py-2 rounded rounded-b-none fixed bottom-[100px] right-[-59px] z-50 transform rotate-[270deg] ">
      Cost Calculator
      </button>

      {show && (
        <div className="fixed  overflow-auto inset-0 bg-black bg-opacity-60 z-50 flex md:justify-center justify-baseline items-center px-4">
          <div className="bg-white max-w-2xl w-full rounded-xl p-6 relative">
            <button onClick={closeModal} className="absolute right-4 top-4 text-black text-xl font-bold">&times;</button>

            <h2 className="md:text-[25px] font-[400]">Cost Calculator</h2>
            <p className="text-[18px] pt-4">Get an estimate of your setup costs</p>
            <p className='text-[14px] pt-2 font-[400]'>Begin your journey by filling in the details below. Our precise cost calculator ensures you pay only for what your business needs.
</p>

            <div className="text-sm font-medium text-gray-500 mb-4 pt-8">{steps[step]}</div>
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 my-4">
              <div className="bg-progress h-2 rounded-full transition-all duration-300" style={{ width: `${((step + 1) / steps.length) * 100}%` }}></div>
            </div>


            {step === 0 && (
              <>
                <p className="mb-4 font-medium text-black pt-5">Select your Business Activity</p>
                <div className="flex flex-wrap gap-2 mb-4 ">
                  {activities.map((act, i) => (
                    <button
                      key={i}
                      onClick={() => setSelected(act)}
                      className={`px-4 py-2 rounded-md border ${
                        selected === act ? 'bg-progress text-white bg-progress' : 'border-gray-300'
                      } text-sm`}
                    >
                      {act}
                    </button>
                  ))}
                </div>
                <p className='pt-5 text-[14px] font-[400]'>Cannot find your preferred activity above? Please add it here and we will get back to you.</p>
                <input
                  type="text"
                  value={customActivity}
                  onChange={(e) => setCustomActivity(e.target.value)}
                  placeholder=""
                  className="w-full mt-2 border border-gray-300 rounded px-3 py-2 text-sm mb-6"
                />
              </>
            )}

            {step === 1 && (
              <div>
                <form className="space-y-4">
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
      placeholder="Enter your name"
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
      placeholder="Enter your email"
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">Phone</label>
    <input
      type="tel"
      id="phone"
      name="phone"
      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
      placeholder="Enter your phone number"
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message</label>
    <textarea
      id="message"
      name="message"
      rows="4"
      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
      placeholder="Your message"
    ></textarea>
  </div>
</form>

              </div>
            )}

            {step === 2 && (
              <div>
                  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Any Additional Message</label>
    <textarea
      id="additional"
      name="message"
      rows="4"
      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
      placeholder="Your message"
    ></textarea>
  </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <p className="text-gray-700">[Final Confirmation Step]</p>
              </div>
            )}

            <div className="mt-6">
              {step < steps.length - 1 ? (
                <button
                  onClick={nextStep}
                  className="bg-progress text-white px-6 py-2 rounded"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={closeModal}
                  className="bg-progress text-white px-6 py-2 rounded"
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
