const express= require("express");
const app = express();
const port= 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.set("views", path.join( __dirname, "views"));

app.use(express.static(path.join( __dirname, "public")));

let posts=[{
    username:"Ayush",
    content:"I love java"
},{
    username:"Dhruv",
    content:"one piece is the best anime"
},{
    username:"Ravince",
    content:"Seedhemaut back in the game"
}];

app.get("/posts", (req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res) =>{
    res.render("new.ejs");
});
app.post("/posts",(req,res)=> {
    let {username, content}= req.body;
    posts.push({username, content});
    res.send("post request working!");
} )
app.listen(port, ()=> {
    console.log("listening to port : 8080");
});

app.patch("/posts/:id", (req, res)=> {
    let{id}= req.params;
    let newContent = req.body.content;
    let post = post.find((p) => id === p.id);
    post.content = newContent;
    res.send("patch req is working");
    
    console.log(newContent);
    console.log(id);
    res.send("patch request working");

})