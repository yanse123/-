require("./index.less")
class Position extends React.Component{
    render(){
        return (
            <div className="pos-box">
                <div className="position-auto">
                    <div className="left">
                        <div className="icon" ref="citynow"><img src={require(`../../static/images/${this.props.data.now.cond.code}.png`)} alt=""/></div>
                        <div className="cityname" ref="citynow2">{this.props.data.basic.city}</div>
                        <div className="citypos" ref="citypos">自动定位</div>
                    </div>
                    <div className="right">
                        <div className="pos-icon" ref="icon" style={{display:this.props.pid}}><img src={require(`../../static/images/pos.png`)} alt=""/></div>
                        <div className="pos-btn" ref="btn" style={{display:this.props.pbd}}>
                            <span className="circle" onClick={this.posCircle.bind(this)}></span>
                        </div>
                        <div className="crumbs" style={{display:this.props.cid}} onClick={this.showCity}>
                            <img src={require(`../../static/images/crumbs.png`)} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    posCircle(e){
        if(e.target.style.right=="0px"||e.target.style.right==0){
            e.target.style.right="0.36rem";
            this.refs.btn.style.background="#bbb";
            this.refs.icon.style.left="0.7rem";
            this.refs.citynow.style.display="none";
            this.refs.citynow2.style.display="none";
            this.refs.citypos.style.display="block"
        }else{
            e.target.style.right="0px";
            this.refs.btn.style.background="";
            this.refs.icon.style.right="1.2rem";
            this.refs.icon.style.left="";
            this.refs.citynow.style.display="block";
            this.refs.citynow2.style.display="block";
            this.refs.citypos.style.display="none"
        }
        console.log(this.refs.citynow.style)
    }
    showCity(e){

    }
}
export default Position;