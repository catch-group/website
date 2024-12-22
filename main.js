import {
	App,
	fsRoutes,
	staticFiles
} from "fresh";

import { define } from "./utils.js";

const app = new App();

app.use(staticFiles());
// this is the same as the /api/:name route defined via a file. feel free to delete this!
app.get("/api2/:name", (context) => {
	const { name } = context.params;

	return new Response(
		`Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!`
	);
});

await fsRoutes(app, {
	dir: "./",
	loadIsland: (path) => import(`./islands/${path}`),
	loadRoute: (path) => import(`./routes/${path}`)
});

if (import.meta.main) {
	await app.listen();
}

export { app };
