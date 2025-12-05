export interface Exercise {
  id: string;
  title: string;
  description: string;
  starterCode: string;
  difficulty: 'easy' | 'medium' | 'hard';
  xpReward: number;
  hints: string[];
}

export interface Level {
  id: string;
  title: string;
  description: string;
  exercises: Exercise[];
}

export interface Skill {
  id: string;
  title: string;
  icon: string; // Lucide icon name
  description: string;
  color: string;
  levels: Level[];
}

export interface UserProgress {
  completedExercises: string[]; // IDs
  xp: number;
  streak: number;
  unlockedSkills: string[];
}

export enum AppView {
  DASHBOARD = 'DASHBOARD',
  SKILL_DETAILS = 'SKILL_DETAILS',
  EXERCISE = 'EXERCISE',
  CERTIFICATES = 'CERTIFICATES'
}

export interface NavigationState {
  view: AppView;
  activeSkillId?: string;
  activeLevelId?: string;
  activeExerciseId?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
