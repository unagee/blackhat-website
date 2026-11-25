import type { PageMeta } from '@/types'

// The legal pages linked from the footer. Copy supplied by Blackhat; headings put in Title Case.
// A block is a paragraph, a bullet list or a postal address. Paragraphs may hold links written
// as [text](href).
export type LegalBlock = string | { list: string[] } | { address: string[] }
export type LegalSection = { heading: string; body: LegalBlock[] }
export type LegalPage = {
  slug: 'terms' | 'privacy' | 'cookies'
  meta: PageMeta
  eyebrow: string
  title: string
  updated?: string
  intro?: LegalBlock[]
  sections: LegalSection[]
}

const contactEmail = '[team@blackhat.agency](mailto:team@blackhat.agency)'
const address = {
  address: ['Blackhat Agency', '133 New Bridge Road #08-01', 'Chinatown Point', 'Singapore 059413'],
}

export const terms: LegalPage = {
  slug: 'terms',
  meta: {
    title: 'Terms of Service | Blackhat',
    description: 'The terms that apply when you use the Blackhat Agency website and services.',
  },
  eyebrow: 'Legal',
  title: 'Terms of Service',
  sections: [
    {
      heading: 'Overview',
      body: [
        'This website is operated by Blackhat Agency. Throughout the site, the terms “we”, “us” and “our” refer to Blackhat Agency. Blackhat Agency offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.',
        'By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.',
        'Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.',
        'Any new features or tools which are added to the current site shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.',
      ],
    },
    {
      heading: 'Browsing Terms',
      body: [
        'By agreeing to these Terms of Service, you represent that you are at least the legal age in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.',
        'You may not use our services for any illegal or unauthorized purpose nor may you, in the use of the service, violate any laws in your jurisdiction (including but not limited to copyright laws).',
        'You must not transmit any worms or viruses or any code of a destructive nature.',
        'A breach or violation of any of the Terms will result in an immediate termination of your services.',
      ],
    },
    {
      heading: 'General Conditions',
      body: [
        'We reserve the right to refuse service to anyone for any reason at any time.',
        'You understand that your content, may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.',
        'You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of our website or the services we provide you, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.',
        'The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.',
      ],
    },
    {
      heading: 'Accuracy, Completeness and Timeliness of Information',
      body: [
        'We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information, such as direct correspondence with us. Any reliance on the material on this site is at your own risk.',
        'This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.',
      ],
    },
    {
      heading: 'Modifications of the Service and Prices',
      body: [
        'Prices for our services are subject to change without notice.',
        'We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.',
        'We shall not be liable to you or any third-party for any modification, price change, suspension or discontinuance of the website.',
      ],
    },
    {
      heading: 'Optional Tools',
      body: [
        'We may provide you with access to third-party tools over which we neither monitor nor have any control nor input. You acknowledge and agree that we provide access to such tools “as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.',
        'Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).',
        'We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.',
      ],
    },
    {
      heading: 'Third-Party Links',
      body: [
        'Certain content, products and services available via our Service may include materials from third-parties.',
        'Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.',
        'We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party’s policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.',
      ],
    },
    {
      heading: 'User Comments, Feedback and Other Submissions',
      body: [
        'If, at our request, you send certain specific submissions, or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, “comments”), you agree that we may, at any time, without restriction, edit, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.',
        'We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.',
        'You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.',
      ],
    },
    {
      heading: 'Personal Information',
      body: [
        'Your submission of personal information through the site is governed by our [Privacy Policy](/privacy).',
      ],
    },
    {
      heading: 'Errors, Inaccuracies and Omissions',
      body: [
        'Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to our product or service descriptions, pricing, promotions, offers, and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information if any information on the site is inaccurate at any time without prior notice.',
        'We undertake no obligation to update, amend or clarify information on our website, including without limitation, service information and pricing information, except as required by law. No specified update or refresh date applied to the website, or on any information on the website, should be taken to indicate that all information on the website has been modified or updated.',
      ],
    },
    {
      heading: 'Prohibited Uses',
      body: [
        'In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of our website or our services or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the website or any related website, other websites, or the Internet. We reserve the right to terminate your use of our website for violating any of the prohibited uses.',
      ],
    },
    {
      heading: 'Disclaimer of Warranties; Limitation of Liability',
      body: [
        'We do not guarantee, represent or warrant that your use of our website will be uninterrupted, timely, secure or error-free.',
        'We do not warrant that the results that may be obtained from the use of our website will be accurate or reliable.',
        'You agree that from time to time we may remove the website for indefinite periods of time or cancel the website at any time, without notice to you.',
        'You expressly agree that your use of, or inability to use, the website is at your sole risk. The website and all services delivered to you through the website are (except as expressly stated by us) provided “as is” and “as available” for your use, without any representations or conditions of any kind, either expressed or implied.',
        'In no case shall Blackhat Agency, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation, lost profits, lost revenue, lost savings, lost data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the services or products procured through using our website, or for any other claim related in any way to your use of our website or any of its services, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of our website or any content submitted, transmitted, or otherwise made available via the website, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.',
      ],
    },
    {
      heading: 'Indemnification',
      body: [
        'You agree to indemnify, defend and hold harmless Blackhat Agency and our parent, subsidiaries, affiliates, officers, directors, agents, contractors, licensors, subcontractors, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.',
      ],
    },
    {
      heading: 'Severability',
      body: [
        'In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.',
      ],
    },
    {
      heading: 'Termination',
      body: [
        'The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.',
        'These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our website or services, or when you cease using our site.',
        'If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our website (or any part thereof).',
      ],
    },
    {
      heading: 'Entire Agreement',
      body: [
        'The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.',
        'These Terms of Service and any policies or operating rules posted by us on this site or in respect to Blackhat Agency and its services constitutes the entire agreement and understanding between you and us and governs your use of the website, superseding any contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).',
        'Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.',
      ],
    },
    {
      heading: 'Governing Law',
      body: [
        'These Terms of Service and any separate agreements whereby we provide you our services shall be governed by and construed in accordance with the laws of Singapore.',
      ],
    },
    {
      heading: 'Changes to Terms of Service',
      body: [
        'You can review the most current version of the Terms of Service at any time at this page.',
        'We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or its services following the posting of any changes to these Terms of Service constitutes acceptance of those changes.',
      ],
    },
    {
      heading: 'Contact Information',
      body: [`Questions about the Terms of Service should be sent to us at ${contactEmail}.`],
    },
  ],
}

