import { PersonIcon } from '@/app/lib/design/common/icons';
import { useFetchProfile } from '@/app/lib/hooks/auth';

const Profile = () => {
  const { data: profile } = useFetchProfile();

  return (
    <div className="flex items-center gap-3 mb-6 px-2">
      <PersonIcon width={20} height={20} />
      <div className="flex flex-col">
        <span className="text-sm font-semibold">
          {profile?.user.firstName} {profile?.user.lastName}
        </span>
        <span className="text-xs text-white/50">{profile?.user.email} </span>
      </div>
    </div>
  );
};

export default Profile;
