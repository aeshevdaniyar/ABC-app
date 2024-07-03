import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { FC } from "react";
import { ru } from "date-fns/locale";
export interface DatePickerProps {
  value?: Date;
  onChange: () => void;
}
export const DatePicker: FC<DatePickerProps> = (props) => {
  const { onChange, value } = props;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] pl-3 text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          {value ? (
            format(value, "PPP", {
              locale: ru,
            })
          ) : (
            <span>Выберите дату</span>
          )}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          numberOfMonths={2}
          locale={ru}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};