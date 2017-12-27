import { Application, ApplicationConfig } from '@loopback/core';
import { RestComponent, RestServer, get, param, Route } from '@loopback/rest';

class HelloWorldConstoller {
    @get("/hello/{name}")
    greet( @param.path.string("name") name: string = "World") {
        return `Hello ${name}`;
    }
}

class HelloApplication extends Application {
    constructor() {
        super({
            components: [RestComponent],
            servers: { RestServer }
        });
    }

    async initialize() {
        const server = await this.getServer(RestServer);
        server.api({
            swagger: "2.0",
            info: {
                title: "Hello",
                version: "1.0.0"
            },
            basePath: "/",
            paths: {}
        });
        server.route(new Route("get", "/spec", { responses: {} }, () => {
            return JSON.stringify(server.getApiSpec(), null, 2);
        }));
        server.controller(HelloWorldConstoller);
    }

}

async function main() {
    const app = new HelloApplication();
    await app.initialize();
    await app.start();
    return "Application started";
}

main().then(console.log, console.error);
