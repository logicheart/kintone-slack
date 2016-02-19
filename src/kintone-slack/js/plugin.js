(function (PLUGIN_ID) {

  "use strict";

  var config = kintone.plugin.app.getConfig(PLUGIN_ID);

  kintone.events.on(
    ['app.record.detail.process.proceed'],
    function(event) {
      console.log("event.action=" + event.action);
      console.log(config);
      if (!config) return;

      var record = event.record;
      console.log(JSON.stringify(record));

      var message = config.slack_message;
      var regwords = message.match(/{{[^{}]+}}/g);
      console.log("regwords:" + JSON.stringify(regwords));
      for (var i in regwords) {
        var regword = regwords[i];
        var fieldName = regword.replace(/^{{/, '').replace(/}}$/, '');

        var value = record[fieldName].value;
        console.log("regword="+regword+" field="+fieldName+" value="+value);

        var regexp = new RegExp(regword);
        message = message.replace(regexp, value);
      }

      var payload = {
        username: config.slack_username,
        channel: config.slack_channel,
        text: message,
        icon_emoji: config.slack_emoji
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
