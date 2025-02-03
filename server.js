import express from 'express';
import reservationRoutes from './routes/reservationRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(reservationRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
