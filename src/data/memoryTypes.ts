import { MemoryType } from '../types';

export const memoryTypes: MemoryType[] = [
  {
    id: 1,
    name: 'DDR4 RAM',
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    releaseDate: '2014',
    writeSpeed: '17,000 MB/s',
    readSpeed: '17,000 MB/s',
    pros: ['High bandwidth', 'Lower power consumption than DDR3', 'Widely available'],
    cons: ['More expensive than DDR3', 'Incompatible with older systems']
  },
  {
    id: 2,
    name: 'SSD (SATA)',
    image: 'https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    releaseDate: '2003',
    writeSpeed: '550 MB/s',
    readSpeed: '550 MB/s',
    pros: ['Much faster than HDDs', 'No moving parts', 'Silent operation'],
    cons: ['More expensive per GB than HDDs', 'Lower capacity options']
  },
  {
    id: 3,
    name: 'NVMe SSD',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    releaseDate: '2013',
    writeSpeed: '3,500 MB/s',
    readSpeed: '7,000 MB/s',
    pros: ['Extremely fast read/write speeds', 'Small form factor', 'Low latency'],
    cons: ['More expensive than SATA SSDs', 'Requires compatible motherboard']
  },
  {
    id: 4,
    name: 'HDD',
    image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    releaseDate: '1956',
    writeSpeed: '150 MB/s',
    readSpeed: '150 MB/s',
    pros: ['Inexpensive per GB', 'High capacity options', 'Widely compatible'],
    cons: ['Slower than SSDs', 'Moving parts can fail', 'Noisy operation']
  },
  {
    id: 5,
    name: 'DDR5 RAM',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    releaseDate: '2020',
    writeSpeed: '38,400 MB/s',
    readSpeed: '38,400 MB/s',
    pros: ['Higher bandwidth than DDR4', 'Better power efficiency', 'Enhanced error correction'],
    cons: ['Expensive', 'Limited availability', 'Requires new motherboards']
  }
];