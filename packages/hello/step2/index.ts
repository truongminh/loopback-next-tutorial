import { HelloApplication } from './application';
const PORT = 8000;

async function main() {
    const app = new HelloApplication();
    await app.listen(PORT);
    return "Application started on port " + PORT;
}

main().then((message) => {
    console.log(message);
}, e => {
    console.error(e)
});