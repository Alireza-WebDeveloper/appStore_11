import { PersonIcon } from '@/app/lib/design/common/icons';

const Profile = () => {
  return (
    <div className="flex items-center gap-3 mb-6 px-2">
      <PersonIcon width={20} height={20} />
      <div className="flex flex-col">
        <span className="text-sm font-semibold">{/* Name */}</span>
        <span className="text-xs text-white/50">{/* Email*/} </span>
      </div>
    </div>
  );
};

export default Profile;
