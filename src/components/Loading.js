import { RotateLoader } from "react-spinners";
function Loading() {
    return (
        <RotateLoader style={{alignSelf:'center', width:'fit-content', margin:'auto', display:'block'}}/>
        // <div className="section-center">
        //     <div className="loading"></div>
        // </div>
    )
}
export default Loading;