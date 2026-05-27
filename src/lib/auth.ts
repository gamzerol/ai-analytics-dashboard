import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET,
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials)
        if (!parsed.success) return null
        console.log('Received login attempt:', parsed.data)
        if (parsed.data.email === 'demo@dashboard.com' && parsed.data.password === 'password123') {
          console.log('Demo user authenticated')
          return {
            id: '1',
            name: 'Demo User',
            email: 'demo@dashboard.com',
          }
        }

        return null
      },
    }),
  ],
})
