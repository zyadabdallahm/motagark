'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">متجرك - Motagark</h1>
        <p className="text-lg mb-8">أفضل المنتجات بأسعار ممتازة، اطلب الآن!</p>

        <div className="bg-white rounded-2xl shadow p-6 max-w-md mx-auto">
          <Image
            src="/m90.png"
            alt="ساعة M90"
            width={400}
            height={300}
            className="mx-auto rounded-xl mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">ساعة M90 الذكية</h2>
          <p className="text-gray-700 mb-2">السعر: 390 جنيه مصري</p>
          <p className="text-sm text-green-600 mb-4">الربح المتوقع: 10 جنيه</p>
          <Link
            href="https://taager.com/eg/products/14422"
            target="_blank"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            اشتري الآن من تاجر
          </Link>
        </div>
      </div>
    </main>
  );
}