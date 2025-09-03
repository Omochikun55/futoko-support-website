# Googleフォーム設定ガイド

## 1. フォーム作成手順

### 必要な質問項目

1. **保護者様のお名前** (短文回答・必須)
2. **お子様の学年** (ラジオボタン・必須)
   - 小学1年生
   - 小学2年生
   - 小学3年生
   - 小学4年生
   - 小学5年生
   - 小学6年生
   - 中学1年生
   - 中学2年生
   - 中学3年生
   - その他

3. **現在の状況** (段落・必須)
   - 「お子様の現在の状況をお聞かせください」

4. **ご相談内容** (段落・必須)
   - 「どのようなことでお困りですか？」

5. **メールアドレス** (短文回答・必須・メール検証)

6. **電話番号** (短文回答・任意)

7. **希望連絡方法** (ラジオボタン・必須)
   - メール
   - 電話
   - どちらでも可

8. **希望相談日時** (段落・任意)
   - 「ご希望の相談日時があればお知らせください（第3希望まで）」

## 2. フォーム設定

### 基本設定
- タイトル: 「みらいの学び場 - 無料相談申込フォーム」
- 説明: 「不登校でお悩みの保護者様へ。まずはお気軽にご相談ください。48時間以内にご連絡いたします。」

### 設定タブ
```
一般:
✓ メールアドレスを収集
✓ 回答を1回に制限
□ 編集を許可

プレゼンテーション:
✓ 進行状況バーを表示
✓ 確認メッセージ: 「お申し込みありがとうございました。48時間以内にご連絡いたします。」
□ 別の回答を送信するためのリンクを表示

回答:
✓ 回答のコピーを回答者に送信 → 「常に表示」
✓ 新しい回答についてのメール通知を受け取る
```

## 3. 埋め込みコードの取得

1. フォーム編集画面で「送信」ボタンをクリック
2. `<>` アイコン（HTMLを埋め込む）を選択
3. 幅: 640、高さ: 800 に設定
4. 表示されたiframeコードからURLを抽出

例：
```html
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSxxxxxxxxxxxxxxxxxxxxxxxxx/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
```

このURLの `https://docs.google.com/forms/d/e/1FAIpQLSxxxxxxxxxxxxxxxxxxxxxxxxx/viewform` 部分を使用

## 4. サイトへの適用

`app/contact/page.tsx` の11行目を更新：

```typescript
// 変更前
const googleFormUrl = "https://forms.gle/YOUR_FORM_ID_HERE";

// 変更後（実際のURLに置き換え）
const googleFormUrl = "https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/viewform";
```

## 5. 自動返信メールの設定（オプション）

Google Apps Scriptを使用して自動返信を設定できます：

1. フォーム編集画面で「︙」→「スクリプトエディタ」
2. 以下のコードを貼り付け：

```javascript
function onFormSubmit(e) {
  const responses = e.response.getItemResponses();
  let email = '';
  let name = '';
  
  responses.forEach(response => {
    const title = response.getItem().getTitle();
    if (title.includes('メール')) {
      email = response.getResponse();
    }
    if (title.includes('お名前')) {
      name = response.getResponse();
    }
  });
  
  if (email) {
    const subject = '【みらいの学び場】お問い合わせを受け付けました';
    const body = `${name} 様

この度はお問い合わせいただき、ありがとうございます。
お問い合わせを受け付けました。

48時間以内に担当者よりご連絡させていただきます。
今しばらくお待ちください。

なお、土日祝日を挟む場合は、お返事が遅れることがございます。
ご了承ください。

--
みらいの学び場
合同会社ミニオフィス
メール: info@minioffice.jp
電話: 011-123-4567
`;
    
    MailApp.sendEmail(email, subject, body);
  }
}
```

3. トリガーを設定：
   - 「トリガー」→「トリガーを追加」
   - 実行する関数: `onFormSubmit`
   - イベントの種類: 「フォーム送信時」

## 6. テスト

1. 実際にフォームを送信してテスト
2. 以下を確認：
   - フォームが正しく表示される
   - 送信後の確認メッセージ
   - 回答者への確認メール
   - 管理者への通知メール
   - （設定した場合）自動返信メール

## 注意事項

- Googleフォームは無料プランで十分対応可能
- 回答はGoogleスプレッドシートに自動保存される
- 個人情報の取り扱いに注意（定期的にデータを削除するなど）
- SSL/TLSで暗号化されているため安全