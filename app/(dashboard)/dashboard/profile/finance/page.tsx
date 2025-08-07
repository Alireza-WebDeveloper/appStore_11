'use client';

import { EmailIcon } from '@/app/lib/design/common/icons';

export default function UserFinancialDashboard() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
        حساب مالی من
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-2xl p-4 flex items-center gap-4 border">
          <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full">
            <EmailIcon />
          </div>
          <div>
            <p className="text-gray-600 text-sm">موجودی کیف پول</p>
            <p className="font-bold text-lg">۳۰۰,۰۰۰ تومان</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-2xl p-4 flex items-center gap-4 border">
          <div className="bg-green-100 text-green-600 p-3 rounded-full">
            <EmailIcon />
          </div>
          <div>
            <p className="text-gray-600 text-sm">کدهای تخفیف فعال</p>
            <p className="font-bold text-lg">۲ عدد</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-2xl p-4 flex items-center gap-4 border">
          <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
            <EmailIcon />
          </div>
          <div>
            <p className="text-gray-600 text-sm">آخرین پرداخت موفق</p>
            <p className="font-bold text-lg">۲۵۰,۰۰۰ تومان</p>
          </div>
        </div>
      </div>

      {/* Transaction Table */}
      <div className="bg-white shadow rounded-2xl overflow-hidden border">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            تاریخچه تراکنش‌ها
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-right text-gray-700">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-3">تاریخ</th>
                <th className="px-4 py-3">نوع تراکنش</th>
                <th className="px-4 py-3">مبلغ</th>
                <th className="px-4 py-3">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 transition">
                <td className="px-4 py-3">۱۴۰۳/۰۴/۱۹</td>
                <td className="px-4 py-3">افزایش موجودی</td>
                <td className="px-4 py-3">+۳۰۰,۰۰۰ تومان</td>
                <td className="px-4 py-3 text-green-600 font-medium">موفق</td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="px-4 py-3">۱۴۰۳/۰۴/۱۷</td>
                <td className="px-4 py-3">خرید محصول</td>
                <td className="px-4 py-3">-۲۵۰,۰۰۰ تومان</td>
                <td className="px-4 py-3 text-green-600 font-medium">موفق</td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="px-4 py-3">۱۴۰۳/۰۴/۱۵</td>
                <td className="px-4 py-3">استفاده از کد تخفیف</td>
                <td className="px-4 py-3">-۵۰,۰۰۰ تومان</td>
                <td className="px-4 py-3 text-red-500 font-medium">ناموفق</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
