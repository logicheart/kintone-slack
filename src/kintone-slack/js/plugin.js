(function (PLUGIN_ID) {

  "use strict";

  var config = kintone.plugin.app.getConfig(PLUGIN_ID);

  kintone.events.on(
    ['app.record.create.submit', 'app.record.edit.submit'],
    function(event) {
      console.log("create.show");
      console.log(config);
      if (!config) return;

      var record = event.record;

      var payload = {
        username: config.slack_username,
        channel: config.slack_channel,
        text: encodeURIComponent(config.slack_message),
        icon_emoji: ":grinning:"
      };

      var jqXHR = $.ajax({
        type: 'post',
        url: config.slack_webhook_url,
        data: 'payload=' + JSON.stringify(payload)
      }).done(function(result, textStatus, jqXHR){
        console.log("Done. result=" + result);
    	}).fail(function(data, textStatus, errorThrown){
        console.log("Fail. status=" + textStatus + " " + errorThrown.message);
      });
    }
  );

})(kintone.$PLUGIN_ID);
