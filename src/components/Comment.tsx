import { useEffect, useState } from "react";
import Card from "../ui/Card";
import classes from "./Comment.module.css";
import CommentList from "./CommentList";
import { data_moreComments } from "../data/data";
import LoadingSpinner from "../ui/LoadingSpinner";

import { CommentsType } from "../App";

let initial = true;

const Comment: React.FC<{ comments: CommentsType[] }> = ({ comments }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [special, setSpecial] = useState<boolean>(false);
  const [moreComments, setMoreComments] = useState<CommentsType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const clickHandler = () => {
    setShowMore((prevState) => !prevState);
  };

  const mouseOverHandler = () => {
    setSpecial(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpecial(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [special]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    if (moreComments.length !== 0) {
      return;
    }
    setLoading(true);
    setError(null);
    let x = 0; // simulace erroru => kdyz dame let x=1, tak se vyrenderuje chybova hlaska.
    const promise = new Promise((resolve, reject) => {
      if (x !== 0) {
        setLoading(false);
        reject("Something went wrong!");
      } else {
        setTimeout(resolve, 1000);
      }
    });
    promise
      .then(() => {
        setMoreComments(data_moreComments);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, [showMore, moreComments]);

  return (
    <Card>
      <h4 className={classes.title}>Comments Section</h4>
      <CommentList comments={comments} />
      {error && <p className="error">{error}</p>}
      {showMore && loading && <LoadingSpinner />}
      {showMore && !loading && !error && (
        <CommentList comments={moreComments} />
      )}
      {!loading && (
        <button
          onClick={clickHandler}
          onMouseOver={mouseOverHandler}
          className={`${classes.button} ${
            special && !showMore ? classes.special : ""
          } `}
        >{`${showMore ? "Show less comments" : "Show more comments!"}`}</button>
      )}
    </Card>
  );
};

export default Comment;
