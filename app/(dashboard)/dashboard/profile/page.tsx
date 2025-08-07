import { EmailIcon } from '@/app/lib/design/common/icons';
import ImgContainer from '@/app/lib/design/common/img-container';

export default function AccountInfoUI() {
  return (
    <div className="max-w-4xl mx-auto p-8 rtl font-sans bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-extrabold mb-8 border-b border-gray-300 pb-4">
        اطلاعات حساب من
      </h1>

      {/* پروفایل و تصویر */}
      <section className="flex items-center gap-8 mb-10">
        {/* <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-indigo-500">
          <ImgContainer
            src="http://localhost:8000/user/default.webp"
            className="w-full h-full object-cover"
          />
        </div> */}

        <div>
          <h2 className="text-xl font-semibold mb-1 flex items-center gap-2">
            <EmailIcon />
            {/* Name */}
          </h2>
          <p className="text-gray-600 text-sm">{/* تاریخ عضویت کاربری */}</p>
          <p className="text-gray-400 text-xs mt-1">{/* زمان ورود کاربری */}</p>
        </div>
      </section>

      {/* اطلاعات اصلی */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <label
            className="block text-gray-700 mb-2 font-semibold"
            htmlFor="email"
          >
            ایمیل
          </label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-3">
            <EmailIcon />
            <span className="text-gray-800"></span>
          </div>
        </div>

        <div>
          <label
            className="block text-gray-700 mb-2 font-semibold"
            htmlFor="phone"
          >
            شماره موبایل
          </label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-3">
            <EmailIcon />
            <span className="text-gray-800"></span>
          </div>
        </div>
      </section>

      {/* امنیت و رمز عبور */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <EmailIcon />
          تنظیمات امنیتی
        </h3>

        <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <EmailIcon />
            <div>
              <p className="font-semibold">احراز هویت دو مرحله‌ای فعال است</p>
              <p className="text-gray-500 text-sm">
                امنیت حساب شما افزایش یافته است
              </p>
            </div>
          </div>
          <button className="text-indigo-600 hover:underline" type="button">
            مدیریت
          </button>
        </div>

        <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <EmailIcon />
            <div>
              <p className="font-semibold">تغییر رمز عبور</p>
              <p className="text-gray-500 text-sm">
                رمز عبور خود را به صورت دوره‌ای تغییر دهید
              </p>
            </div>
          </div>
          <button className="text-indigo-600 hover:underline" type="button">
            تغییر رمز
          </button>
        </div>
      </section>

      {/* خروج */}
      <section className="text-center">
        <button
          type="button"
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          <EmailIcon />
          خروج از حساب
        </button>
      </section>
    </div>
  );
}
