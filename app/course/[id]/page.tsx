"use client"

import { Button } from "@/components/ui/button";
import { CourseInfoCard } from "@/components/course-info-card";
import { useToast } from "@/components/ui/use-toast";
import { CourseDetailCard } from "@/components/course-detail-card";
import { CourseResourceCard } from "@/components/course-resource-card";
import { CourseProgressCard } from "@/components/course-progress-card";
import { CampusHeader } from "@/components/header";
import {list} from '@/lib/mock';
import {redirect} from "next/navigation";
import {CourseDetailSheet} from "@/components/course-detail-sheet";
export default function CourseDetailPage({ params }: { params: { id: number } }) {
  const { toast } = useToast()
	const item = list.map(v=> v.courses).flat(1).find(v=>{
		v.learning_propg = (v.completed_chapter / v.total_chapter * 100).toFixed(2)
		return v.id == params.id;
	});
	if(!item) redirect(`/course`)
	
	
	const downloadPdf = ()=>{
		if(!item.downloadPdfUrl) return alert('no pdf file');
		const a = document.createElement('a');
		a.href = item.downloadPdfUrl;
		a.target = "_blank";
		a.download = `${item.title}.pdf`;
		a.click();
		setTimeout(()=> a.remove(), 3000);
	}
	
	
    return (
        <>
            <CampusHeader/>
            <CourseDetailSheet/>
            <main className="container mx-auto my-8 px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="col-span-2">
                        <h1 className="text-3xl font-bold">{item.title}</h1>
                        <p className="mt-4 text-gray-500">
                            {item.des}
                        </p>
                        <div className="mt-8 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                            {/*<Button variant="default">Start Learning</Button>*/}
                            <Button
                                variant="default"
                                onClick={() => {
                                    toast({
                                        title: "Info",
                                        description: "You have been starting learning this course.",
                                    })
                                }}
                            >
                                Start Learning
                            </Button>
                            <Button onClick={downloadPdf} variant="secondary">Download PDF</Button>
                        </div>
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold">Course Content</h2>
                            <div className="mt-4 space-y-4" dangerouslySetInnerHTML={{ __html: item.content }} >
								
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <CourseInfoCard item={item}/>
                        <CourseDetailCard item={item}/>
                        <CourseProgressCard item={item}/>
                        <CourseResourceCard item={item}/>
                    </div>
                </div>
            </main>
        </>
    )
}


/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cj3W7Vdi2cz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

