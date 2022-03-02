import React, { useEffect, useState } from "react";
import Article from "./components/Article";
import Comment from "./components/Comment";
import { data_article, data_comments } from "./data/data";
import LoadingSpinner from "./ui/LoadingSpinner";

export type CommentsType = {
  id: number;
  author: string;
  text: string;
  date: string;
};

export type ArticleType = {
  author: string;
  text: string;
  date: string;
};

const App: React.FC = () => {
  const [article, setArticle] = useState<ArticleType>({
    author: "",
    text: "",
    date: "",
  });
  const [comments, setComments] = useState<CommentsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
        setArticle(data_article);
        setComments(data_comments);
        //setMoreComments(data_moreComments);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <section className="section">
      <h1 className="title">Whys News!</h1>
      <div className="underline"></div>
      {error && <p className="error">{error}</p>}
      {loading && <LoadingSpinner />}
      {!loading && !error && (
        <React.Fragment>
          <Article article={article} />
          <Comment comments={comments} />
        </React.Fragment>
      )}
    </section>
  );
};

export default App;

/*
POZN. K FETCHOVANI DAT:
Pokud bych stahovala data z nejake databaze, postupovala bych takto:
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [myData, setMyData] = useState([]);

const fetchData = useCallback(async () => {
  setError(null);
  setLoading(true);
  try {
    const response = await fetch("url");
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    const loadedData = [];
    for (const key in data) {
      loadedData.push({ id: key, ...data[key] });
    }
    setMyData(loadedData);
  } catch (error) {
    setError(error.message);
  }
  setLoading(false);
}, []); // do callback dependencies bych nic nedavala, tato funkce se nemusi vubec recreatovat.

useEffect(() => {
  fetchData();
}, [fetchData]);

return ....
*/

/*
MISTO POUZITE VERZE V KODU TO JDE UDELAT JESTE JEDNODUSEJI:
  useEffect(() => {
    setLoading(true);
    setError(null);
    let x = 0; // simulace erroru.
    const timer = setTimeout(() => {
      if (x !== 0) {
        setLoading(false);
        setError("Something went wrong!");
        return;
      }
      setArticle(data_article);
      setComments(data_comments);
      setMoreComments(data_moreComments);
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
*/
