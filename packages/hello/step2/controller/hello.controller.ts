import { get } from '@loopback/openapi-v2';

export class HelloController {
    @get("/hello")
    greet() {
        return "Hello world!";
    }
}
