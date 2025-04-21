const express = require('express')
const router = express.Router()
const Student = require('../model/modeldb')


router.get('/', async(req,res) => 
{
    try
    {
           const students = await Student.find()
           res.json(students)
    }
    catch(err)
    {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => 
{
    try
    {
           const students = await Student.findById(req.params.id)
           res.json(students)
    }

catch(err)
{
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => 
{
    const student = new Student
   ({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try
   {
        const students =  await student.save() 
        res.json(students)
    }
catch(err)
   {
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> 
{
    try
   {
        const students = await Student.findById(req.params.id) 
        students.sub = req.body.sub
        const a1 = await students.save()
        res.json(a1)   
    }
catch(err)
   {
        res.send('Error')
    }

})

module.exports = router
