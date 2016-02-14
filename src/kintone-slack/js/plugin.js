(function (PLUGIN_ID) {

  "use strict";

  kintone.events.on(
    ['app.record.create.show'],
    function(event) {
      var config = kintone.plugin.app.getConfig(PLUGIN_ID);
      //if (!config) return;

      var record = event.record;

      var text = "kintoneただ今参上！";

      var payload = {
        username: config.slack_username,
        channel: config.slack_channel,
        text: encodeURIComponent(text),
        icon_emoji: ":grinning:"
      };

      var jqXHR = $.post({
        url: config.slack_webhook_url,
        data: "payload='" + JSON.stringify(payload) + "'",
        dataType: "json"
      }).done (function(result, status, xhr) {
        console.log("Done.");
      }).fail (function(xhr, status, error) {
        console.log("Fail." + status + " " + error);
      });
      console.log(JSON.stringify(payload));

    }
  );

})(kintone.$PLUGIN_ID);
