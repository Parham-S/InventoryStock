const express = require("express");
const routes = require("./routes");
const PORT = 5000;
const app = express();
const morgan = require("morgan");
morgan("dev");
app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.resolve(__dirname, "..", "client", "build")));
}
app.use("/", routes);

if (process.env.NODE_ENV === "production") {
	app.get("*", (request, response) => {
		response.sendFile(
			path.resolve(__dirname, "..", "client", "build", "index.html")
		);
	});
}
