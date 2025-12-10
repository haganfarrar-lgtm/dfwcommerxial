
import { services } from './data/services';

console.log('Total services:', services.length);
services.forEach(s => {
  console.log(`Slug: ${s.slug}, Name: ${s.name}`);
});

