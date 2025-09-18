
import { authGuard } from "@/lib/auth";

export default async function CompanionsPage() {
  await authGuard();
  
  return (
    <div>
      CompanionsLibrary
    </div>
  );
}