export class CalcQualityGrade {
    MIN_VIDEO_BITRATE_KBPS = 20;
    //返回值 质量参考
    QualityGrade = {
        Unknown: -1,
        Good: 0,
        Middle: 1,
        Poor: 2
    };
    streamIDList = {};
    constructor() {}
    /**
     使用前先配置：推流音频码率(kbps)和推流帧率
     **/
    addStreamRefer(streamID, audio_kbps, video_fps) {
        if (!streamID) {
            console.error("streamID must be not empty");
            return false;
        }
        if (!audio_kbps || typeof audio_kbps != "number") {
            console.error("audio_kbps must be number");
            return false;
        }
        if (!video_fps || typeof video_fps != "number") {
            console.error("video_fps must be number");
            return false;
        }
        this.streamIDList[streamID] = {
            streamID: streamID,
            audio_kbps: audio_kbps,
            video_fps: video_fps,
            qualityArray: [],
            cannotCalc: true
        }
        return true;
    }
    calcNetQualityGrade(streamID, audio_kbps, video_kbps, fps) {
        if (!this.streamIDList[streamID]) {
            console.error("streamID not exist");
            return false;
        }
        if ((audio_kbps || video_kbps || fps) && this.streamIDList[streamID].cannotCalc) {
            this.streamIDList[streamID].cannotCalc = false
        }
        if (this.streamIDList[streamID].cannotCalc && audio_kbps == 0 && video_kbps == 0 && fps == 0) {
            return false;
        } else {
            let streamItem = this.streamIDList[streamID];
            let quality = this._CalcQualityGrade(streamItem.audio_kbps, streamItem.video_fps, audio_kbps, video_kbps, fps);
            streamItem.qualityArray.push(quality);
            if (streamItem.qualityArray.length > 10) {
                streamItem.qualityArray.shift();
            }
            let qualitySum = this._sumQuality(streamItem.qualityArray)
            return {
                quality: qualitySum,
                qualityArray:streamItem.qualityArray,
                streamID: streamID
            }
        }
    }

    removeStreamRefer(streamID) {
        if (!this.streamIDList[streamID]) {
            console.error("streamID not exist");
            return false;
        } else {
            delete this.streamIDList[streamID];
        }
    }
    _sumQuality(arr) {
        return arr.reduce(function (prev, curr, idx, arr) {
            return prev + curr;
        });
    }
    /**
      网络状态更新时，调用该接口计算网络质量等级
     audio_kbps: 实时音频码率(kbps)
     fps: 实时视频帧率
     **/
    _CalcQualityGrade(target_audio_kbps_, target_video_fps_, audio_kbps, video_kbps, fps) {
        if (!target_audio_kbps_ && !target_video_fps_) {
            return this.QualityGrade.Unknown;
        }
        let aGrade = this.QualityGrade.Unknown;
        let vGrade = this.QualityGrade.Unknown;
        let grade = this.QualityGrade.Unknown;

        //音频等级计算
        if (target_audio_kbps_) {
            let a_diff_kbps = Math.abs(audio_kbps - target_audio_kbps_);
            if (a_diff_kbps <= target_audio_kbps_ * 0.15) {
                aGrade = this.QualityGrade.Good;
            } else if (a_diff_kbps <= target_audio_kbps_ * 0.4) {
                aGrade = this.QualityGrade.Middle;
            } else {
                aGrade = this.QualityGrade.Poor;
            }
        }

        //视频等级计算
        if (target_video_fps_) {
            debugger
            let v_diff_fps = Math.abs(fps - target_video_fps_);
            if (v_diff_fps <= target_video_fps_ * 1 / 3) {
                vGrade = this.QualityGrade.Good;
            } else if (v_diff_fps <= target_video_fps_ * 7 / 15) {
                vGrade = this.QualityGrade.Middle;
            } else {
                vGrade = this.QualityGrade.Poor;
            }
        }
        //如果音视频都是有配置，默认取两者计算小值作为结果(视频帧率为0且音频码率估值较高，视作推流端禁止摄像头,以音频结果为准)
        if (aGrade != this.QualityGrade.Unknown && vGrade != this.QualityGrade.Unknown) {
            let a_diff_ratio = Math.abs(audio_kbps - target_audio_kbps_) / target_audio_kbps_;
            if (a_diff_ratio <= 0.15 && video_kbps < this.MIN_VIDEO_BITRATE_KBPS) {
                grade = aGrade;
            } else {
                grade = Math.max(aGrade, vGrade);
            }
        } else if (aGrade != this.QualityGrade.Unknown) {
            grade = aGrade;
        } else if (vGrade != this.QualityGrade.Unknown) {
            grade = vGrade;
        }
        return grade;
    }
}