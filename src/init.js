import app from "./app.js";

const PORT = 3000;

const handleListening = () => console.log(`✅ server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);