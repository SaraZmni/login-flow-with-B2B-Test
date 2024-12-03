'use server';
import { z } from 'zod';


const schema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  })


  export async function login(currentState: any, formData: FormData) {
    console.log('login', formData);

    const data = schema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
      });
    
      // Return early if the form data is invalid
      if (!data.success) {
        return {
          errors: data.error.flatten().fieldErrors,
        };
      }
  }