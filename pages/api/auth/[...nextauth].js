import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/Spotify"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: Login
    }),
  ],

  database: process.env.DATABASE_URL,
})