import { EmailIcon } from '@/app/lib/design/common/icons';
import UserContactTitle from '@/app/lib/design/common/user-contact-title';

const EmailContact = () => {
  return (
    <div className="flex flex-col gap-2">
      <UserContactTitle icon={EmailIcon} title="ایمیل حساب کاربری" />
    </div>
  );
};

export default EmailContact;
