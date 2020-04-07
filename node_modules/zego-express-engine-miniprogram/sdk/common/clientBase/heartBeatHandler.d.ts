import { SocketCenter } from './socketCenter';
import { LinkedList, ERRO } from '../zego.entity';
import { StateCenter } from './stateCenter';
import { Logger } from '../zego.logger';
export declare class HeartBeatHandler {
    private logger;
    private socketCenter;
    private stateCenter;
    constructor(logger: Logger, stateCenter: StateCenter, socketCenter: SocketCenter);
    resetHeartbeat(): void;
    hbLogout(err: ERRO): void;
    start(heartbeatInterval: number): void;
    private handleHeartbeatRsp;
    ReliableMessageHandler(msg: any): void;
    private fetchReliableMessage;
    private handleFetchTransRsp;
    private fetchStreamList;
    handleFetchStreamListRsp(msg: any): void;
    fetchUserList(): void;
    updateStreamInfo(streamid: string, cmd: string | number, stream_extra_info?: string, error?: Function): void;
    onUpdateOnlineCount(roomId: string, userCount: number): void;
    onRecvReliableMessage(type: string, seq: number, data: string): void;
    resetCheckMessage(): void;
    private checkSendMessageList;
    protected checkMessageListTimeout(messageList: LinkedList, messageMap: {
        [index: number]: any;
    }): void;
    startCheckMessageTimeout(): void;
}
