[ChatGPTReplit](https://replit.com/@kevinqz/ChatGPT-Replit-Headful-Puppeteer-NodeJS-ChatGPT-API)  <!-- omit in toc -->
> Replit Template for the unofficial [ChatGPT](https://openai.com/blog/chatgpt/) API.

Get [ChatGPT-API](https://github.com/transitive-bullshit/chatgpt-api) working with just one click in your [Replit](https://replit.com/) account. Feel free to copy this Template and start using it!

## What is this?
This is a bash REPL with Node v18 that demonstrates (unofficial) ChatGPT-API running in a Headful Puppeteer (Chromium) on Replit.

Please consider that this is not the official [OpenAI](https://openai.com/) [ChatGPT](https://chat.openai.com/chat) API.

## What I need to use it?
1. A [Replit](https://replit.com/) account
2. An [OpenAI](https://openai.com/) account (either a direct account, a Google, or a Microsoft account)

## How to use it?
1. Fork the [ChatGPTReplit Template](https://replit.com/@kevinqz/ChatGPT-Replit-Headful-Puppeteer-NodeJS-ChatGPT-API) to your account
2. Create two Replit Secrets (Tools > Secrets): one for your EMAIL and one for your PASSWORD. This is important to keep your account info private. 
3. Set the account type by changing "isLogin" variables inside the 'index.js' file ```./js/index.js```:

- For OpenAI Account, both values have to be false:
```ts
const isGoogleLogin = false;
const isMicrosoftLogin = false;
```

- For Google Account, set Google to true and Microsoft to false:
```ts
const isGoogleLogin = true;
const isMicrosoftLogin = false;
```
  
- For Microsoft Account, set Google to false and Microsoft to true:
```ts
const isGoogleLogin = false;
const isMicrosoftLogin = true;
```

4. You're all set! Press 'Run' to say "Hello World" to your ChatGPT instance
5. Edit the index.js to use the [ChatGPT-API](https://github.com/transitive-bullshit/chatgpt-api) accordling to your needs

## Happy Building! 🚀
If you like it, considering following me for future updates and works:
- Replit [@kevinqz](replit.com/@kevinqz)
- GitHub [@kevinqz](https://github.com/kevinqz)

## Special thanks:
- [Travis Fischer](https://github.com/transitive-bullshit) for the [ChatGPT-API](https://github.com/transitive-bullshit/chatgpt-api) (Unofficial NodeJS API)
- [Vikash Loomba](replit.com@valoomba) for the (Headful) Puppeteer on Replit
- shêr from the [ChatGPT Hacking Discord](https://discord.gg/bznweY7b) for suggesting a better implementation of the login handler on the index.js code
