## Hello

1. Initialize project
```sh
npm init
npm install @loopback/core @loopback/rest --save
npm install ts-node typescript --save-dev
```
Add `tsconfig.json`
```json
{
  "$schema": "http://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "noImplicitAny": true,
    "strictNullChecks": true,

    "lib": ["es2017", "dom"],
    "module": "commonjs",
    "moduleResolution": "node",
    "target": "es6",
    "sourceMap": true,
    "declaration": true
  }
}
```

2. Write the first code
```sh
touch index.ts
```

3. Start the application
`node_modules\.bin\ts-node index.ts`
or 
Edit `package.json` to have `start: ts-nodex index.ts`
```sh
npm start
```