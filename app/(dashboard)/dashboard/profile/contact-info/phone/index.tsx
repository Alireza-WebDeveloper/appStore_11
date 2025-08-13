import { PhoneIcon } from '@/app/lib/design/common/icons';
import UserContactTitle from '@/app/lib/design/common/user-contact-title';

const PhoneContact = () => {
  return (
    <div className="flex flex-col gap-2">
      <UserContactTitle icon={PhoneIcon} title="شماره تماس حساب کاربری" />
    </div>
  );
};

export default PhoneContact;
