import Card from "../ui/Card";
import EditedDate from "../ui/EditedDate";
import classes from "./Article.module.css";
import { ArticleType } from "../App";

const Article: React.FC<{article:ArticleType}> = ({ article }) => {
  const { author, date, text } = article;

  return (
    <Card>
      <h3 className={classes.author}>{author}</h3>
      <EditedDate date={date}/>
      <div className={classes.text}>{text}</div>
    </Card>
  );
};

export default Article;
