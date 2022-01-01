import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/Spotify"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  database: process.env.DATABASE_URL,
})