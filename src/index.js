import app from "./app";
import { mongoConnect } from "./database/databs";

const port = process.env.PORT || 4000;

//MongoDB connection
mongoConnect;

app.listen(port, () => console.log("🚀 Server on port", port));
