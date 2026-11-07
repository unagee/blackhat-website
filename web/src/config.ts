// Site-wide details used in the footer, contact links and search-engine data.
export const websiteConfig = {
  name: 'Blackhat Agency',
  legalName: 'BH Agency Pte. Ltd.',
  email: 'team@blackhat.agency',
  // The Google Apps Script web app that saves enquiry form entries to the enquiries sheet and
  // emails the team (script: docs/enquiries-apps-script.gs). Empty: the form opens the
  // visitor's email app instead.
  enquiryEndpoint:
    'https://script.google.com/macros/s/AKfycbyY1KeBrs2AlYkNBB1TFjmnnbnAUTMr-9K9KWpnFezduFiWsJs6s5dTSwcr1kwbgRw/exec',
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
