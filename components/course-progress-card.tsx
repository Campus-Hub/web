import * as React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Progress} from "@/components/ui/progress";

export const CourseMetaInfo = {
    CourseCode: "CS101",
    CourseName: "Sample Course",
    OrganizationName: "CampusHub Online",
}

// @ts-ignore
export function CourseProgressCard({item}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Course Progress</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-4xl font-bold">{item.learning_propg}%</p>
                        {/*<p className="text-gray-500">Completed</p>*/}
                        <span className="text-gray-500 dark:text-gray-400">Completed</span><br/>
                        <span>{item.completed_chapter}/{item.total_chapter} lessons</span>
                    </div>
                    <div>
                        <Button variant="outline" className="mb-4">View Progress</Button>
                        <Progress className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700" max={100} value={ item.learning_propg } />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
    // const progress = 50.0
    //
    // return (
    //     <Card className="w-full max-w-lg border rounded-lg p-4">
    //         <div className="items-center">
    //             <h3 className="text-xl font-bold">Course Progress</h3>
    //             <p className="mt-2">
    //                 You are currently at { progress }% in course { CourseMetaInfo.CourseName }. By checking the completion percentage, you can clearly understand your learning status and adjust your learning plan accordingly.</p>
    //             <div className="mt-4">
    //                 <Progress value={ progress } className="w-[90%]" />
    //             </div>
    //         </div>
    //     </Card>
    // )
}


/**
 * v0 by Vercel.
 * @see https://v0.dev/t/04l9KBWElnh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
