import { define } from "../utils.js";

const middleware = define.middleware((context) => {
	const {
		request: {
			method,
			url
		}
	} = context;

	console.log(`${method} ${url}`);

	return context.next();
});

export default middleware;
