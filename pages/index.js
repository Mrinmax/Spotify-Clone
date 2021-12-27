import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <nav>
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Spotify_App_Logo.svg" alt="spotify" />
        </nav>
      </div>

    </div>
  )
}
