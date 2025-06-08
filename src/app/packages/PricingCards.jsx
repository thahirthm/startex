'use client';
import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

const PricingCard = ({ active, highlighted, price, withVisa, features }) => {
  const [enabled, setEnabled] = useState(withVisa);

  return (
    <div className={`rounded-xl border p-6 md:p-8 lg:p-8 w-full max-w-sm 
    
      bg-gradient-to-b from-[#1c1c1c] to-[#101010] text-white`}>
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-gradient font-semibold text-xl md:text-2xl">AED {price}</h2>
        <div className="flex items-center justify-between  gap-2">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-[#FF5A41]' : 'bg-gray-700'}
              relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                enabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </Switch>
          <span className="text-sm">{enabled ? 'With Visa' : 'Without Visa'}</span>
        </div>
      </div>
      <ul className="space-y-3 text-sm text-white/90">
        {features.map((feature, idx) => (
          <li key={idx} className="list-disc list-inside">{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default function PricingCards() {
  const featuresWithVisa = [
    '100% Ownership',
    'An Exclusive Dubai Govt. Initiated Freezone',
    'Trade License with Dubai Govt. Logo',
    'No NOC Required',
    'Trade License Cost',
    'Immigration Card',
    'Visa Allocation Fee',
    'Investor Visa',
    'Emirates ID',
    'Medical Fitness Test',
    'Free Activity Consultation'
  ];

  const featuresWithoutVisa = [
    '100% Ownership',
    'Lowest Cost Dubai Freezone',
    'Dubai Freezone',
    'No NOC Required',
    'Trade License Cost',
    'Multiple Activity Groups',
    'Free Activity Consultation'
  ];

  return (
    <div className=" flex flex-col items-baseline justify-center  py-10 space-y-10 md:flex-row md:space-x-6 md:space-y-0">
      <PricingCard
        price="20595"
        withVisa={true}
        features={featuresWithVisa}
      />
      <PricingCard
        price="12400"
        withVisa={false}
        features={featuresWithoutVisa}
        highlighted
      />
      <PricingCard
        price="20595"
        withVisa={true}
        features={featuresWithVisa}
      />
    </div>
  );
}
