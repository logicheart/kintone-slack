SLACK_WEBHOOK_URL=https://hooks.slack.com/services/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
SLACK_CHANNEL=#random
SLACK_USERNAME=kintone-bot
SLACK_MESSAGE="Hello!"


data="payload='{\"username\":\"kintone\",\"channel\":\"#general\",\"text\":\"Hello!Hello\",\"icon_emoji\":\":grinning:\"}'"

payload='{"channel":"'$SLACK_CHANNEL'","username":"'$SLACK_USERNAME'","text":"'$SLACK_MESSAGE'","icon_emoji":":grinning:"}'
payload='{"username":"kintone","channel":"#general","text":"Hello!Hello","icon_emoji":":grinning:"}'

curl -X POST --data-urlencode "payload=$payload" $SLACK_WEBHOOK_URL
