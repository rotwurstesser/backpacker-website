import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Directions from './Directions.svelte';
import { Train } from 'lucide-svelte';

describe('Directions', () => {
  const mockProps = {
    title: { en: 'How to get here' },
    tramTitle: { en: 'By Train' },
    tram: { en: 'Take the tram.' },
    footTitle: { en: 'By Foot' },
    foot: { en: 'Walk fast.' },
    carTitle: { en: 'By Car' },
    car: { en: 'Drive slow.' },
    lang: 'en' as const
  };

  it('renders direction cards', () => {
    render(Directions, mockProps);

    expect(screen.getByText('How to get here')).toBeInTheDocument();
    expect(screen.getByText('By Train')).toBeInTheDocument();
    expect(screen.getByText('Take the tram.')).toBeInTheDocument();
    expect(screen.getByText('By Foot')).toBeInTheDocument();
    expect(screen.getByText('Walk fast.')).toBeInTheDocument();
  });
});
