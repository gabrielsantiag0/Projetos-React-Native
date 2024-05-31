import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aora',
    projectId: '665748cb0006bc9851c3',
    databaseId: '665755500006b3fd5e2f',
    userCollectionId: '665755d5001d309801a9',
    videoCollectionId: '665757190032f13ac79d',
    storageId: '66575afa0029f1125765'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client)

export const createUser = async ( email, password, username ) => {
    
    try {
        const newAccount = await account.create(

            ID.unique(),
            email,
            password,
            username

        )

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)
        
        await signIn( email, password );

        const newUser = await database.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(), {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )
        return newUser; 
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }

};

export async function signIn( email, password ) {

    try {
        const session = await account.createEmailPasswordSession
        ( email, password )
        return session;
    } catch (error) {
        throw new Error(error)
    }
}

