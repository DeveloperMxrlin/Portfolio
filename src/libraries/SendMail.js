import emailjs from "emailjs-com";

export const sendEmail = async ({ name, company, email, message, time }) => {
  if (!name || !email || !message) {
    throw new Error("Name, Email and Message have to be filled out!");
  }

  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,   
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,  
      {
        name,
        company: company || "-", 
        email,
        message,
        time: time || new Date().toLocaleString(),
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
    return result;
  } catch (error) {
    throw error;
  }
};
