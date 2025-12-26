const express = require('express');
const app = express();
const infoRoutes = require('./routes/infoRoutes');
const dataRoutes = require('./routes/dataRoutes');

app.use(express.json());

app.use('/', infoRoutes);
app.use('/api', dataRoutes);

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});