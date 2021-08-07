import * as Realm from "realm-web";

const REALM_APP_ID = process.env.GATSBY_APP_ID;
const app = new Realm.App({ id: REALM_APP_ID });


// Get the API key from the local environment
const apiKey = process.env.GATSBY_MDB_AUTH_USER;
if (!apiKey) {
  throw new Error("Could not find a Realm Server API Key.");
}
// Create an api key credential
const credentials = Realm.Credentials.serverApiKey(apiKey);

export default async function Login() {
  try {
    const user = await app.logIn(credentials);
    return user;    
  } catch (err) {
    console.error("Failed to log in", err.message);
  }
}
