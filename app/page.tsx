import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { auth } from '@clerk/nextjs';
import Link from 'next/link';

const Home = async () => {
  const { userId } = await auth();

  const href = userId ? '/overview' : '/sign-up';
  const label = userId ? 'Log in' : 'Sign up';

  return (
    <div>
      <div className='flex justify-center items-center pt-8'>
        <Card>
          <h1>Frontend Week Schedular</h1>
          <p className='text-2xl mb-8'>Plan out and view the weeks work</p>
          <Link href={href}>
            <Button
              data-testid='login-button'
              label={label}
            />
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Home;
