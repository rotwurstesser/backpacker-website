import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import GalleryGrid from './GalleryGrid.svelte';

describe('GalleryGrid', () => {
  const mockImages = [
    { image: 'img1.jpg', title: 'Img 1', category: 'cat1', alt: { en: 'Alt 1' } },
    { image: 'img2.jpg', title: 'Img 2', category: 'cat2', alt: { en: 'Alt 2' } }
  ];
  const mockContent = {
    noImagesMessage: { en: 'No images' },
    categories: { cat1: { en: 'Category 1' }, cat2: { en: 'Category 2' } }
  };

  it('renders filter buttons and images', () => {
    render(GalleryGrid, {
      images: mockImages,
      galleryPageContent: mockContent,
      lang: 'en',
      onImageClick: vi.fn()
    });

    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Category 2')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Alt 1' })).toBeInTheDocument();
  });

  it('filters images when category clicked', async () => {
    render(GalleryGrid, {
      images: mockImages,
      galleryPageContent: mockContent,
      lang: 'en',
      onImageClick: vi.fn()
    });

    const cat2Button = screen.getByText('Category 2');
    await fireEvent.click(cat2Button);

    expect(screen.queryByRole('img', { name: 'Alt 1' })).not.toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Alt 2' })).toBeInTheDocument();
  });
});
