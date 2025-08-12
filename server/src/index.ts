import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helment from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import dashboardRoutes from "./routes/dashboardRoutes"
import productRoutes from "./routes/productRoutes"
import userRoutes from "./routes/userRoutes"
import expenseRoute from "./routes/expenseRoute"

const app = express();
app.use(express.json());
app.use(helment());
app.use(morgan("common"));
app.use(helment.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

/*ROUTS IMPORT*/ 
app.use("/dashboard",dashboardRoutes)
app.use("/products",productRoutes)
app.use("/users",userRoutes)
app.use('/expenses',expenseRoute)
dotenv.config()

const port =Number(process.env.PORT) || 3001;
app.listen(port,"0.0.0.0",()=>{
    console.log(`server running on port ${port}`);
    
})