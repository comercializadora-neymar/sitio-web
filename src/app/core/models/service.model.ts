import { ICON_PATHS } from '../../shared/icons/icon-paths';

export interface Service {
  icon: keyof typeof ICON_PATHS;
  title: string;
  description: string;
  theme: {
    containerBorder: string;
    containerShadow: string;
    iconBg: string;
    iconColor: string;
  };
}
