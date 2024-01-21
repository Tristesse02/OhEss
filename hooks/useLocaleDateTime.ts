import nextConfig from 'next.config';
import { useTheme } from 'styled-components';

interface LocaleTimeDate {
  date: string;
  time: string;
  dateTime: string;
}

const useLocaleDateTime = (now: Date): LocaleTimeDate => {
  const locale = nextConfig?.i18n?.defaultLocale ?? 'en-US';
  const { formats } = useTheme();

  return {
    date: new Intl.DateTimeFormat(locale, formats.date).format(now),
    time: new Intl.DateTimeFormat(locale, formats.time).format(now),
    dateTime: now.toISOString()
  };
};

export default useLocaleDateTime;
