const express = require('express')
const router = express.Router()

const articleController = require('../controllers/article.controller')

router.get('/', articleController.getAllArticles)
router.post('/', articleController.createArticle)
router.delete('/', articleController.deleteAllArticles)

router.get('/:articleTitle', articleController.getOneArticle)
router.delete('/:articleTitle', articleController.deleteOneArticle)
router.patch('/:articleTitle', articleController.patchArticle)
router.put('/:articleTitle', articleController.putArticle)

module.exports = router