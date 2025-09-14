import { Block } from '../layout/block';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faPlus, faShare } from '@fortawesome/free-solid-svg-icons';
import Button from '../ui/button';
import React from 'react';

const QuickAction: React.FC = () => {
  return (
    <Block>
      <div className="flex flex-col gap-3">
        <h2 className="text-md font-bold ">اقدامات سریع</h2>
        <Button
          buttonText={'ایجاد وظیفه جدید'}
          buttonBgColor={'bg-pink-100'}
          buttonTextColor={'text-pink-500'}
          buttonIcon={<FontAwesomeIcon icon={faPlus} />}
        ></Button>
        <Button
          buttonText={'ایجاد لیست جدید'}
          buttonBgColor={'bg-gray-100'}
          buttonTextColor={'text-gray-600'}
          buttonIcon={<FontAwesomeIcon icon={faList} />}
        ></Button>
        <Button
          buttonText={'اشتراک‌گذاری لیست'}
          buttonBgColor={'bg-gray-100'}
          buttonTextColor={'text-gray-600'}
          buttonIcon={<FontAwesomeIcon icon={faShare} />}
        ></Button>
      </div>
    </Block>
  );
};

export default QuickAction;
