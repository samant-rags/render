import { useState } from "react";
import axios from "axios";

export function FetchNews() {
  const [newsObj, setNewsObj] = useState<any[]>([]);

  const fetchDataList = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=20&sortBy=publishedAt&apiKey=dda9891c000047da9445252bf7c39884"
      )
      .then((response) => {
        console.log(response.data.articles);
        setNewsObj(response.data.articles);
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <small>
      <button className="btn btn-primary" onClick={fetchDataList}>
        FetchData ..
      </button>

      <div className="container">
        <div className="row">
          {newsObj.map((value, index) => {
            return (
              <div key={index} className="col-12">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    height="80"
                    width="100"
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href="#" className="btn btn-primary">
                      Main
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </small>
  );
}
