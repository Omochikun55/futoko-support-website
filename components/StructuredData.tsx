export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "EducationalOrganization"],
    "name": "みらいの学び場",
    "alternateName": "札幌の不登校支援",
    "url": "https://example.jp",
    "logo": "https://example.jp/images/logo.png",
    "telephone": "+81-11-xxxx-xxxx",
    "email": "info@example.jp",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "JP",
      "addressRegion": "北海道",
      "addressLocality": "札幌市",
      "postalCode": "xxx-xxxx"
    },
    "serviceType": [
      "不登校支援",
      "放課後等デイサービス案内",
      "実費コーチング",
      "居場所運営",
      "保護者支援"
    ],
    "areaServed": {
      "@type": "City",
      "name": "札幌市"
    },
    "priceRange": "¥5,500-¥33,000",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://pro-labo.net"
    ],
    "description": "学校に行く・行かないをゴールにせず、本人と家族が安心して学べる選択肢を一緒に増やす不登校支援サービス。札幌市を拠点に、オンラインでも対応。"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}