import { mergeClasses, makeStyles, shorthands } from '@fluentui/react-make-styles';
import type { MenuListState } from './MenuList.types';

export const menuListClassName = 'fui-MenuList';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('2px'),
  },
});

/**
 * Apply styling to the Menu slots based on the state
 */
export const useMenuListStyles = (state: MenuListState): MenuListState => {
  const styles = useStyles();
  state.root.className = mergeClasses(menuListClassName, styles.root, state.root.className);
  return state;
};
