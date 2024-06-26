import { Avatar } from '@radix-ui/themes';

import SocialLink from '@/components/links/SocialLink';
import EaseInOut from '@/components/transition/EaseInOut';
import type { Info } from '~/config';
import { userInfo } from '~/config';

export default function IsMeComp() {
  return (
    <div className='sticky top-40'>
      <EaseInOut>
        <div className='flex flex-col items-center gap-4'>
          <Avatar src="/images/avatar.jpg" fallback="Avatar" size="9" radius="full" />
          <div className='font-bold text-2xl'>
            Lin Zheng
          </div>
          <UserInfo info={userInfo} />
          <SocialLink />
        </div>
      </EaseInOut>
    </div>
  )
};

function UserInfo({ info }: { info: Info[] }) {
  return (
    <div>
      {info.map((key) => (
        <div key={key.name} className='flex items-center'>
          <span className='text-xl mr-2'>
            <key.icon />
          </span>
          <span>
            {key.content}
          </span>
        </div>
      ))}
    </div>
  )
}
