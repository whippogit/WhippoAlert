import app from "./src/app";
import { mongoConnect } from "./src/database/databs";

const port = process.env.PORT || 4000;

//MongoDB connection
mongoConnect;

app.listen(port, () => console.log("🚀 Server on port", port));
