import { z } from "zod";

const reportOfficerSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  phone: z.string().min(10, { message: "Phone number too short" }),
  siteName: z.string().min(4, { message: "Site name is too short" }),
  address: z.string().min(10, { message: "Address too short" }),
  message: z.string().min(10, { message: "Message too short" }),
  officerName: z.string().min(2, { message: "Officer name is too short" }),
  officerSiaNumber: z.string(),
  designation: z.string().min(2, { message: "Officer name is too short" }),
  captcha: z.string(),
});

export default reportOfficerSchema;
