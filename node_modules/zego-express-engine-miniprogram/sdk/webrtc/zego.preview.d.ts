import { MediaStreamConstraints, ERRO } from '../common/zego.entity';
import { Logger } from '../common/zego.logger';
import { ZegoStreamCenter } from '../common/ZegoStreamCenter';
export declare class ZegoPreview {
    private log;
    logger: Logger;
    localStream: MediaStream | null;
    videoInfo: any;
    mediaStreamConfig: any;
    previewSuc: boolean;
    constructor(log: Logger);
    getMediaStreamConstraints(mediaStreamConfig: any): MediaStreamConstraints;
    startPreview(mediaStreamConfig: any, successCallback: Function, errorCallback: (err: ERRO) => void): void;
    captureStream(localVideo: any): MediaStream | null;
    stopPreview(): void;
    enableMicrophone: (enable: boolean, streamCenter: ZegoStreamCenter) => boolean;
    enableCamera: (enable: boolean, streamCenter: ZegoStreamCenter) => boolean;
}
