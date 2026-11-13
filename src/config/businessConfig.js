/**
 * DH Insurance & Digital Service - Central Business Configuration
 * Central source of truth for business contact, banking CSP credentials,
 * services catalogue, disclaimers, operating hours, and location.
 */

export const businessConfig = {
  name: "DH Insurance & Digital Service",
  tagline: "Your Trusted Insurance & Digital Service Centre",
  subheadline: "Insurance, Banking, Loan Assistance and Digital Services Under One Roof.",
  description:
    "DH Insurance & Digital Service is Pipodara’s premier multi-service centre providing professional insurance advisory, Bank of India CSP kiosk banking, loan documentation assistance, government citizen services, and high-quality digital printing.",

  contacts: {
    primaryPhone: "+91 8401377466",
    primaryPhoneRaw: "+918401377466",
    secondaryPhone: "+91 8401877466",
    secondaryPhoneRaw: "+918401877466",
    licAgentPhone: "+91 9601917955",
    licAgentPhoneRaw: "+919601917955",
    whatsAppNumber: "8401377466",
    whatsAppUrl: "https://wa.me/918401377466",
    email: "info@dhinsurance.in", // Configurable email
  },

  bankingCSP: {
    bankName: "Bank of India",
    serviceTitle: "Customer Service Point (CSP)",
    kioskId: "11621960",
    branch: "Palod",
    branchCode: "002757",
    authorizationNotice:
      "Customer Service Point (CSP) authorized under Bank of India, Palod Branch (Code: 002757). DH Insurance & Digital Service operates solely as an authorized banking correspondence kiosk.",
  },

  location: {
    locality: "Pipodara",
    city: "Surat",
    district: "Surat",
    state: "Gujarat",
    country: "India",
    pincode: "394110",
    addressLine1: "1st Floor, Shop no 5 Sagar complex",
    addressLine2: "Silver Hub Industrial, Pipodara 394110",
    fullAddress: "1st Floor, Shop no 5 Sagar complex, Silver Hub Industrial, Pipodara 394110",
    addressPlaceholder: "1st Floor, Shop no 5 Sagar complex, Silver Hub Industrial, Pipodara 394110",
    plusCode: "9X77+QH Pipodara, Gujarat",
    plusCodeShort: "9X77+QH",
    fullPlusCode: "7JHJ9X77+QH",
    coordinates: {
      lat: 21.364438,
      lng: 72.963938,
    },
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=9X77%2BQH+Pipodara%2C+Gujarat&t=&z=16&ie=UTF8&iwloc=&output=embed",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=9X77%2BQH+Pipodara%2C+Gujarat",
    mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=9X77%2BQH+Pipodara%2C+Gujarat",
    googleBusinessProfile: "https://www.google.com/business/",
  },

  openingHours: {
    weekdays: "Monday – Saturday: 9:00 AM – 8:00 PM",
    sunday: "Sunday: Closed / Urgent By Appointment",
    availabilityNote: "Instant assistance available on WhatsApp during all working hours.",
  },

  socialLinks: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
  },

  seo: {
    siteUrl: "https://dh-insurance.pages.dev",
    defaultTitle: "DH Insurance & Digital Service | Bank of India CSP in Pipodara, Surat",
    defaultDescription:
      "Authorized Bank of India CSP (Kiosk ID: 11621960), Life, Health, Vehicle Insurance, Loan Assistance & Citizen Digital Services in Pipodara 394110, Surat.",
  },

  disclaimers: {
    insurance:
      "Insurance policies, eligibility, underwriting, premium calculations, and claim settlements are strictly governed by the respective insurance company terms & IRDAI guidelines. DH Insurance & Digital Service provides advisory and facilitation services.",
    banking:
      "DH Insurance & Digital Service is an authorized Customer Service Point (CSP Kiosk ID: 11621960) under Bank of India Palod Branch (Branch Code: 002757). We are not an independent commercial bank branch. All banking transactions are processed in real-time through authorized Bank of India kiosk channels.",
    loans:
      "DH Insurance & Digital Service facilitates loan documentation and liaisons with authorized financial institutions and banks. We do not guarantee loan approvals, disburse credit directly, or set interest rates. Loan approval is at the sole discretion of the lending partner.",
    digital:
      "Government-related documentation assistance (PAN, Aadhaar, ITR, Voter ID, E-Shram, Udyam) is provided subject to official regulatory rules, individual applicant eligibility, and competent government portal verifications.",
    privacy:
      "We never collect or store confidential financial credentials such as Aadhaar OTPs, bank passwords, ATM PINs, or UPI PINs on this website.",
  },

  services: {
    insuranceCategories: [
      {
        category: "Life Insurance",
        description: "Comprehensive financial security and family protection plans tailored to every life stage.",
        items: [
          {
            id: "life-term",
            title: "Term Insurance",
            subtitle: "High life cover at affordable premiums",
            desc: "Secure your family’s financial future with extensive death benefit coverage, critical illness riders, and flexible payout tenures.",
            features: ["High sum assured", "Tax benefits under 80C & 10(10D)", "Accidental death rider options", "Affordable annual premiums"],
            badge: "Most Popular",
          },
          {
            id: "life-standard",
            title: "Life Insurance (Endowment)",
            subtitle: "Guaranteed savings with life protection",
            desc: "Combine secure capital accumulation with life risk coverage, ensuring guaranteed maturity benefits for milestone achievements.",
            features: ["Dual benefit of savings & protection", "Guaranteed additions & bonuses", "Loan facility against policy", "Maturity lump sum"],
          },
          {
            id: "life-pension",
            title: "Pension & Retirement Insurance",
            subtitle: "Lifelong financial independence",
            desc: "Build a reliable post-retirement pension corpus with annuity payout options, regular monthly income, and spouse continuation benefits.",
            features: ["Guaranteed regular income", "Deferred or immediate annuity", "Inflation-protected returns", "Joint life options"],
          },
          {
            id: "life-savings",
            title: "Savings Insurance",
            subtitle: "Disciplined wealth creation",
            desc: "Structured savings plans designed to grow your hard-earned wealth safely while providing continuous family security cover.",
            features: ["Systematic wealth creation", "Market-linked or guaranteed returns", "Liquidity via partial withdrawals", "Capital safety"],
          },
          {
            id: "life-child",
            title: "Child Education & Marriage Insurance",
            subtitle: "Shield your child's dreams",
            desc: "Ensure your child’s higher education, career aspirations, and marriage funds remain fully safeguarded against all life contingencies.",
            features: ["Waiver of premium on parent's absence", "Milestone-based fund payouts", "Dedicated education corpus", "Long-term compounding"],
          },
          {
            id: "life-parents",
            title: "Parents Insurance",
            subtitle: "Dignified security for elderly parents",
            desc: "Specially formulated insurance solutions providing elderly parents with financial stability, emergency buffers, and dignity.",
            features: ["Simplified acceptance norms", "Pre-existing illness support options", "Custom tenure options", "Dedicated claim support"],
          },
        ],
      },
      {
        category: "Health Insurance",
        description: "Shield your household from skyrocketing medical expenses with cashless hospitalization across premier hospital networks.",
        items: [
          {
            id: "health-individual",
            title: "Individual Health Insurance",
            subtitle: "Tailored personal health cover",
            desc: "Comprehensive cashless hospitalization coverage for individuals including day-care treatments, pre/post hospitalisation, and ambulance cover.",
            features: ["Cashless network hospitals", "No-claim bonus (NCB) benefits", "Annual free health check-ups", "Tax savings under Section 80D"],
            badge: "Essential",
          },
          {
            id: "health-family",
            title: "Family Health Insurance (Floater)",
            subtitle: "One comprehensive cover for entire family",
            desc: "A single unified health umbrella covering self, spouse, and children with a shared high sum assured and maternity/pediatric care perks.",
            features: ["Floater sum assured", "Restoration of sum assured", "Maternity & newborn coverage", "Seamless cashless claims"],
          },
          {
            id: "health-medical-assist",
            title: "Medical Insurance Assistance",
            subtitle: "End-to-end policy guidance & claim support",
            desc: "Personalized assistance in selecting the optimal policy, decoding waiting periods, understanding network hospitals, and hassle-free claim filing.",
            features: ["Expert policy comparison", "Claim paperwork assistance", "Guidance on pre-existing diseases", "Local Pipodara support"],
          },
        ],
      },
      {
        category: "Accident Insurance",
        description: "Round-the-clock protection against accidental bodily injuries, permanent disabilities, and unexpected emergencies.",
        items: [
          {
            id: "accident-personal",
            title: "Personal Accident Insurance",
            subtitle: "24/7 global accidental protection",
            desc: "Reliable financial cushion providing compensation for accidental death, permanent total disability (PTD), permanent partial disability (PPD), and temporary loss of income.",
            features: ["Coverage for total & partial disability", "Weekly income benefit during recovery", "Accidental hospitalization reimbursement", "Child education grant support"],
          },
        ],
      },
      {
        category: "Vehicle Insurance",
        description: "Instant paperless policy issuance and renewals for two-wheelers and four-wheelers with maximum No Claim Bonus protection.",
        items: [
          {
            id: "vehicle-bike",
            title: "Bike / Two-Wheeler Insurance",
            subtitle: "Instant policy issuance & roadside aid",
            desc: "Comprehensive and third-party insurance for scooters and motorcycles, protecting against theft, road collisions, natural hazards, and third-party liabilities.",
            features: ["Instant policy in 5 minutes", "Zero depreciation add-on", "Mandatory third-party legal cover", "Personal accident cover up to ₹15 Lakhs"],
            badge: "Instant Issue",
          },
          {
            id: "vehicle-car",
            title: "Car / Four-Wheeler Insurance",
            subtitle: "Maximum protection for your automobile",
            desc: "Complete automotive protection with cashless garage repairs across Gujarat, engine protector, return-to-invoice, and 24x7 roadside assistance.",
            features: ["Cashless repair network", "No Claim Bonus (NCB) transfer", "Zero dep & engine protection", "Emergency roadside towing"],
          },
        ],
      },
    ],

    bankingServices: [
      {
        id: "bank-account",
        title: "Bank Account Opening Assistance",
        desc: "Instant biometric KYC-based savings account opening with Bank of India. Fast, paperless, and zero-hassle onboarding for individuals and students.",
        icon: "UserCheck",
        features: ["Instant account generation", "Biometric e-KYC", "Passbook issuance assistance", "DBT subsidy link"],
      },
      {
        id: "bank-withdrawal",
        title: "Cash Withdrawal (AePS & Micro-ATM)",
        desc: "Convenient biometric cash withdrawal using Aadhaar-enabled Payment System (AePS) and debit cards across all major commercial and rural banks.",
        icon: "Banknote",
        features: ["Aadhaar biometric withdrawal", "All bank debit cards accepted", "Instant balance enquiry", "Mini-statement printout"],
      },
      {
        id: "bank-transfer",
        title: "Money Transfer (DMT / IMPS / NEFT)",
        desc: "Fast and secure domestic money transfers to any bank account in India, operating even on holidays with instant credit confirmation.",
        icon: "SendHorizontal",
        features: ["Instant IMPS fund transfer", "National electronic funds transfer", "Recipient SMS verification", "Safe & authorized gateway"],
      },
      {
        id: "bank-assist",
        title: "Banking Customer Assistance",
        desc: "Dedicated help with passbook updates, mobile number seeding, Aadhaar seeding, social security scheme enrolments (PMJJBY, PMSBY, APY).",
        icon: "HelpCircle",
        features: ["PMJJBY & PMSBY enrolment", "Atal Pension Yojana (APY)", "Kisan Credit Card help", "KYC compliance guidance"],
      },
      {
        id: "bank-home-loan",
        title: "Home Loan Assistance (BOI)",
        desc: "Assistance with Bank of India home loan application paperwork, document collation, and branch coordination for affordable housing.",
        icon: "Home",
        features: ["Eligibility assessment", "Document checklist guidance", "Palod branch coordination", "Subsidized housing schemes"],
      },
      {
        id: "bank-gold-loan",
        title: "Gold Loan Assistance (BOI)",
        desc: "Prompt guidance for securing competitive Bank of India gold loans against gold ornaments with minimal paperwork and quick processing.",
        icon: "Coins",
        features: ["Transparent gold valuation", "Low processing time", "Flexible repayment tenures", "Secure bank custody"],
      },
      {
        id: "bank-car-loan",
        title: "Vehicle Loan Assistance (BOI)",
        desc: "Streamlined financing assistance for purchasing new two-wheelers, passenger cars, or commercial vehicles through Bank of India.",
        icon: "Car",
        features: ["Competitive BOI loan terms", "Simplified file preparation", "New & used vehicle schemes", "Transparent documentation"],
      },
    ],

    loanServices: [
      {
        id: "loan-home",
        title: "Home Loan",
        tagline: "Turn your dream home into reality",
        desc: "Complete documentation support for purchase of new homes, flats, plots, home construction, and home renovation with leading banks.",
        features: ["Long tenures up to 30 years", "Guidance on PMAY subsidy eligibility", "Plot purchase & construction loans", "Balance transfer assistance"],
        eligibility: "Salaried individuals, self-employed professionals, and business owners with verifiable income.",
        documents: ["PAN & Aadhaar Card", "Last 6 months bank statement", "Salary slips / ITR for 2 years", "Property title documents"],
      },
      {
        id: "loan-gold",
        title: "Gold Loan",
        tagline: "Instant liquidity against your gold jewellery",
        desc: "Leverage your gold jewellery for immediate emergency funds, business capital, or agricultural needs through authorized banking channels.",
        features: ["Fast disbursement", "Minimal document requirements", "Multiple interest payment options", "Safety in certified bank vaults"],
        eligibility: "Any individual owning 18-24 carat gold ornaments / coins.",
        documents: ["Aadhaar Card / PAN Card", "Passport size photograph", "Gold ornaments for appraisal"],
      },
      {
        id: "loan-car",
        title: "Car Loan",
        tagline: "Drive home your favourite automobile",
        desc: "Comprehensive loan assistance for purchasing brand new cars, used vehicles, and commercial transport with flexible repayment options.",
        features: ["Financing up to 90% of on-road price", "Tenures from 1 to 7 years", "Quick pre-approval guidance", "Transparent documentation"],
        eligibility: "Salaried employees and self-employed professionals with regular earnings.",
        documents: ["Identity & address proof", "Bank statements (6 months)", "Vehicle quotation from dealer", "Income proof / ITR"],
      },
      {
        id: "loan-personal",
        title: "Personal Loan",
        tagline: "Unsecured funds for your immediate requirements",
        desc: "Quick documentation support for unexpected personal emergencies, medical expenses, higher education, or wedding celebrations.",
        features: ["No collateral or guarantor required", "Multi-purpose utilization", "Flexible EMIs", "Guidance on credit score improvement"],
        eligibility: "Individuals with regular salaried or business income and sound credit history.",
        documents: ["Aadhaar & PAN Card", "Salary slips (3 months) / Form 16", "Bank statement (6 months)", "Address proof"],
      },
    ],

    digitalServices: [
      {
        id: "digital-pan",
        title: "PAN Card Assistance",
        shortDesc: "New PAN application, corrections in name/DOB, minor to major conversion, and reprint of lost cards.",
        icon: "CreditCard",
        processingTime: "5 - 7 Working Days",
      },
      {
        id: "digital-aadhaar",
        title: "Aadhaar-Related Services",
        shortDesc: "Authorized guidance for Aadhaar printouts, mobile number linking status, PVC card orders, and address update documentation.",
        icon: "Fingerprint",
        processingTime: "Instant / As per UIDAI norms",
      },
      {
        id: "digital-voter",
        title: "Voter ID Card Assistance",
        shortDesc: "New voter card registration (Form 6), constituency transfer (Form 8), corrections, and digital voter card download.",
        icon: "Vote",
        processingTime: "7 - 15 Working Days",
      },
      {
        id: "digital-itr",
        title: "ITR Return Filing Assistance",
        shortDesc: "Income Tax Return filing assistance for salaried employees, small traders, retailers, and commission agents.",
        icon: "FileSpreadsheet",
        processingTime: "1 - 2 Working Days",
      },
      {
        id: "digital-udyam",
        title: "Udyam Registration (MSME)",
        shortDesc: "Official MSME registration for micro, small, and medium businesses to unlock government benefits and priority bank loans.",
        icon: "Building2",
        processingTime: "1 - 3 Working Days",
      },
      {
        id: "digital-eshram",
        title: "E-Shram Card Assistance",
        shortDesc: "Registration for unorganized sector workers under the Ministry of Labour national database for accidental insurance benefits.",
        icon: "HardHat",
        processingTime: "Same Day Instant",
      },
      {
        id: "digital-fssai",
        title: "FSSAI Licence Assistance",
        shortDesc: "Food safety registration and basic state licence documentation for restaurants, tea stalls, grocery shops, and food vendors.",
        icon: "UtensilsCrossed",
        processingTime: "3 - 7 Working Days",
      },
      {
        id: "digital-train",
        title: "Train Ticket Booking Assistance",
        shortDesc: "Authorized train ticket reservation, Tatkal enquiry, PNR status tracking, and cancellation assistance via IRCTC channels.",
        icon: "Train",
        processingTime: "Instant Booking",
      },
      {
        id: "digital-bajaj",
        title: "Bajaj EMI Card Assistance",
        shortDesc: "Assistance with Bajaj Finserv Insta EMI card applications, document submission, and limit verification for no-cost EMIs.",
        icon: "Layers",
        processingTime: "Instant Eligibility Check",
      },
      {
        id: "digital-pf",
        title: "PF Withdrawal Assistance",
        shortDesc: "EPFO claim submission assistance, advance PF withdrawal for medical/housing, KYC update, and UAN activation.",
        icon: "Landmark",
        processingTime: "Documentation Support",
      },
    ],

    printingServices: [
      {
        id: "print-bw-xerox",
        title: "Black & White Xerox",
        desc: "High-speed, crisp monochrome photocopying for legal documents, study materials, project reports, and office records.",
        spec: "Crisp 600 DPI, premium 75+ GSM paper, single & double-sided",
        icon: "Copy",
      },
      {
        id: "print-color-xerox",
        title: "Colour Xerox",
        desc: "Rich, vivid colour reproduction for certificates, government IDs, brochures, presentations, and technical diagrams.",
        spec: "High-resolution digital colour laser, true tone matching",
        icon: "Palette",
      },
      {
        id: "print-bw-print",
        title: "Black & White Printing",
        desc: "Direct USB, email, and WhatsApp document printing from PDF, Word, and Excel files with razor-sharp laser clarity.",
        spec: "Fast printing queue, high-volume capacity",
        icon: "Printer",
      },
      {
        id: "print-color-print",
        title: "Colour Printing",
        desc: "Laser colour prints for project reports, business proposals, photo flyers, letterheads, and promotional collateral.",
        spec: "Vibrant laser technology, premium matte & gloss paper choices",
        icon: "Sparkles",
      },
      {
        id: "print-passport-photo",
        title: "Passport Size Photography",
        desc: "Instant professional passport-size photos complying with passport, visa, exam, driving licence, and PAN card dimensions.",
        spec: "Set of 8 / 16 / 32 photos in 5 minutes with white / blue background",
        icon: "Camera",
      },
      {
        id: "print-doc-finishing",
        title: "Document Lamination & Spiral Binding",
        desc: "Durable thermal pouch lamination for mark sheets and certificates, plus neat spiral and soft binding for documents.",
        spec: "Heavy-duty waterproof lamination & transparent PVC spiral covers",
        icon: "BookOpen",
      },
    ],
  },

  faqs: [
    {
      question: "What banking services are provided at the Bank of India CSP in Pipodara?",
      answer:
        "At our authorized Bank of India CSP (Kiosk ID: 11621960, Palod Branch Code: 002757), customers can open new savings accounts using biometric e-KYC, withdraw cash up to daily permissible limits via AePS and ATM cards, transfer money across India, check account balance, enrol in government schemes like PMJJBY, PMSBY, and Atal Pension Yojana, and receive loan documentation guidance.",
    },
    {
      question: "Are you an independent branch of Bank of India?",
      answer:
        "No. DH Insurance & Digital Service is an authorized Customer Service Point (CSP) functioning under the jurisdiction of Bank of India, Palod Branch. All banking transactions are routed directly through Bank of India's authorized kiosk banking network.",
    },
    {
      question: "Which insurance companies do you provide policies for?",
      answer:
        "We facilitate policies across major leading life, general, and health insurance providers in India, including Life Insurance Corporation of India (LIC) through our dedicated agent contact (+91 9601917955), along with top private insurers for motor and health policies.",
    },
    {
      question: "How fast can I get vehicle (bike/car) insurance issued?",
      answer:
        "Two-wheeler and four-wheeler insurance policies can be generated instantly (within 5–10 minutes) upon sharing previous policy details and RC book copy via WhatsApp or in person at our centre.",
    },
    {
      question: "Do you guarantee loan approvals or decide interest rates?",
      answer:
        "No. DH Insurance & Digital Service acts as a documentation assistance and facilitation partner. Interest rates, eligibility criteria, credit appraisal, and final loan sanctions are determined solely by the respective lending bank or NBFC.",
    },
    {
      question: "What documents are required for a new PAN card?",
      answer:
        "For an Indian citizen, you typically require an Aadhaar Card with linked mobile number for instant paperless e-PAN, or two passport-size photographs, proof of identity, proof of address, and proof of date of birth for physical card processing.",
    },
    {
      question: "Can I send files via WhatsApp for printing?",
      answer:
        "Yes! You can conveniently send your PDFs, documents, or photos to our WhatsApp number (+91 8401377466) with printing instructions. Your prints will be ready for collection without waiting.",
    },
  ],

  testimonials: [
    {
      name: "Rameshbhai Patel",
      location: "Pipodara, Surat",
      rating: 5,
      comment:
        "Very trustworthy service centre! I opened a Bank of India savings account with biometric KYC in 15 minutes. The staff is polite, helpful, and transparent.",
      service: "Bank of India CSP",
    },
    {
      name: "Dharmesh Shah",
      location: "Pipodara",
      rating: 5,
      comment:
        "Got my car insurance renewed immediately via WhatsApp at the best premium. Received the official policy copy on my phone without having to run around.",
      service: "Car Insurance",
    },
    {
      name: "Pooja Varma",
      location: "Surat",
      rating: 5,
      comment:
        "Prompt assistance with PAN card update and Udyam MSME registration for my shop. Everything was processed accurately with regular updates.",
      service: "Digital Services",
    },
  ],
};

/**
 * Utility to generate a prefilled WhatsApp link for any service
 */
export const getWhatsAppLink = (serviceName = "") => {
  const base = `https://wa.me/91${businessConfig.contacts.whatsAppNumber}`;
  if (!serviceName) {
    const text = encodeURIComponent(
      `Hello DH Insurance & Digital Service, I would like to enquire about your services.`
    );
    return `${base}?text=${text}`;
  }
  const text = encodeURIComponent(
    `Hello DH Insurance & Digital Service, I want information about ${serviceName}.`
  );
  return `${base}?text=${text}`;
};

/**
 * Utility to generate a telephone link
 */
export const getPhoneLink = (phone = businessConfig.contacts.primaryPhoneRaw) => {
  return `tel:${phone}`;
};
