# kintone Slack連携プラグイン

* まだ作成中です。

## 概要

* 休暇申請等のワークフロープロセスで、次のプロセスに遷移する際にSlackへメッセージが通知されます。

## 使い方

### 1. Slackの設定

* Slackアプリケーションでチャンネルを選択し、「Add an app or custom integration」
* 「Incoming WebHooks」を検索して選択
* 「Installations across your teams」で対象のチームにIncoming WebHooksをインストール
* Incoming WebHooksの設定で
  * Post to Channel: 通知先チャンネル
  * Webhook URL: 表示されるURLをメモしておく

### 2. プラグインの設定

* release/kintone-slack_vXX.zipをkintoneの管理画面よりプラグインとして追加
* 適用するアプリの 詳細設定−プラグイン より、「Slack連携プラグイン」を有効化
* Slack変換プラグインの設定画面で下記を設定する
  * Slack Incoming Webhook URL: 1.でメモしたWebhook URLを入力
  * User Name: Slack通知時の名前（例：kintone）
  * Channel: 1.で設定したチャンネル名（例：#kintone）
  * Message: 通知するメッセージ。{{FIELD_NAME}}の形式で、フィールドの値を埋め込むことができる。
    ```
   {{EMPLOYEE_NAME}}から休暇申請がありました。
    ```
  * Emoji: 絵文字コードを設定（例：:smile:）  ※参照：http://www.emoji-cheat-sheet.com

## 注意

現バージョン（version 1）では以下の制約があります。

* 申請プロセスのタイミングやステータスを選択することができません。

**皆様のPull Request**をお待ちしております。
