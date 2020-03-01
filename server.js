const express=require('express');
const app=express();
const port=process.env.PORT||4100;
app.use(express.json());


const students=[
    {id:1,name:'Sania',section:'B'},
    {id:2,name:'Saba',section:'B'},
    {id:3,name:'Rashna',section:'B'},

];
const teachers=[
    {id:1,name:'Abdullah',Department:'CS'},
    {id:1,name:'Ali Ahmed',Department:'BA'},
    {id:1,name:'Saeed',Department:'CS'},

];
app.get('/',(req,res)=>{
    res.send('Working!!!');


});
//Get Students
app.get('/api/students',(req,res)=>{
    res.send(students);

});
//get teachers
app.get('/api/teachers',(req,res)=>{
    res.send(teachers);

});
//add new student
app.post('/api/students/',(req,res)=>
{
    const student={
        id:students.length+1,
        name:req.body.name
    };
    students.push(student);
    res.send(student);
});
//updating student name
app.put('/api/students/:id',(req,res)=>
{
    const student= students.find(s=>s.id===parseInt(req.params.id));
    if(!student) req.starus(404).send("ID not found");
    student.name=req.body.name;
    const index= students.indexOf(student);
    students.splice(index,1);
    students.push(student);
    res.send(student);
});
app.delete('/api/students/:id',(req,res)=>
{
    const student= students.find(s=>s.id===parseInt(req.params.id));
    if(!student) req.starus(404).send("ID not found");
    const index=students.indexof(student);
    students.splice(index,1);
     res.send(student);
});
app.listen(port, () => console.log('working on port ' + port));