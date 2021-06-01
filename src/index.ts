import express from "express";
const app = express();
const add = (a: number, b?: number) => {
    if (b) {
      return a + b;  
    }
    else {
        return a + 0;
    }
    
}
app.get('/', (req:any ) => {
    req.name = 'bob';
    
})
app.listen(3001, () => {
    add(1);
});