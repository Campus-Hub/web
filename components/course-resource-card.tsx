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
import {DownloadIcon, FileIcon, FileSlidersIcon, VideoIcon} from "@/components/icon";


export function CourseResourceCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Course Resources</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <FileIcon className="h-6 w-6 text-gray-500" />
                            <span>Course Syllabus</span>
                        </div>
                        <Button size="icon" variant="ghost">
                            <DownloadIcon className="h-5 w-5" />
                        </Button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <VideoIcon className="h-6 w-6 text-gray-500" />
                            <span>Lecture Videos</span>
                        </div>
                        <Button size="icon" variant="ghost">
                            <DownloadIcon className="h-5 w-5" />
                        </Button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <FileSlidersIcon className="h-6 w-6 text-gray-500" />
                            <span>Presentation Slides</span>
                        </div>
                        <Button size="icon" variant="ghost">
                            <DownloadIcon className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}


