const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    postNewThought,
    updateThought,
    removeThought,
    createReaction,
    removeReaction
} = require('../../controllers/thoughtControllers.js');

router
    .route('/')
    .get(getAllThoughts)
    .post(postNewThought);
    
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(removeThought);
    
router
    .route('/:thoughtId/reactions')
    .post(createReaction)
    .delete(removeReaction);

module.exports = router;