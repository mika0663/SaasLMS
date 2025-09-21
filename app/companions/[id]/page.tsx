import { getComapnion } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";

interface CompanionsSessionPageProps {
  params: Promise<{ id: string }>;

}

//Params /url/{id} -> id
//searchParams /url?key=value&value&key1=value1

const CompanionSession = async ({ params }: CompanionsSessionPageProps) => {

  const { id } = await params;
  const {name, subject, title, topic, duration} = await getComapnion(id);
  const user = await currentUser();

  if (!user) redirect('/sign-in');
  if (!name) redirect('/componions')




  return (
    <main>
    <article className="flex rounded-border justify-between p-6 max-md:flex-col">
      <div className="flex items-center gap-2">
        <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
          style={{ backgroundColor: getSubjectColor(subject) }}>
              <Image src={`/icons/${subject}.svg`} alt={subject} width={35} height={35}></Image>
        </div>
        <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <p className="font-bold text-2xl">
            {subject}
          </p>
          <div className="subject-badge max-sm:hidden">{subject}
          </div>
        </div>
        <p className="text-lg">{topic}</p>
        </div>
      </div>
      <div className="items-start text2xl max-md:hidden"> {duration} minutes</div>
    </article>
    </main>
  )
}

export default CompanionSession
