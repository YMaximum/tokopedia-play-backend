const VideoService = require('../service/videoService');

class VideoController {
    static async getThumbnails(req, res) {
        try {
            const thumbnails = await VideoService.getThumbnails();
            res.status(200).json(thumbnails);
        }
        catch (e) {
            res.status(500).json({ message: e.message });
        }
    }

    static async addVideo(req, res) {
        try {
            const { videoID, thumbnailUrl } = req.body;
            const newVideo = await VideoService.addVideo(
                {
                    videoID: videoID,
                    thumbnailUrl: thumbnailUrl
                }
            );
            res.status(201).json(newVideo);
        }
        catch (e) {
            res.status(500).json({ message: e.message });
        }
    }
}

module.exports = VideoController;