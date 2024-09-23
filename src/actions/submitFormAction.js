"use server";

import transport from "@/utils/nodemailer";

const types = ["general", "job-application", "officer-complaint", "site-complaint"];

const submitFormAction = async (type, formData) => {
  const { name, phone, email, address, message, siteName, officerSiaNumber, officerName, designation } = formData;
  let mailResponse = null;
  const typeTitle = type
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (!types.includes(type)) {
    return { error: `Invalid form type: ${type}` };
  }

  try {
    if (type === "job-application") {
      const { authorization, characterReference, employerInfo, healthStatement, personalInfo, qualification } = formData;
      console.log("job application form submitting");
      mailResponse = await transport.sendMail({
        from: "PGSFM SITE <info@pgsfm.uk>",
        to: ["info@pgsfm.uk", personalInfo.email],
        subject: `${typeTitle} - PGSFM SUBMISSION`,
        html: `
            <h3>Job Application</h3>
            <h3>Applied for the position: ${personalInfo.roleAppliedFor}<h3>
            
            <hr />
            <h2>Personal Information:</h2>
            <p>
            <b>Name:</b> ${personalInfo.name}<br />
            <b>Phone:</b> ${personalInfo.phone}<br />
            <b>Email:</b> ${personalInfo.email}<br />
            <b>Date of Birth:</b> ${personalInfo.dob}<br />
            <b>NI #</b> ${personalInfo.niNumber}<br />
            <b>SIA #</b> ${personalInfo.siaNumber}<br />
            <b>Address:</b> House: ${personalInfo.address.houseNumber} | Street: ${personalInfo.address.streetName} | Town: ${
          personalInfo.address.town
        } | Post Code: ${personalInfo.address.postCode} <br />
            <b>Have you resided at the above address in last 5 years?</b> <span style="color: green; font-weight: bold;">${
              personalInfo.address.fiveYearConsent
            }</span><br />
            <b>Addresses covering residence over last 5 years:</b> ${personalInfo.address.fiveYearBackground}<br />
            </p>
            <hr />
            
            
            ${qualification.map(
              (qual, index) => `
              <h3>Qualification ${index + 1}</h3>
              <p>
                <b>Qualification:</b> ${qual.qualification || ""}<br />
                <b>School:</b> ${qual.school || ""}<br />
                <b>Leaving Date:</b> ${qual.leavingDate || ""}<br />
              </p>
              <hr />
            `
            )}
            

            
            ${employerInfo.map(
              (employer, index) => `
              <h3>Employer ${index + 1}</h3>
              <p>
                <b>Employer Name:</b> ${employer.employerName}<br />
                <b>Employer Address:</b> ${employer.employerAddress}<br />
                <b>Employer Phone:</b> ${employer.employerPhone}<br />
                <b>Employer Email:</b> ${employer.employerEmail}<br />
                <b>Employment Start Date:</b> ${employer.employmentStartDate}<br />
                <b>Employment End Date:</b> ${employer.employmentEndDate}<br />
              </p>
              <hr />
            `
            )}
            
            <h3>Character Reference:</h3>
            <p>
              <b>Details of someone you have known for at least 5 years:</b> ${characterReference.relativeInfo}<br />
              <b>Self Employment Reference Name & Contact Details:</b> ${characterReference.selfEmploymentInfo}<br />
              <b>UTR Number:</b> ${characterReference.utrNumber}<br />
            </p>
            <hr />

            <h3>Consent of Background Check</h3>
            <p>
              <b>I authorize PGSFM to approach former employers, educational establishments, Government Departments and personal referees for verification of my career and employment/unemployment record. I understand that any documents I provide will be checked for authenticity using ultraviolet light. I hereby authorize PGSFM to make necessary enquiries about me including DBS and CCJ Checks:</b> <span style="color: green; font-weight: bold;">${authorization}</span>
            </p>
            <hr />

            <h3>Health Statement</h3>
            <p>
              <b>I am physically fit with no medical conditions which would prevent me from performing the role of a security operative fit:</b> <span style="color: ${
                healthStatement.physicallyFit === "I don't confirm" ? "red" : "green"
              }; font-weight: bold;">${healthStatement.physicallyFit}</span><br />
              <b>If you chose "I do not confirm", please state all medical issues which can impact your ability to perform the roles of a security operative:</b> ${
                healthStatement.medicalDetails
              }
            </p>
            <br />
            <br />
            <p><b>Submitted On: <span>${new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "long", year: "numeric" }).format(
              Date.now()
            )}</span></p>
          `,
      });
    }

    if (type === "officer-complaint") {
      console.log("officer complaint form submitting");
      mailResponse = await transport.sendMail({
        from: "PGSFM SITE <info@pgsfm.uk>",
        to: "info@pgsfm.uk",
        subject: `${typeTitle} - SITE SUBMISSION`,
        html: `
            <h3>Officer Complaint</h3>
            <p>Name: ${name}<br />
            Phone: ${phone}<br />
            Site Address: ${address}<br />
            Site Name: ${siteName}<br />
            Designation: ${designation}</p>
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
        from: "PGSFM SITE <info@pgsfm.uk>",
        to: "info@pgsfm.uk",
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
        from: "PGSFM SITE <info@pgsfm.uk>",
        to: "info@pgsfm.uk",
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
