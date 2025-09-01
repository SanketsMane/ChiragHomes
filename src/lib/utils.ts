import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-IN').format(num);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function getImageUrl(imagePath: string, width?: number, height?: number): string {
  // For production, you would integrate with Cloudinary or similar service
  // For now, return the direct path
  if (width && height) {
    return `${imagePath}?w=${width}&h=${height}&fit=crop`;
  }
  return imagePath;
}

export function generateSEOTitle(title: string, siteName = 'ChiragHomes'): string {
  return `${title} | ${siteName}`;
}

export function generateSEODescription(description: string, maxLength = 160): string {
  return truncateText(description, maxLength);
}
