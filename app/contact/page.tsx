"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle } from "lucide-react";

const formSchema = z.object({
  parentName: z.string().min(1, "保護者氏名は必須です").max(50, "50文字以内で入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください").max(100, "100文字以内で入力してください"),
  phone: z.string().regex(/^[\d-+() ]*$/, "有効な電話番号を入力してください").optional().or(z.literal("")),
  childGrade: z.string().min(1, "お子さまの学年を選択してください"),
  situation: z.string().min(10, "10文字以上で状況をご記入ください").max(1000, "1000文字以内で入力してください"),
  consultationType: z.enum(["online", "visit"]).refine((val) => val !== undefined, {
    message: "希望面談方法を選択してください",
  }),
  preferredDates: z.string().min(1, "希望日程をご記入ください").max(500, "500文字以内で入力してください"),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "プライバシーポリシーへの同意が必要です",
  }),
});

type FormData = z.infer<typeof formSchema>;

const grades = [
  "小学1年生",
  "小学2年生",
  "小学3年生",
  "小学4年生",
  "小学5年生",
  "小学6年生",
  "中学1年生",
  "中学2年生",
  "中学3年生",
  "高校1年生",
  "高校2年生",
  "高校3年生",
  "その他",
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // ここで実際のフォーム送信処理を行います
    // 現在はダミーの処理として、2秒待機してから完了画面を表示
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-green-600" />
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
              お問い合わせを受付けました
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              48時間以内にメールにてご連絡いたします。
              <br />
              自動返信メールをご確認ください。
            </p>
            <div className="mt-10">
              <Link
                href="/"
                className="text-base font-semibold leading-6 text-primary hover:text-blue-700"
              >
                ホームに戻る <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
              相談・予約
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              まずはお気軽にご相談ください。
              <br />
              48時間以内にメールにてご連絡いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* 保護者氏名 */}
            <div>
              <label htmlFor="parentName" className="block text-sm font-semibold leading-6 text-gray-900">
                保護者氏名 <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  {...register("parentName")}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.parentName}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
                {errors.parentName && (
                  <p className="mt-2 text-sm text-red-600">{errors.parentName.message}</p>
                )}
              </div>
            </div>

            {/* メール */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                メールアドレス <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  {...register("email")}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  inputMode="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* 電話番号 */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                電話番号（任意）
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  {...register("phone")}
                  inputMode="tel"
                  placeholder="090-0000-0000"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* お子さまの学年 */}
            <div>
              <label htmlFor="childGrade" className="block text-sm font-semibold leading-6 text-gray-900">
                お子さまの学年 <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <select
                  {...register("childGrade")}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.childGrade}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                >
                  <option value="">選択してください</option>
                  {grades.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
                {errors.childGrade && (
                  <p className="mt-2 text-sm text-red-600">{errors.childGrade.message}</p>
                )}
              </div>
            </div>

            {/* 状況の概要 */}
            <div>
              <label htmlFor="situation" className="block text-sm font-semibold leading-6 text-gray-900">
                状況の概要 <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <textarea
                  {...register("situation")}
                  rows={4}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.situation}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  placeholder="現在の状況やご相談内容をお書きください"
                />
                {errors.situation && (
                  <p className="mt-2 text-sm text-red-600">{errors.situation.message}</p>
                )}
              </div>
            </div>

            {/* 希望面談 */}
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                希望面談方法 <span className="text-red-600">*</span>
              </legend>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <input
                    id="online"
                    {...register("consultationType")}
                    type="radio"
                    value="online"
                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="online" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                    オンライン
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="visit"
                    {...register("consultationType")}
                    type="radio"
                    value="visit"
                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="visit" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                    来所
                  </label>
                </div>
              </div>
              {errors.consultationType && (
                <p className="mt-2 text-sm text-red-600">{errors.consultationType.message}</p>
              )}
            </fieldset>

            {/* 希望日程 */}
            <div>
              <label htmlFor="preferredDates" className="block text-sm font-semibold leading-6 text-gray-900">
                希望日程 <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <textarea
                  {...register("preferredDates")}
                  rows={3}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.preferredDates}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  placeholder="第1希望：○月○日（○）午前/午後&#10;第2希望：○月○日（○）午前/午後&#10;第3希望：○月○日（○）午前/午後"
                />
                {errors.preferredDates && (
                  <p className="mt-2 text-sm text-red-600">{errors.preferredDates.message}</p>
                )}
              </div>
            </div>

            {/* 同意チェック */}
            <div className="flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="privacyConsent"
                  {...register("privacyConsent")}
                  type="checkbox"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.privacyConsent}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="privacyConsent" className="text-sm text-gray-600">
                  <Link href="/privacy" className="font-medium text-primary hover:text-blue-700">
                    プライバシーポリシー
                  </Link>
                  に同意します <span className="text-red-600">*</span>
                </label>
                {errors.privacyConsent && (
                  <p className="mt-1 text-sm text-red-600">{errors.privacyConsent.message}</p>
                )}
              </div>
            </div>

            {/* 送信ボタン */}
            <div className="mt-10">
              <button
                type="submit"
                disabled={isSubmitting}
                className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}