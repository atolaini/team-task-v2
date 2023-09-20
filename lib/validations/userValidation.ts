import * as z from 'zod';

export const userValidation = z.object({
  firstName: z.string().min(3).max(255),
  lastName: z.string().min(3).max(255),
});
