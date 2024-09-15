"use server";

import transport from "@/utils/nodemailer";

const generalQuery = async (formData) => {
  const { name, phone, email, address, message } = formData;

  try {
    const mail = await transport.sendMail({
      from: email,
      to: "PGSFM SITE <info@pgsfm.uk>",
      subject: "General Inquiry - SITE SUBMISSION",
      html: `
            <h3>General Inquiry</h3>
            <p>Name: ${name}<br />
            Phone: ${phone}<br />
            Email: ${email}<br />
            Address: ${address}</p>
            <hr />
            <p>Message: ${message}</p>
          `,
    });

    if (mail.response.includes("OK")) {
      return { message: "Message sent successfully" };
    }
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};

export default generalQuery;
