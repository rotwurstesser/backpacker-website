import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Directions from './Directions.svelte';
import { Train } from 'lucide-svelte';

describe('Directions', () => {
  const mockDirections = [
    { icon: Train, title: { en: 'By Train' }, description: { en: 'Take the tram.' } }
  ];

  it('renders direction cards', () => {
    render(Directions, { directions: mockDirections, title: { en: 'How to get here' }, lang: 'en' });

    expect(screen.getByText('How to get here')).toBeInTheDocument();
    expect(screen.getByText('By Train')).toBeInTheDocument();
    expect(screen.getByText('Take the tram.')).toBeInTheDocument();
  });
});
