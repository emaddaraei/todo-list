import ReportCard from './ReportCard';

export default function TaskOverview() {
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
          cardIcon="calender"
          cardTitle="سررسید امروز"
          cardSubtitle="وظایف نیازمند تکمیل"
          cardNumber={12}
          iconColor="pink"
          iconBgColor="pinkSubtle"
        />
        <ReportCard
          cardIcon="triangle"
          cardTitle="موعد گذشته"
          cardSubtitle="نیازمند توجه"
          cardNumber={3}
          iconColor="red"
          iconBgColor="redSubtle"
        />
        <ReportCard
          cardIcon="done"
          cardTitle="تکمیل‌شده"
          cardSubtitle="این هفته"
          cardNumber={28}
          iconColor="green"
          iconBgColor="greenSubtle"
        />
        <ReportCard
          cardIcon="chart"
          cardTitle="پیشرفت"
          cardSubtitle="تکمیل کلی"
          cardNumber="78%"
          iconColor="blue"
          iconBgColor="blueSubtle"
        />
      </div>
    </>
  );
}
