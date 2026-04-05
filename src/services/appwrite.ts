import { Client, Account, Databases } from "appwrite";

// Initialize Appwrite Client
const client = new Client()
    .setEndpoint("https://nyc.cloud.appwrite.io/v1")
    .setProject("69d10336001882f5531d");

// Initialize services
const account = new Account(client);
const databases = new Databases(client);

// Log that Appwrite has been configured
if (typeof window !== 'undefined') {
    console.log('✓ Appwrite SDK initialized')
    console.log('  Endpoint: https://nyc.cloud.appwrite.io/v1')
    console.log('  Project: 69d10336001882f5531d')
}

export { client, account, databases };
