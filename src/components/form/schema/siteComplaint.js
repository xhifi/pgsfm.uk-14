import { z } from "zod";

const siteComplaintSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  phone: z.string().min(10, { message: "Phone number too short" }),
  email: z.string().email({ message: "Invalid email address" }),
  siteName: z.string().min(4, { message: "Site name is too short" }),
  address: z.string().min(10, { message: "Address too short" }),
  message: z.string().min(10, { message: "Message too short" }),
  captcha: z.string(),
});

export default siteComplaintSchema;
