import { auth } from '@clerk/nextjs';

import CreateUser from '@/components/forms/CreateUser';

const Onboarding = async () => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  return (
    <div className='flex justify-center pt-8'>
      <CreateUser userId={userId} />
    </div>
  );
};

export default Onboarding;
