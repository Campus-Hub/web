"use client"

import * as React  from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { CourseInfoCard } from "@/components/course-info-card";
import {CourseProgressCard} from "@/components/course-progress-card";
// import { CourseMetaInfo } from "@/components/meta";

const CourseMetaInfo = {
    CourseCode: "CS101",
    CourseName: "Sample Course",
    OrganizationName: "CampusHub Online",
}

export function CourseDetailSheet() {
    // const [progress, setProgress] = React.useState(13)
    const progress = 50.0

    // React.useEffect(() => {
    //     const timer = setTimeout(() => setProgress(66), 500)
    //     return () => clearTimeout(timer)
    // }, [])

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent>
                <div className="grid gap-4 py-4">
                    {/*// @ts-ignore*/}
                    <CourseInfoCard></CourseInfoCard>
                </div>
                <div className="grid gap-4 py-4">
                    {/*// @ts-ignore*/}
                    <CourseProgressCard></CourseProgressCard>
                </div>

                {/*<SheetHeader>*/}
                {/*    <SheetTitle>Course Progress</SheetTitle>*/}
                {/*    <SheetDescription>*/}
                {/*        You are currently at { progress } in course { CourseMetaInfo.CourseName }. By checking the completion percentage, you can clearly understand your learning status and adjust your learning plan accordingly.*/}
                {/*    </SheetDescription>*/}
                {/*</SheetHeader>*/}

                {/*<div className="grid gap-4 py-4">*/}
                {/*    <Progress value={ progress } className="w-[60%]" />*/}
                {/*</div>*/}

                {/*<SheetFooter>*/}
                {/*    <SheetClose asChild>*/}
                {/*        <Button type="button">Close</Button>*/}
                {/*    </SheetClose>*/}
                {/*</SheetFooter>*/}
            </SheetContent>
        </Sheet>
    )
}
