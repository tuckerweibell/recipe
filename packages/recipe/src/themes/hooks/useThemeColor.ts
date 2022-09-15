import {useTheme} from '@mui/material';

export const useThemeColor = (color: string): string => {
  const theme = useTheme();
  const isCommonColor = color?.startsWith('common.');
  return isCommonColor ? theme.palette.common[color.split('.')[1]] : theme.palette[color].main;
};
