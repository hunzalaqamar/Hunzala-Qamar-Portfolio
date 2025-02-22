export interface Project {
  title: string;
  description: string;
  image: string;
  url?: string;
  technologies: string[];
}
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  image?: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
  isBigImage?: Boolean;
}
