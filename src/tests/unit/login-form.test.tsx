import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { LoginForm } from '@/src/components/features/auth/login-form'

vi.mock('next-auth/react', () => ({
  signIn: vi.fn().mockResolvedValue({ error: null }),
}))

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    refresh: vi.fn(),
  }),
}))

describe('LoginForm', () => {
  it('renders email and password fields', () => {
    render(<LoginForm />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })

  it('shows validation error for invalid email', async () => {
    render(<LoginForm />)
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'notanemail' },
    })
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' },
    })
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }))
    await waitFor(
      () => {
        expect(screen.getByText('Invalid email address')).toBeInTheDocument()
      },
      { timeout: 3000 }
    )
  })

  it('shows validation error for short password', async () => {
    render(<LoginForm />)
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'test@test.com' },
    })
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: '123' },
    })
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }))
    await waitFor(
      () => {
        expect(screen.getByText('Password must be at least 6 characters')).toBeInTheDocument()
      },
      { timeout: 3000 }
    )
  })
})
