import { FC } from 'react';

interface ServiceStructuredDataProps {
  serviceName: string;
  description: string;
  price?: string;
  provider?: string;
}

const ServiceStructuredData: FC<ServiceStructuredDataProps> = ({
  serviceName,
  description,
  price,
  provider = "みらいの学び場"
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://example.jp"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Japan"
    },
    "serviceType": "教育支援サービス",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://example.jp/contact",
      "servicePhone": "+81-11-123-4567",
      "availableLanguage": "Japanese"
    }
  };

  if (price) {
    (jsonLd as any).offers = {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "JPY"
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default ServiceStructuredData;