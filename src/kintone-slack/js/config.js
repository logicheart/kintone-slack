(function(PLUGIN_ID) {
  "use strict";

  function showError(message) {
    if (!message || message === "") {
      $('.kintoneplugin-alert').addClass('hidden');
    } else {
      $('.kintoneplugin-alert').text(message);
      $('.kintoneplugin-alert').removeClass('hidden');
    }
  }

  kintone.api(kintone.api.url('/k/v1/preview/form', true), 'GET', {
    'app': kintone.app.getId()
  }, function(response) {
    showError("");

    var conf = kintone.plugin.app.getConfig(PLUGIN_ID);
    if (!conf) {
      conf = {
        slack_webhook_url: "",
        slack_username: "kintone",
        slack_channel: "#general",
        slack_message: "Hello!",
        slack_emoji: ":grinning:"
      };
    }

    $('#slack_webhook_url').val(conf.slack_webhook_url);
    $('#slack_username').val(conf.slack_username);
    $('#slack_channel').val(conf.slack_channel);
    $('#slack_message').val(conf.slack_message);
    $('#slack_emoji').val(conf.slack_emoji);
  });

  $('#submit').click(function() {
    var slack_webhook_url = $.trim($('#slack_webhook_url').val());
    var slack_username = $.trim($('#slack_username').val());
    var slack_channel = $.trim($('#slack_channel').val());
    var slack_message = $.trim($('#slack_message').val());
    var slack_emoji = $.trim($('#slack_emoji').val());
    showError("");

    if (slack_webhook_url === "") {
      showError("Slack Webhook URL not input.");
      return;
    }
    if (slack_username === "") {
      showError("Slack User Name not input.");
      return;
    }
    if (slack_channel === "") {
      showError("Slack Channel not input.");
      return;
    }
    if (!slack_channel.match(/^\#/)) {
      showError("Slack Channel must start with '#'.");
      return;
    }
    if (slack_emoji === "") {
      slack_emoji = ":grinning:";
    } else if (!slack_emoji.match(/^\:.+\:$/)) {
      showError("Slack Emoji must start and end wuth ':'.");
      return;
    }

    var config = {
      slack_webhook_url: slack_webhook_url,
      slack_username: slack_username,
      slack_channel: slack_channel,
      slack_message: slack_message,
      slack_emoji: slack_emoji
    };
    console.log(config);

    kintone.plugin.app.setConfig(config);
  });

  $('#cancel').click(function() {
    history.back();
  });

})(kintone.$PLUGIN_ID);
