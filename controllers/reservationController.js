let reservations = [
  { 
    id: 1, 
    clientName: 'John Doe', 
    eventDate: '2025-02-15', 
    eventType: 'Wedding' 
  },

  { 
    id: 2, 
    clientName: 'Jane Smith', 
    eventDate: '2025-02-20', 
    eventType: 'Birthday' 
  }
];

// Função para calcular o próximo ID sequencial
const getNextId = () => {
  const maxId = reservations.reduce((max, reservation) => reservation.id > max ? reservation.id : max, 0);
  return maxId + 1;
};

const getReservations = (req, res) => {
  res.json(reservations);
};

const getReservationById = (req, res) => {
  const reservation = reservations.find(r => r.id == req.params.id);
  if (reservation) {
    res.json(reservation);
  } else {
    res.status(404).json({ error: true, message: 'Reservation not found' });
  }
};

const addReservation = (req, res) => {
  const { clientName, eventDate, eventType } = req.body;
  if (!clientName || !eventDate || !eventType) {
    return res.status(400).json({ error: true, message: 'All fields are required' });
  }

  // Usando a função para pegar o próximo ID sequencial
  const newReservation = { 
    id: getNextId(), 
    clientName, 
    eventDate, 
    eventType 
  };
  
  reservations.push(newReservation);
  res.status(201).json({ message: 'Reservation created successfully', data: newReservation });
};

const updateReservation = (req, res) => {
  const { id } = req.params;
  const reservationIndex = reservations.findIndex(r => r.id == id);
  if (reservationIndex === -1) {
    return res.status(404).json({ error: true, message: 'Reservation not found' });
  }

  const { clientName, eventDate, eventType } = req.body;
  if (!clientName || !eventDate || !eventType) {
    return res.status(400).json({ error: true, message: 'All fields are required' });
  }

  const updatedReservation = { id: parseInt(id), clientName, eventDate, eventType };
  reservations[reservationIndex] = updatedReservation;
  res.json({ message: 'Reservation updated successfully', data: updatedReservation });
};

const deleteReservation = (req, res) => {
  const initialLength = reservations.length;
  reservations = reservations.filter(r => r.id != req.params.id);
  if (initialLength === reservations.length) {
    return res.status(404).json({ error: true, message: 'Reservation not found' });
  }
  res.json({ message: 'Reservation deleted successfully' });
};

export { getReservations, getReservationById, addReservation, updateReservation, deleteReservation };