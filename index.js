const express = require('express');
const app = express();
// const Request = require('request')

app.use(express.json())

const courses = [
    { id:1, name:'course1'},
    { id:2, name:'course2'},
    { id:3, name:'course3'},
]

// const doc = document.querySelector('url')

// const myreq = new Request('http://202.191.196.210/UAT/CCPGISUBSCRIBER/SubscriberResponse.aspx')
// fetch(myreq).then((response)=>{
//     console.log(response.url);
//     response.blob().then((myBlob)=>{
//         const objectURL = URL.createObjectURL(myBlob);
//         doc.src = objectURL;
//     });
// });

app.get('/',(req,res)=>{
    res.send({"Name":"Harshit","DOB":"20/07/2001","Task":"Py"})
});

app.get('/api/new',(req,res)=>{
    res.send([1,2,3]);
})

app.get('/api/new/:id',(req,res)=>{
    res.send(req.params.id)
})

app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

app.get('/api/courses',(req,res)=>{
    const course={
        id: courses.length+1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
})

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("Not a valid id")
    res.send(course)
})

app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.params)
})


const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port}...`));
