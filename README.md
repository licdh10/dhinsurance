# DH Insurance & Digital Service – Web Application

A professional, high-performance, responsive multi-page business website built for **DH Insurance & Digital Service**, optimized for fast loading and seamless deployment on **Cloudflare Pages**.

---

## 🏢 Business Overview

- **Business Name:** DH Insurance & Digital Service
- **Business Type:** Insurance Advisory, Bank of India Customer Service Point (CSP), Loan Assistance, and Citizen Digital Service Centre
- **Primary Contacts:**
  - Phone 1: `+91 8401377466`
  - Phone 2: `+91 8401877466`
  - Dedicated LIC Agent Line: `+91 9601917955`
  - WhatsApp: `+91 8401377466`
- **Banking CSP Information:**
  - Bank: **Bank of India**
  - Kiosk ID: `11621960`
  - Branch: `Palod`
  - Branch Code: `002757`
- **Location:** Pipodara, Surat District, Gujarat, India

---

## 🛠️ Technology Stack

- **Framework:** React.js 18
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Client Routing:** React Router v6
- **Animations:** Framer Motion
- **Hosting Target:** Cloudflare Pages (`YOUR-SITE.pages.dev`)

---

## 🎨 Branding & Palette

- **Dark Navy Blue:** `#102B59` (`brand.navy`)
- **Royal Blue:** `#1769AA` (`brand.royal`)
- **Bright Yellow:** `#FFD51B` (`brand.yellow`)
- **Light Grey Background:** `#F5F7FB` (`brand.lightGrey`)
- **White:** `#FFFFFF`

---

## 📂 Project Structure

```
dh_site/
├── public/
│   ├── _redirects          # Cloudflare Pages SPA rewrite rule (/* /index.html 200)
│   ├── favicon.svg         # High-resolution vector monogram logo
│   ├── dh-logo.svg         # Full corporate logo lockup
│   ├── robots.txt          # SEO crawler rules
│   └── sitemap.xml         # XML sitemap for Google Search Console
├── src/
│   ├── config/
│   │   └── businessConfig.js # Centralized configuration for business info, numbers, services
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopBar.jsx       # Header bar with phone, hours & LIC agent
│   │   │   ├── Navbar.jsx       # Sticky responsive navbar with mobile drawer
│   │   │   └── Footer.jsx       # Corporate footer with disclaimers & BOI badge
│   │   └── common/
│   │       ├── SEO.jsx              # Dynamic metadata & canonical updater
│   │       ├── BOIBadge.jsx         # Official Bank of India CSP compliance badge
│   │       ├── FloatingWhatsApp.jsx # 24/7 floating WhatsApp button with tooltip
│   │       ├── ServiceCard.jsx      # Reusable service card with prefilled WhatsApp & call CTAs
│   │       ├── SectionHeading.jsx   # Consistent page section headings
│   │       ├── ContactForm.jsx      # Form with Indian 10-digit validation & WhatsApp fallback
│   │       └── FAQAccordion.jsx     # Interactive questions & answers
│   ├── pages/
│   │   ├── Home.jsx            # Page 1: Hero, features, why choose us, BOI highlight
│   │   ├── About.jsx           # Page 2: Mission, vision, service commitment, storefront info
│   │   ├── Insurance.jsx       # Page 3: Life (LIC), Health, Accident, Vehicle policies
│   │   ├── Banking.jsx         # Page 4: Bank of India CSP services (Kiosk ID: 11621960)
│   │   ├── Loans.jsx           # Page 5: Home, Gold, Car, and Personal loan file assistance
│   │   ├── DigitalServices.jsx # Page 6: PAN, Aadhaar, ITR, Udyam MSME, E-Shram, PF
│   │   ├── Printing.jsx        # Page 7: Xerox, Colour printing, 5-min passport photos
│   │   ├── Contact.jsx         # Page 8: Complete phone list, WhatsApp, map embed, form
│   │   ├── PrivacyPolicy.jsx   # Security standards & confidential information policy
│   │   ├── TermsConditions.jsx # Legal terms & regulatory disclaimers
│   │   └── NotFound.jsx        # Custom 404 page
│   ├── App.jsx                 # Routes & layout structure
│   ├── main.jsx                # Application root entry
│   └── index.css               # Tailwind directives & smooth animations
├── dist/                       # Production build output
├── index.html                  # HTML entry point with JSON-LD LocalBusiness Schema
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## ⚙️ Central Content Management

All phone numbers, Bank of India CSP IDs, addresses, operating hours, and service details are stored centrally in:
```
src/config/businessConfig.js
```
To update business details, change them once in this configuration file. All components, navigation menus, disclaimers, WhatsApp links, and call links update across the entire site automatically.

---

## 🚀 Cloudflare Pages Deployment Guide

### Option 1: Direct Deployment via Wrangler CLI (Fastest from this Terminal)

Wrangler is now installed locally in the project (`devDependencies`).

1. **Log into Cloudflare (one-time interactive login in your browser):**
   ```bash
   npx wrangler login
   ```
   *(or run `npm run login`)*

2. **Deploy directly to Cloudflare Pages:**
   ```bash
   npm run deploy
   ```
   *This automatically executes `npm run build` and then runs `wrangler pages deploy dist`.*

3. On the first run, Wrangler will ask:
   - `Create a new project?` -> Choose **Yes**
   - `Enter project name:` -> `dh-insurance`
   - `Enter production branch:` -> `main`

4. Wrangler will immediately output your live URL:
   ```
   ✨ Deployment complete!
   Take a peek at: https://dh-insurance.pages.dev
   ```

---

### Option 2: Connecting Git to Cloudflare Pages (Manual Dashboard Setup)

When you push this repository to GitHub/GitLab and link it in the Cloudflare Dashboard:

1. In [Cloudflare Dashboard](https://dash.cloudflare.com/), navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select your repository.
3. Configure the exact build parameters:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Build Output Directory:** `dist`
   - **Root Directory:** `/` (leave as default)
4. Under **Environment variables (advanced)**, add:
   - Variable name: `NODE_VERSION`
   - Value: `20`
5. Click **Save and Deploy**. Cloudflare Pages will automatically build every future push to your repository and deploy to `https://<your-project>.pages.dev`.

