import { PhoneIcon } from '@/app/lib/design/common/icons';

const PhoneContact = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2 text-indigo-600">
        <PhoneIcon color="black" width={25} height={25} />
        تغییر شماره موبایل حساب کاربری
      </h1>
    </div>
  );
};

export default PhoneContact;
