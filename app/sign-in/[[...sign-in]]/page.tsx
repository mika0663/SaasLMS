import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen py-12 bg-gray-50">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: 'bg-primary hover:bg-primary/80',
            card: 'shadow-lg rounded-lg',
            headerTitle: 'text-2xl font-semibold text-gray-900',
            headerSubtitle: 'text-gray-600',
          }
        }}
        afterSignInUrl="/"
        redirectUrl="/"
      />
    </div>
  );
}