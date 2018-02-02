## Hello

### Step 0. Initialize project
```sh
npm init
npm install @loopback/core @loopback/rest @loopback/openapi-v2 --save
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

### Step 1. Init the rest application
See `step1/index.ts`
Run step 1:
```sh
npm run step1
```
Check: `curl http://localhost:8000`

### Step 2. Add a new controller
Declare the controller: `step2/hello.controller.ts`
```ts
import { get } from '@loopback/openapi-v2';
export class HelloController {
    @get("/hello")
    greet() {
        return "Hello world!";
    }
}
```
Add the controller to the a new `HelloworldApplication`: 
```ts
import { HelloController } from './controller/hello.controller';
export class HelloApplication extends RestApplication {
    protected async initialize() {
        const server = await this.getServer(RestServer);
        server.controller(HelloController);
    }
}
```

Now, run step 2: `npm run step2`
Check: `curl http://localhost:8000/hello`. The response should be `Hello world`.

### Step 3. Pass paramenters to the controller
Modify the controller: `step3/hello.controller.ts`
```ts
import { get, param } from '@loopback/openapi-v2';

export class HelloController {
    @get("/hello/{name}")
    greet(
        @param.path.string("name") name: string
    ) {
        return `Hello ${name || 'world'}`;
    }
}
```
Now, run step 3: `npm run step3`
Check: `curl http://localhost:8000/hello/tom`. The response should be `Hello tom`.

### Summary
The core of `loopback-next` sits on top of a `context` where all dependencies are registered via some forms of name, especially the class name itself.
The `RestApplication` is actually a `context` with additional methods to serve the purpose of a http server.
There are numerous similar methods that can be added on top the shared `context` to expose the internal services of the application for consumers whose interested protocols vary.
To demonstrate the concept, let us add some more code to enable to `rpc` call. This part of the tutorial is optional. Readers who aren't interested in `rpc` can skip it and go to the `todo` application where we use a more complex set of decorators provided by `loopback-next` to handle api request.
