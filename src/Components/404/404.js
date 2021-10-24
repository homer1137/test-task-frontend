import './404.css';
import { Link } from "react-router-dom";

const Page404 =() => {
    return(
        <>
        <div class="mainbox">
    <div class="err">
    4
    </div>
    <div class="far">0</div>
    <div class="err2">4</div>
    <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go 
     <span><Link to='/'> home</Link></span> and try from there.</p></div>
    </div>
        </>
        
    )
};

export default Page404;