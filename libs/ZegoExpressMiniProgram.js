(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sdk/code/zh/zego.client.wechat.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../zego_express_web_rtm/dist/ZegoExpressWebRTM.js":
/*!*********************************************************!*\
  !*** ../zego_express_web_rtm/dist/ZegoExpressWebRTM.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t();else { var r, o; }}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=5)}([function(e,t,o){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.createZegoWebSocket=t.LoggerStateCenter=t.ZegoDataReport=t.ZegoLogger=t.LinkedList=t.ListNode=t.getReportSeq=t.getSeq=t.REPORT_ACTION=t.E_CLIENT_TYPE=t.ENUM_PUBLISH_STATE_NEGO=t.ENUM_PUSH_SIGNAL_SUB_CMD=t.ENUM_SIGNAL_SUB_CMD=t.SERVER_ERROR_CODE=t.ENUM_STREAM_UPDATE_CMD=t.MINIUM_HEARTBEAT_INTERVAL=t.ENUM_NETWORK_STATE=t.ENUM_RUN_STATE=t.MAX_TRANS_DATA_LENGTH=t.MAX_TRANS_TYPE_LENGTH=t.MAX_MIX_TASK_ID_LENGTH=t.MAX_MESSAGE_LENGTH=t.MAX_ROOM_ID_LENGTH=t.MAX_USER_NAME_LENGTH=t.MAX_USER_ID_LENGTH=t.MAX_STREAM_ID_LENGTH=t.MAX_TRY_HEARTBEAT_COUNT=t.SEND_MSG_TIMEOUT=t.SEND_MSG_RESET=t.MAX_TRY_CONNECT_COUNT=t.ENUM_CONNECT_STATE=t.ENUM_SCREEM_RESOLUTION_TYPE=t.ENUM_RESOLUTION_TYPE=t.ENUM_SIGNAL_STATE=t.ERROR_CODES=t.ENUM_REMOTE_TYPE=t.LOG_LEVEL=t.ENUM_LOG_LEVEL=t.ROOMVERSION=t.PROTO_VERSION=void 0,t.PROTO_VERSION="1.5.0",t.ROOMVERSION="V1",function(e){e[e.debug=0]="debug",e[e.info=1]="info",e[e.warn=2]="warn",e[e.error=3]="error",e[e.report=99]="report",e[e.disable=100]="disable"}(t.ENUM_LOG_LEVEL||(t.ENUM_LOG_LEVEL={})),t.LOG_LEVEL={debug:0,info:1,warn:2,error:3,report:99,disable:100},function(e){e[e.disable=0]="disable",e[e.websocket=1]="websocket",e[e.https=2]="https"}(t.ENUM_REMOTE_TYPE||(t.ENUM_REMOTE_TYPE={})),t.ERROR_CODES={ROOM_SESSION_ID_ERR:1000000152,FETCH_TRANS_UNKNOWN_CHANNEL:1000001108,FETCH_TRANS_UNKNOWN_TYPE:1000001109,FETCH_TRANS_WRONG_SEQ:1000001110},function(e){e[e.disconnected=0]="disconnected",e[e.connecting=1]="connecting",e[e.connected=2]="connected"}(t.ENUM_SIGNAL_STATE||(t.ENUM_SIGNAL_STATE={})),t.ENUM_RESOLUTION_TYPE={LOW:{width:320,height:240,frameRate:15,bitRate:300},MEDIUM:{width:640,height:480,frameRate:15,bitRate:800},HIGH:{width:1280,height:720,frameRate:20,bitRate:1500}},t.ENUM_SCREEM_RESOLUTION_TYPE={LOW:{frameRate:20,bitRate:800},MEDIUM:{frameRate:15,bitRate:1200},HIGH:{frameRate:5,bitRate:2e3}},t.ENUM_CONNECT_STATE={disconnect:0,connecting:1,connected:2},t.MAX_TRY_CONNECT_COUNT=1,t.SEND_MSG_RESET=2,t.SEND_MSG_TIMEOUT=1,t.MAX_TRY_HEARTBEAT_COUNT=5,t.MAX_STREAM_ID_LENGTH=256,t.MAX_USER_ID_LENGTH=64,t.MAX_USER_NAME_LENGTH=256,t.MAX_ROOM_ID_LENGTH=128,t.MAX_MESSAGE_LENGTH=1024,t.MAX_MIX_TASK_ID_LENGTH=256,t.MAX_TRANS_TYPE_LENGTH=128,t.MAX_TRANS_DATA_LENGTH=4096,function(e){e[e.logout=0]="logout",e[e.trylogin=1]="trylogin",e[e.login=2]="login"}(t.ENUM_RUN_STATE||(t.ENUM_RUN_STATE={})),function(e){e[e.offline=0]="offline",e[e.online=1]="online"}(t.ENUM_NETWORK_STATE||(t.ENUM_NETWORK_STATE={})),t.MINIUM_HEARTBEAT_INTERVAL=3e3,t.ENUM_STREAM_UPDATE_CMD={added:12001,deleted:12002,updated:12003},t.SERVER_ERROR_CODE=1e4,t.ENUM_SIGNAL_SUB_CMD={none:0,joinLiveRequest:1001,joinLiveResult:1002,joinLiveInvite:1003,joinLiveStop:1004},t.ENUM_PUSH_SIGNAL_SUB_CMD={none:0,pushJoinLiveRequest:11001,pushJoinLiveResult:11002,pushJoinLiveInvite:11003,pushJoinLiveStop:11004},t.ENUM_PUBLISH_STATE_NEGO={stop:0,start:1,waiterAnswer:2,waitingCandidate:3,sendCandidate:4,iceConnected:5,iceDisconnected:6},function(e){e[e.ClientType_None=0]="ClientType_None",e[e.ClientType_H5=1]="ClientType_H5",e[e.ClientType_SmallPragram=2]="ClientType_SmallPragram",e[e.ClientType_Webrtc=3]="ClientType_Webrtc"}(t.E_CLIENT_TYPE||(t.E_CLIENT_TYPE={})),t.REPORT_ACTION={eventStart:"eventStart",eventEndWithMsgInfo:"eventEndWithMsgInfo",addEventMsg:"addEventMsg",addEvent:"addEvent",eventEnd:"eventEnd",addMsgInfo:"addMsgInfo"},t.getSeq=(r=1,function(){return r++}),t.getReportSeq=function(){var e=1;return function(){return e++}}();var s=function(){function e(e,t){void 0===e&&(e=null),void 0===t&&(t=null),this.next=null,this.prev=null,this._id=e,this._data=t}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id?this._id:null},set:function(e){this._id=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"data",{get:function(){return this._data},set:function(e){this._data=e},enumerable:!1,configurable:!0}),e.prototype.hasNext=function(){return this.next&&this.next.id},e.prototype.hasPrev=function(){return this.prev&&this.prev.id},e}();t.ListNode=s;var n=function(){function e(){this.start=new s,this.end=new s,this._idCounter=0,this._numNodes=0,this.start.next=this.end,this.start.prev=null,this.end.prev=this.start,this.end.next=null}return e.prototype.insertBefore=function(e,t){var o=new s(this._idCounter,t);return o.next=e,o.prev=e.prev,e.prev&&(e.prev.next=o),e.prev=o,++this._idCounter,++this._numNodes,o},e.prototype.addLast=function(e){return this.insertBefore(this.end,e)},e.prototype.add=function(e){return this.addLast(e)},e.prototype.getFirst=function(){return 0===this._numNodes?null:this.start.next},e.prototype.getLast=function(){return 0===this._numNodes?null:this.end.prev},e.prototype.size=function(){return this._numNodes},e.prototype.getFromFirst=function(e){var t=0,o=this.start.next;if(e>=0)for(;t<e&&null!==o;)o=o.next,++t;else o=null;if(null===o)throw"Index out of bounds.";return o},e.prototype.get=function(e){return 0===e?this.getFirst():e===this._numNodes-1?this.getLast():this.getFromFirst(e)},e.prototype.remove=function(e){return e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),--this._numNodes,e},e.prototype.removeFirst=function(){var e=null;return this._numNodes>0&&this.start.next&&(e=this.remove(this.start.next)),e},e.prototype.removeLast=function(){var e=null;return this._numNodes>0&&this.end.prev&&(e=this.remove(this.end.prev)),e},e.prototype.removeAll=function(){this.start.next=this.end,this.end.prev=this.start,this._numNodes=0,this._idCounter=0},e.prototype.each=function(e){for(var t=this.start;t.hasNext();)e(t=t.next)},e.prototype.find=function(e){for(var t=this.start,o=!1,r=null;t.hasNext()&&!o;)e(t=t.next)&&(r=t,o=!0);return r},e.prototype.map=function(e){for(var t=this.start,o=[];t.hasNext();)e(t=t.next)&&o.push(t);return o},e.prototype.push=function(e){return this.addLast(e)},e.prototype.unshift=function(e){this._numNodes>0?this.insertBefore(this.start.next,e):this.insertBefore(this.end,e)},e.prototype.pop=function(){return this.removeLast()},e.prototype.shift=function(){return this.removeFirst()},e}();t.LinkedList=n;var i=o(7);Object.defineProperty(t,"ZegoLogger",{enumerable:!0,get:function(){return i.ZegoLogger}}),Object.defineProperty(t,"ZegoDataReport",{enumerable:!0,get:function(){return i.ZegoDataReport}}),Object.defineProperty(t,"LoggerStateCenter",{enumerable:!0,get:function(){return i.LoggerStateCenter}}),Object.defineProperty(t,"createZegoWebSocket",{enumerable:!0,get:function(){return i.createZegoWebSocket}})},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.errorCodeList=void 0,t.errorCodeList={SERVER:{code:0,msg:"liverooom cmd error"},SUCCESS:{code:0,msg:"success."},INIT:{code:2000000001,msg:"init sdk wrong"},NOT_LOGIN:{code:1000002,msg:"not login room"},STREAMID_TOO_LONG:{code:1000014,msg:"stream ID is too long"},STREAM_ID_NULL:{code:1000015,msg:"streamID is empty"},STREAM_ID_INVALID_CHARACTER:{code:1000016,msg:"stream ID contains illegal characters"},NETWORK_BROKEN:{code:1000017,msg:"network is broken"},INPUT_PARAM:{code:1100001,msg:"input parm error."},TIMEOUT:{code:1100002,msg:"network timeout."},SOCKET_CLOSE:{code:1100003,msg:"socket close"},INIT_SDK_WRONG:{code:1101e3,msg:"init sdk wrong"},USER_ID_NULL:{code:1002005,msg:"user ID is empty"},USER_ID_INVALID_CHARACTER:{code:1002006,msg:"user ID contains illegal characters"},USER_ID_TOO_LONG:{code:1002007,msg:"user ID is too long"},USER_NAME_NULL:{code:1002008,msg:"username is empty"},USER_NAME_TOO_LONG:{code:1002010,msg:"username is too long"},ROOM_ID_NULL:{code:1002011,msg:"room ID is empty"},ROOM_ID_INVALID_CHARACTER:{code:1002012,msg:"room ID contains illegal characters"},ROOM_ID_TOO_LONG:{code:1002013,msg:"room ID is too long"},LOGIN_TIMEOUT:{code:1002031,msg:"login timeout"},ROOM_MAX_USER_COUNT:{code:1002034,msg:"users logging into the room exceeds the maximum number"},MULTIPLE_LOGIN_KICKOUT:{code:1002050,msg:"kickout may be the same user ID login other"},ROOM_RETRY_TIMEOUT:{code:1002053,msg:"network is broken and login fail."},MANUAL_KICKOUT:{code:1002055,msg:"server has sent a signal to kick out"},REPEATEDLY_LOGIN:{code:1002056,msg:"user repeatedly login"},ROOM_INNER_ERROR:{code:1002099,msg:"room inner error"},HEARTBEAT_TIMEOUT:{code:1102001,msg:"heartbeat timeout."},PARSE_JSON_ERROR:{code:1102011,msg:"parse json error."},LOGIN_PROCESSING:{code:1102012,msg:"login is processing."},LIVEROMM_REQUEST_ERROR:{code:1102013,msg:"liveroom request error."},ZPUSH_REQUEST_FAIL:{code:1102014,msg:"zpush request fail."},LOGIN_STATE_WRONG:{code:1102015,msg:"user login state is wrong."},TOKEN_ERROR:{code:1102016,msg:"token error"},DIAPATCH_ERROR:{code:1102017,msg:"dispatch error"},TOKEN_EXPIRED:{code:1102018,msg:"token expired"},SUBCMD_ERROR:{code:1102019,msg:"subcmd error."},ZEGO_AUTH_ERROR:{code:1102020,msg:"zego auth error."},BIZ_CHANNEL_ERROR:{code:1102021,msg:"biz channel error."},TRANS_FREQUENTLY:{code:1102022,msg:"trans send frequently"},PUBLISHER_EXTRA_INFO_NULL:{code:1003050,msg:"extra info of publshing stream is null"},PUBLISHER_EXTRA_INFO_TOO_LONG:{code:1003051,msg:"stream extra info is too long"},PUBLISHER_PARAM:{code:1103001,msg:"input parm error"},PUBLISHER_BROWSER_NOT_SUPPORT:{code:1103002,msg:"browser do not support"},PUBLISHER_DISPATCH_FAIL:{code:1103003,msg:"dispatch request error"},PUBLISHER_SCREEN_FAILED:{code:1103010,msg:"screen fail"},ENUMERATE_DEVICES_FAIL:{code:1103011,msg:"enumerate devices fail"},PUBLISHER_DISPATCH_REQUEST_FAIL:{code:1103020,msg:"dispatch request fail"},PUBLISHER_SESSION_REQUEST_FAIL:{code:1103021,msg:"session request fail"},PUBLISHER_CREATE_OFFER_ERROR:{code:1103022,msg:"create offer error"},PUBLISHER_SET_LOCAL_DESC_ERROR:{code:1103023,msg:"setLocalDescription error"},PUBLISHER_MEDIA_DESC_ERROR:{code:1103024,msg:"mediaDesc error"},PUBLISHER_SET_REMOTE_DESC_ERROR:{code:1103025,msg:"other side offer error"},PUBLISHER_CANDIDATE_ERROR:{code:1103026,msg:"candidate error"},PUBLISHER_SESSION_CLOSED:{code:1103027,msg:"server session closed"},PUBLISHER_MEDIA_CONNECTION_ERROR:{code:1103028,msg:"ice connection error"},PUBLISHER_CONSTRAINTS_ERROR:{code:1103029,msg:"constraint error"},PUBLISHER_SERVER_NEGO_TIMEOUT:{code:1103030,msg:"negotiation timeout"},PUBLISH_NOT_PUBLISH:{code:1103040,msg:"publisher not found"},PUBLISH_DEVICE_OUT_ERR:{code:1103041,msg:"device change "},PUBLISH_SCREEN_CANCELED:{code:1103042,msg:"screen canceled"},PUBLISH_SCREEN_NOT_SUPPORT:{code:1103043,msg:"screen not support"},PUBLISH_NO_PREVIEW:{code:1103044,msg:"stream is not from zego"},VIDEO_DEVICE_FALSE:{code:1103045,msg:"video is false"},AUDIO_DEVICE_FALSE:{code:1103046,msg:"audio is false"},TRACK_NOT_FOUND:{code:1103047,msg:"track is not found"},DEVICE_NOT_FOUND:{code:1103048,msg:"device is not found"},PLAYER_PARAM:{code:1104001,msg:"input parm error"},PLAYER_DISPATCH_REQUEST_FAIL:{code:1104020,msg:"dispatch request fail"},PLAYER_SESSION_REQUEST_FAIL:{code:1104021,msg:"session request fail"},PLAYER_CREATE_OFFER_ERROR:{code:1104022,msg:"create offer error"},PLAYER_SET_LOCAL_DESC_ERROR:{code:1104023,msg:"setLocalDescription error"},PLAYER_MEDIA_DESC_ERROR:{code:1104024,msg:"mediaDesc error"},PLAYER_SET_REMOTE_DESC_ERROR:{code:1104025,msg:"other side offer error"},PLAYER_CANDIDATE_ERROR:{code:1104026,msg:"candidate error"},PLAYER_SESSION_CLOSED:{code:1104027,msg:"server session closed"},PLAYER_MEDIA_CONNECTION_ERROR:{code:1104028,msg:"ice connection error"},PLAYER_SERVER_NEGO_TIMEOUT:{code:1104030,msg:"negotiation timeout"},MIXER_NO_SERVICES:{code:1005e3,msg:"no mix stream service"},MIXER_TASK_ID_NULL:{code:1005001,msg:"mixer task is null"},MIXER_TASK_ID_TOO_LONG:{code:1005002,msg:"task ID is too long"},MIXER_TASK_ID_INVALID_CHARACTER:{code:1005003,msg:"task ID contains illegal characters"},MIXER_NO_OUTPUT_TARGET:{code:1005005,msg:"task configuration does not specify output"},MIXER_OUTPUT_TARGET_INVALID:{code:1005006,msg:"stream output target is incorrect"},MIXER_START_REQUEST_ERROR:{code:1005010,msg:"start mixer task fail, possibly due to network reasons"},MIXER_STOP_REQUEST_ERROR:{code:1005011,msg:"stop mixer task fail, possibly due to network reasons"},MIXER_NOT_OWNER_STOPMIXER:{code:1005012,msg:" maxed task must be stopped by the start user of the task"},MIXER_INPUTLIST_NULL:{code:1005020,msg:"Mixed stream task input list is null"},MIXER_OUTPUTLIST_NULL:{code:1005021,msg:"Mixed stream task output list is null"},MIXER_VIDEO_CONFIG_INVALID:{code:1005023,msg:"invalid mixed stream task video configuration"},MIXER_EXCEED_MAX_INPUT_COUNT:{code:1005025,msg:"more than the maximum number of input streams"},MIXER_INPUT_STREAM_NOT_EXISTS:{code:1005026,msg:"Input stream does not exist"},MIXER_INPUT_PARAMETERS_ERROR:{code:1005027,msg:"stream input parameters are wrong"},MIXER_EXCEED_MAX_OUTPUT_COUNT:{code:1005030,msg:"more than the maximum number of output streams"},MIXER_AUTHENTICATION_FAILED:{code:1005050,msg:"mixed stream authentication failed"},MIXER_WATERMARK_NULL:{code:1005061,mag:"input watermark is null"},MIXER_WATERMARK_PARAMETERS_ERROR:{code:1005062,msg:"input watermark parameter is wrong"},MIXER_WATERMARK_URL_INVALID:{code:1005063,msg:"illegal input watermark URL"},MIXER_BACKGROUND_IMAGE_URL_INVALID:{code:1005067,msg:"illegal input background image URL"},MIXER_INNER_ERROR:{code:1005099,msg:"mixed stream internal error"},DEVICE_ERROR_TYPE_UNPLUGGED:{code:1006006,msg:"the device is unplugged"},IM_CONTENT_NULL:{code:1009001,msg:"message content is empty"},IM_CONTENT_TOO_LONG:{code:1009002,msg:"message content is too long"},IM_SEND_FAILED:{code:1009010,msg:"failed to send message"},FREQ_LIMITED:{code:1109001,msg:"frequency limited."}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ZEGO_RTM_ACTION=void 0,function(e){e.ZEGOEXPRESSWEBRTM_CONSTRUCTOR="zm.0",e.ZEGOEXPRESSWEBRTM_BIND_WINDOW_LISTENER="zm.wl",e.ZEGOEXPRESSWEBRTM_SET_LOG_CONFIG="zm.slf",e.ZEGOEXPRESSWEBRTM_SET_DEBUG_VERBOSE="zm.sdv",e.ZEGOEXPRESSWEBRTM_LOGIN_ROOM="zm.lg",e.ZEGOEXPRESSWEBRTM_LOGOUT_ROOM="zm.lo",e.ZEGOEXPRESSWEBRTM_SEND_CUSTOM="zm.scc",e.ZEGOEXPRESSWEBRTM_SEND_BCM="zm.sbcm",e.ZEGOEXPRESSWEBRTM_SEND_RLM="zm.srlm",e.ZEGOEXPRESSWEBRTM_SEND_BRM="zm.sbrm",e.ZEGOEXPRESSWEBRTM_SEND_RAM="zm.sram",e.ZEGOEXPRESSWEBRTM_ON="zm.on",e.ZEGOEXPRESSWEBRTM_OFF="zm.off",e.ROOM_LOGIN_ROOM="zm.rm.lg",e.ROOM_TRY_LOGIN="zm.rm.tl",e.ROOM_OPEN_HANDLER="zm.rm.op",e.ROOM_HANDLE_LOGINRSP="zm.rm.lgr",e.ROOM_CLOSEHANDLER="zm.rm.clh",e.ROOM_LOGOUT="zm.rm.lo",e.ROOM_RESET_ROOM="zm.rm.rr",e.ROOM_DISCONNECT="zm.rm.dcn",e.ROOM_KICK_OUT="zm.rm.kco",e.ROOM_STATUS_CALLBACK="zm.rm.scb",e.HEARTBEAT_START="zm.hb.st",e.HEARTBEAT_HEARTBEAT_RSP="zm.hb.rsp",e.HEARTBEAT_RESET="zm.hb.rst",e.SERVICE_PUSH="zm.sv.ps",e.SERVICE_SEND="zm.sv.sd",e.USER_LOGIN_RSP="zm.us.lgr",e.USER_FETCH_USER="zm.us.ftu",e.USER_FETCH_USER_RSP="zm.us.urp",e.USER_USER_PUSH="zm.us.uph",e.USER_MERGE_SEQ="zm.us.mg",e.USER_MERGE_TIMEOUT="zm.us.mto",e.USER_MERGE="zm.us.mg",e.USER_HB_PATCH="zm.us.pt",e.MESSAGE_SEND_RELIABLE="zm.msg.sdr",e.MESSAGE_FETCH_RELIABLE="zm.msg.frm",e.MESSAGE_RELIABLE_RSP="zm.msg.rlr",e.MESSAGE_RELIABLE_PUSH="zm.msg.rps",e.MESSAGE_SEND_ROOM_MSG="zm.msg.srm",e.MESSAGE_SEND_CUSTOM_MSG="zm.msg.scm",e.MESSAGE_SEND_BIG_MSG="zm.msg.sbm",e.MESSAGE_BIG_MSG_PUSH="zm.msg.bps",e.MESSAGE_SEND_RELAY_MSG="zm.msg.slm",e.LIVE_SEND_SIGNAL="zm.lv.ssg",e.LIVE_RESPOND_JOIN_LIVE="zm.lv.rjl",e.LIVE_PUSH_SIGNAL="zm.lv.pss",e.STATE_ACTION="zm.st.at"}(t.ZEGO_RTM_ACTION||(t.ZEGO_RTM_ACTION={}))},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClientUtil=void 0;var r=o(0),s=o(1),n=function(){function e(){}return e.checkConfigParam=function(e,t,o){return e&&"number"==typeof e&&this.checkInteger(e)?!(!t||"string"!=typeof t&&!Array.isArray(t)||""==t)||(o.error("ccp.0 server must be string or string array and not empty"),!1):(o.error("ccp.0 appid must be positive integer number and not empty"),!1)},e.checkIllegalCharacters=function(e){return/^([0-9a-zA-Z#!$%&()`'+-;<=.>@^_~,\\*])+$/.test(e)&&/^[^:/]*$/g.test(e)},e.isUrl=function(e){return!!(e.startsWith("rtmp://")||e.startsWith("https://")&&e.endsWith(".flv")||e.startsWith("https://")&&e.endsWith(".m3u8"))},e.registerCallback=function(e,t,o){var r,s;t.success&&(r=t.success,o[e+"SuccessCallback"]=r),t.error&&(s=t.error,o[e+"ErrorCallback"]=s)},e.actionErrorCallback=function(e,t){return t[e+"ErrorCallback"]},e.actionSuccessCallback=function(e,t){return t[e+"SuccessCallback"]},e.logReportCallback=function(t,o,r,s){e.registerCallback(t,{success:function(t,s){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];e.dataReportEvent(o,r,t,s,n)}},s)},e.proxyRes=function(t,o,r,s){return{interResolve:function(e){t.uploadReport(o),r(e)},interReject:function(r,n){var i;void 0===n&&(n=""),(i=r.code<2e9&&r.code>1e9?e.decodeServerError(r.code,r.msg):{code:r.code,message:r.msg})&&t.addMsgInfo(o,{error:i.code,message:i.message+n}),t.uploadReport(o),s({errorCode:r.code})}}},e.getServerError=function(e){var t={1:"parse json error.",1001:"login is processing.",1002:"liveroom request error.",1003:"zpush connect fail.",1004:"zpush handshake fail.",1005:"zpush login fail.",1006:"user login state is wrong.",1007:"got no zpush addr",1008:"token error",1009:"dispatch error",1010:"token expired",1011:"token format error",2002:"biz channel error",1e9:"liveroom cmd error, code:"};if(0===e)return s.errorCodeList.SUCCESS;var o=s.errorCodeList.SERVER;return o.code=e,o.msg=e>1e9?t[1e9]+e:t[e]?t[e]+" code:"+e:"unknown error code:"+e,o},e.unregisterCallback=function(e,t){delete t[e+"SuccessCallback"],delete t[e+"ErrorCallback"]},e.decodeServerError=function(e,t){var o={code:-1,message:"server error"};return o.code=e>1e9?e-1e9+52e6:e+2002e6,t&&(o.message=t),o},e.getLiveRoomError=function(e){return e>1e9?{1105:"ROOM_MAX_USER_COUNT",1012:"PUBLISHER_ERROR_REPETITIVE_PUBLISH_STREAM",2002:"ROOM_ERROR_AUTHENTICATION_FAILED",2003:"ROOM_ERROR_LOGIN_TIMEOUT"}[e-1e9]||"":{1:"PARSE_JSON_ERROR",1001:"LOGIN_PROCESSING",1002:"LIVEROMM_REQUEST_ERROR",1003:"ZPUSH_REQUEST_FAIL",1004:"ZPUSH_REQUEST_FAIL",1005:"ZPUSH_REQUEST_FAIL",1006:"LOGIN_STATE_WRONG",1007:"ZPUSH_REQUEST_FAIL",1008:"TOKEN_ERROR",1009:"DIAPATCH_ERROR",1010:"TOKEN_EXPIRED",1011:"TOKEN_ERROR",1012:"SUBCMD_ERROR",1101:"ZEGO_AUTH_ERROR",2001:"BIZ_CHANNEL_ERROR",2002:"BIZ_CHANNEL_ERROR"}[e]||"ROOM_INNER_ERROR"},e.getKickoutError=function(e){var t={code:e,message:"kickout reason = "+e};switch(e){case 1:t.code=63000001,t.message="zpush multiple login kickout",t.name="MULTIPLE_LOGIN_KICKOUT";break;case 2:t.code=63000002,t.message="zpush manual kickout",t.name="MANUAL_KICKOUT";break;case 3:t.code=63000003,t.message="kickout reason = "+e;break;case 4:t.code=63000001,t.message="zpush multiple login kickout",t.name="MULTIPLE_LOGIN_KICKOUT";break;default:t.code=e,t.message="kickout reason = "+e}return t},e.dataReportEvent=function(e,t,o,r,s){switch(o){case"eventStart":e.eventStart(t,r);break;case"eventEndWithMsgInfo":e.eventEndWithMsgInfo(t,r,s[0]);break;case"addEventMsg":e.addEventMsg(t,r,s[0],s[1]);break;case"addEvent":e.addEvent(t,r);break;case"eventEnd":e.eventEnd(t,r);break;case"addMsgInfo":e.addMsgInfo(t,s[0])}},e.isKeepTryLogin=function(e){switch(e){case 1002:case 1003:return!0;default:return!1}},e.mergeUserList=function(e,t,o,r){e.debug("msl.0 call");var s,n=[],i=[];o||(o=[]);for(var a=0;a<o.length;a++){s=!1;for(var g=0;g<t.length;g++)if(o[a].userID===t[g].userID){s=!0;break}s||n.push(o[a])}for(var _=0;_<t.length;_++){s=!1;for(var d=0;d<o.length;d++)if(t[_].userID===o[d].userID){s=!0;break}s||i.push(t[_])}t.splice(0);for(a=0;a<o.length;a++)t.push(t[a]);r(n,i),e.debug("msl.0 call success")},e.checkInteger=function(e,t){return 0==t?"number"==typeof e&&e%1==0&&e>=0:"number"==typeof e&&e%1==0&&e>0},e.checkValidNumber=function(e,t,o){return t=t||1,o=o||1e4,"number"==typeof e&&e%1==0&&e>=t&&e<=o},e.generateRandumNumber=function(e){return parseInt(Math.random()*(e+1)+"",10)},e.uuid=function(e,t){var o,r="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),s=[];if(t=t||r.length,e)for(o=0;o<e;o++)s[o]=r[0|Math.random()*t];else{var n=void 0;for(s[8]=s[13]=s[18]=s[23]="-",s[14]="4",o=0;o<36;o++)s[o]||(n=0|16*Math.random(),s[o]=r[19==o?3&n|8:n])}return s.join("")},e.compareVersion=function(e,t){e=e.split("."),t=t.split(".");for(var o=Math.max(e.length,t.length);e.length<o;)e.push("0");for(;t.length<o;)t.push("0");for(var r=0;r<o;r++){var s=parseInt(e[r]),n=parseInt(t[r]);if(s>n)return 1;if(s<n)return-1}return 0},e.getBrowser=function(){var e=window.navigator.userAgent,t=null!=window.ActiveXObject&&-1!=e.indexOf("MSIE"),o=-1!=e.indexOf("Firefox"),r=null!=window.opr,s=e.indexOf("Chrome")&&window.chrome,n=-1!=e.indexOf("Safari")&&-1!=e.indexOf("Version");return t?"IE":o?"Firefox":r?"Opera":s?"Chrome":n?"Safari":"Unkown"},e.isTestEnv=function(e){return-1!=e.indexOf("wss://wssliveroom-test.zego.im/ws")||-1!=e.indexOf("wss://test2-wsliveroom-api.zego.im/ws")||-1!=e.indexOf("wss://wsliveroom-test.zegocloud.com/ws")||-1!=e.indexOf("wss://wsliveroom-test.zego.im/ws")||-1!=e.indexOf("wss://webliveroom-test.zego.im/ws")||-1!=e.indexOf("wss://webliveroom-test-bak.zego.im/ws")||-1!=e.indexOf("wss://webliveroom-hk-test.zegocloud.com/ws")||-1!=e.indexOf("wss://webliveroom-hk-test-bak.zegocloud.com/ws")},e.getLogLevel=function(e){return r.LOG_LEVEL[e]},e}();t.ClientUtil=n},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ZegoRTMLogEvent=void 0;var r=o(1),s=function(e){return e};t.ZegoRTMLogEvent={kZegoTaskInitSetting:{event:"/sdk/init",error:{kInvalidParamError:r.errorCodeList.INPUT_PARAM},system_info:navigator?navigator.appVersion:""},kZegoTaskSetDebug:{event:"/sdk/set_debug",debug:s},kZegoTaskSetLog:{event:"/sdk/set_log_config",error:{kInvalidParamError:r.errorCodeList.INPUT_PARAM},log_level:function(e){return e},remote_log_level:s,log_url:s},kZegoTaskLoginRoom:{event:"/sdk/login",user_update:s,max_member_count:s,message:s,token:s,error:{ROOM_ID_NULL:r.errorCodeList.ROOM_ID_NULL,INPUT_PARAM:r.errorCodeList.INPUT_PARAM,ROOM_ID_TOO_LONG:r.errorCodeList.ROOM_ID_TOO_LONG,ROOM_ID_INVALID_CHARACTER:r.errorCodeList.ROOM_ID_INVALID_CHARACTER,USER_ID_NULL:r.errorCodeList.USER_ID_NULL,USER_ID_TOO_LONG:r.errorCodeList.USER_ID_TOO_LONG,USER_ID_INVALID_CHARACTER:r.errorCodeList.USER_ID_INVALID_CHARACTER,USER_NAME_NULL:r.errorCodeList.USER_NAME_NULL,USER_NAME_TOO_LONG:r.errorCodeList.USER_NAME_TOO_LONG,REPEATEDLY_LOGIN:r.errorCodeList.REPEATEDLY_LOGIN,LOGIN_TIMEOUT:r.errorCodeList.LOGIN_TIMEOUT,INNER_ERROR:r.errorCodeList.ROOM_INNER_ERROR,NETWORK_BROKEN:r.errorCodeList.NETWORK_BROKEN},subEvent:{create_socket:{event:"create_socket",server:s,try_cnt:s},liveroom_login:{event:"liveroom_login",server:s,respond_info:s}}},kZegoTaskLogoutRoom:{event:"/sdk/logout",error:{INPUT_PARAM:r.errorCodeList.INPUT_PARAM}},kZegoTaskReLoginRoom:{event:"/sdk/relogin",error:{ROOM_ID_NULL:r.errorCodeList.ROOM_ID_NULL,ROOM_DISCONNECT:r.errorCodeList.NETWORK_BROKEN},subEvent:{create_socket:{event:"create_socket",server:s,try_cnt:s},liveroom_login:{event:"liveroom_login",server:s,respond_info:s}}},kZegoTaskKickout:{event:"/sdk/kickout",user_id:s,error:{}},kZegoTaskLiveRoomhHB:{event:"/liveroom/hb",room_sid:s,error:{NOT_LOGIN:r.errorCodeList.NOT_LOGIN,HB_TIMEOUT:r.errorCodeList.TIMEOUT}},kZegoTaskLiveSendRoomBigIM:{event:"/liveroom/send_big_room_message",room_sid:s,error:{INPUT_PARAM:r.errorCodeList.INPUT_PARAM,IM_CONTENT_NULL:r.errorCodeList.IM_CONTENT_NULL,IM_CONTENT_TOO_LONG:r.errorCodeList.IM_CONTENT_TOO_LONG}},kZegoTaskLiveRoomSendCustomCommand:{event:"/liveroom/send_custom_command",room_sid:s,error:{INPUT_PARAM:r.errorCodeList.INPUT_PARAM,IM_CONTENT_NULL:r.errorCodeList.IM_CONTENT_NULL,IM_CONTENT_TOO_LONG:r.errorCodeList.IM_CONTENT_TOO_LONG}},kZegoTaskLiveRoomSendRoomMessage:{event:"/liveroom/send_room_message",room_sid:s,error:{INPUT_PARAM:r.errorCodeList.INPUT_PARAM,IM_CONTENT_NULL:r.errorCodeList.IM_CONTENT_NULL,IM_CONTENT_TOO_LONG:r.errorCodeList.IM_CONTENT_TOO_LONG}},kZegoTaskLiveRoomSendReliableMessage:{event:"/liveroom/send_reliable_message",room_sid:s,error:{INPUT_PARAM:r.errorCodeList.INPUT_PARAM,TRANS_FREQUENTLY:r.errorCodeList.TRANS_FREQUENTLY}},kZegoTaskLiveGetRoomBigIM:{event:"/liveroom/get_big_room_message"},kZegoTaskLiveRoomGetRoomMessage:{event:"/liveroom/get_room_message",room_sid:s},kZegoTaskLiveRoomGetCustomCommand:{event:"/liveroom/get_custom_command"},kZegoTaskLiveRoomGetUserUpdateInfo:{event:"/liveroom/get_user_update_info",user_update_type:s},kZegoListener:{event:"/sdk/listener"}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ZegoDataReport=t.ZegoLogger=t.getSeq=t.getReportSeq=t.ZegoExpressWebRTMEngine=void 0;var r=o(6),s=o(0),n=function(){function e(t,o,n){void 0===n&&(n=0),this.logger=new s.ZegoLogger(n),this.dataReport=new s.ZegoDataReport(this.logger),this.zegoWebRTM=new r.ZegoExpressWebRTM(t,o,this.logger,this.dataReport,e.version,n)}return e.prototype.getVersion=function(){return this.zegoWebRTM.getVersion()},e.prototype.loginRoom=function(e,t,o,r){return this.zegoWebRTM.loginRoom(e,t,o,r)},e.prototype.logoutRoom=function(e){return this.zegoWebRTM.logoutRoom(e)},e.prototype.off=function(e){return this.zegoWebRTM.off(e)},e.prototype.on=function(e,t){return this.zegoWebRTM.on(e,t)},e.prototype.setDebugVerbose=function(e){return this.zegoWebRTM.setDebugVerbose(e)},e.prototype.setLogConfig=function(e){return this.zegoWebRTM.setLogConfig(e)},e.prototype.sendBarrageMessage=function(e,t){return this.zegoWebRTM.sendBarrageMessage(e,t)},e.prototype.sendBroadcastMessage=function(e,t){return this.zegoWebRTM.sendBroadcastMessage(e,t)},e.prototype.sendCustomCommand=function(e,t,o){return this.zegoWebRTM.sendCustomCommand(e,t,o)},e.prototype.setRoomExtraInfo=function(e,t,o){return this.zegoWebRTM.setRoomExtraInfo(e,t,o)},e.version=s.PROTO_VERSION,e}();t.ZegoExpressWebRTMEngine=n;var i=o(0);Object.defineProperty(t,"getReportSeq",{enumerable:!0,get:function(){return i.getReportSeq}}),Object.defineProperty(t,"getSeq",{enumerable:!0,get:function(){return i.getSeq}}),Object.defineProperty(t,"ZegoLogger",{enumerable:!0,get:function(){return i.ZegoLogger}}),Object.defineProperty(t,"ZegoDataReport",{enumerable:!0,get:function(){return i.ZegoDataReport}})},function(e,t,o){"use strict";var r=this&&this.__awaiter||function(e,t,o,r){return new(o||(o=Promise))((function(s,n){function i(e){try{g(r.next(e))}catch(e){n(e)}}function a(e){try{g(r.throw(e))}catch(e){n(e)}}function g(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}g((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var o,r,s,n,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return n={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function a(n){return function(a){return function(n){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,r&&(s=2&n[0]?r.return:n[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return i.label++,{value:n[1],done:!1};case 5:i.label++,r=n[1],n=[0];continue;case 7:n=i.ops.pop(),i.trys.pop();continue;default:if(!(s=i.trys,(s=s.length>0&&s[s.length-1])||6!==n[0]&&2!==n[0])){i=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){i.label=n[1];break}if(6===n[0]&&i.label<s[1]){i.label=s[1],s=n;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(n);break}s[2]&&i.ops.pop(),i.trys.pop();continue}n=t.call(e,i)}catch(e){n=[6,e],r=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.ZegoExpressWebRTM=void 0;var n=o(0),i=o(1),a=o(3),g=o(0),_=o(8),d=o(10),l=o(11),c=o(12),u=o(2),E=o(4),h=function(){function e(e,t,o,r,s,i){this.logger=o,this.dataReport=r,this.version=s,this.stateCenter=new l.StateCenter(this.logger,this.dataReport),this.stateCenter.ENV=i;var _=g.getReportSeq();if(this.dataReport.newReport(_),this.setDebug(t),a.ClientUtil.checkConfigParam(e,t,this.logger)){if(this.stateCenter.appid=e,"string"==typeof t?(this.stateCenter.server=t,this.stateCenter.serverBak=t):Array.isArray(t)&&t.length>0&&(this.stateCenter.server=t[0],this.stateCenter.serverBak=t[1]||t[0]),this.stateCenter.configOK=!0,this.stateCenter.sdKVersion=this.version,this.modules=new c.LiveRoomModules(this.stateCenter,this.logger,this.dataReport),0==i)this.bindWindowListener(),this.logger.info(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_CONSTRUCTOR+"  "+navigator.appVersion),this.stateCenter.networkState=navigator?navigator.onLine?n.ENUM_NETWORK_STATE.online:n.ENUM_NETWORK_STATE.offline:n.ENUM_NETWORK_STATE.online,this.dataReport.addMsgInfo(_,{system_info:E.ZegoRTMLogEvent.kZegoTaskInitSetting.system_info});else if(1==i){this.bindWxListener();try{var d=wx.getSystemInfoSync(),h={brand:d.brand,model:d.model,system:d.system,platform:d.platform,version:d.version,SDKVersion:d.SDKVersion};this.dataReport.addMsgInfo(_,{system_info:h})}catch(e){this.logger.warn(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_CONSTRUCTOR+" get system info error")}}this.logger.setSessionInfo(this.stateCenter.appid,"","","","",this.version)}else this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_CONSTRUCTOR+" init sdk error"),this.dataReport.addMsgInfo(_,E.ZegoRTMLogEvent.kZegoTaskInitSetting.error.kInvalidParamError);this.dataReport.uploadReport(_,E.ZegoRTMLogEvent.kZegoTaskInitSetting.event)}return e.prototype.bindWindowListener=function(){var e=this,t=navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)?"pagehide":"unload";window.addEventListener(t,(function(){e.logger.info(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_BIND_WINDOW_LISTENER+" "+t),e.logoutRoom(e.stateCenter.roomid)})),window.addEventListener("offline",(function(){e.netOffLineHandle()})),window.addEventListener("online",(function(){e.netOnLineHandle()}))},e.prototype.bindWxListener=function(){var e=this;wx.onNetworkStatusChange((function(t){t.isConnected?e.netOnLineHandle():e.netOffLineHandle()}))},e.prototype.netOnLineHandle=function(){this.logger.info(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_BIND_WINDOW_LISTENER+"network is online"),this.stateCenter.networkState=n.ENUM_NETWORK_STATE.online,this.stateCenter.roomTryHandler&&this.modules.service.isDisConnect()?this.stateCenter.roomTryHandler.active():this.stateCenter.roomTryHandler&&(this.stateCenter.roomTryHandler.stopMaxTime(),this.modules.roomHandler.roomStateHandle("CONNECTED",{code:0,msg:""}))},e.prototype.netOffLineHandle=function(){var e=this;this.logger.info(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_BIND_WINDOW_LISTENER+" network is broken"),this.stateCenter.networkState=n.ENUM_NETWORK_STATE.offline,this.stateCenter.roomTryHandler&&(this.stateCenter.roomTryHandler.invalid(),this.stateCenter.roomTryHandler.onactive=function(t,o){e.modules.roomHandler.disconnectedHandle(o)},this.stateCenter.roomTryHandler.startMaxTime(),this.modules.roomHandler.roomStateHandle("CONNECTING",i.errorCodeList.NETWORK_BROKEN))},e.prototype.setLogConfig=function(e){this.logger.info(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SET_LOG_CONFIG+" call");var t=g.getReportSeq();if(this.dataReport.newReport(t),e.logLevel&&["debug","info","warn","error","report","disable"].includes(e.logLevel)&&(this.logger.setLogLevel(e.logLevel),this.dataReport.addMsgInfo(t,{log_level:E.ZegoRTMLogEvent.kZegoTaskSetLog.log_level(e.logLevel)})),e.remoteLogLevel&&["debug","info","warn","error","report","disable"].includes(e.remoteLogLevel)&&(this.logger.setRemoteLogLevel(e.remoteLogLevel),this.dataReport.addMsgInfo(t,{remote_log_level:E.ZegoRTMLogEvent.kZegoTaskSetLog.remote_log_level(e.remoteLogLevel)})),"string"==typeof e.logURL&&(e.logURL.startsWith("wss://")||e.logURL.startsWith("https://")))this.logger.setLogServer(e.logURL),this.dataReport.addMsgInfo(t,{log_url:E.ZegoRTMLogEvent.kZegoTaskSetLog.log_url(e.logURL)}),this.dataReport.uploadReport(t,E.ZegoRTMLogEvent.kZegoTaskSetLog.event);else if(e.logURL)return this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SET_LOG_CONFIG+"log url must be a wss or https url"),this.dataReport.addMsgInfo(t,E.ZegoRTMLogEvent.kZegoTaskSetLog.error.kInvalidParamError),this.dataReport.uploadReport(t,E.ZegoRTMLogEvent.kZegoTaskSetLog.event),!1;return this.logger.info(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SET_LOG_CONFIG+" call success"),!0},e.prototype.setDebugVerbose=function(e){var t=g.getReportSeq();this.dataReport.newReport(t),"boolean"==typeof e&&(this.stateCenter.debug=e,this.stateCenter.debugCustom=!0,this.dataReport.addMsgInfo(t,{debug:E.ZegoRTMLogEvent.kZegoTaskSetDebug.debug(e?"true":"false")})),this.dataReport.uploadReport(t,E.ZegoRTMLogEvent.kZegoTaskSetDebug.event),this.logger.info(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SET_DEBUG_VERBOSE+" call success")},e.prototype.setDebug=function(e){"string"==typeof e&&e.indexOf("wss")>-1?this.stateCenter.debug=a.ClientUtil.isTestEnv(e):Array.isArray(e)&&e.length>0&&e.every((function(e){return"string"==typeof e&&e.indexOf("wss")>-1}))?this.stateCenter.debug=a.ClientUtil.isTestEnv(e[0])||a.ClientUtil.isTestEnv(e[1]):this.logger.info(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_CONSTRUCTOR+" server wrong"),this.stateCenter.testEnvironment=this.stateCenter.debug},e.prototype.loginRoom=function(e,t,o,i){var a=this;return new Promise((function(g,l){return r(a,void 0,void 0,(function(){var r,a,c,h,R=this;return s(this,(function(s){switch(s.label){case 0:return 1!==this.stateCenter.ENV?[3,2]:[4,new Promise((function(e){wx.getNetworkType({success:function(t){R.stateCenter.networkState="none"===t.networkType?n.ENUM_NETWORK_STATE.offline:n.ENUM_NETWORK_STATE.online,e()},fail:function(t){R.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_CONSTRUCTOR+" network "+JSON.stringify(t)),R.stateCenter.networkState=n.ENUM_NETWORK_STATE.online,e()}})}))];case 1:s.sent(),s.label=2;case 2:return r=this.loginReport(g,l,t,i),a=r.interResolve,c=r.interReject,!(i=i||{}).maxMemberCount&&(i.maxMemberCount=0),(h=d.checkParams({roomID:{order:0,value:e,rules:[{name:d.RULE_PARAM_NAME.NOT_EMPTY,error:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.ROOM_ID_NULL},{name:d.RULE_PARAM_NAME.TYPE_STRING,error:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,extMsg:"roomID must be string"},{name:d.RULE_PARAM_NAME.MAX_LENGTH_128,error:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.ROOM_ID_TOO_LONG},{name:d.RULE_PARAM_NAME.ILLEGAL_CHARACTERS,error:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.ROOM_ID_INVALID_CHARACTER}]},token:{order:1,value:t,rules:[{name:d.RULE_PARAM_NAME.NOT_EMPTY,error:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM},{name:d.RULE_PARAM_NAME.TYPE_STRING,error:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM}]},user:{order:2,value:o,rules:[{name:d.RULE_PARAM_NAME.NOT_EMPTY,error:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,extMsg:" param user error."},{name:d.RULE_PARAM_NAME.TYPE_OBJECT,error:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,extMsg:" param user error."}]},"user.userID":{order:3,value:o.userID,rules:[{name:d.RULE_PARAM_NAME.NOT_EMPTY,error:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.USER_ID_NULL,extMsg:" param user error."},{name:d.RULE_PARAM_NAME.TYPE_STRING,error:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,extMsg:" param userID error."},{name:d.RULE_PARAM_NAME.MAX_LENGTH_100,error:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.USER_ID_TOO_LONG},{name:d.RULE_PARAM_NAME.ILLEGAL_CHARACTERS,error:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.USER_ID_INVALID_CHARACTER}]},"user.userName":{order:4,value:o.userName,rules:[{name:d.RULE_PARAM_NAME.NOT_EMPTY,error:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.USER_NAME_NULL},{name:d.RULE_PARAM_NAME.TYPE_STRING,error:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,extMsg:" userName must be string."},{name:d.RULE_PARAM_NAME.MAX_LENGTH_256,error:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.USER_NAME_TOO_LONG}]},config:{order:5,value:i,rules:[{name:d.RULE_PARAM_NAME.NOT_EMPTY,error:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM}]},"config.maxMemberCount":{order:4,value:i.maxMemberCount,rules:[{name:d.RULE_PARAM_NAME.NOT_EMPTY,error:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,extMsg:" maxMemberCount must be integer number."},{name:d.RULE_PARAM_NAME.TYPE_INTEGER,error:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,extMsg:" maxMemberCount must be integer number."}]}},{action:u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGIN_ROOM,logger:this.logger}))!==d.RULE_SUCCESS?(c(h.error,h.extMsg),[2]):(this.stateCenter.runState!==n.ENUM_RUN_STATE.logout&&(this.modules.roomHandler.resetRoom(),this.modules.roomHandler.roomStateHandle("DISCONNECTED",E.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.REPEATEDLY_LOGIN)),this.stateCenter.roomTryHandler||(this.stateCenter.roomTryHandler=new _.RetryRoomHandler(this.logger,this.stateCenter)),this.stateCenter.roomTryHandler.init(this.stateCenter.roomRetryTime),this.stateCenter.roomTryHandler.initRoom(this.modules.roomHandler,e,t,o,this.stateCenter.server,this.stateCenter.serverBak,i),this.stateCenter.roomTryHandler.onactive=function(e,t){e?a(e):c(t)},this.stateCenter.roomTryHandler.active(!0),[2])}}))}))}))},e.prototype.loginReport=function(e,t,o,r){var s=this;0!==this.stateCenter.reportSeqList.login&&(this.dataReport.uploadReport(this.stateCenter.reportSeqList.login),this.stateCenter.reportSeqList.login=0,a.ClientUtil.unregisterCallback(E.ZegoRTMLogEvent.kZegoTaskLoginRoom.event,this.stateCenter.reportList));var n=g.getReportSeq();this.stateCenter.reportSeqList.login=n,this.dataReport.newReport(n,E.ZegoRTMLogEvent.kZegoTaskLoginRoom.event),"string"==typeof o&&this.dataReport.addMsgInfo(n,{token:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.token(o)}),r&&(r.userUpdate&&"boolean"==typeof r.userUpdate&&this.dataReport.addMsgInfo(n,{user_update:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.user_update(r.userUpdate+"")}),r.maxMemberCount&&"number"==typeof r.maxMemberCount&&this.dataReport.addMsgInfo(n,{max_member_count:E.ZegoRTMLogEvent.kZegoTaskLoginRoom.max_member_count(r.maxMemberCount+"")})),a.ClientUtil.logReportCallback(E.ZegoRTMLogEvent.kZegoTaskLoginRoom.event,this.dataReport,n,this.stateCenter.reportList);return{interResolve:function(t){s.dataReport.uploadReport(n),s.stateCenter.reportSeqList.login=0,a.ClientUtil.unregisterCallback(E.ZegoRTMLogEvent.kZegoTaskLoginRoom.event,s.stateCenter.reportList),e(t)},interReject:function(e,o){var r,g;void 0===o&&(o=""),e.code<2e9&&e.code>1e9||e.code<1e6?(r=a.ClientUtil.decodeServerError(e.code,e.msg),g=a.ClientUtil.getLiveRoomError(e.code)):r={code:e.code,message:e.msg},r&&s.dataReport.addMsgInfo(n,{error:r.code,message:r.message+o}),s.dataReport.uploadReport(n),s.stateCenter.reportSeqList.login=0,a.ClientUtil.unregisterCallback(E.ZegoRTMLogEvent.kZegoTaskLoginRoom.event,s.stateCenter.reportList),g&&i.errorCodeList[g]&&(e.code=i.errorCodeList[g].code),e.code&&e.msg&&""!==o?t({code:e.code,msg:e.msg+o}):t(e)}}},e.prototype.logoutRoom=function(e){var t=g.getReportSeq();if(this.dataReport.newReport(t),this.dataReport.addMsgInfo(t,{roomid:e}),void 0===e)e=this.stateCenter.roomid;else{if("string"!=typeof e||""==e)return this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGOUT_ROOM+" roomID must be string and not empty"),this.dataReport.addMsgInfo(t,{error:E.ZegoRTMLogEvent.kZegoTaskLogoutRoom.error.INPUT_PARAM.code,message:E.ZegoRTMLogEvent.kZegoTaskLogoutRoom.error.INPUT_PARAM.msg+" param roomID error"}),void this.dataReport.uploadReport(t,E.ZegoRTMLogEvent.kZegoTaskLogoutRoom.event);if(e!==this.stateCenter.roomid)return this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGOUT_ROOM+" roomID is error"),this.dataReport.addMsgInfo(t,{error:E.ZegoRTMLogEvent.kZegoTaskLogoutRoom.error.INPUT_PARAM.code,message:E.ZegoRTMLogEvent.kZegoTaskLogoutRoom.error.INPUT_PARAM.msg+" param roomID error"}),void this.dataReport.uploadReport(t,E.ZegoRTMLogEvent.kZegoTaskLogoutRoom.event)}this.modules.roomHandler.logout(),this.dataReport.uploadReport(t,E.ZegoRTMLogEvent.kZegoTaskLogoutRoom.event)},e.prototype.sendCustomCommand=function(e,t,o){var r=this;return new Promise((function(s,n){r._sendCustomCommand(e,t,o).then((function(e){s({errorCode:e.errorCode,extendedData:e.extendedData})})).catch((function(e){n(e)}))}))},e.prototype._sendCustomCommand=function(e,t,o){var r=this;return new Promise((function(s,_){var d=g.getReportSeq();r.dataReport.newReport(d,E.ZegoRTMLogEvent.kZegoTaskLiveRoomSendCustomCommand.event),r.dataReport.addMsgInfo(d,{room_sid:E.ZegoRTMLogEvent.kZegoTaskLiveRoomSendCustomCommand.room_sid(r.stateCenter.sessionid)});var l=a.ClientUtil.proxyRes(r.dataReport,d,s,_),c=l.interResolve,h=l.interReject;return"string"!=typeof e||""==e?(r.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM+" roomid must be string and not empty"),void h(i.errorCodeList.INPUT_PARAM," param roomID error")):o instanceof Array&&!o.find((function(e){return"string"!=typeof e}))?"string"!=typeof t&&"object"!=typeof t?(r.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM+" custom content must be a non empty string or object"),void h(E.ZegoRTMLogEvent.kZegoTaskLiveRoomSendCustomCommand.error.INPUT_PARAM," param command error")):"string"==typeof t&&t.length>n.MAX_MESSAGE_LENGTH?(r.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM+" command too long"),void h(E.ZegoRTMLogEvent.kZegoTaskLiveRoomSendCustomCommand.error.IM_CONTENT_TOO_LONG)):void r.modules.messageHandler.sendCustomCommand(o,t,c,h):(r.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM+" dstMembers must be string array"),void h(E.ZegoRTMLogEvent.kZegoTaskLiveRoomSendCustomCommand.error.INPUT_PARAM," param toUserList error"))}))},e.prototype.sendBroadcastMessage=function(e,t){var o=this;return new Promise((function(r,s){o._sendBroadcastMessage(e,t).then((function(e){r({errorCode:e.errorCode,messageID:e.messageID,extendedData:e.extendedData})})).catch((function(e){s(e)}))}))},e.prototype._sendBroadcastMessage=function(e,t,o,r){var s=this;return void 0===o&&(o=1),void 0===r&&(r=1),new Promise((function(i,_){var d=g.getReportSeq();s.dataReport.newReport(d,E.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.event),s.dataReport.addMsgInfo(d,{room_sid:E.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.room_sid(s.stateCenter.sessionid)});var l=a.ClientUtil.proxyRes(s.dataReport,d,i,_),c=l.interResolve,h=l.interReject;return"string"!=typeof e||""==e?(s.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BCM+" roomid must be string and not empty"),void h(E.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.error.INPUT_PARAM," param roomID error")):void 0===t||""==t?(s.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BCM+" message is empty"),void h(E.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.error.IM_CONTENT_NULL)):"string"!=typeof t?(s.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BCM+" message must be string"),void h(E.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.error.INPUT_PARAM," param message error")):t.length>n.MAX_MESSAGE_LENGTH?(s.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BCM+" message too long"),void h(E.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.error.IM_CONTENT_TOO_LONG)):void s.modules.messageHandler.sendRoomMsg(o,r,e,t,c,h)}))},e.prototype.setRoomExtraInfo=function(e,t,o){return this._setRoomExtraInfo(e,t,o)},e.prototype._setRoomExtraInfo=function(e,t,o){var r=this;return new Promise((function(s,i){var _=g.getReportSeq();r.dataReport.newReport(_,E.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.event),r.dataReport.addMsgInfo(_,{room_sid:E.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.room_sid(r.stateCenter.sessionid)});var d=a.ClientUtil.proxyRes(r.dataReport,_,s,i),l=d.interResolve,c=d.interReject;return"string"!=typeof e||""==e?(r.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BCM+" roomid must be string and not empty"),void c(E.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.error.INPUT_PARAM," param roomID error")):t&&"string"==typeof t?t.length>n.MAX_TRANS_TYPE_LENGTH?(r.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_RLM+" type is too long"),void c({errorCode:E.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.error.INPUT_PARAM.code})):o&&"string"==typeof o?o.length>n.MAX_TRANS_DATA_LENGTH?(r.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_RLM+" type is too long"),void c({errorCode:E.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.error.INPUT_PARAM.code})):void r.modules.messageHandler.sendReliableMessage(t,o,l,c):(r.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_RLM+" data must be string"),void c({errorCode:E.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.error.INPUT_PARAM.code})):(r.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_RLM+" type must be string"),void c({errorCode:E.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.error.INPUT_PARAM.code}))}))},e.prototype.sendBarrageMessage=function(e,t){var o=this;return new Promise((function(r,s){o._sendBarrageMessage(e,t).then((function(e){r({errorCode:e.errorCode,messageID:e.messageID,extendedData:e.extendedData})})).catch((function(e){s(e)}))}))},e.prototype._sendBarrageMessage=function(e,t,o,r){var s=this;return void 0===o&&(o=1),void 0===r&&(r=1),new Promise((function(i,_){var d=g.getReportSeq();s.dataReport.newReport(d,E.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.event),s.dataReport.addMsgInfo(d,{room_sid:E.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.room_sid(s.stateCenter.sessionid)});var l=a.ClientUtil.proxyRes(s.dataReport,d,i,_),c=l.interResolve,h=l.interReject;return"string"!=typeof e||""==e?(s.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BRM+"roomid must be string and not empty"),void h(E.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.error.INPUT_PARAM," param roomID error")):void 0===t||""==t?(s.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BRM+" message is empty"),void h(E.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.error.IM_CONTENT_NULL)):"string"!=typeof t?(s.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BRM+" message must be string"),void h(E.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.error.INPUT_PARAM," param message error")):t.length>n.MAX_MESSAGE_LENGTH?(s.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BRM+" message too long"),void h(E.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.error.IM_CONTENT_TOO_LONG)):void s.modules.messageHandler.sendBigRoomMessage(o,r,e,t,c,h)}))},e.prototype.sendRelayMessage=function(e,t,o,r){this.modules.messageHandler.sendRelayMessage(e,t,o,r)},e.prototype.requestJoinLive=function(e,t,o,r){return this.modules.liveHandler.requestJoinLive(e,t,o,r)},e.prototype.inviteJoinLive=function(e,t,o,r){return this.modules.liveHandler.inviteJoinLive(e,t,o,r)},e.prototype.endJoinLive=function(e,t,o){return this.modules.liveHandler.endJoinLive(e,t,o)},e.prototype.respondJoinLive=function(e,t,o,r){return this.modules.liveHandler.respondJoinLive(e,t,o,r)},e.prototype.getVersion=function(){return this.version},e.prototype.setSdkBizVersion=function(e){"string"==typeof e&&""!==e&&(this.stateCenter.bizVersion=e)},e.prototype.setSdkLoginRelateService=function(e){Array.isArray(e)&&e.every((function(e){return"string"==typeof e}))&&(this.stateCenter.relateService=e)},e.prototype.on=function(e,t){return this.stateCenter.listenerList[e]?"function"!=typeof t?(this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_ON+" listener callBack must be funciton"),!1):(-1==this.stateCenter.listenerList[e].indexOf(t)&&this.stateCenter.listenerList[e].push(t),!0):(this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_ON+" event "+e+" no found"),!1)},e.prototype.off=function(e,t){if(!this.stateCenter.listenerList[e])return this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_OFF+" listener no found"),!1;var o=this.stateCenter.listenerList[e];return t?o.splice(o.indexOf(t),1):this.stateCenter.listenerList[e]=[],!0},e.prototype._on=function(e,t){return this.stateCenter.listenerList[e]?"function"!=typeof t?(this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_ON+" listener callBack must be funciton"),!1):(-1==this.stateCenter.listenerList[e].indexOf(t)&&this.stateCenter.listenerList[e].push(t),!0):(this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_ON+" event "+e+" no found"),!1)},e.prototype._off=function(e,t){if(!this.stateCenter.listenerList[e])return this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_OFF+" listener no found"),!1;var o=this.stateCenter.listenerList[e];return t?o.splice(o.indexOf(t),1):this.stateCenter.listenerList[e]=[],!0},e.prototype.isTestEnvironment=function(){return this.stateCenter.testEnvironment},e.prototype.isLogin=function(){return this.stateCenter.isLogin()},e.prototype.getAppID=function(){return this.stateCenter.appid},e.prototype.getUserID=function(){return this.stateCenter.idName},e.prototype.getToken=function(){return this.stateCenter.token},e.prototype.getRoomID=function(){return this.stateCenter.roomid},e.prototype.setRoomCreateFlag=function(e){this.stateCenter.roomCreateFlag=e},e.prototype.setRole=function(e){this.stateCenter.role=e},e.prototype.getSessionId=function(){return this.stateCenter.sessionid},e}();t.ZegoExpressWebRTM=h},function(e,t,o){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=3)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.E_CLIENT_TYPE=t.ENUM_LOG_LEVEL=t.ENUM_REMOTE_TYPE=t.ZEGO_ENV=t.ZEGO_BROWSER_TYPE=void 0,function(e){e[e.IE=0]="IE",e[e.FIREFOX=1]="FIREFOX",e[e.CHROME=2]="CHROME",e[e.SAFARI=3]="SAFARI",e[e.OPERA=4]="OPERA",e[e.WEIXIN=5]="WEIXIN",e[e.WEIXINMINI=6]="WEIXINMINI",e[e.UNKOWN=7]="UNKOWN"}(t.ZEGO_BROWSER_TYPE||(t.ZEGO_BROWSER_TYPE={})),function(e){e[e.BROWSER=0]="BROWSER",e[e.WEIXINMINI=1]="WEIXINMINI"}(t.ZEGO_ENV||(t.ZEGO_ENV={})),function(e){e[e.DISABLE=0]="DISABLE",e[e.WEBSOCKET=1]="WEBSOCKET",e[e.HTTPS=2]="HTTPS"}(t.ENUM_REMOTE_TYPE||(t.ENUM_REMOTE_TYPE={})),t.ENUM_LOG_LEVEL={DEBUG:0,INFO:1,WARN:2,ERROR:3,REPORT:99,DISABLE:100,debug:0,info:1,warn:2,error:3,report:99,disable:100},function(e){e[e.ClientType_None=0]="ClientType_None",e[e.ClientType_H5=1]="ClientType_H5",e[e.ClientType_SmallPragram=2]="ClientType_SmallPragram",e[e.ClientType_Webrtc=3]="ClientType_Webrtc"}(t.E_CLIENT_TYPE||(t.E_CLIENT_TYPE={}))},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoggerStateCenter=void 0;var r=function(){function e(){this._testEnvironment=!0,this._ENV=0,this._debug=!0}return e.getInstance=function(){return e.instance||(e.instance=new e,e.instance.init()),e.instance},e.prototype.init=function(){},Object.defineProperty(e.prototype,"testEnvironment",{get:function(){return this._testEnvironment},set:function(e){this._testEnvironment=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ENV",{get:function(){return this._ENV},set:function(e){this._ENV=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"debug",{get:function(){return this._debug},set:function(e){this._debug=e},enumerable:!1,configurable:!0}),e.instance=new e,e}();t.LoggerStateCenter=r},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createZegoWebSocket=t.ZegoWeiXinMiniWebSocket=void 0;var r=o(0),s=function(){function e(e,t){this.url=e,this.readyState=3,this._websocket=wx.connectSocket({url:e}),this.init()}return e.prototype.init=function(){var e=this;this._websocket&&(this.readyState=0,this._websocket.onOpen((function(t){e.readyState=e._websocket.readyState,"function"==typeof e.onopen&&(e.onopen(t),e._websocket.onClose((function(t){e.readyState=e._websocket.readyState,"function"==typeof e.onclose&&e.onclose(t)})),e._websocket.onMessage((function(t){"function"==typeof e.onmessage&&e.onmessage(t)})))})),this._websocket.onError((function(t){e.readyState=e._websocket.readyState,"function"==typeof e.onerror&&e.onerror(t)})))},e.prototype.onopen=function(e){},e.prototype.onerror=function(e){},e.prototype.onclose=function(e){},e.prototype.onmessage=function(e){},e.prototype.send=function(e){this._websocket&&this._websocket.send({data:e})},e.prototype.close=function(){this._websocket&&this._websocket.close()},e}();t.ZegoWeiXinMiniWebSocket=s,t.createZegoWebSocket=function(e,t){return t===r.ZEGO_ENV.BROWSER?new WebSocket(e):new s(e)}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoggerStateCenter=t.createZegoWebSocket=t.ZegoDataReport=t.ZegoLogger=void 0;var r=o(1);Object.defineProperty(t,"LoggerStateCenter",{enumerable:!0,get:function(){return r.LoggerStateCenter}});var s=o(2);Object.defineProperty(t,"createZegoWebSocket",{enumerable:!0,get:function(){return s.createZegoWebSocket}});var n=o(4);Object.defineProperty(t,"ZegoDataReport",{enumerable:!0,get:function(){return n.ZegoDataReport}});var i=o(5);Object.defineProperty(t,"ZegoLogger",{enumerable:!0,get:function(){return i.ZegoLogger}})},function(e,t,o){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var s in t=arguments[o])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.ZegoDataReport=void 0;var s=function(){function e(e){this.dataStatistics={},this.logger=e}return e.prototype.newReport=function(e,t){this.dataStatistics[e]={event_time:Date.now(),time_consumed:0,seq:e,error:0,message:"success",event:t,events:[]}},e.prototype.addMsgExt=function(e,t){this.dataStatistics[e]?this.dataStatistics[e].msg_ext=t:console.warn(e+" not exist")},e.prototype.addMsgInfo=function(e,t){this.dataStatistics[e]?Object.assign(this.dataStatistics[e],t):console.warn(e+" not exist")},e.prototype.eventStart=function(e,t){this.dataStatistics[e]?null!=this.dataStatistics[e].events?this.dataStatistics[e].events.push({event:t,event_time:Date.now(),time_consumed:0}):this.logger.warn("zd.es.0 no events"):this.logger.warn("zd.es.0 no seq match")},e.prototype.eventEnd=function(e,t,o){if(this.dataStatistics[e]){var r=this.dataStatistics[e].events;if(r&&0!==r.length){for(var s=r.length-1;s>=0;s--)if(r[s].event==t&&0==r[s].time_consumed){r[s].time_consumed=Date.now()-r[s].event_time;break}}else this.logger.info("zd.ee.0 no events")}else this.logger.info("zd.ee.0 no seq match")},e.prototype.eventEndWithMsg=function(e,t,o){if(this.dataStatistics[e]){var s=this.dataStatistics[e].events;if(s){for(var n=s.length-1;n>=0;n--)if(s[n].event==t&&0==s[n].time_consumed){s[n].time_consumed=Date.now()-s[n].event_time,null==s[n].msg_ext&&(s[n].msg_ext={}),s[n].msg_ext=r({},o);break}}else this.logger.warn("zd.ee.0 no events")}else this.logger.warn("zd.ee.0 no seq match")},e.prototype.eventEndWithMsgInfo=function(e,t,o){if(this.dataStatistics[e]){var r=this.dataStatistics[e].events;if(r){for(var s=r.length-1;s>=0;s--)if(r[s].event==t&&0==r[s].time_consumed){r[s].time_consumed=Date.now()-r[s].event_time,Object.assign(r[s],o);break}}else this.logger.warn("zd.ee.0 no events")}else this.logger.warn("zd.ee.0 no seq match")},e.prototype.addEventInfo=function(e,t,o,r){if(this.dataStatistics[e]){var s=this.dataStatistics[e].events;if(null!=s){for(var n=s.length-1;n>=0;n--)if(s[n].event==t&&null!=s[n].time_consumed){null==s[n].msg_ext?s[n].msg_ext={}:s[n].msg_ext&&(s[n].msg_ext[o]=r);break}}else this.logger.warn("zd.aei.0 no events")}else this.logger.warn("zd.aei.0 no seq match")},e.prototype.addEventMsg=function(e,t,o,r){if(this.dataStatistics[e]){var s=this.dataStatistics[e].events;if(null!=s){for(var n=s.length-1;n>=0;n--)if(s[n].event==t){s[n][o]=r;break}}else this.logger.warn("zd.aem.0 no events")}else this.logger.warn("zd.aem.0 no seq match")},e.prototype.addEvent=function(e,t,o){this.dataStatistics[e]?this.dataStatistics[e].events&&(o?this.dataStatistics[e].events.push({event:t,event_time:Date.now(),msg_ext:o}):this.dataStatistics[e].events.push({event:t,event_time:Date.now()})):this.logger.warn("zd.ae.0 no seq match")},e.prototype.uploadReport=function(e,t,o,r){var s=this.dataStatistics[e];null!=s&&(t&&(s.event=t),s.time_consumed=Date.now()-s.event_time,o&&this.addMsgInfo(e,{error:o.code,message:o.message||o.msg+" "+(r||"")}),this.logger.report(s),delete this.dataStatistics[e])},e}();t.ZegoDataReport=s},function(e,t,o){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var s in t=arguments[o])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.ZegoLogger=void 0;var s=o(0),n=o(2),i=o(1),a=o(6),g=function(){function e(e){this.logLevel=s.ENUM_LOG_LEVEL.INFO,this.logRemoteLevel=0,this.websocket=null,this.logUploadTimer=null,this.logUploadInterval=1e4,this.logCache=[],this.logCacheSend=[],this.logCacheMax=100,this.existUserID=!1,this.stateCenter=i.LoggerStateCenter.getInstance(),this.env=e}return e.prototype.setLogLevel=function(e){var t=s.ENUM_LOG_LEVEL[e];return void 0!==t&&(this.logLevel=t,!0)},e.prototype.setRemoteLogLevel=function(e){var t=s.ENUM_LOG_LEVEL[e];return void 0!==t&&(this.logRemoteLevel=t,!0)},e.prototype.setSessionInfo=function(e,t,o,r,s,n){this.appid=e,this.roomid=t,this.sessionid=o,this.userid=r,this.userName=s,this.version=n},e.prototype.report=function(e){var t=this.logReportParamList(s.ENUM_LOG_LEVEL.REPORT,e);this.logLevel!==s.ENUM_LOG_LEVEL.DISABLE&&this.logLevel<=s.ENUM_LOG_LEVEL.REPORT&&console.debug(t),this.RemoteLog(s.ENUM_LOG_LEVEL.REPORT,t,!0)},e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=this.logParamList(s.ENUM_LOG_LEVEL.DEBUG,e.join(""));this.logLevel!==s.ENUM_LOG_LEVEL.DISABLE&&this.logLevel<=s.ENUM_LOG_LEVEL.DEBUG&&console.debug(o),this.log(s.ENUM_LOG_LEVEL.DEBUG,o)},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=this.logParamList(s.ENUM_LOG_LEVEL.INFO,e.join(""));this.logLevel!==s.ENUM_LOG_LEVEL.DISABLE&&this.logLevel<=s.ENUM_LOG_LEVEL.INFO&&console.info(o),this.log(s.ENUM_LOG_LEVEL.INFO,o)},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=this.logParamList(s.ENUM_LOG_LEVEL.WARN,e.join(""));this.logLevel!==s.ENUM_LOG_LEVEL.DISABLE&&this.logLevel<=s.ENUM_LOG_LEVEL.WARN&&console.warn(o),this.log(s.ENUM_LOG_LEVEL.WARN,o)},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=this.logParamList(s.ENUM_LOG_LEVEL.ERROR,e.join(""));this.logLevel!==s.ENUM_LOG_LEVEL.DISABLE&&this.logLevel<=s.ENUM_LOG_LEVEL.ERROR&&(console.error(o),window?this.stateCenter.debug&&window.alert(e.join("").substr(e.join("").indexOf(" ")+1,4500)):wx&&this.stateCenter.debug&&wx.showModal({title:"",content:e.join("").substr(e.join("").indexOf(" ")+1,4500)})),this.log(s.ENUM_LOG_LEVEL.ERROR,o)},e.prototype.log=function(e,t){this.logRemoteLevel!==s.ENUM_LOG_LEVEL.DISABLE&&this.logRemoteLevel<=e&&this.RemoteLog(e,t)},e.prototype.setLogServer=function(e){try{return e.startsWith("wss:")?(this.logType=s.ENUM_REMOTE_TYPE.WEBSOCKET,this.openWebSocketLogServer(e)):e.startsWith("https:")?(this.logType=s.ENUM_REMOTE_TYPE.HTTPS,this.openHttpsLogServer(e)):this.logType=s.ENUM_REMOTE_TYPE.DISABLE,!0}catch(e){return this.error(JSON.stringify(e)),!1}},e.prototype.stopLogServer=function(){this.logType==s.ENUM_REMOTE_TYPE.WEBSOCKET?this.stopWebSocketServer():this.logType==s.ENUM_REMOTE_TYPE.HTTPS&&(this.SendHttpsLog(),this.stopHttpsServer()),this.logType=s.ENUM_REMOTE_TYPE.DISABLE},e.prototype.stopWebSocketServer=function(){this.websocket&&(this.websocket.onclose=null,this.websocket.onerror=null,this.websocket.close(),this.websocket=null)},e.prototype.openHttpsLogServer=function(e){var t=this;this.url=e,e&&(this.stopHttpsServer(),this.logUploadTimer||(this.logUploadTimer=setInterval((function(){t.SendHttpsLog()}),this.logUploadInterval)))},e.prototype.stopHttpsServer=function(){this.logUploadTimer&&(clearInterval(this.logUploadTimer),this.logUploadTimer=null)},e.prototype.RemoteLog=function(e,t,o){if(void 0===o&&(o=!1),""!=this.url)if(this.logType==s.ENUM_REMOTE_TYPE.WEBSOCKET)this.RemoteWebSocketLog(e,t);else if(this.logType==s.ENUM_REMOTE_TYPE.HTTPS)this.RemoteHttpsLog(e,t,o);else if(this.logLevel!==s.ENUM_LOG_LEVEL.DISABLE&&this.logLevel<=e)for(this.logCacheSend.push(t);this.logCacheSend.length>this.logCacheMax;)this.logCacheSend.shift()},e.prototype.RemoteWebSocketLog=function(e,t){if("string"==typeof t&&t.length>4e3)console.info("log over maximum, ignore");else if(null==this.websocket||2==this.websocket.readyState||3==this.websocket.readyState){var o=this.url;this.url="",this.setLogServer(o),this.logCacheSend.length<this.logCacheMax&&this.logCacheSend.push(t)}else if(0==this.websocket.readyState)this.logCacheSend.length<this.logCacheMax&&this.logCacheSend.push(t);else if(1==this.websocket.readyState)if(this.logCacheSend.length>0){for(var r="",s=0;s<this.logCacheSend.length;s++)(r+this.logCacheSend[s]).length>4e3&&(this.websocket.send(r),r=""),r=r+this.logCacheSend[s]+"\n";t=r+t,this.logCacheSend=[],this.websocket.send(t)}else this.websocket.send(t);else console.warn("wrong socket state:"+this.websocket.readyState),this.logCacheSend.length<this.logCacheMax&&this.logCacheSend.push(t)},e.prototype.RemoteHttpsLog=function(e,t,o){this.logCacheSend.push(t),(this.logCacheSend.length>=this.logCacheMax||!0===o)&&this.SendHttpsLog()},e.prototype.logParamList=function(e,t){var o=a.getCurrentTime(),r=[t.substr(0,t.indexOf(" "))||t,t.substr(t.indexOf(" ")+1,4500)||t],s={time:o,level:e,action:r[0],content:r[1],appid:this.appid,roomid:this.roomid,userid:this.userid,userName:this.userName,sessionid:this.sessionid};return JSON.stringify(s)},e.prototype.logReportParamList=function(e,t){var o=a.getCurrentTime();return t=r(r({},t),{time:o,level:e,console:this.env===s.ZEGO_ENV.BROWSER?"rtc":"xcx",appid:this.appid,room_id:this.roomid,roomid:this.roomid,userid:this.userid,id_name:this.userid,userName:this.userName,sessionid:this.sessionid,sdk_version:this.version,test_environment:this.stateCenter.testEnvironment,version:this.version,event_id:this.appid+"_"+this.userid+"_"+t.event_time+"_"+t.seq}),JSON.stringify(t)},e.prototype.openWebSocketLogServer=function(e){if(this.url!=e){if(this.url=e,!e)return;this.stopWebSocketServer(),this.websocket=n.createZegoWebSocket(e,this.env),this.websocket.onopen=function(){},this.websocket.onclose=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];console.warn("onclose   websocket error:",e)},this.websocket.onmessage=function(){},this.websocket.onerror=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];console.warn("open log websocket error:",e)}}},e.prototype.SendHttpsLog=function(){0!=this.logCacheSend.length&&(this.env===s.ZEGO_ENV.BROWSER?this.SendHttpsLogWeb():this.SendHttpsLogWeChatMini())},e.prototype.SendHttpsLogWeb=function(){var e=this,t=this.logCacheSend.join("\n"),o=new XMLHttpRequest;o.onreadystatechange=function(){if(4==o.readyState)if(200==o.status){if(0==o.responseText.length)return;try{var t=JSON.parse(o.responseText).interval;"number"==typeof t&&e.logUploadInterval!==t&&(e.timeInterval=t,e.openHttpsLogServer(e.url))}catch(e){console.log("send result failed "+e)}}else console.log("send failed "+o.status)},o.open("POST",this.url,!0),o.send(t),this.logCacheSend=[]},e.prototype.SendHttpsLogWeChatMini=function(){var e=this;!this.existUserID&&this.userid&&this.logCacheSend.forEach((function(t){Array.isArray(t)&&t.forEach((function(o,r){var s=JSON.parse(o);s&&""==JSON.parse(o).userid?(s.userid=e.userid,s.id_name=e.userid,t[r]=JSON.stringify(s)):e.existUserID=!0}))}));var t=this.logCacheSend.join("\n");wx.request({url:this.url,data:t,method:"POST",success:function(t){if(0!=t.data.length){var o=t&&t.data&&t.data.interval;"number"==typeof o&&e.logUploadInterval!==o&&(e.timeInterval=o,e.openHttpsLogServer(e.url))}},fail:function(e){console.log("send failed "+e.statusCode)}}),this.logCacheSend=[]},e}();t.ZegoLogger=g},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCurrentTime=t.getCurrentEnv=t.getBrowser=void 0;var r=o(0);t.getBrowser=function(){var e=window.navigator.userAgent,t=null!=window.ActiveXObject&&-1!=e.indexOf("MSIE"),o=-1!=e.indexOf("Firefox"),s=null!=window.opr,n=e.indexOf("Chrome")&&window.chrome,i=-1!=e.indexOf("Safari")&&-1!=e.indexOf("Version"),a=e.toLowerCase().match(/MicroMessenger/i)&&"micromessenger"===e.toLowerCase().match(/MicroMessenger/i)[0];return t?r.ZEGO_BROWSER_TYPE.IE:o?r.ZEGO_BROWSER_TYPE.FIREFOX:s?r.ZEGO_BROWSER_TYPE.OPERA:n?r.ZEGO_BROWSER_TYPE.CHROME:i?r.ZEGO_BROWSER_TYPE.SAFARI:a?r.ZEGO_BROWSER_TYPE.WEIXIN:r.ZEGO_BROWSER_TYPE.UNKOWN},t.getCurrentEnv=function(){var e=window.navigator.userAgent;return new Promise((function(t){-1==e.indexOf("MicroMessage")?t(r.ZEGO_ENV.BROWSER):wx.miniProgram.getEnv((function(e){e.miniprogram}))}))};var s=["00","01","02","03","04","05","06","07","08","09"];t.getCurrentTime=function(){var e=new Date;return[e.getFullYear()+"/",(s[e.getMonth()+1]||e.getMonth()+1)+"/",(s[e.getDate()]||e.getDate())+" ",(s[e.getHours()]||e.getHours())+":",(s[e.getMinutes()]||e.getMinutes())+":",s[e.getSeconds()]||e.getSeconds(),"."+e.getTime()%1e3].join("")}}])},function(e,t,o){"use strict";var r,s=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});Object.defineProperty(t,"__esModule",{value:!0}),t.RetryRoomHandler=void 0;var n=o(9),i=o(0),a=o(2),g=o(1),_=function(e){function t(t,o){var r=e.call(this,t,o)||this;return r.logger=t,r.stateCenter=o,r}return s(t,e),t.prototype.initRoom=function(e,t,o,r,s,n,i){this.roomHandler=e,this.roomID=t,this.token=o,this.user=r,this.server=s,this.serverBak=n||s,this.config=i},t.prototype.active=function(e){var t=this;if(this.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM+" retry call"),this.stateCenter.networkState!=i.ENUM_NETWORK_STATE.offline)if(this.retryTimer)this.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM+" has actived, ignore");else if(this.isOverTime)this.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM+" retry over time, stop retry");else{if(1==this.retryActiveCount)this.retryActiveInterval=Math.floor(Math.random()*(1-this.RETRY_START_TIME_INTERVAL)+this.RETRY_START_TIME_INTERVAL);else{var o=Math.pow(2,Math.round(this.retryActiveCount/this.RETRY_CONTINUE_COUNT+1));this.retryActiveInterval=o>this.RETRY_MAX_TIME_INTERVAL?this.RETRY_MAX_TIME_INTERVAL:o}this.retryTimer=setTimeout((function(){t.roomHandler.login(t.retryActiveCount%2==1?t.server:t.serverBak,t.roomID,t.token,t.user,t.config,(function(e){t.handleLoginFinish(e)}),(function(e,o){t.handleLoginFinish(!1,e,o)})),t.retryTimer&&clearTimeout(t.retryTimer),t.retryTimer=null,t.retryActiveCount++}),e?0:1e3*this.retryActiveInterval)}else this.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM+" network is broken, stop retry")},t.prototype.startMaxTime=function(){var e=this;this.maxTimer||(this.maxTimer=setTimeout((function(){e.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM+" over max time "+e.RETRY_MAX_TIME+"s, stop retry"),e.isOverTime=!0,e.roomHandler.resetRoom(),e.stopMaxTime(),e.invalid(),e.onactive(!1,g.errorCodeList.LOGIN_TIMEOUT)}),1e3*this.RETRY_MAX_TIME))},t.prototype.stopMaxTime=function(){this.maxTimer&&clearTimeout(this.maxTimer),this.maxTimer=null},t.prototype.onactive=function(e,t){},t.prototype.handleError=function(e,t){if(this.RETRY_MAX_TIME<3)return!1;if(t){var o=e.code+"";return!["1000002002","1000005030","1000005035","1010","1011","1013","1014","1015","1016","1017","1018","1019","1020","1021","1023"].includes(o)&&(!!["1100040001","1100040100"].includes(o)||this.stateCenter.lastRunState==i.ENUM_RUN_STATE.login&&(this.stateCenter.sessionid="",this.invalid(),!0))}return!0},t.prototype.handleLoginFinish=function(e,t,o){t?this.handleError(t,o)?(!this.maxTimer&&this.startMaxTime(),this.active()):(this.roomHandler.resetRoom(),this.stopMaxTime(),this.invalid(),this.onactive(e,t)):(this.stopMaxTime(),this.invalid(),this.onactive(e,{code:0,msg:""}))},t}(n.TryHandler);t.RetryRoomHandler=_},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TryHandler=void 0;var r=function(){function e(e,t){this.logger=e,this.stateCenter=t,this.RETRY_MAX_TIME=300,this.RETRY_START_TIME_INTERVAL=4,this.RETRY_CONTINUE_COUNT=2,this.RETRY_MAX_TIME_INTERVAL=32,this.retryTimer=null,this.maxTimer=null,this.retryStartTime=0,this.retryActiveCount=1,this.isOverTime=!1}return e.prototype.init=function(e,t,o,r){this.invalid(),this.stopMaxTime(),this.isOverTime=!1,"number"==typeof e&&e<3600&&(this.RETRY_MAX_TIME=e),"number"==typeof t&&(this.RETRY_START_TIME_INTERVAL=t),"number"==typeof o&&(this.RETRY_CONTINUE_COUNT=o),"number"==typeof r&&(this.RETRY_MAX_TIME_INTERVAL=r)},e.prototype.invalid=function(){this.retryTimer&&clearTimeout(this.retryTimer),this.retryTimer=null,this.retryStartTime=0,this.retryActiveCount=1},e}();t.TryHandler=r},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkParams=t.RULE_SUCCESS=t.RULE_PARAM_NAME=void 0;var r=o(3);!function(e){e.NOT_EMPTY="NOT_EMPTY",e.ILLEGAL_CHARACTERS="ILLEGAL_CHARACTERS",e.TYPE_STRING="TYPE_STRING",e.TYPE_INTEGER="TYPE_INTEGER",e.TYPE_OBJECT="TYPE_OBJECT",e.MAX_LENGTH_10="MAX_LENGTH_10",e.MAX_LENGTH_64="MAX_LENGTH_64",e.MAX_LENGTH_100="MAX_LENGTH_100",e.MAX_LENGTH_128="MAX_LENGTH_128",e.MAX_LENGTH_256="MAX_LENGTH_256",e.MAX_LENGTH_1024="MAX_LENGTH_1024"}(t.RULE_PARAM_NAME||(t.RULE_PARAM_NAME={})),t.RULE_SUCCESS={error:{code:0,msg:"suc"}};var s={NOT_EMPTY:function(e,o,r,s,n){return void 0===o||""===o||null===o?(s.error(r+" "+e+" is empty"),n):t.RULE_SUCCESS},ILLEGAL_CHARACTERS:function(e,o,s,n,i){return r.ClientUtil.checkIllegalCharacters(o)?t.RULE_SUCCESS:(n.error(s+" "+e+" contains illegal characters"),i)},TYPE_STRING:function(e,o,r,s,n){return"string"!=typeof o?(s.error(r+" "+e+" must be string"),n):t.RULE_SUCCESS},TYPE_INTEGER:function(e,o,s,n,i){return r.ClientUtil.checkInteger(o,!1)?t.RULE_SUCCESS:(n.error(s+" "+e+"  must be integer number"),i)},TYPE_OBJECT:function(e,o,r,s,n){return o&&"object"==typeof o?t.RULE_SUCCESS:(s.error(r+" "+e+"  must be object"),n)},MAX_LENGTH_10:function(e,o,r,s,n){return o.length>10?(s.error(r+" "+e+" is too long"),n):t.RULE_SUCCESS},MAX_LENGTH_64:function(e,o,r,s,n){return o.length>64?(s.error(r+" "+e+" is too long"),n):t.RULE_SUCCESS},MAX_LENGTH_100:function(e,o,r,s,n){return o.length>100?(s.error(r+" "+e+" is too long"),n):t.RULE_SUCCESS},MAX_LENGTH_128:function(e,o,r,s,n){return o.length>128?(s.error(r+" "+e+" is too long"),n):t.RULE_SUCCESS},MAX_LENGTH_256:function(e,o,r,s,n){return o.length>256?(s.error(r+" "+e+" is too long"),n):t.RULE_SUCCESS},MAX_LENGTH_1024:function(e,o,r,s,n){return o.length>1024?(s.error(r+" "+e+" is too long"),n):t.RULE_SUCCESS}};t.checkParams=function(e,o){var r=[],n={};for(var i in e){n[e[i].order]=e[i],e[i].key=i}for(var a in n)r.push(n[a]);for(var g=0;g<r.length;g++)for(var _=r[g].rules,d=0;d<_.length;d++){var l={key:r[g].key,value:r[g].value,action:o.action,logger:o.logger},c=l.key,u=l.value,E=l.action,h=l.logger;if(_[d].name&&s[_[d].name+""]){var R=s[_[d].name+""](c,u,E,h,_[d]);if(R!=t.RULE_SUCCESS)return R}}return t.RULE_SUCCESS}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StateCenter=void 0;var r=o(0),s=o(2),n=o(4),i=function(){function e(e,t){this.logger=e,this.dataReport=t,this._debug=!1,this._testEnvironment=!1,this._env=0,this.debugCustom=!1,this.third_token="",this.configOK=!1,this.relateService=[],this.role=2,this.maxMemberCount=0,this.roomCreateFlag=1,this.runState=r.ENUM_RUN_STATE.logout,this.lastRunState=r.ENUM_RUN_STATE.logout,this.lastRoomState="DISCONNECTED",this.roomState="DISCONNECTED",this.callbackList={},this.listenerList={roomUserUpdate:[],roomOnlineUserCountUpdate:[],getAnchorInfo:[],_getAnchorInfo:[],IMRecvCustomCommand:[],IMRecvBroadcastMessage:[],recvReliableMessage:[],roomExtraInfoUpdate:[],IMRecvBarrageMessage:[],recvJoinLiveRequest:[],recvInviteJoinLiveRequest:[],recvEndJoinLiveCommand:[],roomLoginResponse:[],HBResponse:[],roomStateUpdate:[],_roomStateUpdate:[],_getTotalUserList:[],_userStateUpdate:[],_recvBigRoomMessage:[],_recvRoomMsg:[],_kickout:[]},this.reportList={},this.reportSeqList={login:0,relogin:0},this.networkState=r.ENUM_NETWORK_STATE.offline,this.roomRetryTime=300,this._sdkVersion="unknown"}return Object.defineProperty(e.prototype,"debug",{get:function(){return this._debug},set:function(e){this._debug=e,r.LoggerStateCenter.getInstance().debug=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"testEnvironment",{get:function(){return this._testEnvironment},set:function(e){this._testEnvironment=e,r.LoggerStateCenter.getInstance().testEnvironment=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ENV",{get:function(){return this._env},set:function(e){this._env=e,r.LoggerStateCenter.getInstance().ENV=e},enumerable:!1,configurable:!0}),e.prototype.isLogin=function(){return this.runState===r.ENUM_RUN_STATE.login},e.prototype.getRequestId=function(){return this.idName+"-"+r.getSeq()},e.prototype.actionListener=function(e){for(var t=this,o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];if(this.listenerList[e]){var a=r.getReportSeq();this.dataReport.newReport(a,n.ZegoRTMLogEvent.kZegoListener.event),this.dataReport.addMsgInfo(a,{listener:e,params:o}),this.dataReport.uploadReport(a)}this.listenerList[e]&&this.listenerList[e].forEach((function(r){try{r.apply(void 0,o)}catch(o){t.logger.error(s.ZEGO_RTM_ACTION.STATE_ACTION+" ",e," ",JSON.stringify(o))}}))},Object.defineProperty(e.prototype,"sdKVersion",{get:function(){return this._sdkVersion},set:function(e){this._sdkVersion=e},enumerable:!1,configurable:!0}),e}();t.StateCenter=i},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LiveRoomModules=void 0;var r=o(13),s=o(15),n=o(16),i=o(17),a=o(18),g=o(19),_=function(){function e(e,t,o){this.stateCenter=e,this.logger=t,this.dataReport=o,this.service=new r.LiveRoomService(this.stateCenter,this.logger),this.roomHandler=new a.RoomHandler(this.logger,this.stateCenter,this.dataReport,this.service),this.heartBeatHandler=new s.HeartBeatHandler(this.logger,this.stateCenter,this.dataReport,this.service),this.userHandler=new g.UserHandler(this.logger,this.stateCenter,this.dataReport,this.service),this.messageHandler=new i.MessageHandler(this.logger,this.stateCenter,this.dataReport,this.service),this.liveHandler=new n.LiveHandler(this.logger,this.stateCenter,this.service),this.init()}return e.prototype.init=function(){this.bindSocketHandler(),this.bindHeatBeatHandler(),this.bindRoomHandler(),this.bindMessageHandler(),this.bindLiveHandler()},e.prototype.bindSocketHandler=function(){var e=this;this.service.handlePushKickout=function(t){e.roomHandler.handlePushKickout(t)},this.service.handlePushUserStateUpdateMsg=function(t){e.userHandler.handlePushUserStateUpdateMsg(t)},this.service.handlePushTransMsg=function(t){e.messageHandler.handlePushTransMsg(t)},this.service.handlePushRoomMsg=function(t){e.messageHandler.handlePushRoomMsg(t)},this.service.handlePushCustomMsg=function(t){e.messageHandler.handlePushCustomMsg(t)},this.service.handlePushMergeMsg=function(t){e.messageHandler.handlePushMergeMsg(t)},this.service.handlePushSignalMsg=function(t){e.liveHandler.handlePushSignalMsg(t)}},e.prototype.bindHeatBeatHandler=function(){var e=this;this.heartBeatHandler.hbLogout=function(t){e.roomHandler.handleHbLogout(t)},this.heartBeatHandler.heartbeatRspNotiFy=function(t){e.messageHandler.loginRsp(t),e.userHandler.patchUserList(t),e.HBResponse(t)}},e.prototype.bindRoomHandler=function(){var e=this;this.roomHandler.loginSuccessCallBack=function(t,o){e.heartBeatHandler.init(o),e.service.startCheck(),e.userHandler.loginRsp(o,t),e.messageHandler.loginRsp(o),e.roomLoginResponse(o)},this.roomHandler.resetRoomCallBack=function(){e.heartBeatHandler.resetHeartbeat(),e.liveHandler.resetLiveHandler(),e.messageHandler.resetMessageInfo(),e.userHandler.resetUserHandler(),e.stateCenter.roomTryHandler&&(e.stateCenter.roomTryHandler.invalid(),e.stateCenter.roomTryHandler.stopMaxTime(),e.stateCenter.roomTryHandler=void 0)}},e.prototype.bindUserHandler=function(){},e.prototype.bindMessageHandler=function(){},e.prototype.bindLiveHandler=function(){},e.prototype.HBResponse=function(e){this.stateCenter.actionListener("HBResponse",e)},e.prototype.roomLoginResponse=function(e){this.stateCenter.actionListener("roomLoginResponse",e)},e}();t.LiveRoomModules=_},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LiveRoomService=void 0;var r=o(0),s=o(14),n=o(2),i=o(1),a=function(){function e(e,t){this.stateCenter=e,this.logger=t,this.service=new s.ZegoSocketService(this.stateCenter.ENV),this.cmdSeq=0,this.responseRouters={}}return e.prototype.checkResponse=function(e){return e.header.appid!==this.stateCenter.appid||e.header.session_id!==this.stateCenter.sessionid||e.header.user_id!==this.stateCenter.userid||e.header.room_id!==this.stateCenter.roomid||this.stateCenter.runState!==r.ENUM_RUN_STATE.login},e.prototype.handleSendCommandMsgRsp=function(e){var t=this,o=this.service.sendCommandMap[e.header.seq];if(null!=o){var r=o._data;delete this.service.sendCommandMap[e.header.seq],this.service.sendCommandList.remove(o),0===e.body.err_code?setTimeout((function(){r&&null!=r.success&&r.success(e,t.cmdSeq)}),0):setTimeout((function(){r&&null!=r.error&&r.error(e,t.cmdSeq)}),0)}},e.prototype.onPush=function(){var e=this;this.service.onMessage=function(t){0!==t.body.err_code?t.body.err_message&&e.logger.error(n.ZEGO_RTM_ACTION.SERVICE_PUSH+" cmd="+t.header.cmd+", err_code="+t.body.err_code+", err_message="+t.body.err_message+" "):e.logger.info(n.ZEGO_RTM_ACTION.SERVICE_PUSH+" cmd="+t.header.cmd+", msg="+JSON.stringify(t)+" "),["login","logout"].indexOf(t.header.cmd)>-1?e.handleSendCommandMsgRsp(t):e.stateCenter.isLogin()?e.checkResponse(t)?e.logger.error(n.ZEGO_RTM_ACTION.SERVICE_PUSH+"  check session fail."):(e.logger.info(n.ZEGO_RTM_ACTION.SERVICE_PUSH+" cmd="+t.header.cmd+",function="+!!e.responseRouters[t.header.cmd]),e.handleSendCommandMsgRsp(t),e.responseRouters[t.header.cmd]&&e.responseRouters[t.header.cmd](t,e.cmdSeq)):e.logger.warn(n.ZEGO_RTM_ACTION.SERVICE_PUSH+"  already logout")}},e.prototype.handlePushKickout=function(e){},e.prototype.handlePushCustomMsg=function(e){},e.prototype.handlePushRoomMsg=function(e){},e.prototype.handlePushUserStateUpdateMsg=function(e){},e.prototype.handlePushMergeMsg=function(e){},e.prototype.handlePushTransMsg=function(e){},e.prototype.handleBigImMsgRsp=function(e){},e.prototype.handlePushSignalMsg=function(e){},e.prototype.closeHandler=function(e){this.service.closeHandler(e)},e.prototype.openHandler=function(e){this.service.openHandler(e)},e.prototype.errorHandler=function(e){this.service.errorHandler(e)},e.prototype.getHeader=function(e){return{Protocol:"V1"===r.ROOMVERSION?"req":"req_v2",cmd:e,appid:this.stateCenter.appid,seq:++this.cmdSeq,user_id:this.stateCenter.userid,session_id:this.stateCenter.sessionid||"",room_id:this.stateCenter.roomid||"",room_session_id:this.stateCenter.roomSessionId||"",biz_version:this.stateCenter.bizVersion||""}},e.prototype.startCheck=function(){this.service.startCheck()},e.prototype.stopCheck=function(){this.service.stopCheck()},e.prototype.isDisConnect=function(){return!this.service||this.service.isDisConnect()},e.prototype.createSocket=function(e){var t=this;this.service.createSocket(e),this.responseRouters=this.responseRouters={push_kickout:function(e){t.handlePushKickout(e)},push_custommsg:function(e){t.handlePushCustomMsg(e)},push_im_chat:function(e){t.handlePushRoomMsg(e)},push_userlist_update:function(e){t.handlePushUserStateUpdateMsg(e)},push_merge_message:function(e){t.handlePushMergeMsg(e)},push_trans:function(e){t.handlePushTransMsg(e)},push_signal:function(e){t.handlePushSignalMsg(e)}}},e.prototype.closeSocket=function(){this.service.closeSocket()},e.prototype.sendMessage=function(e,t,o,r,s,a){if(this.service.isDisConnect())return this.logger.error(n.ZEGO_RTM_ACTION.SERVICE_SEND+" socket is disconnect"),r(i.errorCodeList.SOCKET_CLOSE),0;var g=s||this.getHeader(e);return this.logger.info(n.ZEGO_RTM_ACTION.SERVICE_SEND+" sendMsg:"+JSON.stringify({header:g,body:t})),this.service.sendMessage(g,t,o,r)},e.prototype.on=function(e,t){this.responseRouters[e]=t},e.prototype.login=function(e,t){var o=this.getHeader("login"),s={id_name:this.stateCenter.idName,nick_name:this.stateCenter.nickName,role:this.stateCenter.role,token:this.stateCenter.token,version:this.stateCenter.sdKVersion,room_name:this.stateCenter.roomid,user_state_flag:this.stateCenter.userStateUpdate?1:0,room_create_flag:this.stateCenter.roomCreateFlag,client_type:0===this.stateCenter.ENV?r.E_CLIENT_TYPE.ClientType_Webrtc:r.E_CLIENT_TYPE.ClientType_SmallPragram,third_token:this.stateCenter.third_token,user_count_limit:this.stateCenter.maxMemberCount,relate_service:this.stateCenter.relateService.join()||""};return this.sendMessage("",s,e,t,o)},e.prototype.logout=function(e,t){return this.sendMessage("logout",{reserve:0},e,t)},e.prototype.heartBeat=function(e,t){return this.sendMessage("hb",{reserve:0},e,t)},e.prototype.fetchUserList=function(e,t,o){return this.sendMessage("user_list",e,t,o)},e.prototype.fetchUserListV2=function(e,t,o){return this.sendMessage("user_list_v2",e,t,o)},e.prototype.fetchReliableMessage=function(e,t,o){return this.sendMessage("trans_fetch",e,t,o)},e.prototype.sendReliableMessage=function(e,t,o){return this.sendMessage("trans",e,t,o)},e.prototype.sendRoomMsg=function(e,t,o){return this.sendMessage("im_chat",e,t,o)},e.prototype.sendCustomCommand=function(e,t,o){return this.sendMessage("custommsg",e,t,o)},e.prototype.sendBigRoomMessage=function(e,t,o){return this.sendMessage("bigim_chat",e,t,o)},e.prototype.sendRelayMessage=function(e,t,o){return this.sendMessage("relay",e,t,o)},e.prototype.sendSignalCmd=function(e,t,o){return this.sendMessage("signal",e,t,o)},e}();t.LiveRoomService=a},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ZegoSocketService=void 0;var r=o(0),s=o(1),n=function(){function e(e){this.socket=null,this.sendCommandList=new r.LinkedList,this.sendCommandMap={},this.sendDataCheckOnceCount=100,this.sendDataDropTimeout=1e4,this.sendDataCheckInterval=2e3,this.ENV=e}return e.prototype.createSocket=function(e){this.socket=r.createZegoWebSocket(e,this.ENV)},e.prototype.closeSocket=function(){this.socket&&(this.socket.onclose=null,this.socket.onerror=null,this.socket.close(),this.socket=null)},e.prototype.isDisConnect=function(){return!this.socket||1!==this.socket.readyState},e.prototype.sendMessage=function(e,t,o,r,s){void 0===o&&(o=null),void 0===r&&(r=null),void 0===s&&(s={timeOut:6e3});var n={header:e,body:t},i={data:n,seq:e.seq,deleted:!1,sendTime:Date.parse(new Date+""),timeOut:s.timeOut,success:o,error:r},a=this.sendCommandList.push(i);return this.sendCommandMap[i.seq]=a,this.socket&&this.socket.send(JSON.stringify(n)),e.seq},e.prototype.checkSendMessageList=function(e){for(var t=e.getFirst();null!=t;)e.remove(t),t._data&&t._data.error&&setTimeout((function(){t&&t._data&&t._data.error&&t._data.error(s.errorCodeList.TIMEOUT,t._data.data.header.seq,t._data.data.body.custom_msg)}),0),t=e.getFirst()},e.prototype.checkMessageListTimeout=function(e,t){for(var o=e.getFirst(),r=Date.parse(new Date+""),n=0;!(null==o||o._data&&o._data.sendTime+o._data.timeOut>r||(o._data&&delete t[o._data.data.header.seq],e.remove(o),o._data&&null==o._data.error||o._data&&o._data.sendTime+this.sendDataDropTimeout<r?0:setTimeout((function(){o&&o._data&&o._data.error&&o._data.error(s.errorCodeList.TIMEOUT,o._data.data.header.seq,o._data.data.body.custom_msg)}),0),++n>=this.sendDataCheckOnceCount));)o=e.getFirst()},e.prototype.startCheck=function(){var e=this;this.checkMessageListTimeout(this.sendCommandList,this.sendCommandMap),this.sendDataCheckTimer=setTimeout((function(){e.startCheck()}),this.sendDataCheckInterval)},e.prototype.stopCheck=function(){this.checkSendMessageList(this.sendCommandList),clearTimeout(this.sendDataCheckTimer)},e.prototype.openHandler=function(e){var t=this;this.socket&&(this.socket.onopen=function(o){t.responseHandler(),e(o)})},e.prototype.responseHandler=function(){var e=this;this.socket&&(this.socket.onmessage=function(t){var o="string"==typeof t.data?JSON.parse(t.data):JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t.data)));e.onMessage(o)})},e.prototype.closeHandler=function(e){this.socket&&(this.socket.onclose=function(t){e(t)})},e.prototype.errorHandler=function(e){this.socket&&(this.socket.onerror=e)},e.prototype.onMessage=function(e){},e}();t.ZegoSocketService=n},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HeartBeatHandler=void 0;var r=o(0),s=o(3),n=o(1),i=o(2),a=o(4),g=function(){function e(e,t,o,r){this.logger=e,this.stateCenter=t,this.dataReport=o,this.service=r,this.tryHeartbeatCount=0,this.heartbeatTimer=null,this.loginHeartbeatTimer=null,this.initCount=0}return e.prototype.init=function(e){var t=this,o=e.body.hearbeat_interval<r.MINIUM_HEARTBEAT_INTERVAL?r.MINIUM_HEARTBEAT_INTERVAL:e.body.hearbeat_interval;this.tryHeartbeatCount=0,this.heartbeatTimer&&clearTimeout(this.heartbeatTimer),this.loginHeartbeatTimer=setTimeout((function(){t.start(o)}),o),this.initCount++},e.prototype.start=function(e){var t=this;this.logger.info(i.ZEGO_RTM_ACTION.HEARTBEAT_START+" call");var o=r.getReportSeq();if(this.dataReport.newReport(o,a.ZegoRTMLogEvent.kZegoTaskLiveRoomhHB.event),this.dataReport.addMsgInfo(o,{room_sid:a.ZegoRTMLogEvent.kZegoTaskLiveRoomhHB.room_sid(this.stateCenter.sessionid)}),!this.stateCenter.isLogin())return this.logger.error(i.ZEGO_RTM_ACTION.HEARTBEAT_START+" state error"),this.dataReport.addMsgInfo(o,{error:a.ZegoRTMLogEvent.kZegoTaskLiveRoomhHB.error.NOT_LOGIN.code,message:a.ZegoRTMLogEvent.kZegoTaskLiveRoomhHB.error.NOT_LOGIN.msg}),void this.dataReport.uploadReport(o);if(++this.tryHeartbeatCount>3)return this.logger.error(i.ZEGO_RTM_ACTION.HEARTBEAT_START+" come to try limit"),this.dataReport.addMsgInfo(o,{error:a.ZegoRTMLogEvent.kZegoTaskLiveRoomhHB.error.HB_TIMEOUT.code,message:a.ZegoRTMLogEvent.kZegoTaskLiveRoomhHB.error.HB_TIMEOUT.msg}),this.dataReport.uploadReport(o),void this.hbLogout(n.errorCodeList.HEARTBEAT_TIMEOUT);var g=function(e){if(e.body&&e.body.err_code&&0!==e.body.err_code){var r=s.ClientUtil.decodeServerError(e.body.err_code,e.body.err_message);t.dataReport.addMsgInfo(o,{error:r.code,message:r.message+e.body.err_code})}else e.header&&e.body||t.dataReport.addMsgInfo(o,{error:e.code>0?e.code:n.errorCodeList.ROOM_INNER_ERROR.code,message:e.msg?e.msg:n.errorCodeList.ROOM_INNER_ERROR});t.dataReport.uploadReport(o),t.handleHeartbeatRsp(e)};this.service.heartBeat(g,g),this.heartbeatInterval=e;var _=this.heartbeatInterval;this.initCount>=2?(_=Math.round(Math.random()*(this.heartbeatInterval+1)),this.initCount=1):_=this.heartbeatInterval,this.heartbeatTimer=setTimeout((function(){t.start(t.heartbeatInterval)}),_),this.logger.info(i.ZEGO_RTM_ACTION.HEARTBEAT_START+" call success")},e.prototype.handleHeartbeatRsp=function(e){return e.body&&e.body.err_code&&0!==e.body.err_code?(this.logger.error(i.ZEGO_RTM_ACTION.HEARTBEAT_HEARTBEAT_RSP+" disconnect, server error=",e.body.err_code),e.body.err_code==r.ERROR_CODES.ROOM_SESSION_ID_ERR?void this.hbLogout(n.errorCodeList.HEARTBEAT_TIMEOUT):void this.hbLogout(s.ClientUtil.getServerError(e.body.err_code))):e.header&&e.body?(this.tryHeartbeatCount=0,this.heartbeatInterval=e.body.hearbeat_interval,this.heartbeatInterval<r.MINIUM_HEARTBEAT_INTERVAL&&(this.heartbeatInterval=r.MINIUM_HEARTBEAT_INTERVAL),this.heartbeatRspNotiFy(e),void this.logger.info(i.ZEGO_RTM_ACTION.HEARTBEAT_HEARTBEAT_RSP+" call success")):(this.logger.error(i.ZEGO_RTM_ACTION.HEARTBEAT_HEARTBEAT_RSP+" disconnect, error=",JSON.stringify(e)),void this.hbLogout(e))},e.prototype.heartbeatRspNotiFy=function(e){},e.prototype.hbLogout=function(e){},e.prototype.resetHeartbeat=function(){clearTimeout(this.heartbeatTimer),this.heartbeatTimer=null,clearTimeout(this.loginHeartbeatTimer),this.loginHeartbeatTimer=null,this.tryHeartbeatCount=0,this.initCount=0,this.logger.info(i.ZEGO_RTM_ACTION.HEARTBEAT_RESET+" call success")},e}();t.HeartBeatHandler=g},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LiveHandler=void 0;var r=o(0),s=o(2),n=o(3),i=o(1),a=function(){function e(e,t,o){this.logger=e,this.stateCenter=t,this.service=o,this.joinLiveCallbackMap={},this.joinLiveRequestMap={}}return e.prototype.resetLiveHandler=function(){this.joinLiveCallbackMap={},this.joinLiveRequestMap={}},e.prototype.getSignalCmdContent=function(e,t,o){var r={request_id:e,room_id:this.stateCenter.roomid,from_userid:this.stateCenter.idName,from_username:this.stateCenter.nickName,to_userid:t};return null!=o&&(r.result=o),JSON.stringify(r)},e.prototype.requestJoinLive=function(e,t,o,s){var n=this.stateCenter.getRequestId(),i=this.getSignalCmdContent(n,e);return null!=s&&(this.joinLiveCallbackMap[n]=s,this.sendSignalCmd(r.ENUM_SIGNAL_SUB_CMD.joinLiveRequest,i,e,t,o),!0)},e.prototype.sendSignalCmd=function(e,t,o,r,a){if(this.stateCenter.isLogin()){var g={sub_cmd:e,signal_msg:t,dest_id_name:[o]};this.service.sendSignalCmd(g,(function(e){r&&r(e.header.seq)}),(function(e){var t=i.errorCodeList.ROOM_INNER_ERROR;if(!e.header||!e.body)return e.code&&e.msg&&(t=e),void(a&&a(t,0));a&&a(n.ClientUtil.getServerError(e.body.err_code),e.header.seq)})),this.logger.info(s.ZEGO_RTM_ACTION.LIVE_SEND_SIGNAL+" call success"+e)}else this.logger.error(s.ZEGO_RTM_ACTION.LIVE_SEND_SIGNAL+" state error")},e.prototype.inviteJoinLive=function(e,t,o,s){var n=this.stateCenter.getRequestId(),i=this.getSignalCmdContent(n,e);return null!=s&&(this.joinLiveCallbackMap[n]=s,this.sendSignalCmd(r.ENUM_SIGNAL_SUB_CMD.joinLiveInvite,i,e,t,o),!0)},e.prototype.endJoinLive=function(e,t,o){var s=this.stateCenter.getRequestId(),n=this.getSignalCmdContent(s,e);return this.sendSignalCmd(r.ENUM_SIGNAL_SUB_CMD.joinLiveStop,n,e,t,o),!0},e.prototype.respondJoinLive=function(e,t,o,n){var i=this.joinLiveRequestMap[e];if(!i)return this.logger.info(s.ZEGO_RTM_ACTION.LIVE_RESPOND_JOIN_LIVE+" no dest id name"),!1;var a=0;!0===t&&(a=1);var g=this.getSignalCmdContent(e,i,a);return this.sendSignalCmd(r.ENUM_SIGNAL_SUB_CMD.joinLiveResult,g,i,o,n),delete this.joinLiveRequestMap[e],!0},e.prototype.handlePushSignalMsg=function(e){var t=JSON.parse(e.body.signal_msg);switch(this.logger.info(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL+" hpsm= ",t),e.body.sub_cmd){case r.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveRequest:this.handlePushJoinLiveRequestMsg(t);break;case r.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveResult:this.handlePushJoinLiveResultMsg(t);break;case r.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveInvite:this.handlePushJoinLiveInviteMsg(t);break;case r.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveStop:this.handlePushJoinLiveStopMsg(t)}},e.prototype.handlePushJoinLiveRequestMsg=function(e){var t=e.request_id;if("string"==typeof t){var o=e.from_userid;"string"==typeof o?(this.joinLiveRequestMap[t]=o,this.onRecvJoinLiveRequest(t,e.from_userid,e.from_username,e.room_id),this.logger.info(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL+" onRecvJoinLiveRequest "+o)):this.logger.error(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL+" no from user")}else this.logger.error(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL+" no requestId")},e.prototype.onRecvJoinLiveRequest=function(e,t,o,r){this.stateCenter.actionListener("recvJoinLiveRequest",e,t,o,r)},e.prototype.handlePushJoinLiveInviteMsg=function(e){var t=e.request_id;if("string"==typeof t){var o=e.from_userid;"string"==typeof o?(this.joinLiveRequestMap[t]=o,this.onRecvInviteJoinLiveRequest(t,e.from_userid,e.from_username,e.room_id),this.logger.info(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL+" onRecvInviteJoinLiveRequest "+o)):this.logger.error(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL+" no from user")}else this.logger.error(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL+"no requestId")},e.prototype.onRecvInviteJoinLiveRequest=function(e,t,o,r){this.stateCenter.actionListener("recvInviteJoinLiveRequest",e,t,o,r)},e.prototype.handlePushJoinLiveResultMsg=function(e){var t=e.request_id;if("string"==typeof t){var o=e.result;if(null!=o){var r=1==o;if(this.joinLiveCallbackMap[t]){var n=this.joinLiveCallbackMap[t];if(!n)return void this.logger.info(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL+" no callback");this.logger.info(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL+" joinLiveRequest/invite result "+r),delete this.joinLiveCallbackMap[t],n(r,e.from_userid,e.from_username)}}else this.logger.info(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL+" no result")}else this.logger.error(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL+" no requestId")},e.prototype.handlePushJoinLiveStopMsg=function(e){var t=e.request_id;"string"==typeof t?(this.logger.info(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL+" onRecvEndJoinLiveCommand "+e.from_userid),this.onRecvEndJoinLiveCommand(t,e.from_userid,e.from_username,e.room_id)):this.logger.error(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL+" no requestId")},e.prototype.onRecvEndJoinLiveCommand=function(e,t,o,r){this.stateCenter.actionListener("recvEndJoinLiveCommand",e,t,o,r)},e}();t.LiveHandler=a},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MessageHandler=void 0;var r=o(0),s=o(3),n=o(1),i=o(2),a=o(4),g=function(){function e(e,t,o,r){var s=this;this.logger=e,this.stateCenter=t,this.dataReport=o,this.service=r,this.sendRoomMsgTime=0,this.sendRoomMsgInterval=500,this.bigImCallbackMap={},this.bigImLastTimeIndex=0,this.bigIMmessageList=[],this.bigImTimer=null,this.relayTimer=null,this.serverTimeOffset=0,this.datiTimeWindow=0,this.bigimTimeWindow=0,this.isReliable=!1,this.transSeqMap={},this.onRecvReliableMessage=function(e){var t=e.map((function(e){return{key:e.trans_type,value:e.trans_data,updateUser:{userID:e.trans_idname,userName:e.trans_nickname},updateTime:e.trans_send_time}}));s.stateCenter.actionListener("roomExtraInfoUpdate",s.stateCenter.roomid,t),e.forEach((function(e){s.stateCenter.actionListener("recvReliableMessage",e.trans_type,e.trans_seq,e.trans_data)}))},this.realyMessageList=[]}return e.prototype.loginRsp=function(e){var t=this;if(null!=e.body.ret_timestamp&&"string"==typeof e.body.ret_timestamp){var o=parseFloat(e.body.ret_timestamp);this.serverTimeOffset=0==o?0:e.body.ret_timestamp-(new Date).getTime()}if(e.body.bigim_time_window&&"number"==typeof e.body.bigim_time_window&&(this.bigimTimeWindow=e.body.bigim_time_window),e.body.dati_time_window&&"number"==typeof e.body.dati_time_window&&(this.datiTimeWindow=e.body.dati_time_window),e.body.trans_seqs)for(var r=0;r<e.body.trans_seqs.length;r++){var s=e.body.trans_seqs[r].trans_channel,n=e.body.trans_seqs[r].trans_seq_array;(n=n.filter((function(e){var o=e.trans_type,r=e.trans_seq;return!t.transSeqMap[o]||t.transSeqMap[o].seq<r}))).length>0&&this.fetchReliableMessage(s,n)}},e.prototype.sendReliableMessage=function(e,t,o,r){var g=this;if(this.logger.info(i.ZEGO_RTM_ACTION.MESSAGE_SEND_RELIABLE+" call"),this.isReliable)return this.logger.error(i.ZEGO_RTM_ACTION.MESSAGE_SEND_RELIABLE+" send too often"),void r(a.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.error.TRANS_FREQUENTLY);this.transSeqMap[e]||(this.transSeqMap[e]={seq:0});var _={trans_type:e,trans_data:t,trans_local_seq:this.transSeqMap[e].seq,trans_channel:"clt"};this.isReliable=!0,this.service.sendReliableMessage(_,(function(t){g.transSeqMap[e].seq=t.body.trans_seq,g.logger.info(i.ZEGO_RTM_ACTION.MESSAGE_SEND_RELIABLE+" trans "+e+" seq "+t.body.trans_seq),g.isReliable=!1,o({seq:t.header.seq,errorCode:0})}),(function(e){var t=n.errorCodeList.ROOM_INNER_ERROR;e.body&&e.body.err_code?(t=s.ClientUtil.getServerError(e.body.err_code),g.logger.error(i.ZEGO_RTM_ACTION.MESSAGE_SEND_ROOM_MSG+"  "+t.msg)):t=e==n.errorCodeList.TIMEOUT?n.errorCodeList.IM_SEND_FAILED:e,g.isReliable=!1,r(t)}))},e.prototype.fetchReliableMessage=function(e,t){var o=this,r={trans_channel:e,fetch_array:t},s=function(e){o.handleFetchTransRsp(e)};this.service.fetchReliableMessage(r,s,s),this.logger.info(i.ZEGO_RTM_ACTION.MESSAGE_FETCH_RELIABLE+" call success")},e.prototype.handleFetchTransRsp=function(e){if(e.body&&0!=e.body.err_code)this.logger.error(i.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_RSP+" trans send error "+e.body.err_code);else if(e.header&&e.body){var t=e.body.trans_fetch_results,o=[];if(Array.isArray(t)&&t.length>0)for(var s=0;s<t.length;s++){var n=t[s];if(n.err_code!==r.ERROR_CODES.FETCH_TRANS_UNKNOWN_TYPE){var a=n.trans_type,g=n.trans_seq;n.err_code!==r.ERROR_CODES.FETCH_TRANS_WRONG_SEQ?(!this.transSeqMap[a]||this.transSeqMap[a].seq<g?(this.transSeqMap[a]={seq:g},o.push(n)):this.logger.warn(i.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_RSP+" fetch trans seq wrong"),o.length>0&&this.onRecvReliableMessage(o)):(this.logger.warn(i.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_RSP+" fetch trans seq is wrong "+n.err_code),this.transSeqMap[a]={seq:g})}else this.logger.warn(i.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_RSP+" fetch trans unknown type "+n.err_code)}}else this.logger.error(i.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_RSP+" trans send error "+e)},e.prototype.handlePushTransMsg=function(e){var t=e.body.trans_type,o=e.body.trans_seq;!this.transSeqMap[t]||this.transSeqMap[t].seq<o?(this.transSeqMap[t]={seq:o},this.onRecvReliableMessage([e.body])):this.logger.warn(i.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_PUSH+" trans seq wrong"),this.logger.info(i.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_PUSH+" trans "+t+" seq "+o)},e.prototype.sendRoomMsg=function(e,t,o,r,a,g){var _=this;if(!this.stateCenter.isLogin())return this.logger.error(i.ZEGO_RTM_ACTION.MESSAGE_SEND_ROOM_MSG+" state error"),!1;var d=Date.parse(new Date+"");if(this.sendRoomMsgTime>0&&this.sendRoomMsgTime+this.sendRoomMsgInterval>d)return this.logger.info(i.ZEGO_RTM_ACTION.MESSAGE_SEND_ROOM_MSG+" freq error"),g&&g(n.errorCodeList.FREQ_LIMITED,0,e,r),!1;this.sendRoomMsgTime=d;var l={msg_category:e,msg_type:t,msg_content:r};return this.service.sendRoomMsg(l,(function(e){a({seq:e.header.seq,errorCode:0,messageID:e.body.msg_id})}),(function(e){var t,o,r=n.errorCodeList.ROOM_INNER_ERROR;if(!e.header||!e.body)return e.code&&e.msg&&(r=e),void g({seq:0,errorCode:r.code,messageID:0});r=(t=[s.ClientUtil.getServerError(e.body.err_code),e.body.msg_id])[0],o=t[1],_.logger.error(i.ZEGO_RTM_ACTION.MESSAGE_SEND_ROOM_MSG+"  "+r.msg),r==n.errorCodeList.TIMEOUT&&(r=n.errorCodeList.IM_SEND_FAILED),g({seq:e.header.seq,errorCode:r.code,messageID:o})})),this.logger.info(i.ZEGO_RTM_ACTION.MESSAGE_SEND_ROOM_MSG+"  call success"),!0},e.prototype.handlePushRoomMsg=function(e){var t=this,o=r.getReportSeq();this.dataReport.newReport(o),this.dataReport.addMsgInfo(o,{room_sid:a.ZegoRTMLogEvent.kZegoTaskLiveRoomGetRoomMessage.room_sid(e.header.session_id)});var s=[];e.body.chat_data.forEach((function(e){var r={fromUser:{userID:e.id_name,userName:e.nick_name},message:e.msg_content,sendTime:e.send_time,messageID:e.msg_id};s.push(r),t.dataReport.addMsgInfo(o,{from_msg_id:e.id_name})})),this.dataReport.uploadReport(o,a.ZegoRTMLogEvent.kZegoTaskLiveRoomGetRoomMessage.event),this.stateCenter.actionListener("IMRecvBroadcastMessage",this.stateCenter.roomid,s),this.stateCenter.actionListener("_recvRoomMsg",e.body.chat_data,e.body.server_msg_id,e.body.ret_msg_id)},e.prototype.sendCustomCommand=function(e,t,o,r){var a=this;if(!this.stateCenter.isLogin())return this.logger.error(i.ZEGO_RTM_ACTION.MESSAGE_SEND_CUSTOM_MSG+" state error"),!1;var g={from_userid:this.stateCenter.idName,from_username:this.stateCenter.nickName,request_id:this.stateCenter.getRequestId(),custom_content:t||"",room_id:this.stateCenter.roomid},_={dest_id_name:e,custom_msg:JSON.stringify(g)};return this.service.sendCustomCommand(_,(function(e){o({seq:e.header.seq,errorCode:0})}),(function(e){var t,o=n.errorCodeList.ROOM_INNER_ERROR;e.header&&e.body||(e.code&&e.msg&&(o=e),r({seq:e.header.seq,errorCode:o.code})),o=s.ClientUtil.getServerError(e.body.err_code),a.logger.error(i.ZEGO_RTM_ACTION.MESSAGE_SEND_CUSTOM_MSG+" "+o.msg),t=o==n.errorCodeList.TIMEOUT?n.errorCodeList.IM_SEND_FAILED:o,r({seq:e.header.seq,errorCode:t.code})})),this.logger.info(i.ZEGO_RTM_ACTION.MESSAGE_SEND_CUSTOM_MSG+" call success"),!0},e.prototype.handlePushCustomMsg=function(e){var t=JSON.parse(e.body.custommsg),o=[t.from_userid,t.from_username,t.room_id,t.custom_content],s=o[0],n=o[1],i=o[2],g=o[3],_=r.getReportSeq();this.dataReport.newReport(_),this.dataReport.uploadReport(_,a.ZegoRTMLogEvent.kZegoTaskLiveRoomGetCustomCommand.event),this.stateCenter.actionListener("IMRecvCustomCommand",i,{userID:s,userName:n},g)},e.prototype.sendBigRoomMessage=function(e,t,o,s,n,i){var a=this,g=this.bigimTimeWindow,_=this.serverTimeOffset,d=(new Date).getTime()+_,l=r.getSeq().toString();if(this.bigImCallbackMap[l]={success:n,error:i},0==g){var c={msg_category:e,msg_type:1,msg_content:s,bigmsg_client_id:l};this.sendBigRoomMessageInternal([c],(function(e){a.handleBigImMsgRsp(e)}),(function(e){i&&i(e)}))}else{var u=Math.floor(d/g);if(this.bigImLastTimeIndex<u&&0==this.bigIMmessageList.length){this.bigImLastTimeIndex=u;var E={msg_category:e,msg_type:1,msg_content:s,bigmsg_client_id:l};this.sendBigRoomMessageInternal([E],(function(e){a.handleBigImMsgRsp(e)}),(function(e){i&&i(e)}))}else this.bigIMmessageList.push({msg_category:e,msg_type:1,msg_content:s,bigmsg_client_id:l}),1==this.bigIMmessageList.length&&this.setBigImTimer(_,g)}},e.prototype.sendBigRoomMessageInternal=function(e,t,o){var r={msgs:e};this.service.sendBigRoomMessage(r,(function(e){t(e)}),(function(e){var t=n.errorCodeList.ROOM_INNER_ERROR;e.header&&e.body||(e.code&&e.msg&&(t=e),o(t)),o(t)})),this.logger.info(i.ZEGO_RTM_ACTION.MESSAGE_SEND_BIG_MSG+" sendBigRoomMessage called")},e.prototype.handleBigImMsgRsp=function(e){this.bigimTimeWindow=e.body.bigim_time_window;for(var t=0;t<e.body.msgs.length;t++){var o=e.body.msgs[t].bigmsg_client_id,r=e.body.msgs[t].bigmsg_id;if(this.bigImCallbackMap[o]){var s=this.bigImCallbackMap[o].success;null!=s&&s({seq:e.header.seq,errorCode:0,messageID:r}),delete this.bigImCallbackMap[o]}}},e.prototype.setBigImTimer=function(e,t){var o=this,r=t-((new Date).getTime()+e)%t,n=s.ClientUtil.generateRandumNumber(t)+r;this.bigImTimer=setTimeout((function(){o.onBigImTimer()}),n)},e.prototype.onBigImTimer=function(){var e=this,t=(new Date).getTime()+this.serverTimeOffset;this.bigImLastTimeIndex=Math.floor(t/this.bigimTimeWindow);for(var o=[],r=[],s=0;s<this.bigIMmessageList.length&&!(s>=20);s++){var n=this.bigIMmessageList[s];o.push({msg_category:n.msg_category,msg_type:n.msg_type,msg_content:n.msg_content,bigmsg_client_id:n.bigmsg_client_id}),r.push(n.bigmsg_client_id)}this.bigIMmessageList.length>20?this.bigIMmessageList.splice(0,20):this.bigIMmessageList=[],this.sendBigRoomMessageInternal(o,(function(t){e.handleBigImMsgRsp(t)}),(function(t,o){for(var s=0;s<r.length;s++){var n=r[s],i=e.bigImCallbackMap[n];i&&(null!=i.error&&i.error(t,o),delete e.bigImCallbackMap[n])}})),this.bigImTimer&&clearTimeout(this.bigImTimer),this.bigImTimer=null,this.bigIMmessageList.length>0&&this.setBigImTimer(this.serverTimeOffset,this.bigimTimeWindow)},e.prototype.handlePushMergeMsg=function(e){for(var t=0;t<e.body.messages.length;t++)14001===e.body.messages[t].sub_cmd&&this.handlePushBigRooMsg(e.body.messages[t].msg_body)},e.prototype.handlePushBigRooMsg=function(e){var t;try{t=JSON.parse(e)}catch(e){return void this.logger.warn(i.ZEGO_RTM_ACTION.MESSAGE_BIG_MSG_PUSH+"parse json error")}if(t){for(var o=t.room_id,r=[],s=0;s<t.msg_data.length;s++){var n=t.msg_data[s];n.id_name!=this.stateCenter.idName?r.push({idName:n.id_name,nickName:n.nick_name,messageId:n.bigmsg_id,category:n.msg_category,type:n.msg_type,content:n.msg_content,time:n.send_time}):this.logger.info(i.ZEGO_RTM_ACTION.MESSAGE_BIG_MSG_PUSH+" self message")}0==r.length?this.logger.info(i.ZEGO_RTM_ACTION.MESSAGE_BIG_MSG_PUSH+" no other pushData except self"):this.onRecvBigRoomMessage(r,o),this.logger.info(i.ZEGO_RTM_ACTION.MESSAGE_BIG_MSG_PUSH+"call success")}else this.logger.warn(i.ZEGO_RTM_ACTION.MESSAGE_BIG_MSG_PUSH+" cann't find message body")},e.prototype.onRecvBigRoomMessage=function(e,t){var o=r.getReportSeq();this.dataReport.newReport(o);var s=[];e.forEach((function(e){var t={fromUser:{userID:e.idName,userName:e.nickName},message:e.content,sendTime:e.time,messageID:e.messageId};s.push(t)})),this.dataReport.uploadReport(o,a.ZegoRTMLogEvent.kZegoTaskLiveGetRoomBigIM.event),this.stateCenter.actionListener("IMRecvBarrageMessage",t,s),this.stateCenter.actionListener("_recvBigRoomMessage",e,t)},e.prototype.resetMessageInfo=function(){this.transSeqMap={},this.realyMessageList=[],this.relayTimer&&(clearTimeout(this.relayTimer),this.relayTimer=null),this.bigImLastTimeIndex=0,this.bigIMmessageList=[],this.bigImCallbackMap={},this.bigImTimer&&(clearTimeout(this.bigImTimer),this.bigImTimer=null),this.serverTimeOffset=0,this.datiTimeWindow=0,this.bigimTimeWindow=0},e.prototype.sendRelayMessage=function(e,t,o,r){var s=this.datiTimeWindow,n=this.serverTimeOffset;s>0?(this.realyMessageList.push({type:e,data:t,success:o,error:r}),1==this.realyMessageList.length&&this.setRelayTimer(n,s)):this.sendRelayMessageInternal(e,t,o,r)},e.prototype.sendRelayMessageInternal=function(e,t,o,r){this.logger.info(i.ZEGO_RTM_ACTION.MESSAGE_SEND_RELAY_MSG+" call");var a={relay_type:e,relay_data:t};this.service.sendRelayMessage(a,(function(e){o&&o(e.header.seq,e.body.relay_result)}),(function(e){var t=n.errorCodeList.ROOM_INNER_ERROR;if(!e.header||!e.body)return e.code&&e.msg&&(t=e),void(r&&r(t,0));r&&r(s.ClientUtil.getServerError(e.body.err_code),e.header.seq)}))},e.prototype.setRelayTimer=function(e,t){var o=this,r=2*t-((new Date).getTime()+e)%t,n=s.ClientUtil.generateRandumNumber(r);this.logger.info(i.ZEGO_RTM_ACTION.MESSAGE_SEND_RELAY_MSG+" setTimer "+n),this.relayTimer=setTimeout((function(){o.onRelayTimer()}),n)},e.prototype.onRelayTimer=function(){if(0!=this.realyMessageList.length){var e=this.realyMessageList[0];this.sendRelayMessageInternal(e.type,e.data,e.success,e.error),this.relayTimer&&clearTimeout(this.relayTimer),this.relayTimer=null,this.realyMessageList.splice(0,1),this.realyMessageList.length>0&&this.setRelayTimer(this.serverTimeOffset,this.datiTimeWindow)}else this.logger.info(i.ZEGO_RTM_ACTION.MESSAGE_SEND_RELAY_MSG+"  no relay data")},e}();t.MessageHandler=g},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RoomHandler=void 0;var r=o(0),s=o(3),n=o(2),i=o(1),a=o(4),g=function(){function e(e,t,o,r){this.logger=e,this.stateCenter=t,this.dataReport=o,this.service=r,this.tryLoginTimer=null,this.tryLoginCount=0,this.tryLoginInterval=1e4}return e.prototype.setRunState=function(e){this.stateCenter.lastRunState=this.stateCenter.runState,this.stateCenter.runState=e},e.prototype.resetTryLogin=function(){this.tryLoginTimer&&clearTimeout(this.tryLoginTimer),this.tryLoginTimer=null},e.prototype.resetRoom=function(){var e=this;if(this.logger.info(n.ZEGO_RTM_ACTION.ROOM_RESET_ROOM+" call"),this.resetTryLogin(),"0"!==this.stateCenter.sessionid&&this.stateCenter.runState!==r.ENUM_RUN_STATE.logout){var t=function(t){e.handleLogoutRsp(t)};this.service.logout(t,t)}this.setRunState(r.ENUM_RUN_STATE.logout),this.stateCenter.userid="",this.stateCenter.sessionid="",this.stateCenter.roomSessionId="",this.logger.setSessionInfo(this.stateCenter.appid,this.stateCenter.roomid,this.stateCenter.sessionid,this.stateCenter.idName,this.stateCenter.nickName,this.stateCenter.sdKVersion),this.service.closeSocket(),this.resetRoomCallBack(),this.logger.info(n.ZEGO_RTM_ACTION.ROOM_RESET_ROOM+" call success")},e.prototype.resetRoomCallBack=function(){},e.prototype.loginSuccessCallBack=function(e,t){},e.prototype.handlePushKickout=function(e){var t=this;this.logger.info(n.ZEGO_RTM_ACTION.ROOM_KICK_OUT+"  call "+JSON.stringify(e));var o=r.getReportSeq();this.dataReport.newReport(o,a.ZegoRTMLogEvent.kZegoTaskKickout.event),this.dataReport.addMsgInfo(o,{user_id:a.ZegoRTMLogEvent.kZegoTaskKickout.user_id(this.stateCenter.idName)});var g=s.ClientUtil.getKickoutError(e.body.reason);this.dataReport.addMsgInfo(o,{error:g.code,message:g.message}),this.dataReport.uploadReport(o);var _=this.stateCenter.roomTryHandler;if(_)if(_.onactive=function(e,o){t.disconnectedHandle(o),t.stateCenter.actionListener("_kickout",o)},e.body.need_relogin&&1==e.body.need_relogin)this.stateCenter.sessionid="",_.startMaxTime(),_.active();else{this.resetRoom();var d={};e&&e.body.custom_reason?d.custom_kickout_message=e.body.custom_reason:g.name&&i.errorCodeList[g.name]&&(d.custom_kickout_message=i.errorCodeList[g.name].msg+" kickout，reason: "+e.body.reason),g.name&&i.errorCodeList[g.name]?this.disconnectedHandle(i.errorCodeList[g.name],JSON.stringify(d)):this.disconnectedHandle(i.errorCodeList.ROOM_INNER_ERROR,JSON.stringify(d)),this.stateCenter.actionListener("_kickout",{code:i.errorCodeList.MANUAL_KICKOUT.code,msg:i.errorCodeList.MANUAL_KICKOUT.msg+e.body.reason})}else this.logger.info(n.ZEGO_RTM_ACTION.ROOM_KICK_OUT+" try handler no found")},e.prototype.handleHbLogout=function(e){var t=this,o=this.stateCenter.roomTryHandler;o&&(o.onactive=function(e,o){t.disconnectedHandle(o)},e==i.errorCodeList.HEARTBEAT_TIMEOUT||e.msg.endsWith("1000002001")||e.msg.endsWith("1000000152")?(o.startMaxTime(),o.active()):(o.stopMaxTime(),o.invalid(),this.resetRoom(),this.disconnectedHandle(e)))},e.prototype.onDisconnect=function(e){var t=this;if(this.logger.error(n.ZEGO_RTM_ACTION.ROOM_DISCONNECT+" "+e.msg),"string"==typeof e.code&&"Error.Network"===e.code)this.dataReport.addMsgInfo(this.stateCenter.reportSeqList.relogin,{error:a.ZegoRTMLogEvent.kZegoTaskReLoginRoom.error.ROOM_DISCONNECT.code,message:a.ZegoRTMLogEvent.kZegoTaskReLoginRoom.error.ROOM_DISCONNECT.msg});else if("number"==typeof e.code){var o=void 0;(o=e.code<2e9&&e.code>1e9||e.code<1e6?s.ClientUtil.decodeServerError(e.code,e.msg):{code:e.code,message:e.msg})&&this.dataReport.addMsgInfo(this.stateCenter.reportSeqList.relogin,{error:o.code,message:o.message})}this.dataReport.uploadReport(this.stateCenter.reportSeqList.relogin),this.stateCenter.reportSeqList.relogin=0,s.ClientUtil.unregisterCallback(a.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event,this.stateCenter.reportList);var r=this.stateCenter.roomTryHandler;r?(r.onactive=function(e,o){o&&0!==o.code?t.roomStateHandle("DISCONNECTED",o):t.roomStateHandle("CONNECTED",o)},r.startMaxTime(),r.active()):this.logger.error(n.ZEGO_RTM_ACTION.ROOM_DISCONNECT+" try handler no found")},e.prototype.onConnecting=function(e){this.roomStateHandle("CONNECTING",e)},e.prototype.disconnectedHandle=function(e,t){e&&0!==e.code?this.roomStateHandle("DISCONNECTED",e,t):this.roomStateHandle("CONNECTED",e,t)},e.prototype.roomStateHandle=function(e,t,o){this.logger.info(n.ZEGO_RTM_ACTION.ROOM_STATUS_CALLBACK+" "+e+" "+JSON.stringify(t)),this.stateCenter.lastRoomState=this.stateCenter.roomState,this.stateCenter.roomState=e,this.stateCenter.roomState!==this.stateCenter.lastRoomState&&(this.stateCenter.actionListener("roomStateUpdate",this.stateCenter.roomid,e,t?t.code:0,o),this.stateCenter.actionListener("_roomStateUpdate",this.stateCenter.roomid,e,t?t.code:0,o))},e.prototype.login=function(e,t,o,g,_,d,l){if(this.logger.info(n.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM+" call:",t,o),this.logger.setSessionInfo(this.stateCenter.appid,t,"",g.userID,"",this.stateCenter.sdKVersion),_&&(_.userUpdate&&"boolean"==typeof _.userUpdate&&(this.stateCenter.userStateUpdate=_.userUpdate),_.maxMemberCount&&"number"==typeof _.maxMemberCount&&(this.stateCenter.maxMemberCount=_.maxMemberCount)),!this.stateCenter.configOK)return this.logger.error(n.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM+" init sdk wrong"),void l(i.errorCodeList.INIT);if(this.stateCenter.runState!==r.ENUM_RUN_STATE.trylogin&&this.setRunState(r.ENUM_RUN_STATE.trylogin),this.stateCenter.roomid=t,this.stateCenter.token=o,this.stateCenter.third_token=o,this.stateCenter.idName=g.userID,this.stateCenter.nickName=g.userName||g.userID,s.ClientUtil.registerCallback("login",{success:d,error:l},this.stateCenter.callbackList),0===this.stateCenter.reportSeqList.login){var c=r.getReportSeq();this.stateCenter.reportSeqList.relogin=c,this.dataReport.newReport(c,a.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event),this.dataReport.addMsgInfo(c,{server:e}),s.ClientUtil.logReportCallback(a.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event,this.dataReport,c,this.stateCenter.reportList)}this.resetTryLogin(),this.onConnecting({code:0,msg:""}),this.tryLogin(e),this.logger.info(n.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM+" call success")},e.prototype.tryLogin=function(e){var t=this;if(this.stateCenter.runState===r.ENUM_RUN_STATE.trylogin){var o=0!==this.stateCenter.reportSeqList.login?a.ZegoRTMLogEvent.kZegoTaskLoginRoom.event:a.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event;if(this.service.isDisConnect())try{this.service.closeSocket(),this.logger.debug(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN+" new websocket"),s.ClientUtil.actionSuccessCallback(o,this.stateCenter.reportList)&&(this.tryLoginCount>1&&s.ClientUtil.actionSuccessCallback(o,this.stateCenter.reportList)(r.REPORT_ACTION.eventEnd,a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.create_socket.event),s.ClientUtil.actionSuccessCallback(o,this.stateCenter.reportList)(r.REPORT_ACTION.eventStart,a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.create_socket.event),s.ClientUtil.actionSuccessCallback(o,this.stateCenter.reportList)(r.REPORT_ACTION.addEventMsg,a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.create_socket.event,a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.create_socket.server("server"),e)),this.service.createSocket(e),this.service.openHandler((function(){t.openHandler()})),this.service.closeHandler((function(e){t.logger.error(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN+" close "+JSON.stringify(e.code?e.code:e)),t.service.closeSocket(),t.closeHandler(e)})),this.service.errorHandler((function(e){t.logger.error(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN+" error "+JSON.stringify(e.code?e.code:e)),t.service.closeSocket(),t.closeHandler(e)}))}catch(e){this.logger.error(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN+"  websocket err:"+JSON.stringify(e))}else{this.logger.info(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN+" use current websocket and sent login"),s.ClientUtil.actionSuccessCallback(o,this.stateCenter.reportList)&&s.ClientUtil.actionSuccessCallback(o,this.stateCenter.reportList)(r.REPORT_ACTION.eventStart,a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.liveroom_login.event);var i=function(e,o){t.handleLoginRsp(e,o)};this.service.login(i,i)}this.tryLoginTimer=setTimeout((function(){t.logger.info(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN+" over time no response, login timeout"),s.ClientUtil.actionErrorCallback("login",t.stateCenter.callbackList)(a.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.LOGIN_TIMEOUT)}),this.tryLoginInterval),this.logger.info(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN+" call success")}else this.logger.error("zb.rh.tl state error")},e.prototype.openHandler=function(){var e=this;this.logger.info(n.ZEGO_RTM_ACTION.ROOM_OPEN_HANDLER+" websocket.onpen call");var t=0!==this.stateCenter.reportSeqList.login?a.ZegoRTMLogEvent.kZegoTaskLoginRoom.event:a.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event;s.ClientUtil.actionSuccessCallback(t,this.stateCenter.reportList)&&s.ClientUtil.actionSuccessCallback(t,this.stateCenter.reportList)(r.REPORT_ACTION.eventEndWithMsgInfo,a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.create_socket.event,{try_cnt:this.tryLoginCount}),this.service.onPush(),s.ClientUtil.actionSuccessCallback(t,this.stateCenter.reportList)&&s.ClientUtil.actionSuccessCallback(t,this.stateCenter.reportList)(r.REPORT_ACTION.eventStart,a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.liveroom_login.event);var o=function(t,o){e.handleLoginRsp(t,o)};this.service.login(o,o)},e.prototype.handleLoginRsp=function(e,t){var o=0!==this.stateCenter.reportSeqList.login?a.ZegoRTMLogEvent.kZegoTaskLoginRoom.event:a.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event;if(s.ClientUtil.actionSuccessCallback(o,this.stateCenter.reportList)&&s.ClientUtil.actionSuccessCallback(o,this.stateCenter.reportList)(r.REPORT_ACTION.eventEndWithMsgInfo,a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.liveroom_login.event),this.stateCenter.runState===r.ENUM_RUN_STATE.trylogin)if(e.header&&e.body){if(e.header.seq!==t)return void this.logger.error(n.ZEGO_RTM_ACTION.ROOM_HANDLE_LOGINRSP+" in wrong seq, local=",t+"",",recv=",e.header.seq);0!==e.body.err_code?(this.logger.error(n.ZEGO_RTM_ACTION.ROOM_HANDLE_LOGINRSP+" server error=",e.body.err_code),this.handleLoginFail(e)):(this.logger.info(n.ZEGO_RTM_ACTION.ROOM_HANDLE_LOGINRSP+" call success."),this.handleLoginSuccess(e))}else this.logger.error(n.ZEGO_RTM_ACTION.ROOM_HANDLE_LOGINRSP+" "+JSON.stringify(e)),this.handleLoginFail(e);else this.logger.error(n.ZEGO_RTM_ACTION.ROOM_HANDLE_LOGINRSP+" state error")},e.prototype.handleLoginFail=function(e){this.resetTryLogin();var t=a.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INNER_ERROR;e.header&&e.body?t=s.ClientUtil.getServerError(e.body.err_code):e.code&&e.msg&&(t=e),s.ClientUtil.actionErrorCallback("login",this.stateCenter.callbackList)(t,!0)},e.prototype.handleLoginSuccess=function(e){var t={},o=this.stateCenter.lastRunState;this.setRunState(r.ENUM_RUN_STATE.login),this.stateCenter.userid=e.body.user_id,this.stateCenter.sessionid=e.body.session_id,this.stateCenter.roomSessionId=e.body.room_session_id,this.logger.setSessionInfo(this.stateCenter.appid,this.stateCenter.roomid,this.stateCenter.sessionid,this.stateCenter.idName,this.stateCenter.nickName,this.stateCenter.sdKVersion),e.body.config_info&&(this.logger.setRemoteLogLevel(e.body.config_info.log_level),t.log_level=e.body.config_info.log_level,""==e.body.config_info.log_url||this.logger.url||(this.logger.setLogServer(e.body.config_info.log_url),t.log_url=e.body.config_info.log_url)),e.body.cluster_env&&1===e.body.cluster_env&&(this.stateCenter.testEnvironment=!0,t.test_environment="true",!this.stateCenter.debugCustom&&(this.stateCenter.debug=!0));var n=0!==this.stateCenter.reportSeqList.login?a.ZegoRTMLogEvent.kZegoTaskLoginRoom.event:a.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event;s.ClientUtil.actionSuccessCallback(n,this.stateCenter.reportList)&&s.ClientUtil.actionSuccessCallback(n,this.stateCenter.reportList)(r.REPORT_ACTION.addEventMsg,a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.liveroom_login.event,a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.liveroom_login.respond_info("respond_info"),t),this.resetTryLogin(),this.loginSuccessCallBack(o,e),s.ClientUtil.actionSuccessCallback("login",this.stateCenter.callbackList)&&s.ClientUtil.actionSuccessCallback("login",this.stateCenter.callbackList)(!0),this.roomStateHandle("CONNECTED",{code:0,msg:""})},e.prototype.closeHandler=function(e){this.logger.error(n.ZEGO_RTM_ACTION.ROOM_CLOSEHANDLER+" room websocket close "+JSON.stringify(e.code?e.code:e)),this.stateCenter.runState!==r.ENUM_RUN_STATE.logout?this.stateCenter.runState===r.ENUM_RUN_STATE.trylogin?(this.resetTryLogin(),s.ClientUtil.actionErrorCallback("login",this.stateCenter.callbackList)(1006==e.code?a.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.LOGIN_TIMEOUT:e)):this.stateCenter.runState===r.ENUM_RUN_STATE.login&&(this.logger.info(n.ZEGO_RTM_ACTION.ROOM_CLOSEHANDLER+" is called because of network broken"),this.resetTryLogin(),this.onDisconnect(a.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.NETWORK_BROKEN)):this.logger.info(n.ZEGO_RTM_ACTION.ROOM_CLOSEHANDLER+" onclose logout flow call websocket.close")},e.prototype.logout=function(){this.logger.info(n.ZEGO_RTM_ACTION.ROOM_LOGOUT+" call"),this.stateCenter.runState!==r.ENUM_RUN_STATE.logout?(this.resetRoom(),this.roomStateHandle("DISCONNECTED",{code:0,msg:""}),this.logger.info(n.ZEGO_RTM_ACTION.ROOM_LOGOUT+" call success")):this.logger.warn("zb.rh.lo at logout")},e.prototype.handleLogoutRsp=function(e){this.logger.info(n.ZEGO_RTM_ACTION.ROOM_LOGOUT+"result=",e.body&&e.body.err_code?e.body.err_code:"-1")},e}();t.RoomHandler=g},function(e,t,o){"use strict";var r=this&&this.__spreadArray||function(e,t){for(var o=0,r=t.length,s=e.length;o<r;o++,s++)e[s]=t[o];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.UserHandler=void 0;var s=o(0),n=o(3),i=o(2),a=o(4),g=function(){function e(e,t,o,r){this.logger=e,this.stateCenter=t,this.dataReport=o,this.service=r,this.userQuerying=!1,this.userTempList=[],this.userSeq=0,this.minUserSeq=0,this.userList=[],this.userSeqMergeMap={},this.userListInterval=3e4,this.userListMergeInterval=5e3,this.anchor_info={anchor_id:"",anchor_id_name:"",anchor_nick_name:""}}return e.prototype.loginRsp=function(e,t){this.anchor_info=e.body.anchor_info||this.anchor_info,this.userListInterval=e.body.userlist_interval||this.userListInterval,this.userListMergeInterval=e.body.userlist_merge_timeout||this.userListMergeInterval,e.body.anchor_info&&(this.stateCenter.actionListener("getAnchorInfo",e.body.anchor_info.anchor_id_name,e.body.anchor_info.anchor_nick_name),this.stateCenter.actionListener("_getAnchorInfo",e.body.anchor_info.anchor_id_name,e.body.anchor_info.anchor_nick_name)),e.body.online_count&&this.stateCenter.actionListener("roomOnlineUserCountUpdate",this.stateCenter.roomid,e.body.online_count),this.logger.info(i.ZEGO_RTM_ACTION.USER_LOGIN_RSP+"  userStateUpdate "+this.stateCenter.userStateUpdate),this.stateCenter.userStateUpdate&&this.fetchUserList(t)},e.prototype.patchUserList=function(e){var t=this;e.body.server_user_seq!==this.userSeq&&this.stateCenter.userStateUpdate&&!this.userSeqMergeMap&&(this.logger.info(i.ZEGO_RTM_ACTION.USER_HB_PATCH+" call update user "+this.userSeq+" server "+e.body.server_user_seq),this.userSeqMergeTimer&&clearTimeout(this.userSeqMergeTimer),this.userSeqMergeTimer=setTimeout((function(){t.handleMergeTimeout()}),this.userListMergeInterval)),this.minUserSeq=e.body.server_user_seq,null!=e.body.online_count&&0!=e.body.online_count&&this.stateCenter.actionListener("roomOnlineUserCountUpdate",this.stateCenter.roomid,e.body.online_count)},e.prototype.resetUserHandler=function(){this.userQuerying=!1,this.lastUserQueryTime=0,this.userTempList=[],this.userSeq=0,this.minUserSeq=0,this.userList=void 0,this.userSeqMergeMap={},this.userSeqMergeTimer=void 0,this.userQueryTimer=void 0,this.userListInterval=3e4,this.userListMergeInterval=5e3,this.anchor_info={anchor_id:"",anchor_id_name:"",anchor_nick_name:""}},e.prototype.fetchUserList=function(e){this.userQuerying?this.logger.warn(i.ZEGO_RTM_ACTION.USER_FETCH_USER+" is already querying"):(this.userQuerying=!0,this.userTempList=[],this.fetchUserListWithPage(0,e||0),this.logger.info(i.ZEGO_RTM_ACTION.USER_FETCH_USER+" the first time call"))},e.prototype.fetchUserListWithPage=function(e,t){var o=this,r=function(e){o.handleFetchUserListRsp(e,t)};"V1"===s.ROOMVERSION?this.service.fetchUserList({user_index:e,sort_type:0},r,r):this.service.fetchUserListV2({marker:0===e?"":e+"",mode:0,limit:100},r,r)},e.prototype.handleFetchUserListRsp=function(e,t){var o=this;if(e.body&&0!=e.body.err_code)return this.userQuerying=!1,this.lastUserQueryTime=Date.now()+this.userListInterval,void this.logger.info(i.ZEGO_RTM_ACTION.USER_FETCH_USER_RSP+" fetch error "+e.body.err_code);if(!e.header||!e.body)return this.userQuerying=!1,this.lastUserQueryTime=Date.now()+this.userListInterval,void this.logger.info(i.ZEGO_RTM_ACTION.USER_FETCH_USER_RSP+" fetch error "+e);if(this.stateCenter.userStateUpdate){this.userTempList=r(r([],this.userTempList),e.body.user_baseinfos);var a=e.body.ret_user_index;if(a!=e.body.server_user_index)return this.logger.info(i.ZEGO_RTM_ACTION.USER_FETCH_USER_RSP+" fetch another page"),void this.fetchUserListWithPage(a+1,t);this.userSeq=e.body.server_user_seq;for(var g=[],_=[],d=0;d<this.userTempList.length;d++){var l={userID:this.userTempList[d].id_name,userName:this.userTempList[d].nick_name};g.push(l),_.push({idName:this.userTempList[d].id_name,nickName:this.userTempList[d].nick_name,role:this.userTempList[d].role})}this.stateCenter.actionListener("_getTotalUserList",this.stateCenter.roomid,_),t==s.ENUM_RUN_STATE.login?(this.userList&&n.ClientUtil.mergeUserList(this.logger,this.userList,g,(function(e,t){0!==e.length&&o.onUserStateUpdate(o.stateCenter.roomid,"ADD",e),0!==t.length&&o.onUserStateUpdate(o.stateCenter.roomid,"DELETE",t)})),this.userList=g):(this.userList=g,0!==g.length&&this.onUserStateUpdate(this.stateCenter.roomid,"ADD",g)),this.userQuerying=!1,this.lastUserQueryTime=Date.now()+this.userListInterval,this.userTempList=[],this.logger.info(i.ZEGO_RTM_ACTION.USER_FETCH_USER_RSP+" call success user_list "+g+" count "+g.length)}},e.prototype.handlePushUserStateUpdateMsg=function(e){if(this.logger.info(i.ZEGO_RTM_ACTION.USER_USER_PUSH+" call"),this.stateCenter.userStateUpdate)if(this.userSeq!==e.body.user_list_seq)if(this.userSeq+e.body.user_actions.length===e.body.user_list_seq){this.userSeq=e.body.user_list_seq;for(var t=[],o=0;o<e.body.user_actions.length;o++){var r={action:e.body.user_actions[o].Action,idName:e.body.user_actions[o].IdName,nickName:e.body.user_actions[o].NickName,role:e.body.user_actions[o].Role,loginTime:e.body.user_actions[o].LoginTime};t.push(r)}this.stateCenter.actionListener("_userStateUpdate",e.body.room_id,t);var s=[],n=[];t.forEach((function(e){1==e.action?s.push({userID:e.idName,userName:e.nickName}):2==e.action&&n.push({userID:e.idName,userName:e.nickName})})),this.userList&&(this.userList=this.userList.concat(s).filter((function(e){return!n.some((function(t){return t.userID==e.userID}))}))),0!==s.length&&this.onUserStateUpdate(e.body.room_id,"ADD",s),0!==n.length&&this.onUserStateUpdate(e.body.room_id,"DELETE",n),this.logger.info(i.ZEGO_RTM_ACTION.USER_USER_PUSH+" call success")}else this.mergeUserByUserSeq(e.body.user_list_seq,e.body.user_actions);else this.logger.warn(i.ZEGO_RTM_ACTION.USER_USER_PUSH+" user_list_seq is the same with local seq");else this.logger.info(i.ZEGO_RTM_ACTION.USER_USER_PUSH+" userStateUpdate is false")},e.prototype.onUserStateUpdate=function(e,t,o){var r=this,n=s.getReportSeq();this.dataReport.newReport(n,a.ZegoRTMLogEvent.kZegoTaskLiveRoomGetUserUpdateInfo.event);var i=o.filter((function(e){return e.userID!==r.stateCenter.idName}));0!==i.length&&this.stateCenter.actionListener("roomUserUpdate",e,t,i),this.dataReport.addMsgInfo(n,{user_update_type:"ADD"==t?a.ZegoRTMLogEvent.kZegoTaskLiveRoomGetUserUpdateInfo.user_update_type("added"):a.ZegoRTMLogEvent.kZegoTaskLiveRoomGetUserUpdateInfo.user_update_type("deleted")}),this.dataReport.uploadReport(n)},e.prototype.mergeUserByUserSeq=function(e,t){var o=this;this.userSeqMergeMap||(this.logger.warn(i.ZEGO_RTM_ACTION.USER_MERGE_SEQ+" new merge userlist "+this.userSeq+" server "+e),this.userSeqMergeMap={},this.userSeqMergeTimer&&clearTimeout(this.userSeqMergeTimer),this.userSeqMergeTimer=setTimeout((function(){o.handleMergeTimeout()}),this.userListMergeInterval)),this.userSeqMergeMap[e]=t,this.logger.warn(i.ZEGO_RTM_ACTION.USER_MERGE_SEQ+"  merge userlist "+this.userSeq+" server "+e+" userlist "+t.length)},e.prototype.mergeUser=function(e){var t=this;this.logger.info(i.ZEGO_RTM_ACTION.USER_MERGE+" merge userlist "+this.userSeq+" userSeqList "+e.join(",")),this.userSeq=e[e.length-1],this.lastUserQueryTime=Date.now()+this.userListInterval;var o={};e.forEach((function(e){t.userSeqMergeMap&&t.userSeqMergeMap[e].forEach((function(e){o[e.IdName]=e}))})),this.userSeqMergeMap=null;var r=Object.values(o).map((function(e){return{action:e.Action,idName:e.IdName,nickName:e.NickName,role:e.Role,loginTime:e.LoginTime?String(e.LoginTime):""}}));r.sort((function(e,t){return e.loginTime.localeCompare(t.loginTime)}));var s=[],n=[];r.forEach((function(e){1==e.action?s.push({userID:e.idName,userName:e.nickName}):2==e.action&&n.push({userID:e.idName,userName:e.nickName})})),this.userList=this.userList&&this.userList.concat(s).filter((function(e){return!n.some((function(t){return t.userID==e.userID}))})),0!==s.length&&this.onUserStateUpdate(this.stateCenter.roomid,"ADD",s),0!==n.length&&this.onUserStateUpdate(this.stateCenter.roomid,"DELETE",n),this.stateCenter.actionListener("_userStateUpdate",this.stateCenter.roomid,r)},e.prototype.handleMergeTimeout=function(){var e=this,t=Object.keys(this.userSeqMergeMap).map((function(e){return+e})).sort((function(e,t){return e-t}));if(t[t.length-1]-t[0]+1===t.length||t[t.length-1]>=this.minUserSeq)this.mergeUser(t);else{this.userSeqMergeMap=null;var o=this.lastUserQueryTime-Date.now();this.logger.info(i.ZEGO_RTM_ACTION.USER_MERGE_TIMEOUT+"  fetch merge userlist "+this.userSeq+" userSeqList "+t.join(",")+" wait "+o),o>0?(this.userQueryTimer&&clearTimeout(this.userQueryTimer),this.userQueryTimer=setTimeout((function(){e.fetchUserList()}),o)):this.fetchUserList()}},e}();t.UserHandler=g}])}));

/***/ }),

/***/ "./sdk/code/zh/zego.client.wechat.ts":
/*!*******************************************!*\
  !*** ./sdk/code/zh/zego.client.wechat.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZegoExpressEngine = void 0;
var zego_entity_1 = __webpack_require__(/*! ../../src/common/zego.entity */ "./sdk/src/common/zego.entity.ts");
var index_1 = __webpack_require__(/*! ../../src/wechatMini/index */ "./sdk/src/wechatMini/index.ts");
var ZegoExpressEngine = /** @class */ (function (_super) {
    __extends(ZegoExpressEngine, _super);
    /**
     * 初始化Engine
     *
     * Note: 详情描述：实例化对象
     *
     * Note: 调用时机：使用SDK前第一个需要调用的接口
     *
     * Note: 限制频率：没有限制
     *
     * Note: 与LiveRoom差异：相关配置提前到初始化,减少客户必须关注接口数
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：server建议填写数组, 备用域名抗弱网能力更强
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param appID 用于区分不同客户和项目的唯一标识（必须是number类型）; 一个appID对应一个客户项目，不同端共有一个appID实现互通 ;一个客户可以申请多个appID,
     *              必须从即构控制台获取
     * @param server 表示SDK连接的即构服务器地址（支持备用域名）;SDK内的大多数功能由它交互 ; 同一个appID可以填写多个server; 必须从控制台获取
     */
    function ZegoExpressEngine(appID, server) {
        var _this = this;
        zego_entity_1.ZegoExpressWebRTMEngine.version = "2.5.0";
        _this = _super.call(this, appID, server, 1) || this;
        _this.zegoWechatMini = new index_1.ZegoWechatMini(_this.logger, _this.dataReport, _this.zegoWebRTM);
        return _this;
    }
    /**
     * 支持能力检测接口
     *
     * Note: 详情描述：可以通过该接口来检测小程序支持情况
     *
     * Note: 调用时机：初始化后, 调用其他接口前调用
     *
     * Note: 限制频率：没有限制
     *
     * Note: 与LiveRoom差异：多种能力检测接口合并, 客户不用一个个调用
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：初始化后立刻调用,建议在客户更换浏览器后,使用sdk前必须调用
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param checkLevel 检测编码格式的等级，0 表示快速检测，准确率高。1 表示精准检测但可能消耗时间长，准确率更高。
     */
    ZegoExpressEngine.prototype.checkSystemRequirements = function (checkLevel) {
        if (checkLevel === void 0) { checkLevel = 0; }
        return this.zegoWechatMini.checkSystemRequirements();
    };
    /**
     * 获取新的流地址
     *
     * Note: 详情描述：推流失败后,可通过该接口获取下一个推流地址
     *
     * Note: 调用时机：推流成功后
     *
     * Note: 限制频率:  无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：无
     * Note: 支持版本：2.0.0
     *
     * Note: 废弃时间： 无
     *
     * @param streamID 媒体流 ID
     *
     * @return 新的推流地址
     */
    ZegoExpressEngine.prototype.getNextUrl = function (streamID) {
        return this.zegoWechatMini.getNextUrl(streamID);
    };
    /**
     * 删除注册过的回调事件
     *
     * Note: 详情描述：ZegoEvent 包括了[ZegoWechatMiniEvent](https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~javascript_wxxcx~interface~ZegoWechatMiniEvent) 和[ZegoRTMEvent](https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~javascript_web~interface~ZegoRTMEvent) , 用于删除注册的同一类回调事件
     *
     * Note: 调用时机：注册后,退出房间前
     *
     * Note: 限制频率：无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：无
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param event 监听事件名
     * @param callBack? 回调函数，可选
     */
    ZegoExpressEngine.prototype.off = function (event, callBack) {
        if (this.zegoWebRTM.stateCenter.listenerList[event]) {
            return this.zegoWebRTM.off(event, callBack);
        }
        else if (this.zegoWechatMini.stateCenter.listenerList[event]) {
            return this.zegoWechatMini.off(event, callBack);
        }
        else {
            return false;
        }
    };
    /**
     * 注册回调事件
     *
     * Note: 详情描述：ZegoEvent 包括了[ZegoWechatMiniEvent](https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~javascript_wxxcx~interface~ZegoWechatMiniEvent&) 与[ZegoRTMEvent](https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~javascript_web~interface~ZegoRTMEvent) 用于处理SDK主动通知开发者回调的接口，通过注册不同 event 的事件，可以收到不同功能的回调
     *
     * Note: 调用时机：初始化后,登录前
     *
     * Note: 限制频率：无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：同样的事件可以注册多个, 相同的注册事件，会根据注册的先后顺序依次触发
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param event 监听事件名
     * @param callBack 回调函数
     *
     * @return 注册是否成功
     */
    ZegoExpressEngine.prototype.on = function (event, callBack) {
        if (this.zegoWebRTM.stateCenter.listenerList[event]) {
            return this.zegoWebRTM.on(event, callBack);
        }
        else if (this.zegoWechatMini.stateCenter.listenerList[event]) {
            return this.zegoWechatMini.on(event, callBack);
        }
        else {
            return false;
        }
    };
    /**
     * 混流高级配置
     *
     * Note: 详情描述：此方法为可选方法，需在startMixerTask之前调用才能生效
     *
     * Note: 调用时机：推流成功后
     *
     * Note: 限制频率:  无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：无
     *
     * Note: 支持版本：1.5.2
     *
     * Note: 废弃时间： 无
     *
     * @param config 混流高级功能设置
     */
    ZegoExpressEngine.prototype.setMixerTaskConfig = function (config) {
        return this.zegoWechatMini.setMixerTaskConfig(config);
    };
    /**
     * 将多条流按照调用要求合成一条流。 由于实际动作是在服务端操作，没有浏览器性能上的限制，且各个流之间延迟低，可以保证被混的多条流画面和声音同步
     *
     * Note: 详情描述：混流前需要保证流还存在, 处理混流失败情况。避免发起混流和流删除操作同时触发，以免混流失败; 被混的流若中止推流，需要重新做混流处理，否则对端画面会卡住
     *
     * Note: 与LiveRoom差异：无
     *
     * Note: 调用时机：推流成功后
     *
     * Note: 限制频率:  无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：
     *    对应appID开启了混流功能
     *    被混的流在即构服务器上存在
     *    inputList 的contentType 均为'AUDIO'时，outputBitrate、outputFPS、outputWidth、outputHeight 可不设置，默认设置为1
     *
     * Note: 支持版本：1.5.2
     *
     * Note: 废弃时间： 无
     *
     * @param mixStreamConfig 混流参数配置
     */
    ZegoExpressEngine.prototype.startMixerTask = function (mixStreamConfig) {
        return this.zegoWechatMini.startMixerTask(mixStreamConfig);
    };
    /**
     * 通过流ID获取远端流
     *
     * Note: 详情描述：该接口是异步函数，且可选参数都是针对特殊场景才使用，请不要随意设置。如果需要使用请先联系即构售前工程师确认
     *
     * Note: 调用时机：收到新增拉流,即roomStreamUpdate回调后
     *
     * Note: 限制频率: 无
     *
     * Note: 关注回调：拉流质量回调playQualityUpdate,拉流状态回调playerStateUpdate
     *
     * Note: 重点提示：
     *     拉流前确保该条流已经推成功(推送到服务器), 即拉流是在roomStreamUpdate回调后;
     *    若推流端为单主播模式需通过 CDN 拉流 (不是该接口)
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间： 无
     *
     * @param streamID 流 ID
     * @param playOption? 拉流附加参数，可选
     *
     * @return promise 异步返回流媒体对象
     */
    ZegoExpressEngine.prototype.startPlayingStream = function (streamID, playOption) {
        return this.zegoWechatMini.startPlayingStream(streamID, playOption);
    };
    /**
     * 停止服务端混流
     *
     * Note: 详情描述：
     *    关闭页面一定要发起停止混流，避免异常关闭导致混流没有停止，影响计费
     *     被混的流若中止推流，需要重新做混流处理，否则对端画面会卡住
     *
     * Note: 与LiveRoom差异：无
     *
     * Note: 调用时机：混流成功后
     *
     * Note: 限制频率:  无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：
     *    对应appID开启了混流功能
     *    被混的流在即构服务器上存在
     *
     * Note: 支持版本：1.5.2
     *
     * Note: 废弃时间： 无
     *
     * @param taskID 混流任务 id（客户自定义,务必保证唯一），必填，最大为256个字符,仅支持数字,英文字符 和 '~', '!', '@', '#', '$', '', '^', '&', '*', '(', ')', '_', '+', '=', '-', ', ';', '’', ',', '
     */
    ZegoExpressEngine.prototype.stopMixerTask = function (taskID) {
        return this.zegoWechatMini.stopMixerTask(taskID);
    };
    /**
     * 停止拉取远端流（即构服务器）
     *
     * Note: 详情描述：断开和即构服务器之间的连接,不再产生带宽
     *
     * Note: 调用时机：拉流成功后
     *
     * Note: 限制频率: 无
     *
     * Note: 关注回调：拉流质量回调playQualityUpdate,拉流状态回调playerStateUpdate
     *
     * Note: 重点提示：停止拉流后不会销毁播放器,播放器销毁需要开发者自己实现
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间： 无
     *
     * @param streamID 流 ID
     */
    ZegoExpressEngine.prototype.stopPlayingStream = function (streamID) {
        return this.zegoWechatMini.stopPlayingStream(streamID);
    };
    /**
     * 小程序组件网络状态通知事件
     *
     * Note: 详情描述：在小程序 <live-player> 和 <live-pusher> 组件中设置bindnetstatus属性，小程序回调的事件完全透传给SDK
     *
     * Note: 调用时机：推流成功后
     *
     * Note: 限制频率:  无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：无
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间： 无
     *
     * @param streamID 媒体流ID
     * @param event 回调函数的事件对象
     */
    ZegoExpressEngine.prototype.updatePlayerNetStatus = function (streamID, event) {
        return this.zegoWechatMini.updatePlayerNetStatus(streamID, event);
    };
    /**
     * 推流状态更新回调
     *
     * Note: 详情描述：在小程序 <live-player> 和 <live-pusher> 组件中设置bindstatechange属性，小程序回调的事件完全透传给SDK
     *
     * Note: 调用时机：推流成功后
     *
     * Note: 限制频率:  无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：SDK底层会根据event进行流状态更新，必须回调给SDK
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间： 无
     *
     * @param streamID 媒体流ID
     * @param event 回调函数的事件对象
     */
    ZegoExpressEngine.prototype.updatePlayerState = function (streamID, event) {
        return this.zegoWechatMini.updatePlayerState(streamID, event);
    };
    /**
     * 将本地流推送到远端（即构服务器）
     *
     * Note: 详情描述：调用推流接口获取推流地址
     *
     * Note: 调用时机：登录后，创建流成功后
     *
     * Note: 限制频率：没有限制
     *
     * Note: 与LiveRoom差异：无
     *
     * Note: 关注回调：推流质量回调publishQualityUpdate,推流状态回调publisherStateUpdate
     *
     * Note: 重点提示： localStream必须是通过createStream方法得到的
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param streamID 推流 ID，长度不超过256的字符串，仅支持数字，英文字符 和 '~', '!', '@', '#', '$', '', '^', '&', '*', '(', ')', '_', '+', '=', '-', ', ';', '’', ',', '.', '<', '>', '/', ''
     * @param publishOption? 推拉附加参数：鉴权、视频编码，可选
     *
     * @return true 代表客户端发送请求成功,流成功推送到服务器需要通过流状态回调接口判断;
     */
    ZegoExpressEngine.prototype.startPublishingStream = function (streamID, publishOption) {
        return this.zegoWechatMini.startPublishingStream(streamID, publishOption);
    };
    /**
     * 停止将本地流推送到远端（即构服务器）
     *
     * Note: 详情描述：需要在推流成功后才可以调用该接口
     *
     * Note: 调用时机：推流成功后
     *
     * Note: 限制频率：没有限制
     *
     * Note: 关注回调：推流状态回调publisherStateUpdate
     *
     * Note: 重点提示： 停止推流不会导致渲染的<video>画面暂停，开发者需自行销毁<video>
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param streamID 推流 ID,和推流streamID保持一致
     */
    ZegoExpressEngine.prototype.stopPublishingStream = function (streamID) {
        return this.zegoWechatMini.stopPublishingStream(streamID);
    };
    /**
     * 通知即构服务器将流转推到CDN
     *
     * Note: 详情描述：
     *    当需要将音视频流转推到其它指定的 CDN 时，需要调用此接口进行设置（调用前请先联系技术支持配置转推CDN功能）
     *    建议使用服务端动态转推CDN中的增加转推CDN地址 API替代该客户端API
     *
     * Note: 调用时机：推流成功后
     *
     * Note: 限制频率：没有限制
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：
     *   该接口调用有可能会失败，若返回成功，仅代表通知即构服务器成功，无法判断即构服务器是否转推CDN成功
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param streamID 推流 ID
     * @param targetURL CDN 转推地址，支持的转推地址格式有 rtmp
     */
    ZegoExpressEngine.prototype.addPublishCdnUrl = function (streamID, targetURL) {
        if (arguments.length === 3) {
            return this.zegoWechatMini.addPublishCdnUrl(
            // eslint-disable-next-line prefer-rest-params
            arguments[0], 
            // eslint-disable-next-line prefer-rest-params
            arguments[2]);
        }
        else {
            return this.zegoWechatMini.addPublishCdnUrl(streamID, targetURL);
        }
    };
    /**
     * 通知即构服务器停止将流转推到CDN
     *
     * Note: 详情描述：
     *     当已经添加了某个 CDN 转推地址，需要停止将流转推至该CDN时调用此接口（调用前请先联系技术支持配置转推CDN功能）
     *     建议使用服务端动态转推CDN API中的删除转推CDN地址 API替代该客户端API
     *
     * Note: 调用时机：转推成功后
     *
     * Note: 限制频率：没有限制
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：
     *    该接口调用有可能会失败，若返回成功，仅代表通知即构服务器成功，无法判断即构服务器是否转推CDN成功
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param streamID 推流 ID
     * @param targetURL CDN 转推地址，支持的转推地址格式有 rtmp
     */
    ZegoExpressEngine.prototype.removePublishCdnUrl = function (streamID, targetURL) {
        if (arguments.length === 3) {
            return this.zegoWechatMini.removePublishCdnUrl(
            // eslint-disable-next-line prefer-rest-params
            arguments[0], 
            // eslint-disable-next-line prefer-rest-params
            arguments[2]);
        }
        else {
            return this.zegoWechatMini.removePublishCdnUrl(streamID, targetURL);
        }
    };
    /**
     * 设置流的附加信息
     *
     * Note: 详情描述：更改流附加信息
     *
     * Note: 调用时机：推流成功后
     *
     * Note: 限制频率: 无
     *
     * Note: 关注回调：流附加信息回调streamExtraInfoUpdate
     *
     * Note: 重点提示：只支持字符串
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间： 无
     *
     * @param streamID 推流 ID
     * @param extraInfo 流附加信息; extraInfo为json格式字符串
     */
    ZegoExpressEngine.prototype.setStreamExtraInfo = function (streamID, extraInfo) {
        return this.zegoWechatMini.setStreamExtraInfo(streamID, extraInfo);
    };
    return ZegoExpressEngine;
}(zego_entity_1.ZegoExpressWebRTMEngine));
exports.ZegoExpressEngine = ZegoExpressEngine;


/***/ }),

/***/ "./sdk/src/common/action.ts":
/*!**********************************!*\
  !*** ./sdk/src/common/action.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ZEGO_WECHATMINI_ACTION = exports.ZEGO_WEBRTC_ACTION = void 0;
// ****** sdk函数映射************//
var ZEGO_WEBRTC_ACTION;
(function (ZEGO_WEBRTC_ACTION) {
    ZEGO_WEBRTC_ACTION["CONSTRUCTOR"] = "zc.0";
    ZEGO_WEBRTC_ACTION["CHECK_SUPPORT"] = "zc.csr";
    ZEGO_WEBRTC_ACTION["CREATE_STREAM"] = "zc.cs";
    ZEGO_WEBRTC_ACTION["DESTROY_STREAM"] = "zc.ds";
    ZEGO_WEBRTC_ACTION["START_PUBLISHING_STREAM"] = "zc.sps.0";
    ZEGO_WEBRTC_ACTION["START_PLAYING_STREAM"] = "zc.sps.1";
    ZEGO_WEBRTC_ACTION["STOP_PUBLISHING_STREAM"] = "zc.sps.0.0";
    ZEGO_WEBRTC_ACTION["STOP_PLAYING_STREAM"] = "zc.sps.1.0";
    ZEGO_WEBRTC_ACTION["BIND_WINDOW_LISTENER"] = "zc.wl";
    ZEGO_WEBRTC_ACTION["MUTE_PUBLISH_STREAM_VIDEO"] = "zc.mpsv.0";
    ZEGO_WEBRTC_ACTION["MUTE_PUBLISH_STREAM_AUDIO"] = "zc.mpsa.0";
    ZEGO_WEBRTC_ACTION["MUTE_PLAY_STREAM_VIDEO"] = "zc.mpsv.1";
    ZEGO_WEBRTC_ACTION["MUTE_PLAY_STREAM_AUDIO"] = "zc.mpsa.1";
    ZEGO_WEBRTC_ACTION["SET_AUDIO_OUTPUT"] = "zc.sao";
    ZEGO_WEBRTC_ACTION["SET_CUSTOM_SIGNAL_URL"] = "zc.scsu";
    ZEGO_WEBRTC_ACTION["SET_TURN_OVER_TCP_ONLY"] = "zc.stoto";
    ZEGO_WEBRTC_ACTION["SET_VIDEO_CONFIG"] = "zc.svc";
    ZEGO_WEBRTC_ACTION["SET_AUDIO_CONFIG"] = "zc.sac";
    ZEGO_WEBRTC_ACTION["REPLACE_TRACK"] = "zc.rp";
    ZEGO_WEBRTC_ACTION["PRELOAD_EFFECT"] = "zc.pe.0";
    ZEGO_WEBRTC_ACTION["PLAY_EFFECT"] = "zc.pe.1";
    ZEGO_WEBRTC_ACTION["PAUSE_EFFECT"] = "zc.pe.2";
    ZEGO_WEBRTC_ACTION["RESUME_EFFECT"] = "zc.re";
    ZEGO_WEBRTC_ACTION["STOP_EFFECT"] = "zc.se";
    ZEGO_WEBRTC_ACTION["UNLOAD_EFFECT"] = "zc.ue";
    ZEGO_WEBRTC_ACTION["SET_EFFECT_VOLUME"] = "zc.sev";
    ZEGO_WEBRTC_ACTION["START_MIXING_AUDIO"] = "zc.sma.0";
    ZEGO_WEBRTC_ACTION["STOP_MIXING_AUDIO"] = "zc.sma.1";
    ZEGO_WEBRTC_ACTION["MIXING_BUFFER"] = "zc.mb";
    ZEGO_WEBRTC_ACTION["STOP_MIXING_BUFFER"] = "zc.smb";
    ZEGO_WEBRTC_ACTION["SET_MIXING_AUDIO_VOLUME"] = "zc.smav";
    ZEGO_WEBRTC_ACTION["ENABLE_STREAM"] = "zc.es";
    ZEGO_WEBRTC_ACTION["RDH_ACTIVE"] = "zc.rdh.a";
    ZEGO_WEBRTC_ACTION["RDH_MAX_TIME"] = "zc.rdh.m";
    ZEGO_WEBRTC_ACTION["RDH_WEBRTC_URL_RSP"] = "zc.rdh.hfwur";
    ZEGO_WEBRTC_ACTION["PUBLISH_STATE_HANDLE"] = "zc.psh.0";
    ZEGO_WEBRTC_ACTION["PLAY_STATE_HANDLE"] = "zc.psh.1";
    ZEGO_WEBRTC_ACTION["STATECENTER_ACTION_LISTENER"] = "zc.sc.al";
    ZEGO_WEBRTC_ACTION["SIGNAL_SET_SESSION_INFO"] = "zc.s.ssi";
    ZEGO_WEBRTC_ACTION["SIGNAL_RESET_CONNECT_TIMER"] = "zc.s.rct";
    ZEGO_WEBRTC_ACTION["SIGNAL_BIND_WEBSOCKET_HANDLE"] = "zc.s.bwh";
    ZEGO_WEBRTC_ACTION["SIGNAL_RESET_CHECK_MESSAGE"] = "zc.s.rcm";
    ZEGO_WEBRTC_ACTION["SIGNAL_UPDATE_TOKEN"] = "zc.s.ut";
    ZEGO_WEBRTC_ACTION["SIGNAL_SEND_MESSAGE_WITH_CALLBACK"] = "zc.s.smwc";
    ZEGO_WEBRTC_ACTION["SIGNAL_CONNECT_SERVER"] = "zc.s.cs.0";
    ZEGO_WEBRTC_ACTION["SIGNAL_START_CONNECT_TIMER"] = "zc.s.sct";
    ZEGO_WEBRTC_ACTION["SIGNAL_DISCONNECT_SERVER"] = "zc.s.dc";
    ZEGO_WEBRTC_ACTION["SIGNAL_CREATE_SESSION"] = "zc.s.cs.1";
    ZEGO_WEBRTC_ACTION["SIGNAL_REMOVE_SESSION"] = "zc.s.rs";
    ZEGO_WEBRTC_ACTION["SIGNAL_SEND_REMOVE_SESSION"] = "zc.s.srs";
    ZEGO_WEBRTC_ACTION["SIGNAL_SEND_MESSAGE"] = "zc.s.sm";
    ZEGO_WEBRTC_ACTION["SIGNAL_HANDLE_RESPOND_DATA"] = "zc.s.hrd";
    ZEGO_WEBRTC_ACTION["SIGNAL_ADD_SESSION"] = "zc.s.as";
    ZEGO_WEBRTC_ACTION["SIGNAL_HANDLE_PUSH_DATA"] = "zc.s.hpd";
    ZEGO_WEBRTC_ACTION["SIGNAL_HANDLE_PUSH_RESET_SESSION_DATA"] = "zc.s.hprsd";
    ZEGO_WEBRTC_ACTION["SIGNAL_SEND_MEDIA_DESC"] = "zc.s.smd";
    ZEGO_WEBRTC_ACTION["SIGNAL_SEND_CANDIDATE_INFO"] = "zc.s.sci";
    ZEGO_WEBRTC_ACTION["SIGNAL_SEND_MEDIA_DESC_ACK"] = "zc.s.smda";
    ZEGO_WEBRTC_ACTION["SIGNAL_SEND_CANDIDATE_INFO_ACK"] = "zc.s.scia";
    ZEGO_WEBRTC_ACTION["SIGNAL_SEND_CLOSE_SESSION_ACK"] = "zc.s.scsa";
    ZEGO_WEBRTC_ACTION["SIGNAL_SEND_RESET_SESSION_ACK"] = "zc.s.srsa";
    ZEGO_WEBRTC_ACTION["SIGNAL_REGISTER_PUSH_CALLBACK"] = "zc.s.rpc";
    ZEGO_WEBRTC_ACTION["SIGNAL_CHECK_MESSAGE_TIMEOUT"] = "zc.s.cmt";
    ZEGO_WEBRTC_ACTION["SIGNAL_SEND_HEARTBEAT"] = "zc.s.sh";
    ZEGO_WEBRTC_ACTION["SIGNAL_QUALITY_REPORT"] = "zc.s.qr";
    ZEGO_WEBRTC_ACTION["SIGNAL_SEND_STREAM_STATUS"] = "zc.s.sss";
    ZEGO_WEBRTC_ACTION["SIGNAL_ACTIVE_PLAY_VIDEO_STREAM"] = "zc.s.apvs";
    ZEGO_WEBRTC_ACTION["SIGNAL_ACTIVE_PLAY_AUDIO_STREAM"] = "zc.s.apas";
    ZEGO_WEBRTC_ACTION["SIGNAL_SEND_BROADCAST_STATUS"] = "zc.s.sbs";
    ZEGO_WEBRTC_ACTION["SIGNAL_SEND_NET_PROBE"] = "zc.s.snp";
    ZEGO_WEBRTC_ACTION["SIGNAL_SEND_NET_QUALITY_INFO_PUSH_ACK"] = "zc.s.npa";
    ZEGO_WEBRTC_ACTION["PUBLISHER_START_PUBLISH"] = "zc.p.0.sp";
    ZEGO_WEBRTC_ACTION["PUBLISHER_PUBLISH_SUCCESS"] = "zc.p.ps";
    ZEGO_WEBRTC_ACTION["PUBLISHER_ON_CREATE_PUBLISH_SESSION_SUCCESS"] = "zc.p.0.ocpss";
    ZEGO_WEBRTC_ACTION["PUBLISHER_HANDLE_CREATE_SESSION_WITH_SDP"] = "zc.p.0.hcsws";
    ZEGO_WEBRTC_ACTION["PUBLISHER_ON_CREATE_OFFER_SUCCESS"] = "zc.p.0.ocos";
    ZEGO_WEBRTC_ACTION["PUBLISHER_ON_SET_LOCAL_DESCRIPTION_SUCCESS"] = "zc.p.0.oslds";
    ZEGO_WEBRTC_ACTION["PUBLISHER_ON_GET_REMOTE_DESCRIPTION"] = "zc.p.0.ogrd";
    ZEGO_WEBRTC_ACTION["PUBLISHER_ON_RECV_MEDIA_DESC"] = "zc.p.0.ormd";
    ZEGO_WEBRTC_ACTION["PUBLISHER_ON_RECV_CANDIDATE_INFO"] = "zc.p.0.orci.0";
    ZEGO_WEBRTC_ACTION["PUBLISHER_ON_RECV_PUBLISH_EVENT"] = "zc.p.0.orpe";
    ZEGO_WEBRTC_ACTION["PUBLISHER_ON_RECV_CLIENT_INFO"] = "zc.p.0.orci.1";
    ZEGO_WEBRTC_ACTION["PUBLISHER_ON_ICE_CANDIDATE"] = "zc.p.0.oic";
    ZEGO_WEBRTC_ACTION["PUBLISHER_ON_CONNECTION_STATE_CHANGE"] = "zc.p.0.ocsc";
    ZEGO_WEBRTC_ACTION["PUBLISHER_ON_ICE_CONNECTION_STATE_CHANGE"] = "zc.p.0.oicsc";
    ZEGO_WEBRTC_ACTION["PUBLISHER_RESET_PUBLISH"] = "zc.p.0.rp";
    ZEGO_WEBRTC_ACTION["PUBLISHER_SET_PLAYER_QUALITY_TIMER"] = "zc.p.0.spqt";
    ZEGO_WEBRTC_ACTION["PUBLISHER_UPLOAD_PUBLISH_QUALITY"] = "zc.p.0.upq";
    ZEGO_WEBRTC_ACTION["PUBLISHER_ON_RECV_RESET_SESSION"] = "zc.p.0.orrs";
    ZEGO_WEBRTC_ACTION["PUBLISHER_ON_RECV_CLOSE_SESSION"] = "zc.p.0.orcs";
    ZEGO_WEBRTC_ACTION["PUBLISHER_SEND_CANDIDATE_INFO"] = "zc.p.0.sci";
    ZEGO_WEBRTC_ACTION["PUBLISHER_STATE_ERROR"] = "zc.p.0.psr";
    ZEGO_WEBRTC_ACTION["PUBLISHER_STOP_PUBLISH"] = "zc.p.0.sp";
    ZEGO_WEBRTC_ACTION["PUBLISHER_ON_DISCONNECT"] = "zc.p.0.od";
    ZEGO_WEBRTC_ACTION["PUBLISHER_START_SOUND_LEVEL"] = "zc.p.0.ssl.0";
    ZEGO_WEBRTC_ACTION["PUBLISHER_STOP_SOUND_LEVEL"] = "zc.p.0.ssl.1";
    ZEGO_WEBRTC_ACTION["PUBLISHER_PLAY_EFFECT"] = "zc.p.0.pe.0";
    ZEGO_WEBRTC_ACTION["PUBLISHER_PAUSE_EFFECT"] = "zc.p.0.pe.1";
    ZEGO_WEBRTC_ACTION["PUBLISHER_RESUME_EFFECT"] = "zc.p.0.re";
    ZEGO_WEBRTC_ACTION["PUBLISHER_STOP_EFFECT"] = "zc.p.0.se";
    ZEGO_WEBRTC_ACTION["PUBLISHER_START_MIXING_AUDIO"] = "zc.p.0.sma.0";
    ZEGO_WEBRTC_ACTION["PUBLISHER_STOP_MIXING_AUDIO"] = "zc.p.0.sma.1";
    ZEGO_WEBRTC_ACTION["PUBLISHER_MIXING_BUFFER"] = "zc.p.0.mb";
    ZEGO_WEBRTC_ACTION["PUBLISHER_SET_MIXING_AUDIO_VOLUME"] = "zc.p.0.smav";
    ZEGO_WEBRTC_ACTION["PUBLISHER_HANDLE_ENC_BITRATE"] = "zc.p.0.heb";
    ZEGO_WEBRTC_ACTION["PUBLISHER_ON_RECV_NET_QUALITY_INFO"] = "zc.p.0.nqi";
    ZEGO_WEBRTC_ACTION["PLAYER_START_PLAY"] = "zc.p.sp.1";
    ZEGO_WEBRTC_ACTION["PLAYER_ON_CREATE_PLAY_SESSION_SUCCESS"] = "zc.p.ocpss.1";
    ZEGO_WEBRTC_ACTION["PLAYER_HANDLE_CREATE_SESSION_WITH_SDP"] = "zc.p.hcsws.1";
    ZEGO_WEBRTC_ACTION["PLAYER_ON_CREATE_OFFER_SUCCESS"] = "zc.p.ocos.1";
    ZEGO_WEBRTC_ACTION["PLAYER_ON_SET_LOCAL_DESCRIPTION_SUCCESS"] = "zc.p.oslds.1";
    ZEGO_WEBRTC_ACTION["PLAYER_ON_RECV_MEDIA_DESC"] = "zc.p.ormd.1";
    ZEGO_WEBRTC_ACTION["PLAYER_ON_RECV_CANDIDATE_INFO"] = "zc.p.orci.1";
    ZEGO_WEBRTC_ACTION["PLAYER_ON_RECV_PLAY_EVENT"] = "zc.p.orpe.1";
    ZEGO_WEBRTC_ACTION["PLAYER_ON_RECV_CLIENT_INFO"] = "zc.p.orci.1.1";
    ZEGO_WEBRTC_ACTION["PLAYER_ON_ICE_CANDIDATE"] = "zc.p.oic.1";
    ZEGO_WEBRTC_ACTION["PLAYER_ON_CONNECTION_STATE_CHANGE"] = "zc.p.ocsc.1";
    ZEGO_WEBRTC_ACTION["PLAYER_ON_ICE_CONNECTION_STATE_CHANGE"] = "zc.p.oicsc.1";
    ZEGO_WEBRTC_ACTION["PLAYER_RESET_PLAY"] = "zc.p.rp.1";
    ZEGO_WEBRTC_ACTION["PLAYER_SET_PLAYER_QUALITY_TIMER"] = "zc.p.spqt.1";
    ZEGO_WEBRTC_ACTION["PLAYER_UPLOAD_PLAYER_QUALITY"] = "zc.p.upq.1";
    ZEGO_WEBRTC_ACTION["PLAYER_ON_RECV_RESET_SESSION"] = "zc.p.orrs.1";
    ZEGO_WEBRTC_ACTION["PLAYER_ON_RECV_CLOSE_SESSION"] = "zc.p.orcs.1";
    ZEGO_WEBRTC_ACTION["PLAYER_ON_RECV_STREAM_STATUS"] = "zc.p.orss.1";
    ZEGO_WEBRTC_ACTION["PLAYER_ON_GOT_REMOTE_STREAM"] = "zc.p.ogrs.1";
    ZEGO_WEBRTC_ACTION["PLAYER_SEND_CANDIDATE_INFO"] = "zc.p.sci.1";
    ZEGO_WEBRTC_ACTION["PLAYER_STATE_ERROR"] = "zc.p.psr.1";
    ZEGO_WEBRTC_ACTION["PLAYER_STOP_PLAY"] = "zc.p.sp.1";
    ZEGO_WEBRTC_ACTION["PLAYER_ON_DISCONNECT"] = "zc.p.od.1";
    ZEGO_WEBRTC_ACTION["PLAYER_START_SOUND_LEVEL"] = "zc.p.ssl.1";
    ZEGO_WEBRTC_ACTION["PLAYER_STOP_SOUND_LEVEL"] = "zc.p.ssl.1.1";
    ZEGO_WEBRTC_ACTION["PLAYER_ON_RECV_NET_QUALITY_INFO"] = "zc.p.1.nqi";
    ZEGO_WEBRTC_ACTION["PUBLISH_SET_CAPTURE_VOLUME"] = "zc.p.scv";
    ZEGO_WEBRTC_ACTION["STREAMHANDLER_MERGE_STREAM_BY_STREAM_SEQ"] = "zc.sh.msbss";
    ZEGO_WEBRTC_ACTION["STREAMHANDLER_MERGE_STREAM"] = "zc.sh.ms";
    ZEGO_WEBRTC_ACTION["STREAMHANDLER_PATCH_STREAM_LIST"] = "zc.sh.psl"; //心跳流处理
})(ZEGO_WEBRTC_ACTION = exports.ZEGO_WEBRTC_ACTION || (exports.ZEGO_WEBRTC_ACTION = {}));
var ZEGO_WECHATMINI_ACTION;
(function (ZEGO_WECHATMINI_ACTION) {
    ZEGO_WECHATMINI_ACTION["ADD_PUBLISH_CDN_URL"] = "zw.apcu";
    ZEGO_WECHATMINI_ACTION["REMOVE_PUBLISH_CDN_URL"] = "zw.rpcu";
    ZEGO_WECHATMINI_ACTION["STOP_MIXER_TASK"] = "zw.smt";
    ZEGO_WECHATMINI_ACTION["ON_PUBLISH_STATE_UPDATE"] = "zw.w.opsu";
    ZEGO_WECHATMINI_ACTION["ON_PUBLISH_STATE_UPDATE_HANDLE"] = "zw.w.opsuh";
    ZEGO_WECHATMINI_ACTION["WECHATMINI_SETPREFERPLAYSOURCETYPE"] = "zw.w.sppst.1";
    ZEGO_WECHATMINI_ACTION["WECHATMINI_BIND_LISTENER"] = "zw.w.bl";
    ZEGO_WECHATMINI_ACTION["WECHATMINI_DELETE_LISTENER"] = "zw.w.dl";
    ZEGO_WECHATMINI_ACTION["WECHATMINI_UPDATE_PLAYER_STATE"] = "zw.w.ups";
    ZEGO_WECHATMINI_ACTION["WECHATMINI_UPDATE_PLAYER_NET_STATUS"] = "zw.w.upns";
    ZEGO_WECHATMINI_ACTION["WECHATMINI_SET_CUSTOM_SIGNAL_URL"] = "zw.w.scsu";
    ZEGO_WECHATMINI_ACTION["WECHATMINI_GET_NEXT_URL"] = "zw.w.gnu";
    ZEGO_WECHATMINI_ACTION["WECHATMINI_BIND_STREAM_CENTER_HANDLER"] = "zw.w.bsch";
    ZEGO_WECHATMINI_ACTION["WECHATMINI_BIND_RTM_LISTENER"] = "zw.w.brl";
    ZEGO_WECHATMINI_ACTION["PUBLISHMODULE_SET_PREFER_PUBLISH_SOURCE_TYPE"] = "zw.pu.sppst.0";
    ZEGO_WECHATMINI_ACTION["PUBLISHMODULE_START_PUBLISHING_STREAM"] = "zw.pu.sps.0";
    ZEGO_WECHATMINI_ACTION["PUBLISHMODULE_STOP_PUBLISHING_STREAM"] = "zw.pu.sps.0.0";
    ZEGO_WECHATMINI_ACTION["PUBLISHMODULE_FETCH_PUBLISH_STREAM_URL"] = "zw.pu.fpsu.0";
    ZEGO_WECHATMINI_ACTION["PUBLISHMODULE_HANDLE_FETCH_STREAM_PUBLISH_URL_RSP"] = "zw.pu.hfspur.0";
    ZEGO_WECHATMINI_ACTION["PUBLISHMODULE_DO_PUBLISH_STREAM"] = "zw.pu.dps.0";
    ZEGO_WECHATMINI_ACTION["PUBLISHMODULE_UPDATE_STREAM_INFO"] = "zw.pu.upi";
    ZEGO_WECHATMINI_ACTION["PUBLISHMODULE_HANDLE_STREAM_UPDATE_RSP"] = "zw.pu.hsur";
    ZEGO_WECHATMINI_ACTION["PLAYMODULE_START_PLAYING_STREAM"] = "zw.pl.sps.1";
    ZEGO_WECHATMINI_ACTION["PLAYMODULE_STOP_PLAYING_STREAM"] = "zw.pl.sps.1.0";
    ZEGO_WECHATMINI_ACTION["PLAYMODULE_START_PLAYING_STREAM_FROM_CDN"] = "zw.pl.spsfc";
    ZEGO_WECHATMINI_ACTION["PLAYMODULE_START_PLAYING_STREAM_FROM_BGP"] = "zw.pl.spsfb";
    ZEGO_WECHATMINI_ACTION["PLAYMODULE_DO_PLAY_STREAM"] = "zw.pl.dps";
    ZEGO_WECHATMINI_ACTION["PLAYMODULE_FETCH_PLAY_STREAM_URL"] = "zw.pl.fpsu";
    ZEGO_WECHATMINI_ACTION["PLAYMODULE_HANDLE_FETCH_STREAM_URL_RSP"] = "zw.pl.hfsur";
    ZEGO_WECHATMINI_ACTION["STREAMCENTERWECHAT_RESET"] = "zw.scw.r.0";
    ZEGO_WECHATMINI_ACTION["STREAMCENTERWECHAT_START_PUBLISHING_STREAM"] = "zw.scw.sps.0";
    ZEGO_WECHATMINI_ACTION["STREAMCENTERWECHAT_START_PLAYING_STREAM"] = "zw.scw.sps.1";
    ZEGO_WECHATMINI_ACTION["STREAMCENTERWECHAT_START_PLAYER"] = "zw.scw.sp.0";
    ZEGO_WECHATMINI_ACTION["STREAMCENTERWECHAT_ON_STREAM_URL_UPDATE"] = "zw.scw.opuu.0";
    ZEGO_WECHATMINI_ACTION["STREAMCENTERWECHAT_UPDATE_PLAYER_STATE"] = "zw.scw.ups.0";
    ZEGO_WECHATMINI_ACTION["STREAMCENTERWECHAT_UPDATE_PLAYER_NET_STATUS"] = "zw.scw.upns";
    ZEGO_WECHATMINI_ACTION["STREAMCENTERWECHAT_UPDATE_PUBLISHING_STATE"] = "zw.scw.ups.0.0";
    ZEGO_WECHATMINI_ACTION["STREAMCENTERWECHAT_UPDATE_PLAYING_STATE"] = "zw.scw.ups.1.0";
    ZEGO_WECHATMINI_ACTION["STREAMCENTERWECHAT_GET_NEXT_URL"] = "zw.scw.gnu";
    ZEGO_WECHATMINI_ACTION["STREAMCENTERWECHAT_STOP_PUBLISHING_STREAM"] = "zw.scw.sps.0.0";
    ZEGO_WECHATMINI_ACTION["STREAMCENTERWECHAT_STOP_PLAYING_STREAM"] = "zw.scw.sps.1.0";
    ZEGO_WECHATMINI_ACTION["STREAMCENTERWECHAT_STOP_PLAYER"] = "zw.scw.sp.1";
    ZEGO_WECHATMINI_ACTION["STREAMCENTERWECHAT_ON_PLAY_START"] = "zw.scw.ops.0";
    ZEGO_WECHATMINI_ACTION["STREAMCENTERWECHAT_ON_PLAY_STOP"] = "zw.scw.ops.1";
    ZEGO_WECHATMINI_ACTION["STREAMCENTERWECHAT_ON_PLAY_RETRY"] = "zw.scw.opr";
    ZEGO_WECHATMINI_ACTION["PLAYWECHAT_TRY_START_PLAYER"] = "zw.pw.tsp.0";
    ZEGO_WECHATMINI_ACTION["PLAYWECHAT_UPDATE_EVENT"] = "zw.pw.ue";
    ZEGO_WECHATMINI_ACTION["PLAYWECHAT_GET_PLAY_URL"] = "zw.pw.gpu";
    // PLAYMODULE_
})(ZEGO_WECHATMINI_ACTION = exports.ZEGO_WECHATMINI_ACTION || (exports.ZEGO_WECHATMINI_ACTION = {}));


/***/ }),

/***/ "./sdk/src/common/stateCenter.ts":
/*!***************************************!*\
  !*** ./sdk/src/common/stateCenter.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StateCenter = void 0;
var zego_entity_1 = __webpack_require__(/*! ../common/zego.entity */ "./sdk/src/common/zego.entity.ts");
var action_1 = __webpack_require__(/*! ./action */ "./sdk/src/common/action.ts");
var zego_entity_2 = __webpack_require__(/*! ./zego.entity */ "./sdk/src/common/zego.entity.ts");
var zego_log_event_1 = __webpack_require__(/*! ./zego.log.event */ "./sdk/src/common/zego.log.event.ts");
var StateCenter = /** @class */ (function () {
    function StateCenter(logger, dataReport) {
        this.logger = logger;
        this.dataReport = dataReport;
        this.debug = false;
        this.testEnvironment = false;
        this.pullLimited = true;
        this.configOK = false;
        this.relateService = [];
        this.role = 2;
        this.maxMemberCount = 0;
        this.roomCreateFlag = 1;
        //runState: ENUM_RUN_STATE = ENUM_RUN_STATE.logout;
        //lastRunState: ENUM_RUN_STATE = ENUM_RUN_STATE.logout;
        this.callbackList = {};
        this.streamQuerying = false;
        this.streamSeq = 0;
        this.streamList = [];
        this.publishStreamList = {};
        this.isResetRoom = false;
        this.streamUrlMap = {};
        this.cmdCallback = {};
        this.customUrl = [];
        this.customPlayUrl = [];
        this.turnOverTcpOnly = false;
        this.customSetTcpOrUdp = false;
        this.supportUdp = false;
        //音效相关
        this.audioEffectBuffer = {};
        this.audioBitRate = 48000;
        //动态转推cdn相关
        this.cdnSeq = 0;
        //回调相关
        this.listenerList = {
            roomStreamUpdate: [],
            streamExtraInfoUpdate: [],
            playerStateUpdate: [],
            publisherStateUpdate: [],
            screenSharingEnded: [],
            publishQualityUpdate: [],
            playQualityUpdate: [],
            remoteCameraStatusUpdate: [],
            remoteMicStatusUpdate: [],
            soundLevelUpdate: [],
            videoDeviceStateChanged: [],
            audioDeviceStateChanged: [],
            deviceError: [],
            _deviceError: [],
            _remoteCameraStatusUpdate: [],
            _remoteMicStatusUpdate: [],
            _streamUpdated: []
        };
        // log event
        this.reportList = {};
        this.reportSeqList = {
            startPublish: {},
            rePublish: {},
            startPlay: {},
            rePlay: {},
            stopPublish: {},
            stopPlay: {}
        };
        this.streamTrigger = {};
        // 混流配置相关
        this.mixStreamAdvance = {};
        this.audioStreamList = {};
        // 设备信息
        this.deviceInfos = null;
        this.deviceChangeTimer = null;
        this.deviceStateOut = false;
        this.networkState = zego_entity_2.ENUM_NETWORK_STATE.offline;
        this.streamRetryTime = 300;
        this.checkList = [];
        this.anchor_info = {
            anchor_id: "",
            anchor_id_name: "",
            anchor_nick_name: ""
        };
        this.streamConnectTime = 0;
        this.streamInfoList = {};
        this.clientIP = "";
    }
    // //是否登录
    // isLogin() {
    //     return this.runState === ENUM_RUN_STATE.login;
    // }
    //requestId
    StateCenter.prototype.getRequestId = function () {
        return this.idName + "-" + zego_entity_2.getSeq();
    };
    StateCenter.prototype.getSignalCmdContent = function (requestId, dest_id_name, result) {
        var data = {
            request_id: requestId,
            room_id: this.roomid,
            from_userid: this.idName,
            from_username: this.nickName,
            to_userid: dest_id_name
        };
        if (result != undefined) {
            data["result"] = result;
        }
        return JSON.stringify(data);
    };
    StateCenter.prototype.actionListener = function (listener) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!["playQualityUpdate", "publishQualityUpdate"].includes(listener) &&
            this.listenerList[listener]) {
            var reportSeq = zego_entity_1.getReportSeq();
            this.dataReport.newReport(reportSeq, zego_log_event_1.ZegoRTCLogEvent.kZegoListener.event);
            this.dataReport.addMsgInfo(reportSeq, {
                listener: listener,
                params: args
            });
            this.dataReport.uploadReport(reportSeq);
        }
        this.listenerList[listener] &&
            this.listenerList[listener].forEach(function (func) {
                try {
                    setTimeout(function () {
                        func.apply(void 0, args);
                    }, 0);
                }
                catch (error) {
                    _this.logger.error(action_1.ZEGO_WEBRTC_ACTION.STATECENTER_ACTION_LISTENER +
                        " " +
                        listener +
                        " " +
                        error);
                }
            });
    };
    return StateCenter;
}());
exports.StateCenter = StateCenter;


/***/ }),

/***/ "./sdk/src/common/streamCenter.ts":
/*!****************************************!*\
  !*** ./sdk/src/common/streamCenter.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ZegoStreamCenter = void 0;
var ZegoStreamCenter = /** @class */ (function () {
    function ZegoStreamCenter() {
        this.publisherList = {};
        this.playerList = {};
    }
    return ZegoStreamCenter;
}());
exports.ZegoStreamCenter = ZegoStreamCenter;


/***/ }),

/***/ "./sdk/src/common/streamHandler.ts":
/*!*****************************************!*\
  !*** ./sdk/src/common/streamHandler.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamHandler = void 0;
var zego_entity_1 = __webpack_require__(/*! ./zego.entity */ "./sdk/src/common/zego.entity.ts");
var client_util_1 = __webpack_require__(/*! ../util/client-util */ "./sdk/src/util/client-util.ts");
var zego_entity_2 = __webpack_require__(/*! ./zego.entity */ "./sdk/src/common/zego.entity.ts");
var zego_log_event_1 = __webpack_require__(/*! ./zego.log.event */ "./sdk/src/common/zego.log.event.ts");
var zego_error_1 = __webpack_require__(/*! ./zego.error */ "./sdk/src/common/zego.error.ts");
var action_1 = __webpack_require__(/*! ./action */ "./sdk/src/common/action.ts");
var StreamHandler = /** @class */ (function () {
    function StreamHandler(logger, stateCenter, rtm, dataReport, streamCenter) {
        this.minStreamSeq = 0;
        this.streamSeqMergeMap = {};
        this.streamListHBMergeInterval = 2000;
        this.streamListMergeInterval = 5000;
        this.logger = logger;
        this.rtm = rtm;
        this.stateCenter = stateCenter;
        this.dataReport = dataReport;
        this.streamCenter = streamCenter;
    }
    //空实现 被sdk覆盖
    StreamHandler.prototype.setCDNInfo = function (streamInfo, streamItem) {
        streamInfo.urlFlv =
            streamItem.urls_flv instanceof Array
                ? streamItem.urls_flv[0]
                : typeof streamItem.urls_flv == "string"
                    ? streamItem.urls_flv
                    : "";
        streamInfo.urlHls =
            streamItem.urls_m3u8 instanceof Array
                ? streamItem.urls_m3u8[0]
                : typeof streamItem.urls_m3u8 == "string"
                    ? streamItem.urls_m3u8
                    : "";
        streamInfo.urlHttpsFlv =
            streamItem.urls_https_flv instanceof Array
                ? streamItem.urls_https_flv[0]
                : typeof streamItem.urls_https_flv == "string"
                    ? streamItem.urls_https_flv
                    : "";
        streamInfo.urlHttpsHls =
            streamItem.urls_https_m3u8 instanceof Array
                ? streamItem.urls_https_m3u8[0]
                : typeof streamItem.urls_https_m3u8 == "string"
                    ? streamItem.urls_https_m3u8
                    : "";
        streamInfo.urlRtmp =
            streamItem.urls_rtmp instanceof Array
                ? streamItem.urls_rtmp[0]
                : typeof streamItem.urls_rtmp == "string"
                    ? streamItem.urls_rtmp
                    : "";
    };
    //空实现 被sdk覆盖
    StreamHandler.prototype.onStreamUpdated = function (roomid, type, streamList) { };
    //空实现 被sdk覆盖
    StreamHandler.prototype.onStreamExtraInfoUpdated = function (roomid, streamList) { };
    StreamHandler.prototype.handleStreamStart = function (msg) {
        var _this = this;
        this.logger.info('zb.sh.hss call stream update');
        this.streamListHBMergeInterval = msg.body.stream_list_hb_wait_merge_time || 2000;
        this.streamListMergeInterval = msg.body.stream_list_push_merge_timeout || 5000;
        this.stateCenter.streamQuerying = false;
        this.rtm.modules.service.on('stream', function (msg) {
            _this.handleStreamUpdateRsp(msg);
        });
        this.rtm.modules.service.on('push_stream_update', function (msg) {
            _this.handlePushStreamUpdateMsg(msg);
        });
        this.handleFullUpdateStream(msg.body.stream_seq, msg.body.stream_info || []);
        /* 流媒体推流正常，房间连接成功后，需要对比服务端返回的流信息，如果没有自己的推流信息，则需要发送流新增
        流媒体推流失败，房间连接成功后，需要对比服务端返回的流信息，如果有自己的推流信息，则要发送流删除 */
        this.handleReconnectStream(msg.body.stream_info);
        this.logger.info('zb.sh.hss call end');
    };
    //空实现 被sdk覆盖
    StreamHandler.prototype.onPublishStateUpdate = function (type, streamId, error) { };
    //流更新信令  退出上次推的自己的流
    StreamHandler.prototype.updateStreamInfo = function (streamid, cmd, stream_extra_info, error) {
        var _this = this;
        if (stream_extra_info === void 0) { stream_extra_info = ''; }
        this.logger.debug('zb.sh.usi call');
        var extra_info = stream_extra_info;
        var data = {
            stream_id: streamid,
            extra_info: extra_info,
        };
        var stream_msg = JSON.stringify(data);
        var bodyData = {
            sub_cmd: cmd,
            stream_msg: stream_msg,
        };
        this.stateCenter.streamInfoList[streamid] = {};
        this.stateCenter.streamInfoList[streamid].seq = this.rtm.modules.service.sendMessage("stream", bodyData, function (msg, seq) {
            _this.handleStreamUpdateRsp(msg);
        }, function (result, seq) {
            if (!_this.stateCenter.isResetRoom && !_this.rtm.modules.service.isDisConnect()
                && result.code && result.code == zego_error_1.errorCodeList.TIMEOUT.code && _this.stateCenter.streamInfoList[streamid].seq == seq) {
                if ((cmd == 2001 && _this.stateCenter.publishStreamList[streamid]
                    && _this.stateCenter.publishStreamList[streamid].state == zego_entity_1.ENUM_PUBLISH_STREAM_STATE.update_info) || cmd == 2002) {
                    //若不加setTimeout则可能导致在resetCheckMessageList时导致死循环
                    setTimeout(function () {
                        _this.updateStreamInfo(streamid, cmd, stream_extra_info, error);
                    }, 0);
                }
                else {
                    error && error(zego_error_1.errorCodeList.TIMEOUT);
                }
            }
            else {
                if (result.body && result.body.err_code) {
                    var err = client_util_1.ClientUtil.getServerError(result.body.err_code);
                    error && error(err, seq);
                }
            }
        });
        this.logger.info('zb.sh.usi call success cmd ' + cmd);
    };
    //流更新回包
    StreamHandler.prototype.handleStreamUpdateRsp = function (msg) {
        if (this.rtm.modules.service.isDisConnect()) {
            this.logger.error('zb.sh.hsur not login');
            return;
        }
        if (msg.body.err_code != 0) {
            this.logger.error('zb.sh.hsur stream update error ' + msg.body.err_code);
            return;
        }
        this.logger.info('zb.sh.hsur stream seq ' + this.stateCenter.streamSeq + ' server seq ' + msg.body.stream_seq);
        this.stateCenter.streamSeq = msg.body.stream_seq;
        var _loop_1 = function (i) {
            var streamid = msg.body.stream_info[i].stream_id;
            if (!this_1.stateCenter.publishStreamList[streamid]) {
                this_1.logger.info('hsur.0 stream is not exist');
                return { value: void 0 };
            }
            if (this_1.stateCenter.publishStreamList[streamid].state == zego_entity_1.ENUM_PUBLISH_STREAM_STATE.update_info) {
                this_1.stateCenter.publishStreamList[streamid].state = zego_entity_1.ENUM_PUBLISH_STREAM_STATE.publishing;
                if (!this_1.stateCenter.streamList.find(function (streamInfo) { return streamInfo.stream_id == streamid; })) {
                    this_1.stateCenter.streamList.push(msg.body.stream_info[i]);
                }
                this_1.onPublishStateUpdate(0, streamid, { code: 0, message: '' });
            }
            delete this_1.stateCenter.streamInfoList[streamid];
        };
        var this_1 = this;
        //流删除时，publishStreamList已经删除了
        for (var i = 0; i < msg.body.stream_info.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    StreamHandler.prototype.handleFetchStreamListRsp = function (msg) {
        this.logger.info('zb.sh.hfslr call');
        this.stateCenter.streamQuerying = false;
        if (msg.body.err_code !== 0) {
            this.logger.info('zb.sh.hfslr server error=', msg.body.err_code);
            return;
        }
        if (this.stateCenter.streamSeq === msg.body.stream_seq) {
            this.logger.info('zb.sh.hfslr same seq');
            return;
        }
        this.handleFullUpdateStream(msg.body.stream_seq, msg.body.stream_info);
        this.logger.info('zb.sh.hfslr call success');
    };
    StreamHandler.prototype.handleFullUpdateStream = function (serverStreamSeq, serverStreamList) {
        var _this = this;
        this.logger.info('zb.sh.hfus call');
        this.stateCenter.streamSeq = serverStreamSeq;
        this.logger.debug('zb.sh.hfus server seq ' + this.stateCenter.streamSeq);
        client_util_1.ClientUtil.mergeStreamList(this.stateCenter.idName, this.stateCenter.streamList, serverStreamList, function (addStreamList, delStreamList, updateStreamList) {
            if (addStreamList.length !== 0) {
                _this.logger.debug('zb.sh.hfus callback addstream');
                _this.onStreamUpdated(_this.stateCenter.roomid, zego_entity_1.ENUM_STREAM_UPDATE_TYPE.added, _this.makeCallbackStreamList(addStreamList));
            }
            if (delStreamList.length !== 0) {
                _this.logger.debug('zb.sh.hfus callback delstream');
                _this.onStreamUpdated(_this.stateCenter.roomid, zego_entity_1.ENUM_STREAM_UPDATE_TYPE.deleted, _this.makeCallbackStreamList(delStreamList));
            }
            if (updateStreamList.length !== 0) {
                _this.logger.debug('zb.sh.hfus callback updatestream');
                _this.onStreamExtraInfoUpdated(_this.stateCenter.roomid, _this.makeCallbackStreamList(updateStreamList));
            }
        });
        //this.stateCenter.streamList = serverStreamList;
        this.logger.info('zb.sh.hfus call success');
    };
    StreamHandler.prototype.handlePushStreamUpdateMsg = function (msg) {
        this.logger.info('zb.sh.hpsum call');
        if (!msg.body.stream_info || msg.body.stream_info.length === 0) {
            this.logger.info('zb.sh.hpsum, emtpy list');
            return;
        }
        if (msg.body.stream_info.length + this.stateCenter.streamSeq !== msg.body.stream_seq) {
            this.logger.info('zb.sh.hpsum call updatestream');
            this.mergeStreamByStreamSeq(msg.body.stream_cmd, msg.body.stream_seq, msg.body.stream_info);
            return;
        }
        this.stateCenter.streamSeq = msg.body.stream_seq;
        switch (msg.body.stream_cmd) {
            case zego_entity_1.ENUM_STREAM_UPDATE_CMD.added:
                this.handleAddedStreamList(msg.body.stream_info);
                break;
            case zego_entity_1.ENUM_STREAM_UPDATE_CMD.deleted:
                this.handleDeletedStreamList(msg.body.stream_info);
                break;
            case zego_entity_1.ENUM_STREAM_UPDATE_CMD.updated:
                this.handleUpdatedStreamList(msg.body.stream_info);
                break;
        }
        this.logger.info('zb.sh.hpsum call success');
    };
    StreamHandler.prototype.handleAddedStreamList = function (streamList) {
        this.logger.debug('zb.sh.hasl call');
        var addStreamList = [];
        var flag;
        for (var i = 0; i < streamList.length; i++) {
            if (streamList[i].anchor_id_name == this.stateCenter.idName) {
                this.logger.debug('hdsl.0 have self stream added');
                continue;
            }
            flag = false;
            for (var j = 0; j < this.stateCenter.streamList.length; j++) {
                if (streamList[i].stream_id === this.stateCenter.streamList[j].stream_id) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                addStreamList.push(streamList[i]);
            }
        }
        if (addStreamList.length !== 0) {
            this.logger.debug('zb.sh.hasl callback addstream');
            // this.stateCenter.streamList.concat(addStreamList);
            for (var k = 0; k < addStreamList.length; k++) {
                this.stateCenter.streamList.push(addStreamList[k]);
            }
            this.onStreamUpdated(this.stateCenter.roomid, zego_entity_1.ENUM_STREAM_UPDATE_TYPE.added, this.makeCallbackStreamList(addStreamList));
        }
        this.logger.info('zb.sh.hasl call success');
    };
    StreamHandler.prototype.handleDeletedStreamList = function (streamList) {
        this.logger.debug('zb.sh.hdsl call');
        var delStreamList = [];
        for (var i = 0; i < streamList.length; i++) {
            if (streamList[i].anchor_id_name == this.stateCenter.idName) {
                this.logger.debug('zb.sh.hdsl have self stream deleted');
                continue;
            }
            for (var j = this.stateCenter.streamList.length - 1; j >= 0; j--) {
                if (streamList[i].stream_id === this.stateCenter.streamList[j].stream_id) {
                    this.stateCenter.streamList.splice(j--, 1);
                    delStreamList.push(streamList[i]);
                    break;
                }
            }
        }
        if (delStreamList.length !== 0) {
            this.logger.debug('zb.sh.hdsl callback delstream');
            this.onStreamUpdated(this.stateCenter.roomid, zego_entity_1.ENUM_STREAM_UPDATE_TYPE.deleted, this.makeCallbackStreamList(delStreamList));
        }
        this.logger.info('zb.sh.hdsl call');
    };
    StreamHandler.prototype.handleUpdatedStreamList = function (streamList) {
        this.logger.debug('zb.sh.husl call');
        var updateStreamList = [];
        for (var i = 0; i < streamList.length; i++) {
            if (streamList[i].anchor_id_name == this.stateCenter.idName) {
                this.logger.debug('hsul.0 have self stream updated');
                continue;
            }
            for (var j = 0; j < this.stateCenter.streamList.length; j++) {
                if (streamList[i].stream_id === this.stateCenter.streamList[j].stream_id) {
                    if (streamList[i].extra_info !== this.stateCenter.streamList[j].extra_info) {
                        this.stateCenter.streamList[j] = streamList[i];
                        updateStreamList.push(streamList[i]);
                    }
                    break;
                }
            }
        }
        if (updateStreamList.length !== 0) {
            this.logger.debug('zb.sh.husl callback updatestream');
            this.onStreamExtraInfoUpdated(this.stateCenter.roomid, this.makeCallbackStreamList(updateStreamList));
        }
        this.logger.info('zb.sh.husl call success');
    };
    // 拉取服务端流信息
    StreamHandler.prototype.fetchStreamList = function () {
        this.logger.info('zb.sh.fsl call');
        // 不是处于登录状态，不让拉流
        if (this.rtm.modules.service.isDisConnect()) {
            this.logger.info('zb.sh.fsl state error');
            return;
        }
        // 是否正处于拉流状态 false 为完成， true为正在拉流
        if (this.stateCenter.streamQuerying) {
            this.logger.info('zb.sh.fsl already doing');
            return;
        }
        this.stateCenter.streamQuerying = true;
        this.logger.debug('zb.sh.fsl send fetch request');
        var bodyData = {
            reserve: 0,
        };
        // 发送消息
        this.rtm.modules.service.sendMessage('stream_info', bodyData, this.handleFetchStreamListRsp.bind(this), function (err, seq) { });
        this.logger.info('zb.sh.fsl call success');
    };
    StreamHandler.prototype.handleReconnectStream = function (newStreamList) {
        this.logger.info('zb.sh.hrs call');
        var publisherList = this.streamCenter.publisherList;
        var playerList = this.streamCenter.playerList;
        var _loop_2 = function (streamID) {
            //当前推流成功但服务端无该流信息则补发上报流新增
            if (publisherList[streamID].publisher.state == zego_entity_1.ENUM_PUBLISH_STATE.publishing && !newStreamList.find(function (stream) { return stream.stream_id == streamID; })) {
                this_2.updateStreamInfo(streamID, zego_entity_1.ENUM_STREAM_SUB_CMD.liveBegin, this_2.stateCenter.publishStreamList[streamID].extra_info);
                //推流失败但服务端还有该流信息则补发流删除
            }
            else if (publisherList[streamID].publisher.state == zego_entity_1.ENUM_PUBLISH_STATE.stop && newStreamList.find(function (stream) { return stream.stream_id == streamID; })) {
                this_2.updateStreamInfo(streamID, zego_entity_1.ENUM_STREAM_SUB_CMD.liveEnd);
                //上报流删除时需将statecenter.streamList中对应的流删除
                for (var i = 0; i < this_2.stateCenter.streamList.length; i++) {
                    if (this_2.stateCenter.streamList[i].stream_id == streamID) {
                        this_2.stateCenter.streamList.splice(i--, 1);
                        break;
                    }
                }
            }
        };
        var this_2 = this;
        for (var streamID in publisherList) {
            _loop_2(streamID);
        }
        //部分流需重新调度
        for (var streamID in publisherList) {
            if (publisherList[streamID].isReDispatch) {
                this.logger.info('zb.sh.hrs ' + streamID + 'retry dispatch');
                var retryDispatchHandler = publisherList[streamID].retryDispatchHandler;
                retryDispatchHandler.stopMaxTime();
                retryDispatchHandler.invalid();
                retryDispatchHandler.initStream(streamID, publisherList[streamID].publishOption, true);
                retryDispatchHandler.active(0);
                publisherList[streamID].isReDispatch = false;
            }
        }
        for (var streamID in playerList) {
            if (playerList[streamID].isReDispatch) {
                this.logger.info('zb.sh.hrs ' + streamID + 'retry dispatch');
                var retryDispatchHandler = playerList[streamID].retryDispatchHandler;
                retryDispatchHandler.stopMaxTime();
                retryDispatchHandler.invalid();
                retryDispatchHandler.initStream(streamID, playerList[streamID].playOption, false);
                retryDispatchHandler.active(0);
                playerList[streamID].isReDispatch = false;
            }
        }
        this.logger.info('zb.sh.hrs end');
    };
    StreamHandler.prototype.makeCallbackStreamList = function (streamList) {
        var callbackStreamList = [];
        if (streamList && streamList.length > 0) {
            for (var i = 0; i < streamList.length; i++) {
                var streamInfo = {
                    user: {
                        userID: streamList[i].anchor_id_name,
                        userName: streamList[i].anchor_nick_name,
                    },
                    extraInfo: streamList[i].extra_info,
                    streamID: streamList[i].stream_id,
                    roomID: '',
                    urlFlv: '',
                    urlRtmp: '',
                    urlHls: '',
                    urlHttpsFlv: '',
                    urlHttpsHls: '',
                    streamGID: streamList[i].stream_gid,
                    closeType: streamList[i].close_type
                };
                this.setCDNInfo(streamInfo, streamList[i]);
                callbackStreamList.push(streamInfo);
            }
        }
        return callbackStreamList;
    };
    StreamHandler.prototype.updateMixStream = function (mixStreamConfig, successCallback, errorCallback) {
        var _a;
        var _this = this;
        this.logger.info('zb.sh.ums call');
        if (!mixStreamConfig.noTaskID && !mixStreamConfig.taskID) {
            this.logger.error('zb.sh.ums no taskId found');
            errorCallback({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kTaskIDNullError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kTaskIDNullError.message });
            return false;
        }
        if (!mixStreamConfig.noTaskID && typeof mixStreamConfig.taskID !== 'string') {
            this.logger.error('zb.rh.lg taskId must be string');
            errorCallback({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message });
            return false;
        }
        if (!mixStreamConfig.noTaskID && mixStreamConfig.taskID.length > zego_entity_1.MAX_MIX_TASK_ID_LENGTH) {
            this.logger.error('zb.sh.ums taskId is too long');
            errorCallback({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kTaskIDToLongError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kTaskIDToLongError.message });
            return false;
        }
        if (!mixStreamConfig.noTaskID && !client_util_1.ClientUtil.checkIllegalCharacters(mixStreamConfig.taskID)) {
            this.logger.error('zb.sh.ums task ID contains illegal characters');
            errorCallback({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kTaskIDInvalidCharacterError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kTaskIDInvalidCharacterError.message });
            return false;
        }
        if (!mixStreamConfig.inputList || mixStreamConfig.inputList.length == 0) {
            this.logger.error('zb.sh.ums input list wrong');
            errorCallback({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kInputListNullError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kInputListNullError.message });
            return false;
        }
        // 纯音频内部指定参数
        mixStreamConfig.inputList.forEach(function (streamInfo) {
            if (streamInfo.contentType === 'AUDIO') {
                !streamInfo.layout && (streamInfo.layout = { top: 0, left: 0, bottom: 0, right: 0 });
                streamInfo.layout.top = 0;
                streamInfo.layout.left = 0;
                streamInfo.layout.bottom = 1;
                streamInfo.layout.right = 1;
            }
        });
        var allAudio = mixStreamConfig.inputList.every(function (input) { return input.contentType === 'AUDIO'; });
        for (var i = 0; i < mixStreamConfig.inputList.length; i++) {
            var inputInfo = mixStreamConfig.inputList[i];
            if (typeof inputInfo.layout !== 'object') {
                this.logger.error('zb.sh.ums input layout must be object');
                errorCallback({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message });
                return false;
            }
            if (!client_util_1.ClientUtil.checkInteger(inputInfo.layout.top, false) || !client_util_1.ClientUtil.checkInteger(inputInfo.layout.bottom, false) || !client_util_1.ClientUtil.checkInteger(inputInfo.layout.left, false) || !client_util_1.ClientUtil.checkInteger(inputInfo.layout.right, false)) {
                this.logger.error('zb.sh.ums top、left、bottom、right must be integer number');
                errorCallback({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message });
                return false;
            }
        }
        if (!mixStreamConfig.outputList || mixStreamConfig.outputList.length == 0) {
            this.logger.error('zb.sh.ums no output list found');
            errorCallback({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputListNullError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputListNullError.message });
            return false;
        }
        if (mixStreamConfig.outputList.some(function (output) {
            return (typeof output === 'string' && !client_util_1.ClientUtil.isUrl(output) && !client_util_1.ClientUtil.checkIllegalCharacters(output)) || (typeof output === 'object' && output.target && !client_util_1.ClientUtil.isUrl(output.target)
                && !client_util_1.ClientUtil.checkIllegalCharacters(output.target));
        })) {
            this.logger.error('zb.sh.ums stream output target is incorrect');
            errorCallback({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputTargetInvalidError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputTargetInvalidError.message });
            return false;
        }
        if (!allAudio && (!mixStreamConfig.outputConfig || typeof mixStreamConfig.outputConfig !== 'object')) {
            this.logger.error('zb.sh.ums no output config found');
            errorCallback({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputNoTargetError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputNoTargetError.message });
            return false;
        }
        if (allAudio) {
            mixStreamConfig.outputConfig === undefined && (mixStreamConfig.outputConfig = {
                outputBitrate: 0,
                outputFPS: 0,
                outputWidth: 0,
                outputHeight: 0,
            });
            mixStreamConfig.outputConfig.outputBitrate = 0.001;
            mixStreamConfig.outputConfig.outputFPS = 1;
            mixStreamConfig.outputConfig.outputWidth = 1;
            mixStreamConfig.outputConfig.outputHeight = 1;
        }
        if (!allAudio && (!mixStreamConfig.outputConfig.outputBitrate || !client_util_1.ClientUtil.checkInteger(mixStreamConfig.outputConfig.outputBitrate))) {
            this.logger.error('zb.sh.ums bitrate param is required and must be integer number');
            errorCallback({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message });
            return false;
        }
        if (!mixStreamConfig.outputConfig.outputFPS || !client_util_1.ClientUtil.checkInteger(mixStreamConfig.outputConfig.outputFPS)) {
            this.logger.error('zb.sh.ums fps param is required and must be integer number');
            errorCallback({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message });
            return false;
        }
        if (!mixStreamConfig.outputConfig.outputWidth || !client_util_1.ClientUtil.checkInteger(mixStreamConfig.outputConfig.outputWidth)) {
            this.logger.error('zb.sh.ums width param is required and must be integer number');
            errorCallback({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message });
            return false;
        }
        if (!mixStreamConfig.outputConfig.outputHeight || !client_util_1.ClientUtil.checkInteger(mixStreamConfig.outputConfig.outputHeight)) {
            this.logger.error('zb.sh.ums height param is required and must be integer number');
            errorCallback({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message });
            return false;
        }
        if (mixStreamConfig.outputConfig.outputAudioCodecID !== undefined && !client_util_1.ClientUtil.checkInteger(mixStreamConfig.outputConfig.outputAudioCodecID, false)) {
            this.logger.error('zb.sh.ums AudioCodecID param must be integer number');
            errorCallback({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message });
            return false;
        }
        if (mixStreamConfig.outputConfig.outputAudioBitrate !== undefined && !client_util_1.ClientUtil.checkInteger(mixStreamConfig.outputConfig.outputAudioBitrate)) {
            this.logger.error('zb.sh.ums AudioBitrate param must be integer number');
            errorCallback({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message });
            return false;
        }
        if (mixStreamConfig.outputConfig.outputAudioChannels !== undefined && !client_util_1.ClientUtil.checkInteger(mixStreamConfig.outputConfig.outputAudioChannels, false)) {
            this.logger.error('zb.sh.ums AudioChannels param must be integer number');
            errorCallback({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message });
            return false;
        }
        var _bypass = 0;
        if (mixStreamConfig.outputConfig.singleStreamPassThrough && typeof mixStreamConfig.outputConfig.singleStreamPassThrough === 'boolean') {
            _bypass = mixStreamConfig.outputConfig.singleStreamPassThrough ? 1 : 0;
        }
        var req_body = {
            task_id: mixStreamConfig.taskID,
            id_name: this.stateCenter.idName,
            live_channel: this.stateCenter.roomid,
            appid: this.stateCenter.appid,
            version: zego_entity_1.PROTO_VERSION,
            bypass: _bypass
        };
        var _advance = this.stateCenter.mixStreamAdvance;
        if (_advance) {
            // if (_advance.userData) {
            //     req_body['UserData'] = _advance.userData;
            // }
            if (_advance.videoCodec) {
                req_body['extra_params'] = [{ key: 'video_encode', value: _advance.videoCodec }];
            }
            if (_advance.backgroundColor) {
                req_body['output_bg_color'] = _advance.backgroundColor;
            }
            if (_advance.backgroundImage) {
                req_body['output_bg_image'] = _advance.backgroundImage;
            }
            if (_advance.waterMark) {
                req_body['watermark'] = _advance.waterMark;
            }
            if (_advance.extraParams) {
                !req_body['extra_params'] && (req_body['extra_params'] = []);
                (_a = req_body['extra_params']).push.apply(_a, _advance.extraParams);
            }
        }
        var mixInput = [];
        for (var i = 0; i < mixStreamConfig.inputList.length; i++) {
            var streamInfo = mixStreamConfig.inputList[i];
            var totalStreamId = streamInfo.streamID;
            if (this.stateCenter.testEnvironment) {
                totalStreamId = 'zegotest-' + this.stateCenter.appid + '-' + streamInfo.streamID;
            }
            mixInput.push({
                stream_id: totalStreamId,
                content_control: streamInfo.contentType === 'AUDIO' ? 1 : 0,
                rect: {
                    layer: i,
                    top: streamInfo.layout.top,
                    left: streamInfo.layout.left,
                    bottom: streamInfo.layout.bottom,
                    right: streamInfo.layout.right,
                },
            });
        }
        req_body['MixInput'] = mixInput;
        client_util_1.ClientUtil.actionSuccessCallback('kZegoTaskMixStart' + mixStreamConfig.taskID, this.stateCenter.reportList) &&
            client_util_1.ClientUtil.actionSuccessCallback('kZegoTaskMixStart' + mixStreamConfig.taskID, this.stateCenter.reportList)(zego_entity_2.REPORT_ACTION.addMsgInfo, undefined, {
                mix_stream_id: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.mix_stream_id(mixStreamConfig.taskID),
                stream_cnt: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.stream_cnt(mixInput.length),
                input_stream_list: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.input_stream_list(mixInput),
            });
        var mixOutput = [];
        mixStreamConfig.outputList.forEach(function (streamInfo) {
            var outputStreamInfo = {};
            var _target = '';
            if (typeof streamInfo === 'string') {
                _target = streamInfo;
            }
            else if (typeof streamInfo === 'object' && streamInfo['target']) {
                _target = streamInfo.target;
            }
            else {
                _this.logger.error('zb.sh.ums output target required');
                errorCallback({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputTargetInvalidError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputTargetInvalidError.message });
                return false;
            }
            if (_target.startsWith('rtmp://') ||
                (_target.startsWith('https://') && _target.endsWith('.flv')) ||
                (_target.startsWith('https://') && _target.endsWith('.m3u8'))) {
                outputStreamInfo['mixurl'] = _target;
            }
            else {
                if (_this.stateCenter.testEnvironment) {
                    outputStreamInfo['stream_id'] = 'zegotest-' + _this.stateCenter.appid + '-' + _target;
                }
                else {
                    outputStreamInfo['stream_id'] = _target;
                }
            }
            outputStreamInfo['bitrate'] = mixStreamConfig.outputConfig.outputBitrate * 1000;
            outputStreamInfo['fps'] = mixStreamConfig.outputConfig.outputFPS;
            outputStreamInfo['width'] = mixStreamConfig.outputConfig.outputWidth;
            outputStreamInfo['height'] = mixStreamConfig.outputConfig.outputHeight;
            if (mixStreamConfig.outputConfig.outputAudioCodecID) {
                outputStreamInfo['audio_enc_id'] = mixStreamConfig.outputConfig.outputAudioCodecID;
            }
            if (_advance.videoCodec === 'vp8') {
                outputStreamInfo['audio_enc_id'] = 3;
            }
            else if (_advance.videoCodec === 'h264') {
                outputStreamInfo['audio_enc_id'] = 0;
            }
            if (mixStreamConfig.outputConfig.outputAudioBitrate) {
                outputStreamInfo['audio_bitrate'] = mixStreamConfig.outputConfig.outputAudioBitrate * 1000;
            }
            if (mixStreamConfig.outputConfig.outputAudioChannels) {
                outputStreamInfo['audio_channel_cnt'] = mixStreamConfig.outputConfig.outputAudioChannels;
            }
            if (_this.stateCenter.testEnvironment) {
                outputStreamInfo['testenv'] = 1;
            }
            else {
                outputStreamInfo['testenv'] = 0;
            }
            mixOutput.push(outputStreamInfo);
        });
        req_body['MixOutput'] = mixOutput;
        client_util_1.ClientUtil.actionSuccessCallback('kZegoTaskMixStart' + mixStreamConfig.taskID, this.stateCenter.reportList) &&
            client_util_1.ClientUtil.actionSuccessCallback('kZegoTaskMixStart' + mixStreamConfig.taskID, this.stateCenter.reportList)(zego_entity_2.REPORT_ACTION.addMsgInfo, undefined, {
                output_target_list: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.output_target_list(mixOutput)
            });
        var body = {
            channel: 'zeus',
            cmd: 'start_mix',
            req_body: JSON.stringify(req_body),
        };
        this.logger.debug('zb.sh.ums send command');
        this.sendBizChannelRequest(body, function (seq, cmd, rspBody) {
            _this.logger.debug('zb.sh.ums receive message');
            var prefix = 'zegotest-' + _this.stateCenter.appid + '-';
            if (rspBody.length == 0) {
                if (errorCallback) {
                    errorCallback({
                        errorCode: client_util_1.ClientUtil.getServerError(zego_entity_1.MIXSTREAM_ERROR_CODE + 1).code,
                        extendedData: '',
                    });
                }
                return;
            }
            var data = JSON.parse(rspBody);
            var mixPlayInfoList = [];
            for (var i = 0; i < data.play.length; i++) {
                var mixPlayInfo = {
                    rtmpURL: '',
                    hlsURL: '',
                    flvURL: '',
                };
                var streamID = data.play[i].stream_alias || '';
                if (_this.stateCenter.testEnvironment && streamID && streamID.startsWith(prefix)) {
                    streamID = streamID.slice(prefix.length);
                }
                mixPlayInfo['streamID'] = streamID;
                if (data.play[i].rtmp_url && data.play[i].rtmp_url.length > 0) {
                    mixPlayInfo.rtmpURL = data.play[i].rtmp_url;
                }
                if (data.play[i].hls_url && data.play[i].hls_url.length > 0) {
                    mixPlayInfo['hlsURL'] = data.play[i].hls_url;
                }
                if (data.play[i].hdl_url && data.play[i].hdl_url.length > 0) {
                    mixPlayInfo['flvURL'] = data.play[i].hdl_url;
                }
                mixPlayInfoList.push(mixPlayInfo);
            }
            if (successCallback) {
                var mixs = { mixerOutputList: mixPlayInfoList };
                successCallback({ errorCode: 0, extendedData: JSON.stringify(mixs) });
                // successCallback({ errorCode: 0 ,extendedData: ''})
            }
        }, function (error, seq, rspBody) {
            if (typeof error == 'number') {
                _this.logger.debug('zb.sh.ums error: ' + error);
                var nonExistsStreamId = [];
                if (error == 1000000150 && rspBody.length != 0) {
                    //no stream list
                    var data = JSON.parse(rspBody);
                    var prefix = 'zegotest-' + _this.stateCenter.appid + '-';
                    for (var i = 0; i < data.non_exist_streams.length; i++) {
                        var totalStreamId = data.non_exist_streams[i];
                        if (_this.stateCenter.testEnvironment && totalStreamId.startsWith(prefix)) {
                            nonExistsStreamId.push(totalStreamId.slice(prefix.length));
                        }
                        else {
                            nonExistsStreamId.push(totalStreamId);
                        }
                    }
                }
                if (errorCallback) {
                    errorCallback({
                        errorCode: client_util_1.ClientUtil.getServerError(error).code,
                        extendedData: '',
                    });
                }
            }
            else {
                _this.logger.debug('zb.sh.ums error code ' + error.code);
                var _err = void 0;
                if (error == zego_error_1.errorCodeList.TIMEOUT) {
                    _err = zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kRequestError;
                }
                else {
                    _err = zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStart.error.kInternalError;
                }
                if (errorCallback) {
                    errorCallback({ errorCode: _err.code, extendedData: '' });
                }
            }
        });
        return true;
    };
    StreamHandler.prototype.sendBizChannelRequest = function (reqBody, success, error, isRetry) {
        var _this = this;
        if (isRetry === void 0) { isRetry = false; }
        reqBody = Object.assign(reqBody, { is_retry_req: isRetry ? 1 : 0 });
        this.rtm.modules.service.sendMessage('biz_channel', reqBody, function (msg, seq) {
            success(msg.header.seq, msg.body.cmd, msg.body.rsp_body);
        }, function (msg, seq) {
            var err = msg.body.err_code;
            var rspBody = msg.message.body.rsp_body;
            // retry
            if (typeof err == 'number' && err === 2002) {
                _this.sendBizChannelRequest(reqBody, success, error, true);
                return;
            }
            error(err, seq, rspBody);
        });
    };
    StreamHandler.prototype.setMixerTaskConfig = function (advance) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            var mixStreamAdvance = {};
            var config = {};
            // if (
            //     advance &&
            //     advance.userData &&
            //     typeof advance.userData == 'string' &&
            //     (advance.userData as string).length <= 10000
            // ) {
            //     mixStreamAdvance.userData = advance.userData;
            // }
            if (advance && advance.videoCodec) {
                var videoc = advance.videoCodec.toLowerCase();
                if (['vp8', 'h264'].indexOf(videoc) == -1) {
                    _this.logger.error('zb.sh.ums param videoCode error');
                    reject({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kVideoConfigInvalidError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kVideoConfigInvalidError.message });
                    return false;
                }
                //@ts-ignore
                mixStreamAdvance.videoCodec = videoc;
                config['video_codec'] = videoc;
                // mixStreamAdvance.extraParams = [{ key: 'video_encode', value: advance.videoCodec }];
            }
            if (advance.backgroundColor) {
                // mixOutput["output_bg_color"] = mixStreamConfig.outputBgColor;
                if (!client_util_1.ClientUtil.checkInteger(advance.backgroundColor)) {
                    _this.logger.error('zb.sh.ums param backgroundColor must be integer number');
                    reject({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kParamError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kParamError.message });
                    return false;
                }
                mixStreamAdvance.backgroundColor = advance.backgroundColor;
                config['background_color'] = advance.backgroundColor;
            }
            if (advance.backgroundImage) {
                // mixOutput["output_bg_image"] = mixStreamConfig.outputBgImage;
                if (typeof advance.backgroundImage !== 'string') {
                    _this.logger.error('zb.sh.ums param outputBgImage error');
                    reject({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kParamError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kParamError.message });
                    return false;
                }
                if (!(advance.backgroundImage.startsWith('preset-id://') && (advance.backgroundImage.endsWith('.jpg') || advance.backgroundImage.endsWith('.png')))) {
                    _this.logger.error('zb.sh.ums illegal input background image URL');
                    reject({ errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kBackgroundImageUrlInvalidError.code, extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kBackgroundImageUrlInvalidError.message });
                    return false;
                }
                mixStreamAdvance.backgroundImage = advance.backgroundImage;
                config['background_image'] = advance.backgroundImage;
            }
            if (advance.waterMark) {
                mixStreamAdvance.waterMark = advance.waterMark;
                config['water_mark'] = advance.waterMark;
            }
            if (advance.extraParams) {
                if (!mixStreamAdvance.extraParams)
                    mixStreamAdvance.extraParams = [];
                (_a = mixStreamAdvance.extraParams).push.apply(_a, advance.extraParams);
            }
            _this.stateCenter.mixStreamAdvance = mixStreamAdvance;
            client_util_1.ClientUtil.actionSuccessCallback('kZegoTaskMixConfig', _this.stateCenter.reportList) &&
                client_util_1.ClientUtil.actionSuccessCallback('kZegoTaskMixConfig', _this.stateCenter.reportList)(zego_entity_2.REPORT_ACTION.addMsgInfo, undefined, {
                    config: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixConfig.config(config)
                });
            resolve({ errorCode: 0, extendedData: '' });
        });
    };
    //停止混流信令
    //停止混流信令
    StreamHandler.prototype.stopMixStream = function (taskid, successCallback, errorCallback, outputStreamId, outputUrl) {
        var _this = this;
        this.logger.info('zb.sh.sms call');
        // if (!taskid || typeof taskid !== 'string') {
        //     this.logger.error('zb.sh.sms taskid error');
        //     return false;
        // }
        var req_body = {
            id_name: this.stateCenter.idName,
            live_channel: this.stateCenter.roomid,
            appid: this.stateCenter.appid,
            version: zego_entity_1.PROTO_VERSION,
        };
        if (typeof taskid === 'string') {
            req_body['task_id'] = taskid;
        }
        if (outputStreamId != undefined) {
            if (this.stateCenter.testEnvironment) {
                req_body["stream_id"] = "zegotest-" + this.stateCenter.appid + "-" + outputStreamId;
            }
            else {
                req_body["stream_id"] = outputStreamId;
            }
        }
        else if (outputUrl != undefined) {
            req_body["mixurl"] = outputUrl;
        }
        var body = {
            channel: 'zeus',
            cmd: 'stop_mix',
            req_body: JSON.stringify(req_body),
        };
        this.sendBizChannelRequest(body, function () {
            if (successCallback) {
                successCallback({ errorCode: 0 });
            }
        }, function (error) {
            if (typeof error == 'number') {
                if (errorCallback) {
                    errorCallback({
                        errorCode: client_util_1.ClientUtil.getServerError(zego_entity_1.MIXSTREAM_ERROR_CODE + error).code,
                        extendedData: '',
                    });
                }
            }
            else {
                _this.logger.error('zb.sh.sms stop mix fail ' + JSON.stringify(error));
                var _err = void 0;
                if (error == zego_error_1.errorCodeList.TIMEOUT) {
                    _err = zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStop.error.kRequestError;
                }
                else {
                    _err = zego_log_event_1.ZegoRTCLogEvent.kZegoTaskMixStop.error.kInternalError;
                }
                if (errorCallback) {
                    errorCallback({ errorCode: _err.code, extendedData: '' });
                }
            }
        });
        return true;
    };
    StreamHandler.prototype.updateStreamExtraInfo = function (streamid, extraInfo) {
        this.logger.info('zb.sh.usei call');
        // if (typeof streamid !== 'string' || streamid == '') {
        //     this.logger.error('zb.sh.usei streamid must be string and not empty');
        //     return false;
        // }
        // if (typeof extraInfo !== 'string' || extraInfo == '') {
        //     this.logger.error('zb.sh.usei extraInfo must be string and not empty');
        //     return false;
        // }
        if (this.stateCenter.publishStreamList[streamid]) {
            this.stateCenter.publishStreamList[streamid].extra_info = extraInfo;
            if (this.stateCenter.publishStreamList[streamid].state >= zego_entity_1.ENUM_PUBLISH_STREAM_STATE.update_info) {
                this.updateStreamInfo(streamid, zego_entity_1.ENUM_STREAM_SUB_CMD.liveUpdate, extraInfo);
            }
        }
        return true;
    };
    StreamHandler.prototype.setStreamExtraInfo = function (streamID, extraInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._handleStreamInfo(streamID, extraInfo, reject);
            resolve({ errorCode: 0, extendedData: "" });
        });
        // return res;
    };
    StreamHandler.prototype._setStreamExtraInfo = function (streamID, extraInfo) {
        return this._handleStreamInfo(streamID, extraInfo);
    };
    StreamHandler.prototype._handleStreamInfo = function (streamID, extraInfo, reject) {
        var reportSeq = zego_entity_1.getReportSeq();
        this.dataReport.newReport(reportSeq, zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.event);
        this.dataReport.addMsgInfo(reportSeq, {
            stream: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.stream(streamID),
            stream_extra_info: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.stream_extra_info(extraInfo),
            room_sid: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.room_sid(this.stateCenter.sessionid)
        });
        if (typeof streamID !== "string" || streamID == "") {
            this.logger.error("zb.ssei streamID must be string and not empty");
            this.dataReport.addMsgInfo(reportSeq, {
                error: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error
                    .kParamError.code,
                message: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error
                    .kParamError.message + " streamID must be string and not empty"
            });
            this.dataReport.uploadReport(reportSeq);
            reject && reject({
                errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error
                    .kParamError.code,
                extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error
                    .kParamError.message
            });
            return false;
        }
        if (extraInfo === undefined || extraInfo === "") {
            this.logger.error("zb.ssei extraInfo is empty");
            this.dataReport.addMsgInfo(reportSeq, {
                error: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error
                    .kParamError.code,
                message: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error
                    .kParamError.message + " extraInfo is empty"
            });
            this.dataReport.uploadReport(reportSeq);
            reject && reject({
                errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error
                    .kExtraInfoNullError.code,
                extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error
                    .kExtraInfoNullError.message
            });
            return false;
        }
        if (typeof extraInfo !== "string" || extraInfo == "") {
            this.logger.error("zb.ssei extraInfo must be string");
            this.dataReport.addMsgInfo(reportSeq, {
                error: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error
                    .kParamError.code,
                message: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error
                    .kParamError.message + " extraInfo must be string"
            });
            this.dataReport.uploadReport(reportSeq);
            reject && reject({
                errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error
                    .kParamError.code,
                extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error
                    .kParamError.message
            });
            return false;
        }
        if (this.rtm.modules.service.isDisConnect()) {
            this.logger.error("zb.ssei not login");
            this.dataReport.uploadReport(reportSeq, undefined, zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error
                .kNoLoginError);
            reject && reject({
                errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error
                    .kNoLoginError.code,
                extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error
                    .kNoLoginError.message
            });
            return false;
        }
        if (!this.stateCenter.publishStreamList[streamID]) {
            this.logger.error("zb.ssei" + " publish stream no found");
            this.dataReport.addMsgInfo(reportSeq, zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error
                .kPublishStreamNoFoundError);
            this.dataReport.uploadReport(reportSeq);
            reject && reject({
                errorCode: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error
                    .kPublishStreamNoFoundError.code,
                extendedData: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error
                    .kPublishStreamNoFoundError.message
            });
            return false;
        }
        var res = this.updateStreamExtraInfo(streamID, extraInfo);
        this.dataReport.uploadReport(reportSeq);
        return res;
    };
    StreamHandler.prototype.publishTarget = function (cdnPushConfig) {
        var _this = this;
        var reportSeq = zego_entity_1.getReportSeq();
        switch (cdnPushConfig.type) {
            case "addpush":
                this.dataReport.newReport(reportSeq, zego_log_event_1.ZegoRTCLogEvent.kZegoTaskAddPublishCdnUrl.event);
                break;
            case "delpush":
                this.dataReport.newReport(reportSeq, zego_log_event_1.ZegoRTCLogEvent.kZegoTaskRemovePublishCdnUrl.event);
                break;
            case "clearpush":
                this.dataReport.newReport(reportSeq, zego_log_event_1.ZegoRTCLogEvent.kZegoTaskRemovePublishCdnUrl.event);
                break;
        }
        this.dataReport.addMsgInfo(reportSeq, {
            stream: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskRemovePublishCdnUrl.stream(cdnPushConfig.streamID),
            target_url: zego_log_event_1.ZegoRTCLogEvent.kZegoTaskRemovePublishCdnUrl.target_url(cdnPushConfig.pushUrl)
        });
        return new Promise(function (resolve, reject) {
            var innerReject = function (err, externMsg) {
                _this.logger.error("zb.pt" + (externMsg || err.message));
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: err.code,
                    message: err.message + (externMsg || "")
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({
                    errorCode: err.code,
                    extendedData: err.message + (externMsg ? " " + externMsg : "")
                });
                return;
            };
            if (!cdnPushConfig.streamID ||
                typeof cdnPushConfig.streamID !== "string") {
                innerReject(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskPublishTarget.error.kParamError, "stream id type error");
            }
            if (!cdnPushConfig.pushUrl || typeof cdnPushConfig.pushUrl !== "string") {
                innerReject(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskPublishTarget.error.kParamError, "push url error");
            }
            if (!_this.stateCenter.publishStreamList[cdnPushConfig.streamID]) {
                innerReject(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskPublishTarget.error
                    .kPublishStreamNoFoundError);
            }
            var interResolve = function (res) {
                _this.dataReport.uploadReport(reportSeq);
                resolve(res);
            };
            var interReject = function (err) {
                var serverErr = client_util_1.ClientUtil.getServerError(err.errorCode);
                var e = client_util_1.ClientUtil.decodeServerError(serverErr.code, serverErr.message);
                _this.dataReport.addMsgInfo(reportSeq, e);
                _this.dataReport.uploadReport(reportSeq);
                reject(err);
            };
            _this._publishTarget(cdnPushConfig, interResolve, interReject);
        });
    };
    StreamHandler.prototype._publishTarget = function (cdnPushConfig, success, error) {
        var _this = this;
        if (['addpush', 'delpush', 'clearpush'].indexOf(cdnPushConfig.type) == -1) {
            this.logger.error('zb.sh.pt cdn push type error');
            error && error({
                errorCode: zego_error_1.errorCodeList.PUBLISHER_CDN_PUSH_ERROR.code,
                extendedData: zego_error_1.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT.message + " type error"
            });
            return;
        }
        this.logger.info('zb.sh.pt' + 'call');
        var timestamp = Math.ceil(new Date().getTime() / 1000);
        var totalStreamId = cdnPushConfig.streamID;
        if (this.stateCenter.testEnvironment) {
            totalStreamId = 'zegotest-' + this.stateCenter.appid + '-' + cdnPushConfig.streamID;
        }
        var req_body = {
            appid: this.stateCenter.appid,
            biz_type: 0,
            timestamp: timestamp,
            // signature: cdnPushConfig.signature,
            seq: this.stateCenter.cdnSeq++,
            version: zego_entity_1.PROTO_VERSION * 1,
            stream_id: totalStreamId,
            pushurl: cdnPushConfig.pushUrl,
        };
        var body = {
            channel: 'media',
            cmd: cdnPushConfig.type,
            req_body: JSON.stringify(req_body),
        };
        this.logger.debug('zb.sh.pt' + ' send command');
        this.sendBizChannelRequest(body, function (seq, cmd, rspBody) {
            _this.logger.info('zb.sh.pt' + ' receive message');
            if (rspBody.length == 0) {
                error && error({ errorCode: client_util_1.ClientUtil.getServerError(zego_entity_1.MIXSTREAM_ERROR_CODE + 1).code, extendedData: client_util_1.ClientUtil.getServerError(zego_entity_1.MIXSTREAM_ERROR_CODE + 1).message });
                return;
            }
            var data = JSON.parse(rspBody);
            var code = data.code, message = data.message;
            if (!code || code == 0) {
                _this.logger.info('zb.sh.pt ' + cdnPushConfig.type + ' success');
                success && success({ errorCode: 0, extendedData: '' });
            }
            else {
                _this.logger.error('zb.sh.pt ' + cdnPushConfig.type + ' error code: ' + code + ' ' + message);
                error && error({ errorCode: zego_error_1.errorCodeList.UNKNOWN_SERVER_ERROR.code, extendedData: zego_error_1.errorCodeList.UNKNOWN_SERVER_ERROR.message + " cmd: " + cdnPushConfig.type + " " + code + " " + message + "  " });
            }
        }, function (err, seq, rspbody) {
            _this.logger.info('zb.sh.pt error: ' + err);
            var message = '';
            if (err == 2001) {
                message = 'invalid channel';
            }
            else if (err == 2002) {
                message = 'bizchannel error';
            }
            _this.logger.error('zb.sh.pt ' + message);
            error && error({ errorCode: zego_error_1.errorCodeList.UNKNOWN_SERVER_ERROR.code, extendedData: zego_error_1.errorCodeList.UNKNOWN_SERVER_ERROR.message + " cmd: " + cdnPushConfig.type + " " + err + " " + message + "  " });
        });
    };
    StreamHandler.prototype.patchStreamList = function (msg) {
        var _this = this;
        if (msg.body.stream_seq !== this.stateCenter.streamSeq && !this.streamSeqMergeMap) {
            // 如果超过上次全量同步用户的等待时间则立即同步，否则等待差值后再同步
            this.logger.info(action_1.ZEGO_WEBRTC_ACTION.STREAMHANDLER_PATCH_STREAM_LIST +
                ' call update stream ' +
                this.stateCenter.streamSeq +
                ' server ' +
                msg.body.stream_seq);
            this.streamSeqMergeTimer && clearTimeout(this.streamSeqMergeTimer);
            this.streamSeqMergeTimer = setTimeout(function () {
                _this.handleMergeTimeout();
            }, this.streamListHBMergeInterval);
        }
        this.minStreamSeq = msg.body.stream_seq;
    };
    StreamHandler.prototype.mergeStreamByStreamSeq = function (cmd, streamSeq, streamList) {
        var _this = this;
        if (!this.streamSeqMergeMap) {
            this.logger.warn(action_1.ZEGO_WEBRTC_ACTION.STREAMHANDLER_MERGE_STREAM_BY_STREAM_SEQ + ' new merge stream list ' + this.stateCenter.streamSeq + ' server ' + streamSeq);
            this.streamSeqMergeMap = {};
            // 添加定时器，检查 streamSeq 连续性
            this.streamSeqMergeTimer && clearTimeout(this.streamSeqMergeTimer);
            this.streamSeqMergeTimer = setTimeout(function () {
                _this.handleMergeTimeout();
            }, this.streamListMergeInterval);
        }
        this.streamSeqMergeMap[streamSeq] = { cmd: cmd, streamList: streamList };
    };
    StreamHandler.prototype.handleMergeTimeout = function () {
        var streamSeqList = Object.keys(this.streamSeqMergeMap)
            .map(function (key) { return +key; })
            .sort(function (a, b) { return a - b; });
        // streamSeq 连续
        if (streamSeqList[streamSeqList.length - 1] - streamSeqList[0] + 1 === streamSeqList.length ||
            streamSeqList[streamSeqList.length - 1] >= this.minStreamSeq) {
            this.mergeStream(streamSeqList);
        }
        else {
            this.streamSeqMergeMap = null;
            this.fetchStreamList();
        }
    };
    StreamHandler.prototype.mergeStream = function (streamSeqList) {
        var _this = this;
        this.logger.info(action_1.ZEGO_WEBRTC_ACTION.STREAMHANDLER_MERGE_STREAM + ' merge userlist ' + this.stateCenter.streamSeq + ' streamSeqList ' + streamSeqList.join(','));
        var streamSeq = streamSeqList[streamSeqList.length - 1];
        // 一段时间内同一个用户多次进出房间，以最后一次为准（因为合并了推送消息，streamSeq升序）
        var streamList = [];
        streamSeqList.forEach(function (seq) {
            if (_this.streamSeqMergeMap && _this.streamSeqMergeMap[seq]) {
                switch (_this.streamSeqMergeMap[seq].cmd) {
                    case (zego_entity_1.ENUM_STREAM_UPDATE_CMD.added):
                        _this.streamSeqMergeMap[seq].streamList.forEach(function (stream) {
                            var index = streamList.findIndex(function (_stream) { return _stream.stream_id == stream.stream_id; });
                            index !== -1 && streamList.splice(index);
                            streamList.push(stream);
                        });
                        break;
                    case zego_entity_1.ENUM_STREAM_UPDATE_CMD.deleted:
                        _this.streamSeqMergeMap[seq].streamList.forEach(function (stream) {
                            var index = streamList.findIndex(function (_stream) { return _stream.stream_id == stream.stream_id; });
                            index !== -1 && streamList.splice(index);
                        });
                        break;
                    case zego_entity_1.ENUM_STREAM_UPDATE_CMD.updated:
                        _this.streamSeqMergeMap[seq].streamList.forEach(function (stream) {
                            var index = streamList.findIndex(function (_stream) { return _stream.stream_id == stream.stream_id; });
                            index !== -1 && streamList.splice(index);
                            streamList.push(stream);
                        });
                        break;
                }
            }
        });
        this.streamSeqMergeMap = null;
        this.logger.info(action_1.ZEGO_WEBRTC_ACTION.STREAMHANDLER_MERGE_STREAM + ' ' + streamList);
        this.handleFullUpdateStream(streamSeq, streamList);
    };
    ;
    StreamHandler.prototype.reset = function () {
        this.minStreamSeq = 0;
        this.streamSeqMergeMap = {};
        if (this.streamSeqMergeTimer) {
            clearTimeout(this.streamSeqMergeTimer);
            this.streamSeqMergeTimer = undefined;
        }
        this.streamListHBMergeInterval = 2000;
        this.streamListMergeInterval = 5000;
    };
    return StreamHandler;
}());
exports.StreamHandler = StreamHandler;


/***/ }),

/***/ "./sdk/src/common/zego.entity.ts":
/*!***************************************!*\
  !*** ./sdk/src/common/zego.entity.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.ListNode = exports.E_CLIENT_TYPE = exports.ENUM_SOURCE_TYPE = exports.ENUM_DISPATCH_TYPE = exports.ENUM_BROADCASTER_STATUS = exports.ENUM_PLAY_SOURCE_TYPE = exports.ENUM_PUBLISH_STATE_NEGO = exports.ENUM_PUSH_SIGNAL_SUB_CMD = exports.ENUM_SIGNAL_SUB_CMD = exports.QUALITYLEVEL = exports.MIXSTREAM_ERROR_CODE = exports.SERVER_ERROR_CODE = exports.ENUM_STREAM_UPDATE_CMD = exports.MINIUM_HEARTBEAT_INTERVAL = exports.STREAM_DELETE_REASON = exports.ENUM_NETWORK_STATE = exports.ENUM_RUN_STATE = exports.ENUM_STREAM_UPDATE_TYPE = exports.ENUM_STREAM_SUB_CMD = exports.ENUM_PUBLISH_STREAM_STATE = exports.MAX_RETRY_CONNECT_INTERVAL = exports.MAX_TRANS_DATA_LENGTH = exports.MAX_TRANS_TYPE_LENGTH = exports.MAX_MIX_TASK_ID_LENGTH = exports.MAX_MESSAGE_LENGTH = exports.MAX_ROOM_ID_LENGTH = exports.MAX_USER_NAME_LENGTH = exports.MAX_USER_ID_LENGTH = exports.MAX_STREAM_ID_LENGTH = exports.MAX_TRY_HEARTBEAT_COUNT = exports.SEND_MSG_TIMEOUT = exports.SEND_MSG_RESET = exports.MAX_TRY_CONNECT_COUNT = exports.ENUM_CONNECT_STATE = exports.ENUM_PROBE_STATE = exports.ENUM_PLAY_STATE_NEGO = exports.ENUM_PLAYER_STATE = exports.ENUM_PLAY_STATE = exports.ENUM_PUBLISH_STATE = exports.ENUM_SCREEM_RESOLUTION_TYPE = exports.ENUM_RESOLUTION_TYPE = exports.ENUM_SIGNAL_STATE = exports.ERROR_CODES = exports.sdkErrorList = exports.ENUM_REMOTE_TYPE = exports.LOG_LEVEL = exports.ENUM_LOG_LEVEL = exports.ROOMVERSION = exports.PROTO_VERSION = void 0;
exports.ZegoDataReport = exports.ZegoLogger = exports.ZegoExpressWebRTMEngine = exports.getReportSeq = exports.getSeq = exports.QUALITY_CONSTANT = exports.QualityGrade = exports.REPORT_ACTION = exports.ENUM_RETRY_STATE = exports.ENUM_PLAY_STATE_UPDATE = exports.ENUM_PUBLISH_STATE_UPDATE = void 0;
exports.PROTO_VERSION = "2.5.0";
exports.ROOMVERSION = "V1";
var ENUM_LOG_LEVEL;
(function (ENUM_LOG_LEVEL) {
    ENUM_LOG_LEVEL[ENUM_LOG_LEVEL["debug"] = 0] = "debug";
    ENUM_LOG_LEVEL[ENUM_LOG_LEVEL["info"] = 1] = "info";
    ENUM_LOG_LEVEL[ENUM_LOG_LEVEL["warn"] = 2] = "warn";
    ENUM_LOG_LEVEL[ENUM_LOG_LEVEL["error"] = 3] = "error";
    ENUM_LOG_LEVEL[ENUM_LOG_LEVEL["report"] = 99] = "report";
    ENUM_LOG_LEVEL[ENUM_LOG_LEVEL["disable"] = 100] = "disable";
})(ENUM_LOG_LEVEL = exports.ENUM_LOG_LEVEL || (exports.ENUM_LOG_LEVEL = {}));
exports.LOG_LEVEL = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
    report: 99,
    disable: 100
};
var ENUM_REMOTE_TYPE;
(function (ENUM_REMOTE_TYPE) {
    ENUM_REMOTE_TYPE[ENUM_REMOTE_TYPE["disable"] = 0] = "disable";
    ENUM_REMOTE_TYPE[ENUM_REMOTE_TYPE["websocket"] = 1] = "websocket";
    ENUM_REMOTE_TYPE[ENUM_REMOTE_TYPE["https"] = 2] = "https";
})(ENUM_REMOTE_TYPE = exports.ENUM_REMOTE_TYPE || (exports.ENUM_REMOTE_TYPE = {}));
exports.sdkErrorList = {
    CLIENT: "Client.",
    SERVER: "Server.",
    SUCCESS: {
        code: "Success",
        msg: "success."
    },
    PARAM: {
        code: "Error.Param",
        msg: "input error."
    },
    HEARTBEAT_TIMEOUT: {
        code: "Error.Timeout",
        msg: "heartbeat timeout."
    },
    LOGIN_TIMEOUT: {
        code: "Error.Timeout",
        msg: "login timeout."
    },
    SEND_MSG_TIMEOUT: {
        code: "Error.Timeout",
        msg: "send customsg timeout."
    },
    RESET_QUEUE: {
        code: "Error.Timeout",
        msg: "msg waiting ack is clear when reset."
    },
    LOGIN_DISCONNECT: {
        code: "Error.Network",
        msg: "network is broken and login fail."
    },
    KICK_OUT: {
        code: "Error.Kickout",
        msg: "kickout reason="
    },
    UNKNOWN: {
        code: "Error.Unknown",
        msg: "unknown error."
    },
    FREQ_LIMITED: {
        code: "Error.requencyLimited",
        msg: "Frequency Limited."
    }
    // SIGNAL_DISCONNECT: {
    //     code: "ZegoExpressEngine.Error.Timeout",
    //     msg: "WebRTC Signal broken"
    // }
};
exports.ERROR_CODES = {
    ROOM_SESSION_ID_ERR: 1000000152,
    FETCH_TRANS_UNKNOWN_CHANNEL: 1000001108,
    FETCH_TRANS_UNKNOWN_TYPE: 1000001109,
    FETCH_TRANS_WRONG_SEQ: 1000001110
};
var ENUM_SIGNAL_STATE;
(function (ENUM_SIGNAL_STATE) {
    ENUM_SIGNAL_STATE[ENUM_SIGNAL_STATE["disconnected"] = 0] = "disconnected";
    ENUM_SIGNAL_STATE[ENUM_SIGNAL_STATE["connecting"] = 1] = "connecting";
    ENUM_SIGNAL_STATE[ENUM_SIGNAL_STATE["connected"] = 2] = "connected";
})(ENUM_SIGNAL_STATE = exports.ENUM_SIGNAL_STATE || (exports.ENUM_SIGNAL_STATE = {}));
exports.ENUM_RESOLUTION_TYPE = {
    LOW: {
        width: 320,
        height: 240,
        frameRate: 15,
        bitRate: 300
    },
    MEDIUM: {
        width: 640,
        height: 480,
        frameRate: 15,
        bitRate: 800
    },
    HIGH: {
        width: 1280,
        height: 720,
        frameRate: 20,
        bitRate: 1500
    }
};
exports.ENUM_SCREEM_RESOLUTION_TYPE = {
    LOW: {
        frameRate: 20,
        bitRate: 800
    },
    MEDIUM: {
        frameRate: 15,
        bitRate: 1200
    },
    HIGH: {
        frameRate: 5,
        bitRate: 2000
    }
};
exports.ENUM_PUBLISH_STATE = {
    start: 0,
    waitingSessionRsp: 1,
    waitingOffserRsp: 2,
    waitingServerAnswer: 3,
    waitingServerICE: 4,
    connecting: 5,
    publishing: 6,
    stop: 7,
    didNotStart: 8
};
exports.ENUM_PLAY_STATE = {
    start: 0,
    waitingSessionRsp: 1,
    waitingOffserRsp: 2,
    waitingServerAnswer: 3,
    waitingServerICE: 4,
    connecting: 5,
    playing: 6,
    stop: 7,
    didNotStart: 8
};
// 小程序状态
exports.ENUM_PLAYER_STATE = {
    start: 0,
    playing: 1,
    stop: 2
};
exports.ENUM_PLAY_STATE_NEGO = {
    stop: 0,
    start: 1,
    waiterAnswer: 2,
    waitingCandidate: 3,
    sendCandidate: 4,
    iceConnected: 5,
    iceDisconnected: 6
};
exports.ENUM_PROBE_STATE = {
    tryProbe: 0,
    probed: 2
};
exports.ENUM_CONNECT_STATE = {
    disconnect: 0,
    connecting: 1,
    connected: 2
};
exports.MAX_TRY_CONNECT_COUNT = 1;
exports.SEND_MSG_RESET = 2;
exports.SEND_MSG_TIMEOUT = 1;
exports.MAX_TRY_HEARTBEAT_COUNT = 5;
exports.MAX_STREAM_ID_LENGTH = 256;
exports.MAX_USER_ID_LENGTH = 64;
exports.MAX_USER_NAME_LENGTH = 256;
exports.MAX_ROOM_ID_LENGTH = 128;
exports.MAX_MESSAGE_LENGTH = 1024;
exports.MAX_MIX_TASK_ID_LENGTH = 256;
exports.MAX_TRANS_TYPE_LENGTH = 128;
exports.MAX_TRANS_DATA_LENGTH = 1024 * 4;
exports.MAX_RETRY_CONNECT_INTERVAL = 12;
exports.ENUM_PUBLISH_STREAM_STATE = {
    waiting_url: 1,
    tryPublish: 2,
    update_info: 3,
    publishing: 4,
    stop: 5,
    retryPublish: 6
};
exports.ENUM_STREAM_SUB_CMD = {
    liveNone: 0,
    liveBegin: 2001,
    liveEnd: 2002,
    liveUpdate: 2003
};
exports.ENUM_STREAM_UPDATE_TYPE = {
    added: 1,
    deleted: 0
};
//运行状态
var ENUM_RUN_STATE;
(function (ENUM_RUN_STATE) {
    ENUM_RUN_STATE[ENUM_RUN_STATE["logout"] = 0] = "logout";
    ENUM_RUN_STATE[ENUM_RUN_STATE["trylogin"] = 1] = "trylogin";
    ENUM_RUN_STATE[ENUM_RUN_STATE["login"] = 2] = "login";
})(ENUM_RUN_STATE = exports.ENUM_RUN_STATE || (exports.ENUM_RUN_STATE = {}));
var ENUM_NETWORK_STATE;
(function (ENUM_NETWORK_STATE) {
    ENUM_NETWORK_STATE[ENUM_NETWORK_STATE["offline"] = 0] = "offline";
    ENUM_NETWORK_STATE[ENUM_NETWORK_STATE["online"] = 1] = "online";
})(ENUM_NETWORK_STATE = exports.ENUM_NETWORK_STATE || (exports.ENUM_NETWORK_STATE = {}));
exports.STREAM_DELETE_REASON = {
    0: {
        code: 1,
        description: "user_stop_publishing_stream_normal"
    },
    1: {
        code: 2,
        description: "user_heart_beat_timeout"
    },
    2: {
        code: 3,
        description: "user_repeat_login"
    },
    3: {
        code: 4,
        description: "user_kicked_out"
    },
    4: {
        code: 5,
        description: "user_offline"
    },
    100: {
        code: 6,
        description: "remove_by_server"
    }
    // 1000: {
    //     code: 0,
    //     description: 'unknown',
    // },
};
exports.MINIUM_HEARTBEAT_INTERVAL = 3000; //最小心跳尝试间隔
exports.ENUM_STREAM_UPDATE_CMD = {
    added: 12001,
    deleted: 12002,
    updated: 12003
};
exports.SERVER_ERROR_CODE = 10000;
exports.MIXSTREAM_ERROR_CODE = 10000;
var QUALITYLEVEL;
(function (QUALITYLEVEL) {
    QUALITYLEVEL[QUALITYLEVEL["low"] = 1] = "low";
    QUALITYLEVEL[QUALITYLEVEL["stantard"] = 2] = "stantard";
    QUALITYLEVEL[QUALITYLEVEL["hight"] = 3] = "hight";
    QUALITYLEVEL[QUALITYLEVEL["custome"] = 4] = "custome";
})(QUALITYLEVEL = exports.QUALITYLEVEL || (exports.QUALITYLEVEL = {}));
exports.ENUM_SIGNAL_SUB_CMD = {
    none: 0,
    joinLiveRequest: 1001,
    joinLiveResult: 1002,
    joinLiveInvite: 1003,
    joinLiveStop: 1004
};
exports.ENUM_PUSH_SIGNAL_SUB_CMD = {
    none: 0,
    pushJoinLiveRequest: 11001,
    pushJoinLiveResult: 11002,
    pushJoinLiveInvite: 11003,
    pushJoinLiveStop: 11004
};
exports.ENUM_PUBLISH_STATE_NEGO = {
    stop: 0,
    start: 1,
    waiterAnswer: 2,
    waitingCandidate: 3,
    sendCandidate: 4,
    iceConnected: 5,
    iceDisconnected: 6
};
//拉流选择
var ENUM_PLAY_SOURCE_TYPE;
(function (ENUM_PLAY_SOURCE_TYPE) {
    ENUM_PLAY_SOURCE_TYPE[ENUM_PLAY_SOURCE_TYPE["cdn"] = 0] = "cdn";
    ENUM_PLAY_SOURCE_TYPE[ENUM_PLAY_SOURCE_TYPE["ultra"] = 1] = "ultra";
})(ENUM_PLAY_SOURCE_TYPE = exports.ENUM_PLAY_SOURCE_TYPE || (exports.ENUM_PLAY_SOURCE_TYPE = {}));
//拉流连麦状态
var ENUM_BROADCASTER_STATUS;
(function (ENUM_BROADCASTER_STATUS) {
    ENUM_BROADCASTER_STATUS[ENUM_BROADCASTER_STATUS["stop"] = 0] = "stop";
    ENUM_BROADCASTER_STATUS[ENUM_BROADCASTER_STATUS["start"] = 1] = "start";
})(ENUM_BROADCASTER_STATUS = exports.ENUM_BROADCASTER_STATUS || (exports.ENUM_BROADCASTER_STATUS = {}));
//推流选择
var ENUM_DISPATCH_TYPE;
(function (ENUM_DISPATCH_TYPE) {
    ENUM_DISPATCH_TYPE[ENUM_DISPATCH_TYPE["cdn"] = 0] = "cdn";
    ENUM_DISPATCH_TYPE[ENUM_DISPATCH_TYPE["ultra"] = 1] = "ultra";
    ENUM_DISPATCH_TYPE[ENUM_DISPATCH_TYPE["customUrl"] = 2] = "customUrl";
})(ENUM_DISPATCH_TYPE = exports.ENUM_DISPATCH_TYPE || (exports.ENUM_DISPATCH_TYPE = {}));
var ENUM_SOURCE_TYPE;
(function (ENUM_SOURCE_TYPE) {
    ENUM_SOURCE_TYPE[ENUM_SOURCE_TYPE["CDN"] = 0] = "CDN";
    ENUM_SOURCE_TYPE[ENUM_SOURCE_TYPE["BGP"] = 1] = "BGP";
})(ENUM_SOURCE_TYPE = exports.ENUM_SOURCE_TYPE || (exports.ENUM_SOURCE_TYPE = {}));
var E_CLIENT_TYPE;
(function (E_CLIENT_TYPE) {
    E_CLIENT_TYPE[E_CLIENT_TYPE["ClientType_None"] = 0] = "ClientType_None";
    E_CLIENT_TYPE[E_CLIENT_TYPE["ClientType_H5"] = 1] = "ClientType_H5";
    E_CLIENT_TYPE[E_CLIENT_TYPE["ClientType_SmallPragram"] = 2] = "ClientType_SmallPragram";
    E_CLIENT_TYPE[E_CLIENT_TYPE["ClientType_Webrtc"] = 3] = "ClientType_Webrtc"; //webrtc
})(E_CLIENT_TYPE = exports.E_CLIENT_TYPE || (exports.E_CLIENT_TYPE = {}));
var ListNode = /** @class */ (function () {
    function ListNode(id, data) {
        if (id === void 0) { id = null; }
        if (data === void 0) { data = null; }
        this._id = null;
        this.next = null;
        this.prev = null;
        this._id = id;
        this._data = data;
    }
    Object.defineProperty(ListNode.prototype, "id", {
        get: function () {
            if (this._id) {
                return this._id;
            }
            else {
                return null;
            }
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListNode.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: false,
        configurable: true
    });
    ListNode.prototype.hasNext = function () {
        return this.next && this.next.id;
    };
    ListNode.prototype.hasPrev = function () {
        return this.prev && this.prev.id;
    };
    return ListNode;
}());
exports.ListNode = ListNode;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        //initialize end buffer nodes
        this.start = new ListNode();
        this.end = new ListNode();
        //initialize counters
        this._idCounter = 0;
        this._numNodes = 0;
        //initialize node pointers
        this.start.next = this.end;
        this.start.prev = null;
        this.end.prev = this.start;
        this.end.next = null;
    }
    /**
     *   Inserts a node before another node in the linked list
     *   @param {Node} toInsertBefore
     *   @param {Node} node
     */
    LinkedList.prototype.insertBefore = function (toInsertBefore, data) {
        var newNode = new ListNode(this._idCounter, data);
        newNode.next = toInsertBefore;
        newNode.prev = toInsertBefore.prev;
        if (toInsertBefore.prev)
            toInsertBefore.prev.next = newNode;
        toInsertBefore.prev = newNode;
        ++this._idCounter;
        ++this._numNodes;
        return newNode;
    };
    /**
     *   Adds data wrapped in a Node object to the end of the linked list
     *   @param {object} data
     */
    LinkedList.prototype.addLast = function (data) {
        return this.insertBefore(this.end, data);
    };
    /**
     *   Alias for addLast
     *   @param {object} data
     */
    LinkedList.prototype.add = function (data) {
        return this.addLast(data);
    };
    /**
     *   Gets and returns the first node in the linked list or null
     *   @return {Node/null}
     */
    LinkedList.prototype.getFirst = function () {
        if (this._numNodes === 0) {
            return null;
        }
        else {
            return this.start.next;
        }
    };
    /**
     *   Gets and returns the last node in the linked list or null
     *   @return {Node/null}
     */
    LinkedList.prototype.getLast = function () {
        if (this._numNodes === 0) {
            return null;
        }
        else {
            return this.end.prev;
        }
    };
    /**
     *   Gets and returns the size of the linked list
     *   @return {number}
     */
    LinkedList.prototype.size = function () {
        return this._numNodes;
    };
    /**
     *   (Internal) Gets and returns the node at the specified index starting from the first in the linked list
     *   Use getAt instead of this function
     *   @param {number} index
     */
    LinkedList.prototype.getFromFirst = function (index) {
        var count = 0, temp = this.start.next;
        if (index >= 0) {
            while (count < index && temp !== null) {
                temp = temp.next;
                ++count;
            }
        }
        else {
            temp = null;
        }
        if (temp === null) {
            throw "Index out of bounds.";
        }
        return temp;
    };
    /**
     *   Gets and returns the Node at the specified index in the linked list
     *   @param {number} index
     */
    LinkedList.prototype.get = function (index) {
        var temp = null;
        if (index === 0) {
            temp = this.getFirst();
        }
        else if (index === this._numNodes - 1) {
            temp = this.getLast();
        }
        else {
            temp = this.getFromFirst(index);
        }
        return temp;
    };
    /**
     *   Removes and returns node from the linked list by rearranging pointers
     *   @param {Node} node
     *   @return {Node}
     */
    LinkedList.prototype.remove = function (node) {
        if (node.prev)
            node.prev.next = node.next;
        if (node.next)
            node.next.prev = node.prev;
        --this._numNodes;
        return node;
    };
    /**
     *   Removes and returns the first node in the linked list if it exists, otherwise returns null
     *   @return {Node/null}
     */
    LinkedList.prototype.removeFirst = function () {
        var temp = null;
        if (this._numNodes > 0 && this.start.next) {
            temp = this.remove(this.start.next);
        }
        return temp;
    };
    /**
     *   Removes and returns the last node in the linked list if it exists, otherwise returns null
     *   @return {Node/null}
     */
    LinkedList.prototype.removeLast = function () {
        var temp = null;
        if (this._numNodes > 0 && this.end.prev) {
            temp = this.remove(this.end.prev);
        }
        return temp;
    };
    /**
     *   Removes all nodes from the list
     */
    LinkedList.prototype.removeAll = function () {
        this.start.next = this.end;
        this.end.prev = this.start;
        this._numNodes = 0;
        this._idCounter = 0;
    };
    /**
     *    Iterates the list calling the given fn for each node
     *    @param {function} fn
     */
    LinkedList.prototype.each = function (iterator) {
        var temp = this.start;
        while (temp.hasNext()) {
            temp = temp.next;
            iterator(temp);
        }
    };
    LinkedList.prototype.find = function (iterator) {
        var temp = this.start, found = false, result = null;
        while (temp.hasNext() && !found) {
            temp = temp.next;
            if (iterator(temp)) {
                result = temp;
                found = true;
            }
        }
        return result;
    };
    LinkedList.prototype.map = function (iterator) {
        var temp = this.start;
        var results = [];
        while (temp.hasNext()) {
            temp = temp.next;
            if (iterator(temp)) {
                results.push(temp);
            }
        }
        return results;
    };
    /**
     *    Alias for addLast
     *    @param {object} data
     */
    LinkedList.prototype.push = function (data) {
        return this.addLast(data);
    };
    /**
     *    Performs insertBefore on the first node
     *    @param {object} data
     */
    LinkedList.prototype.unshift = function (data) {
        if (this._numNodes > 0) {
            this.insertBefore(this.start.next, data);
        }
        else {
            this.insertBefore(this.end, data);
        }
    };
    /**
     *    Alias for removeLast
     */
    LinkedList.prototype.pop = function () {
        return this.removeLast();
    };
    /**
     *    Alias for removeFirst()
     */
    LinkedList.prototype.shift = function () {
        return this.removeFirst();
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
exports.ENUM_PUBLISH_STATE_UPDATE = {
    start: 0,
    error: 1,
    retry: 2
};
exports.ENUM_PLAY_STATE_UPDATE = {
    start: 0,
    error: 1,
    retry: 2,
    stop: 3
};
exports.ENUM_RETRY_STATE = {
    didNotStart: 0,
    retrying: 1,
    finished: 2
};
exports.REPORT_ACTION = {
    eventStart: "eventStart",
    eventEndWithMsgInfo: "eventEndWithMsgInfo",
    addEventMsg: "addEventMsg",
    addEvent: "addEvent",
    eventEnd: "eventEnd",
    addMsgInfo: "addMsgInfo"
};
var QualityGrade;
(function (QualityGrade) {
    QualityGrade[QualityGrade["Unknown"] = -1] = "Unknown";
    QualityGrade[QualityGrade["Excellent"] = 0] = "Excellent";
    QualityGrade[QualityGrade["Good"] = 1] = "Good";
    QualityGrade[QualityGrade["Middle"] = 2] = "Middle";
    QualityGrade[QualityGrade["Poor"] = 3] = "Poor";
    QualityGrade[QualityGrade["Die"] = 4] = "Die";
})(QualityGrade = exports.QualityGrade || (exports.QualityGrade = {}));
var QUALITY_CONSTANT;
(function (QUALITY_CONSTANT) {
    QUALITY_CONSTANT[QUALITY_CONSTANT["MinQuality"] = 0] = "MinQuality";
    QUALITY_CONSTANT[QUALITY_CONSTANT["DieQuality"] = 0] = "DieQuality";
    QUALITY_CONSTANT[QUALITY_CONSTANT["PoorMinQuality"] = 1] = "PoorMinQuality";
    QUALITY_CONSTANT[QUALITY_CONSTANT["MiddleMinQuality"] = 30] = "MiddleMinQuality";
    QUALITY_CONSTANT[QUALITY_CONSTANT["GoodMinQuality"] = 60] = "GoodMinQuality";
    QUALITY_CONSTANT[QUALITY_CONSTANT["ExcellentMinQuality"] = 85] = "ExcellentMinQuality";
    QUALITY_CONSTANT[QUALITY_CONSTANT["MaxQuality"] = 100] = "MaxQuality";
})(QUALITY_CONSTANT = exports.QUALITY_CONSTANT || (exports.QUALITY_CONSTANT = {}));
var zego_express_engine_webrtm_1 = __webpack_require__(/*! zego-express-engine-webrtm */ "../zego_express_web_rtm/dist/ZegoExpressWebRTM.js");
Object.defineProperty(exports, "getSeq", { enumerable: true, get: function () { return zego_express_engine_webrtm_1.getSeq; } });
Object.defineProperty(exports, "getReportSeq", { enumerable: true, get: function () { return zego_express_engine_webrtm_1.getReportSeq; } });
Object.defineProperty(exports, "ZegoExpressWebRTMEngine", { enumerable: true, get: function () { return zego_express_engine_webrtm_1.ZegoExpressWebRTMEngine; } });
Object.defineProperty(exports, "ZegoLogger", { enumerable: true, get: function () { return zego_express_engine_webrtm_1.ZegoLogger; } });
Object.defineProperty(exports, "ZegoDataReport", { enumerable: true, get: function () { return zego_express_engine_webrtm_1.ZegoDataReport; } });


/***/ }),

/***/ "./sdk/src/common/zego.error.ts":
/*!**************************************!*\
  !*** ./sdk/src/common/zego.error.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errorCodeList = exports.innerErrList = void 0;
exports.innerErrList = {
    SUCCESS: {
        code: 0,
        message: ""
    },
    SEND_MSG_TIMEOUT: {
        code: "Error.Timeout",
        message: "send customessage timeout."
    }
};
exports.errorCodeList = {
    // commonErr
    NOT_LOGIN: {
        code: 1000002,
        message: "not login room"
    },
    STREAMID_TOO_LONG: {
        code: 1000014,
        message: "stream ID is too long"
    },
    STREAM_ID_NULL: {
        code: 1000015,
        message: "streamID is empty"
    },
    STREAM_ID_INVALID_CHARACTER: {
        code: 1000016,
        message: "stream ID contains illegal characters"
    },
    NETWORK_BROKEN: {
        code: 1000017,
        message: "network is broken"
    },
    LOCALSTREAM_WRONG: {
        code: 1000018,
        message: "local stream wrong"
    },
    GET_SOUND_LEVEL_FAIL: {
        code: 1000019,
        message: "get sound level error"
    },
    // 通用错误码
    INPUT_PARAM: {
        code: 1100001,
        message: "input parm error."
    },
    TIMEOUT: {
        code: 1100002,
        message: "network timeout."
    },
    SOCKET_CLOSE: {
        code: 1100003,
        msg: "socket close"
    },
    UNKNOWN_SERVER_ERROR: {
        code: 1100999,
        message: "unknown server error"
    },
    // rtc 码
    INIT_SDK_WRONG: {
        code: 1101000,
        message: "init sdk wrong"
    },
    WX_GETSETTING_FAIL: {
        code: 1101001,
        message: "wx getsetting fail"
    },
    // roomErr
    // NONE_APP_ID: {
    //     code: 1001000,
    //     message: 'app id can not be 0',
    // },
    // ROOM_COUNT_EXCEED: {
    //     code: 1002001,
    //     message: 'login rooms exceeds the upper limit',
    // },
    USER_ID_NULL: {
        code: 1002005,
        message: "user ID is empty"
    },
    USER_ID_INVALID_CHARACTER: {
        code: 1002006,
        message: "user ID contains illegal characters"
    },
    USER_ID_TOO_LONG: {
        code: 1002007,
        message: "user ID is too long"
    },
    USER_NAME_NULL: {
        code: 1002008,
        message: "username is empty"
    },
    // USER_NAME_INVALID_CHARACTER: {
    //     code: 1002009,
    //     message: 'username contains illegal characters',
    // },
    USER_NAME_TOO_LONG: {
        code: 1002010,
        message: "username is too long"
    },
    ROOM_ID_NULL: {
        code: 1002011,
        message: "room ID is empty"
    },
    ROOM_ID_INVALID_CHARACTER: {
        code: 1002012,
        message: "room ID contains illegal characters"
    },
    ROOM_ID_TOO_LONG: {
        code: 1002013,
        message: "room ID is too long"
    },
    LOGIN_TIMEOUT: {
        code: 1002031,
        message: "login timeout"
    },
    ROOM_MAX_USER_COUNT: {
        code: 1002034,
        message: "users logging into the room exceeds the maximum number"
    },
    MULTIPLE_LOGIN_KICKOUT: {
        code: 1002050,
        message: "kickout may be the same user ID login other"
    },
    ROOM_RETRY_TIMEOUT: {
        code: 1002053,
        message: "network is broken and login fail."
    },
    MANUAL_KICKOUT: {
        code: 1002055,
        message: "server has sent a signal to kick out"
    },
    ROOM_INNER_ERROR: {
        code: 1002099,
        message: "room inner error"
    },
    // web
    HEARTBEAT_TIMEOUT: {
        code: 1102001,
        message: "heartbeat timeout."
    },
    // access_svr
    PARSE_JSON_ERROR: {
        code: 1102011,
        message: "parse json error."
    },
    LOGIN_PROCESSING: {
        code: 1102012,
        message: "login is processing."
    },
    LIVEROMM_REQUEST_ERROR: {
        code: 1102013,
        message: "liveroom request error."
    },
    ZPUSH_REQUEST_FAIL: {
        code: 1102014,
        message: "zpush request fail."
    },
    LOGIN_STATE_WRONG: {
        code: 1102015,
        message: "user login state is wrong."
    },
    TOKEN_ERROR: {
        code: 1102016,
        message: "token error"
    },
    DISPATCH_ERROR: {
        code: 1102017,
        message: "dispatch error"
    },
    TOKEN_EXPIRED: {
        code: 1102018,
        message: "token expired"
    },
    SUBCMD_ERROR: {
        code: 1102019,
        message: "subcmd error."
    },
    ZEGO_AUTH_ERROR: {
        code: 1102020,
        message: "zego auth error."
    },
    BIZ_CHANNEL_ERROR: {
        code: 1102021,
        message: "biz channel error."
    },
    DISPATCH_TIMEOUT: {
        code: 1102022,
        message: "dispatch request timeout"
    },
    CONNECT_FAILED: {
        code: 1102023,
        message: "connect signal fail"
    },
    // ROOM_INNER_ERROR: {
    //     code: 1102099,
    //     message: 'unknown error.',
    // },
    // publishStreamErr
    PUBLISHER_EXTRA_INFO_NULL: {
        code: 1003050,
        message: "extra info of publshing stream is null"
    },
    PUBLISHER_EXTRA_INFO_TOO_LONG: {
        code: 1003051,
        message: "stream extra info is too long"
    },
    PUBLISHER_PARAM: {
        code: 1103001,
        message: "input parm error"
    },
    PUBLISHER_BROWSER_NOT_SUPPORT: {
        code: 1103002,
        message: "browser do not support"
    },
    PUBLISHER_DISPATCH_FAIL: {
        code: 1103003,
        message: "dispatch request error"
    },
    PUBLISHER_SCREEN_FAILED: {
        code: 1103010,
        message: "screen fail"
    },
    ENUMERATE_DEVICES_FAIL: {
        code: 1103011,
        message: "enumerate devices fail"
    },
    PUBLISHER_DISPATCH_REQUEST_FAIL: {
        code: 1103020,
        message: "dispatch request fail"
    },
    PUBLISHER_SESSION_REQUEST_FAIL: {
        code: 1103021,
        message: "session request fail"
    },
    PUBLISHER_CREATE_OFFER_ERROR: {
        code: 1103022,
        message: "create offer error"
    },
    PUBLISHER_SET_LOCAL_DESC_ERROR: {
        code: 1103023,
        message: "setLocalDescription error"
    },
    PUBLISHER_MEDIA_DESC_ERROR: {
        code: 1103024,
        message: "mediaDesc error"
    },
    PUBLISHER_SET_REMOTE_DESC_ERROR: {
        code: 1103025,
        message: "other side offer error"
    },
    PUBLISHER_CANDIDATE_ERROR: {
        code: 1103026,
        message: "candidate error"
    },
    PUBLISHER_SESSION_CLOSED: {
        code: 1103027,
        message: "server session closed"
    },
    PUBLISHER_MEDIA_CONNECTION_ERROR: {
        code: 1103028,
        message: "ice connection error"
    },
    PUBLISHER_CONSTRAINTS_ERROR: {
        code: 1103029,
        message: "constraint error"
    },
    PUBLISHER_SERVER_NEGO_TIMEOUT: {
        code: 1103030,
        message: "negotiation timeout"
    },
    PUBLISH_NOT_PUBLISH: {
        code: 1103040,
        message: "publisher not found"
    },
    PUBLISH_DEVICE_OUT_ERR: {
        code: 1103041,
        message: "device change "
    },
    PUBLISH_SCREEN_CANCELED: {
        code: 1103042,
        message: "screen canceled"
    },
    PUBLISH_SCREEN_NOT_SUPPORT: {
        code: 1103043,
        message: "screen not support"
    },
    PUBLISH_NO_PREVIEW: {
        code: 1103044,
        message: "stream is not from zego"
    },
    VIDEO_DEVICE_FALSE: {
        code: 1103045,
        message: "video is false"
    },
    AUDIO_DEVICE_FALSE: {
        code: 1103046,
        message: "audio is false"
    },
    TRACK_NOT_FOUND: {
        code: 1103047,
        message: "track is not found"
    },
    DEVICE_NOT_FOUND: {
        code: 1103048,
        message: "device is not found"
    },
    REPEATED_PULL: {
        code: 1103049,
        message: "repeated pull same stream"
    },
    PUBLISHER_WEBSOCKET_DISCONNECTED: {
        code: 1103050,
        message: "websocket disconnected"
    },
    PUBLISHER_RETRY_TIMEOUT: {
        code: 1103051,
        message: "publisher retry timeout"
    },
    PUBLISHER_CDN_PUSH_ERROR: {
        code: 1103052,
        message: "publisher cdn push error"
    },
    PUBLISHER_HTTPS_REQUIRED: {
        code: 1103053,
        message: "https is required"
    },
    PUBLISHER_NO_PREVIEW: {
        code: 1103054,
        message: "no preview"
    },
    PUBLISHER_STREAM_NO_FOUND: {
        code: 1103055,
        message: "publish stream no found"
    },
    PUBLISHER_IS_PUBLISHING: {
        code: 1103056,
        message: "publish is publishing"
    },
    PUBLISHER_DECODE_AUDIO_FAIL: {
        code: 1103057,
        message: "decode audio data fail"
    },
    PUBLISHER_CLIENT_IP_CHANGED: {
        code: 1103058,
        message: "client ip changed"
    },
    PUBLISHER_TTL_OVERTIME: {
        code: 1103059,
        message: "ttl over time"
    },
    PUBLISHER_SESSION_TIMEOUT: {
        code: 1103060,
        message: "session request timeout"
    },
    PUBLISHER_GET_USER_MEDIA_FAIL: {
        code: 1103061,
        message: "get media fail"
    },
    // play
    PLAYER_PARAM: {
        code: 1104001,
        message: "input parm error"
    },
    PLAYER_DISPATCH_REQUEST_FAIL: {
        code: 1104020,
        message: "dispatch request fail"
    },
    PLAYER_SESSION_REQUEST_FAIL: {
        code: 1104021,
        message: "session request fail"
    },
    PLAYER_CREATE_OFFER_ERROR: {
        code: 1104022,
        message: "create offer error"
    },
    PLAYER_SET_LOCAL_DESC_ERROR: {
        code: 1104023,
        message: "setLocalDescription error"
    },
    PLAYER_MEDIA_DESC_ERROR: {
        code: 1104024,
        message: "mediaDesc error"
    },
    PLAYER_SET_REMOTE_DESC_ERROR: {
        code: 1104025,
        message: "other side offer error"
    },
    PLAYER_CANDIDATE_ERROR: {
        code: 1104026,
        message: "candidate error"
    },
    PLAYER_SESSION_CLOSED: {
        code: 1104027,
        message: "server session closed"
    },
    PLAYER_MEDIA_CONNECTION_ERROR: {
        code: 1104028,
        message: "ice connection error"
    },
    PLAYER_WEBSOCKET_DISCONNECTED: {
        code: 1104029,
        message: "websocket disconnected"
    },
    PLAYER_SERVER_NEGO_TIMEOUT: {
        code: 1104030,
        message: "negotiation timeout"
    },
    PLAYER_RETRY_TIMEOUT: {
        code: 1104031,
        message: "player retry timeout"
    },
    PLAYER_IS_PLAYING: {
        code: 1104032,
        message: "player is playing"
    },
    PLAYER_CLIENT_IP_CHANGED: {
        code: 1104033,
        message: "client ip changed"
    },
    PLAYER_TTL_OVERTIME: {
        code: 1104034,
        message: "ttl is over time"
    },
    PLAYER_SESSION_RESET: {
        code: 1104035,
        message: "reset session push"
    },
    PLAYER_SESSION_TIMEOUT: {
        code: 1104036,
        message: "session request timeout"
    },
    // mixStreamErr
    MIXER_NO_SERVICES: {
        code: 1005000,
        message: "no mix stream service"
    },
    MIXER_TASK_ID_NULL: {
        code: 1005001,
        message: "mixer task is null"
    },
    MIXER_TASK_ID_TOO_LONG: {
        code: 1005002,
        message: "task ID is too long"
    },
    MIXER_TASK_ID_INVALID_CHARACTER: {
        code: 1005003,
        message: "task ID contains illegal characters"
    },
    MIXER_NO_OUTPUT_TARGET: {
        code: 1005005,
        message: "task configuration does not specify output"
    },
    MIXER_OUTPUT_TARGET_INVALID: {
        code: 1005006,
        message: "stream output target is incorrect"
    },
    MIXER_START_REQUEST_ERROR: {
        code: 1005010,
        message: "start mixer task fail, possibly due to network reasons"
    },
    MIXER_STOP_REQUEST_ERROR: {
        code: 1005011,
        message: "stop mixer task fail, possibly due to network reasons"
    },
    MIXER_NOT_OWNER_STOPMIXER: {
        code: 1005012,
        message: " maxed task must be stopped by the start user of the task"
    },
    MIXER_INPUTLIST_NULL: {
        code: 1005020,
        message: "Mixed stream task input list is null"
    },
    MIXER_OUTPUTLIST_NULL: {
        code: 1005021,
        message: "Mixed stream task output list is null"
    },
    MIXER_VIDEO_CONFIG_INVALID: {
        code: 1005023,
        message: "invalid mixed stream task video configuration"
    },
    MIXER_EXCEED_MAX_INPUT_COUNT: {
        code: 1005025,
        message: "more than the maximum number of input streams"
    },
    MIXER_INPUT_STREAM_NOT_EXISTS: {
        code: 1005026,
        message: "Input stream does not exist"
    },
    MIXER_INPUT_PARAMETERS_ERROR: {
        code: 1005027,
        message: "stream input parameters are wrong"
    },
    MIXER_EXCEED_MAX_OUTPUT_COUNT: {
        code: 1005030,
        message: "more than the maximum number of output streams"
    },
    MIXER_AUTHENTICATION_FAILED: {
        code: 1005050,
        message: "mixed stream authentication failed"
    },
    MIXER_WATERMARK_NULL: {
        code: 1005061,
        mag: "input watermark is null"
    },
    MIXER_WATERMARK_PARAMETERS_ERROR: {
        code: 1005062,
        message: "input watermark parameter is wrong"
    },
    MIXER_WATERMARK_URL_INVALID: {
        code: 1005063,
        message: "illegal input watermark URL"
    },
    MIXER_BACKGROUND_IMAGE_URL_INVALID: {
        code: 1005067,
        message: "illegal input background image URL"
    },
    MIXER_INNER_ERROR: {
        code: 1005099,
        message: "mixed stream internal error"
    },
    DEVICE_ERROR_TYPE_UNPLUGGED: {
        code: 1006006,
        message: "the device is unplugged"
    },
    // imErr
    IM_CONTENT_NULL: {
        code: 1009001,
        message: "message content is empty"
    },
    IM_CONTENT_TOO_LONG: {
        code: 1009002,
        message: "message content is too long"
    },
    IM_SEND_FAILED: {
        code: 1009010,
        message: "failed to send message"
    },
    // web
    FREQ_LIMITED: {
        code: 1109001,
        message: "frequency limited."
    }
};


/***/ }),

/***/ "./sdk/src/common/zego.log.event.ts":
/*!******************************************!*\
  !*** ./sdk/src/common/zego.log.event.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ZegoWechatLogEvent = exports.ZegoRTCLogEvent = void 0;
var zego_error_1 = __webpack_require__(/*! ./zego.error */ "./sdk/src/common/zego.error.ts");
// import * as fs from "fs";
// import * as path from "path";
var getItem = function (item) { return item; };
exports.ZegoRTCLogEvent = {
    kZegoTaskCreateStream: {
        event: "/sdk/create_stream",
        error: {
            kBrowserNotSupportError: zego_error_1.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT,
            kParamError: zego_error_1.errorCodeList.PUBLISHER_PARAM,
            kScreenCancelError: zego_error_1.errorCodeList.PUBLISH_SCREEN_CANCELED,
            kScreenFailedError: zego_error_1.errorCodeList.PUBLISHER_SCREEN_FAILED,
            kScreenNotSupportError: zego_error_1.errorCodeList.PUBLISH_SCREEN_NOT_SUPPORT,
            kHttpsRequiredError: zego_error_1.errorCodeList.PUBLISHER_HTTPS_REQUIRED,
            kGetUserMediaError: zego_error_1.errorCodeList.PUBLISHER_GET_USER_MEDIA_FAIL
        },
        stream_type: getItem,
        screen: getItem,
        camera: getItem,
        custom: getItem
    },
    kZegoTaskPublishStart: {
        event: "/sdk/api/publish_request",
        error: {
            kPublishParamError: zego_error_1.errorCodeList.PUBLISHER_PARAM,
            kPublishNetworkTimeoutError: zego_error_1.errorCodeList.TIMEOUT,
            kPublishDispatchTimeoutError: zego_error_1.errorCodeList.DISPATCH_TIMEOUT,
            kPublishDispatchError: zego_error_1.errorCodeList.DISPATCH_ERROR,
            kPublishNetworkBrokenError: zego_error_1.errorCodeList.NETWORK_BROKEN,
            kPublishNoPreviewError: zego_error_1.errorCodeList.PUBLISH_NO_PREVIEW,
            kPublishNoLoginError: zego_error_1.errorCodeList.NOT_LOGIN,
            kPublishRetryTimeoutError: zego_error_1.errorCodeList.PUBLISHER_RETRY_TIMEOUT,
            kPublishSessionClosedError: zego_error_1.errorCodeList.PUBLISHER_SESSION_CLOSED,
            kPublishNegoTimeoutError: zego_error_1.errorCodeList.PUBLISHER_SERVER_NEGO_TIMEOUT,
            kCreateOfferError: zego_error_1.errorCodeList.PUBLISHER_CREATE_OFFER_ERROR,
            kSetLocalDescError: zego_error_1.errorCodeList.PUBLISHER_SET_LOCAL_DESC_ERROR,
            kSessionTimeoutError: zego_error_1.errorCodeList.PUBLISHER_SESSION_TIMEOUT,
            kSessionRequestError: zego_error_1.errorCodeList.PUBLISHER_SESSION_REQUEST_FAIL,
            kSetRemoteDescError: zego_error_1.errorCodeList.PUBLISHER_SET_REMOTE_DESC_ERROR,
            kMediaConnectionError: zego_error_1.errorCodeList.PUBLISHER_MEDIA_CONNECTION_ERROR,
            kWebsocketDisconnectedError: zego_error_1.errorCodeList.PUBLISHER_WEBSOCKET_DISCONNECTED,
            kMediaDescError: zego_error_1.errorCodeList.PUBLISHER_MEDIA_DESC_ERROR,
            kCandidateError: zego_error_1.errorCodeList.PUBLISHER_CANDIDATE_ERROR,
            kIsPublishing: zego_error_1.errorCodeList.PUBLISHER_IS_PUBLISHING,
            kClientIPChangedError: zego_error_1.errorCodeList.PUBLISHER_CLIENT_IP_CHANGED,
            kTTLOverTimeError: zego_error_1.errorCodeList.PUBLISHER_TTL_OVERTIME
        },
        publishOption: getItem,
        message: getItem,
        session_id: getItem,
        stream: getItem,
        video_en_codec_id: getItem,
        cap_w: getItem,
        cap_h: getItem,
        w: getItem,
        h: getItem,
        video_en_fps: getItem,
        video_en_bps: getItem,
        audio_c_channel_count: getItem,
        audio_en_bps: getItem,
        aec_level: getItem,
        ans_level: getItem,
        agc: getItem,
        traffic_control_min_video_bitrate: getItem
    },
    kZegoTaskVideoCaptureSize: {
        event: "sdk/api/publish_video_c_size",
        session_id: getItem,
        w: getItem,
        h: getItem
    },
    kZegoTaskRePublish: {
        event: "/sdk/republish",
        stream: getItem
    },
    kZegoTaskPublishStop: {
        event: "/sdk/stop_publish",
        error: {
            kParamError: zego_error_1.errorCodeList.PUBLISHER_PARAM
        },
        stream: getItem
    },
    // kZegoTaskRtcPublishStateUpdate: '/rtc/publish_stat_report', ///< 推流质量更新
    // kZegoTaskCdnPublishStateUpdate: '/cdn/publish_stat_report', ///< 推流质量更新
    kZegoTaskPlayStart: {
        event: "/sdk/api/play_request",
        error: {
            kStreamIDNullError: zego_error_1.errorCodeList.STREAM_ID_NULL,
            kPlayParamError: zego_error_1.errorCodeList.PLAYER_PARAM,
            kPlayStreamIDToLongError: zego_error_1.errorCodeList.STREAMID_TOO_LONG,
            kPlayStreamIDInvalidCharacterError: zego_error_1.errorCodeList.STREAM_ID_INVALID_CHARACTER,
            kPlayNoLoginError: zego_error_1.errorCodeList.NOT_LOGIN,
            kPlayRepeatedPullError: zego_error_1.errorCodeList.REPEATED_PULL,
            kPlayNetworkTimeoutError: zego_error_1.errorCodeList.TIMEOUT,
            kPlayDispatchTimeoutError: zego_error_1.errorCodeList.DISPATCH_TIMEOUT,
            kPlayDispatchError: zego_error_1.errorCodeList.DISPATCH_ERROR,
            kPlayNetworkBrokenError: zego_error_1.errorCodeList.NETWORK_BROKEN,
            kPlayRetryTimeoutError: zego_error_1.errorCodeList.PLAYER_RETRY_TIMEOUT,
            kPlaySessionClosedError: zego_error_1.errorCodeList.PLAYER_SESSION_CLOSED,
            kPlaySessionResetError: zego_error_1.errorCodeList.PLAYER_SESSION_RESET,
            kPlayNegoTimeoutError: zego_error_1.errorCodeList.PLAYER_SERVER_NEGO_TIMEOUT,
            kCreateOfferError: zego_error_1.errorCodeList.PLAYER_CREATE_OFFER_ERROR,
            kSetLocalDescError: zego_error_1.errorCodeList.PLAYER_SET_LOCAL_DESC_ERROR,
            kSessionRequestError: zego_error_1.errorCodeList.PLAYER_SESSION_REQUEST_FAIL,
            kSessionTimeoutError: zego_error_1.errorCodeList.PLAYER_SESSION_TIMEOUT,
            kSetRemoteDescError: zego_error_1.errorCodeList.PLAYER_SET_REMOTE_DESC_ERROR,
            kMediaConnectionError: zego_error_1.errorCodeList.PLAYER_MEDIA_CONNECTION_ERROR,
            kWebsocketDisconnectedError: zego_error_1.errorCodeList.PLAYER_WEBSOCKET_DISCONNECTED,
            kCandidateError: zego_error_1.errorCodeList.PLAYER_CANDIDATE_ERROR,
            kMediaDescError: zego_error_1.errorCodeList.PLAYER_MEDIA_DESC_ERROR,
            kIsPlaying: zego_error_1.errorCodeList.PLAYER_IS_PLAYING,
            kClientIPChangedError: zego_error_1.errorCodeList.PLAYER_CLIENT_IP_CHANGED,
            kTTLOverTimeError: zego_error_1.errorCodeList.PLAYER_TTL_OVERTIME
        },
        playOption: getItem,
        message: getItem,
        session_id: getItem,
        stream: getItem,
        audio_activate: getItem,
        video_activate: getItem
    },
    kZegoTaskRePlay: {
        event: "/sdk/replay",
        stream: getItem
    },
    kZegoTaskPlayStop: {
        event: "/sdk/stop_play",
        error: {
            kParamError: zego_error_1.errorCodeList.PUBLISHER_PARAM
        },
        stream: getItem
    },
    // kZegoTaskDispatch: '/rtc/dispatch', ///< Dispatch
    kZegoPlayContentChanged: {
        event: "/sdk/play_content_changed",
        session_id: getItem,
        video_activate: getItem,
        audio_activate: getItem
    },
    kZegoTaskMixStart: {
        event: "/mix/start_mix",
        error: {
            kParamError: zego_error_1.errorCodeList.INPUT_PARAM,
            kTaskIDNullError: zego_error_1.errorCodeList.MIXER_TASK_ID_NULL,
            kTaskIDToLongError: zego_error_1.errorCodeList.MIXER_TASK_ID_TOO_LONG,
            kTaskIDInvalidCharacterError: zego_error_1.errorCodeList.MIXER_TASK_ID_INVALID_CHARACTER,
            kInputListNullError: zego_error_1.errorCodeList.MIXER_INPUTLIST_NULL,
            kOutputListNullError: zego_error_1.errorCodeList.MIXER_OUTPUTLIST_NULL,
            kOutputTargetInvalidError: zego_error_1.errorCodeList.MIXER_OUTPUT_TARGET_INVALID,
            kOutputNoTargetError: zego_error_1.errorCodeList.MIXER_NO_OUTPUT_TARGET,
            kRequestError: zego_error_1.errorCodeList.MIXER_START_REQUEST_ERROR,
            kInternalError: zego_error_1.errorCodeList.MIXER_INNER_ERROR
        },
        mix_stream_id: getItem,
        stream_cnt: getItem,
        input_stream_list: getItem,
        output_target_list: getItem
    },
    kZegoTaskMixStop: {
        event: "/mix/stop_mix",
        error: {
            kParamError: zego_error_1.errorCodeList.INPUT_PARAM,
            kTaskIDNullError: zego_error_1.errorCodeList.MIXER_TASK_ID_NULL,
            kRequestError: zego_error_1.errorCodeList.MIXER_STOP_REQUEST_ERROR,
            kInternalError: zego_error_1.errorCodeList.MIXER_INNER_ERROR
        }
    },
    kZegoTaskMixConfig: {
        event: "/mix/config_mix",
        error: {
            kParamError: zego_error_1.errorCodeList.INPUT_PARAM,
            kVideoConfigInvalidError: zego_error_1.errorCodeList.MIXER_VIDEO_CONFIG_INVALID,
            kBackgroundImageUrlInvalidError: zego_error_1.errorCodeList.MIXER_BACKGROUND_IMAGE_URL_INVALID
        },
        config: getItem
    },
    kZegoTaskEnumDevices: {
        event: "/device/list",
        error: {
            kBrowserNotSupportError: zego_error_1.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT,
            kEnumDevicesError: zego_error_1.errorCodeList.ENUMERATE_DEVICES_FAIL
        },
        dev_list: getItem
    },
    kZegoTaskAudioOutput: {
        event: "/device/audio_capture",
        error: {
            kBrowserNotSupportError: zego_error_1.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT,
            kEnumDevicesError: zego_error_1.errorCodeList.ENUMERATE_DEVICES_FAIL
        },
        session_id: getItem,
        device: getItem
    },
    kZegoTaskVideoCapture: {
        event: "/device/video_capture",
        error: {
            kBrowserNotSupportError: zego_error_1.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT,
            kEnumDevicesError: zego_error_1.errorCodeList.ENUMERATE_DEVICES_FAIL
        },
        session_id: getItem,
        device: getItem
    },
    kZegoTaskDeviceInterrupt: {
        event: "/device/interrupt",
        error: {
            kBrowserNotSupportError: zego_error_1.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT,
            kEnumDevicesError: zego_error_1.errorCodeList.ENUMERATE_DEVICES_FAIL
        },
        session_id: getItem,
        interrupt: getItem
    },
    kZegoTaskSetDebug: "/sdk/set_debug",
    kZegoTaskSetLog: "/sdk/set_log_config",
    kZegoTaskUseVideoDevice: {
        event: "/device/api/video_c",
        error: {
            kParamError: zego_error_1.errorCodeList.INPUT_PARAM,
            kDevicesNoFoundError: zego_error_1.errorCodeList.DEVICE_NOT_FOUND,
            kLocalStreamError: zego_error_1.errorCodeList.LOCALSTREAM_WRONG
        },
        device: getItem
    },
    kZegoTaskUseAudioDevice: {
        event: "/device/api/audio_c",
        error: {
            kParamError: zego_error_1.errorCodeList.INPUT_PARAM,
            kDevicesNoFoundError: zego_error_1.errorCodeList.DEVICE_NOT_FOUND,
            kLocalStreamError: zego_error_1.errorCodeList.LOCALSTREAM_WRONG
        },
        device: getItem
    },
    kZegoTaskCheckSystemRequirements: {
        event: "/sdk/check_system",
        capability: getItem
    },
    kZegoTaskMutePublishVideo: "/sdk/mute_publish_video",
    kZegoTaskMutePublishAudio: "/sdk/mute_publish_audio",
    kZegoTaskMutePlayVideo: "/sdk/mute_play_video",
    kZegoTaskMutePlayAudio: "/sdk/mute_play_audio",
    kZegoTaskRemoteCameraUpdate: {
        event: "/sdk/remote_camera_update",
        stream: getItem,
        status: getItem
    },
    kZegoTaskRemoteMicUpdate: {
        event: "/sdk/remote_mic_update",
        stream: getItem,
        status: getItem
    },
    kZegoTaskGetSoundLevel: {
        event: "/sdk/get_sound_level",
        error: {
            kGetSoundLevelError: zego_error_1.errorCodeList.GET_SOUND_LEVEL_FAIL
        }
    },
    kZegoTaskStopSoundLevel: "/sdk/stop_sound_level",
    kZegoTaskAddPublishCdnUrl: {
        event: "/sdk/add_publish_cdn_url",
        error: {
            kParamError: zego_error_1.errorCodeList.INPUT_PARAM
        }
    },
    kZegoTaskRemovePublishCdnUrl: {
        event: "/sdk/remove_publish_cdn_url",
        error: {
            kParamError: zego_error_1.errorCodeList.INPUT_PARAM
        },
        stream: getItem,
        target_url: getItem
    },
    kZegoTaskClearPublishCdnUrl: {
        event: "/sdk/clear_publish_cdn_url",
        error: {
            kParamError: zego_error_1.errorCodeList.INPUT_PARAM
        }
    },
    kZegoTaskPublishTarget: {
        event: "/sdk/publish_target",
        error: {
            kParamError: zego_error_1.errorCodeList.INPUT_PARAM,
            kPublishStreamNoFoundError: zego_error_1.errorCodeList.PUBLISHER_STREAM_NO_FOUND
        }
    },
    kZegoTaskDestroyStream: {
        event: "/sdk/destroy_stream",
        error: {
            kLocalStreamError: zego_error_1.errorCodeList.LOCALSTREAM_WRONG
        }
    },
    kZegoTaskScreenSharingEnded: "/sdk/screen_share_end",
    kZegoTaskAudioOutputChanged: {
        event: "/device/api/audio_output",
        session_id: getItem,
        stream: getItem,
        device: getItem,
        reason: getItem
    },
    kZegoEventPublishStat: "/sdk/publish_stat_report",
    kZegoEventPlayStat: "/sdk/play_stat_report",
    kZegoSetAudioConfig: {
        event: "/sdk/set_audio_config",
        error: {
            kParamError: zego_error_1.errorCodeList.INPUT_PARAM
        }
    },
    kZegoSetVideoConfig: {
        event: "/sdk/set_video_config",
        error: {
            kParamError: zego_error_1.errorCodeList.INPUT_PARAM,
            kLocalStreamError: zego_error_1.errorCodeList.LOCALSTREAM_WRONG
        }
    },
    kZegoReplaceTrack: {
        event: "/sdk/replace_track",
        error: {
            kParamError: zego_error_1.errorCodeList.INPUT_PARAM
        }
    },
    kZegoTaskLiveRoomGetStreamUpdateInfo: {
        event: "/liveroom/get_stream_update_info",
        stream_update_type: getItem,
        update_stream: getItem
    },
    kZegoTaskLiveRoomGetStreamExtraInfo: {
        event: "/liveroom/get_stream_extra_info",
        update_stream: getItem
    },
    kZegoTaskLiveRoomSendStreamExtraInfo: {
        event: "/liveroom/send_stream_extra_info",
        error: {
            kParamError: zego_error_1.errorCodeList.INPUT_PARAM,
            kExtraInfoNullError: zego_error_1.errorCodeList.PUBLISHER_EXTRA_INFO_NULL,
            kNoLoginError: zego_error_1.errorCodeList.NOT_LOGIN,
            kPublishStreamNoFoundError: zego_error_1.errorCodeList.PUBLISHER_STREAM_NO_FOUND
        },
        stream: getItem,
        stream_extra_info: getItem,
        room_sid: getItem
    },
    kZegoTaskPlayDecodeFirstVideoFrame: {
        event: "/sdk/play_decode_first_video_frame",
        session_id: getItem,
        fft_consumed: getItem
    },
    kZegoVisibilityChange: {
        event: "/app/background"
    },
    kZegoSetCaptureVolume: {
        event: "/sdk/set_capture_volume",
        error: {
            kParamError: zego_error_1.errorCodeList.INPUT_PARAM
        }
    },
    kZegoListener: {
        event: "/sdk/listener"
    }
};
exports.ZegoWechatLogEvent = {
    kZegoTaskCheckSystemRequirements: {
        event: "/sdk/check_system",
        error: {
            kCheckSystemGetSettingFailError: zego_error_1.errorCodeList.WX_GETSETTING_FAIL
        },
        capability: getItem
    },
    kZegoTaskPublishStart: {
        event: "/sdk/api/publish_request",
        error: {
            kPublishStreamIDNullError: zego_error_1.errorCodeList.STREAM_ID_NULL,
            kPublishParamError: zego_error_1.errorCodeList.PUBLISHER_PARAM,
            kPublishStreamIDTooLongError: zego_error_1.errorCodeList.STREAMID_TOO_LONG,
            kPublishStreamIDInvalidCharacterError: zego_error_1.errorCodeList.STREAM_ID_INVALID_CHARACTER,
            kPublishNetworkTimeoutError: zego_error_1.errorCodeList.TIMEOUT,
            kPublishDispatchTimeoutError: zego_error_1.errorCodeList.DISPATCH_TIMEOUT,
            kPublishDispatchError: zego_error_1.errorCodeList.DISPATCH_ERROR,
            kPublishNetworkBrokenError: zego_error_1.errorCodeList.NETWORK_BROKEN,
            kPublishNoLoginError: zego_error_1.errorCodeList.NOT_LOGIN,
            kPublishRetryTimeoutError: zego_error_1.errorCodeList.PUBLISHER_RETRY_TIMEOUT,
            kIsPublishing: zego_error_1.errorCodeList.PUBLISHER_IS_PUBLISHING
        },
        publishOption: getItem,
        stream: getItem,
        message: getItem
    },
    kZegoTaskPlayStart: {
        event: "/sdk/api/play_request",
        error: {
            kPlayStreamIDNullError: zego_error_1.errorCodeList.STREAM_ID_NULL,
            kPlayParamError: zego_error_1.errorCodeList.PLAYER_PARAM,
            kPlayStreamIDTooLongError: zego_error_1.errorCodeList.STREAMID_TOO_LONG,
            kPlayStreamIDInvalidCharacterError: zego_error_1.errorCodeList.STREAM_ID_INVALID_CHARACTER,
            kPlayNoLoginError: zego_error_1.errorCodeList.NOT_LOGIN,
            kPlayRepeatedPullError: zego_error_1.errorCodeList.REPEATED_PULL,
            kPlayNetworkTimeoutError: zego_error_1.errorCodeList.TIMEOUT,
            kPlayDispatchTimeoutError: zego_error_1.errorCodeList.DISPATCH_TIMEOUT,
            kPlayDispatchError: zego_error_1.errorCodeList.DISPATCH_ERROR,
            kPlayNetworkBrokenError: zego_error_1.errorCodeList.NETWORK_BROKEN,
            kPlayRetryTimeoutError: zego_error_1.errorCodeList.PLAYER_RETRY_TIMEOUT,
            kIsPlaying: zego_error_1.errorCodeList.PLAYER_IS_PLAYING
        },
        playOption: getItem,
        message: getItem,
        session_id: getItem,
        stream: getItem,
        audio_activate: getItem,
        video_activate: getItem
    },
    kZegoEventPublishStat: "/sdk/publish_stat_report",
    kZegoEventPlayStat: "/sdk/play_stat_report",
    kZegoTaskRePublish: "/sdk/republish",
    kZegoTaskRePlay: "/sdk/replay",
    kZegoTaskPublishStop: {
        event: "/sdk/stop_publish",
        error: {
            kParamError: zego_error_1.errorCodeList.PUBLISHER_PARAM
        },
        stream: getItem
    },
    kZegoTaskPlayStop: {
        event: "/sdk/stop_play",
        error: {
            kParamError: zego_error_1.errorCodeList.PUBLISHER_PARAM
        },
        stream: getItem
    },
    kZegoTaskLiveRoomGetStreamUpdateInfo: {
        event: "/liveroom/get_stream_update_info",
        stream_update_type: getItem,
        update_stream: getItem
    },
    kZegoTaskLiveRoomGetStreamExtraInfo: {
        event: "/liveroom/get_stream_extra_info",
        update_stream: getItem
    },
    kZegoTaskMixStart: {
        event: "/mix/start_mix",
        error: {
            kParamError: zego_error_1.errorCodeList.INPUT_PARAM,
            kTaskIDNullError: zego_error_1.errorCodeList.MIXER_TASK_ID_NULL,
            kTaskIDToLongError: zego_error_1.errorCodeList.MIXER_TASK_ID_TOO_LONG,
            kTaskIDInvalidCharacterError: zego_error_1.errorCodeList.MIXER_TASK_ID_INVALID_CHARACTER,
            kInputListNullError: zego_error_1.errorCodeList.MIXER_INPUTLIST_NULL,
            kOutputListNullError: zego_error_1.errorCodeList.MIXER_OUTPUTLIST_NULL,
            kOutputTargetInvalidError: zego_error_1.errorCodeList.MIXER_OUTPUT_TARGET_INVALID,
            kOutputNoTargetError: zego_error_1.errorCodeList.MIXER_NO_OUTPUT_TARGET,
            kRequestError: zego_error_1.errorCodeList.MIXER_START_REQUEST_ERROR,
            kInternalError: zego_error_1.errorCodeList.MIXER_INNER_ERROR
        },
        mix_stream_id: getItem,
        stream_cnt: getItem,
        input_stream_list: getItem,
        output_target_list: getItem
    },
    kZegoTaskMixStop: {
        event: "/mix/stop_mix",
        error: {
            kParamError: zego_error_1.errorCodeList.INPUT_PARAM,
            kTaskIDNullError: zego_error_1.errorCodeList.MIXER_TASK_ID_NULL,
            kRequestError: zego_error_1.errorCodeList.MIXER_STOP_REQUEST_ERROR,
            kInternalError: zego_error_1.errorCodeList.MIXER_INNER_ERROR
        }
    },
    kZegoTaskMixConfig: {
        event: "/mix/config_mix",
        error: {
            kParamError: zego_error_1.errorCodeList.INPUT_PARAM,
            kVideoConfigInvalidError: zego_error_1.errorCodeList.MIXER_VIDEO_CONFIG_INVALID,
            kBackgroundImageUrlInvalidError: zego_error_1.errorCodeList.MIXER_BACKGROUND_IMAGE_URL_INVALID
        },
        config: getItem
    }
};
// fs.writeFile(
//   path.resolve(__dirname, "../../../doc/logevent.json"),
//   JSON.stringify(ZegoRTCLogEvent),
//   "utf8",
//   err => {
//     console.log(err);
//   }
// );


/***/ }),

/***/ "./sdk/src/util/client-util.ts":
/*!*************************************!*\
  !*** ./sdk/src/util/client-util.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUtil = void 0;
var zego_entity_1 = __webpack_require__(/*! ../common/zego.entity */ "./sdk/src/common/zego.entity.ts");
var zego_log_event_1 = __webpack_require__(/*! ../common/zego.log.event */ "./sdk/src/common/zego.log.event.ts");
var checkModule_1 = __webpack_require__(/*! ../webrtc/modules/externModules/checkModule */ "./sdk/src/webrtc/modules/externModules/checkModule.ts");
var ClientUtil = /** @class */ (function () {
    function ClientUtil() {
    }
    ClientUtil.checkIllegalCharacters = function (str) {
        // const reg = /^(?=.*[a-zA-Z\d~!@#$%^&amp;*()_+`\-={}:";'&lt;&gt;?,.\/]).{1,256}$/;
        var reg = /^([0-9a-zA-Z#!$%&()`'+-;<=.>@^_~,\\*])+$/;
        var reg2 = /^[^:/]*$/g;
        return reg.test(str) && reg2.test(str);
    };
    ClientUtil.isUrl = function (str) {
        if (str.startsWith("rtmp://") ||
            (str.startsWith("https://") && str.endsWith(".flv")) ||
            (str.startsWith("https://") && str.endsWith(".m3u8"))) {
            return true;
        }
        return false;
    };
    ClientUtil.registerCallback = function (fName, option, callbackList) {
        var sf, ef;
        if (option.success) {
            sf = option.success;
            callbackList[fName + "SuccessCallback"] = sf;
        }
        if (option.error) {
            ef = option.error;
            callbackList[fName + "ErrorCallback"] = ef;
        }
    };
    ClientUtil.actionErrorCallback = function (fName, callbackList) {
        return callbackList[fName + "ErrorCallback"];
    };
    // 执行成功回调函数
    ClientUtil.actionSuccessCallback = function (fName, callbackList) {
        return callbackList[fName + "SuccessCallback"];
    };
    ClientUtil.logReportCallback = function (logEvent, dataReport, reportSeq, callbackList) {
        ClientUtil.registerCallback(logEvent, {
            success: function (reportName, eventName) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                ClientUtil.dataReportEvent(dataReport, reportSeq, reportName, eventName, args);
            }
        }, callbackList);
    };
    ClientUtil.actionLogReportCallback = function (logEvent, callbackList, reportAction, eventName, args) {
        ClientUtil.actionSuccessCallback(logEvent, callbackList) &&
            ClientUtil.actionSuccessCallback(logEvent, callbackList)(reportAction, eventName);
    };
    ClientUtil.getServerError = function (code) {
        var serverErrorList = {
            1: "parse json error.",
            1001: "login is processing.",
            1002: "liveroom request error.",
            1003: "zpush connect fail.",
            1004: "zpush handshake fail.",
            1005: "zpush login fail.",
            1006: "user login state is wrong.",
            1007: "got no zpush addr",
            1008: "token error",
            1009: "dispatch error",
            1010: "token expired",
            1011: "token format error",
            2002: "biz channel error",
            1000000000: "liveroom cmd error, code:"
        };
        if (code === 0) {
            return {
                code: 0,
                message: ""
            };
        }
        var err = {
            code: 0,
            message: "liveroom cmd error"
        };
        err.code = code;
        if (code > 1000000000) {
            err.message = serverErrorList[1000000000] + code;
            //@ts-ignore
        }
        else if (serverErrorList[code]) {
            //@ts-ignore
            err.message = serverErrorList[code] + " code:" + code;
        }
        else {
            err.message = "unknown error code:" + code;
        }
        return err;
    };
    ClientUtil.unregisterCallback = function (fName, callbackList) {
        delete callbackList[fName + "SuccessCallback"];
        delete callbackList[fName + "ErrorCallback"];
    };
    ClientUtil.decodeServerError = function (code, msg) {
        var err = {
            code: -1,
            message: "server error"
        };
        if (code > 1000000000) {
            err.code = code - 1000000000 + 52000000;
        }
        msg && (err.message = msg);
        return err;
    };
    ClientUtil.getLiveRoomError = function (code) {
        var prefix = 1000000000;
        var liveRoomErrMap = {
            1105: "ROOM_MAX_USER_COUNT",
            1012: "PUBLISHER_ERROR_REPETITIVE_PUBLISH_STREAM",
            2002: "ROOM_ERROR_AUTHENTICATION_FAILED",
            2003: "ROOM_ERROR_LOGIN_TIMEOUT"
        };
        var accessSvrErrMap = {
            1: "PARSE_JSON_ERROR",
            1001: "LOGIN_PROCESSING",
            1002: "LIVEROMM_REQUEST_ERROR",
            1003: "ZPUSH_REQUEST_FAIL",
            1004: "ZPUSH_REQUEST_FAIL",
            1005: "ZPUSH_REQUEST_FAIL",
            1006: "LOGIN_STATE_WRONG",
            1007: "ZPUSH_REQUEST_FAIL",
            1008: "TOKEN_ERROR",
            1009: "DIAPATCH_ERROR",
            1010: "TOKEN_EXPIRED",
            1011: "TOKEN_ERROR",
            1012: "SUBCMD_ERROR",
            1101: "ZEGO_AUTH_ERROR",
            2001: "BIZ_CHANNEL_ERROR",
            2002: "BIZ_CHANNEL_ERROR"
        };
        if (code > 1000000000) {
            return liveRoomErrMap[code - prefix] || "";
        }
        else {
            return accessSvrErrMap[code] || "ROOM_INNER_ERROR";
        }
    };
    ClientUtil.mixServerError = function (code) {
        var mixServerErrorList = {
            82000001: "kMixStreamFailError",
            82000002: "kMixStreamInputError",
            82000003: "kMixStreamAuthError",
            82000150: "kMixStreamNotExistError",
            82000151: "kMixStreamStartMixError",
            82000152: "kMixStreamStopMixError",
            82000155: "kMixStreamInputFormatError",
            82000156: "kMixStreamOutputFormatError",
            82000157: "kMixStreamNotOpenError",
            82000158: "kMixStreamInputExceedError",
            82000159: "kMixStreamDispatchError",
            82000160: "kMixStreamStopMixOwnerError",
            82000170: "kMixStreamWaterMarkParamError",
            82000171: "kMixStreamWaterMarkImageError",
            82000190: "kMixStreamQpsOverloadError"
        };
        var mixServerErrorMap = {
            1: "MIXER_START_REQUEST_ERROR",
            3: "MIXER_AUTHENTICATION_FAILED",
            150: "MIXER_INPUT_STREAM_NOT_EXISTS",
            151: "MIXER_START_REQUEST_ERROR",
            152: "MIXER_STOP_REQUEST_ERROR",
            153: "MIXER_INPUT_PARAMETERS_ERROR",
            154: "MIXER_EXCEED_MAX_OUTPUT_COUNT",
            155: "MIXER_INPUT_PARAMETERS_ERROR",
            156: "MIXER_VIDEO_CONFIG_INVALID",
            157: "MIXER_NO_SERVICES",
            158: "MIXER_EXCEED_MAX_INPUT_COUNT",
            159: "MIXER_START_REQUEST_ERROR",
            160: "MIXER_NOT_OWNER_STOPMIXER",
            170: "MIXER_WATERMARK_PARAMETERS_ERROR",
            171: "MIXER_WATERMARK_NULL",
            190: "MIXER_START_REQUEST_ERROR"
        };
        var res = [];
        if (code > 1000000000) {
            var errcode = code - 1000000000 + 82000000;
            if (mixServerErrorList[errcode]) {
                res[0] = mixServerErrorList[errcode];
            }
            else {
                res[0] = "";
            }
            if (mixServerErrorMap[code - 1000000000]) {
                res[1] = mixServerErrorMap[code - 1000000000];
            }
            else {
                res[1] = "";
            }
        }
        return res;
    };
    ClientUtil.getKickoutError = function (code) {
        var err = {};
        switch (code) {
            case 1:
                err.code = 63000001;
                err.message = "zpush multiple login kickout";
                err.name = "MULTIPLE_LOGIN_KICKOUT";
                break;
            case 2:
                err.code = 63000002;
                err.message = "zpush manual kickout";
                err.name = "MANUAL_KICKOUT";
                break;
            case 3:
                err.code = 63000003;
                err.message = "kickout reason = " + code;
                break;
            case 4:
                err.code = 63000001;
                err.message = "zpush multiple login kickout";
                err.name = "MULTIPLE_LOGIN_KICKOUT";
                break;
            default:
                err.code = code;
                err.message = "kickout reason = " + code;
                break;
        }
        return err;
    };
    ClientUtil.dataReportEvent = function (dataReport, reportSeq, reportName, eventName, args) {
        switch (reportName) {
            case "eventStart":
                dataReport.eventStart(reportSeq, eventName);
                break;
            case "eventEndWithMsgInfo":
                dataReport.eventEndWithMsgInfo(reportSeq, eventName, args[0]);
                break;
            case "addEventMsg":
                dataReport.addEventMsg(reportSeq, eventName, args[0], args[1]);
                break;
            case "addEvent":
                dataReport.addEvent(reportSeq, eventName);
                break;
            case "eventEnd":
                dataReport.eventEnd(reportSeq, eventName);
                break;
            case "addMsgInfo":
                dataReport.addMsgInfo(reportSeq, args[0]);
                break;
            default:
                break;
        }
    };
    ClientUtil.isKeepTryLogin = function (code) {
        switch (code) {
            case 1002: //liveroom connect error
            case 1003: //zpush connect error
                return true;
            default:
                return false;
        }
    };
    ClientUtil.mergeStreamList = function (idName, oldStreamList, newStreamList, callbackResult) {
        var addStreamList = [];
        var delStreamList = [];
        var updateStreamList = [];
        var flag;
        if (!newStreamList) {
            newStreamList = [];
        }
        for (var i = 0; i < newStreamList.length; i++) {
            if (newStreamList[i].anchor_id_name == idName) {
                continue;
            }
            flag = false;
            for (var j = 0; j < oldStreamList.length; j++) {
                if (newStreamList[i].stream_id === oldStreamList[j].stream_id) {
                    if (newStreamList[i].extra_info !== oldStreamList[j].extra_info) {
                        updateStreamList.push(newStreamList[i]);
                    }
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                addStreamList.push(newStreamList[i]);
            }
        }
        for (var k = 0; k < oldStreamList.length; k++) {
            flag = false;
            for (var n = 0; n < newStreamList.length; n++) {
                if (oldStreamList[k].stream_id === newStreamList[n].stream_id) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                delStreamList.push(oldStreamList[k]);
            }
        }
        oldStreamList.splice(0);
        for (var i = 0; i < newStreamList.length; i++) {
            oldStreamList.push(newStreamList[i]);
        }
        callbackResult(addStreamList, delStreamList, updateStreamList);
    };
    ClientUtil.checkInteger = function (num, positive) {
        if (positive == false)
            return typeof num === "number" && num % 1 === 0 && num >= 0;
        return typeof num === "number" && num % 1 === 0 && num > 0;
    };
    ClientUtil.checkValidNumber = function (param, min, max) {
        min = min || 1;
        max = max || 1 * 1e4;
        return (typeof param === "number" &&
            param % 1 == 0 &&
            param >= min &&
            param <= max);
    };
    //生成随机数
    ClientUtil.uuid = function (len, radix) {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
        var uuid = [];
        var i;
        radix = radix || chars.length;
        if (len) {
            // Compact form
            for (i = 0; i < len; i++)
                uuid[i] = chars[0 | (Math.random() * radix)];
        }
        else {
            // rfc4122, version 4 form
            var r = void 0;
            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
            uuid[14] = "4";
            // Fill in random data. At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | (Math.random() * 16);
                    uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
                }
            }
        }
        return uuid.join("");
    };
    ClientUtil.supportDetection = function (screenShotReady, success, checkLevel, type) {
        return __awaiter(this, void 0, void 0, function () {
            var result, videoEle, hasGetUserMedia, isOutRule, video, err_1, audio, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = {
                            webRTC: false,
                            customCapture: false,
                            camera: false,
                            microphone: false,
                            videoCodec: {
                                H264: false,
                                H265: false,
                                VP8: false,
                                VP9: false
                            },
                            screenSharing: screenShotReady,
                            errInfo: {}
                        };
                        if (type && type === "screenSharing") {
                            return [2 /*return*/, success({
                                    result: screenShotReady,
                                    errInfo: result.errInfo
                                })];
                        }
                        if (!type || type === "customCapture") {
                            videoEle = document.createElement("video");
                            // @ts-ignore
                            if (videoEle["captureStream"] || videoEle["mozCaptureStream"]) {
                                result.customCapture = true;
                            }
                            if (type === "customCapture") {
                                success({
                                    result: result.customCapture,
                                    errInfo: result.errInfo
                                });
                                return [2 /*return*/];
                            }
                        }
                        hasGetUserMedia = navigator &&
                            navigator.mediaDevices &&
                            navigator.mediaDevices.getUserMedia;
                        isOutRule = window.location.protocol !== "https:" &&
                            window.location.protocol !== "file:" &&
                            window.location.hostname.indexOf("127.0.0.1") == -1 &&
                            window.location.hostname.indexOf("localhost") == -1;
                        if (!(!type || type === "camera" || type === "microphone")) return [3 /*break*/, 9];
                        if (!!!hasGetUserMedia) return [3 /*break*/, 9];
                        if (!isOutRule) return [3 /*break*/, 1];
                        result.camera = false;
                        console.error("webrtc requires https or localhost");
                        return [3 /*break*/, 9];
                    case 1:
                        if (!(!type || type === "camera")) return [3 /*break*/, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia({
                                video: true
                            })];
                    case 3:
                        video = _a.sent();
                        video &&
                            (result.camera = true) &&
                            video.getTracks().forEach(function (track) { return track.stop(); });
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        result.errInfo.camera = {
                            name: err_1.name,
                            message: err_1.message
                        };
                        console.error("camera devices detect error: ", err_1.name, err_1.message);
                        return [3 /*break*/, 5];
                    case 5:
                        if (!(!type || type === "microphone")) return [3 /*break*/, 9];
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia({
                                audio: true
                            })];
                    case 7:
                        audio = _a.sent();
                        audio &&
                            (result.microphone = true) &&
                            audio.getTracks().forEach(function (track) { return track.stop(); });
                        return [3 /*break*/, 9];
                    case 8:
                        err_2 = _a.sent();
                        result.errInfo.microphone = {
                            name: err_2.name,
                            message: err_2.message
                        };
                        console.error("microphone devices detect error: ", err_2.name, err_2.message);
                        return [3 /*break*/, 9];
                    case 9:
                        if (type === "camera" || type === "microphone") {
                            success({
                                result: result[type],
                                errInfo: result.errInfo
                            });
                            return [2 /*return*/];
                        }
                        this.supportVideoCodeType(function (rtcCodec, err) {
                            if (!type) {
                                result.videoCodec.H264 = rtcCodec.H264;
                                result.videoCodec.H265 = rtcCodec.H265;
                                result.videoCodec.VP8 = rtcCodec.VP8;
                                result.videoCodec.VP9 = rtcCodec.VP9;
                                result.webRTC = rtcCodec.webRTC;
                            }
                            if (err) {
                                if (typeof err === "string") {
                                    result.errInfo.extendedDate = err;
                                }
                                else {
                                    result.errInfo.webRTC = {
                                        name: err.name,
                                        message: err.message
                                    };
                                }
                                console.error("videoCodec detect error: " + err);
                            }
                            success &&
                                success(!type
                                    ? result
                                    : {
                                        result: rtcCodec[type],
                                        errInfo: result.errInfo
                                    });
                        }, checkLevel, type);
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientUtil.getDevices = function (deviceInfoCallback, error) {
        if (navigator.mediaDevices === undefined ||
            navigator.mediaDevices.enumerateDevices === undefined) {
            if (error) {
                error(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskEnumDevices.error.kBrowserNotSupportError);
            }
            return;
        }
        navigator.mediaDevices
            .enumerateDevices()
            .then(function (deviceInfos) {
            var microphone = [];
            var speaker = [];
            var camera = [];
            for (var i = 0; i < deviceInfos.length; i++) {
                var deviceInfo = deviceInfos[i];
                if (deviceInfo.kind === "audioinput") {
                    microphone.push({
                        deviceName: deviceInfo.label,
                        deviceID: deviceInfo.deviceId
                    });
                }
                if (deviceInfo.kind === "audiooutput") {
                    speaker.push({
                        deviceName: deviceInfo.label,
                        deviceID: deviceInfo.deviceId
                    });
                }
                if (deviceInfo.kind === "videoinput") {
                    camera.push({
                        deviceName: deviceInfo.label,
                        deviceID: deviceInfo.deviceId
                    });
                }
            }
            if (deviceInfoCallback) {
                deviceInfoCallback({
                    microphones: microphone,
                    speakers: speaker,
                    cameras: camera
                });
            }
        })
            .catch(function (err) {
            console.error("enumerate devices wrong " + err);
            error &&
                error(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskEnumDevices.error.kEnumDevicesError);
        });
    };
    ClientUtil.compareVersion = function (v1, v2) {
        v1 = v1.split(".");
        v2 = v2.split(".");
        var len = Math.max(v1.length, v2.length);
        while (v1.length < len) {
            v1.push("0");
        }
        while (v2.length < len) {
            v2.push("0");
        }
        for (var i = 0; i < len; i++) {
            var num1 = parseInt(v1[i]);
            var num2 = parseInt(v2[i]);
            if (num1 > num2) {
                return 1;
            }
            else if (num1 < num2) {
                return -1;
            }
        }
        return 0;
    };
    ClientUtil.isSupportLive = function (sucCall, errCall) {
        var resultList = {
            10001: "当前微信版本过低，无法使用相关组件",
            10002: "需要摄像头和录音功能的授权"
        };
        var version = wx.getSystemInfoSync().SDKVersion;
        var res = {
            code: 0,
            msg: ""
        };
        if (this.compareVersion(version, "1.7.0") < 0) {
            res = {
                code: 10001,
                msg: resultList[10001]
            };
            sucCall && sucCall(res);
        }
        wx.getSetting({
            success: function (_a) {
                var authSetting = _a.authSetting;
                if (!authSetting["scope.camera"] || !authSetting["scope.record"]) {
                    res = {
                        code: 10002,
                        msg: resultList[10002]
                    };
                }
                sucCall && sucCall(res);
            },
            fail: function (err) {
                console.error("get setting error", err);
                errCall && errCall(err);
            }
        });
    };
    ClientUtil.supportVideoCodeType = function (sucCall, checkLevel, type) {
        return __awaiter(this, void 0, void 0, function () {
            var rtcCodec, checkModule, res, e_1, errorInfo_1, allType_2, promiseList, _i, allType_1, allTypeItem, checkModule;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rtcCodec = {
                            webRTC: false,
                            H264: false,
                            VP8: false,
                            VP9: false,
                            H265: false
                        };
                        if (!type) return [3 /*break*/, 2];
                        if (!(checkLevel === 1 && (type === "VP8" || type === "H264"))) return [3 /*break*/, 2];
                        checkModule = new checkModule_1.CheckModule();
                        return [4 /*yield*/, checkModule.checkSupportByType(type)];
                    case 1:
                        res = _a.sent();
                        if (typeof res === "boolean") {
                            rtcCodec[type] = res;
                            return [2 /*return*/, sucCall(rtcCodec)];
                        }
                        else {
                            rtcCodec[type] = false;
                            return [2 /*return*/, sucCall(rtcCodec, res)];
                        }
                        _a.label = 2;
                    case 2:
                        if (!(type === "webRTC" || checkLevel === 1)) return [3 /*break*/, 7];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, new RTCPeerConnection().createOffer({
                                offerToReceiveAudio: true,
                                offerToReceiveVideo: true
                            })];
                    case 4:
                        _a.sent();
                        rtcCodec.webRTC = true;
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        sucCall && sucCall(rtcCodec, e_1);
                        return [3 /*break*/, 6];
                    case 6:
                        if (type === "webRTC") {
                            return [2 /*return*/, sucCall(rtcCodec)];
                        }
                        _a.label = 7;
                    case 7:
                        if (checkLevel === 1) {
                            errorInfo_1 = "";
                            allType_2 = ["VP8", "H264"];
                            promiseList = [];
                            for (_i = 0, allType_1 = allType_2; _i < allType_1.length; _i++) {
                                allTypeItem = allType_1[_i];
                                checkModule = new checkModule_1.CheckModule();
                                promiseList.push(checkModule.checkSupportByType(allTypeItem));
                            }
                            Promise.all(promiseList).then(function (resList) {
                                resList.forEach(function (item, index) {
                                    if (typeof item === "boolean") {
                                        rtcCodec[allType_2[index]] = true;
                                    }
                                    else {
                                        rtcCodec[allType_2[index]] = false;
                                        errorInfo_1 = item;
                                    }
                                });
                                !!errorInfo_1 ? sucCall(rtcCodec, errorInfo_1) : sucCall(rtcCodec);
                            });
                            return [2 /*return*/];
                        }
                        try {
                            new RTCPeerConnection()
                                .createOffer({
                                offerToReceiveAudio: true,
                                offerToReceiveVideo: true
                            })
                                .then(function (desc) {
                                rtcCodec.webRTC = true;
                                if (desc && desc.sdp) {
                                    var sdplist = desc.sdp.split("\r\n");
                                    rtcCodec.H264 = sdplist.some(function (item) {
                                        return item.startsWith("a=rtpmap:") && item.indexOf("H264/") > -1;
                                    });
                                    if (type === "H264") {
                                        return sucCall(rtcCodec);
                                    }
                                    rtcCodec.VP8 = sdplist.some(function (item) {
                                        return item.startsWith("a=rtpmap:") && item.indexOf("VP8/") > -1;
                                    });
                                    if (type === "VP8") {
                                        return sucCall(rtcCodec);
                                    }
                                    rtcCodec.VP9 = sdplist.some(function (item) {
                                        return item.startsWith("a=rtpmap:") && item.indexOf("VP9/") > -1;
                                    });
                                    rtcCodec.H265 = sdplist.some(function (item) {
                                        return item.startsWith("a=rtpmap:") && item.indexOf("H265/") > -1;
                                    });
                                    sucCall && sucCall(rtcCodec);
                                }
                            });
                        }
                        catch (error) {
                            sucCall && sucCall(rtcCodec, error);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientUtil.inlineWorker = function (func) {
        //内联worker
        if (Worker && func) {
            var functionBody = func
                .toString()
                .trim()
                .match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1];
            var url = URL.createObjectURL(new window.Blob([functionBody], {
                type: "text/javascript"
            }));
            return new Worker(url);
        }
        return null;
    };
    ClientUtil.getBrowser = function () {
        var ua = window.navigator.userAgent;
        var isIE = window.ActiveXObject != undefined && ua.indexOf("MSIE") != -1;
        var isFirefox = ua.indexOf("Firefox") != -1;
        var isOpera = window.opr != undefined;
        var isChrome = ua.indexOf("Chrome") && window.chrome;
        var isSafari = ua.indexOf("Safari") != -1 && ua.indexOf("Version") != -1;
        if (isIE) {
            return "IE";
        }
        else if (isFirefox) {
            return "Firefox";
        }
        else if (isOpera) {
            return "Opera";
        }
        else if (isChrome) {
            return "Chrome";
        }
        else if (isSafari) {
            return "Safari";
        }
        else {
            return "Unkown";
        }
    };
    ClientUtil.getPublisherStateType = function (type) {
        return type == 0 || type == 1
            ? type == 0
                ? "PUBLISHING"
                : "NO_PUBLISH"
            : "PUBLISH_REQUESTING";
    };
    ClientUtil.getPlayerStateType = function (type) {
        return type == 0 || type == 1
            ? type == 0
                ? "PLAYING"
                : "NO_PLAY"
            : "PLAY_REQUESTING";
    };
    ClientUtil.getSteamUpdateType = function (type) {
        return type == 0 ? "DELETE" : "ADD";
    };
    ClientUtil.checkScreenParams = function (screen, errorCallback) {
        if (typeof screen === "object" && screen.videoQuality !== undefined) {
            if (!ClientUtil.checkInteger(screen.videoQuality)) {
                errorCallback(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " videoQuality must be integer number");
                return false;
            }
        }
        if (typeof screen === "object" && screen.videoQuality === 4) {
            if (screen.bitRate === undefined) {
                errorCallback(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " bitrate is required when videoQuality is 4");
                return false;
            }
            else if (!ClientUtil.checkInteger(screen.bitRate)) {
                errorCallback(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " bitrate must be integer number");
                return false;
            }
            else if (screen.bitRate > 10240) {
                errorCallback(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " bitrate cannot greater than 10 Mbps");
                return false;
            }
            if (screen.frameRate === undefined) {
                errorCallback(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " frameRate is required when videoQuality is 4");
                return false;
            }
            else if (!ClientUtil.checkInteger(screen.frameRate)) {
                errorCallback(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " frameRate must be integer number");
                return false;
            }
            if (screen.width === undefined) {
                errorCallback(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " width is required when videoQuality is 4");
                return false;
            }
            else if (!ClientUtil.checkInteger(screen.width)) {
                errorCallback(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " width must be integer number");
                return false;
            }
            if (screen.height === undefined) {
                errorCallback(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " height is required when videoQuality is 4");
                return false;
            }
            else if (!ClientUtil.checkInteger(screen.height)) {
                errorCallback(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " height must be integer number");
                return false;
            }
        }
        return true;
    };
    ClientUtil.checkCameraParams = function (cameras, errorCallback) {
        if (!cameras.width || !ClientUtil.checkValidNumber(cameras.width)) {
            errorCallback(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " width must be integer number");
            return false;
        }
        if (!cameras.height || !ClientUtil.checkValidNumber(cameras.height)) {
            errorCallback(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " height must be integer number");
            return false;
        }
        if (!cameras.frameRate || !ClientUtil.checkValidNumber(cameras.frameRate)) {
            errorCallback(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " frameRate must be integer number");
            return false;
        }
        if (!cameras.bitRate || !ClientUtil.checkValidNumber(cameras.bitRate)) {
            errorCallback(zego_log_event_1.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " bitrate must be integer number");
            return false;
        }
        return true;
    };
    ClientUtil.isParamEmpty = function (param) {
        if (param === undefined || param === null || param === "") {
            return false;
        }
        else {
            return true;
        }
    };
    ClientUtil.isTypeString = function (param) {
        if (typeof param !== "string") {
            return false;
        }
        else {
            return true;
        }
    };
    ClientUtil.isTooLong = function (param, len) {
        if (param.length >= len) {
            return false;
        }
        else {
            return true;
        }
    };
    ClientUtil.isReDispatch = function (error) {
        var result = error.message.match(/action:(\d+)/);
        var action = result ? Number(result[1]) : NaN;
        return ([
            zego_log_event_1.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kTTLOverTimeError,
            zego_log_event_1.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kClientIPChangedError,
            zego_log_event_1.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kTTLOverTimeError,
            zego_log_event_1.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kClientIPChangedError
        ].includes(error) || [6].includes(action));
    };
    ClientUtil.arrAvg = function (arr, val, shiftLen) {
        arr.push(val);
        if (arr.length > shiftLen) {
            arr.shift();
        }
        var sum = arr.reduce(function (prev, current) {
            return prev + current;
        });
        return sum / arr.length;
    };
    ClientUtil.getNetQuality = function (rtt, lostRate, jitter) {
        if (typeof jitter !== "undefined") {
            var jitterWeight = 0.15;
            var lostRTTWeight = 0.85;
            var jitterQuality = this.calcQualityOfJitter(jitter);
            var lostRTTQuality = Math.min(this.calcQualityOfRtt(rtt), this.calcQualityOfLostRate(lostRate, false));
            var quality = jitterWeight * jitterQuality + lostRTTWeight * lostRTTQuality;
            return quality;
        }
        else {
            return Math.min(this.calcQualityOfRtt(rtt), this.calcQualityOfLostRate(lostRate, true));
        }
    };
    ClientUtil.calcQualityOfRtt = function (rtt) {
        if (rtt < 600) {
            return 97 - Math.pow(9.0e-2 * rtt, 1.1);
        }
        else {
            return 18 * Math.exp(2.0e-3 * (600 - rtt));
        }
    };
    ClientUtil.calcQualityOfJitter = function (jitter) {
        if (jitter <= 50) {
            return 98 - Math.pow(jitter, 1.15);
        }
        else {
            return zego_entity_1.QUALITY_CONSTANT.PoorMinQuality;
        }
    };
    ClientUtil.calcQualityOfLostRate = function (lostRate, isProbe) {
        if (isProbe) {
            var _lossRate = lostRate;
            if (_lossRate <= 55) {
                return 99 - Math.pow(0.8 * _lossRate, 1.18);
            }
            else {
                return zego_entity_1.QUALITY_CONSTANT.PoorMinQuality;
            }
        }
        else {
            var _lostRate = lostRate * 100;
            if (_lostRate <= 40) {
                return 96 - Math.pow(_lostRate, 1.22);
            }
            else {
                return zego_entity_1.QUALITY_CONSTANT.PoorMinQuality;
            }
        }
    };
    ClientUtil.quality2QualityGrade = function (quality) {
        var grade = zego_entity_1.QualityGrade.Unknown;
        if (quality >= zego_entity_1.QUALITY_CONSTANT.ExcellentMinQuality) {
            grade = zego_entity_1.QualityGrade.Excellent;
        }
        else if (quality >= zego_entity_1.QUALITY_CONSTANT.GoodMinQuality) {
            grade = zego_entity_1.QualityGrade.Good;
        }
        else if (quality >= zego_entity_1.QUALITY_CONSTANT.MiddleMinQuality) {
            grade = zego_entity_1.QualityGrade.Middle;
        }
        else if (quality >= zego_entity_1.QUALITY_CONSTANT.PoorMinQuality) {
            grade = zego_entity_1.QualityGrade.Poor;
        }
        else {
            grade = zego_entity_1.QualityGrade.Die;
        }
        return grade;
    };
    return ClientUtil;
}());
exports.ClientUtil = ClientUtil;


/***/ }),

/***/ "./sdk/src/util/sdpUtil.ts":
/*!*********************************!*\
  !*** ./sdk/src/util/sdpUtil.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SdpUtil = void 0;
var SdpUtil = /** @class */ (function () {
    function SdpUtil() {
    }
    SdpUtil.zegoSdp = function (sdp) {
        var sdpLines = sdp.split("\r\n");
        var h264_id = [], opus_id = [];
        sdpLines.forEach(function (item) {
            var _id = item.match(/a=rtpmap:(\d+)\s+((H264\/90000)|(opus\/48000\/2))/);
            if (_id && _id[1] && _id[2]) {
                //@ts-ignore
                _id[2] === "H264/90000" && h264_id.push(_id[1]);
                //@ts-ignore
                _id[2] === "opus/48000/2" && opus_id.push(_id[1]);
            }
        });
        var newSdpLines = [];
        sdpLines.map(function (item) {
            //去掉非h64和opus编解码
            var isH264_opus = true;
            var other_needed = true;
            var _matched = item.match(/((a=rtcp-fb:)|(a=rtpmap:)|(a=fmtp:))(\d+)/);
            if (_matched && _matched[5]) {
                if (!__spreadArrays(h264_id, opus_id).some(function (item) { return item == _matched[5]; })) {
                    isH264_opus = false;
                }
            }
            //去掉非h64和opus编解码 m=video
            if (item.indexOf("m=video") > -1) {
                var _videoDesc = item.split(" ");
                item = __spreadArrays([_videoDesc[0], _videoDesc[1], _videoDesc[2]], h264_id).join(" ");
            }
            else if (item.indexOf("m=audio") > -1) {
                var _videoDesc = item.split(" ");
                item = __spreadArrays([_videoDesc[0], _videoDesc[1], _videoDesc[2]], opus_id).join(" ");
            }
            //a=ssrc 非cname
            // if (item.indexOf ('a=ssrc') > -1 && item.indexOf ('cname') < 0) {
            //         other_needed = false
            // }
            //@ts-ignore
            isH264_opus && other_needed && newSdpLines.push(item);
        });
        return newSdpLines.join("\r\n");
    };
    SdpUtil.getSDPByVideDecodeType = function (sdp, type) {
        var videoDecodeTypes = {
            str: "",
            arr: [],
            obj: {
                H264: [],
                H265: [],
                VP8: [],
                VP9: [],
                OHTER: []
            }
        };
        if (!sdp.includes("m=video")) {
            return sdp;
        }
        var videoHead = /m=video.+/.exec(sdp)[0];
        videoHead = videoHead.match(/[\s|\d]+/g)[1].replace(" ", "");
        videoDecodeTypes.str = videoHead;
        videoDecodeTypes.arr = videoDecodeTypes.str.split(" ");
        videoDecodeTypes.arr.forEach(function (decodeType) {
            var reg = new RegExp("a=rtpmap:" + decodeType + ".+");
            var matched = reg.exec(sdp)[0];
            if (matched.includes("H264")) {
                videoDecodeTypes.obj.H264.push(decodeType);
            }
            else if (matched.includes("H265")) {
                videoDecodeTypes.obj.H265.push(decodeType);
            }
            else if (matched.includes("VP8")) {
                videoDecodeTypes.obj.VP8.push(decodeType);
            }
            else if (matched.includes("VP9")) {
                videoDecodeTypes.obj.VP9.push(decodeType);
            }
            else {
                videoDecodeTypes.obj.OHTER.push(decodeType);
            }
        });
        videoDecodeTypes.obj.OHTER.forEach(function (otherType) {
            var reg = new RegExp("a=fmtp:" + otherType + ".+apt=(\\d+)");
            var matchedArr = reg.exec(sdp);
            var matched = matchedArr && matchedArr[1];
            if (matched) {
                if (videoDecodeTypes.obj.H264.includes(matched)) {
                    videoDecodeTypes.obj.H264.push(otherType);
                }
                else if (videoDecodeTypes.obj.H265.includes(matched)) {
                    videoDecodeTypes.obj.H265.push(otherType);
                }
                else if (videoDecodeTypes.obj.VP8.includes(matched)) {
                    videoDecodeTypes.obj.VP8.push(otherType);
                }
                else if (videoDecodeTypes.obj.VP9.includes(matched)) {
                    videoDecodeTypes.obj.VP9.push(otherType);
                }
            }
        });
        var targetArr = [];
        if (type === "VP9") {
            targetArr = __spreadArrays(videoDecodeTypes.obj.H265, videoDecodeTypes.obj.H264, videoDecodeTypes.obj.VP8);
        }
        else if (type === "VP8") {
            targetArr = __spreadArrays(videoDecodeTypes.obj.H265, videoDecodeTypes.obj.H264, videoDecodeTypes.obj.VP9);
        }
        else if (type === "H264") {
            targetArr = __spreadArrays(videoDecodeTypes.obj.H265, videoDecodeTypes.obj.VP8, videoDecodeTypes.obj.VP9);
        }
        else if (type === "H265") {
            targetArr = __spreadArrays(videoDecodeTypes.obj.VP8, videoDecodeTypes.obj.H264, videoDecodeTypes.obj.VP9);
        }
        // targetArr.forEach(itype => {
        //         let currentIndex = videoDecodeTypes.arr.indexOf(itype);
        //         let reg;
        //         if( currentIndex!==(videoDecodeTypes.arr.length - 1)){
        //                 reg = new RegExp('a=rtpmap:' + itype + '[\\s\\S]+a=rtpmap:' + videoDecodeTypes.arr[currentIndex+1])
        //                 sdp = sdp.replace(reg, 'a=rtpmap:' + videoDecodeTypes.arr[currentIndex+1]);
        //         }else{
        //                 reg = new RegExp ('a=rtpmap:' + itype + '[\\s\\S]+a=fmtp:' + itype + '.+\\s\\n')
        //                 sdp = sdp.replace(reg, '');
        //         }
        //         videoDecodeTypes.arr.splice(currentIndex,1)
        //         //console.log('targetArr',reg)
        // });
        targetArr.forEach(function (itype) {
            var currentIndex = videoDecodeTypes.arr.indexOf(itype);
            videoDecodeTypes.arr.splice(currentIndex, 1);
            var regRtpmap = new RegExp("a=rtpmap:" + itype + ".+\\s\\n", "g");
            var regRtcpfb = new RegExp("a=rtcp-fb:" + itype + ".+\\s\\n", "g");
            var regFmtp = new RegExp("a=fmtp:" + itype + ".+\\s\\n", "g");
            sdp = sdp.replace(regRtpmap, "");
            sdp = sdp.replace(regRtcpfb, "");
            sdp = sdp.replace(regFmtp, "");
        });
        sdp = sdp.replace(videoHead, videoDecodeTypes.arr.join(" "));
        return sdp;
    };
    return SdpUtil;
}());
exports.SdpUtil = SdpUtil;


/***/ }),

/***/ "./sdk/src/webrtc/modules/externModules/checkModule.ts":
/*!*************************************************************!*\
  !*** ./sdk/src/webrtc/modules/externModules/checkModule.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckModule = void 0;
var sdpUtil_1 = __webpack_require__(/*! ../../../util/sdpUtil */ "./sdk/src/util/sdpUtil.ts");
var CheckModule = /** @class */ (function () {
    function CheckModule() {
        var _this = this;
        this.iceconnectionstatechangeTimes = 0;
        this.isCheckAll = false;
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        context.fillStyle = "rgba(255, 255, 255, 0)";
        try {
            this.localStream = canvas.captureStream();
        }
        catch (e) {
            console.error("canvas captureStream error", e);
        }
        this.timer = setTimeout(function () {
            _this.resolve("Detection timeout");
            _this.hangup();
        }, 5000);
    }
    CheckModule.prototype.checkSupportByType = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var configuration, promise, res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkType = type;
                        configuration = {};
                        this.localPc = new RTCPeerConnection(configuration);
                        this.remotePc = new RTCPeerConnection(configuration);
                        promise = new Promise(function (resolve) { return (_this.resolve = resolve); });
                        this.localPc.addEventListener("icecandidate", function (e) {
                            return _this.onIceCandidate(_this.localPc, e);
                        });
                        this.remotePc.addEventListener("icecandidate", function (e) {
                            return _this.onIceCandidate(_this.remotePc, e);
                        });
                        this.remotePc.addEventListener("iceconnectionstatechange", function (e) {
                            if (_this.remotePc.iceConnectionState === "connected") {
                                _this.iceconnectionstatechangeResult = true;
                            }
                            if (++_this.iceconnectionstatechangeTimes === 2 && _this.iceCandidate) {
                                clearTimeout(_this.timer);
                                if (_this.remotePc.iceConnectionState === "connected") {
                                    _this.resolve(true);
                                }
                                else {
                                    _this.resolve("The browser does not support " + type + " format");
                                }
                                _this.hangup();
                            }
                        });
                        this.localStream
                            .getTracks()
                            .forEach(function (track) { return _this.localPc.addTrack(track, _this.localStream); });
                        return [4 /*yield*/, this.check(type)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, promise];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    CheckModule.prototype.check = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var offer, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.localPc.createOffer({
                                offerToReceiveAudio: true,
                                offerToReceiveVideo: true
                            })];
                    case 1:
                        offer = _a.sent();
                        offer.sdp = sdpUtil_1.SdpUtil.getSDPByVideDecodeType(offer.sdp, type);
                        this.onCreateOfferSuccess(offer);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.onCreateSessionDescriptionError(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CheckModule.prototype.onCreateOfferSuccess = function (desc) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2, e_3, answer, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.localPc.setLocalDescription(desc)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        this.onSetSessionDescriptionError(e_2);
                        return [2 /*return*/];
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.remotePc.setRemoteDescription(desc)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_3 = _a.sent();
                        this.onSetSessionDescriptionError(e_3);
                        return [2 /*return*/];
                    case 6:
                        _a.trys.push([6, 9, , 10]);
                        return [4 /*yield*/, this.remotePc.createAnswer()];
                    case 7:
                        answer = _a.sent();
                        return [4 /*yield*/, this.onCreateAnswerSuccess(answer)];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        e_4 = _a.sent();
                        this.onCreateSessionDescriptionError(e_4);
                        return [2 /*return*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    CheckModule.prototype.onCreateAnswerSuccess = function (desc) {
        return __awaiter(this, void 0, void 0, function () {
            var e_5, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.remotePc.setLocalDescription(desc)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_5 = _a.sent();
                        this.onSetSessionDescriptionError(e_5);
                        return [2 /*return*/];
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.localPc.setRemoteDescription(desc)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_6 = _a.sent();
                        this.onSetSessionDescriptionError(e_6);
                        return [2 /*return*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CheckModule.prototype.onIceCandidate = function (pc, event) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getOtherPc(pc).addIceCandidate(event.candidate)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(this.checkType, this.getPcName(pc) + " addIceCandidate error", error_1);
                        clearTimeout(this.timer);
                        this.hangup();
                        this.resolve(error_1);
                        return [3 /*break*/, 3];
                    case 3:
                        if (this.getPcName(pc) === "remotePc") {
                            if (event.candidate) {
                                this.iceCandidate = true;
                            }
                        }
                        if (this.iceconnectionstatechangeResult &&
                            this.getPcName(pc) === "localPc") {
                            clearTimeout(this.timer);
                            this.hangup();
                            this.resolve(true);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckModule.prototype.getOtherPc = function (pc) {
        return pc === this.localPc ? this.remotePc : this.localPc;
    };
    CheckModule.prototype.getPcName = function (pc) {
        return pc === this.localPc ? "localPc" : "remotePc";
    };
    CheckModule.prototype.onCreateSessionDescriptionError = function (error) {
        console.error("Failed to create session description: " + error.toString());
        clearTimeout(this.timer);
        this.hangup();
        this.resolve(error);
    };
    CheckModule.prototype.onSetSessionDescriptionError = function (error) {
        console.error("Failed to set session description: " + error.toString());
        clearTimeout(this.timer);
        this.hangup();
        this.resolve(error);
    };
    CheckModule.prototype.hangup = function () {
        this.localPc.close();
        this.remotePc.close();
        this.iceconnectionstatechangeTimes = 0;
        this.localStream.getTracks().forEach(function (track) { return track.stop(); });
    };
    return CheckModule;
}());
exports.CheckModule = CheckModule;


/***/ }),

/***/ "./sdk/src/wechatMini/index.ts":
/*!*************************************!*\
  !*** ./sdk/src/wechatMini/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ZegoWechatMini = void 0;
var action_1 = __webpack_require__(/*! ../common/action */ "./sdk/src/common/action.ts");
var stateCenter_1 = __webpack_require__(/*! ../common/stateCenter */ "./sdk/src/common/stateCenter.ts");
var zego_entity_1 = __webpack_require__(/*! ../common/zego.entity */ "./sdk/src/common/zego.entity.ts");
var zego_log_event_1 = __webpack_require__(/*! ../common/zego.log.event */ "./sdk/src/common/zego.log.event.ts");
var client_util_1 = __webpack_require__(/*! ../util/client-util */ "./sdk/src/util/client-util.ts");
var modules_1 = __webpack_require__(/*! ./modules */ "./sdk/src/wechatMini/modules/index.ts");
var ZegoWechatMini = /** @class */ (function () {
    function ZegoWechatMini(logger, dataReport, rtm) {
        this.logger = logger;
        this.dataReport = dataReport;
        this.rtm = rtm;
        this.stateCenter = new stateCenter_1.StateCenter(this.logger, this.dataReport);
        this.stateCenter.clientType = "wxMini";
        this.wechatMiniModules = new modules_1.WechatMiniModules(this.logger, this.dataReport, this.stateCenter, this.rtm);
    }
    ZegoWechatMini.prototype.checkSystemRequirements = function () {
        return this.wechatMiniModules.checkSystemRequirements();
    };
    ZegoWechatMini.prototype.getVersion = function () {
        return zego_entity_1.PROTO_VERSION;
    };
    ZegoWechatMini.prototype.on = function (event, callBack) {
        return this.wechatMiniModules.bindListener(event, callBack);
    };
    ZegoWechatMini.prototype.off = function (event, callBack) {
        return this.wechatMiniModules.deleteListener(event, callBack);
    };
    ZegoWechatMini.prototype.startPublishingStream = function (streamID, publishOption) {
        return this.wechatMiniModules.publishModule.startPublishingStream(streamID, publishOption);
    };
    ZegoWechatMini.prototype.stopPublishingStream = function (streamID) {
        return this.wechatMiniModules.publishModule.stopPublishingStream(streamID);
    };
    ZegoWechatMini.prototype.getNextUrl = function (streamID) {
        return this.wechatMiniModules.getNextUrl(streamID);
    };
    ZegoWechatMini.prototype.setCustomSignalUrl = function (signalUrl, isPublish) {
        if (isPublish === void 0) { isPublish = true; }
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_SET_CUSTOM_SIGNAL_URL +
            " call: " +
            JSON.stringify(signalUrl));
        if (!signalUrl || signalUrl.length == 0) {
            this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_SET_CUSTOM_SIGNAL_URL + " param error");
            return false;
        }
        var isUrl = true;
        signalUrl.forEach(function (url) { return url.indexOf("rtmp://") != 0 && (isUrl = false); });
        if (!isUrl) {
            this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_SET_CUSTOM_SIGNAL_URL +
                " url is not correct");
            return false;
        }
        if (isPublish) {
            this.stateCenter.customUrl = signalUrl;
        }
        else {
            this.stateCenter.customPlayUrl = signalUrl;
        }
        return true;
    };
    ZegoWechatMini.prototype.addPublishCdnUrl = function (streamID, targetURL) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.ADD_PUBLISH_CDN_URL +
            " call " +
            streamID +
            " " +
            targetURL);
        return this.wechatMiniModules.streamHandler.publishTarget({
            type: "addpush",
            streamID: streamID,
            pushUrl: targetURL
        });
    };
    ZegoWechatMini.prototype.removePublishCdnUrl = function (streamID, targetURL) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.REMOVE_PUBLISH_CDN_URL +
            " call " +
            streamID +
            " " +
            targetURL);
        return this.wechatMiniModules.streamHandler.publishTarget({
            type: "delpush",
            streamID: streamID,
            pushUrl: targetURL
        });
    };
    ZegoWechatMini.prototype.startMixerTask = function (mixStreamConfig) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (mixStreamConfig.outputConfig &&
                mixStreamConfig.outputConfig.outputFps) {
                mixStreamConfig.outputConfig.outputFPS =
                    mixStreamConfig.outputConfig.outputFps;
            }
            var reportSeq = zego_entity_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_log_event_1.ZegoWechatLogEvent.kZegoTaskMixStart.event);
            client_util_1.ClientUtil.logReportCallback("kZegoTaskMixStart" + mixStreamConfig.taskID, _this.dataReport, reportSeq, _this.stateCenter.reportList);
            var interResolve = function (res) {
                _this.dataReport.uploadReport(reportSeq);
                client_util_1.ClientUtil.unregisterCallback("kZegoTaskMixStart" + mixStreamConfig.taskID, _this.stateCenter.reportList);
                resolve(res);
            };
            var interReject = function (err) {
                var errName, externalErr, reportErr;
                if (err.errorCode < 2000000000 && err.errorCode > 1000000000) {
                    errName = client_util_1.ClientUtil.mixServerError(err.errorCode)[0];
                    // reportErr = errorList[errName];
                    externalErr = client_util_1.ClientUtil.mixServerError(err.errorCode)[1];
                    reportErr = client_util_1.ClientUtil.mixServerError(err.errorCode)[1];
                }
                else if (err.errorCode < 1000000) {
                    reportErr = client_util_1.ClientUtil.decodeServerError(err.errorCode, err.extendedData);
                    externalErr = client_util_1.ClientUtil.getLiveRoomError(err.errorCode);
                }
                if (reportErr) {
                    _this.dataReport.addMsgInfo(reportSeq, reportErr);
                }
                else {
                    _this.dataReport.addMsgInfo(reportSeq, err);
                }
                _this.dataReport.uploadReport(reportSeq);
                client_util_1.ClientUtil.unregisterCallback("kZegoTaskMixStart" + mixStreamConfig.taskID, _this.stateCenter.reportList);
                // @ts-ignore
                externalErr && (err.errorCode = errorCodeList[externalErr].code);
                reject(err);
            };
            _this.wechatMiniModules.streamHandler.updateMixStream(mixStreamConfig, interResolve, interReject);
        });
    };
    ZegoWechatMini.prototype.setMixerTaskConfig = function (config) {
        var _this = this;
        return new Promise(function (res, rej) {
            var reportSeq = zego_entity_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_log_event_1.ZegoWechatLogEvent.kZegoTaskMixConfig.event);
            client_util_1.ClientUtil.logReportCallback("kZegoTaskMixConfig", _this.dataReport, reportSeq, _this.stateCenter.reportList);
            _this.wechatMiniModules.streamHandler
                .setMixerTaskConfig(config)
                .then(function (result) {
                _this.dataReport.uploadReport(reportSeq);
                client_util_1.ClientUtil.unregisterCallback("kZegoTaskMixConfig", _this.stateCenter.reportList);
                res(result);
            })
                .catch(function (err) {
                _this.dataReport.addMsgInfo(reportSeq, err);
                _this.dataReport.uploadReport(reportSeq);
                client_util_1.ClientUtil.unregisterCallback("kZegoTaskMixConfig", _this.stateCenter.reportList);
                rej(err);
            });
        });
    };
    ZegoWechatMini.prototype.stopMixerTask = function (taskId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var reportSeq = zego_entity_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_log_event_1.ZegoWechatLogEvent.kZegoTaskMixStop.event);
            if (!taskId ||
                typeof taskId !== "string" ||
                taskId.length > zego_entity_1.MAX_MIX_TASK_ID_LENGTH ||
                !client_util_1.ClientUtil.checkIllegalCharacters(taskId)) {
                _this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.STOP_MIXER_TASK +
                    " taskID must be string less 256");
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_log_event_1.ZegoWechatLogEvent.kZegoTaskMixStop.error.kParamError.code,
                    message: zego_log_event_1.ZegoWechatLogEvent.kZegoTaskMixStop.error.kParamError.message +
                        " param taskID error"
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({
                    errorCode: zego_log_event_1.ZegoWechatLogEvent.kZegoTaskMixStop.error.kParamError.code,
                    extendedData: zego_log_event_1.ZegoWechatLogEvent.kZegoTaskMixStop.error.kParamError.message +
                        " param taskID error"
                });
                return;
            }
            var interResolve = function (res) {
                _this.dataReport.uploadReport(reportSeq);
                resolve(res);
            };
            var interReject = function (err) {
                var errName, reportErr, externalErr;
                if (err.errorCode < 2000000000 && err.errorCode > 1000000000) {
                    errName = client_util_1.ClientUtil.mixServerError(err.errorCode - zego_entity_1.MIXSTREAM_ERROR_CODE)[0];
                    // reportErr = errorList[errName];
                    externalErr = client_util_1.ClientUtil.mixServerError(err.errorCode - zego_entity_1.MIXSTREAM_ERROR_CODE)[1];
                    reportErr = client_util_1.ClientUtil.mixServerError(err.errorCode - zego_entity_1.MIXSTREAM_ERROR_CODE)[1];
                }
                else if (err.errorCode < 1000000) {
                    reportErr = client_util_1.ClientUtil.decodeServerError(err.errorCode, err.extendedData);
                    externalErr = client_util_1.ClientUtil.getLiveRoomError(err.errorCode);
                }
                if (reportErr) {
                    _this.dataReport.addMsgInfo(reportSeq, reportErr);
                }
                else {
                    _this.dataReport.addMsgInfo(reportSeq, err);
                }
                _this.dataReport.uploadReport(reportSeq);
                // @ts-ignore
                externalErr && (err.errorCode = errorCodeList[externalErr].code);
                reject(err);
            };
            _this.wechatMiniModules.streamHandler.stopMixStream(taskId, interResolve, interReject);
        });
    };
    ZegoWechatMini.prototype.setStreamExtraInfo = function (streamID, extraInfo) {
        return this.wechatMiniModules.streamHandler.setStreamExtraInfo(streamID, extraInfo);
    };
    ZegoWechatMini.prototype.startPlayingStream = function (streamID, playOption) {
        return this.wechatMiniModules.playModule.startPlayingStream(streamID, playOption);
    };
    ZegoWechatMini.prototype.stopPlayingStream = function (streamID) {
        this.wechatMiniModules.playModule.stopPlayingStream(streamID);
    };
    // 更新播放器事件
    ZegoWechatMini.prototype.updatePlayerState = function (streamID, event) {
        this.wechatMiniModules.updatePlayerState(streamID, event);
    };
    // 更新推拉流质量
    ZegoWechatMini.prototype.updatePlayerNetStatus = function (streamID, event) {
        this.wechatMiniModules.updatePlayerNetStatus(streamID, event);
    };
    return ZegoWechatMini;
}());
exports.ZegoWechatMini = ZegoWechatMini;


/***/ }),

/***/ "./sdk/src/wechatMini/modules/index.ts":
/*!*********************************************!*\
  !*** ./sdk/src/wechatMini/modules/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WechatMiniModules = void 0;
var zego_streamcenter_wechat_1 = __webpack_require__(/*! ./zego.streamcenter.wechat */ "./sdk/src/wechatMini/modules/zego.streamcenter.wechat.ts");
var streamHandler_1 = __webpack_require__(/*! ../../common/streamHandler */ "./sdk/src/common/streamHandler.ts");
var publish_module_1 = __webpack_require__(/*! ./publish.module */ "./sdk/src/wechatMini/modules/publish.module.ts");
var play_module_1 = __webpack_require__(/*! ./play.module */ "./sdk/src/wechatMini/modules/play.module.ts");
var zego_entity_1 = __webpack_require__(/*! ../../common/zego.entity */ "./sdk/src/common/zego.entity.ts");
var zego_log_event_1 = __webpack_require__(/*! ../../common/zego.log.event */ "./sdk/src/common/zego.log.event.ts");
var client_util_1 = __webpack_require__(/*! ../../util/client-util */ "./sdk/src/util/client-util.ts");
var action_1 = __webpack_require__(/*! ../../common/action */ "./sdk/src/common/action.ts");
var WechatMiniModules = /** @class */ (function () {
    function WechatMiniModules(logger, dataReport, stateCenter, rtm) {
        this.logger = logger;
        this.dataReport = dataReport;
        this.stateCenter = stateCenter;
        this.rtm = rtm;
        this.currentPlaySourceType = zego_entity_1.ENUM_DISPATCH_TYPE.cdn;
        this.mixStreamList = {};
        this.ultraPlaySourceType = "rtmp_v2";
        this.streamCenter = new zego_streamcenter_wechat_1.ZegoStreamCenterWechat(this.logger, this.stateCenter, this.dataReport);
        this.streamHandler = new streamHandler_1.StreamHandler(this.logger, this.stateCenter, this.rtm, this.dataReport, this.streamCenter);
        //推流基础模块
        this.publishModule = new publish_module_1.PublishModule(this.logger, this.dataReport, this.stateCenter, this.streamCenter, this.streamHandler, this.rtm);
        //拉流基础模块
        this.playModule = new play_module_1.PlayModule(this.logger, this.dataReport, this.stateCenter, this.streamCenter, this.rtm);
        this.init();
    }
    WechatMiniModules.prototype.init = function () {
        //监听房间信息
        this.bindRTMListener();
        this.bindStreamHandler();
        this.bindStreamCenterHandler();
    };
    WechatMiniModules.prototype.bindRTMListener = function () {
        var _this = this;
        //todo
        this.rtm._on("roomLoginResponse", function (msg) {
            _this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_BIND_RTM_LISTENER +
                " roomLoginResponse call ");
            _this.stateCenter.appid = _this.rtm.getAppID();
            _this.stateCenter.idName = _this.rtm.getUserID();
            _this.stateCenter.token = _this.rtm.getToken();
            _this.stateCenter.testEnvironment = _this.rtm.isTestEnvironment();
            _this.stateCenter.sessionid = _this.rtm.getSessionId();
            _this.stateCenter.roomid = _this.rtm.getRoomID();
            //todo anchor_info
            // wechat do not need setSessionInfo
            // this.streamCenter.setSessionInfo(
            //     this.stateCenter.appid,
            //     this.stateCenter.idName,
            //     this.stateCenter.token,
            //     this.stateCenter.testEnvironment
            // );
            _this.streamHandler.handleStreamStart(msg);
            _this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_BIND_RTM_LISTENER +
                " roomLoginResponse end");
        });
        this.rtm._on("HBResponse", function (msg) {
            _this.streamHandler.patchStreamList(msg);
        });
        this.rtm._on("_roomStateUpdate", function (roomID, state, errorCode, extendedData) {
            if (state == "DISCONNECTED") {
                _this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_BIND_RTM_LISTENER +
                    " _roomStateUpdate " +
                    roomID +
                    " disconnected " +
                    errorCode
                    ? errorCode + " "
                    : "" + extendedData
                        ? extendedData
                        : "");
                _this.stateCenter.isResetRoom = true;
                _this.stateCenter.streamList = [];
                _this.streamCenter.reset();
            }
            else {
                _this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_BIND_RTM_LISTENER +
                    " _roomStateUpdate " +
                    roomID +
                    " state");
            }
        });
    };
    WechatMiniModules.prototype.bindStreamHandler = function () {
        var _this = this;
        this.streamHandler.onStreamUpdated = function (roomID, type, streamList) {
            var _streamList = streamList.map(function (stream) {
                return {
                    streamID: stream.streamID,
                    user: stream.user,
                    extraInfo: stream.extraInfo
                    // urlsFLV: stream.urlFlv,
                    // urlsRTMP: stream.urlRtmp,
                    // urlsHLS: stream.urlHls,
                    // urlsHttpsFLV: stream.urlHttpsFlv,
                    // urlsHttpsHLS: stream.urlHttpsHls
                };
            });
            var reportSeq = zego_entity_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_log_event_1.ZegoWechatLogEvent.kZegoTaskLiveRoomGetStreamUpdateInfo.event);
            _this.dataReport.addMsgInfo(reportSeq, {
                stream_update_type: zego_log_event_1.ZegoWechatLogEvent.kZegoTaskLiveRoomGetStreamUpdateInfo.stream_update_type(type === 1 ? "added" : "deleted"),
                update_stream: zego_log_event_1.ZegoWechatLogEvent.kZegoTaskLiveRoomGetStreamUpdateInfo.update_stream(streamList)
            });
            _this.dataReport.uploadReport(reportSeq);
            _this.stateCenter.actionListener("roomStreamUpdate", roomID, client_util_1.ClientUtil.getSteamUpdateType(type), _streamList);
            if (type === 1) {
                var filterStreamList_1 = [];
                _streamList.forEach(function (stream) {
                    if (stream.extraInfo) {
                        filterStreamList_1.push({
                            streamID: stream.streamID,
                            user: stream.user,
                            extraInfo: stream.extraInfo
                        });
                    }
                });
                filterStreamList_1.length > 0 &&
                    _this.stateCenter.actionListener("streamExtraInfoUpdate", roomID, filterStreamList_1);
            }
        };
        this.streamHandler.onPublishStateUpdate = function (type, streamID, error) {
            _this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.ON_PUBLISH_STATE_UPDATE + " " + streamID);
            var reportSeq = _this.stateCenter.reportSeqList.startPublish[streamID];
            var publish = _this.streamCenter.publishingList[streamID];
            if (publish && (type == 0 || type == 1) && reportSeq) {
                _this.dataReport.eventEndWithMsgInfo(reportSeq, "PublishState", {
                    type: type
                });
                type == 1 && _this.dataReport.addMsgInfo(reportSeq, error);
                _this.dataReport.uploadReport(reportSeq);
                delete _this.stateCenter.reportSeqList.startPublish[streamID];
            }
            _this.stateCenter.actionListener("publisherStateUpdate", {
                state: client_util_1.ClientUtil.getPublisherStateType(type),
                streamID: streamID,
                errorCode: error.code,
                extendedData: error.message
            });
        };
        this.streamHandler.onStreamExtraInfoUpdated = function (roomID, streamList) {
            var _streamList = streamList.map(function (stream) {
                return {
                    streamID: stream.streamID,
                    user: stream.user,
                    extraInfo: stream.extraInfo
                };
            });
            var reportSeq = zego_entity_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_log_event_1.ZegoWechatLogEvent.kZegoTaskLiveRoomGetStreamExtraInfo.event);
            _this.dataReport.addMsgInfo(reportSeq, {
                update_stream: zego_log_event_1.ZegoWechatLogEvent.kZegoTaskLiveRoomGetStreamExtraInfo.update_stream(_streamList)
            });
            _this.dataReport.uploadReport(reportSeq);
            _this.stateCenter.actionListener("streamExtraInfoUpdate", roomID, _streamList);
        };
    };
    WechatMiniModules.prototype.bindStreamCenterHandler = function () {
        var _this = this;
        this.streamCenter.onPlayStateUpdate = function (type, streamID, error) {
            var reportSeq = _this.stateCenter.reportSeqList.startPlay[streamID];
            var play = _this.streamCenter.playingList.find(function (item) { return item.streamID === streamID; });
            if (play && (type == 0 || type == 1) && reportSeq) {
                _this.dataReport.eventEndWithMsgInfo(reportSeq, "PlayState", {
                    type: type
                });
                type == 1 && error && _this.dataReport.addMsgInfo(reportSeq, error);
                _this.dataReport.uploadReport(reportSeq);
                delete _this.stateCenter.reportSeqList.startPlay[streamID];
            }
            _this.stateCenter.actionListener("playerStateUpdate", {
                state: client_util_1.ClientUtil.getPlayerStateType(type),
                streamID: streamID,
                errorCode: error && error.code,
                extendedData: error && error.message
            });
            // if (type === 1) {
            //     if (this.streamCenter.playErrorCallBackList[streamID]) {
            //         this.streamCenter.playErrorCallBackList[streamID](error);
            //         delete this.streamCenter.playErrorCallBackList[streamID];
            //     }
            //     this.logger.info(ZEGO_WECHATMINI_ACTION.WECHATMINI_BIND_STREAM_CENTER_HANDLER + " stop play called by sdk");
            //     this.playModule.stopPlayingStream(streamID);
            // }
        };
        this.streamCenter.onPublishStateUpdate = function (type, streamID, error) {
            _this.onPublishStateUpdateHandle(type, streamID, error);
        };
        this.streamCenter.onPublishQualityUpdate = function (streamID, stats) {
            _this.stateCenter.actionListener("publishQualityUpdate", streamID, stats);
        };
        this.streamCenter.onPlayQualityUpdate = function (streamID, stats) {
            _this.stateCenter.actionListener("playQualityUpdate", streamID, stats);
        };
    };
    WechatMiniModules.prototype.onPublishStateUpdateHandle = function (type, streamID, error) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.ON_PUBLISH_STATE_UPDATE_HANDLE + " call");
        if (type == 0) {
            //start publish
            if (this.stateCenter.publishStreamList[streamID]) {
                if (this.stateCenter.publishStreamList[streamID].state ==
                    zego_entity_1.ENUM_PUBLISH_STREAM_STATE.tryPublish &&
                    !this.stateCenter.streamList.find(function (streamInfo) { return streamInfo.stream_id == streamID; })) {
                    this.stateCenter.publishStreamList[streamID].state =
                        zego_entity_1.ENUM_PUBLISH_STREAM_STATE.update_info;
                    this.streamHandler.updateStreamInfo(streamID, zego_entity_1.ENUM_STREAM_SUB_CMD.liveBegin, this.stateCenter.publishStreamList[streamID].extra_info);
                    this.dataReport.uploadReport(this.stateCenter.reportSeqList.startPublish[streamID]);
                    delete this.stateCenter.reportSeqList.startPublish[streamID];
                    client_util_1.ClientUtil.unregisterCallback("kZegoTaskPublishStart" + streamID, this.stateCenter.reportList);
                }
                else {
                    this.stateCenter.publishStreamList[streamID].state =
                        zego_entity_1.ENUM_PUBLISH_STREAM_STATE.publishing;
                    this.streamHandler.onPublishStateUpdate(type, streamID, error);
                    this.dataReport.uploadReport(this.stateCenter.reportSeqList.startPublish[streamID]);
                    delete this.stateCenter.reportSeqList.startPublish[streamID];
                    client_util_1.ClientUtil.unregisterCallback("kZegoTaskPublishStart" + streamID, this.stateCenter.reportList);
                }
            }
        }
        else {
            this.streamHandler.onPublishStateUpdate(type, streamID, error);
            if (type == 1) {
                this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.ON_PUBLISH_STATE_UPDATE_HANDLE +
                    " stop publish called by sdk");
                this.publishModule.stopPublishingStream(streamID);
            }
        }
    };
    WechatMiniModules.prototype.bindListener = function (listener, callBack) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_BIND_LISTENER + " call");
        if (!this.stateCenter.listenerList[listener]) {
            this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_BIND_LISTENER +
                " event " +
                listener +
                " no found");
            return false;
        }
        if (typeof callBack !== "function") {
            this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_BIND_LISTENER +
                " listener callBack must be function");
            return false;
        }
        this.stateCenter.listenerList[listener].indexOf(callBack) == -1 &&
            this.stateCenter.listenerList[listener].push(callBack);
        return true;
    };
    WechatMiniModules.prototype.deleteListener = function (listener, callBack) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_DELETE_LISTENER + " call");
        if (!this.stateCenter.listenerList[listener]) {
            this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_DELETE_LISTENER + " listener no found");
            return false;
        }
        var li = this.stateCenter.listenerList[listener];
        if (callBack) {
            li.splice(li.indexOf(callBack), 1);
        }
        else {
            this.stateCenter.listenerList[listener] = [];
        }
        return true;
    };
    WechatMiniModules.prototype.checkSystemRequirements = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var reportSeq = zego_entity_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_log_event_1.ZegoWechatLogEvent.kZegoTaskCheckSystemRequirements.event);
            var interResolve = function (res) {
                _this.dataReport.addMsgInfo(reportSeq, {
                    check_system: res
                });
                _this.dataReport.uploadReport(reportSeq);
                resolve(res);
            };
            var interReject = function (err) {
                _this.dataReport.addMsgInfo(reportSeq, zego_log_event_1.ZegoWechatLogEvent.kZegoTaskCheckSystemRequirements.error
                    .kCheckSystemGetSettingFailError);
                _this.dataReport.uploadReport(reportSeq);
                reject(err);
            };
            client_util_1.ClientUtil.isSupportLive(interResolve, interReject);
        });
    };
    WechatMiniModules.prototype.updatePlayerState = function (streamID, event) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_UPDATE_PLAYER_STATE +
            " call " +
            streamID);
        this.streamCenter.updatePlayerState(streamID, event);
    };
    // 更新推拉流质量
    WechatMiniModules.prototype.updatePlayerNetStatus = function (streamID, event) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_UPDATE_PLAYER_NET_STATUS +
            " call " +
            streamID);
        this.streamCenter.updatePlayerNetStatus(streamID, event);
    };
    WechatMiniModules.prototype.getNextUrl = function (streamID) {
        if (typeof streamID !== "string" || streamID == "") {
            this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_GET_NEXT_URL +
                " stream ID must be string and not empty");
            return "";
        }
        return this.streamCenter.getNextUrl(streamID);
    };
    WechatMiniModules.prototype.setCustomSignalUrl = function (signalUrl, isPublish) {
        if (isPublish === void 0) { isPublish = true; }
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_SET_CUSTOM_SIGNAL_URL +
            " call: " +
            JSON.stringify(signalUrl));
        if (!signalUrl || signalUrl.length == 0) {
            this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_SET_CUSTOM_SIGNAL_URL + " param error");
            return false;
        }
        var isUrl = true;
        signalUrl.forEach(function (url) { return url.indexOf("rtmp://") != 0 && (isUrl = false); });
        if (!isUrl) {
            this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_SET_CUSTOM_SIGNAL_URL +
                " url is not correct");
            return;
        }
        if (isPublish) {
            this.stateCenter.customUrl = signalUrl;
        }
        else {
            this.stateCenter.customPlayUrl = signalUrl;
        }
    };
    return WechatMiniModules;
}());
exports.WechatMiniModules = WechatMiniModules;


/***/ }),

/***/ "./sdk/src/wechatMini/modules/play.module.ts":
/*!***************************************************!*\
  !*** ./sdk/src/wechatMini/modules/play.module.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayModule = void 0;
var zego_entity_1 = __webpack_require__(/*! ../../common/zego.entity */ "./sdk/src/common/zego.entity.ts");
var zego_log_event_1 = __webpack_require__(/*! ../../common/zego.log.event */ "./sdk/src/common/zego.log.event.ts");
var client_util_1 = __webpack_require__(/*! ../../util/client-util */ "./sdk/src/util/client-util.ts");
var action_1 = __webpack_require__(/*! ../../common/action */ "./sdk/src/common/action.ts");
var PlayModule = /** @class */ (function () {
    function PlayModule(logger, dataReport, stateCenter, streamCenter, rtm) {
        this.logger = logger;
        this.dataReport = dataReport;
        this.stateCenter = stateCenter;
        this.streamCenter = streamCenter;
        this.rtm = rtm;
        this.mixStreamList = {};
        this.preferPlaySourceType = zego_entity_1.ENUM_PLAY_SOURCE_TYPE.ultra;
        this.currentPlaySourceType = zego_entity_1.ENUM_DISPATCH_TYPE.cdn;
        this.ultraPlaySourceType = "rtmp_v2";
    }
    PlayModule.prototype.startPlayingStream = function (streamID, playOption) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_START_PLAYING_STREAM +
                " call " +
                streamID);
            var reportSeq = zego_entity_1.getReportSeq();
            _this.stateCenter.reportSeqList.startPlay[streamID] = reportSeq;
            _this.dataReport.newReport(reportSeq, zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPlayStart.event);
            var innerReject = function (err, externMsg) {
                _this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_START_PLAYING_STREAM +
                    " " +
                    (externMsg || err.message));
                _this.dataReport.uploadReport(reportSeq, undefined, err, externMsg);
                delete _this.stateCenter.reportSeqList.startPlay[streamID];
                reject(__assign(__assign({}, err), { errorCode: err.code, extendedData: err.message + (externMsg ? " " + externMsg : "") }));
            };
            if (!client_util_1.ClientUtil.isParamEmpty(streamID)) {
                innerReject(zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayStreamIDNullError);
                return;
            }
            if (!client_util_1.ClientUtil.isTypeString(streamID)) {
                innerReject(zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayParamError);
                return;
            }
            if (!client_util_1.ClientUtil.isTooLong(streamID, zego_entity_1.MAX_STREAM_ID_LENGTH)) {
                innerReject(zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayStreamIDTooLongError);
                return;
            }
            if (!client_util_1.ClientUtil.checkIllegalCharacters(streamID)) {
                innerReject(zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPlayStart.error
                    .kPlayStreamIDInvalidCharacterError);
                return;
            }
            if (_this.stateCenter.customPlayUrl &&
                _this.stateCenter.customPlayUrl.length != 0) {
                if (!_this.streamCenter.updatePlayingState(streamID, playOption ? playOption.streamParams : undefined, true)) {
                    innerReject(zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPlayStart.error
                        .kPlayStreamIDInvalidCharacterError, "cannot start play");
                    return;
                }
                _this.streamCenter.playErrorCallBackList[streamID] = function (error) {
                    innerReject(error);
                };
                return _this.streamCenter.startPlayingStream(streamID, _this.stateCenter.customPlayUrl, 1);
            }
            if (_this.rtm.modules.service.isDisConnect()) {
                innerReject(zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayNoLoginError);
                return;
            }
            if (!_this.streamCenter.updatePlayingState(streamID, playOption ? playOption.streamParams : undefined, true)) {
                innerReject(zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPlayStart.error
                    .kPlayStreamIDInvalidCharacterError, "cannot start play");
                return;
            }
            _this.streamCenter.onPlayStateUpdate(zego_entity_1.ENUM_PLAY_STATE_UPDATE.retry, streamID, { code: 0, message: "" });
            client_util_1.ClientUtil.logReportCallback("kZegoTaskPlayStart" + streamID, _this.dataReport, reportSeq, _this.stateCenter.reportList);
            _this.dataReport.addMsgInfo(reportSeq, {
                stream: zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPlayStart.stream(streamID),
                playOption: zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPlayStart.playOption(playOption)
            });
            if (playOption &&
                (playOption.sourceType == "CDN" || playOption.sourceType == "BGP")) {
                _this.setPreferPlaySourceType(zego_entity_1.ENUM_SOURCE_TYPE[playOption.sourceType]);
            }
            _this.streamCenter.playSuccessCallBackList[streamID] = function (streamID, url) {
                client_util_1.ClientUtil.actionLogReportCallback("kZegoTaskPlayStart" + streamID, _this.stateCenter.reportList, zego_entity_1.REPORT_ACTION.eventEnd, "get_play_url");
                resolve({ streamID: streamID, url: url });
            };
            _this.streamCenter.playErrorCallBackList[streamID] = function (error) {
                client_util_1.ClientUtil.actionLogReportCallback("kZegoTaskPlayStart" + streamID, _this.stateCenter.reportList, zego_entity_1.REPORT_ACTION.eventEnd, "get_play_url");
                innerReject(error);
            };
            if (playOption && playOption.isMix) {
                _this.mixStreamList[streamID] = {
                    ultra_url_rtmp: null
                };
                _this.fetchPlayStreamUrl(streamID, "rtmp_cdn");
                return;
            }
            client_util_1.ClientUtil.actionLogReportCallback("kZegoTaskPlayStart" + streamID, _this.stateCenter.reportList, zego_entity_1.REPORT_ACTION.eventStart, "get_play_url");
            if (_this.preferPlaySourceType == zego_entity_1.ENUM_PLAY_SOURCE_TYPE.cdn) {
                _this.startPlayingStreamFromCDN(streamID);
            }
            else {
                //current publish to BGP
                _this.startPlayingStreamFromBGP(streamID);
            }
        });
    };
    // 停止流
    PlayModule.prototype.stopPlayingStream = function (streamID) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_STOP_PLAYING_STREAM +
            " call " +
            streamID);
        var seq = zego_entity_1.getReportSeq();
        this.dataReport.newReport(seq, zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPlayStop.event);
        this.dataReport.addMsgInfo(seq, {
            stream_id: streamID
        });
        if (typeof streamID !== "string" || streamID == "") {
            this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_STOP_PLAYING_STREAM +
                " stream ID must be string and not empty");
            this.dataReport.addMsgInfo(seq, zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayParamError);
            this.dataReport.uploadReport(seq);
            return;
        }
        var player = this.streamCenter.playerList[streamID];
        if (player && player.state !== zego_entity_1.ENUM_PLAYER_STATE.stop) {
            this.streamCenter.onPlayStateUpdate(zego_entity_1.ENUM_PLAY_STATE_UPDATE.error, streamID, { code: 0, message: "" });
        }
        this.streamCenter.stopPlayingStream(streamID);
        for (var seq_1 in this.stateCenter.streamUrlMap) {
            if (this.stateCenter.streamUrlMap[seq_1] === streamID) {
                delete this.stateCenter.streamUrlMap[seq_1];
                break;
            }
        }
        if (this.mixStreamList[streamID]) {
            delete this.mixStreamList[streamID];
        }
        this.dataReport.uploadReport(seq);
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_STOP_PLAYING_STREAM + " call success");
    };
    PlayModule.prototype.startPlayingStreamFromCDN = function (streamID) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_START_PLAYING_STREAM_FROM_CDN +
            " call " +
            streamID);
        var streamUrls = null; // 判断传入的流id，在当前流列表中能否找到，找到就存起相对应的流地址
        for (var i = 0; i < this.stateCenter.streamList.length; i++) {
            if (this.stateCenter.streamList[i].stream_id === streamID) {
                // 根据传入的流id判断当前的流列表中是否存在该流
                streamUrls = this.stateCenter.streamList[i].urls_rtmp || [];
                break;
            }
        }
        if (!streamUrls || streamUrls.length <= 0) {
            this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_START_PLAYING_STREAM_FROM_CDN +
                " cannot find stream url,Please check if CDN is configured ");
            this.streamCenter.onPlayStateUpdate(zego_entity_1.ENUM_PLAY_STATE_UPDATE.error, streamID, zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayDispatchError);
            return false;
        }
        this.currentPlaySourceType = zego_entity_1.ENUM_DISPATCH_TYPE.cdn;
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_START_PLAYING_STREAM_FROM_CDN +
            " play stream");
        return this.doPlayStream(streamID, streamUrls, this.currentPlaySourceType);
    };
    PlayModule.prototype.startPlayingStreamFromBGP = function (streamID) {
        this.currentPlaySourceType = zego_entity_1.ENUM_DISPATCH_TYPE.ultra;
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_START_PLAYING_STREAM_FROM_BGP +
            " fetch stream url");
        this.fetchPlayStreamUrl(streamID, this.ultraPlaySourceType);
        return true;
    };
    PlayModule.prototype.doPlayStream = function (streamID, streamUrls, sourceType) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_DO_PLAY_STREAM + " call");
        // if (!streamUrls || streamUrls.length <= 0) {
        //   this.streamCenter.onPlayStateUpdate(
        //     ENUM_PLAY_STATE_UPDATE.error,
        //     streamID,
        //     {
        //       code: errorList.kUrlsNone.code,
        //       msg: errorList.kUrlsNone.message,
        //     }
        //   )
        //   return false
        // }
        this.streamCenter.startPlayingStream(streamID, streamUrls, sourceType);
        return true;
    };
    PlayModule.prototype.fetchPlayStreamUrl = function (streamID, urlType) {
        var _this = this;
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_FETCH_PLAY_STREAM_URL +
            " call " +
            streamID);
        // 不是处于登录状态，不让拉流
        if (this.rtm.modules.service.isDisConnect()) {
            this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_FETCH_PLAY_STREAM_URL + " state error");
            return;
        }
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_FETCH_PLAY_STREAM_URL +
            " send fetch request");
        var bodyData = {
            stream_ids: [streamID],
            url_type: urlType
        };
        var seq = this.rtm.modules.service.sendMessage("stream_url", bodyData, function (msg) {
            _this.handleFetchStreamUrlRsp(msg);
        }, function (msg) {
            if (_this.stateCenter.streamUrlMap[seq]) {
                // this.logger.error('fsu.0 ' + _err.msg);
                _this.streamCenter.onPlayStateUpdate(zego_entity_1.ENUM_PLAY_STATE_UPDATE.error, _this.stateCenter.streamUrlMap[seq], zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayDispatchError);
            }
            else {
                _this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_FETCH_PLAY_STREAM_URL +
                    " already stop play");
            }
        });
        if (seq !== -1) {
            this.stateCenter.streamUrlMap[seq] = streamID;
            if (this.streamCenter.playerList[streamID]) {
                this.streamCenter.playerList[streamID].seq = seq;
            }
        }
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_FETCH_PLAY_STREAM_URL + " call success");
    };
    PlayModule.prototype.handleFetchStreamUrlRsp = function (msg) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_HANDLE_FETCH_STREAM_URL_RSP + " call ");
        var requestStreamId = this.stateCenter.streamUrlMap[msg.header.seq];
        if (requestStreamId) {
            delete this.stateCenter.streamUrlMap[msg.header.seq];
        }
        if (msg.body.err_code !== 0) {
            this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_HANDLE_FETCH_STREAM_URL_RSP +
                " server error= " +
                msg.body.err_code);
            //cann't get stream url, should callback
            this.streamCenter.onPlayStateUpdate(zego_entity_1.ENUM_PLAY_STATE_UPDATE.error, requestStreamId, zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayDispatchError);
            return;
        }
        if (msg.body.stream_url_infos && msg.body.stream_url_infos.length > 0) {
            var streamID = msg.body.stream_url_infos[0].stream_id;
            //return rtmp address
            var urlsWS = msg.body.stream_url_infos[0].urls_ws;
            var sourceType = this.currentPlaySourceType;
            // 修复当this.streamList为空时，没有对新增的流进行保存的问题，导致客户端收到新增的流，启动starPlayingStream不能播放问题
            var found = false;
            // 服务端返回的非最新的seq, 不处理
            if (msg.header.seq !== this.streamCenter.playerList[streamID].seq) {
                this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_HANDLE_FETCH_STREAM_URL_RSP +
                    " seq is not match, ignore " +
                    streamID);
                return;
            }
            // 检查拉流streamid
            for (var i = 0; i < this.stateCenter.streamList.length; i++) {
                if (this.stateCenter.streamList[i].stream_id == streamID) {
                    this.stateCenter.streamList[i].urltra_url_rtmp = urlsWS;
                    found = true;
                    break;
                }
            }
            //检查混流streamid
            if (!found && this.mixStreamList[streamID]) {
                this.mixStreamList[streamID].urltra_url_rtmp = urlsWS;
                sourceType = zego_entity_1.ENUM_DISPATCH_TYPE.cdn;
                found = true;
            }
            if (!found) {
                this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_HANDLE_FETCH_STREAM_URL_RSP +
                    "cannot find streamInfo in existing stream list");
                this.stateCenter.streamList.push({
                    stream_id: streamID,
                    urltra_url_rtmp: urlsWS
                });
            }
            this.doPlayStream(streamID, urlsWS, sourceType);
        }
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYMODULE_HANDLE_FETCH_STREAM_URL_RSP +
            " call success");
    };
    // 设置优先播放流类型
    PlayModule.prototype.setPreferPlaySourceType = function (sourceType) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_SETPREFERPLAYSOURCETYPE + " call");
        if (sourceType !== zego_entity_1.ENUM_PLAY_SOURCE_TYPE.cdn &&
            sourceType !== zego_entity_1.ENUM_PLAY_SOURCE_TYPE.ultra) {
            this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_SETPREFERPLAYSOURCETYPE +
                " sourceType can be number 0 or 1, which can be represented auto or ultra");
            return false;
        }
        this.preferPlaySourceType = sourceType;
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.WECHATMINI_SETPREFERPLAYSOURCETYPE +
            " call success");
        return true;
    };
    return PlayModule;
}());
exports.PlayModule = PlayModule;


/***/ }),

/***/ "./sdk/src/wechatMini/modules/publish.module.ts":
/*!******************************************************!*\
  !*** ./sdk/src/wechatMini/modules/publish.module.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishModule = void 0;
var zego_entity_1 = __webpack_require__(/*! ../../common/zego.entity */ "./sdk/src/common/zego.entity.ts");
var action_1 = __webpack_require__(/*! ../../common/action */ "./sdk/src/common/action.ts");
var zego_log_event_1 = __webpack_require__(/*! ../../common/zego.log.event */ "./sdk/src/common/zego.log.event.ts");
var client_util_1 = __webpack_require__(/*! ../../util/client-util */ "./sdk/src/util/client-util.ts");
var PublishModule = /** @class */ (function () {
    function PublishModule(logger, dataReport, stateCenter, streamCenter, streamHandler, rtm) {
        this.logger = logger;
        this.dataReport = dataReport;
        this.stateCenter = stateCenter;
        this.streamCenter = streamCenter;
        this.streamHandler = streamHandler;
        this.rtm = rtm;
        this.preferPublishSourceType = zego_entity_1.ENUM_DISPATCH_TYPE.ultra;
        this.ultraPlaySourceType = "rtmp_v2";
    }
    //开始推流
    PublishModule.prototype.startPublishingStream = function (streamID, publishOption) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_START_PUBLISHING_STREAM + " call");
            var reportSeq = zego_entity_1.getReportSeq();
            _this.stateCenter.reportSeqList.startPublish[streamID] = reportSeq;
            _this.dataReport.newReport(reportSeq, zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStart.event);
            var innerReject = function (err, externMsg) {
                _this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_START_PUBLISHING_STREAM +
                    " " +
                    (externMsg || err.message));
                _this.dataReport.uploadReport(reportSeq, undefined, err, externMsg);
                delete _this.stateCenter.reportSeqList.startPublish[streamID];
                reject(__assign(__assign({}, err), { errorCode: err.code, extendedData: err.message + (externMsg ? " " + externMsg : "") }));
            };
            if (!client_util_1.ClientUtil.isParamEmpty(streamID)) {
                innerReject(zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStart.error
                    .kPublishStreamIDNullError);
                return;
            }
            if (!client_util_1.ClientUtil.isTypeString(streamID)) {
                innerReject(zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishParamError);
                return;
            }
            if (!client_util_1.ClientUtil.isTooLong(streamID, zego_entity_1.MAX_STREAM_ID_LENGTH)) {
                innerReject(zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStart.error
                    .kPublishStreamIDTooLongError);
                return false;
            }
            if (!client_util_1.ClientUtil.checkIllegalCharacters(streamID)) {
                innerReject(zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStart.error
                    .kPublishStreamIDInvalidCharacterError);
                return false;
            }
            if (_this.stateCenter.customUrl &&
                _this.stateCenter.customUrl.length != 0) {
                _this.stateCenter.publishStreamList[streamID] = {
                    state: zego_entity_1.ENUM_PUBLISH_STREAM_STATE.waiting_url,
                    extra_info: publishOption && publishOption.extraInfo
                        ? publishOption.extraInfo
                        : null
                };
                if (!_this.streamCenter.updatePublishingState(streamID, publishOption && publishOption.streamParams
                    ? publishOption.streamParams
                    : undefined, true)) {
                    innerReject(zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kIsPublishing, "cannot start publish");
                    return;
                }
                _this.streamCenter.publishSuccessCallBackList[streamID] = function (streamID, url) {
                    resolve({ streamID: streamID, url: url });
                };
                return _this.streamCenter.startPublishingStream(streamID, _this.stateCenter.customUrl, 1);
            }
            if (_this.rtm.modules.service.isDisConnect()) {
                innerReject(zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishNoLoginError);
                return;
            }
            if (!_this.streamCenter.updatePublishingState(streamID, publishOption && publishOption.streamParams
                ? publishOption.streamParams
                : undefined, true)) {
                innerReject(zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kIsPublishing, "cannot start publish");
                return false;
            }
            client_util_1.ClientUtil.logReportCallback("kZegoTaskPublishStart" + streamID, _this.dataReport, reportSeq, _this.stateCenter.reportList);
            _this.streamHandler.onPublishStateUpdate(zego_entity_1.ENUM_PUBLISH_STATE_UPDATE.retry, streamID, {
                code: 0,
                message: ""
            });
            _this.dataReport.addMsgInfo(reportSeq, {
                stream: zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStart.stream(streamID),
                publishOption: zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStart.publishOption(publishOption)
            });
            if (publishOption &&
                (publishOption.sourceType == "CDN" || publishOption.sourceType == "BGP")) {
                _this.setPreferPublishSourceType(zego_entity_1.ENUM_SOURCE_TYPE[publishOption.sourceType]);
            }
            _this.stateCenter.publishStreamList[streamID] = {
                state: zego_entity_1.ENUM_PUBLISH_STREAM_STATE.waiting_url,
                extra_info: publishOption && publishOption.extraInfo
                    ? publishOption.extraInfo
                    : null
            };
            _this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_START_PUBLISHING_STREAM +
                " fetch stream url");
            client_util_1.ClientUtil.actionLogReportCallback("kZegoTaskPublishStart" + streamID, _this.stateCenter.reportList, zego_entity_1.REPORT_ACTION.eventStart, "get_publish_url");
            _this.streamCenter.publishSuccessCallBackList[streamID] = function (streamID, url) {
                client_util_1.ClientUtil.actionLogReportCallback("kZegoTaskPublishStart" + streamID, _this.stateCenter.reportList, zego_entity_1.REPORT_ACTION.eventEnd, "get_publish_url");
                resolve({ streamID: streamID, url: url });
            };
            _this.streamCenter.publishErrorCallBackList[streamID] = function (error) {
                // ClientUtil.actionLogReportCallback(
                //   'kZegoTaskPublishStart' + streamID,
                //   this.stateCenter.reportList,
                //   REPORT_ACTION.eventEnd,
                //   'get_publish_url'
                // )
                innerReject(error);
            };
            _this.fetchPublishStreamUrl(streamID);
        });
    };
    PublishModule.prototype.setPreferPublishSourceType = function (sourceType, customUrl) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_SET_PREFER_PUBLISH_SOURCE_TYPE +
            " call");
        if (sourceType !== zego_entity_1.ENUM_DISPATCH_TYPE.cdn &&
            sourceType !== zego_entity_1.ENUM_DISPATCH_TYPE.ultra &&
            sourceType !== zego_entity_1.ENUM_DISPATCH_TYPE.customUrl) {
            this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_SET_PREFER_PUBLISH_SOURCE_TYPE +
                " sourceType only can be number 0 1 2");
            return false;
        }
        if (sourceType === zego_entity_1.ENUM_DISPATCH_TYPE.customUrl &&
            (typeof customUrl !== "string" || customUrl == "")) {
            this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_SET_PREFER_PUBLISH_SOURCE_TYPE +
                " customUrl must be string and not empty");
            return false;
        }
        this.preferPublishSourceType = sourceType;
        this.customCdnUrl = customUrl;
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_SET_PREFER_PUBLISH_SOURCE_TYPE +
            " call success");
        return true;
    };
    PublishModule.prototype.fetchPublishStreamUrl = function (streamID) {
        var _this = this;
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_FETCH_PUBLISH_STREAM_URL + " call");
        // if (!this.stateCenter.isLogin()) {
        //     this.logger.error('fpsu.0 state error');
        //     return;
        // }
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_FETCH_PUBLISH_STREAM_URL +
            " send fetch publish request");
        var publish_type = "";
        if (this.preferPublishSourceType == zego_entity_1.ENUM_DISPATCH_TYPE.cdn) {
            publish_type = "cdn";
        }
        else if (this.preferPublishSourceType == zego_entity_1.ENUM_DISPATCH_TYPE.ultra) {
            publish_type = "bgp";
        }
        var bodyData = {
            stream_id: streamID,
            url_type: this.ultraPlaySourceType,
            publish_type: publish_type,
            header_kvs: [
                { key: "grpc-metadata-push", value: this.customCdnUrl || "" }
            ]
        };
        var seq = this.rtm.modules.service.sendMessage("stream_publish", bodyData, function (msg) {
            _this.handleFetchStreamPublishUrlRsp(msg);
        }, function (result, seq) {
            _this.streamCenter.publishErrorCallBackList[streamID](zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishDispatchError);
            _this.streamHandler.onPublishStateUpdate(zego_entity_1.ENUM_PUBLISH_STATE_UPDATE.error, streamID, zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishDispatchError);
            _this.streamCenter.stopPublishingStream(streamID);
        });
        if (seq !== -1) {
            this.stateCenter.streamUrlMap[seq] = streamID;
        }
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_FETCH_PUBLISH_STREAM_URL +
            " call success");
    };
    PublishModule.prototype.handleFetchStreamPublishUrlRsp = function (msg) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_HANDLE_FETCH_STREAM_PUBLISH_URL_RSP +
            " call");
        var requestStreamId = this.stateCenter.streamUrlMap[msg.header.seq];
        if (requestStreamId) {
            delete this.stateCenter.streamUrlMap[msg.header.seq];
        }
        if (msg.body.err_code !== 0) {
            this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_HANDLE_FETCH_STREAM_PUBLISH_URL_RSP +
                " server error= " +
                msg.body.err_code);
            if (this.stateCenter.publishStreamList[requestStreamId]) {
                this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_HANDLE_FETCH_STREAM_PUBLISH_URL_RSP +
                    " liveRoom cmd error");
                this.streamCenter.publishErrorCallBackList[requestStreamId](zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishDispatchError);
                this.streamHandler.onPublishStateUpdate(zego_entity_1.ENUM_PUBLISH_STATE_UPDATE.error, requestStreamId, {
                    code: zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStart.error
                        .kPublishDispatchError.code,
                    message: "server error= " + msg.body.err_code
                });
                this.streamCenter.stopPublishingStream(requestStreamId);
            }
            return;
        }
        if (msg.body.stream_url_info) {
            var streamID = msg.body.stream_url_info.stream_id;
            //return rtmp address
            var urlsWS = msg.body.stream_url_info.urls_ws;
            if (!this.stateCenter.publishStreamList[streamID]) {
                this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_HANDLE_FETCH_STREAM_PUBLISH_URL_RSP +
                    " cannot find stream");
                return;
            }
            this.stateCenter.publishStreamList[streamID].url_rtmp = urlsWS;
            this.stateCenter.publishStreamList[streamID].state =
                zego_entity_1.ENUM_PUBLISH_STREAM_STATE.tryPublish;
            this.doPublishStream(streamID, urlsWS);
        }
    };
    PublishModule.prototype.doPublishStream = function (streamID, streamUrls) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_DO_PUBLISH_STREAM +
            " call " +
            streamID +
            "streamUrl: " +
            streamUrls);
        if (!streamUrls || streamUrls.length <= 0) {
            this.streamCenter.publishErrorCallBackList[streamID](zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishDispatchError);
            this.streamHandler.onPublishStateUpdate(zego_entity_1.ENUM_PUBLISH_STATE_UPDATE.error, streamID, zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishDispatchError);
            return false;
        }
        this.streamCenter.startPublishingStream(streamID, streamUrls, this.preferPublishSourceType);
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_DO_PUBLISH_STREAM + " call success");
        return true;
    };
    PublishModule.prototype.stopPublishingStream = function (streamID) {
        var _this = this;
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_STOP_PUBLISHING_STREAM +
            " call " +
            streamID);
        var reportSeq = zego_entity_1.getReportSeq();
        this.dataReport.newReport(reportSeq, zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStop.event);
        this.dataReport.addMsgInfo(reportSeq, {
            stream_id: streamID
        });
        var innerReject = function (err, externMsg) {
            _this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_STOP_PUBLISHING_STREAM +
                " " +
                (externMsg || err.message));
            _this.dataReport.uploadReport(reportSeq, undefined, err, externMsg);
            delete _this.stateCenter.reportSeqList.startPublish[streamID];
        };
        if (!client_util_1.ClientUtil.isParamEmpty(streamID)) {
            innerReject(zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishStreamIDNullError);
            return false;
        }
        if (!client_util_1.ClientUtil.isTypeString(streamID)) {
            innerReject(zego_log_event_1.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishParamError);
            return false;
        }
        this.streamCenter.stopPublishingStream(streamID);
        var player = this.streamCenter.playerList[streamID];
        if (player && player.state !== zego_entity_1.ENUM_PLAYER_STATE.stop) {
            this.streamHandler.onPublishStateUpdate(zego_entity_1.ENUM_PUBLISH_STATE_UPDATE.error, streamID, { code: 0, message: "" });
        }
        if (this.stateCenter.publishStreamList[streamID]) {
            if (this.stateCenter.publishStreamList[streamID].state >=
                zego_entity_1.ENUM_PUBLISH_STREAM_STATE.update_info) {
                this.streamHandler.updateStreamInfo(streamID, zego_entity_1.ENUM_STREAM_SUB_CMD.liveEnd);
                //上报流删除时需将statecenter.streamList中对应的流删除
                for (var i = 0; i < this.stateCenter.streamList.length; i++) {
                    if (this.stateCenter.streamList[i].stream_id == streamID) {
                        this.stateCenter.streamList.splice(i--, 1);
                        break;
                    }
                }
            }
            delete this.stateCenter.publishStreamList[streamID];
        }
        if (this.stateCenter.streamUrlMap[streamID]) {
            delete this.stateCenter.streamUrlMap[streamID];
        }
        this.dataReport.uploadReport(reportSeq);
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_STOP_PUBLISHING_STREAM +
            " call success");
        return true;
    };
    return PublishModule;
}());
exports.PublishModule = PublishModule;


/***/ }),

/***/ "./sdk/src/wechatMini/modules/zego.play.wechat.ts":
/*!********************************************************!*\
  !*** ./sdk/src/wechatMini/modules/zego.play.wechat.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ZegoPlayWechat = void 0;
var action_1 = __webpack_require__(/*! ../../common/action */ "./sdk/src/common/action.ts");
var client_util_1 = __webpack_require__(/*! ../../util/client-util */ "./sdk/src/util/client-util.ts");
var zego_entity_1 = __webpack_require__(/*! ../../common/zego.entity */ "./sdk/src/common/zego.entity.ts");
var zego_log_event_1 = __webpack_require__(/*! ../../common/zego.log.event */ "./sdk/src/common/zego.log.event.ts");
/**
 ZegoPlayer
 */
var ZegoPlayWechat = /** @class */ (function () {
    function ZegoPlayWechat(logger, streamId, streamcenter, dataReport, stateCenter) {
        this.urls = [];
        this.tryUrls = [];
        this.playUrlIndex = 0;
        this.playUrlTryCount = 0;
        this.currentUrl = null;
        this.retryIndex = 0;
        this.reconnectCount = 0;
        this.state = zego_entity_1.ENUM_PLAYER_STATE.stop;
        this.reconnectLimit = 0;
        this.sourceType = 0;
        this.playerType = 0;
        this.playerSeq = 0;
        this.playerReportSeq = 0;
        this.publishQualitySeq = 0;
        this.publishQualityCount = 0;
        this.publishQulaityMaxCount = 30;
        this.playQualitySeq = 0;
        this.playQualityCount = 0;
        this.playQulaityMaxCount = 30;
        this.everSuccess = false;
        this.pushBegin = false;
        this.playBegin = false;
        this.playerLogUploadTime = new Date().getTime();
        this.seq = -1;
        this.streamId = streamId;
        //url list
        this.logger = logger;
        this.streamCenter = streamcenter;
        //this.stateTimeStamp = 0;
        this.dataReport = dataReport;
        this.stateCenter = stateCenter;
    }
    /*
     *    "zp.rpl.0": "ZegoPlayer.resetPlayer",
     */
    ZegoPlayWechat.prototype.resetPlayer = function () {
        this.state = zego_entity_1.ENUM_PLAYER_STATE.stop;
        //this.stateTimeStamp = Date.now();
    };
    ZegoPlayWechat.prototype.newPlayer = function () {
        this.resetPlayer();
        var url = this.getCurrentPlayerUrl();
        var urlWithParams = url;
        if (this.params.length != 0) {
            urlWithParams = url + "?" + this.params;
        }
        var timestamp = new Date().getTime();
        urlWithParams =
            urlWithParams.indexOf("?") > -1
                ? urlWithParams +
                    "&zgseq=" +
                    timestamp +
                    "&zgdid=" +
                    this.stateCenter.sessionid
                : urlWithParams +
                    "?zgseq=" +
                    timestamp +
                    "&zgdid=" +
                    this.stateCenter.sessionid;
        if (url !== this.currentUrl) {
            this.currentUrl = url;
            this.streamCenter.onStreamUrlUpdate(this.streamId, urlWithParams, this.playerType);
        }
        else {
            this.streamCenter.onPlayerRetry(this.streamId, this.playerType);
        }
        if (this.everSuccess == false) {
            if (this.playerType == 0) {
                this.dataReport.eventStart(this.playerReportSeq, "PlayBegin");
                this.dataReport.addEventInfo(this.playerReportSeq, "PlayBegin", "url", urlWithParams);
                this.tryUrls.push(urlWithParams);
            }
            else {
                this.dataReport.eventStart(this.playerReportSeq, "PublishBegin");
                this.dataReport.addEventInfo(this.playerReportSeq, "PublishBegin", "url", urlWithParams);
                this.tryUrls.push(urlWithParams);
            }
        }
        else {
            if (this.playerType == 0) {
                this.dataReport.addEventInfo(this.playerSeq, "PlayRetry", "url", urlWithParams);
            }
            else {
                this.dataReport.addEventInfo(this.playerSeq, "PublishRetry", "url", urlWithParams);
            }
        }
        this.state = zego_entity_1.ENUM_PLAYER_STATE.start;
        return true;
    };
    ZegoPlayWechat.prototype.stopPlayer = function () {
        if (this.playerType == 0) {
            this.dataReport.eventEndWithMsg(this.playerReportSeq, "PlayStat", {
                quality: this.playerInfo
            });
        }
        else {
            this.dataReport.addEventInfo(this.playerReportSeq, "PublishStat", "quality", this.playerInfo);
            this.dataReport.eventEndWithMsg(this.playerReportSeq, "PublishStat", {
                quality: this.playerInfo
            });
        }
    };
    ZegoPlayWechat.prototype.tryStartPlayer = function (errorCode) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYWECHAT_TRY_START_PLAYER + " call");
        //当前播放器的备用播放地址可能有多条，可尝试多次
        while (this.playUrlTryCount < this.urls.length) {
            if (++this.reconnectCount > this.reconnectLimit) {
                this.playUrlTryCount++;
                this.playUrlIndex = (this.playUrlIndex + 1) % this.urls.length;
                this.reconnectCount = 0;
                continue;
            }
            this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYWECHAT_TRY_START_PLAYER +
                " index: " +
                this.playUrlIndex +
                ", url: " +
                this.getCurrentPlayerUrl());
            if (this.newPlayer()) {
                break;
            }
        }
        if (this.playUrlTryCount >= this.urls.length) {
            this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYWECHAT_TRY_START_PLAYER +
                " stream: " +
                this.streamId);
            this.resetPlayer();
            var event_name = "";
            if (this.playerType == 0) {
                event_name = "PlayEnd";
            }
            else if (this.playerType == 1) {
                event_name = "PublishEnd";
                this.reportQualityStatics();
            }
            var info = {
                error: errorCode,
                reason: "no url to retry"
            };
            this.dataReport.addEvent(this.playerSeq, event_name, info);
            this.streamCenter.onPlayerStop(this.streamId, this.playerType, errorCode);
        }
    };
    ZegoPlayWechat.prototype.getPlayerUrl = function () {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYWECHAT_GET_PLAY_URL + " call " + this.streamId);
        var url = this.urls[++this.retryIndex % this.urls.length];
        var urlWithParams = url;
        if (this.params.length != 0) {
            urlWithParams = url + "?" + this.params;
        }
        var zgseq = new Date().getTime();
        urlWithParams =
            urlWithParams.indexOf("?") > -1
                ? urlWithParams +
                    "&zgseq=" +
                    zgseq +
                    "&zgdid=" +
                    this.stateCenter.sessionid
                : urlWithParams +
                    "?zgseq=" +
                    zgseq +
                    "&zgdid=" +
                    this.stateCenter.sessionid;
        this.tryUrls.push(urlWithParams);
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYWECHAT_GET_PLAY_URL +
            " call streamId: " +
            this.streamId +
            " url: " +
            urlWithParams);
        return urlWithParams;
    };
    ZegoPlayWechat.prototype.shouldRetryPlay = function (event) {
        var code = event.detail.code;
        if (code == 3001 || code == 3002 || code == 3003 || code == 3005) {
            return true;
        }
        return false;
    };
    ZegoPlayWechat.prototype.isPlayFailed = function (event) {
        var code = event.detail.code;
        if (code == -2301 || code == 2101 || code == 2102) {
            return true;
        }
        return false;
    };
    ZegoPlayWechat.prototype.shouldRetryPublish = function (event) {
        var code = event.detail.code;
        if (code == 3001 ||
            code == 3002 ||
            code == 3003 ||
            code == 3004 ||
            code == 3005) {
            return true;
        }
        return false;
    };
    ZegoPlayWechat.prototype.isPublishFailed = function (event) {
        var code = event.detail.code;
        if (code == -1301 ||
            code == -1302 ||
            code == -1303 ||
            code == -1304 ||
            code == -1305 ||
            code == -1306 ||
            code == -1307 ||
            code == -1308 ||
            code == -1309 ||
            code == -1310 ||
            code == -1311) {
            return true;
        }
        return false;
    };
    ZegoPlayWechat.prototype.updateEvent = function (event) {
        if (this.playerType == 0) {
            //拉流
            if (!this.playBegin) {
                this.playBegin = true;
                client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList) &&
                    client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList)(zego_entity_1.REPORT_ACTION.eventStart, "play_begin");
            }
            if (event.detail.code == 2004) {
                if (this.everSuccess) {
                    this.dataReport.eventEnd(this.playerReportSeq, "PlayRetry");
                }
                else {
                    this.everSuccess = true;
                    this.dataReport.eventStart(this.playerReportSeq, "PlayStat");
                    if (client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList)) {
                        client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList)(zego_entity_1.REPORT_ACTION.addEventMsg, "play_begin", "try_urls", this.tryUrls);
                        client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList)(zego_entity_1.REPORT_ACTION.eventEnd, "play_begin");
                        client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList)(zego_entity_1.REPORT_ACTION.eventStart, "play_state");
                    }
                    // this.playBegin = false;
                }
                this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYWECHAT_UPDATE_EVENT +
                    " play suc: " +
                    this.streamId);
                this.state = zego_entity_1.ENUM_PLAYER_STATE.playing;
                this.streamCenter.onPlayerStart(this.streamId, this.playerType);
            }
            else if (event.detail.code == 2009) {
                //video size changed
            }
            else if (this.shouldRetryPlay(event)) {
                //try to restart palyer
                // this.dataReport.eventStart(this.playerSeq, 'PlayRetry');
                // this.dataReport.addEventInfo(this.playerSeq, 'PlayRetry', 'error_code', event.detail.code);
                // this.tryStartPlayer(event.detail.code);
            }
            else if (this.isPlayFailed(event)) {
                this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYWECHAT_UPDATE_EVENT +
                    " play error: " +
                    this.streamId);
                this.resetPlayer();
                var palyFailedInfo = {
                    errorCode: event.detail.code
                };
                // this.dataReport.addEvent(this.playerSeq, 'PlayError', palyFailedInfo);
                if (client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList)) {
                    client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList)(zego_entity_1.REPORT_ACTION.addEventMsg, "play_begin", "error_code", event.detail.code);
                    client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList)(zego_entity_1.REPORT_ACTION.addEventMsg, "play_begin", "try_urls", this.tryUrls);
                    client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList)(zego_entity_1.REPORT_ACTION.eventEnd, "play_begin");
                    client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList)(zego_entity_1.REPORT_ACTION.addMsgInfo, undefined, {
                    // error: errorList.kPlayRetryFail.code,
                    // message: errorList.kPlayRetryFail.message,
                    });
                }
                this.playBegin = false;
                this.streamCenter.onPlayerStop(this.streamId, this.playerType, {
                    code: event.detail.code,
                    msg: "play fail"
                });
            }
            if (!this.everSuccess) {
                this.dataReport.eventEnd(this.playerReportSeq, "PlayBegin");
            }
        }
        else if (this.playerType == 1) {
            //推流
            if (!this.pushBegin) {
                this.pushBegin = true;
                client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList) &&
                    client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList)(zego_entity_1.REPORT_ACTION.eventStart, "push_begin");
            }
            if (event.detail.code == 1002) {
                if (this.everSuccess) {
                    this.dataReport.eventEnd(this.playerReportSeq, "PublishRetry");
                }
                else {
                    this.everSuccess = true;
                    this.dataReport.eventStart(this.playerReportSeq, "PublishStat");
                    if (client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList)) {
                        client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList)(zego_entity_1.REPORT_ACTION.addEventMsg, "push_begin", "try_urls", this.tryUrls);
                        client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList)(zego_entity_1.REPORT_ACTION.eventEnd, "push_begin");
                        if (this.stateCenter.publishStreamList[this.streamId] &&
                            this.stateCenter.publishStreamList[this.streamId].state ==
                                zego_entity_1.ENUM_PUBLISH_STREAM_STATE.tryPublish) {
                            client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList)(zego_entity_1.REPORT_ACTION.eventStart, "publish_state");
                        }
                    }
                    // this.pushBegin = false;
                }
                this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYWECHAT_UPDATE_EVENT +
                    " play suc: " +
                    this.streamId);
                this.state = zego_entity_1.ENUM_PLAYER_STATE.playing;
                this.streamCenter.onPlayerStart(this.streamId, this.playerType);
            }
            else if (this.shouldRetryPublish(event)) {
                //try to restart palyer
                // this.dataReport.eventStart(this.playerSeq, 'PublishRetry');
                // this.dataReport.addEventInfo(this.playerSeq, 'PublishRetry', 'error_code', event.detail.code);
                //小程序内部retry
                // this.tryStartPlayer(event.detail.code);
            }
            else if (this.isPublishFailed(event)) {
                this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.PLAYWECHAT_UPDATE_EVENT +
                    " publish error: " +
                    this.streamId);
                this.resetPlayer();
                // const publishFailedInfo = {
                //     errorCode: event.detail.code,
                // };
                // this.dataReport.addEvent(this.playerSeq, 'PublishError', publishFailedInfo);
                if (client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList)) {
                    client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList)(zego_entity_1.REPORT_ACTION.addEventMsg, "push_begin", "error_code", event.detail.code);
                    client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList)(zego_entity_1.REPORT_ACTION.addEventMsg, "push_begin", "try_urls", this.tryUrls);
                    client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList)(zego_entity_1.REPORT_ACTION.eventEnd, "push_begin");
                    client_util_1.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList)(zego_entity_1.REPORT_ACTION.addMsgInfo, undefined, {
                    // error: errorList.kPublishRetryFail.code,
                    // message: errorList.kPublishRetryFail.message,
                    });
                }
                this.pushBegin = false;
                // this.reportQualityStatics();
                this.streamCenter.onPlayerStop(this.streamId, this.playerType, {
                    code: event.detail.code,
                    msg: "publish fail"
                });
            }
            if (!this.everSuccess) {
                this.dataReport.eventEnd(this.playerReportSeq, "PublishBegin");
            }
        }
    };
    ZegoPlayWechat.prototype.updatePlayerNetStatus = function (event) {
        var streamQuality = {
            videoBitrate: event.detail.info.videoBitrate,
            audioBitrate: event.detail.info.audioBitrate,
            videoFPS: event.detail.info.videoFPS,
            videoHeight: event.detail.info.videoHeight,
            videoWidth: event.detail.info.videoWidth,
            videoGOP: event.detail.info.videoGOP,
            netSpeed: event.detail.info.netSpeed,
            netJitter: event.detail.info.netJitter
        };
        this.playerInfo = streamQuality;
        if (this.playerType == 1) {
            var qualityInfo = {
                videoBitrate: event.detail.info.videoBitrate,
                audioBitrate: event.detail.info.audioBitrate,
                videoFPS: event.detail.info.videoFPS,
                videoGOP: event.detail.info.videoGOP,
                netSpeed: event.detail.info.netSpeed,
                netJitter: event.detail.info.netJitter,
                videoWidth: event.detail.info.videoWidth,
                videoHeight: event.detail.info.videoHeight
            };
            if (this.publishQualitySeq == 0) {
                // this.publishQualitySeq = ++this.streamCenter.eventSeq;
                this.publishQualitySeq = zego_entity_1.getReportSeq();
                this.dataReport.newReport(this.publishQualitySeq);
                // this.dataReport.addMsgExt(this.publishQualitySeq, {
                //     stream: this.streamId,
                // });
                this.dataReport.addMsgInfo(this.publishQualitySeq, {
                    stream_id: this.streamId
                });
            }
            this.dataReport.addEvent(this.publishQualitySeq, "PublishQuality", qualityInfo);
            this.publishQualityCount += 1;
            if (this.publishQualityCount >= this.publishQulaityMaxCount) {
                var _now = new Date().getTime();
                if (_now - this.playerLogUploadTime > 45000) {
                    this.reportQualityStatics();
                    this.playerLogUploadTime = new Date().getTime();
                }
            }
        }
        else if (this.playerType == 0) {
            var qualityInfo = {
                videoBitrate: event.detail.info.videoBitrate,
                audioBitrate: event.detail.info.audioBitrate,
                videoFPS: event.detail.info.videoFPS,
                videoGOP: event.detail.info.videoGOP,
                netSpeed: event.detail.info.netSpeed,
                netJitter: event.detail.info.netJitter,
                videoWidth: event.detail.info.videoWidth,
                videoHeight: event.detail.info.videoHeight
            };
            if (this.playQualitySeq == 0) {
                this.playQualitySeq = zego_entity_1.getReportSeq();
                this.dataReport.newReport(this.playQualitySeq);
                this.dataReport.addMsgInfo(this.playQualitySeq, {
                    stream_id: this.streamId
                });
            }
            this.dataReport.addEvent(this.playQualitySeq, "PlayQuality", qualityInfo);
            this.playQualityCount += 1;
            if (this.playQualityCount >= this.playQulaityMaxCount) {
                var _now = new Date().getTime();
                if (_now - this.playerLogUploadTime > 45000) {
                    this.reportPlayQualityStatics();
                    this.playerLogUploadTime = new Date().getTime();
                }
            }
        }
        this.streamCenter.onPlayerQuality(this.streamId, streamQuality, this.playerType);
    };
    ZegoPlayWechat.prototype.getCurrentPlayerUrl = function () {
        return this.urls[this.playUrlIndex % this.urls.length];
    };
    ZegoPlayWechat.prototype.reportQualityStatics = function () {
        //report
        this.dataReport.addMsgInfo(this.publishQualitySeq, {
            itemtype: "WXPublishStateUpdate"
        });
        this.dataReport.uploadReport(this.publishQualitySeq, zego_log_event_1.ZegoWechatLogEvent.kZegoEventPublishStat);
        this.publishQualityCount = 0;
        this.publishQualitySeq = 0;
    };
    ZegoPlayWechat.prototype.reportPlayQualityStatics = function () {
        //report
        this.dataReport.addMsgInfo(this.playQualitySeq, {
            itemtype: "WXPlayStateUpdate"
        });
        this.dataReport.uploadReport(this.playQualitySeq, zego_log_event_1.ZegoWechatLogEvent.kZegoEventPlayStat);
        this.playQualityCount = 0;
        this.playQualitySeq = 0;
    };
    return ZegoPlayWechat;
}());
exports.ZegoPlayWechat = ZegoPlayWechat;


/***/ }),

/***/ "./sdk/src/wechatMini/modules/zego.streamcenter.wechat.ts":
/*!****************************************************************!*\
  !*** ./sdk/src/wechatMini/modules/zego.streamcenter.wechat.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZegoStreamCenterWechat = void 0;
var action_1 = __webpack_require__(/*! ../../common/action */ "./sdk/src/common/action.ts");
var streamCenter_1 = __webpack_require__(/*! ../../common/streamCenter */ "./sdk/src/common/streamCenter.ts");
var zego_entity_1 = __webpack_require__(/*! ../../common/zego.entity */ "./sdk/src/common/zego.entity.ts");
var zego_log_event_1 = __webpack_require__(/*! ../../common/zego.log.event */ "./sdk/src/common/zego.log.event.ts");
var client_util_1 = __webpack_require__(/*! ../../util/client-util */ "./sdk/src/util/client-util.ts");
var zego_play_wechat_1 = __webpack_require__(/*! ./zego.play.wechat */ "./sdk/src/wechatMini/modules/zego.play.wechat.ts");
var ENUM_PLAY_STATE_UPDATE = {
    start: 0,
    stop: 1,
    retry: 2
};
var ENUM_PLAYER_TYPE = {
    play: 0,
    publish: 1
};
var ZegoStreamCenterWechat = /** @class */ (function (_super) {
    __extends(ZegoStreamCenterWechat, _super);
    function ZegoStreamCenterWechat(log, stateCenter, dataReport) {
        var _this = _super.call(this) || this;
        _this.playerList = {};
        _this.playerCount = 0;
        _this.playingList = [];
        _this.publishingList = [];
        _this.eventSeq = 0;
        _this.streamEventMap = {};
        _this.streamReportMap = {};
        _this.playerWaitingList = [];
        _this.playerStatistics = {};
        _this.publishSuccessCallBackList = {};
        _this.publishErrorCallBackList = {};
        _this.playSuccessCallBackList = {};
        _this.playErrorCallBackList = {};
        _this.logger = log;
        _this.dataReport = dataReport;
        _this.stateCenter = stateCenter;
        return _this;
    }
    //更新拉流信息
    //ZegoExpressEngine调用StartPlayingStream/StopPlayingStream时更新状态
    ZegoStreamCenterWechat.prototype.updatePlayingState = function (streamId, streamParams, start) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_UPDATE_PLAYING_STATE +
            " " +
            streamId);
        if (streamId == undefined) {
            return false;
        }
        if (start) {
            var play = this.playerList[streamId];
            var reportSeq = this.stateCenter.reportSeqList.startPlay[streamId];
            this.dataReport.eventStart(reportSeq, "updatePlayingState");
            if (play) {
                this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_UPDATE_PLAYING_STATE +
                    " player already exist");
                this.dataReport.eventEndWithMsgInfo(reportSeq, "updatePlayingState", {
                    message: "player already exist"
                });
                this.dataReport.uploadReport(reportSeq, undefined);
                delete this.stateCenter.reportSeqList.startPlay[streamId];
                return false;
            }
            this.playerList[streamId] = new zego_play_wechat_1.ZegoPlayWechat(this.logger, streamId, this, this.dataReport, this.stateCenter);
        }
        // const play = this.playingList.find((item: any) => item.streamID === streamId);
        // if (play && start) {
        //     this.logger.error('zsc.ups.0 player already exist');
        //     return false;
        // }
        this.updateStreamState(streamId, start, streamParams, this.playingList);
        if (start) {
            this.streamEventMap[streamId] = this.stateCenter.reportSeqList.startPlay[streamId];
            //start a stream report
            this.eventSeq += 1;
            this.streamReportMap[streamId] = this.eventSeq;
            this.dataReport.newReport(this.eventSeq);
            //GetPublishInfo begin
            this.dataReport.eventStart(this.eventSeq, "GotPlayInfo");
        }
        else {
            //retport
            this.reportPlayEvent(streamId);
        }
        return true;
    };
    //更新推流信息
    //ZegoExpressEngine调用StartPublishingStream/StopPublishingStream时更新状态
    ZegoStreamCenterWechat.prototype.updatePublishingState = function (streamId, streamParams, start) {
        if (streamParams === void 0) { streamParams = ""; }
        if (start === void 0) { start = false; }
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_UPDATE_PUBLISHING_STATE +
            " " +
            streamId);
        if (streamId == undefined) {
            return false;
        }
        if (start) {
            var play = this.playerList[streamId];
            var reportSeq = this.stateCenter.reportSeqList.startPublish[streamId];
            this.dataReport.eventStart(reportSeq, "updatePublishingState");
            if (play) {
                this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_UPDATE_PUBLISHING_STATE +
                    " player already exist");
                this.dataReport.eventEndWithMsgInfo(reportSeq, "updatePublishingState", {
                    message: "player already exist"
                });
                this.dataReport.uploadReport(reportSeq, undefined);
                delete this.stateCenter.reportSeqList.startPublish[streamId];
                return false;
            }
            this.playerList[streamId] = new zego_play_wechat_1.ZegoPlayWechat(this.logger, streamId, this, this.dataReport, this.stateCenter);
        }
        // const publish = this.publishingList.find((item: any) => item.streamID === streamId);
        // if (publish && start) {
        //     this.logger.error('zsc.ups.1 publisher already exist');
        //     return false;
        // }
        this.updateStreamState(streamId, start, streamParams, this.publishingList);
        if (start) {
            this.streamEventMap[streamId] = this.stateCenter.reportSeqList.startPublish[streamId];
            //start a stream report
            this.eventSeq += 1;
            this.streamReportMap[streamId] = this.eventSeq;
            this.dataReport.newReport(this.eventSeq);
            //GetPublishInfo begin
            this.dataReport.eventStart(this.eventSeq, "GotPublishInfo");
        }
        else {
            this.reportPublishEvent(streamId);
        }
        return true;
    };
    ZegoStreamCenterWechat.prototype.updateStreamState = function (streamID, start, streamParams, streamList) {
        if (!streamID) {
            return;
        }
        if (!streamParams || typeof streamParams != "string") {
            streamParams = "";
        }
        if (start == true) {
            streamList.push({
                streamID: streamID,
                params: streamParams
            });
        }
        else {
            for (var i = 0; i < streamList.length; i++) {
                if (streamList[i].streamID == streamID) {
                    streamList.splice(i--, 1);
                    break;
                }
            }
        }
    };
    //当前是否在拉流
    ZegoStreamCenterWechat.prototype.isPlaying = function () {
        if (this.playingList.length != 0) {
            return true;
        }
        return false;
    };
    //当前是否正在推流
    ZegoStreamCenterWechat.prototype.isPublishing = function () {
        if (this.publishingList.length != 0) {
            return true;
        }
        return false;
    };
    /*
     *    "zpc.sps.0": "ZegoStreamCenter.startPlayingStream",
     */
    //拉流开始(从本地或server获取到推拉流URL)
    ZegoStreamCenterWechat.prototype.startPlayingStream = function (streamId, streamUrlList, dispatchType) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_START_PLAYING_STREAM +
            " call " +
            streamId);
        //获取到URL信息
        var seq = this.streamEventMap[streamId];
        if (seq) {
            var type = "";
            if (dispatchType == 0) {
                type = "cdn";
            }
            else if (dispatchType == 1) {
                type = "ultra_src";
            }
            client_util_1.ClientUtil.actionLogReportCallback("kZegoTaskPlayStart" + streamId, this.stateCenter.reportList, zego_entity_1.REPORT_ACTION.addEventMsg, "get_play_url", ["type", type]);
            client_util_1.ClientUtil.actionLogReportCallback("kZegoTaskPlayStart" + streamId, this.stateCenter.reportList, zego_entity_1.REPORT_ACTION.addEventMsg, "get_play_url", ["urls", streamUrlList]);
        }
        var streamReportSeq = this.streamReportMap[streamId];
        if (streamReportSeq) {
            this.dataReport.eventEndWithMsg(streamReportSeq, "GotPlayInfo", {
                type: dispatchType == 0 ? "cdn" : "ultra_src",
                urls: streamUrlList
            });
        }
        return this.startPlayer(streamId, streamUrlList, dispatchType, ENUM_PLAYER_TYPE.play);
    };
    ZegoStreamCenterWechat.prototype.startPlayer = function (streamID, streamUrlList, dispatchType, playerType) {
        var player = this.playerList[streamID];
        if (!player) {
            this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_START_PLAYER +
                " player don't exist");
            return false;
        }
        //检查是否需要开始推拉流
        var streamList = [];
        if (playerType == ENUM_PLAYER_TYPE.play) {
            streamList = this.playingList;
        }
        else if (playerType == ENUM_PLAYER_TYPE.publish) {
            streamList = this.publishingList;
        }
        var found = false;
        var params = "";
        for (var i = 0; i < streamList.length; i++) {
            if (streamList[i].streamID == streamID) {
                found = true;
                params = streamList[i].params;
                break;
            }
        }
        if (!found) {
            this.logger.warn(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_START_PLAYER +
                " should not start");
            return false;
        }
        // 开始拉流，调用canvas，并存储起来 存进  this.playerList中
        player.urls = streamUrlList;
        player.params = params;
        player.reconnectLimit = this.getReconnectLimit(dispatchType);
        player.dispatchType = dispatchType;
        player.playerType = playerType;
        player.playerSeq = this.streamEventMap[streamID];
        player.playerReportSeq = this.streamReportMap[streamID];
        // 拉流失败则返回不做操作
        if (!player) {
            this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_START_PLAYER +
                " new player failed");
            return false;
        }
        // 拉流成功，播放器数量加1
        ++this.playerCount;
        var result = player.tryStartPlayer(0);
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_START_PLAYER +
            " call result: " +
            result);
        return true;
    };
    /**
     * "zpc.gnu"
     * @param streamID
     */
    ZegoStreamCenterWechat.prototype.getNextUrl = function (streamID) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_GET_NEXT_URL +
            " call " +
            streamID);
        var player = this.playerList[streamID];
        if (!player) {
            this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_GET_NEXT_URL +
                " player don't exist");
            return "";
        }
        var isPublish;
        if (this.publishingList.find(function (item) { return item.streamID === streamID; })) {
            isPublish = true;
            this.onPublishStateUpdate(zego_entity_1.ENUM_PUBLISH_STATE_UPDATE.retry, streamID, {
                code: 0,
                message: ""
            });
        }
        else {
            isPublish = false;
            this.onPlayStateUpdate(ENUM_PLAY_STATE_UPDATE.retry, streamID, {
                code: 0,
                message: ""
            });
        }
        var _url = player.getPlayerUrl();
        if (isPublish) {
            if (!this.stateCenter.reportSeqList.startPublish[streamID]) {
                var reportSeq = zego_entity_1.getReportSeq();
                this.stateCenter.reportSeqList.startPublish[streamID] = reportSeq;
                this.dataReport.newReport(reportSeq, zego_log_event_1.ZegoWechatLogEvent.kZegoTaskRePublish);
                player.pushBegin = false;
                client_util_1.ClientUtil.logReportCallback("kZegoTaskPublishStart" + streamID, this.dataReport, reportSeq, this.stateCenter.reportList);
                // ClientUtil.registerCallback(
                //     'kZegoTaskPublishStart' + streamID,
                //     {
                //         success: (reportName: string, eventName: string, ...args: any) => {
                //             ClientUtil.dataReportEvent(this.dataReport, reportSeq, reportName, eventName, args);
                //         },
                //     },
                //     this.stateCenter.reportList,
                // );
            }
        }
        else {
            if (!this.stateCenter.reportSeqList.startPlay[streamID]) {
                var reportSeq = zego_entity_1.getReportSeq();
                this.stateCenter.reportSeqList.startPlay[streamID] = reportSeq;
                this.dataReport.newReport(reportSeq, zego_log_event_1.ZegoWechatLogEvent.kZegoTaskRePlay);
                player.playBegin = false;
                client_util_1.ClientUtil.logReportCallback("kZegoTaskPlayStart" + streamID, this.dataReport, reportSeq, this.stateCenter.reportList);
                // ClientUtil.registerCallback(
                //     'kZegoTaskPlayStart' + streamID,
                //     {
                //         success: (reportName: string, eventName: string, ...args: any) => {
                //             ClientUtil.dataReportEvent(this.dataReport, reportSeq, reportName, eventName, args);
                //         },
                //     },
                //     this.stateCenter.reportList,
                // );
            }
        }
        return _url;
    };
    /*
     *    "zpc.sps.1.0": "ZegoStreamCenter.stopPlayingStream",//拉流结束
     */
    ZegoStreamCenterWechat.prototype.stopPlayingStream = function (streamId) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_STOP_PLAYING_STREAM +
            " call " +
            streamId);
        if (streamId == undefined) {
            return;
        }
        this.stopPlayer(streamId);
        this.updatePlayingState(streamId);
    };
    /*
     *    "zpc.sp.1.0": "ZegoStreamCenter.stopPlayer",
     */
    ZegoStreamCenterWechat.prototype.stopPlayer = function (streamId) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_STOP_PLAYER +
            " call " +
            streamId);
        var player = this.playerList[streamId];
        if (player) {
            player.stopPlayer();
            delete this.playerList[streamId];
            --this.playerCount;
            //this.onPlayStateUpdate(ENUM_PLAY_STATE_UPDATE.stop, player.streamId);
        }
        else {
            this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_STOP_PLAYER +
                " play not exist " +
                streamId);
        }
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_STOP_PLAYER + " call success");
    };
    ZegoStreamCenterWechat.prototype.startPublishingStream = function (streamID, streamUrlList, dispatchType) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_START_PUBLISHING_STREAM +
            " call " +
            streamID);
        var seq = this.streamEventMap[streamID];
        if (seq) {
            var type = "";
            if (dispatchType == 0) {
                type = "cdn";
            }
            else if (dispatchType == 1) {
                type = "ultra_src";
            }
            client_util_1.ClientUtil.actionLogReportCallback("kZegoTaskPublishStart" + streamID, this.stateCenter.reportList, zego_entity_1.REPORT_ACTION.addEventMsg, "type", type);
            client_util_1.ClientUtil.actionLogReportCallback("kZegoTaskPublishStart" + streamID, this.stateCenter.reportList, zego_entity_1.REPORT_ACTION.addEventMsg, "urls", streamUrlList);
        }
        var streamReportSeq = this.streamReportMap[streamID];
        if (streamReportSeq) {
            this.dataReport.eventEndWithMsg(streamReportSeq, "GotPublishInfo", {
                type: dispatchType == 0 ? "cdn" : "ultra_src",
                urls: streamUrlList
            });
        }
        return this.startPlayer(streamID, streamUrlList, dispatchType, ENUM_PLAYER_TYPE.publish);
    };
    /*
     *    "zpc.sps.1.1": "ZegoStreamCenter.stopPublishingStream",//推流结束
     */
    ZegoStreamCenterWechat.prototype.stopPublishingStream = function (streamId) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_STOP_PUBLISHING_STREAM +
            " call " +
            streamId);
        if (streamId == undefined) {
            return;
        }
        this.stopPlayer(streamId);
        this.updatePublishingState(streamId, "", false);
    };
    ZegoStreamCenterWechat.prototype.updatePlayerState = function (streamId, event) {
        var player = this.playerList[streamId];
        if (player) {
            player.updateEvent(event);
        }
        else {
            this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_UPDATE_PLAYER_STATE +
                " no player " +
                streamId);
        }
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_UPDATE_PLAYER_STATE +
            " updatePlayerEvent success");
    };
    ZegoStreamCenterWechat.prototype.updatePlayerNetStatus = function (streamId, event) {
        var player = this.playerList[streamId];
        if (player) {
            player.updatePlayerNetStatus(event);
        }
        else {
            this.logger.error(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_UPDATE_PLAYER_NET_STATUS +
                " no player " +
                streamId);
        }
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_UPDATE_PLAYER_NET_STATUS +
            " updatePlayerNetStatus success");
    };
    /*
     *    "zpc.r.0": "ZegoStreamCenter.reset",
     */
    ZegoStreamCenterWechat.prototype.reset = function () {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_RESET + " call");
        for (var i = 0; i < this.playingList.length; i++) {
            this.stopPlayingStream(this.playingList[i].streamID);
        }
        for (var j = 0; j < this.publishingList.length; j++) {
            this.stopPublishingStream(this.publishingList[j].streamID);
        }
        this.playerCount = 0;
        this.playerList = {};
        this.playerWaitingList = [];
        this.playerStatistics = {};
        this.streamEventMap = {};
        this.streamReportMap = {};
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_RESET + " call success");
    };
    ZegoStreamCenterWechat.prototype.reportPublishEvent = function (streamId, error) {
        if (!this.streamReportMap[streamId]) {
            return;
        }
        var seq = this.streamReportMap[streamId];
        //report
        this.dataReport.addMsgExt(seq, {
            stream: streamId,
            error: error
        });
        this.dataReport.addMsgInfo(seq, {
            itemtype: "WXPublishStream"
        });
        this.dataReport.uploadReport(seq, "WXPublishStream");
        delete this.streamReportMap[streamId];
    };
    ZegoStreamCenterWechat.prototype.reportPlayEvent = function (streamId, error) {
        if (!this.streamReportMap[streamId]) {
            return;
        }
        var seq = this.streamReportMap[streamId];
        this.dataReport.addMsgExt(seq, {
            stream: streamId,
            error: error
        });
        this.dataReport.addMsgInfo(seq, {
            itemtype: "WXPlayStream"
        });
        this.dataReport.uploadReport(seq, "WXPlayStream");
        delete this.streamReportMap[streamId];
    };
    ZegoStreamCenterWechat.prototype.onPlayStateUpdate = function (type, streamId, error) { };
    ZegoStreamCenterWechat.prototype.onPlayQualityUpdate = function (streamID, streamQuality) { };
    ZegoStreamCenterWechat.prototype.onPublishStateUpdate = function (type, streamId, error) { };
    ZegoStreamCenterWechat.prototype.onPublishQualityUpdate = function (streamId, streamQuality) { };
    ZegoStreamCenterWechat.prototype.onPublisherStreamUrlUpdate = function (streamId, url) { };
    ZegoStreamCenterWechat.prototype.onPublisherStreamUrlFail = function (streamID, error) { };
    ZegoStreamCenterWechat.prototype.onPlayerStreamUrlUpdate = function (streamId, url) { };
    ZegoStreamCenterWechat.prototype.getReconnectLimit = function (sourceType) {
        //switch(sourceType) in future
        return 1;
    };
    /*
     *    "ops.0": "ZegoStreamCenter.onPlayStart",
     */
    ZegoStreamCenterWechat.prototype.onPlayerStart = function (streamId, playerType) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_ON_PLAY_START +
            " call " +
            streamId);
        //callback
        if (playerType == ENUM_PLAYER_TYPE.play)
            this.onPlayStateUpdate(ENUM_PLAY_STATE_UPDATE.start, streamId, {
                code: 0,
                message: ""
            });
        else if (playerType == ENUM_PLAYER_TYPE.publish)
            this.onPublishStateUpdate(ENUM_PLAY_STATE_UPDATE.start, streamId, {
                code: 0,
                message: ""
            });
    };
    /*
     *    "ops.1": "ZegoStreamCenter.onPlayStop",
     */
    ZegoStreamCenterWechat.prototype.onPlayerStop = function (streamId, playerType, error) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_ON_PLAY_STOP +
            " call " +
            streamId);
        if (playerType == ENUM_PLAYER_TYPE.play) {
            // this.stopPlayingStream(streamId);
            //callback
            this.reportPlayEvent(streamId, error);
            this.logger.warn(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_ON_PLAY_STOP + " play error");
            this.onPlayStateUpdate(ENUM_PLAY_STATE_UPDATE.stop, streamId, error);
        }
        else if (playerType == ENUM_PLAYER_TYPE.publish) {
            // this.stopPublishingStream(streamId);
            this.reportPublishEvent(streamId, error);
            this.logger.warn(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_ON_PLAY_STOP +
                " publish error");
            this.onPublishStateUpdate(ENUM_PLAY_STATE_UPDATE.stop, streamId, error);
        }
    };
    /*
     *    "opr.0": "ZegoStreamCenter.onPlayStop",
     */
    ZegoStreamCenterWechat.prototype.onPlayerRetry = function (streamId, playerType) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_ON_PLAY_RETRY +
            " call " +
            streamId);
        if (playerType == ENUM_PLAYER_TYPE.play)
            this.onPlayStateUpdate(ENUM_PLAY_STATE_UPDATE.retry, streamId, {
                code: 0,
                message: ""
            });
        else if (playerType == ENUM_PLAYER_TYPE.publish)
            this.onPublishStateUpdate(ENUM_PLAY_STATE_UPDATE.retry, streamId, {
                code: 0,
                message: ""
            });
    };
    ZegoStreamCenterWechat.prototype.onPlayerQuality = function (streamID, streamQuality, playerType) {
        var stats = {
            video: {
                videoBitrate: streamQuality.videoBitrate,
                videoFPS: streamQuality.videoFPS,
                videoWidth: streamQuality.videoWidth,
                videoHeight: streamQuality.videoHeight
            },
            audio: {
                audioBitrate: streamQuality.audioBitrate
            }
        };
        if (playerType == ENUM_PLAYER_TYPE.play)
            this.onPlayQualityUpdate(streamID, stats);
        else if (playerType == ENUM_PLAYER_TYPE.publish)
            this.onPublishQualityUpdate(streamID, stats);
    };
    ZegoStreamCenterWechat.prototype.onStreamUrlUpdate = function (streamId, url, playerType) {
        this.logger.info(action_1.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_ON_STREAM_URL_UPDATE +
            " call " +
            streamId);
        //callback
        if (playerType == 0) {
            this.playSuccessCallBackList[streamId](streamId, url);
        }
        else {
            this.publishSuccessCallBackList[streamId](streamId, url);
        }
    };
    ZegoStreamCenterWechat.prototype.getTotalStreamId = function (streamid) {
        return streamid;
    };
    ZegoStreamCenterWechat.prototype.getRealStreamId = function (streamid) {
        return streamid;
    };
    return ZegoStreamCenterWechat;
}(streamCenter_1.ZegoStreamCenter));
exports.ZegoStreamCenterWechat = ZegoStreamCenterWechat;


/***/ })

/******/ });
});