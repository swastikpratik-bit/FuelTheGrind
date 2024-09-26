import { connetToDatabase } from '@/lib/utils';
import User  from '@/models/User';
import NextAuth from 'next-auth';
import GitHubProvider from "next-auth/providers/github";



export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    }),
  
  ],
  callbacks: {
    async signIn({ user , account , profile , email , credentials }){
      console.log(user)
      if (account?.provider === "github") {
        console.log("hai");
        await connetToDatabase();
        const curUser = await User.findOne({email : user.email});
        
        if(!curUser){

          console.log("hai ")
          const newUser = await User.create({
            email : user.email  , 
            username : user.email?.split("@")[0],
          })
        }
        return true;
      }
      return true;  
    }, 
    async session({session , user , token}){

      const dbUser = await User.findOne({email : session.user?.email})
      session.user?.name ? dbUser.username : 'Unknown';
      return session;
    }
  }
})


export { authoptions as GET, authoptions as POST };
