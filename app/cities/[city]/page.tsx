import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import CTASection from '@/components/CTASection';
import Link from 'next/link';
import { ArrowRight, MapPin, CheckCircle, Phone } from 'lucide-react';
import { cities, getCityBySlug, getNearbyCities, getAllCitySlugs } from '@/data/cities';
import { services } from '@/data/services';
import { businessInfo, generateMetadata as genMeta, generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/seo';

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  return genMeta({
    title: `Commercial Landscaping Services in ${city.name}, TX`,
    description: `Professional commercial landscaping and grounds maintenance services in ${city.name}, Texas. Expert landscape design, irrigation, tree care, and more. Free estimates from ${businessInfo.name}.`,
    keywords: [
      `commercial landscaping ${city.name} TX`,
      `grounds maintenance ${city.name}`,
      `landscape design ${city.name}`,
      `commercial irrigation ${city.name}`,
      `tree trimming ${city.name}`,
      `${city.name} commercial landscaper`,
      `HOA landscaping ${city.name}`
    ],
    path: `/cities/${city.slug}`,
  });
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  const nearbyCities = getNearbyCities(city.slug, 6);

  const cityFaqs = [
    {
      question: `What commercial landscaping services do you offer in ${city.name}?`,
      answer: `We offer comprehensive commercial landscaping services in ${city.name} including grounds maintenance, landscape design, planting, sod installation, irrigation management, tree care, hardscaping, and seasonal enhancements. We serve all business districts in ${city.name}.`
    },
    {
      question: `How do commercial contracts work in ${city.name}?`,
      answer: `We offer flexible maintenance contracts tailored to your property's specific needs. Whether you need weekly mowing, seasonal color rotations, or comprehensive grounds management, we can build a plan that fits your budget.`
    },
    {
      question: `Are you licensed to work in ${city.name}?`,
      answer: `Yes, ${businessInfo.name} is fully licensed and insured to perform commercial landscaping work in ${city.name}, ${city.county} County, and throughout the DFW metroplex. We carry comprehensive liability insurance.`
    },
    {
      question: `How long have you been serving ${city.name}?`,
      answer: `We've been proudly serving commercial clients in ${city.name} and the DFW area for over 15 years. We understand the specific soil and climate conditions in ${city.county} County.`
    },
    {
      question: `Do you offer free estimates in ${city.name}?`,
      answer: `Absolutely! We provide free, detailed proposals for all ${city.name} commercial properties. Our team will walk your site, discuss your goals, and provide a transparent quote.`
    },
    {
      question: `What other areas near ${city.name} do you serve?`,
      answer: `In addition to ${city.name}, we serve ${nearbyCities.map(c => c.name).join(', ')}, and the entire Dallas-Fort Worth Metroplex.`
    }
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema(city.name))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Service Areas', url: '/cities/dallas' },
            { name: city.name, url: `/cities/${city.slug}` }
          ]))
        }}
      />

      {/* Hero Section */}
      <Hero 
        cityName={city.name}
        title={`Commercial Landscaping in ${city.name}, TX`}
        subtitle={`Professional grounds maintenance and landscape services for ${city.name} businesses. Enhance your property value with expert care from DFW Commercial Landscaping.`}
      />

      {/* City Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-forest-600 font-semibold uppercase tracking-wider text-sm">
                {city.name} Landscaping
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-950 mt-3 mb-6">
                Expert Commercial Services for {city.name}
              </h2>
              <p className="text-lg text-stone-600 mb-6">
                {city.description}
              </p>
              <p className="text-stone-600 mb-8">
                From retail centers to office parks and HOAs, we provide reliable, high-quality landscaping services to properties in {city.name}. Our team is dedicated to keeping your business looking professional year-round.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Commercial grounds maintenance',
                  'Landscape design & install',
                  'Irrigation management',
                  'Tree trimming & removal',
                  'Seasonal color programs',
                  'Mulch & sod installation'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-forest-600 flex-shrink-0" />
                    <span className="text-stone-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
                  Request Proposal
                  <ArrowRight size={18} />
                </Link>
                <a 
                  href={`tel:${businessInfo.phone}`}
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  {businessInfo.phone}
                </a>
              </div>
            </div>

            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <h3 className="font-display text-xl font-semibold text-forest-900 mb-6">
                {city.name} Service Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-stone-200">
                  <span className="text-stone-600">Service Area</span>
                  <span className="font-medium text-forest-900">{city.name}, TX</span>
                </div>
                <div className="flex justify-between py-3 border-b border-stone-200">
                  <span className="text-stone-600">County</span>
                  <span className="font-medium text-forest-900">{city.county} County</span>
                </div>
                <div className="flex justify-between py-3 border-b border-stone-200">
                  <span className="text-stone-600">Population</span>
                  <span className="font-medium text-forest-900">{city.population}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-stone-200">
                  <span className="text-stone-600">Response Time</span>
                  <span className="font-medium text-forest-900">Within 24 hours</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-stone-600">Free Estimates</span>
                  <span className="font-medium text-forest-600">Yes ✓</span>
                </div>
              </div>

              {city.neighborhoods && city.neighborhoods.length > 0 && (
                <div className="mt-6 pt-6 border-t border-stone-200">
                  <h4 className="font-medium text-forest-900 mb-3">{city.name} Areas We Serve:</h4>
                  <div className="flex flex-wrap gap-2">
                    {city.neighborhoods.map((neighborhood) => (
                      <span 
                        key={neighborhood}
                        className="bg-forest-50 text-forest-700 px-3 py-1 rounded-full text-sm"
                      >
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services citySlug={city.slug} showAll={true} />

      {/* Nearby Cities Section */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-forest-600 font-semibold uppercase tracking-wider text-sm">Nearby Service Areas</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-950 mt-3 mb-6">
              Also Serving Communities Near {city.name}
            </h2>
            <p className="text-lg text-stone-600">
              We provide commercial landscaping services throughout the DFW metroplex.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {nearbyCities.map((nearbyCity) => (
              <Link
                key={nearbyCity.slug}
                href={`/cities/${nearbyCity.slug}`}
                className="group bg-white hover:bg-forest-50 rounded-xl p-5 border border-stone-200 hover:border-forest-200 transition-all duration-300 text-center"
              >
                <MapPin className="w-6 h-6 text-forest-600 mx-auto mb-2" />
                <p className="font-medium text-forest-900 group-hover:text-forest-700 transition-colors">
                  {nearbyCity.name}
                </p>
                <p className="text-xs text-stone-500 mt-1">{nearbyCity.distance} mi away</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTASection 
        cityName={city.name}
        title={`Ready to Transform Your ${city.name} Property?`}
        subtitle={`Get a free consultation and estimate for your ${city.name} commercial landscaping project.`}
      />

      {/* FAQ */}
      <FAQ cityName={city.name} faqs={cityFaqs} />

      {/* Contact Form */}
      <ContactForm cityName={city.name} />
    </>
  );
}
