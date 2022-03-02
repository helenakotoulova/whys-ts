import classes from "./EditedDate.module.css";

const EditedDate: React.FC<{ date: string; className?: string }> = ({
  date,
  className,
}) => {
  const newDate = new Date(date);

  const editedDate = newDate.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const editedTime = newDate.toLocaleTimeString("en-GB");
  const editedDateTime = editedDate + ", " + editedTime;

  return (
    <p className={`${classes.date} ${className ? className : ""}`}>
      {editedDateTime}
    </p>
  );
};

export default EditedDate;

/*
const month = newDate.toLocaleString("en-US", { month: "long" });
  const day = newDate.toLocaleString("en-US", { day: "2-digit" });
  const year = newDate.getFullYear();
  const hours = newDate.getHours();
  const minutes = newDate.getUTCMinutes();
  const editedDate = `${month} ${day}, ${year} ${hours}:${minutes}`;
*/
