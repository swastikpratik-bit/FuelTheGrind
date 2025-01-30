import PaymentPage from '@/components/PaymentPage';
import User from '@/models/User';
import { connetToDatabase } from '@/lib/utils';
import { notFound } from 'next/navigation';

const Username = async ({ params }) => {

  // why ? 
  // line-> https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#example

  const Username = (await params).username;

  // Ensure database connection and user validation
  await connetToDatabase();

  const user = await User.findOne({ username: Username });
  if (!user) {
    notFound();
    return null; // Ensures no further rendering occurs
  }

  return (
    <>
      <PaymentPage username={Username} />
    </>
  );
};

export default Username;
