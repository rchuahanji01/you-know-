import { WHATSAPP_PHONE, WHATSAPP_RAW_NUMBER, getWhatsAppUrl, WHATSAPP_TEMPLATES } from '../utils/whatsapp';

export const BRAND_CONFIG = {
  name: 'YouKnow Finance',
  shortName: 'YouKnow',
  handle: '@youkn_owfinance',
  domain: 'https://youknowfinance.com',
  canonicalUrl: 'https://youknowfinance.com/',
  tagline: 'Finance. Understood. Automated.',
  positioning: 'AI-Powered Financial Automation & Business Technology',
  description:
    'We simplify complex financial and business operations through intelligent automation, custom AI solutions and practical software tools.',
  aboutFull:
    'YouKnow Finance is a technology initiative focused on simplifying financial and business operations through software engineering, automation and artificial intelligence. Our goal is to transform complicated workflows into intelligent, reliable and practical digital solutions.',
  phone: WHATSAPP_PHONE,
  phoneRaw: WHATSAPP_RAW_NUMBER,
  instagramPlaceholder: 'https://instagram.com/youkn_owfinance',
  whatsappDirectUrl: getWhatsAppUrl(WHATSAPP_TEMPLATES.GENERAL),
  
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Custom AI', href: '#custom-ai' },
    { label: 'Products', href: '#products' },
    { label: 'Tools', href: '#tools' },
    { label: 'About', href: '#about' },
  ],

  cta: {
    primary: "Let's Talk",
    exploreSolutions: 'Explore Solutions',
    buildWithUs: 'Build Something With Us',
    requestPrompt: 'Request a Custom Prompt',
    chatWhatsApp: 'Chat With Us on WhatsApp',
  },

  principles: [
    {
      title: 'Operational Precision',
      desc: 'Zero tolerance for manual reconciliation errors. Systems architected for accuracy and auditability.',
    },
    {
      title: 'Deterministic AI Workflows',
      desc: 'AI tailored to business rules with strict validation, eliminating generic hallucinations.',
    },
    {
      title: 'Modular Agility',
      desc: 'Lightweight software tools and micro-automations that integrate seamlessly without bloated legacy overhead.',
    },
    {
      title: 'Enterprise Simplicity',
      desc: 'Transforming multi-step friction into single-click or fully autonomous background execution.',
    },
  ],
};
