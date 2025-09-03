/**
 * みらいの学び場 - 相談フォーム作成スクリプト（シンプル版）
 * 
 * このバージョンは自動返信機能を除外し、必要最小限の権限で動作します
 * 
 * 使い方:
 * 1. Google Drive (https://drive.google.com) を開く
 * 2. 新規 → その他 → Google Apps Script
 * 3. このコードを貼り付け
 * 4. 実行 → createConsultationFormSimple
 * 5. 権限を許可（Gmailの権限は不要）
 * 6. 作成されたフォームのURLがログに表示される
 */

function createConsultationFormSimple() {
  // フォームを作成
  const form = FormApp.create('みらいの学び場 - 無料相談申込フォーム');
  
  // フォームの説明を設定
  form.setDescription(
    '不登校でお悩みの保護者様へ。まずはお気軽にご相談ください。\n' +
    '48時間以内にご連絡いたします。'
  );
  
  // フォーム設定
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(false);
  form.setProgressBar(true);
  form.setConfirmationMessage(
    'お申し込みありがとうございました。\n' +
    '48時間以内に担当者よりご連絡させていただきます。\n' +
    'ご記入いただいたメールアドレスに確認メールが送信されます。'
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
  
  // スプレッドシートとリンク
  try {
    const sheet = SpreadsheetApp.create('みらいの学び場 - 相談申込回答');
    form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
    
    console.log('回答用スプレッドシートが作成されました');
    console.log('スプレッドシートURL:', sheet.getUrl());
    
    // メール通知の設定方法を案内
    console.log('');
    console.log('【重要】メール通知の設定方法：');
    console.log('1. フォーム編集画面を開く');
    console.log('2. 「回答」タブをクリック');
    console.log('3. 右上の「︙」→「新しい回答についてのメール通知を受け取る」をON');
    console.log('');
    console.log('【自動返信の設定】：');
    console.log('フォーム設定 → 回答 → 「回答のコピーを回答者に送信」を「常に表示」に設定');
  } catch (e) {
    console.log('スプレッドシートの作成に失敗しました:', e.message);
  }
  
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
  
  return {
    publishedUrl: formUrl,
    editUrl: editUrl,
    formId: formId,
    embedUrl: `https://docs.google.com/forms/d/e/${formId}/viewform`
  };
}