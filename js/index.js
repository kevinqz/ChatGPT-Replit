import puppeteer from "puppeteer";
import { ChatGPTAPIBrowser } from 'chatgpt'

/* How to use the ChatGPT-API

You have the option to use Google Login or OpenAI Login.

If you use Google Login, you can bypass the Captcha.
Using OpenAI Login, you'll need to fill the Captcha yourself. When running the Replit, an Output Tab will appear with Chrome so you can fill the Captcha. You can also use a third-party service for it, access ChatGPT-API directly on GitHub for more info.

Do you want to use Google Login or OpenAI account directly?
For Google Login, you should define the isGoogleLogin constant as true
For OpenAI Login, you should define isGoogleLogin constant as false 
*/
const isGoogleLogin = true; // Default is Google Login
let apiConfig = {};

if (isGoogleLogin == true) {
  /* Google Login
  Important! Define your Google account info (Email and Password) as Replit Secrets
  Your e-mail must be inserted on GOOGLE_OPENAI_EMAIL
  Your password must be inserted on GOOGLE_OPENAI_PASSWORD
  */
  apiConfig = {
    email: process.env.GOOGLE_OPENAI_EMAIL,
    password: process.env.GOOGLE_OPENAI_PASSWORD,
    isGoogleLogin: true,
    debug: true
  }
  console.log(`Google Login is enabled.`);
  console.log(apiConfig)
} else {
  /* OpenAI Login
  Important! Define your OpenAI account info (Email and Password) as Replit Secrets
  Your e-mail must be inserted on OPENAI_EMAIL
  Your password must be inserted on OPENAI_PASSWORD
  */
  apiConfig = {
    email: process.env.OPENAI_EMAIL,
    password: process.env.OPENAI_PASSWORD,
    isGoogleLogin: false,
    debug: true
  }
  console.log(`Google Login is disabled.`);
  console.log(`You're using OpenAI Login. You need to solve the Captcha to login.`);
  console.log(apiConfig)
}

const api = new ChatGPTAPIBrowser(apiConfig)
await api.initSession()

const result = await api.sendMessage('Hello World!')
console.log(result.response)