export const privacy: LegalPage = {
  slug: 'privacy',
  meta: {
    title: 'Privacy Policy | Blackhat',
    description:
      'What information Blackhat Agency collects through this website, how we use and share it, and how to contact us about it.',
  },
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  updated: 'This policy was last updated on September 25, 2024',
  sections: [
    {
      heading: 'Introduction',
      body: [
        'At Blackhat Agency, we take your privacy seriously, and we acknowledge that by using our website, you are giving us information that should not be shared openly to people outside of our company. As such, we want to make it clear, what information you are giving us, who sees it and why we are asking for it.',
      ],
    },
    {
      heading: 'Information We Collect From You',
      body: [
        '**Information Provided Directly By You**',
        'When you contact us for our services, we may ask for information including your name, e-mail, phone number and other files you may submit voluntarily.',
        'When you use interactive features on our website, for example submitting an audit or contact us form, we receive the information you provide.',
        'When you contact us for assistance, we receive the information you provide in that correspondence and any other information you send to us.',
        '**Information We Receive Automatically When You Use Our Website**',
        'We collect Device Information using the following technologies:',
        '**Cookies**',
        'Cookies are small data files placed on your device or computer and often include a unique identifier. For more information, please see our [Cookie Policy](/cookies).',
        '**Log Files**',
        'Log Files track actions occurring on the site and collect data including your Internet Protocol (IP address), browser type or operating system, Internet service provider, referring links to our website or exit links from our website and date/time stamps.',
        '**Web Beacons, Tags and Pixels**',
        'Web Beacons, Tags and Pixels are electronic files used to record data about how you browse our website.',
        '**De-Identified or Aggregate Information**',
        'De-identified information is data we collect that has been combined with information from others so that the recipient of the data is not able to identify any particular individual or device from the data.',
      ],
    },
    {
      heading: 'How We Use Your Information',
      body: [
        'We may use the information that we collect through our website for a variety of purposes supporting our work, including to:',
        {
          list: [
            'Provide you with the products, promotions and services you request.',
            'Provide you with information about how to use our third-party products or services',
            'Customize or personalize your use of our website, including the use of Cookies to remember your interface preferences.',
            'Inform you about important public policy issues that relate to our work or that might affect our services.',
            'Help us screen for potential risk (particularly using your IP address)',
            'Improve and optimize our website (for example by generating analytics about how our customers interact with the website and to assess and improve its user experience.',
          ],
        },
      ],
    },
    {
      heading: 'How We Share Your Information',
      body: [
        'We are committed to maintaining your trust and we want you to understand when and with whom we may share the information we collect from you.',
        'We may share your information with service providers that perform certain functions or services on our behalf, including Pipedrive and Mixpanel.',
        'We may share your information with other parties when required by law or as necessary to protect the services. We may disclose your information to such third parties in order to:',
        {
          list: [
            'Protect the legal rights, safety and security of our services and its users.',
            'Prevent fraud (or for risk management purposes).',
            'Comply with or respond to law enforcement or legal processes or a request for cooperation by a government or other entity, whether or not legally required. If Blackhat Agency intends to disclose a member’s information to law enforcement or in response to a legal process, we will make reasonable efforts to promptly notify the member - and, if the member is under 18 years of age, the member’s parent or legal guardian - unless directed not to by a court of law.',
            'Complete actions connected to the transfer of assets. Blackhat Agency may transfer your information to one or more third parties as a part of a transaction involving selling all or part of the business, making a sale, transferring assets, being involved in a merger or business transfer, or in the unlikely event of bankruptcy.',
            'Conduct research or analysis. We may share De-Identified or Aggregate Information with any entity, including for research and analysis purposes. De-identified information is data we collect that has been combined with information from others so that the recipient of the data is not able to identify any particular individual or device from the data. We will never share personally identifiable information with third party commercial entities for direct marketing purposes, unless permitted by you.',
          ],
        },
      ],
    },
    {
      heading: 'How We Keep Your Information Secure',
      body: [
        'Protecting the information of our users is extremely important to us, so we constantly maintain our security safeguards to help protect against loss, misuse, unauthorized access, disclosure, alteration or destruction of the information you provide to us.',
        'However, please note that no data transmission or storage can be guaranteed to be 100% secure. We strive to protect your information and privacy, but we ultimately cannot guarantee the security of any information you disclose or transmit to us online and cannot be responsible for theft, destruction or inadvertent disclosure of your information.',
      ],
    },
    {
      heading: 'Adherence to General Data Protection Regulation (GDPR)',
      body: [
        `At any stage you may request for us to share any non-anonymised information that we are storing about you. To do so please email ${contactEmail} and make your request clear.`,
        'By providing your e-mail through our website, you are agreeing to receive promotional e-mails, newsletters, and similar communications from us. You may opt out of receiving these e-mails from us by clicking on the opt-out or “unsubscribe” link included in the e-mails you receive. Please note that opt-out requests may take up to 5-10 business days to be effective. Your opt-out request will not apply to messages that you request or that are not promotional in nature. For example, we may contact you concerning your account or any correspondence you have made with us, even if you opt out of receiving unsolicited promotional e-mail messages.',
        'Note that under GDPR we are defined as the Data Controllers of your data, meaning that we have direct access to your content, and other information about you. We will ensure that high standards of security are used to prevent any third parties accessing your data without permission.',
      ],
    },
    {
      heading: 'About This Policy',
      body: [
        'Our Privacy Policy applies to all the services we offer through our website. This is not applicable to services with separate privacy policies that do not incorporate this Privacy Policy.',
        'Our Privacy Policy does not apply to the practices of other companies or organizations with separate Privacy Policies that advertise our services.',
        'Our Privacy Policy does not apply to products or services offered by other individuals or companies that have used or are linked to our services.',
      ],
    },
    {
      heading: 'Changes to This Policy',
      body: [
        'We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal or regulatory reasons.',
      ],
    },
    {
      heading: 'Contact Us',
      body: [
        `For more information about our privacy practices, if you have any questions or if you would like to make a complaint, please contact us by e-mail at ${contactEmail} or by mail using the address provided below:`,
        address,
      ],
    },
  ],
}