---

## 🔍 SEO & Local Search Optimization

The website includes dedicated on-page SEO targeting key Pipodara/Surat search queries:
- *Insurance Agency in Pipodara*
- *Bike Insurance in Pipodara*
- *Car Insurance in Pipodara*
- *Life Insurance Assistance in Pipodara*
- *Health Insurance in Pipodara*
- *Bank of India CSP in Pipodara*
- *Bank Account Opening Assistance in Pipodara*
- *Xerox Shop in Pipodara*
- *Digital Services in Pipodara*
- *PAN Card Assistance in Pipodara*
- *ITR Filing Assistance in Pipodara*

### Local Business Schema Markup
An official `FinancialService` structured data markup (`application/ld+json`) is embedded in `index.html` detailing:
- Business name
- Telephone numbers
- Geolocation coordinates
- Palod Bank of India CSP Department details

---

## 🔒 Security & Regulatory Compliance

- **No Sensitive Credential Collection:** The website never collects or stores Aadhaar numbers, PAN cards, OTPs, ATM PINs, or bank passwords.
- **Authorized CSP Identification:** The business is clearly identified as a Customer Service Point (CSP Kiosk ID: 11621960) under Bank of India Palod Branch (Code: 002757) and explicitly disclaims being an independent bank branch.
- **Insurance Underwriting Notice:** Clearly notes that all policy approvals, premiums, and claims are subject to IRDAI guidelines and insurer underwriting terms.
- **Loan Disclaimers:** Clarifies that the business facilitates paperwork and liaisons with authorized lending banks/NBFCs without guaranteeing approvals or fabricating arbitrary interest rates.

---

## 💻 Local Development

To run the development server locally:
```bash
npm install
npm run dev
```
Open your browser at `http://localhost:3000`.
# dhinsurance
