'use client';
import { useState } from 'react';

import Link from 'next/link';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Input } from './ui/Inputs';

const CreateUser = ({ userId }: { userId: string }) => {
  const [isFed, setIsFed] = useState(false);
  const id = userId;
  console.log(id);

  return (
    <>
      {isFed ? (
        <Card className='w-full max-w-4xl'>
          <form>
            <h3 className='text-center'>What is your name</h3>
            <div className='flex gap-5 w-full'>
              <Input
                type='text'
                label='First Name'
                className='grow'
              />
              <Input
                type='text'
                label='Last Name'
                className='grow'
              />
            </div>
            <Button label='Submit' />
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
