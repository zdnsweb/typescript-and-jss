import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import fs from 'fs/promises';
import * as path from 'path';
import getConfig from 'next/config';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

export default function Home({ rules }) {
  return (
    <div className="container">
      <Head>
        <title>Typescript and JSS</title>
        <link rel="icon" href="/zdns.svg" />
      </Head>
      <AppBar color={'primary'}>
        <Typography align={'center'} component={'h3'}>
        TypeScript and JSS
        </Typography>
      </AppBar>
      <main
        css={css`
          width: 100%;
          min-height: 100%;
        `}
      >
        <Paper
          elevation={3}
          css={css`
          width: 100%;
          min-height: 100%;
          padding: 1em 2em;
          h1 {
            font-size: 48px;
          }
          h2 {
            font-size: 32px;
          }
          a {
            text-decoration: none;
            color: green;
          }
        `}>
          <Typography align={'left'} component={'h1'}>
            TypeScript
          </Typography>
          <Typography align={'left'} component={'h2'}>
            Configuration
          </Typography>
          <Typography align={'left'} component={'p'}>
            Fist, add to package.json
            <pre>{
              `npm install typescript`
            }
            </pre>
            根据需要添加自己需要的类型.
            <pre>{
              `npm install typescript @types/node @types/react`
            }
            </pre>
          </Typography>
          <Typography align={'left'} component={'p'}>
            配置<i>tsconfig.json</i>
            <code>
              <pre>
              {`{
  "compilerOptions": {
    "baseUrl": "./src",
    "target": "es2022",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "noImplicitAny": false,
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": [
    "next-env.d.ts",
    "src/type-define.d.ts",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
`}
              </pre>
            </code>
          </Typography>
          <Typography align={'left'} component={'h2'}>
            代码规范
          </Typography>
          <Typography align={'left'} component={'p'}>
            满足lint rules
            <Button key={'rules'} color="inherit">
              <Link href={'/README.md'}>{'Rules'}</Link>
            </Button>
          </Typography>
          <Typography align={'left'} component={'h1'}>
            JSS
          </Typography>
          <Typography align={'left'} component={'p'}>
          安装:
          <code>
            <pre>
            {`npm install @emotion/react @emotion/server @emotion/styled`}
            </pre>
          </code>
          </Typography>
          <Typography align={'left'} component={'p'}>
          使用:
          <code>
            <pre>
            {`/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

...

<div css={css\`
color: red;
background-color: black;
  \`}>
</div>
`}
            </pre>
          </code>
          这里css内容即为原生css内容, 使用css一致的规则.
          </Typography>
        </Paper>
      </main>

      <footer>
        <a href="https://cloud.zdns.cn" target="_blank" rel="noopener noreferrer">
          Powered by <img src="/zdns.svg" alt="zdns" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
            Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const {serverRuntimeConfig} = getConfig();
  const f = path.join(serverRuntimeConfig.PROJECT_ROOT, 'docs', 'rules', 'README.md');
  const data = await fs.readFile(f);

  return {
    props: {
      rules: data.toString(),
    },
  };
}



