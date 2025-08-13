import { EmailIcon } from '@/app/lib/design/common/icons';

const EmailContact = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2 text-indigo-600">
        <EmailIcon color="black" width={25} height={25} />
        تغییر ایمیل حساب کاربری
      </h1>
    </div>
  );
};

export default EmailContact;
