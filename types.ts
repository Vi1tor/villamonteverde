
import React from 'react';

export interface InfoCard {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string | React.ReactNode;
  isImportant?: boolean;
}

export interface AppState {
  isDarkMode: boolean;
  showContent: boolean;
}
