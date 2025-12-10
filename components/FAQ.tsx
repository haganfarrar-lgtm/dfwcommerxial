'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  cityName?: string;
  faqs?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    question: 'What commercial areas do you serve?',
    answer: 'We proudly serve the entire Dallas-Fort Worth Metroplex, including Dallas, Fort Worth, Colleyville, Southlake, Frisco, Plano, McKinney, Arlington, Irving, and all surrounding communities. Contact us to confirm service for your specific commercial property.'
  },
  {
    question: 'Do you offer free estimates for commercial projects?',
    answer: 'Yes! We provide free, detailed estimates for all commercial landscaping and maintenance contracts. Our team will visit your site, assess your needs, and provide a comprehensive proposal.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. We are fully licensed and carry comprehensive commercial liability insurance and workers\' compensation coverage. This ensures your business and our team are protected throughout every project.'
  },
  {
    question: 'Do you provide ongoing maintenance contracts?',
    answer: 'Yes, we specialize in long-term commercial maintenance contracts. Our services include mowing, edging, trimming, fertilization, seasonal color, and irrigation management to keep your property professional year-round.'
  },
  {
    question: 'Can you handle large-scale tree trimming?',
    answer: 'Yes, our team is equipped to handle large-scale commercial tree trimming, pruning, and removal. We ensure safety and proper tree health for office parks, retail centers, and HOA properties.'
  },
  {
    question: 'What is your response time for storm damage?',
    answer: 'We prioritize storm damage cleanup for our commercial clients to ensure safety and access. We aim for rapid response to clear debris and fallen limbs to minimize business disruption.'
  }
];

export default function FAQ({ cityName = 'DFW', faqs = defaultFaqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-stone-50" id="faq">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-32">
            <span className="text-forest-600 font-semibold uppercase tracking-wider text-sm">FAQ</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-950 mt-3 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Have questions about our commercial landscaping services in {cityName}? Find answers below or contact us for a personalized consultation.
            </p>
            
            <div className="bg-forest-50 rounded-xl p-6 border border-forest-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-forest-700" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-forest-900 mb-2">Still have questions?</h3>
                  <p className="text-stone-600 text-sm mb-4">
                    Can't find the answer you're looking for? Our team is here to help.
                  </p>
                  <Link 
                    href="#contact"
                    className="text-forest-700 font-medium hover:text-forest-600 transition-colors"
                  >
                    Contact Us →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-forest-900 pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-forest-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
