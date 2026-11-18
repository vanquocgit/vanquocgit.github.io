import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

export interface CvSkillGroup {
  group: string;
  items: string[];
}

export interface CvExperience {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface CvProject {
  name: string;
  url: string;
  description: string;
}

export interface CvEducation {
  school: string;
  degree: string;
  period: string;
}

export interface CvData {
  name: string;
  role: string;
  location: string;
  email: string;
  website: string;
  github: string;
  linkedin: string;
  summary: string;
  skills: CvSkillGroup[];
  experience: CvExperience[];
  projects: CvProject[];
  education: CvEducation[];
  languages: string[];
}

export function loadCvData(): CvData {
  const filePath = path.resolve(process.cwd(), 'src/data/cv.yaml');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return yaml.load(raw) as CvData;
}
