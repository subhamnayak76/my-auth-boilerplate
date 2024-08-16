
import { sign } from 'crypto';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import { pages } from 'next/dist/build/templates/app-page';
export const Next_Auth ={
    providers :[
        CredentialsProvider({
            name:'Credentials',
            credentials: {
                username: { label: 'email', type: 'text', placeholder: '' },
                password: { label: 'password', type: 'password', placeholder: '' },
              },
              async authorize(credentials: any) {
            
                return {
                    id: "user1",
                    name: "User One",
                    email: "harkirat@gmail.com",
                    
                };
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          })

    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks : {
         jwt: async ({ user, token }: any) => {
            if (user) {
                token.userID = token.sub
            }
            return token;
            },
          session: async ({ session, token }: any) => {
            session.user.id = token.userID;
            return session;
          }  
        },
        pages: {
            signIn: '/signin',
        }
}