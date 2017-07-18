import Indexheader from "../../components/indexheader"
import Indexfooter from "../../components/indexfooter"
import Now from "./now";
import Hourly from "./hourly";
import "./index.less";
import Day from "./day";
import Xianginfo from "./xianginfo";
import Air from "./air";
import Life from "./life";
import $ from "../../router/jquery";
class Index extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           city:"",
           data:"",
           daily:"",
           hourly:"",
           air:"",
           life:""
       }
   }
    render(){
        console.log(this.props.daily)
        return (
            <div className="one-contain">
                <Indexheader left="<" center="西安" right="+" link="/cityedit"/>
                  <div className="content-box">
                      <Now data={this.state.data.now||this.props.data.now} wd={this.state.wd||this.props.daily.daily_forecast[0].tmp}/>
                      <Hourly data={this.state.hourly||this.props.hourly} />
                      <Day data={this.state.data||this.props.data}/>
                      <Xianginfo data={this.state.data||this.props.data}/>
                      <Air data={this.state.air||this.props.air}/>
                      <Life data={this.state.life||this.props.life} />
                  </div>
                <Indexfooter/>
            </div>
        )
    }

    newcity(city){
        var that = this;
        $.ajax({
            type: "get",
            url: `https://free-api.heweather.com/v5/weather?city=${city}&key=e53fc942fd424f3ba52a8e5ecc4b721c
`,
            cache:false,
            async:false,
            success: function(data){
                that.setState({
                    data:data.HeWeather5[0],
                    daily:data.HeWeather5[0],
                    hourly:data.HeWeather5[0].hourly_forecast,
                    air:data.HeWeather5[0].aqi,
                    life:data.HeWeather5[0]['suggestion'],
                    wd:30
                })
            }
        });
    }
}
export default Index;