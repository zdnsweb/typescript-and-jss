# TypeScript

## Configuration

Fist, add to package.json

```
npm install typescript
```

根据需要添加自己需要的类型.

```
npm install typescript @types/node @types/react
```

配置 `tsconfig.json`

```json
{
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
```

##c代码规范

满足lint rules

# JSS

安装:

```
npm install @emotion/react @emotion/server @emotion/styled
```

使用:

```jsx
{`/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

...

<div css={css\`
color: red;
background-color: black;
  \`}>
</div>
`}
```
          这里css内容即为原生css内容, 使用css一致的规则.
          </Typography>