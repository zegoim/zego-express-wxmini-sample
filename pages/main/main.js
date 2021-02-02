import {sharePage} from '../../utils/util' ;;
import { wxp } from '../../app';
Page ({
        
        /**
         * 页面的初始数据
         */
        data: {
                tapTime: new Date (),
                entryInfos: [
                        // {
                        //         icon: '../../resource/interactionLive.png',
                        //         subtitle: '《测试推拉流》',
                        //         title: '测试视频直播',
                        //         navigateTo: '../test/index'
                        // },
                        {
                                icon: '../../resource/interactionLive.png',
                                subtitle: '《基础推拉流》',
                                title: '视频直播',
                                navigateTo: '../base/index'
                        },
                        {
                                icon: '../../resource/interactionLive.png',
                                subtitle: '摄像头、麦克风等',
                                title: '基础演示',
                                navigateTo: '../native/index'
                        },
                        {
                                icon: '../../resource/interactionLive.png',
                                subtitle: '《实时消息》',
                                title: '视频直播',
                                navigateTo: '../message/index'
                        },
                        {
                                icon: '../../resource/interactionLive.png',
                                subtitle: 'CDN',
                                title: '视频直播',
                                navigateTo: '../cdn/index'
                        },
                        {
                                icon: '../../resource/interactionLive.png',
                                subtitle: '混流',
                                title: '视频直播',
                                navigateTo: '../mix/index'
                        },
                        {
                                icon: '../../resource/interactionLive.png',
                                subtitle: '背景音',
                                title: '视频直播',
                                navigateTo: '../bgm/index'
                        },
                        {
                                icon: '../../resource/interactionLive.png',
                                subtitle: '截图',
                                title: '视频直播',
                                navigateTo: '../snapshot/index'
                        },
                        {
                                icon: '../../resource/interactionLive.png',
                                subtitle: '',
                                title: '自定义推拉流',
                                navigateTo: '../customlive/index'
                        },
                        {
                                icon: "../../resource/setting.png",
                                subtitle: '设置APPID',
                                title: "自定义设置",
                                navigateTo: "../setting/index"
                        },
                        {
                                icon: "../../resource/interactionLive.png",
                                subtitle: '多节点',
                                title: "重试",
                                navigateTo: "../multi/index"
                        },
                ]
        },
        
        onEntryTap(e) {
                // if(1) {
                // 防止两次点击操作间隔太快
                let nowTime = new Date ();
                if (nowTime.getTime() - new Date(this.data.tapTime).getTime() < 1000) {
                        return;
                }
                let toUrl = this.data.entryInfos[e.currentTarget.id].navigateTo;
                console.log (toUrl);
                console.log(wxp);
                wxp.navigateTo ({
                        url: toUrl,
                });
                this.setData ({'tapTime': nowTime});

        },
        
        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady() {
                console.log ('onReady');
                // this.authCheck ();
        },
        
        /**
         * 用户点击右上角分享
         */
        onShareAppMessage() {
                console.log ('onShareAppMessage');
                return sharePage ();
        }
});
