import { ChatGPTAPIBrowser } from "chatgpt";

/* ONLY one of this two can have 'true' value
   microsoft and google bypass the captcha */
   const isGoogleLogin = false;
   const isMicrosoftLogin = true;

const api = new ChatGPTAPIBrowser({
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
  isGoogleLogin,
  isMicrosoftLogin,
});
await api.initSession();

const result = await api.sendMessage("Hello World!");
console.log(result.response);