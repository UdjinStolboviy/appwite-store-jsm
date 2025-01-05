"use server";

import { Account, Avatars, Client, Databases, Storage } from "node-appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";

// export const createSessionClient = async () => {
//   const client = new Client()
//     .setEndpoint(appwriteConfig.endpointUrl)
//     .setProject(appwriteConfig.projectId)
//     .setKey(
//       "standard_3daceae97e98fb72352e518d0a5d1d028c0603b6e185152317abab70a275730b6f3e531f48bab74f06f3cbbb49f6bda28986195e23130dd835bef3b68aeeaedababee005fd4789e051aa874f93c0ce2fcb1d119813a4e6824eec4185e28f3247bd501fee07b88f62d58e3afcf4bdfe3e2af6beb7ee4f80526b32b5c519bea864",
//     )
//     .setSelfSigned(true);

//   const session = (await cookies()).get("appwrite-session");
//   // console.log("-------", session);
//   // if (!session || !session.value) throw new Error("No session");

//   // client.setSession(session.value);

//   return {
//     get account() {
//       return new Account(client);
//     },
//     get databases() {
//       return new Databases(client);
//     },
//   };
// };

export const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.secretKey)
    .setSelfSigned(true);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
    get storage() {
      return new Storage(client);
    },
    get avatars() {
      return new Avatars(client);
    },
  };
};
