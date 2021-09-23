import { setOptions, getSession, Provider, session } from 'next-auth/client'
import App from 'next/app'

setOptions({ site: process.env.NEXT_PUBLIC_NEXTAUTH_URL })

export default function WrappedApp({ Component, pageProps }) {
  return (
    <Provider options={{ clientMaxAge: 0, keepAlive: 0, site: process.env.NEXT_PUBLIC_NEXTAUTH_URL }} session={pageProps.session} >
      <Component {...pageProps} />
    </Provider>
  )
}

WrappedApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context)
  const session = await getSession(context)

  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      session: session
    }
  }
}
