import { get, param } from '@loopback/openapi-v2';

export class HelloController {
    @get("/hello/{name?}")
    greet(
        @param.path.string("name") name: string
    ) {
        return `Hello ${name || 'world'}`;
    }
}
