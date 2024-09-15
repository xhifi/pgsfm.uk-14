import { z } from "zod";

const generalQuerySchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  phone: z.string().min(10, { message: "Phone number too short" }),
  email: z.string().email({ message: "Invalid email address" }),
  address: z.string().min(10, { message: "Address too short" }),
  message: z.string().min(10, { message: "Message too short" }),
});

export default generalQuerySchema;
