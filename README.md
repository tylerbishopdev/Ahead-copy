# AheadEzoic by $hibaKing

Clone the repo and...
```
'cd ./root'
'npm install'
```
To deploy to Netlify install netlify-cli
```
'npm install netlify-cli' 
```
'netlify build' or 'npm run build' 'npm run dev' for dev server on localhost

Documentation for astro at https://astro.build

# 🚀 Project Structure
Inside of your Astro project, you'll see the following folders and files:

Public is just for rendering and media items you can reference in the project, dont put files here Src is where pages, layouts, and compoonents are at. Tailwind needs zero custom css and is composable, so all front-end can be done inside Components or Layouts. Use Astro.props for dynamic contentby page according to relative components.
```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

# Add Images and Media

Images can be drag and dropped into the images folder inside /Public /public/images/[yourimage.png]. All media items can be placed here so they are stored and available at deployment. They can be referenced and rendered by entering the url path of the image sans the /public/ slug. Like this:
```
<img src="/images/coolpic.png">
```
# Know before ya go

Astro looks for .astro or .md files in the src/pages/ directory. Each page is exposed as a route based on its file name.

There's nothing special about src/components/, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the public/ directory.

🧞 Commands
All commands are run from the root of the project, from a terminal:
```
Command	Action
npm install	Installs dependencies
npm run dev	Starts local dev server at localhost:3000
npm run build	Build your production site to ./dist/
npm run preview	Preview your build locally, before deploying
npm run astro ...	Run CLI commands like astro add, astro check
npm run astro -- --help	Get help using the Astro CLI
```
