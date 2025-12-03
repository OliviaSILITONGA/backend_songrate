const { v4: uuidv4 } = require('uuid');
const Event = require('../models/event');


const addCommentToEvent = async (eventId, userId, commentText) => {
  try {
    const event = await Event.findByPk(eventId);

    if (!event) {
      return null;
    }

    const newComment = {
      id: uuidv4(),
      userId,
      commentText,
      timestamp: new Date()
    };
    
    if (!Array.isArray(event.comments)) {
      event.comments = [];
    }

    event.comments.push(newComment);
    
    await event.save();

    return event;

  } catch (error) {
    console.error('Error adding comment to event:', error);
    throw error;
  }
};

module.exports = {
  addCommentToEvent,
};