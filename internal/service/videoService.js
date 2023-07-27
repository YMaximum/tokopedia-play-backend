const Videos = require('../models/videoModel');


class VideoService {
    static getThumbnails() {
        return Videos.find();
    }

    static async addVideo(videoData) {
        const newVideo = new Videos(videoData);
        const savedVideo = await newVideo.save();
        return savedVideo;
    }
}

module.exports = VideoService;