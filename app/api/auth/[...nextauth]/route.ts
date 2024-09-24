import Username from '@/app/[username]/page';
import { connetToDatabase } from '@/lib/utils';
import { User } from '@/models/User';
import NextAuth, { Account, Profile } from 'next-auth'
import { AdapterUser } from 'next-auth/adapters';
import { CredentialInput } from 'next-auth/providers/credentials';
import GitHubProvider from "next-auth/providers/github"



export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    }),
  
  ],
  callbacks: {
    async signIn({ user , account , profile , email , credentials }): Promise<string | boolean> {
      if (account?.provider === "github") {
        await  connetToDatabase();
        
        const curUser = await User.findOne({email : email});
        
        if(!curUser){
          const newUser = await User.create({
            email : user.email  , 
            username : user.email?.split("@")[0],
            name : user.name,
          })
        }
      }
      return true; 
    }, 
    async session({session , user , token}){
      // console.log(session);
      const dbUser = await User.findOne({email : session.user?.email})
        session.user?.name ? dbUser.username : 'Unknown';
      return session;
    }
  }
})


export { authoptions as GET, authoptions as POST };
