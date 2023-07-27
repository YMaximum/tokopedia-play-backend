const Comments = require('../models/commentModel');

class CommentService {
    static getComments(videoID) {
        return Comments.find({videoID: videoID});
    }

    static async addComment(commentData) {
        const newComment = new Comments(commentData);
        const savedComment = await newComment.save();
        return savedComment;
    }
}

module.exports = CommentService;