import {
        sharePage
} from '../../utils/util';
import {
        wxp
} from '../../app';
Page({
        data: {
                streamUrl: '',
                pushStart: false,
                pushUrl: '',
                pushContext: null,
                playStart: false,
                playUrl: '',
                playContext: null,
                canShow: -1,
                roomUserList: []
        },
        onShareAppMessage() {
                return sharePage();
        },
        inputUrl(e) {
                this.setData({
                        streamUrl: e.detail.value
                });
        },
        async scanQR() {
                try {
                        const {
                                result,
                                scanType
                        } = await wxp.scanCode();
                        if (scanType === 'QR_CODE') {
                                this.setData({
                                        streamUrl: result
                                });
                        } else {
                                console.error('扫描的不是二维码');
                        }
                } catch (err) {
                        console.error('扫码失败：', err);
                }
        },
        async copy() {
                try {
                        await wxp.setClipboardData({
                                data: this.data.streamUrl
                        });
                        const clipboardData = await wxp.getClipboardData();
                        console.log('copy success, clipboardData: ', clipboardData);
                } catch (err) {
                        console.error('复制失败：', err);
                }
        },
        pushStream() {
                this.checkUrl(this.data.streamUrl);
                this.setData({
                        pushStart: !this.data.pushStart
                });
                if (this.data.pushStart) {
                        this.setData({
                                pushUrl: this.data.streamUrl,
                                pushContext: wx.createLivePusherContext()
                        }, () => {
                                this.data.pushContext.start();
                        });
                } else {
                        this.data.pushContext.stop();
                        this.setData({
                                pushUrl: ''
                        });

                }
        },
        playStream() {
                this.checkUrl(this.data.streamUrl);
                this.setData({
                        playStart: !this.data.playStart
                });
                if (this.data.playStart) {
                        this.setData({
                                playUrl: this.data.streamUrl,
                                playContext: wx.createLivePlayerContext("live-player")
                        }, () => {
                                this.data.playContext.play();
                        });

                } else {
                        this.data.playContext.stop();
                        this.setData({
                                playUrl: ''
                        });

                }
        },
        checkUrl(url) {
                if (!url) {
                        wxp.showToast({
                                title: '地址不能为空',
                                icon: 'none',
                                duration: 2000
                        });
                        return;
                }
                if (!url.startsWith('rtmp://') && !url.endsWith('.flv')) {
                        wxp.showToast({
                                title: '地址格式不正确',
                                icon: 'none',
                                duration: 2000
                        });
                        return;
                }
        },
        onPushStateChange(e) {
                console.warn('onPushStateChange: ', e.detail.code);
        },
        onPushNetStateChange(e) {
                console.warn('onPushNetStateChange: ', e.detail.info);
        },
        onPlayStateChange(e) {
                console.warn('onPlayStateChange: ', e.detail.code);
        },
        onPlayNetStateChange(e) {
                console.warn('onPlayNetStateChange: ', e.detail.info);
        },
        onPlayAudiovolumenotify(e) {
                // console.log('onPlayAudiovolumenotify', e.detail.volume)
        },
        onLoad() {
                // 监听网络重连，恢复播放状态
                wx.onNetworkStatusChange(res => {
                        if (res.isConnected && this.data.playStart) {
                                this.setData({
                                        playUrl: this.data.streamUrl,
                                }, () => {
                                        this.data.playContext.play();
                                });
                        }
                })
        },
});