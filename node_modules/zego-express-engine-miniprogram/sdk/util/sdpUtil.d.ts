import { ZegoVideoCodec } from '../../types';
export declare class SdpUtil {
    static zegoSdp(sdp: string): string;
    static getSDPByVideDecodeType(sdp: string, type: ZegoVideoCodec): string;
}
