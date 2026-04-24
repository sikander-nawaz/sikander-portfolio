'use server'

import { z } from 'zod'

const contactFormSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    subject: z.string().min(1, 'Subject is required'),
    message: z.string().min(1, 'Message is required'),
})

export async function sendEmail(prevState: any, formData: FormData) {
    const validatedFields = contactFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Error: Please check your input.',
        }
    }

    // Here you would integrate with an email sending service like Resend or Nodemailer.
    // For demonstration purposes, we'll simulate a successful submission.
    console.log('Received data:', validatedFields.data)

    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 2000))

    return {
        message: 'success',
    }
}