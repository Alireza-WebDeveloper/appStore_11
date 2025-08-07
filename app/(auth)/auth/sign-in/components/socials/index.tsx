import {
  FaceBookIcon,
  InstagramIcon,
  TelegramIcon,
} from '@/app/lib/design/common/icons';
import { Button } from '@nextui-org/react';

const SocialSignInButtons = () => {
  return (
    <div className="flex justify-center gap-4">
        
      {/* <Button color="primary" aria-label="Login with Instagram">
        <InstagramIcon />
      </Button> */}
      {/* <Button color="default" aria-label="Login with Telegram">
        <TelegramIcon />
      </Button> */}
      {/* <Button color="warning" aria-label="Login with Facebook">
        <FaceBookIcon />
      </Button> */}
    </div>
  );
};

export default SocialSignInButtons;
