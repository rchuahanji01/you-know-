/**
 * WhatsApp Integration Utility for YouKnow Finance
 * Centralized contact number and pre-filled message generator.
 */

export const WHATSAPP_PHONE = '+91 83692 62375';
export const WHATSAPP_RAW_NUMBER = '918369262375';

export const WHATSAPP_TEMPLATES = {
  GENERAL: 'Hi YouKnow Finance, I would like to discuss your solutions.',
  PROMPT: 'Hi YouKnow Finance, I am interested in requesting a custom AI prompt.',
  AUTOMATION: 'Hi YouKnow Finance, I would like to discuss a business automation requirement.',
  TREASURY: 'Hi YouKnow Finance, I would like to know more about YouKnow Treasury solutions.',
  ACCOUNTS: 'Hi YouKnow Finance, I would like to explore YouKnow Accounts automation.',
  PAYMENTS: 'Hi YouKnow Finance, I am interested in the YouKnow Payments workflow architecture.',
  INTELLIGENCE: 'Hi YouKnow Finance, I would like to discuss YouKnow Intelligence for my enterprise.',
  TOOL_ACCESS: (toolName) => `Hi YouKnow Finance, I would like to request early access / explore the "${toolName}" tool.`,
  CUSTOM: (topic) => `Hi YouKnow Finance, I would like to connect regarding: ${topic}`,
};

/**
 * Builds a direct, encoded WhatsApp link that opens in a new tab
 * @param {string} message - Custom message or template string
 * @returns {string} - wa.me URL
 */
export function getWhatsAppUrl(message = WHATSAPP_TEMPLATES.GENERAL) {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodedText}`;
}

/**
 * Triggers opening WhatsApp in a new tab safely
 * @param {string} message 
 */
export function openWhatsApp(message = WHATSAPP_TEMPLATES.GENERAL) {
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}
