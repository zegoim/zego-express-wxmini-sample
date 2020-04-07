import { LinkedList } from './zego.entity';
import { Logger } from './zego.logger';
import { StateCenter } from './clientBase/stateCenter';
export declare class ZegoSignal {
    logger: Logger;
    stateCenter: StateCenter;
    sendDataMap: any;
    sendDataList: LinkedList;
    sendDataCheckOnceCount: number;
    signalSeq: number;
    pushCallback: any;
    sessionInfos: any;
    tryHeartbeatCount: number;
    heartbeatInterval: number;
    sendDataTimeout: number;
    sendDataDropTimeout: number;
    tryConnectCount: number;
    tryConnectTimer: any;
    tryConnectInterval: number;
    state: number;
    tokenType: number;
    browser: {
        name: string;
        version: string;
    };
    platform: string;
    appid: string;
    userid: string;
    token: string;
    connectCallback: Function | null | undefined;
    server: string;
    websocket: WebSocket | null;
    negoInterval: number;
    negoTryCount: number;
    negoTryMaxCount: number;
    globalHeader: {
        [indes: string]: number | string;
    };
    constructor(logger: Logger, stateCenter: StateCenter);
    getBrowserAndVersion(): {
        name: string;
        version: string;
    };
    setSessionInfo(appid: number, userid: string): void;
    onDisconnect(server: any): void;
    onUpdateHeartBeartInterval(interval: any): void;
    private resetConnectTimer;
    private bindWebSocketHandle;
    private resetCheckMessage;
    private handleServerPush;
    private disconnectCallback;
    private updateToken;
    sendMessageWithCallback(cmd: string, seq: number, sessionId: number, body: any, success: any, error: any): void;
    private getHeader;
    connectServer(token: string, serverUrl: string, result?: Function | null): void;
    private startConnectTimer;
    disconnectServer(): void;
    isServerConnected(): boolean;
    createSession(seq: number, type: number, mode: number, streamId: string, strAuthParam: string | undefined, success: Function | null, error: Function | null): void;
    removeSession(sessionId: number): void;
    sendCloseSession(seq: number, sessionId: number, reason: number, success?: Function | null, error?: Function): void;
    private sendMessage;
    handleRespondData(cmd: string, msg: any): void;
    addSession(sessionId: string, token: any): void;
    handlePushData(msg: any): void;
    handlePushResetSessionData(msg: {
        body: {
            cResetType: number;
            session_ids: string | any[];
        };
        header: {
            seq: any;
            cmd: any;
        };
    }): void;
    sendMediaDesc(seq: number, sessionId: number, type: number, desc: {
        sdp: any;
        width?: number;
        height?: number;
        frameRate?: number;
        video_min_kpbs?: number;
        video_max_kpbs?: number;
        audio_kpbs?: number;
        keyframe_intv?: number;
    }, success: Function, error: Function): void;
    sendCandidateInfo(seq: number, sessionId: number, candidateList: string | any[], success: Function | null, error: Function | null): void;
    sendMediaDescAck(seq: number, sessionId: number, result: number): void;
    sendCandidateInfoAck(seq: number, sessionId: number, result: number): void;
    sendCloseSessionAck(seq: number, sessionId: number, result: number): void;
    sendResetSessionAck(seq: number, sessionId: number, result: number): void;
    registerPushCallback(cmd: string, sessionId: number, callback: Function): void;
    unregisterPushCallback(cmd: string, sessionId: number): void;
    checkMessageTimeout(): void;
    sendHeartbeat(): void;
    QualityReport(seq: number, sessionId: number, qualityStat: any, success: Function | null, error: Function | null): void;
    sendStreamStatus(seq: number, sessionId: number, camera: number, microphone: number): void;
    sendBroadcasterStatus(seq: number, sessionId: number, status: 0 | 1): void;
}
