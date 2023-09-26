'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { userValidation } from '@/lib/validations/userValidation';
import { createUser } from '@/lib/actions/user.actions';

import Link from 'next/link';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Input } from './ui/Inputs';

const CreateUser = ({ userId }: { userId: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(userValidation),
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });
  const [isFed, setIsFed] = useState(false);
  const id = userId;
  const router = useRouter();

  const onSubmitHandler = async (data: z.infer<typeof userValidation>) => {
    const newUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      name: `${data.firstName} ${data.lastName}`,
      isFed: isFed,
      clerkId: id,
    };
    createUser(newUser);
    router.prefetch('/overview');
    router.push('/overview');
  };

  return (
    <>
      {isFed ? (
        <Card className='w-full max-w-4xl'>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <h3 className='text-center'>What is your name</h3>
            <div className='flex gap-5 w-full'>
              <Input
                type='text'
                label='First Name'
                className='grow'
                {...register('firstName')}
              >
                {errors.firstName && <p>{errors.firstName.message}</p>}
              </Input>
              <Input
                type='text'
                label='Last Name'
                className='grow'
                {...register('lastName')}
              >
                {errors.lastName && <p>{errors.lastName.message}</p>}
              </Input>
            </div>
            <Button
              label='Submit'
              type='submit'
              disabled={!isValid}
            />
          </form>
        </Card>
      ) : (
        <Card>
          <h3 className='mb-8'>Are you a member of the Frontend team?</h3>
          <div className='flex justify-center gap-8'>
            <Button
              label='Yes'
              onClick={() => setIsFed(true)}
            />
            <Link href='/overview'>
              <Button label='No' />
            </Link>
          </div>
        </Card>
      )}
    </>
  );
};

export default CreateUser;
