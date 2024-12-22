/** @import { PageProps } from 'fresh' */

/**
 * @param props0 - The root object
 * @param props0.Component - The root object
 * @returns {any}
 * @example
 */
const App = ({ Component }) => (
	<html>
		<head>
			<meta charset="utf-8" />

			<meta content="width=device-width, initial-scale=1.0" name="viewport" />

			<title>Catch Group</title>

			<link href="/style.compiled.css" rel="stylesheet" />
		</head>

		<body>
			<Component />
		</body>
	</html>
);

export default App;
