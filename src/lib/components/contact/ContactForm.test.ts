import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ContactForm from './ContactForm.svelte';

// Mock fetch for form submission
global.fetch = vi.fn();

describe('ContactForm', () => {
  const mockContent = {
    sendMessageTitle: { en: 'Send Message' },
    formLabels: {
      name: { en: 'Name' },
      email: { en: 'Email' },
      subject: { en: 'Subject' },
      message: { en: 'Message' }
    },
    sendButton: { en: 'Send' },
    sendingButton: { en: 'Sending...' },
    successMessage: { en: 'Success' },
    errorMessage: { en: 'Error' }
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders form fields', () => {
    render(ContactForm, { contactPageContent: mockContent, lang: 'en' });

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Subject')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  // Simple submission test
  it('submits form data', async () => {
    (global.fetch as any).mockResolvedValueOnce({ ok: true });

    render(ContactForm, { contactPageContent: mockContent, lang: 'en' });

    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const subjectInput = screen.getByLabelText('Subject');
    const messageInput = screen.getByLabelText('Message');
    const submitBtn = screen.getByRole('button', { name: /Send/i });

    await fireEvent.input(nameInput, { target: { value: 'John' } });
    await fireEvent.input(emailInput, { target: { value: 'john@example.com' } });
    await fireEvent.input(subjectInput, { target: { value: 'Hello' } });
    await fireEvent.input(messageInput, { target: { value: 'Test message' } });

    await fireEvent.click(submitBtn);

    expect(global.fetch).toHaveBeenCalled();
  });
});
