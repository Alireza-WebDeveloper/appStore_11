import Text from '../../../common/text';
import Title from '../../../common/title';
import { ContactSectionProps } from './index.types';

const ContactSection: React.FC<ContactSectionProps> = ({
  data: { title, address, phone, email },
}) => (
  <div className="flex flex-col gap-4">
    <Title level={3} className="text-2xl font-semibold text-gray-100">
      {title}
    </Title>
    <Text className="text-sm text-gray-400">آدرس: {address}</Text>
    <Text className="text-sm text-gray-400">تلفن: {phone}</Text>
    <Text className="text-sm text-gray-400">ایمیل: {email}</Text>
  </div>
);

export default ContactSection;
