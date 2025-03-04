import { z } from "zod";

export const SignupFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
  phone: z
    .string()
    .max(11, { message: "Phone number must be 11 characters long." })
    .regex(/^[0-9]+$/, { message: "Phone number must contain only numbers." })
    .regex(/^63/, { message: "Phone number must start at 63." })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
        phone?: string[];
      };
      message?: string;
    }
  | undefined;
