"use client"

import React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { BookOpen, FileText, Upload, ArrowLeft, Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"

type UploadType = "activity" | "paper" | "resource"

interface Subject {
  id: string
  name: string
  category: string
}

export default function UploadPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const typeParam = searchParams.get("type") as UploadType | null

  const [step, setStep] = useState<1 | 2>(typeParam ? 2 : 1)
  const [uploadType, setUploadType] = useState<UploadType | null>(typeParam)
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  // Form state
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [subjectId, setSubjectId] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [estimatedTime, setEstimatedTime] = useState("")
  const [content, setContent] = useState("")
  const [year, setYear] = useState("")
  const [paperNumber, setPaperNumber] = useState("")

  useEffect(() => {
    async function fetchSubjects() {
      const supabase = createClient()
      const { data } = await supabase
        .from("subjects")
        .select("*")
        .order("name")
      if (data) setSubjects(data)
    }
    fetchSubjects()
  }, [])

  const handleTypeSelect = (type: UploadType) => {
    setUploadType(type)
    setStep(2)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      setError("You must be logged in to upload content")
      setIsLoading(false)
      return
    }

    try {
      if (uploadType === "activity") {
        const { error } = await supabase.from("activities").insert({
          title,
          description,
          subject_id: subjectId,
          difficulty,
          estimated_time: estimatedTime ? parseInt(estimatedTime) : null,
          content,
          created_by: user.id,
          is_published: false,
        })
        if (error) throw error
      } else if (uploadType === "paper") {
        const { error } = await supabase.from("past_papers").insert({
          title,
          subject_id: subjectId,
          year: year ? parseInt(year) : new Date().getFullYear(),
          paper_number: paperNumber ? parseInt(paperNumber) : 1,
          uploaded_by: user.id,
        })
        if (error) throw error
      } else if (uploadType === "resource") {
        const { error } = await supabase.from("resources").insert({
          title,
          description,
          subject_id: subjectId,
          resource_type: "document",
          uploaded_by: user.id,
        })
        if (error) throw error
      }

      setSuccess(true)
      setTimeout(() => {
        router.push("/teacher/dashboard")
      }, 2000)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Content Uploaded Successfully</h2>
            <p className="text-muted-foreground mt-2">
              Your content has been saved. Redirecting to dashboard...
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        {step === 2 && (
          <Button variant="ghost" size="icon" onClick={() => setStep(1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Upload Content</h1>
          <p className="text-muted-foreground mt-1">
            {step === 1 
              ? "Choose what type of content you want to upload" 
              : `Create a new ${uploadType}`
            }
          </p>
        </div>
      </div>

      {step === 1 ? (
        <div className="grid gap-4 sm:grid-cols-3">
          <button
            type="button"
            onClick={() => handleTypeSelect("activity")}
            className="group text-left"
          >
            <Card className="h-full transition-all hover:shadow-md hover:border-primary/20">
              <CardHeader>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-sky-50 group-hover:bg-sky-100 transition-colors">
                  <BookOpen className="h-6 w-6 text-sky-600" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">Activity of Integration</CardTitle>
                <CardDescription className="mt-2">
                  Create curriculum-aligned activities with questions and guidelines
                </CardDescription>
              </CardContent>
            </Card>
          </button>

          <button
            type="button"
            onClick={() => handleTypeSelect("paper")}
            className="group text-left"
          >
            <Card className="h-full transition-all hover:shadow-md hover:border-primary/20">
              <CardHeader>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50 group-hover:bg-rose-100 transition-colors">
                  <FileText className="h-6 w-6 text-rose-600" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">Past Paper</CardTitle>
                <CardDescription className="mt-2">
                  Upload examination papers with optional marking guides
                </CardDescription>
              </CardContent>
            </Card>
          </button>

          <button
            type="button"
            onClick={() => handleTypeSelect("resource")}
            className="group text-left"
          >
            <Card className="h-full transition-all hover:shadow-md hover:border-primary/20">
              <CardHeader>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
                  <Upload className="h-6 w-6 text-indigo-600" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">Study Resource</CardTitle>
                <CardDescription className="mt-2">
                  Share notes, study guides, and other learning materials
                </CardDescription>
              </CardContent>
            </Card>
          </button>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>
              {uploadType === "activity" && "Create Activity"}
              {uploadType === "paper" && "Upload Past Paper"}
              {uploadType === "resource" && "Upload Resource"}
            </CardTitle>
            <CardDescription>
              Fill in the details below to upload your content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a descriptive title"
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Select value={subjectId} onValueChange={setSubjectId} required>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject.id} value={subject.id}>
                          {subject.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {uploadType === "activity" && (
                  <>
                    <div>
                      <Label htmlFor="difficulty">Difficulty Level</Label>
                      <Select value={difficulty} onValueChange={setDifficulty}>
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="time">Estimated Time (minutes)</Label>
                      <Input
                        id="time"
                        type="number"
                        value={estimatedTime}
                        onChange={(e) => setEstimatedTime(e.target.value)}
                        placeholder="e.g., 30"
                        className="mt-1.5"
                      />
                    </div>
                  </>
                )}

                {uploadType === "paper" && (
                  <>
                    <div>
                      <Label htmlFor="year">Year</Label>
                      <Input
                        id="year"
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="e.g., 2024"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="paperNumber">Paper Number</Label>
                      <Input
                        id="paperNumber"
                        type="number"
                        value={paperNumber}
                        onChange={(e) => setPaperNumber(e.target.value)}
                        placeholder="e.g., 1 or 2"
                        className="mt-1.5"
                      />
                    </div>
                  </>
                )}

                <div className="sm:col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide a brief description..."
                    rows={3}
                    className="mt-1.5"
                  />
                </div>

                {uploadType === "activity" && (
                  <div className="sm:col-span-2">
                    <Label htmlFor="content">Activity Content</Label>
                    <Textarea
                      id="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Enter the activity questions, instructions, and guidelines..."
                      rows={8}
                      className="mt-1.5 font-mono text-sm"
                    />
                  </div>
                )}
              </div>

              {error && (
                <p className="text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-md">
                  {error}
                </p>
              )}

              <div className="flex gap-3">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Uploading..." : "Upload Content"}
                </Button>
                <Link href="/teacher/dashboard">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
