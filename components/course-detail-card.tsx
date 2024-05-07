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

// @ts-ignore
export function CourseDetailCard({item}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Course Details</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h4 className="text-sm font-bold">Duration</h4>
                        <p className="text-gray-500">{item.duration} weeks</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold">Difficulty</h4>
                        <p className="text-gray-500">{item.difficulty}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold">Format</h4>
                        <p className="text-gray-500">{item.format}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold">Certification</h4>
                        <p className="text-gray-500">{item.certification}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

