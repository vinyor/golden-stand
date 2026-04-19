import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const CustomTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#FFFFFF',
      100: '#FFF0C2',
      200: '#FFE16D',
      300: '#E9C400',
      400: '#C9A900',
      500: '#AA8F00',
      600: '#705D00',
      700: '#544600',
      800: '#3A3000',
      900: '#221B00',
      950: '#000000',
    },
    colorScheme: {
      light: {
        formField: {
          borderColor: '{primary.color}',
          color: '{primary.color}',
        }
      }
    }
  },
  components: {
    select: {
      option: {
        focusColor: '{primary.color}',
      },
      checkmark: {
        color: '{primary.color}',
      },
      dropdown: {
        color: '{primary.color}',
      },
    }
  }
});

export { CustomTheme };
