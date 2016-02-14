(function(PLUGIN_ID) {
  "use strict";

  kintone.api(kintone.api.url('/k/v1/preview/form', true), 'GET', {
    'app': kintone.app.getId()
  }, function(response) {
    var conf = kintone.plugin.app.getConfig(PLUGIN_ID);
    console.log("conf:"+JSON.stringify(conf));

    if (conf) {
      $('#slack_webhook_url').val(conf.slack_webhook_url);
      $('#slack_username').val(conf.slack_username);
      $('#slack_channel').val(conf.slack_channel);
    }
  });

  $('#submit').click(function() {
    var slack_webhook_url = $.trim($('#slack_webhook_url').val());
    var slack_team = $.trim($('#slack_team').val());
    var slack_username = $.trim($('#slack_username').val());
    var slack_channel = $.trim($('#slack_channel').val());

    if (slack_webhook_url === "") {
      alert("Slack Webhook URL not input.");
      return;
    }
    if (slack_username === "") {
      alert("Slack User Name not input.");
      return;
    }
    if (slack_channel === "") {
      alert("Slack Channel not input.");
      return;
    }

    var config = {
      slack_webhook_url: slack_webhook_url,
      slack_username: slack_username,
      slack_channel: slack_channel
    };
    console.log(config);

    kintone.plugin.app.setConfig(config);
  });

  $('#cancel').click(function() {
    history.back();
  });
})(kintone.$PLUGIN_ID);
