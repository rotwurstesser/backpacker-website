import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import Lightbox from './Lightbox.svelte';

describe('Lightbox', () => {
  const mockImages = [
    { image: 'img1.jpg', title: 'Img 1', alt: { en: 'Alt 1' } },
    { image: 'img2.jpg', title: 'Img 2', alt: { en: 'Alt 2' } }
  ];

  it('renders initial image', () => {
    render(Lightbox, { images: mockImages, initialIndex: 0, lang: 'en' });
    expect(screen.getByRole('img', { name: 'Alt 1' })).toBeInTheDocument();
    expect(screen.getByText('1 / 2')).toBeInTheDocument();
  });

  it('navigates to next image', async () => {
    render(Lightbox, { images: mockImages, initialIndex: 0, lang: 'en' });
    const nextBtn = screen.getByLabelText('Next image');
    await fireEvent.click(nextBtn);

    expect(screen.getByRole('img', { name: 'Alt 2' })).toBeInTheDocument();
    expect(screen.getByText('2 / 2')).toBeInTheDocument();
  });

  it('emits close event', async () => {
    const { component } = render(Lightbox, { images: mockImages, initialIndex: 0, lang: 'en' });
    const closeHandler = vi.fn();
    component.$on('close', closeHandler);

    const closeBtn = screen.getByLabelText('Close lightbox');
    await fireEvent.click(closeBtn);

    expect(closeHandler).toHaveBeenCalled();
  });
});
