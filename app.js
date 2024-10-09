import { promisifyAll } from 'miniprogram-api-promise';

export const wxp = {}

App({
  globalData: {
    
    // zegoAppID: 1739272706,
    // server: 'wss://webliveroom2375819786-api.imzego.com/ws',
    // userID: 'sample1728443764098',
    // token: '04AAAAAGeJy3oAEGRiNmx1YnpzaHBuNXRvc24A0IHnCtK/uxYtqIWmiJRF53qvVNPDSx7XrKiKBZP5PzvPfJzBMOs+h9vywa1JG/yPmfg1FGDTXS+yCyEz9r6hSo/ATSmspFtahWUjxBhKncdPioQ2ZZEtADdiM2+CioZPXpdGgPV2RiXLUwvvaLBPgjU0Msm11faWeh+egZj4AbLsnbVbNHZ2JgRj7hVyyXSFJ81w0bfF+DoPDgp9yaYor+Mp6SWsGhRmpeqfIxTOhL3nt4BKP55YUGqAlcwyi/v4nRzRSGfOw8uvOkHng5E59cY='

    zegoAppID: 2375819786,
    server: 'wss://webliveroom2375819786-api.imzego.com/ws',
    userID: 'sample1728443369869',
    token: '04AAAAAGeJyfUAEGl6NHg1ODJmZ2IyMW9rNmcA0LwGv0SxShGq72BT0Bflf3PF6Px0VKpH+SZTnTohwMsWRjQl8OmikWrKcx/nvgtTIjHHKXe7CX0QSBj7UxnG5IFvtaylZLQGPhTj0iEbF8VJ9EFoXW5lFdnjxJU1B6+4qm5Op/5Scinc4T8WkDMHSUbXRr9jLzD+VlTb/ztPnzX7a/dKTrjb+OXjMNDSfACypgsWtih7pk2BjVem0r7nPletK489bxywRS07SsFqTKOg7dSmi8MqOZ0DHljCqVJX8ysERRV2DXVzhCAMvXpXyPQ='
    // zegoAppID: 803294704, // 填写自己账号下的AppID
    // server: 'wss://webliveroom803294704-api.imzego.com/ws', // 填写自己账号下的server
    // userID: 'sample1727678905598', // userID
    // token: '04AAAAAGd+H78AEGNreWc4bDdhajBjdHQ4ZGsA0B1ZccSxe48V7NOYbsUQQ+WbumdO+kgOgBZvWyjdoq8qcZaTHlFHjAWDJUWbJn+UzWMVJc9KCOjz0OcLRvfmxpT/pokKJb78JYFfvNSiC++VoeSbRQIR7DEZ8X+BlI9b85CXNnxHwZJSnQtSwDbmoJJZu2CSLofmL/yyh/2mfnxWJ5oAbRgb7XMw+A2ENfHmTxag8No+WxgwMCjPA25IJ25SZpSttpks02oQn6oWAGR5p4CB84f2lHwuvznW5ZxFYIvCWYFRh4G9mXj/xEozRUQ=' // 从ZEGO管理控制台生成的token，可以填写到此处
    // zegoAppID: 3606078772, // 填写自己账号下的AppID
    // server: 'wss://webliveroom3606078772-api.imzego.com/ws', // 填写自己账号下的server
    // userID: 'sample1728385168982', // userID sample1728389078866
    // token: '04AAAAAGeI5pcAEDY1Z2V0b2tjenNiZmdwaXEA0LMCJcs5jfsU/ode5oZzVEz3Ohr7hqjHdKusfXcKeJeWmieLjUTuDEKPTXTRtGrOAaeqo1atsT0kRTsR4e5F2lns8WZEkRr3nfM499QvAHA0IgbMTPdHK7U/r1dMIeK+sqo177RhkVzsuDFwJyU7tr4YFsLIyd8zZjx8VhlTnOjM+gRm1GmiGEoa11JZzF6WI6fHZaEWN2CWGuvm+8K/Ra7dmk0sUECx7W6HQgO3mzd1MejTEAs+AMjL+rTUhvTKKCWJjif1KHteQLOxGjtlP3g='
    // 04AAAAAGeI9d4AEHR3YWNiajFkamFxYzByZm4A0PSfB/TqgcpSarE02A1PulO1dKnHUQ2jpVn4WfhbqpVxi1jG7PGAfd6RXk/UegvJNsoj10u/zl3ylwE3ebI1n3T7B/pp1N86waPvBAcCanYavOqEC81HUQ0gv84EMHcsaJAZ5mZDx1W8SzKajTspN9gZJJWjmMCwZAmM2QwaNu/jhP1sNxckDcvJcr0JOiV6JLf+M+iJ5rGNorlRaoy5pK6I3CUbFdLtnFp8hGGe3CfvGWdvkXno14N+NQ/6+VU1EMGYRZw00wsy69YbXENk7U4=
    // zegoAppID: 1244529413,
    // server: 'wss://webliveroom3606078772-api.imzego.com/ws', // 填写自己账号下的server
    // userID: 'sample1728390619092', // userID sample1728389078866
    // token: '04AAAAAGeI++IAEDRzd2llcHc5NG5tYTgxMmEA0NsQfNcmbNv45lAGWdu7Dr0RBW0P0LQuScfPpP9DibO13XpStKbk7KVAeJY73vrBFMEk4N03s+cJuXhJVgnlJ6ulhELF7aAdBzar8Cx6slief/AELHOTjIZ9kiHjR0RxQmse3gtJNHg1x8fIpUnEm1L+SK3YtHUCF4bBflaaE1+klMJvRUg83Ab+IgFtL0L8AdlimqA56BTRFmjans1Y22UWLkkUZidj5PwqgKT/iQ+a0dYwavVUTiR32NJzTHB4vEcbYqBLlbsG4hhPDdxCiKE='
    // zegoAppID: 245697902, // 填写自己账号下的AppID
    // server: 'wss://webliveroom245697902-api.zego.im/ws', // 填写自己账号下的server
    // userID:  '', //'sample1719385603291', // userID
    // token: '', //'04AAAAAGuiGhQAEGN2cDVuMjcwcTNlaXAwZ3gA0PEoyydl66sp7OI8Jfk3rU/G1/t8HqRzQpwEMuvtMkD2I+v/CWUOBJ/Potb6xF9hgORHCzN1u7V3lEey0oYK23QhjZpEPVoftSe7BEOqDqLZJFxfloIaN44ki0OSiO8DCQgvRVyuQRDUW/3V4aGNOvHezz2Vr1cFPvRccf+Kx2LLGyNq0dBiKDrl+voOoc9Mi67yKDgpXVfaYX6DBQcq4l1AFM9LVz1w5pxjsQYpZZ2Znh6sOXDisuhYSfIbAPspqkj7Oel8rt6qgsVE03O481A=' // 从ZEGO管理控制台生成的token，可以填写到此处
  },
  
  onLaunch() {
    // 扩展微信小程序api支持promise
    promisifyAll(wx, wxp);
  }
});
