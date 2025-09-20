import { getAllCompanions } from "@/lib/actions/companion.actions";
import { authGuard } from "@/lib/auth";
import CompanionCard from "@/components/CompanionCard";
import { getSubjectColor } from "@/lib/utils";
import SearchInput from "@/components/SearchInput";
import SubjectFilters from "@/components/SubjectFilters";


export default async function CompanionsPage({ searchParams }: SearchParams) {

  const filters = await searchParams;
  await authGuard();
  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';

  const companions = await getAllCompanions({ subject, topic });


  return (
    <main>
      <section className="felx justify-between gap-4 max-sm:flex-col">

        <h1>Companion Library</h1>
        <div className=" flex gap-4 justify-end"> 
          <SearchInput />
          <SubjectFilters />
        </div>
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard key={companion.id} {...companion}
          color={getSubjectColor(companion.subject)} />
        ))}
      </section>
    </main>
  );
}