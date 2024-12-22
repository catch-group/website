import { define } from "../../utils.js";

const handler = define.handlers({

	/**
	 *
	 * @param context
	 * @example
	 */
	GET(context) {
		const { name } = context.params;

		return new Response(
			`Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!`
		);
	}
});

export { handler };
