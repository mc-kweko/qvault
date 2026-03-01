import Link from "next/link"
import { PageContainer } from "@/components/page-container"
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 sm:py-28 lg:py-36">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute -bottom-8 left-1/4 w-80 h-80 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      <PageContainer>
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50 px-4 py-1.5 text-sm text-blue-600">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            Uganda&apos;s New Lower Secondary Curriculum
          </div>

          {/* Main heading */}
          <h1 className="text-balance text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-tight">
            Excel in Your
            <br />
            Studies with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Q&apos;Vault</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600 sm:text-xl">
            Access comprehensive Activities of Integration, UCE past papers, and curated 
            educational resources aligned with Uganda&apos;s curriculum. Everything you need 
            to succeed, in one place.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/auth/sign-up">
              <Button size="lg" className="w-full sm:w-auto gap-2 text-base bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all">
                Start Learning Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base bg-white border-slate-200 text-slate-900 hover:bg-slate-50">
                Browse Resources
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-all">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900">500+</span>
              <span className="text-sm text-slate-600">Activities</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-all">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900">9</span>
              <span className="text-sm text-slate-600">Subject Areas</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-all">
              <Users className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900">1000+</span>
              <span className="text-sm text-slate-600">Students</span>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
