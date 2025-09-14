type TagStyle = {
  label: string;
  textColor: string;
  bgColor: string;
};

export const priorityClasses: Record<string, TagStyle> = {
  high: {
    label: 'بالا',
    textColor: 'text-red-600',
    bgColor: 'bg-red-100',
  },
  medium: {
    label: 'متوسط',
    textColor: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
  low: {
    label: 'پایین',
    textColor: 'text-gray-600',
    bgColor: 'bg-gray-100',
  },
};

export const categoryClasses: Record<string, TagStyle> = {
  programing: {
    label: 'برنامه‌نویسی',
    textColor: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  work: {
    label: 'کار',
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  personal: {
    label: 'شخصی',
    textColor: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
};

export type Priority = keyof typeof priorityClasses;
export type Category = keyof typeof categoryClasses;
