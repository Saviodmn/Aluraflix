import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import PageBase from './pages/PageBase';
import Page404 from "./pages/Page404";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageBase/>}>
                    <Route index element ={<Home/>}/>
                    <Route path="novoVideo" element={<NewVideo/>}/>
                    <Route path="*" element={<Page404/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;