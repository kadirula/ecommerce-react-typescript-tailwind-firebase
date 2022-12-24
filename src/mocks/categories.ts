import WomanImage from '../assets/home-banner/woman.png';
import ManImage from '../assets/home-banner/man.png';
import CosmeticsImage from '../assets/home-banner/cosmetics.png';
import KidsImage from '../assets/home-banner/kids.png';
import AccessoriesImage from '../assets/home-banner/accessories.png';

export const categories = [
  {
    id: 1,
    image: WomanImage,
    title: 'Women Bags',
    size: 'lg',
    bg: '#fae3d9',
    url: 'womens-bags'
  },
  {
    id: 2,
    image: ManImage,
    title: 'Men Shirts',
    size: 'sm',
    bg: '#d6d3f0',
    url: 'mens-shirts'
  },
  {
    id: 3,
    image: CosmeticsImage,
    title: 'Laptops',
    size: 'sm',
    bg: '#bee2d6',
    url: 'laptops'
  },
  {
    id: 4,
    image: KidsImage,
    title: 'Home Decoration',
    size: 'sm',
    bg: '#cee2f5',
    url: 'home-decoration'
  },
  {
    id: 5,
    image: AccessoriesImage,
    title: 'Smart Phones',
    size: 'sm',
    bg: '#fedbe4',
    url: 'smartphones'
  }
]