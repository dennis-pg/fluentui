import { ITooltipStyles, ITooltipStyleProps } from 'office-ui-fabric-react';
import { IExtendedSemanticColors } from '../IExtendedSemanticColors';

export const TooltipStyles = (props: ITooltipStyleProps): Partial<ITooltipStyles> => {
  const { theme } = props;
  const { semanticColors } = theme;
  const extendedSemanticColors = semanticColors as IExtendedSemanticColors;

  return {
    root: {
      maxWidth: '480px',
      padding: '0',
    },
    content: {
      backgroundColor: extendedSemanticColors.controlBackground,
      padding: 8,
    },
  };
};
