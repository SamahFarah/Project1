import connectDB from "../DB/connection.js";
import authRouter from "./modules/auth/auth.router.js";
import userRouter from "./modules/users/users.router.js"
import productRouter from "./modules/products/products.router.js"

const initApp = (app,express)=>{
    connectDB();
    app.use(express.json());
    app.use('/auth',authRouter);
    app.use('/users',userRouter);
    app.use('/products',productRouter);
}
export default initApp;