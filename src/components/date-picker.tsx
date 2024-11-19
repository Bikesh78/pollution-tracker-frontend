import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const formatDate = (date: [Date | null, Date | null]) => {
  return date?.map((item) =>
    item
      ? item?.toLocaleString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      : null,
  );
};

export const DateRangePicker = ({
  dateRange,
  setDateRange,
}: {
  dateRange: any[];
  setDateRange: any;
}) => {
  const [startDate, endDate] = dateRange;

  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      placeholderText="Select Date"
      onChange={(update) => {
        setDateRange(update[0] && update[1] ? formatDate(update) : update);
      }}
      withPortal
    />
  );
};
