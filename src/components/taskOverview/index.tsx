import ReportCard from './ReportCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faCircleCheck,
  faTriangleExclamation,
  faCalendarDay,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const TaskOverview: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-2 mt-2">
        <h1 className="text-xl font-bold">داشبورد</h1>
        <span className="text-sm text-gray-500">
          خوش آمدید! این هم نمای کلی وظایف شما برای امروز.
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ReportCard
          cardIcon={
            <FontAwesomeIcon icon={faCalendarDay} className="text-xl" />
          }
          cardTitle="سررسید امروز"
          cardSubtitle="وظایف نیازمند تکمیل"
          cardNumber={12}
          iconColor="pink"
          iconBgColor="pinkSubtle"
        />
        <ReportCard
          cardIcon={
            <FontAwesomeIcon icon={faTriangleExclamation} className="text-xl" />
          }
          cardTitle="موعد گذشته"
          cardSubtitle="نیازمند توجه"
          cardNumber={3}
          iconColor="red"
          iconBgColor="redSubtle"
        />
        <ReportCard
          cardIcon={
            <FontAwesomeIcon icon={faCircleCheck} className="text-xl" />
          }
          cardTitle="تکمیل‌شده"
          cardSubtitle="این هفته"
          cardNumber={28}
          iconColor="green"
          iconBgColor="greenSubtle"
        />
        <ReportCard
          cardIcon={<FontAwesomeIcon icon={faChartLine} className="text-xl" />}
          cardTitle="پیشرفت"
          cardSubtitle="تکمیل کلی"
          cardNumber="78%"
          iconColor="blue"
          iconBgColor="blueSubtle"
        />
      </div>
    </>
  );
};

export default TaskOverview;
