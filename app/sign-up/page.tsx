import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <SignUp 
        appearance={{
          elements: {
            formButtonPrimary: "bg-primary text-white",
            footerActionLink: "text-primary"
          }
        }}
        afterSignUpUrl="/"
        redirectUrl="/"
      />
    </main>
  );
}