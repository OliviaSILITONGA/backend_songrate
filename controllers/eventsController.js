const EventsService = require('../services/eventsservice');

const addComment = async (req, res) => {
  try {
    const { eventId } = req.params;
    const { userId, commentText } = req.body; 
    
    // Validasi dasar
    if (!userId || !commentText) {
      return res.status(400).json({ error: 'UserID and commentText are required.' });
    }

    const updatedEvent = await EventsService.addCommentToEvent(eventId, userId, commentText);

    if (updatedEvent) {
      res.status(201).json({ message: 'Comment added successfully', data: updatedEvent });
    } else {
      res.status(404).json({ error: 'Event not found or failed to add comment' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  addComment,
};