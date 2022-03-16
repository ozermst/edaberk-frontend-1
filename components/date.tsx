import { parseISO, format } from "date-fns";
import { tr } from "date-fns/locale";

interface DateProps {
  dateString: string;
  dateFormat: string;
}

export default function Date({ dateString, dateFormat }: DateProps) {
  const date = parseISO(dateString);

  return (
    <>
      {dateString ? (
        <time dateTime={dateString}>
          {format(date, dateFormat, { locale: tr })}
        </time>
      ) : (
        <span>Halen</span>
      )}
    </>
    /*     <time dateTime={dateString}>
      {format(date, "LLLL	d, yyyy", { locale: tr })}
    </time> */
  );
}
