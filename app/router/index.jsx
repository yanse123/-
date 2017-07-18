import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Index from "../containers/index"
import $ from "./jquery";
import Cityedit from "../containers/cityedit";
import Citylist from "../containers/citylist";
class Routers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            flag:false
        }
    };
    render(){
        return (
            <Router>
                <div className="one-contain">
                    <Route path="/" exact render={()=><Index {...this.state} />} />
                    <Route path="/cityedit" render={()=><Cityedit {...this.state} />} />
                    <Route path="/citylist" render={()=><Citylist {...this.state}  changeCityFn={this.changeCity.bind(this)} />} />
                </div>
            </Router>
        )
    }
    changeCity(data){
        this.setState({
            city:data,
            flag:true
        })
    }
    componentWillMount(){
        var that = this;
        $.ajax({
            type: "get",
            url: "https://free-api.heweather.com/v5/weather?city=xian&key=e53fc942fd424f3ba52a8e5ecc4b721c",
            cache:false,
            async:false,
            success: function(data){
                that.setState({
                    data:data.HeWeather5[1],
                    daily:data.HeWeather5[1],
                    hourly:data.HeWeather5[1].hourly_forecast,
                    air:data.HeWeather5[1].aqi,
                    life:data.HeWeather5[1]['suggestion']
                })
            }
        });
    }

}
export default Routers;

