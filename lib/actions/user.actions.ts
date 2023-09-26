'use server';

import { prisma } from '../db';
import { UserProps } from '../interfaces';

export const createUser = async ({
  firstName,
  lastName,
  isFed,
  clerkId,
  name,
}: UserProps) => {
  try {
    await prisma.user.create({
      data: {
        firstName,
        lastName,
        isFed,
        clerkId,
        name,
      },
    });
  } catch (error) {
    throw new Error(`Error creating user: ${error}`);
  }
};
