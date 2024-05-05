"use client"

import { useToast } from "@/components/ui/use-toast"
import {CampusHeader} from "@/components/header";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from "@/components/ui/collapsible";
import {ChevronDownIcon} from "@/components/icon";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import * as React from "react";


export default function CampusHubFAQPage() {
    // const { toast } = useToast()

    return (
        <>
            <CampusHeader/>
            <main className="container mx-auto my-8 px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="col-span-2 space-y-8">
                        <div>
                            <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
                            <p className="mt-4 text-gray-500">Get answers to the most common questions about Campus Hub Online.</p>
                        </div>
                        <Collapsible className="space-y-4">
                            <div>
                                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-gray-900 transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                    <h3 className="text-lg font-medium">What is Campus Hub Online?</h3>
                                    <ChevronDownIcon className="h-5 w-5 transition-transform" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 pt-4 text-gray-500 dark:text-gray-400">
                                    <p>
                                        Campus Hub Online is a platform dedicated to the sharing and collaboration of public educational resources. It serves as a community hub for learners, educators, and content creators to engage in discussions, share courses, and foster a culture of collaborative learning.
                                    </p>
                                </CollapsibleContent>
                            </div>
                            <div>
                                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-gray-900 transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                    <h3 className="text-lg font-medium">How can I join the Campus Hub Community?</h3>
                                    <ChevronDownIcon className="h-5 w-5 transition-transform" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 pt-4 text-gray-500 dark:text-gray-400">
                                    <p>
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        Joining the Campus Hub Community is simple! Visit our GitHub organization Campus Hub and explore the various repositories. To actively participate in discussions, share resources, and contribute, feel free to create an account on GitHub if you don't have one and start engaging with the community.
                                    </p>
                                </CollapsibleContent>
                            </div>
                            <div>
                                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-gray-900 transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                    <h3 className="text-lg font-medium">Can I share my own public courses on Campus Hub Online?</h3>
                                    <ChevronDownIcon className="h-5 w-5 transition-transform" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 pt-4 text-gray-500 dark:text-gray-400">
                                    <p>
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        Absolutely! We encourage community members to share their public open courses. You can do so by participating in discussions within the "community" repository or by creating a new repository for your course content within the organization.
                                    </p>
                                </CollapsibleContent>
                            </div>
                            <div>
                                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-gray-900 transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                    <h3 className="text-lg font-medium">What are the guidelines for participating in discussions?</h3>
                                    <ChevronDownIcon className="h-5 w-5 transition-transform" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 pt-4 text-gray-500 dark:text-gray-400">
                                    <p>
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        We value respectful and constructive communication. Ensure your contributions are relevant to the community's focus on education, learning resources, and collaboration. Please refer to the community guidelines in the discussion space for more details.
                                    </p>
                                </CollapsibleContent>
                            </div>
                            <div>
                                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-gray-900 transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                    <h3 className="text-lg font-medium">How do I report an issue or suggest an improvement?</h3>
                                    <ChevronDownIcon className="h-5 w-5 transition-transform" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 pt-4 text-gray-500 dark:text-gray-400">
                                    <p>
                                        If you encounter any issues or have suggestions for improvement, please open an issue in the relevant repository on GitHub. Your feedback is highly appreciated and contributes to the continual enhancement of the Campus Hub Online platform.
                                    </p>
                                </CollapsibleContent>
                            </div>
                            <div>
                                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-gray-900 transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                    <h3 className="text-lg font-medium">Are there specific licenses for content and code on Campus Hub Online?</h3>
                                    <ChevronDownIcon className="h-5 w-5 transition-transform" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 pt-4 text-gray-500 dark:text-gray-400">
                                    <p>
                                        Yes, content resources on Campus Hub Online follow the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0), while code resources adhere to the MIT License. Please respect and adhere to these licenses when contributing or using resources on the platform.
                                    </p>
                                </CollapsibleContent>
                            </div>
                            <div>
                                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-gray-900 transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                    <h3 className="text-lg font-medium">How can I get involved in the development of Campus Hub Online?</h3>
                                    <ChevronDownIcon className="h-5 w-5 transition-transform" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 pt-4 text-gray-500 dark:text-gray-400">
                                    <p>
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        If you're interested in contributing to the development of Campus Hub Online, check out the open issues in the relevant repositories, fork the repository, and submit a pull request. We welcome contributions from the community!
                                    </p>
                                </CollapsibleContent>
                            </div>
                            <div>
                                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-gray-900 transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                    <h3 className="text-lg font-medium">Is there a dedicated space for announcements and updates?</h3>
                                    <ChevronDownIcon className="h-5 w-5 transition-transform" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 pt-4 text-gray-500 dark:text-gray-400">
                                    <p>
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        Yes, important announcements and updates are posted in the "community" repository discussions. Stay informed by participating in these discussions and keeping an eye on the latest announcements.
                                    </p>
                                </CollapsibleContent>
                            </div>
                            <div>
                                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-gray-900 transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                    <h3 className="text-lg font-medium">How can I contact the Campus Hub Online team for further assistance?</h3>
                                    <ChevronDownIcon className="h-5 w-5 transition-transform" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 pt-4 text-gray-500 dark:text-gray-400">
                                    <p>
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        For general inquiries or assistance, you can reach out to the Campus Hub Online team by creating a new issue in the "community" repository or through the contact information provided in the repository.
                                    </p>
                                </CollapsibleContent>
                            </div>
                        </Collapsible>
                        <p>If you have additional questions, feel free to ask in the discussions or reach out to the Campus Hub Online team. Happy learning! 🚀</p>
                    </div>

                    <div className="space-y-6">
                        <div className="border-t pt-4">
                            <h4 className="text-lg font-semibold">CampusHub Developer</h4>
                            <div className="flex space-x-4 mt-4">
                                <Avatar>
                                    <AvatarImage alt="AX" src="/placeholder.svg?height=64&width=64" />
                                    <AvatarFallback>AX</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col justify-center">
                                    <div className="flex items-center space-x-2">
                                        <span className="font-semibold">Anxiu</span>
                                        <Badge variant="secondary">Web Page Engineer</Badge>
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
                                        <Badge variant="secondary">Cloud Service Engineer</Badge>
                                    </div>
                                    <a className="text-sm text-gray-600" href="#">
                                        anxiu.0101@example.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}