// Drafted from what the site actually does (see layout/CookieConsent.astro and the YouTube
// embeds): one stored choice, no analytics or advertising cookies, YouTube in privacy mode.
export const cookies: LegalPage = {
  slug: 'cookies',
  meta: {
    title: 'Cookie Policy | Blackhat',
    description:
      'How the Blackhat Agency website uses cookies and similar technologies, and how you can control them.',
  },
  eyebrow: 'Legal',
  title: 'Cookie Policy',
  updated: 'This policy was last updated on November 25, 2026',
  sections: [
    {
      heading: 'What Cookies Are',
      body: [
        'Cookies are small text files that a website places on your device when you visit it. Websites can also keep information in your browser in similar ways, such as browser storage. This policy uses “cookies” to cover all of these.',
        'Cookies can be set by the website you are visiting (first-party cookies) or by another service whose content appears on it (third-party cookies).',
      ],
    },
    {
      heading: 'Cookies We Use',
      body: [
        'We keep cookies to a minimum. This website does not use advertising cookies, and it does not currently use analytics or tracking cookies.',
        '**Strictly Necessary**',
        'When you choose “Allow Cookies” or “Decline” on our cookie notice, we remember your choice in your browser under the name “blackhat-cookies”, so we don’t ask you again on every page. It stores only your choice, not any personal information, and stays until you clear your browser’s data for this site.',
        '**Analytics**',
        'We don’t use analytics cookies at the moment. If we add them to understand how the site is used, they will only run if you have chosen “Allow Cookies”, and we will update this policy first.',
      ],
    },
    {
      heading: 'Third-Party Content',
      body: [
        'Some pages include videos from YouTube. We embed them in YouTube’s privacy-enhanced mode (youtube-nocookie.com), which is designed not to use YouTube cookies to personalise what you see unless you play a video. Once a video plays, YouTube may store information on your device and collect data about how you watch it. YouTube’s use of this information is covered by [Google’s Privacy Policy](https://policies.google.com/privacy).',
        'Our contact form does not use cookies. What you send through it is handled as described in our [Privacy Policy](/privacy).',
      ],
    },
    {
      heading: 'Managing Cookies',
      body: [
        'You can choose whether to allow optional cookies when our cookie notice appears. To change your choice later, clear this site’s data in your browser, and the notice will appear again on your next visit.',
        'You can also block or delete cookies through your browser settings. Most browsers explain how in their help pages. Blocking all cookies may stop some parts of websites from working as expected.',
      ],
    },
    {
      heading: 'Changes to This Policy',
      body: [
        'We may update this Cookie Policy when we change the cookies we use or for other operational, legal or regulatory reasons. The date at the top of this page shows when it was last updated.',
      ],
    },
    {
      heading: 'Contact Us',
      body: [
        `If you have any questions about how we use cookies, please contact us by e-mail at ${contactEmail} or by mail at:`,
        address,
      ],
    },
  ],
}

export const legalPages = [terms, privacy, cookies]
