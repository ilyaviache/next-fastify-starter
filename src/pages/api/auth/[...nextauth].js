import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import jwt from "jsonwebtoken"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    })
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must to install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  database: process.env.DATABASE_URL,
  secret: process.env.SECRET,
  session: {
    jwt: true,
  },

  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.SECRET,
    encode: async ({ secret, token, maxAge }) => {
      const jwtClaims = {
        "sub": token.sub.toString() ,
        "name": token.name ,
        "email": token.email,
        "iat": Date.now() / 1000,
        "exp": Math.floor(Date.now() / 1000) + (24*60*60)
      }
      const encodedToken = jwt.sign(jwtClaims, secret, { algorithm: 'HS256'})
      return encodedToken
    },
    decode: async ({ secret, token, maxAge }) => {
      const decodedToken = jwt.verify(token, secret, { algorithms: ['HS256']})
      return decodedToken
    },
  },

  pages: {
    // signIn: '/api/auth/signin',  // Displays signin buttons
    // signOut: '/api/auth/signout', // Displays form with sign out button
    // error: '/api/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/api/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },
  callbacks: {
    // async signIn(user, account, profile) { return true },
    // async redirect(url, baseUrl) { return baseUrl },
    async session(session, token) { 
      const encodedToken = jwt.sign(token, process.env.SECRET, { algorithm: 'HS256'})
      session.id = token.id
      session.token = encodedToken
      return Promise.resolve(session)
    },
    async jwt(token, user, account, profile, isNewUser) { 
      const isUserSignedIn = user ? true : false
      if(isUserSignedIn) {
        token.id = user.id.toString()
      }
      return Promise.resolve(token)
    }
  },
  events: {},
  debug: true,
})
