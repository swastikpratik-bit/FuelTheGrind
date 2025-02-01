import { connetToDatabase } from '@/lib/utils';
import User from '@/models/User';
import NextAuth from 'next-auth';
import GitHubProvider from "next-auth/providers/github";

export const authoptions = NextAuth({

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  secret: "DFDJFHAKH",

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "github") {
        await connetToDatabase();
        const curUser = await User.findOne({ email: user.email });

        if (!curUser) {
          await User.create({
            email: user.email,
            username: user.email?.split("@")[0],
            profilePicture: user.image,
            coverImage: "https://i.ibb.co/8m9NDtd/cover.png"
          });
        }
        return true;
      }
      return true;
    },
    async session({ session }) {
      const dbUser = await User.findOne({ email: session.user?.email });
      if (session.user) {
        session.user.name = dbUser.username;
      }
      return session;
    },
  },
});

export { authoptions as GET, authoptions as POST };
