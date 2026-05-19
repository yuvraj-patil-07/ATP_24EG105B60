//  we  mak  the  mini  application  for  regular  user  people  here
import exp from 'express'
import {ArticleModel} from '../models/ArticleModel.js'
import {UserModel} from '../models/UserModel.js'
import {verifyToken} from '../middlewares/verifyToken.js'
export const userApp = exp.Router()

import jwt from 'jsonwebtoken';
const { verify } = jwt;

//  dis  route  is  for  read  all  the  stories  from  all  authors (public)
userApp.get('/articles', async (req, res, next) => {
    try {
        const token = req.cookies?.token;
        if (token) {
            try {
                const decodedToken = verify(token, process.env.KEY);
                const user = await UserModel.findById(decodedToken.id);
                if (user && !user.isUserActive) {
                    return res.status(403).json({ message: "You are blocked from entering further pages" });
                }
            } catch (err) {
                // Ignore invalid tokens
            }
        }
        //  fetch  all  the  active  articles  from  the  word  pile
        const articlesList = await ArticleModel.find({ isArticleActive: true });
        //  yell  back  the  result  to  the  frontend
        res.status(200).json({ message: "All available Articles", payload: articlesList });
    } catch (err) {
        next(err);
    }
})

// Route to get single article by ID (public)
userApp.get('/article/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const token = req.cookies?.token;
        if (token) {
            try {
                const decodedToken = verify(token, process.env.KEY);
                const user = await UserModel.findById(decodedToken.id);
                if (user && !user.isUserActive) {
                    return res.status(403).json({ message: "You are blocked from entering further pages" });
                }
            } catch (err) {
                // Ignore invalid tokens
            }
        }
        const article = await ArticleModel.findOne({ _id: id, isArticleActive: true })
                                          .populate("comment.user");
        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }
        res.status(200).json({ message: "Article details", payload: article });
    } catch (err) {
        next(err);
    }
});

//  dis  route  is  for  add  a  new  comment  to  any  article
userApp.put('/articles',verifyToken("USER"),async(req,res)=>{
    //  get  the  request  body  data  which  have  id  and  comment  text
    console.log(req.body);
    const {articleId,comment}=req.body
    //  find   the  specific  article  using  its  id
    
    const articleDoc = await ArticleModel.findOne({_id:articleId,isArticleActive:true})
                            .populate("comment.user");
    //  if  article  is  missing  we  say  not  found
    if(!articleDoc){
        return res.status(404).json({message:"Article not found"})
    }
    //  get  the  user  id  who  is  currently  log  in
    const userId = req.user?.id;
    
    //  push  the  new  comment  into  the  article  comment  list
    articleDoc.comment.push({user:userId,comment:comment});

    //  save  the  update  article  back  to  mongo  database
    await articleDoc.save();
    //  yell  back  the  new  article  data
    res.status(200).json({message:"Comment added",payload:articleDoc})
})