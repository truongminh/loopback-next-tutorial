import { Application, ApplicationConfig } from '@loopback/core';
import { RestComponent, RestServer, Route, RestBindings } from '@loopback/rest';

export class RestApplication extends Application {
    constructor() {
        super({
            components: [RestComponent],
            servers: { RestServer }
        });
        this.initialize();
    }

    protected async initialize() {

    }

    async listen(port: number) {
        const server = await this.getServer(RestServer);
        server.bind(RestBindings.PORT).to(port);
        await server.start();
    }

}

import { HelloController } from './controller/hello.controller';
export class HelloApplication extends RestApplication {
    protected async initialize() {
        const server = await this.getServer(RestServer);
        server.controller(HelloController);
    }
}