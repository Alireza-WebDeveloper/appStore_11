import { useFetchProfile } from '@/app/lib/hooks/auth';
import { useCreateComment } from '@/app/lib/hooks/comments';
import { useToastify } from '@/app/lib/hooks/global/toast-notify';
import { Button, Textarea } from '@nextui-org/react';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const SubmitComment = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const { data: profile } = useFetchProfile();

  const [text, setText] = useState('');

  const { mutate: createComment } = useCreateComment();

  const params = useParams();
  const productId = params.id as string;

  const { OpenToastify } = useToastify();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (profile?.user) {
      createComment({ text, productId });
    } else {
      OpenToastify('نیاز به ووردی کاربری', 'error');
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Button
        aria-label="try-again"
        onPress={() => {
          if (profile?.user) {
            setIsActive((prev) => !prev);
          } else {
            OpenToastify('نیاز به ووردی کاربری', 'error');
          }
        }}
        className="w-fit mr-auto bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:bg-gradient-to-l hover:from-indigo-500 hover:to-blue-500 shadow-lg transition duration-300 ease-in-out rounded-xl"
        size="md"
      >
        {isActive ? 'بستن دیدگاه' : 'ارسال دیدگاه'}
      </Button>
      {isActive && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-xl"
        >
          <Textarea value={text} onValueChange={(value) => setText(value)} />
          <Button
            aria-label="sign-up"
            type="submit"
            className="w-fit bg-gradient-to-r from-green-400 to-teal-500 text-white hover:bg-gradient-to-l hover:from-teal-500 hover:to-green-400 shadow-lg transition duration-300 ease-in-out rounded-xl"
          >
            ثبت دیدگاه
          </Button>
        </form>
      )}
    </div>
  );
};

export default SubmitComment;
