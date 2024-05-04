import {z} from 'zod';

export const usernameValidation = z
    .string()
    .min(2,"Username must be atleast 2 Characters")
    .max(20,"Username must be no more than 20 Characters")
    .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message:'Please enter a valid email adress'}),
    password: z.string().min(6,{message: 'Password must be at least 6 characters'})
})