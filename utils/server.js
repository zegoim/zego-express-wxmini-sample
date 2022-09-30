import { wxp } from "../app.js";

export async function getLoginToken(appID, userID) {
    let { tokenURL, cgi_token, tokenTestURL } = getApp ().globalData;
    console.log ('>>> get token');
    if (cgi_token) {
            try {
                    const result = await wxp.request({
                            url: tokenTestURL,
                            data: {
                                    app_id: appID,
                                    id_name: userID,
                                    cgi_token 
                            },
                            header: {
                                    'content-type': 'text/plain'
                            },
                    })
                    if (result.statusCode === 200) return result.data;
                    return;
            } catch (error) {
                    console.error('>>> get test token fail: ', error);
                    return;
            }
    }
    try {
            const res = await wxp.request ({
                    url: tokenURL,  //该接口由开发者后台自行实现，开发者的 Token 从各自后台获取
                    // 请求参数中的appID与userID分别为初始化SDK所填的appID与userID
                    data: {
                            app_id: appID,
                            id_name: userID,
                    },
                    header: {
                            'content-type': 'text/plain'
                    },
            });
            console.warn('>>> get token success: ');
            if (res.statusCode === 200) return res.data;
            return;
    } catch(error) {
            console.error('>>> get token fail: ', error);
            return;
    }
    
}