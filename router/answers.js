const express = require('express');
const router = express.Router();
const Answer = require('../models/answerSchema')
const expressAsyncHandler = require('express-async-handler');


//ROUTE 1  GET ALL QUESTIONS 
router.get('/fetchallanswers',expressAsyncHandler(async (req, res) => {
    try {
        const answer = await Answer.find()
        res.status(200).json({
            success:true,
            count: answer.length,
            answer
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
}))

// ROUTE 2 GET SINGLE QUESTION
router.get('/:id', expressAsyncHandler(async (req, res, next) => {
    try {
        const answer = await Answer.findById(req.params.id);
        res.status(200).json({
            success: true,
            answer
        })   
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
}))

//  ROUTE 3 CREAT QUESTION
router.post('/createanswer', expressAsyncHandler(async (req, res , next) => {
    try {
        const answer = await Answer.create(req.body);
        res.status(201).json({
            success: true,
            answer
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
}))

// ROUTE 4 DELETE  PRODUCT
router.delete('/deleteanswer/:id', expressAsyncHandler(async (req, res, next) => {
    try {
        const answer = await Answer.findById(req.params.id);
        await answer.remove();
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
 router.put('/answeredit/:id', expressAsyncHandler(async (req, res) => {
     try {
         const answer = await Answer.findByIdAndUpdate(req.params.id, req.body, {
             new: true,
             runValidators: true,
             useFindAndModify: false
         });
         if (answer) {
             res.json({
                 success: true,
                 answer
             });
         } else {
             res.status(404).send({ message: "answer not found" })
         }
     } catch (error) {
         console.error(error.message);
         res.status(500).send("Some error occured")
     }
   
 }))

module.exports = router ;
