export type Image = {
  src: string;
  alt: string;
};

export type Project = {
  title: string;
  description: string;
  link: string | null;
  images: Image[];
  tags: string[];
};

export const projects = [
  {
    title: 'Twitch Avatar Customizer',
    description:
      'This project was created for a client who wanted to allow viewers to customize their avatars using a variety of icons made by artists the client had hired. It is a multi-page application that allows viewers to customize their avatars and allows the client to manage the viewers stats. I was responsible for the full-stack development of the project. The front-end was built using SvelteKit and Tailwind CSS, the back-end was built using ASP.NET and Postgres. I also setup the mono-repo to utilize Docker compose to make it easier for the client to deploy the project. I would also walk the client through any commands they needed to run on the linux server.',
    tags: [
      'SvelteKit',
      'Tailwind CSS',
      'C#',
      'ASP.NET',
      'Entity Framework',
      'GitHub',
      'Docker',
      'Twitch API',
      'Postgres',
    ],
    images: [
      {
        src: 'projects/twitch_customizer/customizer.png',
        alt: 'Avatar Customizer page',
      },
      {
        src: 'projects/twitch_customizer/admin_view.png',
        alt: 'Admin view page',
      },
    ],
  },

  {
    title: 'Bronco Off-Roadeo',
    description:
      'Bronco Off-Roadeo is a multi-site platform that allows you to register for or manage the attendance of upcoming off-road events. I was part of the team responsible for the front-end development of the website and integrating it with the rest api. I also created and maintained tests using Testing Library. One of the tasks I was assigned was to convert stores from Vuex to Pinia, I also converted components built with options api to composition api over time.',
    link: 'https://broncooffroadeo.com/',
    tags: ['Vue.js', 'Azure DevOps', 'Pinia', 'JavaScript', 'Testing Library', 'SCSS'],
    images: [
      {
        src: 'projects/bronco/homepage.jpg',
        alt: 'Bronco Off-Roadeo homepage',
      },
    ],
  },
] as Project[];
