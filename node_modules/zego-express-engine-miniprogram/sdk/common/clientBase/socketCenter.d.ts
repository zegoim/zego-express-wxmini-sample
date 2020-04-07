import { StateCenter } from './stateCenter';
import { ZegoWebSocket } from '../../wechatMini/zego.webSocket';
import { Logger } from '../zego.logger';
export declare class SocketCenter {
    private websocket;
    private logger;
    private stateCenter;
    cmdSeq: number;
    private responseRouters;
    constructor(logger: Logger, stateCenter: StateCenter);
    handlePushKickout(msg: any): void;
    handlePushCustomMsg(msg: any): void;
    handlePushRoomMsg(msg: any): void;
    handlePushUserStateUpdateMsg(msg: any): void;
    handlePushMergeMsg(msg: any): void;
    handlePushTransMsg(msg: any): void;
    handleBigImMsgRsp(msg: any): void;
    handleTransRsp(msg: any): void;
    handleBizChannelRspCallback(msg: any, sendData: {
        success: Function;
        error: Function;
    }): void;
    registerRouter(name: string, callBack: Function): void;
    getSocket(server: string): ZegoWebSocket | WebSocket | null;
    private getHeaderV2;
    private getHeader;
    sendMessage(cmd: string, body: any, success?: Function | null, error?: Function | null): number;
    sendCustomMessage(cmd: string, body: {
        [index: string]: string | number | any[];
    }, success?: Function | null, error?: Function | null): boolean;
    isDisConnect(): boolean;
    closeSocket(): void;
    createSocket(server: string): void;
    openHandler(hander: any): void;
    closeHandler(hander: any): void;
    errorHandler(): void;
    checkResponse(msg: any): boolean;
    responseHandler(): void;
    private handleSendCommandMsgRsp;
    handleRelayRspCallback(msg: {
        [index: string]: any;
    }, sendData: {
        [index: string]: any;
    }): void;
    handleBigImRspCallback(msg: {
        [index: string]: any;
    }, sendData: {
        [index: string]: any;
    }): void;
}
