export declare const ENUM_PUBLISH_STATE_UPDATE: {
    start: number;
    error: number;
    retry: number;
};
export declare const ENUM_PLAY_STATE_UPDATE: {
    start: number;
    error: number;
    retry: number;
    stop: number;
};
export declare const ENUM_RETRY_STATE: {
    didNotStart: number;
    retrying: number;
    finished: number;
};
export declare const getSeq: () => number;
