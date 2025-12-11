export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
  benefits: string[];
  category: 'landscaping' | 'hardscaping' | 'maintenance' | 'specialty';
  icon: string;
  heroImage: string;
  images: string[];
}

export const services: Service[] = [
  // LANDSCAPING SERVICES
  {
    slug: 'landscape-design',
    name: 'Commercial Landscape Design',
    shortDescription: 'Custom commercial landscape designs for DFW businesses.',
    description: 'Our professional commercial landscape design services transform your business property into a welcoming environment. We create custom designs that enhance your property\'s professional image, functionality, and value.',
    features: [
      'Commercial site planning',
      'Corporate campus design',
      'Low-maintenance plant selection',
      'Irrigation planning',
      'Lighting design integration',
      'Phased implementation plans'
    ],
    benefits: [
      'Enhance corporate image',
      'Increase property value',
      'Attract tenants and customers',
      'Reduce water consumption'
    ],
    category: 'landscaping',
    icon: 'Palette',
    heroImage: '/images/commercial/landscape design/commercial_building_landscaping_1.jpg',
    images: [
      "/images/commercial/landscape design/commercial_building_landscaping_1.jpg",
      "/images/commercial/landscape design/Commercial-Landscape-Design-Alexandria-VA.jpg",
      "/images/commercial/landscape design/images.jpeg",
      "/images/commercial/landscape design/Landscape.5a7b517b96bab.png.avif",
      "/images/commercial/landscape design/TifTuf-Bermuda-being-installed-at-Northside-Gwinnett-Hospital-scaled.jpeg.webp"
    ]
  },
  {
    slug: 'planting',
    name: 'Commercial Planting Services',
    shortDescription: 'Expert plant installation for commercial properties.',
    description: 'Our commercial planting services bring life to your business landscape. We select durable, low-maintenance plants suited for the North Texas climate to ensure your property looks professional year-round.',
    features: [
      'Native Texas plant selection',
      'Seasonal color rotations',
      'Mass shrub planting',
      'Parking lot island planting',
      'Entryway enhancement',
      'Drought-tolerant selections'
    ],
    benefits: [
      'Professional curb appeal',
      'Reduced maintenance costs',
      'Plant health guarantee',
      'Welcoming atmosphere'
    ],
    category: 'landscaping',
    icon: 'Flower2',
    heroImage: '/images/commercial/commerial planting/commercial landscaping - turfscape - 1.jpg',
    images: [
      "/images/commercial/commerial planting/benefits of fall planting.jpg",
      "/images/commercial/commerial planting/commercial landscaping - turfscape - 1.jpg",
      "/images/commercial/commerial planting/LevelGreen Commercial Crew team pruning maintenance 9.jpg",
      "/images/commercial/commerial planting/retirement condo commercial landscaping crew pulling weeds 1.jpg.webp"
    ]
  },
  {
    slug: 'tree-planting',
    name: 'Commercial Tree Planting',
    shortDescription: 'Professional tree installation for shade and aesthetics.',
    description: 'Add value and shade to your commercial property with our tree planting services. We install shade trees, ornamental trees, and screening trees that thrive in commercial environments.',
    features: [
      'Shade tree installation',
      'Parking lot shade compliance',
      'Screening and privacy trees',
      'Proper root ball handling',
      'Staking and support',
      'Irrigation integration'
    ],
    benefits: [
      'Reduce cooling costs',
      'Enhance property appearance',
      'Meet city landscape codes',
      'Long-term investment'
    ],
    category: 'landscaping',
    icon: 'TreeDeciduous',
    heroImage: '/images/commercial/commercial tree planting/plant-commercial.jpg',
    images: [
      "/images/commercial/commercial tree planting/ArborCare-Commercial-tree-planting-project.jpg",
      "/images/commercial/commercial tree planting/Golden Triangle enhancment planting crew.jpg",
      "/images/commercial/commercial tree planting/plant-commercial.jpg"
    ]
  },
  {
    slug: 'tree-trimming',
    name: 'Commercial Tree Trimming',
    shortDescription: 'Expert tree pruning and maintenance for safety and health.',
    description: 'Maintain the health and safety of trees on your commercial property with our expert trimming services. We handle crown reduction, structural pruning, and removal of hazardous limbs.',
    features: [
      'Structural pruning',
      'Crown reduction',
      'Deadwood removal',
      'Canopy raising',
      'Safety clearance trimming',
      'Storm damage cleanup'
    ],
    benefits: [
      'Improved tree health',
      'Enhanced safety for pedestrians/cars',
      'Better visibility',
      'Storm damage prevention'
    ],
    category: 'maintenance',
    icon: 'Scissors',
    heroImage: '/images/commercial/commercial tree trimming/tree-trimming.jpg.webp',
    images: [
      "/images/commercial/commercial tree trimming/20230302_160903198_iOS-2.jpg.webp",
      "/images/commercial/commercial tree trimming/commercial-pruning-in-gainesville.jpg",
      "/images/commercial/commercial tree trimming/med_res-30-e1714420600114.jpg",
      "/images/commercial/commercial tree trimming/Structural-Pruning-Crown-Reduction.jpg",
      "/images/commercial/commercial tree trimming/tree-pruning-structure.jpg.webp",
      "/images/commercial/commercial tree trimming/tree-trimming.jpg.webp"
    ]
  },
  {
    slug: 'sod-installation',
    name: 'Commercial Sod Installation',
    shortDescription: 'Large-scale sod installation for instant green spaces.',
    description: 'Transform your commercial property instantly with our sod installation services. We handle large-scale projects efficiently, providing a lush, green lawn for your business or development.',
    features: [
      'Large area capability',
      'Premium Bermuda & Zoysia',
      'Soil preparation and grading',
      'Roll and finish',
      'Irrigation coordination',
      'Post-installation care'
    ],
    benefits: [
      'Instant professional look',
      'Erosion control',
      'Weed-free start',
      'Quick project turnaround'
    ],
    category: 'landscaping',
    icon: 'Sprout',
    heroImage: '/images/commercial/commercial sod/commercial-sod-installation-service-in-houston-tx.webp',
    images: [
      "/images/commercial/commercial sod/commercial-sod-installation-service-in-houston-tx.webp",
      "/images/commercial/commercial sod/image.jpg.webp",
      "/images/commercial/commercial sod/Pine-Straw-Diversify-Property-Services-1.webp",
      "/images/commercial/commercial sod/SOD-INSTALTIION.jpg",
      "/images/commercial/commercial sod/TifTuf-Bermuda-being-installed-at-Northside-Gwinnett-Hospital-scaled.jpeg.webp"
    ]
  },
  {
    slug: 'artificial-turf',
    name: 'Commercial Artificial Turf',
    shortDescription: 'Low-maintenance synthetic turf for green spaces year-round.',
    description: 'Save on water and maintenance costs with our commercial artificial turf installation. Perfect for high-traffic areas, pet runs, playgrounds, and decorative landscape features that need to stay green all year.',
    features: [
      'Realistic look and feel',
      'Pet-friendly options',
      'Excellent drainage',
      'UV resistant',
      'No mowing or watering',
      '15-20 year lifespan'
    ],
    benefits: [
      'Zero water bill',
      'Always green',
      'No maintenance',
      'Clean appearance'
    ],
    category: 'landscaping',
    icon: 'Sprout',
    heroImage: '/images/commercial/turf/commercial-turf-installation-walkway.jpg',
    images: [
      "/images/commercial/turf/artificial-turf-500x500.jpg.webp",
      "/images/commercial/turf/commercial-turf-installation-walkway.jpg",
      "/images/commercial/turf/IMG_3166-1024x768.jpg",
      "/images/commercial/turf/Synthetic-Turf.jpg.webp"
    ]
  },
  {
    slug: 'mulch-installation',
    name: 'Commercial Mulch Installation',
    shortDescription: 'Bulk mulch installation for plant beds and playgrounds.',
    description: 'Maintain a neat, professional appearance with our commercial mulch installation. We provide efficient, large-scale mulching for office parks, retail centers, and HOAs.',
    features: [
      'Bulk material application',
      'Color-enhanced mulches',
      'Weed barrier integration',
      'Consistent depth',
      'Bed edge definition',
      'Seasonal refresh programs'
    ],
    benefits: [
      'Moisture retention',
      'Weed suppression',
      'Polished appearance',
      'Soil insulation'
    ],
    category: 'maintenance',
    icon: 'Layers',
    heroImage: '/images/commercial/commercial mulch install/commercial-mulch.jpg',
    images: [
      "/images/commercial/commercial mulch install/Commercial Landscaping Crew Maintenance Mulch Mulching 6.jpg.webp",
      "/images/commercial/commercial mulch install/commercial-mulch.jpg",
      "/images/commercial/commercial mulch install/Commercial-Pine-Straw-Installation-Georgia.jpg",
      "/images/commercial/commercial mulch install/mulch-installation3-640w.jpg.webp"
    ]
  },
  {
    slug: 'river-rock',
    name: 'Commercial River Rock',
    shortDescription: 'Low-maintenance rock installation for commercial beds.',
    description: 'Reduce maintenance costs and improve drainage with our commercial river rock installation. Ideal for xeriscaping, drainage swales, and high-traffic areas where mulch washes away.',
    features: [
      'Various sizes and colors',
      'Heavy-duty weed barrier',
      'Erosion control',
      'Drainage improvement',
      'Permanent ground cover',
      'Clean modern look'
    ],
    benefits: [
      'Zero maintenance',
      'Long-term cost savings',
      'Fire resistant',
      'Prevents soil erosion'
    ],
    category: 'hardscaping',
    icon: 'Circle',
    heroImage: '/images/commercial/commercial hardscaping/Commercial-Landscape-Enhancements-That-Will-Help-You-Stand-Out.jpeg',
    images: [
      "/images/commercial/commercial hardscaping/Commercial-Landscape-Enhancements-That-Will-Help-You-Stand-Out.jpeg",
      "/images/commercial/commercial hardscaping/SOBO_Winter-Preparation-for-your-Commercial-Landscape.jpeg.webp"
    ]
  },
  
  // HARDSCAPING SERVICES
  {
    slug: 'hardscaping',
    name: 'Commercial Hardscaping',
    shortDescription: 'Durable patios, walkways, and plazas.',
    description: 'Enhance your commercial property with durable hardscaping. We design and install walkways, plazas, retaining walls, and outdoor break areas built to withstand high traffic.',
    features: [
      'Concrete pavers',
      'Plaza design',
      'Walkways and paths',
      'Outdoor seating areas',
      'Accessibility ramps',
      'Commercial grade materials'
    ],
    benefits: [
      'Low maintenance',
      'High durability',
      'Improved accessibility',
      'Added property value'
    ],
    category: 'hardscaping',
    icon: 'LayoutGrid',
    heroImage: '/images/commercial/commercial hardscaping/Commercial-Landscape-Design-Alexandria-VA.jpg',
    images: [
      "/images/commercial/commercial hardscaping/-106-800x600-0.jpg",
      "/images/commercial/commercial hardscaping/Commercial-Landscape-Design-Alexandria-VA.jpg",
      "/images/commercial/commercial hardscaping/Commercial-Landscape-Enhancements-That-Will-Help-You-Stand-Out.jpeg",
      "/images/commercial/commercial hardscaping/Courtyard+Novi,+MI.jpeg.webp",
      "/images/commercial/commercial hardscaping/FHL_Devon+Tower_002.jpg.webp",
      "/images/commercial/commercial hardscaping/SOBO_The-Benefits-of-Hardscapes-in-Commercial-Properties.jpg",
      "/images/commercial/commercial hardscaping/SOBO_Winter-Preparation-for-your-Commercial-Landscape-1.jpeg.webp",
      "/images/commercial/commercial hardscaping/SOBO_Winter-Preparation-for-your-Commercial-Landscape.jpeg.webp"
    ]
  },
  {
    slug: 'pavers',
    name: 'Commercial Paver Installation',
    shortDescription: 'Elegant and durable paver solutions for high traffic.',
    description: 'Upgrade your commercial entryways, courtyards, and walkways with professional paver installation. Pavers offer superior durability, easy repairs, and an upscale aesthetic for any business.',
    features: [
      'Interlocking pavers',
      'Permeable pavers',
      'Driveway pavers',
      'Courtyard design',
      'Heavy load rating',
      'Custom patterns'
    ],
    benefits: [
      'Immediate use',
      'Crack resistant',
      'Easy to repair',
      'Premium appearance'
    ],
    category: 'hardscaping',
    icon: 'Grid3x3',
    heroImage: '/images/commercial/commercial hardscaping/Courtyard+Novi,+MI.jpeg.webp',
    images: [
      "/images/commercial/commercial hardscaping/Courtyard+Novi,+MI.jpeg.webp",
      "/images/commercial/commercial hardscaping/FHL_Devon+Tower_002.jpg.webp",
      "/images/commercial/commercial hardscaping/SOBO_The-Benefits-of-Hardscapes-in-Commercial-Properties.jpg"
    ]
  },
  {
    slug: 'concrete',
    name: 'Commercial Concrete Services',
    shortDescription: 'Reliable concrete flatwork for commercial properties.',
    description: 'We provide expert concrete services for commercial applications, including sidewalks, dumpster pads, loading docks, and foundations. Durable, code-compliant, and built to last.',
    features: [
      'Sidewalk installation',
      'ADA ramps',
      'Dumpster pads',
      'Loading docks',
      'Curb and gutter',
      'Stamped concrete'
    ],
    benefits: [
      'Code compliance',
      'Safety and accessibility',
      'Extreme durability',
      'Low maintenance'
    ],
    category: 'hardscaping',
    icon: 'Square',
    heroImage: '/images/commercial/commercial hardscaping/FHL_Devon+Tower_002.jpg.webp',
    images: [
      "/images/commercial/commercial hardscaping/FHL_Devon+Tower_002.jpg.webp",
      "/images/commercial/commercial hardscaping/-106-800x600-0.jpg"
    ]
  },
  {
    slug: 'retaining-walls',
    name: 'Commercial Retaining Walls',
    shortDescription: 'Structural walls for erosion control and grade management.',
    description: 'Solve grade issues and prevent erosion with our commercial retaining wall solutions. We build engineered walls using large block, natural stone, or concrete to secure your property.',
    features: [
      'Engineered block walls',
      'Erosion control',
      'Grade stabilization',
      'Drainage integration',
      'Terracing',
      'Large scale installation'
    ],
    benefits: [
      'Maximize usable space',
      'Prevent soil loss',
      'Structural integrity',
      'Long-lasting solution'
    ],
    category: 'hardscaping',
    icon: 'Layers',
    heroImage: '/images/commercial/commercial hardscaping/SOBO_The-Benefits-of-Hardscapes-in-Commercial-Properties.jpg',
    images: [
      "/images/commercial/commercial hardscaping/SOBO_The-Benefits-of-Hardscapes-in-Commercial-Properties.jpg",
      "/images/commercial/commercial hardscaping/-106-800x600-0.jpg"
    ]
  },
  {
    slug: 'pergolas',
    name: 'Commercial Pergolas & Shade',
    shortDescription: 'Shade structures for outdoor break areas and dining.',
    description: 'Create comfortable outdoor spaces for employees and customers with custom pergolas and shade structures. Perfect for restaurant patios, office break areas, and apartment amenities.',
    features: [
      'Custom wood or metal',
      'Attached or freestanding',
      'Dining area coverage',
      'Employee break areas',
      'Integrated lighting',
      'Durable construction'
    ],
    benefits: [
      'Extended outdoor use',
      'Employee satisfaction',
      'Architectural interest',
      'Weather protection'
    ],
    category: 'hardscaping',
    icon: 'Home',
    heroImage: '/images/commercial/commercial hardscaping/Courtyard+Novi,+MI.jpeg.webp',
    images: [
      "/images/commercial/commercial hardscaping/Courtyard+Novi,+MI.jpeg.webp",
      "/images/commercial/commercial hardscaping/FHL_Devon+Tower_002.jpg.webp"
    ]
  },
  {
    slug: 'fireplaces',
    name: 'Commercial Fire Features',
    shortDescription: 'Fire pits and fireplaces for gathering spaces.',
    description: 'Add ambiance and warmth to your commercial outdoor space with a custom fire pit or fireplace. Ideal for hotels, restaurants, and multifamily communities to extend the outdoor season.',
    features: [
      'Gas fire pits',
      'Outdoor fireplaces',
      'Safety controls',
      'Seating walls',
      'Stone or brick finish',
      'Gathering focal points'
    ],
    benefits: [
      'Year-round attraction',
      'Upscale ambiance',
      'Increased dwell time',
      'Unique amenity'
    ],
    category: 'hardscaping',
    icon: 'Flame',
    heroImage: '/images/commercial/commercial hardscaping/SOBO_Winter-Preparation-for-your-Commercial-Landscape.jpeg.webp',
    images: [
      "/images/commercial/commercial hardscaping/SOBO_Winter-Preparation-for-your-Commercial-Landscape.jpeg.webp"
    ]
  },
  
  // SPECIALTY & MAINTENANCE
  {
    slug: 'irrigation',
    name: 'Commercial Irrigation',
    shortDescription: 'Efficient water management systems for businesses.',
    description: 'Optimize water usage and maintain a healthy landscape with our commercial irrigation services. We design, install, and repair large-scale systems for maximum efficiency.',
    features: [
      'System design & installation',
      'Smart controller upgrades',
      'Leak detection & repair',
      'Water conservation audits',
      'Drip irrigation for beds',
      'Regular inspections'
    ],
    benefits: [
      'Reduced water bills',
      'Sustainable practices',
      'Healthier landscape',
      'Automated management'
    ],
    category: 'specialty',
    icon: 'Droplets',
    heroImage: '/images/commercial/commercial irrigation/commercial-irrigation-system.jpg',
    images: [
      "/images/commercial/commercial irrigation/commercial-irrigation-service-crew-4-1536x1024-1-1024x683.webp",
      "/images/commercial/commercial irrigation/commercial-irrigation-system.jpg",
      "/images/commercial/commercial irrigation/denver-landscaping-service-4.jpg",
      "/images/commercial/commercial irrigation/Depositphotos_39328441_original-1080x675.jpg",
      "/images/commercial/commercial irrigation/unnamed-1.jpg",
      "/images/commercial/commercial irrigation/unnamed.jpg"
    ]
  },
  {
    slug: 'landscape-cleanup',
    name: 'Commercial Property Cleanup',
    shortDescription: 'Comprehensive cleanup and restoration services.',
    description: 'Keep your commercial property pristine with our cleanup services. We handle debris removal, seasonal cleanups, and storm damage restoration to ensure safety and aesthetics.',
    features: [
      'Seasonal debris removal',
      'Storm damage cleanup',
      'Leaf removal',
      'Bed detail & weeding',
      'Pruning of overgrowth',
      'Trash patrol'
    ],
    benefits: [
      'Risk management',
      'Clean professional look',
      'Pest control',
      'Tenant satisfaction'
    ],
    category: 'maintenance',
    icon: 'Sparkles',
    heroImage: '/images/commercial/commercial landscaping/Commercial-Landscape-Maintenance-scaled.jpg',
    images: [
      "/images/commercial/commercial landscaping/Commercial-Landscape-Maintenance-scaled.jpg",
      "/images/commercial/commercial landscaping/commercial-landscaping.jpg",
      "/images/commercial/commercial landscaping/dallas-texas-commercial-landscaping-near-me.webp",
      "/images/commercial/commercial landscaping/management-16x9-1-688x387.jpg"
    ]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getAllServiceSlugs = (): string[] => {
  return services.map(service => service.slug);
};

export const getServicesByCategory = (category: Service['category']): Service[] => {
  return services.filter(service => service.category === category);
};

export const getFeaturedServices = (limit: number = 8): Service[] => {
  return services.slice(0, limit);
};
