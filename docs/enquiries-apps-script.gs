// Google Apps Script behind the website's enquiry form.
//
// It lives in the "Blackhat Website Enquiries" Google Sheet (Extensions > Apps Script),
// deployed as a web app (Execute as: Me, Who has access: Anyone). The deployment URL goes in
// web/src/config.ts as `enquiryEndpoint`. Each enquiry adds a row to the sheet and emails
// RECIPIENTS, with Reply-To set to the sender so a reply goes straight back to them.

const RECIPIENTS = 'nathan@blackhat.agency, team@blackhat.agency'
const TIME_ZONE = 'Asia/Singapore'

function doPost(e) {
  const p = e.parameter || {}
  // Spam trap: the form's hidden "website" field is only ever filled in by bots.
  if (p.website) return done()

  const sheet = SpreadsheetApp.getActiveSpreadsheet()
  const received = Utilities.formatDate(new Date(), TIME_ZONE, 'yyyy-MM-dd HH:mm')
  const row = [p.name, p.company, p.email, p.engagement, p.message, p.page].map(clean)
  sheet.getSheets()[0].appendRow([received, ...row, 'New'])

  MailApp.sendEmail({
    to: RECIPIENTS,
    replyTo: p.email || '',
    subject: `New website enquiry: ${p.name || 'Someone'}${p.company ? ` (${p.company})` : ''}`,
    body: [
      `Name: ${p.name || ''}`,
      `Company: ${p.company || ''}`,
      `Email: ${p.email || ''}`,
      `What do you need?: ${p.engagement || ''}`,
      '',
      p.message || '',
      '',
      `Sent from: ${p.page || ''}`,
      `All enquiries: ${sheet.getUrl()}`,
    ].join('\n'),
  })
  return done()
}

// Trim long input and stop text that starts with = + - @ being read as a spreadsheet formula.
function clean(value) {
  const text = String(value || '').slice(0, 5000)
  return /^[=+\-@]/.test(text) ? `'${text}` : text
}

function done() {
  return ContentService.createTextOutput('ok')
}
