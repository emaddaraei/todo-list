import ReportCards from "./../components/report cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCircleCheck,
  faMoon,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <div className="container min-h-screen p-8 flex flex-col gap-8 mx-auto">
      <div className="flex flex-col gap-2 mt-2">
        <h1 className="text-xl font-bold">داشبورد</h1>
        <span className="text-xs text-gray-500">
          خوش آمدید! این هم نمای کلی وظایف شما برای امروز.
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ReportCards
          cardIcon={<FontAwesomeIcon icon={faMoon} className="text-xl" />}
          cardTitle="سررسید امروز"
          cardSubtitle="وظایف نیازمند تکمیل"
          cardNumber={12}
          cardColor="bg-pink-100 text-pink-500"
        />
        <ReportCards
          cardIcon={
            <FontAwesomeIcon icon={faTriangleExclamation} className="text-xl" />
          }
          cardTitle="موعد گذشته"
          cardSubtitle="نیازمند توجه"
          cardNumber={3}
          cardColor="bg-red-100 text-red-500"
        />
        <ReportCards
          cardIcon={
            <FontAwesomeIcon icon={faCircleCheck} className="text-xl" />
          }
          cardTitle="تکمیل‌شده"
          cardSubtitle="این هفته"
          cardNumber={28}
          cardColor="bg-green-100 text-green-500"
        />
        <ReportCards
          cardIcon={<FontAwesomeIcon icon={faChartLine} className="text-xl" />}
          cardTitle="پیشرفت"
          cardSubtitle="تکمیل کلی"
          cardNumber="78%"
          cardColor="bg-blue-100 text-blue-500"
        />
      </div>
    </div>
  );
}
