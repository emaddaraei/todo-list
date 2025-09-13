import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faCircleCheck,
  faMoon,
  faTriangleExclamation,
  faCalendarDay,
} from '@fortawesome/free-solid-svg-icons';

export const IconClasses = {
  moon: <FontAwesomeIcon icon={faMoon} className="text-xl" />,
  triangle: (
    <FontAwesomeIcon icon={faTriangleExclamation} className="text-xl" />
  ),
  done: <FontAwesomeIcon icon={faCircleCheck} className="text-xl" />,
  chart: <FontAwesomeIcon icon={faChartLine} className="text-xl" />,
  calender: <FontAwesomeIcon icon={faCalendarDay} className="text-xl" />,
};
