import { EmailIcon } from '../icons';

interface NoResultProps {
  message?: string;
}

const NoResult: React.FC<NoResultProps> = ({
  message = 'نتیجه‌ای برای درخواست شما یافت نشد.',
}) => {
  return (
    <div className="w-full h-64 flex flex-col items-center justify-center text-gray-500">
      <EmailIcon />
      <p className="text-lg text-center">{message}</p>
    </div>
  );
};

export default NoResult;
