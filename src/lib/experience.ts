export type EmploymentType = 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';

export type Experience = {
  company: string;
  employmentType: EmploymentType;
  title: string;
  current: boolean | null;
  startDate: string;
  endDate: string | null;
  skills: string[];
};

export const experiences = [
  {
    company: 'Jackson Dawson',
    employmentType: 'Contract',
    title: 'Junior Front-End Developer',
    startDate: '01/01/22',
    endDate: '10/01/24',
    skills: [
      'Vue.js',
      'JavaScript',
      'SCSS',
      'TailwindCSS',
      'Azure DevOps',
      'Pinia',
      'Testing Library',
      'Git',
      'Cypress',
    ],
  },
  {
    company: 'PingPerfect',
    employmentType: 'Full-time',
    title: 'Junior Developer',
    startDate: '05/01/21',
    endDate: '08/01/21',
    skills: ['CSS', 'HTML', 'SCSS', 'PHP', 'MySQL', 'JavaScript', 'jQuery', 'C#', 'Blazor'],
  },
] as Experience[];
