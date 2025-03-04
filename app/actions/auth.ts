import { SignupFormSchema, FormState } from "@/app/lib/definitions";

interface SignupResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  data?: {
    userId: string;
    email: string;
  };
}

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  try {
    const validatedFields = SignupFormSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
      phone: formData.get("phone"),
    });

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { email, password, phone } = validatedFields.data;

    return {
      sucess: true,
      message: "User created successfully",
      data: {
        userid: "generated user id",
        email: email,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: "User creation failed",
      errors: {
        email: ["Email is already taken"],
      },
    };
  }
  // Call the provider or db to create a user...
}
