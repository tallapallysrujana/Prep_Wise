import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
    return (

        <>

            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2> Get Interview-Ready with AI-powered Practice & Feedback</h2>
                    <p className="text-lg">Practice on real interview questions & get instant feedback</p>
                    <Button asChild className="btn-primary max-sm:w-full">
                        <Link href="/interview" className="!text-dark-100">Start an Interview</Link>
                    </Button>
                </div>
                <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden" />
            </section>
            <section className="flex flex-col gap-6 mt-8">
                <h2> Your Interviews</h2>
                <div className="interviews-section">
                  <p>You haven&apos;t taken interviews yet</p>
                    {dummyInterviews.map((interview) =>
                        (<InterviewCard {...interview} interviewId={interview.id} key={interview.id} />))}


                    {/* <p>You haven't taken any interviews yet</p> */}
                </div>
            </section>
            <section className="flex flex-col gap-6 mt-8">
                <h2>Take an Interview</h2>
                <div className="Interviews-section">
                    {dummyInterviews.map((interview) =>
                        (<InterviewCard {...interview} interviewId={interview.id} key={interview.id} />))}
                    {/* <p>You haven't taken any interviews yet</p> */}
                </div>
            </section>
        </>
    )
}
export default Page
