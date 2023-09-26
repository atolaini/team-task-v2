import * as z from 'zod';

export const userValidation = z.object({
  firstName: z.string().min(3, { message: 'First name is required' }).max(255),
  lastName: z.string().min(3, { message: 'Last name is required' }).max(255),
});
