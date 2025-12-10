import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import CTASection from '@/components/CTASection';
import Link from 'next/link';
import { ArrowRight, MapPin, CheckCircle, Leaf, Hammer, Droplets, Sun, Phone } from 'lucide-react';
import { cities } from '@/data/cities';
import { businessInfo, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'DFW Commercial Landscaping | Professional Grounds Maintenance & Design',
  description: 'Premier commercial landscaping services in Dallas-Fort Worth. Expert grounds maintenance, tree trimming, irrigation, and landscape design for businesses. Serving Dallas, Fort Worth, Frisco, Plano & DFW. Call 214-506-3983.',
  keywords: 'commercial landscaping DFW, commercial grounds maintenance Dallas, commercial tree trimming Fort Worth, HOA landscaping, retail landscape maintenance, office park landscaping, commercial irrigation',
};

const homeFaqs = [
  {
    question: 'What commercial landscaping services do you offer?',
    answer: 'We offer comprehensive commercial landscaping services including grounds maintenance, landscape design, tree trimming, irrigation management, seasonal color, mulch installation, and large-scale enhancements for businesses and HOAs.'
  },
  {
    question: 'Which areas in DFW do you serve?',
    answer: 'We serve the entire Dallas-Fort Worth Metroplex, including Dallas, Fort Worth, Colleyville, Southlake, Frisco, Plano, McKinney, Arlington, Irving, and surrounding communities.'
  },
  {
    question: 'Do you work with HOAs and property management companies?',
    answer: 'Yes, we specialize in partnering with HOAs, property managers, and commercial real estate owners to maintain and enhance property value through professional landscape management.'
  },
  {
    question: 'Are you licensed and insured for commercial work?',
    answer: 'Absolutely. DFW Commercial Landscaping is fully licensed and carries comprehensive liability insurance and workers\' compensation coverage to protect your business and property.'
  },
  {
    question: 'Do you offer emergency storm damage cleanup?',
    answer: 'Yes, we provide rapid response for storm damage cleanup, including fallen tree removal and debris clearing, to ensure your business remains safe and accessible.'
  },
  {
    question: 'How do I get a quote for commercial maintenance?',
    answer: 'Simply call us at 214-506-3983 or fill out our online contact form. We will schedule a site visit to assess your property and provide a detailed, customized proposal.'
  }
];

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(homeFaqs))
        }}
      />

      {/* Hero Cover Photo Section */}
      <section className="relative">
        <div className="relative h-[70vh] md:h-[80vh]">
          <img
            src="/images/commercial/commercial landscaping/commercial-landscaping.jpg"
            alt="Commercial Landscaping Services in DFW"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
            <div className="container-custom">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                DFW's Premier<br />Commercial Landscaping
              </h1>
              <p className="text-xl md:text-2xl text-stone-200 mb-6 max-w-2xl">
                Professional Grounds Management & Design for Businesses across the Metroplex.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                  Get Free Quote
                  <ArrowRight size={18} />
                </Link>
                <a href={`tel:${businessInfo.phone}`} className="btn-outline !border-white !text-white hover:!bg-white hover:!text-forest-900 inline-flex items-center gap-2">
                  <Phone size={18} />
                  {businessInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-forest-600 font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-950 mt-3 mb-6">
                Your Partner in Property Value
              </h2>
              <p className="text-lg text-stone-600 mb-8">
                We specialize in commercial landscaping that enhances curb appeal and property value. From corporate campuses to retail centers, our team delivers consistent quality and professional service.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Serving the entire DFW Metroplex',
                  'Licensed and insured commercial specialists',
                  'Proactive landscape management',
                  'Rapid response time',
                  'Dedicated account managers',
                  'Comprehensive maintenance plans'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-600 flex-shrink-0" />
                    <span className="text-stone-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="#contact" className="btn-primary inline-flex items-center gap-2">
                Request Proposal
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-forest-50 rounded-2xl p-6 border border-forest-100">
                  <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-4">
                    <Leaf className="w-7 h-7 text-forest-700" />
                  </div>
                  <h3 className="font-display font-semibold text-forest-900 mb-2">Maintenance</h3>
                  <p className="text-stone-600 text-sm">Reliable grounds care, mowing, and trimming schedules.</p>
                </div>
                <div className="bg-earth-50 rounded-2xl p-6 border border-earth-100">
                  <div className="w-14 h-14 bg-earth-100 rounded-xl flex items-center justify-center mb-4">
                    <Hammer className="w-7 h-7 text-earth-700" />
                  </div>
                  <h3 className="font-display font-semibold text-earth-900 mb-2">Enhancements</h3>
                  <p className="text-stone-600 text-sm">Landscape renovations, seasonal color, and mulch.</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Droplets className="w-7 h-7 text-blue-700" />
                  </div>
                  <h3 className="font-display font-semibold text-blue-900 mb-2">Irrigation</h3>
                  <p className="text-stone-600 text-sm">Water management, smart systems, and repairs.</p>
                </div>
                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                    <Sun className="w-7 h-7 text-amber-700" />
                  </div>
                  <h3 className="font-display font-semibold text-amber-900 mb-2">Tree Care</h3>
                  <p className="text-stone-600 text-sm">Professional tree trimming, pruning, and health plans.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services limit={4} />

      {/* Projects Section */}
      <Projects />

      {/* Service Areas Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-forest-600 font-semibold uppercase tracking-wider text-sm">Service Areas</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-950 mt-3 mb-6">
              Proudly Serving DFW Businesses
            </h2>
            <p className="text-lg text-stone-600">
              We provide commercial landscaping services across the Dallas-Fort Worth Metroplex.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="group bg-stone-50 hover:bg-forest-50 rounded-xl p-4 border border-stone-100 hover:border-forest-200 transition-all duration-300 flex items-center gap-3"
              >
                <MapPin className="w-5 h-5 text-forest-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-forest-900 group-hover:text-forest-700 transition-colors">
                    {city.name}
                  </p>
                  <p className="text-xs text-stone-500">{city.county} County</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CTASection />

      {/* FAQ Section */}
      <FAQ faqs={homeFaqs} />

      {/* Contact Form Section */}
      <ContactForm />
    </>
  );
}
