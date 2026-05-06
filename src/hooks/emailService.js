import emailjs from '@emailjs/browser';

// On récupère les variables du .env (syntaxe spécifique à Vite)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Fonction pour envoyer un email depuis n'importe quel formulaire
 * @param {Object} formRef - La référence du formulaire (useRef)
 * @param {String} templateId - L'ID du template EmailJS spécifique à utiliser
 */
export const sendEmail = async (formRef, templateId) => {
  try {
    const result = await emailjs.sendForm(
      SERVICE_ID,
      templateId,
      formRef.current,
      PUBLIC_KEY
    );
    return { success: true, data: result.text };
  } catch (error) {
    console.error('Erreur EmailJS :', error);
    return { success: false, error: error.text };
  }
};