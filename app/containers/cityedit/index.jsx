require("./index.less")
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Indexheader from "../../components/indexheader";
import Position from "../../components/position";
class Citylist extends React.Component{
    render(){
        return (
            <div className="city-bg">
               <div className="city-edit">
                   <Indexheader left="<" center="城市管理" right="+" link="/citylist"/>
                   <Position data={this.props.data} pid="block" pbd="block" cid="none"/>
                   <Position data={this.props.data} pid="none" pbd="none" cid="block"/>
                   <Position data={this.props.data} pid="none" pbd="none" cid="block"/>
                   <div className="add-city"><Link to="/citylist">添加城市</Link></div>
               </div>
            </div>
        )
    }
}
export default Citylist;