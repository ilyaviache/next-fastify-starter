import Head from 'next/head'
import { useSession } from 'next-auth/client'

export default function Home(props) {
  const [ session, loading ] = useSession()

  return (
    <div>
      <Head>
        <title>Test Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Test Next app
      </h1>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
