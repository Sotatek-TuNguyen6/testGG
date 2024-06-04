// pages/auth/signin.tsx
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function SignIn() {
  const { data: session, status } = useSession();
  console.log("🚀 ~ useEffect ~ session:", session)
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/protected');
    }
  }, [session]);

  return (
    <div>
      <h1>Sign In</h1>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <button onClick={() => signIn('google')}>Sign in with Google</button>
      )}
    </div>
  );
}
