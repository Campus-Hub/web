"use client";
import '@/components/notification-card'
// import {CardDemo} from "@/components/notification-card";
// import {CardWithForm} from "@/components/form-card";
// import {CommandPanel} from "@/components/command-panel";
// import {ProfileSheet} from "@/components/profile-sheet";
// import {CourseDetailSheet} from "@/components/course-progress-sheet";
// import CourseSearchBar from "@/components/course-search-bar";
// import {CourseInfoCard} from "@/components/course-info-card";
// import CourseHomePage from "@/app/course-detail-page";

import CourseHomePage from "@/app/course/page";
import CourseDetailPage from "@/app/course/[id]/page";
import CourseCreatePage from "@/app/course/register/page";
import router from '@/lib/router';
import { useState } from 'react';
import CampusWelcomePage from "@/components/campus-home";

export default function Home() {
	const [count,setCount] = useState(0);
	router.init( ()=>  setCount(count + 1) );
  return (
      // <div>
      //     <div className="mt-4 ml-4">
      //         <CardDemo></CardDemo>
      //
      //     </div>
      //     <div className="mt-4 ml-4">
      //         <CardWithForm></CardWithForm>
      //
      //     </div>
      //     <div className="mt-4 ml-4">
      //         <CommandPanel></CommandPanel>
      //     </div>
      //     {/*<div className="mt-4 ml-4">*/}
      //     {/*    <ProfileSheet></ProfileSheet>*/}
      //     {/*</div>*/}
      //     <div className="mt-4 ml-4">
      //         <CourseDetailSheet></CourseDetailSheet>
      //     </div>
      //     <div className="mt-4 ml-4">
      //         <CourseSearchBar></CourseSearchBar>
      //     </div>
      //     <div className="mt-4 ml-4">
      //         <CourseInfoCard></CourseInfoCard>
      //     </div>
      // </div>
	   // <>
	  	//   {/*{router.path === '/' ? (<Page router={router} />) : ''}*/}
	  	//   {/*{router.path === '/detail' ? (<Page router={router}/>) : ''}*/}
	  	//   {/*/!*{router.path === '/faq' ? (<CampusHubFAQPage router={router}/>) : ''}*!/*/}
			//  	{/*{router.path === '/register' ? (<Page router={router} />) : ''}*/}
	   // </>
		<>
			<CampusWelcomePage/>
		</>
	 
	  
  );
}
