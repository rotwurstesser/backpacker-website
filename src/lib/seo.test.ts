import { describe, it, expect } from 'vitest';
import { getStructuredData, getOrganizationData, siteConfig } from './seo';

describe('seo', () => {
  describe('getStructuredData', () => {
    it('should generate valid schema for English', () => {
      const data = getStructuredData('en');
      expect(data['@type']).toBe('Hostel');
      expect(data.description).toBe(siteConfig.description.en);
      expect(data.address.addressCountry).toBe('CH');
    });

    it('should generate valid schema for German', () => {
      const data = getStructuredData('de');
      expect(data.description).toBe(siteConfig.description.de);
    });
  });

  describe('getOrganizationData', () => {
    it('should generate organization schema', () => {
      const data = getOrganizationData();
      expect(data['@type']).toBe('Organization');
      expect(data.name).toBe(siteConfig.name);
      expect(data.contactPoint.contactType).toBe('reservations');
    });
  });
});
