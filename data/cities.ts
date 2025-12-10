export interface City {
  slug: string;
  name: string;
  county: string;
  distance: number;
  population: string;
  description: string;
  neighborhoods?: string[];
}

export const cities: City[] = [
  {
    slug: 'colleyville',
    name: 'Colleyville',
    county: 'Tarrant',
    distance: 0,
    population: '27,000+',
    description: 'Providing premium commercial landscaping services to businesses and properties in Colleyville.',
    neighborhoods: ['Colleyville Blvd', 'Glade Rd', 'Hall-Johnson']
  },
  {
    slug: 'mansfield',
    name: 'Mansfield',
    county: 'Tarrant',
    distance: 20,
    population: '73,000+',
    description: 'Expert commercial grounds maintenance and landscaping for Mansfield businesses.',
    neighborhoods: ['Broad St', 'Debbie Lane', 'Matlock Rd']
  },
  {
    slug: 'grapevine',
    name: 'Grapevine',
    county: 'Tarrant',
    distance: 4,
    population: '54,000+',
    description: 'Serving Grapevine\'s historic downtown and commercial districts with top-tier landscaping.',
    neighborhoods: ['Main Street', 'Grapevine Mills', 'Glade Road']
  },
  {
    slug: 'frisco',
    name: 'Frisco',
    county: 'Collin',
    distance: 25,
    population: '200,000+',
    description: 'Complete commercial landscape solutions for Frisco\'s rapidly growing corporate campuses.',
    neighborhoods: ['The Star', 'Legacy West', 'Stonebriar']
  },
  {
    slug: 'plano',
    name: 'Plano',
    county: 'Collin',
    distance: 28,
    population: '287,000+',
    description: 'Professional landscape management for Plano\'s corporate headquarters and retail centers.',
    neighborhoods: ['Legacy', 'Preston Rd', 'Shops at Willow Bend']
  },
  {
    slug: 'mckinney',
    name: 'McKinney',
    county: 'Collin',
    distance: 35,
    population: '195,000+',
    description: 'Enhancing McKinney\'s commercial appeal with professional landscaping services.',
    neighborhoods: ['Craig Ranch', 'Historic Downtown', 'Eldorado']
  },
  {
    slug: 'southlake',
    name: 'Southlake',
    county: 'Tarrant',
    distance: 5,
    population: '31,000+',
    description: 'High-end commercial landscaping for Southlake Town Square and surrounding businesses.',
    neighborhoods: ['Southlake Town Square', 'Carroll Ave', 'Southlake Blvd']
  },
  {
    slug: 'euless',
    name: 'Euless',
    county: 'Tarrant',
    distance: 6,
    population: '56,000+',
    description: 'Reliable commercial grounds care for properties in Euless.',
    neighborhoods: ['Industrial Blvd', 'Main St', 'Midway Park']
  },
  {
    slug: 'north-richland-hills',
    name: 'North Richland Hills',
    county: 'Tarrant',
    distance: 5,
    population: '72,000+',
    description: 'Comprehensive landscaping services for North Richland Hills businesses.',
    neighborhoods: ['Davis Blvd', 'Loop 820', 'Boulevard 26']
  },
  {
    slug: 'arlington',
    name: 'Arlington',
    county: 'Tarrant',
    distance: 20,
    population: '398,000+',
    description: 'Serving the Entertainment District and businesses across Arlington with expert landscaping.',
    neighborhoods: ['Entertainment District', 'Parks Mall', 'UTA Area']
  },
  {
    slug: 'dallas',
    name: 'Dallas',
    county: 'Dallas',
    distance: 25,
    population: '1,300,000+',
    description: 'Premier commercial landscaping for Dallas businesses, from Uptown to Downtown.',
    neighborhoods: ['Uptown', 'Downtown', 'Deep Ellum', 'Preston Hollow']
  },
  {
    slug: 'fort-worth',
    name: 'Fort Worth',
    county: 'Tarrant',
    distance: 20,
    population: '935,000+',
    description: 'Professional landscape services for Fort Worth\'s diverse commercial sectors.',
    neighborhoods: ['Downtown', 'Stockyards', 'Cultural District', 'Alliance']
  },
  {
    slug: 'waxahachie',
    name: 'Waxahachie',
    county: 'Ellis',
    distance: 40,
    population: '37,000+',
    description: 'Serving commercial properties in Waxahachie with quality landscape maintenance.',
    neighborhoods: ['Downtown', 'Hwy 77', 'Broadhead Rd']
  },
  {
    slug: 'weatherford',
    name: 'Weatherford',
    county: 'Parker',
    distance: 45,
    population: '33,000+',
    description: 'Landscape solutions for businesses in Weatherford and Parker County.',
    neighborhoods: ['Downtown', 'Main St', 'Hudson Oaks']
  },
  {
    slug: 'aledo',
    name: 'Aledo',
    county: 'Parker',
    distance: 35,
    population: '4,000+',
    description: 'Commercial landscaping for the growing Aledo community.',
    neighborhoods: ['FM 1187', 'Kelly Rd', 'Bailey Ranch']
  },
  {
    slug: 'mesquite',
    name: 'Mesquite',
    county: 'Dallas',
    distance: 35,
    population: '140,000+',
    description: 'Professional grounds maintenance for Mesquite businesses.',
    neighborhoods: ['Town East', 'Galloway', 'Peachtree']
  },
  {
    slug: 'midlothian',
    name: 'Midlothian',
    county: 'Ellis',
    distance: 30,
    population: '35,000+',
    description: 'Serving the commercial landscaping needs of Midlothian.',
    neighborhoods: ['Midlothian Pkwy', 'Hwy 287', 'FM 663']
  },
  {
    slug: 'burleson',
    name: 'Burleson',
    county: 'Johnson',
    distance: 30,
    population: '48,000+',
    description: 'Expert landscaping for Burleson commercial properties.',
    neighborhoods: ['Wilshire Blvd', 'Alsbury', 'Old Town']
  },
  {
    slug: 'irving',
    name: 'Irving',
    county: 'Dallas',
    distance: 15,
    population: '256,000+',
    description: 'Specialized landscaping for Las Colinas and Irving businesses.',
    neighborhoods: ['Las Colinas', 'Valley Ranch', 'Airport Area']
  },
  {
    slug: 'university-park',
    name: 'University Park',
    county: 'Dallas',
    distance: 25,
    population: '25,000+',
    description: 'Premium landscape services for University Park commercial areas.',
    neighborhoods: ['Snider Plaza', 'Preston Center', 'SMU Area']
  },
  {
    slug: 'keller',
    name: 'Keller',
    county: 'Tarrant',
    distance: 5,
    population: '50,000+',
    description: 'Serving Keller businesses with beautiful landscape design and maintenance.',
    neighborhoods: ['Keller Pkwy', 'Old Town Keller', 'Rufe Snow']
  },
  {
    slug: 'carrollton',
    name: 'Carrollton',
    county: 'Dallas',
    distance: 18,
    population: '133,000+',
    description: 'Commercial landscape management for Carrollton properties.',
    neighborhoods: ['Belt Line', 'Josey Lane', 'Trinity Mills']
  },
  {
    slug: 'allen',
    name: 'Allen',
    county: 'Collin',
    distance: 30,
    population: '105,000+',
    description: 'Landscape services for Allen\'s retail centers and office parks.',
    neighborhoods: ['Watters Creek', 'Allen Premium Outlets', 'McDermott']
  },
  {
    slug: 'lewisville',
    name: 'Lewisville',
    county: 'Denton',
    distance: 15,
    population: '106,000+',
    description: 'Professional landscaping for Lewisville businesses.',
    neighborhoods: ['Vista Ridge', 'Old Town', 'Main St']
  },
  {
    slug: 'the-colony',
    name: 'The Colony',
    county: 'Denton',
    distance: 20,
    population: '45,000+',
    description: 'Serving The Colony and Grandscape area with premier landscaping.',
    neighborhoods: ['Grandscape', 'Main St', 'Austin Ranch']
  },
  {
    slug: 'saginaw',
    name: 'Saginaw',
    county: 'Tarrant',
    distance: 15,
    population: '23,000+',
    description: 'Commercial grounds care for Saginaw businesses.',
    neighborhoods: ['Main St', 'Blue Mound', 'Bailey Boswell']
  },
  {
    slug: 'pantego',
    name: 'Pantego',
    county: 'Tarrant',
    distance: 18,
    population: '2,500+',
    description: 'Serving the commercial community of Pantego.',
    neighborhoods: ['Park Row', 'Pioneer Pkwy', 'Bowen']
  },
  {
    slug: 'coppell',
    name: 'Coppell',
    county: 'Dallas',
    distance: 12,
    population: '42,000+',
    description: 'High-quality landscaping for Coppell corporate and retail areas.',
    neighborhoods: ['Denton Tap', 'Sandy Lake', 'Freeport']
  },
  {
    slug: 'flower-mound',
    name: 'Flower Mound',
    county: 'Denton',
    distance: 14,
    population: '79,000+',
    description: 'Commercial landscaping for Flower Mound\'s growing business districts.',
    neighborhoods: ['Lakeside', 'Cross Timbers', 'Long Prairie']
  },
  {
    slug: 'addison',
    name: 'Addison',
    county: 'Dallas',
    distance: 20,
    population: '16,000+',
    description: 'Specialized services for Addison\'s restaurants, hotels, and offices.',
    neighborhoods: ['Belt Line', 'Addison Circle', 'Midway']
  },
  {
    slug: 'richardson',
    name: 'Richardson',
    county: 'Dallas',
    distance: 25,
    population: '119,000+',
    description: 'Serving the Telecom Corridor and Richardson businesses.',
    neighborhoods: ['Telecom Corridor', 'CityLine', 'Coit Rd']
  },
  {
    slug: 'prosper',
    name: 'Prosper',
    county: 'Collin',
    distance: 35,
    population: '31,000+',
    description: 'Landscape services for Prosper\'s new commercial developments.',
    neighborhoods: ['Preston Rd', 'US 380', 'Downtown Prosper']
  },
  {
    slug: 'garland',
    name: 'Garland',
    county: 'Dallas',
    distance: 30,
    population: '240,000+',
    description: 'Commercial landscaping for Garland\'s industrial and retail areas.',
    neighborhoods: ['Firewheel', 'Downtown Garland', 'Jupiter Rd']
  },
  {
    slug: 'highland-park',
    name: 'Highland Park',
    county: 'Dallas',
    distance: 25,
    population: '8,000+',
    description: 'Exclusive commercial landscaping for Highland Park Village and surrounds.',
    neighborhoods: ['Highland Park Village', 'Preston Rd', 'Mockingbird']
  },
  {
    slug: 'rockwall',
    name: 'Rockwall',
    county: 'Rockwall',
    distance: 45,
    population: '47,000+',
    description: 'Serving Rockwall businesses with lakeside landscape solutions.',
    neighborhoods: ['The Harbor', 'Ridge Rd', 'I-30']
  }
];

export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find(city => city.slug === slug);
};

export const getAllCitySlugs = (): string[] => {
  return cities.map(city => city.slug);
};

export const getNearbyCities = (citySlug: string, limit: number = 6): City[] => {
  const currentCity = getCityBySlug(citySlug);
  if (!currentCity) return cities.slice(0, limit);
  
  return cities
    .filter(city => city.slug !== citySlug)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
};
