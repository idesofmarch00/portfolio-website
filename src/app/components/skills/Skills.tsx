"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const t1 = [
  { "id": 1, "name": "React", "url": "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { "id": 2, "name": "Next.js", "url": "https://nextjs.org/static/favicon/favicon.ico" },
  { "id": 3, "name": "Vue.js", "url": "https://vuejs.org/images/logo.png" },
  { "id": 4, "name": "Quasar", "url": "https://cdn.quasar.dev/logo/svg/quasar-logo.svg" },
  { "id": 5, "name": "React Three Fiber (R3F)", "url": "https://raw.githubusercontent.com/pmndrs/react-three-fiber/449b7f4effed3055d3fbba858c818d4747ac2ac6/example/favicon.svg" },
  { "id": 6, "name": "React Native", "url": "https://cdn.worldvectorlogo.com/logos/react-native-1.svg" },
  { "id": 7, "name": "Framer Motion", "url": "https://www.framer.com/images/favicons/favicon.png" },
  { "id": 8, "name": "Node.js", "url": "https://nodejs.org/static/images/logo.svg" },
  { "id": 9, "name": "Express", "url": "https://expressjs.com/images/favicon.png" },
  { "id": 10, "name": "Electron", "url": "https://www.electronjs.org/assets/img/logo.svg" },
]
const t2 = [{ "id": 11, "name": "Vitest", "url": "https://vitest.dev/logo.svg" },
  { "id": 12, "name": "Playwright", "url": "https://playwright.dev/img/playwright-logo.svg" },
  { "id": 13, "name": "Zustand", "url": "https://raw.githubusercontent.com/pmndrs/zustand/main/docs/favicon.ico" },
  { "id": 14, "name": "Redux", "url": "https://redux.js.org/img/redux-logo-landscape.png" },
  { "id": 15, "name": "TanStack", "url": "https://tanstack.com/_build/assets/logo-color-100w-lPbOTx1K.png" },
  { "id": 16, "name": "React Router DOM", "url": "https://reactrouter.com/favicon.ico" },
  { "id": 17, "name": "React Navigation", "url": "https://reactnavigation.org/img/spiro.svg" },
  { "id": 18, "name": "Mapbox", "url": "https://camo.githubusercontent.com/0db326521e418f92583f451b2649f94bcc9a0fee0ae0498f812095e3fa865a71/68747470733a2f2f7374617469632d6173736574732e6d6170626f782e636f6d2f7777772f6c6f676f732f6d6170626f782d6c6f676f2d626c61636b2e706e67" },
  { "id": 19, "name": "Firebase", "url": "https://firebase.google.com/static/images/favicon.png" },
  { "id": 20, "name": "Jest", "url": "https://jestjs.io/img/jest.png" },
  { "id": 21, "name": "React Testing Library", "url": "https://testing-library.com/img/octopus-64x64.png" },
  { "id": 22, "name": "GraphQL", "url": "https://graphql.org/img/logo.svg" },
  { "id": 23, "name": "urql", "url": "https://raw.githubusercontent.com/urql-graphql/urql/main/packages/site/src/assets/sidebar-badge.svg" }]

const fl = [
  { "id": 1, "name": "Git", "url": "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
  { "id": 2, "name": "Docker", "url": "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" },
  { "id": 3, "name": "Google Cloud Platform", "url": "https://cloud.google.com/images/products/logos/svg/gcp-logo.svg" },
  { "id": 4, "name": "MongoDB", "url": "https://www.mongodb.com/assets/images/global/favicon.ico" },
  { "id": 5, "name": "PWA (Progressive Web Apps)", "url": "https://developers.google.com/web/fundamentals/web-app-manifest/logo192.png" },
  { "id": 6, "name": "WebSockets", "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Websocket.png/800px-Websocket.png" },
  { "id": 7, "name": "LLMs (Large Language Models)", "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/AI_Language_Models.png/640px-AI_Language_Models.png" },
  { "id": 8, "name": "VS Code", "url": "https://code.visualstudio.com/favicon.ico" },
  { "id": 9, "name": "Figma", "url": "https://www.figma.com/favicon.ico" }
]



export default function Skills() {
  return (
    <div className="pt-10 rounded-md flex flex-col space-y-2 antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={t1}
        direction="right"
      />
      <InfiniteMovingCards
        items={t2}
        direction="left"
      />
    </div>
  );
}

