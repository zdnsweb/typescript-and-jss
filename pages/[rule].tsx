import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import fs from 'fs/promises';
import * as path from 'path';
import getConfig from 'next/config';
import Paper from '@mui/material/Paper';
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';


export default function Rule({ rule }) {
  return (
    <div className="container">
      <Head>
        <title>Typescript and JSS</title>
        <link rel="icon" href="/zdns.svg" />
      </Head>

      <main css={
        css`
          background-color: black;
          color: white;
        `
      }>
        <Paper css={
          css`
            background-color: black;
            color: white;
            padding-left: 2em;
            padding-right: 2em;
            a {
              text-decoration: none;
              color: yellow;
            }
          `
        }>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {rule}
          </ReactMarkdown>
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

export async function getStaticPaths() {
  const {serverRuntimeConfig} = getConfig();
  const f = path.join(serverRuntimeConfig.PROJECT_ROOT, 'docs', 'rules');
  const files = await fs.readdir(f);
  const paths = files.map((f) => ({
    params: { rule: f },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({params: { rule }}) {
  const {serverRuntimeConfig} = getConfig();
  const f = path.join(serverRuntimeConfig.PROJECT_ROOT, 'docs', 'rules', rule);
  const data = await fs.readFile(f);

  return {
    props: {
      rule: data.toString(),
    },
  };
}



