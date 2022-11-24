const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    postUser,
    updateSingleUser,
    removeSingleUser,
    addFriendToUser,
    removeFriendFromUser
} = require('../../controllers/userControllers.js');

router
    .route('/')
    .get(getAllUsers)
    .post(postUser);
    
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateSingleUser)
    .delete(removeSingleUser);
    
router
    .route('/:userId/friends/:friendId')
    .post(addFriendToUser)
    .delete(removeFriendFromUser);

module.exports = router;