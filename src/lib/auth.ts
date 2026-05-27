import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials)
        if (!parsed.success) return null

        if (parsed.data.email === 'demo@dashboard.com' && parsed.data.password === 'password123') {
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
