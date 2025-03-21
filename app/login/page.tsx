"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SharedBackground from "@/components/shared-background"
import BackgroundPaths from "@/components/background-paths"
import Link from "next/link"

export default function LoginPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <SharedBackground />
      <BackgroundPaths />
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-[900px]">
            <LoginForm />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}

function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden border-red-100">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8 bg-white">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold text-red-600">Welcome Back</h1>
                <p className="text-balance text-gray-600">Sign in to your account to continue</p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-gray-600">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="you@example.com" 
                  required 
                  className="bg-white border-red-100 focus:border-red-200 focus:ring-red-100 placeholder:text-gray-400 text-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-gray-600">Password</Label>
                  <Link href="/forgot-password" className="ml-auto text-sm text-red-600 hover:text-red-700">
                    Forgot password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  className="bg-white border-red-100 focus:border-red-200 focus:ring-red-100 text-gray-600"
                />
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                Sign In
              </Button>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-red-100">
                <span className="relative z-10 bg-white px-2 text-gray-500">Or continue with</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full bg-white border-gray-200 hover:bg-blue-50 hover:border-blue-200 group">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-[#4285F4] group-hover:text-[#4285F4]/90">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="ml-2 text-gray-600 group-hover:text-gray-700">Google</span>
                </Button>
                <Button variant="outline" className="w-full bg-white border-gray-200 hover:bg-[#1877F2]/10 hover:border-[#1877F2]/20 group">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-[#1877F2] group-hover:text-[#1877F2]/90">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="ml-2 text-gray-600 group-hover:text-gray-700">Facebook</span>
                </Button>
              </div>
              <div className="text-center text-sm text-gray-500">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-red-600 hover:text-red-700 hover:underline">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-gradient-to-br from-red-50 to-white md:block">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="max-w-sm text-center">
                <h2 className="mb-4 text-2xl font-bold text-red-600">Transform Your Images</h2>
                <p className="text-gray-600">
                  Convert any image into beautiful vector graphics with our AI-powered tools. Perfect for logos, icons, and
                  illustrations.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-gray-500 [&_a]:text-red-600 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-red-700">
        By clicking continue, you agree to our <Link href="/terms">Terms of Service</Link> and{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </div>
    </div>
  )
} 