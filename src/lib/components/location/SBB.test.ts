import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import SBB from './SBB.svelte';

describe('SBB', () => {
  const mockContent = {
    sbbTitle: { en: 'Train Schedule' },
    sbbDescription: { en: 'Check sbb.ch' },
    sbbLinkUrl: 'https://www.sbb.ch',
    sbbLinkText: { en: 'Go to SBB' }
  };

  it('renders SBB link with correct attributes', () => {
    render(SBB, { content: mockContent, lang: 'en' });

    expect(screen.getByText('Train Schedule')).toBeInTheDocument();
    expect(screen.getByText('Check sbb.ch')).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /Go to SBB/i });
    expect(link).toHaveAttribute('href', 'https://www.sbb.ch');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
