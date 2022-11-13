# vscode-portfolio

A Visual Studio Code themed developer portfolio website built with Next.js and deployed on Vercel.
This is a fork of the project https://github.com/itsnitinr/vscode-portfolio (I did when I didn't know how the fork works. So it's kind of a modified copy). Improved it by converting to typescript and implementing storybook

![vscode-portfolio banner](/public/vscode-portfolio.png)

## Features Roadmap

- [ ] Themes and customizations
  - [X] Theme alternative (default)
  - [x] GitHub Dark 
  - [x] Dracula
  - [x] Ayu
  - [x] Nord
- [ ] Interactive custom terminal

For other features and themes suggestions, please open an issue.

## Environment Variables

For fetching your articles from dev.to, create an `.env` file inside the project directory.

## Running storybook

```bash
npm run storybook
# or
yarn storybook
```
Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.
- [Learn Storybook](https://storybook.js.org/docs/react/get-started/introduction) - an interactive tutorial.

## Running Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

All VSCode related components can be found in the `components` folder. To change the content of the portfolio, check out the `pages` folder. To add or remove pages, modify `components/Sidebar.jsx` and `components/Tabsbar.jsx`.

## Next.js Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Route to create your link preview image

Use your github username to create a link preview image with your photo using the route below 

[https://portfolio-madson.vercel.app/api/og?username=GITHUB_USERNAME](https://portfolio-madson.vercel.app/api/og?username=MadsonAlan)

