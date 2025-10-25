// Email service placeholder
export const sendEmail = async (options: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}) => {
  // TODO: Implement email sending with nodemailer or similar
  console.log('Email would be sent:', options);
  return true;
};
