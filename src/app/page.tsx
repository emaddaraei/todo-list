import TodayTask from '../components/todayTask';
import TaskOverview from './../components/taskOverview';
import RecentActivities from '../components/recentActivities';
import QuickActions from '../components/quickActions';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container min-h-screen p-8 flex flex-col gap-8 mx-auto">
      <TaskOverview />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TodayTask />
        </div>
        <div className="flex flex-col gap-8">
          <QuickActions />
          <RecentActivities />
        </div>
      </div>
    </div>
  );
};

export default Home;
