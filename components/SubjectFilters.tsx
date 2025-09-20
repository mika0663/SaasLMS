'use client'
import { subjects } from "@/constants";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";



const SubjectFilters = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get("subject") || "";

    const [subject, setSubject] = useState(query);

useEffect(() => {
    let newUrl = "";
   
      if (subject === "all") {
         newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["subject"],
          });
        router.push(newUrl, { scroll: false });
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "subject",
          value: subject,
        });
          
          router.push(newUrl, { scroll: false });
        }
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subject]);



    return (
        <div className="w-[180px]">
            <Select onValueChange={setSubject} value={subject}>
                <SelectTrigger className="input capitalize">
                    <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value={"all"}>All Subjects</SelectItem>
                        {subjects.map((subject) => (
                            <SelectItem
                                key={subject}
                                value={subject}
                            className="capitalize">
                                {subject}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SubjectFilters;