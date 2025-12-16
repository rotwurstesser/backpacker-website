import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import type { Translations } from '$lib/i18n';
import Hero from './Hero.svelte';
import Features from './Features.svelte';

describe('Home Components', () => {
  const mockContent = {
    heroTitle: { en: 'Welcome' },
    heroSubtitle: { en: 'Best place' },
    heroTagline: { en: 'Hostel' },
    heroCta: { en: 'Book' },
    features: [
      { icon: 'MapPin', title: { en: 'Central' }, description: { en: 'In city' } }
    ]
  };

  const mockT = {
    hero: { learnMore: 'Learn More' },
    features: { title: 'Features' },
    rooms: { title: 'Rooms' },
    common: { viewAll: 'View All' }
  } as unknown as Translations;

  it('renders Hero correctly', () => {
    render(Hero, {
      homeContent: mockContent,
      lang: 'en',
      t: mockT,
      bookingUrl: 'http://book.com'
    });

    expect(screen.getByText('Welcome')).toBeInTheDocument();
    expect(screen.getByText('Best place')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Book/i })).toHaveAttribute('href', 'http://book.com');
  });

  it('renders Features correctly', () => {
    render(Features, {
      homeContent: mockContent,
      lang: 'en',
      t: mockT
    });

    expect(screen.getByText('Features')).toBeInTheDocument(); // Section title
    expect(screen.getByText('Central')).toBeInTheDocument();
    expect(screen.getByText('In city')).toBeInTheDocument();
  });
});
