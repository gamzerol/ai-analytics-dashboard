'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Label } from '@/src/components/ui/label'
import { Card, CardContent, CardFooter } from '@/src/components/ui/card'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginFields = z.infer<typeof loginSchema>
type FieldErrors = Partial<Record<keyof LoginFields, string>>

export function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setFieldErrors({})

    const formData = new FormData(e.currentTarget)
    const values = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }

    // Client-side validation
    const result = loginSchema.safeParse(values)
    if (!result.success) {
      const errors: FieldErrors = {}
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof LoginFields
        errors[field] = err.message
      })
      setFieldErrors(errors)
      return
    }

    setIsLoading(true)

    try {
      const response = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
      })
      console.log(response)

      if (response?.error) {
        setError('Invalid email or password')
        return
      }
      console.log(response)

      router.push('/dashboard')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="border-[var(--border)] bg-[var(--surface)]">
      <form onSubmit={handleSubmit}>
        <CardContent className="flex flex-col gap-4 pt-6">
          {error && (
            <div className="rounded-md bg-[var(--color-error)]/10 px-3 py-2 text-sm text-[var(--color-error)]">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="demo@dashboard.com"
              autoComplete="email"
              disabled={isLoading}
            />
            {fieldErrors.email && (
              <p className="text-xs text-[var(--color-error)]">{fieldErrors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              disabled={isLoading}
            />
            {fieldErrors.password && (
              <p className="text-xs text-[var(--color-error)]">{fieldErrors.password}</p>
            )}
          </div>

          <div className="rounded-md bg-[var(--surface-raised)] px-3 py-2 text-xs text-[var(--muted-foreground)]">
            Demo: <span className="font-mono">demo@dashboard.com</span> /{' '}
            <span className="font-mono">password123</span>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3 pt-2">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign in'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
