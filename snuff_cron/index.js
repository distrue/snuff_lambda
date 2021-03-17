const axios = require('axios');

exports.handler = async (event) => {
    const body = {
        "bot": {
          "id": "5f3f34ed4fbf5200015f0611",
          "name": "스누푸파"
        },
        "userRequest": {
          "block": {
            "id": "5f3f34ed4fbf5200015f0611",
            "name": "스누푸파"
          },
          "utterance": "01012345678",
          "params": {
            "surface": "Kakaotalk.plusfriend"
          },
          "isInSlotFilling": true,
          "user": {
            "id": "8dcae25ae7508eafa4dd2207fbf9418753597a7116ca862072a4e50f087e6a9928",
            "type": "botUserKey",
            "properties": {
              "botUserKey": "8dcae25ae7508eafa4dd2207fbf9418753597a7116ca862072a4e50f087e6a9928",
              "appUserStatus": "REGISTERED",
              "isFriend": true,
              "app_user_status": "REGISTERED",
              "app_user_id": "1620160768",
              "plusfriendUserKey": "UEBpJodrFRCP",
              "appUserId": "1620160768",
              "bot_user_key": "8dcae25ae7508eafa4dd2207fbf9418753597a7116ca862072a4e50f087e6a9928",
              "plusfriend_user_key": "UEBpJodrFRCP"
            }
          },
          "value": {
            "origin": "01012345678",
            "resolved": "01012345678"
          },
          "timezone": "Asia/Seoul",
          "lang": "ko"
        },
        "indent": {},
        "action": {
          "name": "",
          "clientExtra": {},
          "params": {
            "region": "서울대입구역",
            "foodtype": "양식"
          },
          "id": "",
          "detailParams": {}
        }
    };

    await axios.post(process.env.endpoint, body);
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('crontab completed'),
    };
    return response;
};
