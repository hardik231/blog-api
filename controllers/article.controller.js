const Article = require('../models/article.model')


exports.getAllArticles = (req, res) => {
    Article.find(function(err, articles){
      if (articles) {
        const jsonArticles = JSON.stringify(articles);
        res.send(articles);
      } else {
        res.send("No articles currently available.");
      }
    });
}


exports.createArticle =  (req, res) => {
  
    const article = new Article({
      title: req.body.title,
      content: req.body.content
  })
  
  article.save((err, post) => {
      if(!post)
          res.status(400).send("could not create post")
      else
          res.status(200).send(post)
  })
}

  


exports.deleteAllArticles =  (req, res) => {

    Article.deleteMany(function(err){
      if (!err){
        res.send("Successfully deleted all the articles in wikiDB.");
      } else {
        res.send(err);
      }
    });
  
}
  

  
exports.getOneArticle =  (req, res) => {
    const articleTitle = req.params.articleTitle;
    Article.findOne({title: articleTitle}, (err, article) => {
      if (article){
        const jsonArticle = JSON.stringify(article);
        res.send(jsonArticle);
      } else {
        res.send("No article with that title found.");
      }
    });
};
  
exports.patchArticle = (req, res) => {
    const articleTitle = req.params.articleTitle;
    Article.updateOne(
      {title: articleTitle},
      {content: req.body.newContent},
      err => {
        if (!err){
          res.send("Successfully updated selected article.");
        } else {
          res.send(err);
        }
      });
}
  
exports.putArticle = (req, res) => {
    const articleTitle = req.params.articleTitle;

    Article.updateOne(
      {title: articleTitle},
      {content: req.body.newContent},
      {overwrite: true},
      (err) => {
        if (!err){
          res.send("Successfully updated the content of the selected article.");
        } else {
          res.send(err);
        }
      });
 };

exports.deleteOneArticle = (req, res) => {
    const articleTitle = req.params.articleTitle;
    Article.findOneAndDelete({title: articleTitle}, (err) => {
      if (!err){
        res.send("Successfully deleted selected article.");
      } else {
        res.send(err);
      }
    });
};
  
  