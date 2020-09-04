import { NativeModules } from 'react-native';

const changeIcon = (iconName: string): Promise<string| null |undefined> =>
  NativeModules.ChangeIcon.changeIcon(iconName);
const getCurrentIcon = (): Promise<string| null |undefined> => NativeModules.ChangeIcon.getCurrentIcon();

export { changeIcon, getCurrentIcon };
