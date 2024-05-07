import * as React from "react"

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
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

export const CourseMetaInfo = {
    CourseCode: "CS101",
    CourseName: "Sample Course",
    OrganizationName: "CampusHub Online",
}
// @ts-ignore
export function CourseInfoCard({item}) {
    return (
        <Card className="w-full max-w-lg border rounded-lg p-4">
            <div className="flex flex-col space-y-4">
                <div>
                    <div className="flex space-x-2 items-center">
                        <h2 className="text-2xl font-bold">{CourseMetaInfo.CourseCode}</h2>
                        <span className="text-l">|</span>
                        <h2 className="text-2xl font-bold">{CourseMetaInfo.CourseName}</h2>
                    </div>

                    {/*<p className="text-sm text-gray-500 mt-1">#ComputerScience #MachineLearning</p>*/}
                    <div>
                        <Badge variant="outline" className="mr-2">#ComputerScience</Badge>
                        <Badge variant="outline" className="mr-2">#MachineLearning</Badge>
                    </div>
                </div>
                {/*<hr className="narrow"/>*/}
                <div>
                    <p className="font-medium">Published By: {CourseMetaInfo.OrganizationName}</p>
                    <p className="mt-2">
                        {item.des}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        Follow by: Attribution-NonCommercial-ShareAlike 4.0 International
                    </p>
                </div>
                <div className="border-t pt-4">
                    <h4 className="text-lg font-semibold">Committee</h4>
                    <div className="flex space-x-4 mt-4">
                        <Avatar>
                            <AvatarImage alt="AX" src="/placeholder.svg?height=64&width=64" />
                            <AvatarFallback>AX</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold">Anxiu</span>
                                <Badge variant="secondary">Instructor</Badge>
                            </div>
                            <a className="text-sm text-gray-600" href="#">
                                anxiu.0101@example.com
                            </a>
                        </div>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <Avatar>
                            <AvatarImage alt="AX" src="/placeholder.svg?height=64&width=64" />
                            <AvatarFallback>AX</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold">Anxiu</span>
                                <Badge variant="secondary">TA</Badge>
                            </div>
                            <a className="text-sm text-gray-600" href="#">
                                anxiu.0101@example.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

{/*<Card>*/}
{/*    <CardHeader>*/}
{/*        <CardTitle>Instructor</CardTitle>*/}
{/*    </CardHeader>*/}
{/*    <CardContent>*/}
{/*        <div className="flex items-center space-x-4">*/}
{/*            <Avatar>*/}
{/*                <AvatarImage alt="John Doe" src="/placeholder-avatar.jpg" />*/}
{/*                <AvatarFallback>JD</AvatarFallback>*/}
{/*            </Avatar>*/}
{/*            <div>*/}
{/*                <h4 className="text-lg font-bold">John Doe</h4>*/}
{/*                <p className="text-gray-500">Web Development Instructor</p>*/}
{/*            </div>*/}
{/*        </div>*/}
{/*    </CardContent>*/}
{/*</Card>*/}


/**
 * v0 by Vercel.
 * @see https://v0.dev/t/04l9KBWElnh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
