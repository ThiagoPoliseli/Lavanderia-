/**
 * Creates a WhatsApp message link with pre-filled text
 * 
 * @param phoneNumber - The WhatsApp phone number with country code (e.g., 5544997642766)
 * @param message - The message to pre-fill
 * @returns A WhatsApp URL link
 */
export const createWhatsAppLink = (phoneNumber: string, message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

/**
 * Creates a service-specific WhatsApp message
 * 
 * @param serviceName - The name of the service
 * @returns A formatted message string
 */
export const createServiceWhatsAppMessage = (serviceName: string): string => {
  return `Olá! Gostaria de saber mais sobre o serviço de ${serviceName} da Lavanderia Gurucaia.`;
};

/**
 * Opens WhatsApp with a pre-filled message
 * 
 * @param phoneNumber - The WhatsApp phone number with country code
 * @param message - The message to pre-fill
 */
export const openWhatsAppChat = (phoneNumber: string, message: string): void => {
  const whatsappUrl = createWhatsAppLink(phoneNumber, message);
  window.open(whatsappUrl, '_blank');
};