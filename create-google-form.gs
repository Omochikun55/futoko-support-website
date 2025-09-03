/**
 * みらいの学び場 - 相談フォーム自動作成スクリプト
 * 
 * 使い方:
 * 1. Google Drive (https://drive.google.com) を開く
 * 2. 新規 → その他 → Google Apps Script
 * 3. このコードを貼り付け
 * 4. 実行 → createConsultationForm
 * 5. 権限を許可
 * 6. 作成されたフォームのURLがログに表示される
 */

function createConsultationForm() {
  // フォームを作成
  const form = FormApp.create('みらいの学び場 - 無料相談申込フォーム');
  
  // フォームの説明を設定
  form.setDescription(
    '不登校でお悩みの保護者様へ。まずはお気軽にご相談ください。\n' +
    '48時間以内にご連絡いたします。'
  );
  
  // フォーム設定
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(false); // メール収集時は自動で制限される
  form.setProgressBar(true);
  form.setConfirmationMessage(
    'お申し込みありがとうございました。\n' +
    '48時間以内に担当者よりご連絡させていただきます。\n' +
    '自動返信メールをお送りしましたのでご確認ください。'
  );
  
  // 1. 保護者様のお名前
  form.addTextItem()
    .setTitle('保護者様のお名前')
    .setHelpText('例：山田 花子')
    .setRequired(true);
  
  // 2. お子様の学年
  const gradeItem = form.addMultipleChoiceItem()
    .setTitle('お子様の学年')
    .setRequired(true);
  
  gradeItem.setChoices([
    gradeItem.createChoice('小学1年生'),
    gradeItem.createChoice('小学2年生'),
    gradeItem.createChoice('小学3年生'),
    gradeItem.createChoice('小学4年生'),
    gradeItem.createChoice('小学5年生'),
    gradeItem.createChoice('小学6年生'),
    gradeItem.createChoice('中学1年生'),
    gradeItem.createChoice('中学2年生'),
    gradeItem.createChoice('中学3年生'),
    gradeItem.createChoice('高校生'),
    gradeItem.createChoice('その他')
  ]);
  
  // 3. 現在の状況
  form.addParagraphTextItem()
    .setTitle('お子様の現在の状況')
    .setHelpText('不登校の期間、頻度、きっかけなど、差し支えない範囲でお聞かせください')
    .setRequired(true);
  
  // 4. ご相談内容
  form.addParagraphTextItem()
    .setTitle('ご相談内容')
    .setHelpText('どのようなことでお困りですか？どんなサポートをご希望ですか？')
    .setRequired(true);
  
  // 5. 電話番号
  form.addTextItem()
    .setTitle('電話番号')
    .setHelpText('例：090-1234-5678（任意）')
    .setRequired(false)
    .setValidation(
      FormApp.createTextValidation()
        .setHelpText('正しい電話番号を入力してください')
        .requireTextMatchesPattern('[0-9-() ]+')
        .build()
    );
  
  // 6. 希望連絡方法
  const contactMethod = form.addMultipleChoiceItem()
    .setTitle('希望連絡方法')
    .setRequired(true);
  
  contactMethod.setChoices([
    contactMethod.createChoice('メール'),
    contactMethod.createChoice('電話'),
    contactMethod.createChoice('どちらでも可')
  ]);
  
  // 7. 希望相談日時
  form.addParagraphTextItem()
    .setTitle('希望相談日時（任意）')
    .setHelpText('第3希望までお知らせください。例：平日午前中、土曜日14時以降など')
    .setRequired(false);
  
  // 8. その他・ご要望
  form.addParagraphTextItem()
    .setTitle('その他・ご要望（任意）')
    .setHelpText('配慮が必要なことや、事前にお伝えしたいことがあればご記入ください')
    .setRequired(false);
  
  // フォームのURLを取得
  const formUrl = form.getPublishedUrl();
  const editUrl = form.getEditUrl();
  const formId = form.getId();
  
  // 自動返信メールの設定
  setupAutoReply(form);
  
  // 結果を表示
  console.log('==========================================');
  console.log('フォームが作成されました！');
  console.log('==========================================');
  console.log('公開URL（これをサイトに設定）:', formUrl);
  console.log('編集URL:', editUrl);
  console.log('フォームID:', formId);
  console.log('');
  console.log('埋め込み用URL:');
  console.log(`https://docs.google.com/forms/d/e/${formId}/viewform`);
  console.log('==========================================');
  
  // スプレッドシートとリンク
  linkToSpreadsheet(form);
  
  return {
    publishedUrl: formUrl,
    editUrl: editUrl,
    formId: formId,
    embedUrl: `https://docs.google.com/forms/d/e/${formId}/viewform`
  };
}

// 自動返信の設定
function setupAutoReply(form) {
  try {
    // フォーム送信時のトリガーを作成
    ScriptApp.newTrigger('sendAutoReply')
      .forForm(form)
      .onFormSubmit()
      .create();
    
    console.log('自動返信が設定されました');
  } catch (e) {
    console.log('自動返信の設定に失敗しました:', e.message);
    console.log('手動で設定してください');
  }
}

// スプレッドシートとリンク
function linkToSpreadsheet(form) {
  try {
    // 回答用スプレッドシートを作成
    const sheet = SpreadsheetApp.create('みらいの学び場 - 相談申込回答');
    form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
    
    console.log('回答用スプレッドシートが作成されました');
    console.log('スプレッドシートURL:', sheet.getUrl());
  } catch (e) {
    console.log('スプレッドシートの作成に失敗しました:', e.message);
  }
}

// 自動返信メール送信関数
function sendAutoReply(e) {
  try {
    const responses = e.response.getItemResponses();
    const email = e.response.getRespondentEmail();
    let name = '';
    
    // 名前を取得
    for (let i = 0; i < responses.length; i++) {
      const title = responses[i].getItem().getTitle();
      if (title.includes('お名前')) {
        name = responses[i].getResponse();
        break;
      }
    }
    
    if (email && name) {
      const subject = '【みらいの学び場】お問い合わせを受け付けました';
      const body = `${name} 様

この度は、みらいの学び場へお問い合わせいただき
誠にありがとうございます。

お問い合わせを確かに受け付けました。
48時間以内に担当者よりご連絡させていただきます。

なお、土日祝日を挟む場合は、
お返事が遅れることがございます。
ご了承ください。

お急ぎの場合は、お電話でもご相談を承っております。
TEL: 011-123-4567（平日9:00-18:00）

━━━━━━━━━━━━━━━━━━━━
みらいの学び場
合同会社ミニオフィス

〒XXX-XXXX 北海道札幌市
メール: info@minioffice.jp
電話: 011-123-4567
Web: https://futoko-support-website.vercel.app/
━━━━━━━━━━━━━━━━━━━━`;
      
      GmailApp.sendEmail(email, subject, body, {
        name: 'みらいの学び場',
        replyTo: 'info@minioffice.jp'
      });
      
      // 管理者にも通知
      const adminSubject = '【新規申込】相談フォームに申込がありました';
      const adminBody = `新しい相談申込がありました。

申込者: ${name} 様
メール: ${email}

詳細は回答スプレッドシートをご確認ください。
48時間以内にご連絡をお願いします。`;
      
      GmailApp.sendEmail('info@minioffice.jp', adminSubject, adminBody);
    }
  } catch (error) {
    console.error('自動返信エラー:', error);
  }
}

// テスト実行用
function testCreateForm() {
  const result = createConsultationForm();
  console.log('作成結果:', result);
}