import { Block } from '../layout/block';
import BulletItem from './bulletItem';
import React from 'react';

const RecentActivities: React.FC = () => {
  return (
    <Block>
      <h2 className="text-md font-bold">فعالیت‌های اخیر</h2>
      <div className="flex flex-col gap-3">
        <BulletItem
          text={'تکالیف کلاس نقاشی انجام شد.'}
          textColor={'text-gray-600'}
          bulletColor={'bg-green-500'}
        ></BulletItem>
        <BulletItem
          text={'اولویت آموزش برنامه‌نویسی به بالا تغییر پیدا کرد.'}
          textColor={'text-gray-600'}
          bulletColor={'bg-blue-500'}
        ></BulletItem>
        <BulletItem
          text={'یک وظیفه جدید به وظایف اضافه شد.'}
          textColor={'text-gray-600'}
          bulletColor={'bg-yellow-500'}
        ></BulletItem>
      </div>
    </Block>
  );
};

export default RecentActivities;
