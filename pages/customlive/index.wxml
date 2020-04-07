<view>
    <view class="tool-wrapper">
        <text>流地址(仅支持rtmp/flv)</text>
        <textarea placeholder="输入流URL" value="{{streamUrl}}" bindinput="inputUrl"></textarea>
        <view class="tool-btns">
            <button bindtap="pushStream" hover-class="none">{{pushStart?'停止推流':'开始推流'}}</button>
            <button bindtap="playStream" hover-class="none">{{playStart?'停止拉流':'开始拉流'}}</button>
            <button bindtap="scanQR" hover-class="none">扫描</button>
            <button bindtap="copy" hover-class="none">复制URL</button>
        </view>
    </view>
    <view class="live-container">
        <live-pusher class="liver" url="{{pushUrl}}" aspect="3:4" mode="RTC" bindstatechange="onPushStateChange" bindnetstatus="onPushNetStateChange" waiting-image="https://storage.zego.im/downloads/pause_publish.png"></live-pusher>
        <live-player class="liver" src="{{playUrl}}" mode="RTC" id="live-player" autoplay="{{true}}" bindstatechange="onPlayStateChange" bindnetstatus="onPlayNetStateChange"></live-player>
    </view>
</view>