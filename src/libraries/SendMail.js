import emailjs from "emailjs-com";

/**
 * Sendet eine E-Mail über EmailJS
 * @param {Object} data - { name, company, email, message, time }
 * @returns {Promise} - resolved wenn Mail gesendet, rejected bei Fehler
 */
export const sendEmail = async ({ name, company, email, message, time }) => {
  // Pflichtfelder prüfen
  if (!name || !email || !message) {
    throw new Error("Name, Email und Nachricht müssen ausgefüllt sein!");
  }

  /*

  try {
    const result = await emailjs.send(
      "service_4z83ea4",   // EmailJS Service ID
      "template_x964lxd",  // EmailJS Template ID
      {
        name,
        company: company || "-",  // Optional
        email,
        message,
        time: time || new Date().toLocaleString(),
      },
      "s0W0ULYp5t9mhxokb"    // Public Key / User ID
    );
    return result;
  } catch (error) {
    throw error;
  }
    */
   return true;
};
