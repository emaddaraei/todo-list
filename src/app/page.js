import TodayTask from '../components/todayTask';
import TaskOverview from './../components/taskOverview';

export default function Home() {
  return (
    <div className="container min-h-screen p-8 flex flex-col gap-8 mx-auto">
      <TaskOverview />
      <TodayTask />
    </div>
  );
}
