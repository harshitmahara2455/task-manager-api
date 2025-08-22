const {body ,validationResult} = require('express-validator')

//validation rules 
const validateTaskCreate =[
    body('title')
    .exists().withMessage('Title is required ')
    .bail()
    .isString().withMessage('Title must br a string ')
    .notEmpty().withMessage('Title can not be empty')
    .bail()
    .isLength({max:100}).withMessage('Title must be at most 100 charcters '),

    body('description')
    .optional()
    .isString().withMessage('Description must be string ')
    .bail()
    .isLength({max:500}).withMessage('Description must be at most 500 character'),


    body('status')
    .optional()
    .isIn(['pending','completed']).withMessage('Status must be either pending or complete '),



    body('priority')
    .optional()
    .isIn(['low','medium','high']).withMessage('Priority must be low ,medium or high ')


 


]; 

const validateTaskUpdate =[
     body('title')
    .optional()
    .isString().withMessage('Title must be a string')
    .bail()
    .notEmpty().withMessage('Title cannot be empty')
    .bail()
    .isLength({ max: 100 }).withMessage('Title must be at most 100 characters'),

  body('description')
    .optional()
    .isString().withMessage('Description must be a string')
    .bail()
    .isLength({ max: 500 }).withMessage('Description must be at most 500 characters'),

  body('status')
    .optional()
    .isIn(['pending', 'completed']).withMessage('Status must be either pending or completed'),

  body('priority')
    .optional()
    .isIn(['low', 'medium', 'high']).withMessage('Priority must be low, medium, or high')


]



module.exports ={validateTaskCreate,validateTaskUpdate}