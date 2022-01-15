const express = require('express');
const router = express.Router();
const Question = require('../models/questionSchema');
const expressAsyncHandler = require('express-async-handler');


//ROUTE 1  GET ALL QUESTIONS 
router.get('/fetchallquestions',expressAsyncHandler(async (req, res) => {
    try {
        const question = await Question.find()
        res.status(200).json({
            success:true,
            count: question.length,
            question
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
}))

// ROUTE 2 GET SINGLE QUESTION
router.get('/:id', expressAsyncHandler(async (req, res, next) => {
    try {
        const question = await Question.findById(req.params.id);
        res.status(200).json({
            success: true,
            question
        })   
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
}))

//  ROUTE 3 CREAT QUESTION
router.post('/createquestion', expressAsyncHandler(async (req, res , next) => {
    try {
        const question = await Question.create(req.body);
        res.status(201).json({
            success: true,
            question
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
}))

// ROUTE 4 DELETE  PRODUCT
router.delete('/deletequestion/:id', expressAsyncHandler(async (req, res, next) => {
    try {
        const product = await Question.findById(req.params.id);
        await product.remove();
        res.status(200).json({
            success: true,
            message: "Product is deleted."
        })
        
    } catch (error) {
     console.error(error.message);
     res.status(500).send("Some error occured")
    }
 }))
 
 // ADMIN_UPDATE PRODUCT
 router.put('/questionedit/:id', expressAsyncHandler(async (req, res) => {
     try {
         const product = await Question.findByIdAndUpdate(req.params.id, req.body, {
             new: true,
             runValidators: true,
             useFindAndModify: false
         });
         if (product) {
             res.json({
                 success: true,
                 product
             });
         } else {
             res.status(404).send({ message: "Product not found" })
         }
     } catch (error) {
         console.error(error.message);
         res.status(500).send("Some error occured")
     }
   
 }))

module.exports = router ;
