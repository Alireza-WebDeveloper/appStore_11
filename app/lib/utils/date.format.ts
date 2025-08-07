const formatDateToEnglish = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
};

export const ConvertDateFormat = (myDate: string, language: string): string => {
  const date = new Date(myDate);

  let formattedDate: string;
  if (language === 'fa') {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      calendar: 'persian',
    };
    formattedDate = new Intl.DateTimeFormat(language, options).format(date);
  } else {
    formattedDate = formatDateToEnglish(date);
  }

  return formattedDate;
};
export const getRemainingTime = (expiresAt: string) => {
  const expiryDate = new Date(expiresAt);
  const now = new Date();
  const diffInSeconds = Math.floor(
    (expiryDate.getTime() - now.getTime()) / 1000
  );

  return Math.max(diffInSeconds, 0);
};
