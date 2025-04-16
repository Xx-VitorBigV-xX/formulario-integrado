


import express from "express";
import dotenv from 'dotenv';
import path from "path";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'..','public')));


app.get('/public', (req,res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'formulario.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
