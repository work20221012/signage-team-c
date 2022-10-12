const NewsItem = (props) => {
    const title = props.article.title;
    const description = props.article.description;
    const urlToImage = props.article.urlToImage;
    return (
        <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4" >
            <img src={urlToImage}  className="img-fluid round-start" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
            </div>
          </div>
          </div>
          </div>         
    );
   }
   
   export default NewsItem;