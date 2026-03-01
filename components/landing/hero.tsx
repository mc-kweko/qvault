import Link from "next/link"
import { PageContainer } from "@/components/page-container"
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28 lg:py-36">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute -bottom-8 left-1/4 w-80 h-80 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      <PageContainer>
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Uganda&apos;s New Lower Secondary Curriculum
          </div>

          {/* Main heading */}
          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight">
            Excel in Your
            <br />
            Studies with{" "}
            <span className="text-primary">Q&apos;Vault</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Access comprehensive Activities of Integration, UCE past papers, and curated 
            educational resources aligned with Uganda&apos;s curriculum. Everything you need 
            to succeed, in one place.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/auth/sign-up">
              <Button size="lg" className="w-full sm:w-auto gap-2 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                Start Learning Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">
                Browse Resources
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-all">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">500+</span>
              <span className="text-sm text-muted-foreground">Activities</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-all">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">9</span>
              <span className="text-sm text-muted-foreground">Subject Areas</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-all">
              <Users className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">1000+</span>
              <span className="text-sm text-muted-foreground">Students</span>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
