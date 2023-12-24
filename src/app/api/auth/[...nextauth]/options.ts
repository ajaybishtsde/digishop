import GitHubProvider from "next-auth/providers/github";
import { connect } from "@/database/mongo.config";
import { User } from "@/model/user";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
  },
  // session: {
  //   strategy: "jwt",
  // },
  callbacks: {
    async signIn({ user, account, profile, credentials, email }) {
      try {
        connect();
        const findUser = await User.findOne({ email: user.email });
        if (findUser) {
          return true;
        }
        await User.create({ name: user.name, email: user.email });
        return true;
      } catch (error) {
        console.log("err", error);
        return false;
      }
    },
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Username:",
          type: "text",
          placeholder: "username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        connect();
        const user = await User.findOne({ email: credentials?.email });

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GIT_CLIENT as string,
      clientSecret: process.env.GIT_SECRET as string,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
};
