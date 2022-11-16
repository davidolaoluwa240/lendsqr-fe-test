/**
 * Human Readable Date Formatter
 * @param date Date to format
 * @param locale Country locale (default: en-US)
 * @param formatOption Intl format options
 * @example
 * dateFormat("2072-12-27T03:44:22.522Z", "en-US")
 * dateFormat("2072-12-27T03:44:22.522Z", "en-US", formatOption)
 */
const dateFormat = (
  date: string | Date,
  locale: string = "en-US",
  formatOption: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }
): string => {
  return new Intl.DateTimeFormat(locale, formatOption).format(new Date(date));
};

export default dateFormat;
