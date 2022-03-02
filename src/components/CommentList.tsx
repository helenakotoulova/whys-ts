import classes from "./CommentList.module.css";
import EditedDate from "../ui/EditedDate";

import { CommentsType } from "../App";

const sortComments = (comments:CommentsType[]) => {
  return comments.sort((comment1:CommentsType, comment2:CommentsType) => {
    const date1 = new Date(comment1.date);
    const date2 = new Date(comment2.date);
    return date1.getTime() - date2.getTime();
  });
};

const CommentList: React.FC<{comments:CommentsType[]}> = ({ comments }) => {
  const sortedComments = sortComments(comments);
  return (
    <ul className={`${classes.list} ${classes.moreComments}`}>
      {sortedComments.map((comment:CommentsType, commentIndex:number) => (
        <li
          key={comment.id}
          className={`${classes["list-item"]} ${
            ((commentIndex + 1) % 2) === 0 ? classes.end : ""
          }`}
        >
          <h4 className={classes.author}>
            {comment.author}:{" "}
            <span className={classes.text}>{comment.text}</span>
          </h4>
          <EditedDate date={comment.date} className={classes.date} />
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
