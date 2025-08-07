'use client';

import Sign from './sign';
import ButtonProfile from './button-profile';
import { useFetchProfile } from '@/app/lib/hooks/auth';

const Profile = () => {
  const { data: profile } = useFetchProfile();

  return <>{profile ? <ButtonProfile profile={profile.user} /> : <Sign />}</>;
};

export default Profile;
