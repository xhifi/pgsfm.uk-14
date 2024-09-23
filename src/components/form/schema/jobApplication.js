import { z } from "zod";

const jobApplicationSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  phone: z.string().min(10, { message: "Phone number too short" }),
  email: z.string().email({ message: "Invalid email address" }),
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Invalid date format" }), // YYYY-MM-DD
  jobrole: z.string().min(3, { message: "Job role is too short" }),
  ninum: z.string().min(9, { message: "NI number is too short" }),
  sianum: z.string().min(9, { message: "SIA number is too short" }),
  housenum: z.string().min(1, { message: "House number is too short" }),
  streetname: z.string().min(1, { message: "House number is too short" }),
  town: z.string().min(1, { message: "House number is too short" }),
  postCode: z.string().regex(/^[A-Z]{1,2}\d{1,2}[A-Z]?\s*\d[A-Z]{2}$/, { message: "Invalid postcode" }),
  fiveyearproof: z.string().min(10),
  resided: z.string().refine((value) => value === "Yes" || value === "No", { message: "Invalid value" }),
  qualification0: z.string().min(3, { message: "Qualification is too short" }),
  school0: z.string().min(3, { message: "School is too short" }),
  leavingdate0: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Invalid date format" }), // YYYY-MM-DD
  employerName0: z.string().min(3, { message: "Employer name is too short" }),
  employerAddress0: z.string().min(3, { message: "Employer address is too short" }),
  employerPhone0: z.string().min(10, { message: "Employer phone number too short" }),
  employerEmail0: z.string().email({ message: "Invalid email address" }),
  employmentStartDate0: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Invalid date format" }), // YYYY-MM-DD
  employmentEndDate0: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Invalid date format" }), // YYYY-MM-DD
  relativeInfo: z.string().min(10, { message: "Relative info is too short" }),
  selfEmploymentInfo: z.string().min(10, { message: "Self employment info is too short" }),
  utrnum: z.string(),
  authorization: z
    .string()
    .refine((value) => value === "I authorize" || value === "I do not authorize", { message: "Invalid authorization" }),
  physicallyFit: z.string().refine((value) => value === "I confirm" || value === "I don't confirm", { message: "Invalid value" }),
  medicalDetails: z.string(),
  captcha: z.string(),
});

export default jobApplicationSchema;
