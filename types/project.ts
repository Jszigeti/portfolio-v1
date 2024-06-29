export type Project = {
  id: number;
  title: string;
  cover_url: string;
  medias_url: Array<Media>;
  description: string;
  stacks: Array<Stack>;
  objectives: Array<Objective>;
  project_link: string;
  repo_link: string;
  slug: string;
};

export type Media = {
  id: number;
  url: string;
  projectId: number;
};

export type Stack = {
  id: number;
  name: string;
  projectId: number;
};

export type Objective = {
  id: number;
  name: string;
  projectId: number;
};
