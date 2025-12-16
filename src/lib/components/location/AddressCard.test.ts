import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import AddressCard from './AddressCard.svelte';

describe('AddressCard', () => {
  const mockContent = {
    addressCardTitle: { en: 'Address' },
    phoneLabel: { en: 'Phone' },
    emailLabel: { en: 'Email' },
    hoursLabel: { en: 'Reception' }
  };

  const mockSettings = {
    siteName: 'Test Hotel',
    address: 'Test Street 1',
    phone: '+123456789',
    email: 'test@example.com',
    receptionHours: '9-5'
  };

  it('renders address details correctly', () => {
    render(AddressCard, { locationContent: mockContent, settings: mockSettings, lang: 'en' });

    expect(screen.getByText('Test Hotel')).toBeInTheDocument();
    expect(screen.getByText('Test Street 1')).toBeInTheDocument();
    expect(screen.getByText('9-5')).toBeInTheDocument();
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
  });

  it('renders contact links correctly', () => {
    render(AddressCard, { locationContent: mockContent, settings: mockSettings, lang: 'en' });

    const emailLink = screen.getByRole('link', { name: /test@example.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:test@example.com');

    const phoneLink = screen.getByRole('link', { name: /\+123456789/i });
    expect(phoneLink).toHaveAttribute('href', 'tel:+123456789');
  });
});
