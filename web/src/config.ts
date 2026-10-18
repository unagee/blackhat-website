// Site-wide details used in the footer, contact links and search-engine data.
export const websiteConfig = {
  name: 'Blackhat Agency',
  legalName: 'BH Agency Pte. Ltd.',
  email: 'team@blackhat.agency',
  address: {
    street: '133 New Bridge Road #08-01',
    building: 'Chinatown Point',
    locality: 'Singapore',
    postalCode: '059413',
    countryCode: 'SG',
  },
  // No real profiles yet: add them as { label: 'LinkedIn', href: 'https://…' }.
  social: [] as { label: string; href: string }[],
}
