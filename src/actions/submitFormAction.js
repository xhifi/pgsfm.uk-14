"use server";

import transport from "@/utils/nodemailer";

const types = ["general", "job-application", "officer-complaint", "site-complaint"];

const submitFormAction = async (type, formData) => {
  const { name, phone, email, address, message, siteName, officerSiaNumber, officerName } = formData;
  let mailResponse = null;
  const typeTitle = type
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (!types.includes(type)) {
    return { error: `Invalid form type: ${type}` };
  }

  try {
    if (type === "officer-complaint") {
      console.log("officer complaint form submitting");
      mailResponse = await transport.sendMail({
        from: email,
        to: "PGSFM SITE <info@pgsfm.uk>",
        subject: `${typeTitle} - SITE SUBMISSION`,
        html: `
            <h3>Officer Complaint</h3>
            <p>Name: ${name}<br />
            Phone: ${phone}<br />
            Site Address: ${address}<br />
            Site Name: ${siteName}</p>
            <hr />
            <p>Against Officer: ${officerName}<br />
            Officer SIA Number: ${officerSiaNumber}<br />
            Message: ${message}</p>
          `,
      });
    }
    if (type === "site-complaint") {
      console.log("site complaint form submitting");
      mailResponse = await transport.sendMail({
        from: email,
        to: "PGSFM SITE <info@pgsfm.uk>",
        subject: `${typeTitle} - SITE SUBMISSION`,
        html: `
            <h3>Site Complaint</h3>
            <p>Name: ${name}<br />
            Phone: ${phone}<br />
            Email: ${email}<br />
            Site Address: ${address}<br />
            Site Name: ${siteName}</p>
            <hr />
            Message: ${message}</p>
          `,
      });
    }

    if (type === "general") {
      console.log("general form submitting");
      mailResponse = await transport.sendMail({
        from: email,
        to: "PGSFM SITE <info@pgsfm.uk>",
        subject: `${typeTitle} - SITE SUBMISSION`,
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
    }

    if (mailResponse.response.includes("OK")) {
      return { message: "Message sent successfully" };
    }
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};

export default submitFormAction;
