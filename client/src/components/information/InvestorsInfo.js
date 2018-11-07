import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import './css/Investors.css';

import tick from './img/tick.png';
import face from './img/face.png';
import stop from './img/stop.png';
import table_bg from './img/table_bg.png';
import hq1 from './img/hq1.png';
import hq2 from './img/hq2.png';
import hq3 from './img/hq3.png';
import hq4 from './img/hq4.png';
import hq5 from './img/hq5.png';
import hq6 from './img/hq6.png';
import hq7 from './img/hq7.png';
import arrow from './img/arrow.png';
import Navbar from '../landing-page/Navbar'

class InvestorsInfo extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <h1 className="display-3 mb-4 text-center"></h1>

                <div className="container">
                    <div className="row">

                        <div><h2>DEGRON</h2></div>
                        <div className="div1"><p className="p1">Accredited Individual InvestorsInfo</p></div>
                        <div className="div1"><p className="p1">Wealth Managers</p></div>
                        <div className="div1"><p className="p1">Family Offices</p></div>
                        <div className="div1"><p className="p1">Venture Funds</p></div>
                        <div className="div1"><p className="p1">Crypto Currencies Holders</p></div>

                    </div>
                    <hr/>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                            <br/>
                            <br/>
                            <br/>

                             <h3>Drawbacks of Existing Investment Solutions<br/><br/></h3>
                            </div>
                         <br/>
                         <br/>
                         <br/>
                         <br/>
                        </div>
                    </div>
                </div>



                <table className="display-3 mb-4 text-center">
                <tr className="table1" style={{backgroundColor:'white', padding:'0', border:'10px'}}>
                        <td className="x2"></td>
                        <td className="x1">Direct Investments</td>
                        <td className="x1">Public REITs</td>
                        <td className="x1">Private REITs</td>
                        <td className="x1">Crowd-funding (fiat)</td>
                </tr>

                    <tr>
                        <td >Returns</td>
                        <td ><img src={tick}/></td>
                        <td><img src={face}/></td>
                        <td><img src={tick}/></td>
                        <td><img src={tick}/></td>
                    </tr>
                    <tr>
                        <td>Entrance barrier</td>
                        <td><img src={stop}/></td>
                        <td><img src={tick}/></td>
                        <td><img src={face}/></td>
                        <td><img src={tick}/></td>
                    </tr>
                    <tr>
                        <td>Liquidity</td>
                        <td><img src={face}/></td>
                        <td><img src={tick}/></td>
                        <td><img src={stop}/></td>
                        <td><img src={stop}/></td>
                    </tr>
                    <tr>
                        <td>Diversification</td>
                        <td><img src={stop}/></td>
                        <td><img src={face}/></td>
                        <td><img src={face}/></td>
                        <td><img src={tick}/></td>
                    </tr>
                    <tr>
                        <td>Access to booming markets</td>
                        <td><img src={face}/></td>
                        <td><img src={face}/></td>
                        <td><img src={stop}/></td>
                        <td><img src={stop}/></td>
                    </tr>
                    <tr>
                        <td>Access to information</td>
                        <td><img src={face}/></td>
                        <td><img src={tick}/></td>
                        <td><img src={face}/></td>
                        <td><img src={tick}/></td>
                    </tr>
                    <tr>
                        <td>Risks</td>
                        <td><img src={tick}/></td>
                        <td><img src={tick}/></td>
                        <td><img src={face}/></td>
                        <td><img src={stop}/></td>
                    </tr>
                    <tr>
                        <td>Middleman fees</td>
                        <td><img src={stop}/></td>
                        <td><img src={stop}/></td>
                        <td><img src={face}/></td>
                        <td><img src={tick}/></td>
                    </tr>
                    <tr>
                        <td>Easy transaction process</td>
                        <td><img src={face}/></td>
                        <td><img src={tick}/></td>
                        <td><img src={tick}/></td>
                        <td><img src={tick}/></td>
                    </tr>
                </table>
            <hr/>


            <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div ><img src={hq7}/></div>
                        </div>

                         <div className="col text-center">
                            <div ><img src={arrow}/><p>Lower entrance barrier for retail investors to private real estate market</p></div>
                        </div>
                        <div className="col text-center">
                            <div ><img src={arrow}/><p>High liquidity of everitokens</p></div>
                        </div>
                        <div className="col text-center">
                            <div ><img src={arrow}/><p>Easy and efficient portfolio diversification (in terms of geography and asset type)</p></div>
                        </div>
                        <div className="col text-center">
                            <div ><img src={arrow}/><p>Opportunity to invest in Core / Core+ assets, which were unavailable for retail investors before</p></div>
                        </div>
                        <br/>

                    </div>
            </div>

            <div className="container">
                    <div className="row">


                         <div className="col text-center">
                            <div ><img src={arrow}/><p className="textalign">Wealth managers and family offices  meet the millennials'’ demand for innovative ways of investing</p></div>
                        </div>
                        <div className="col text-center">
                            <div ><img src={arrow}/><p className="textalign">Crypto currencies holders can diversify their portfolios with asset backed tokens</p></div>
                        </div>
                        <div className="col text-center">
                            <div ><img src={arrow}/><p className="textalign">Lower middleman fees</p></div>
                        </div>
                        <div className="col text-center">
                            <div ><img src={arrow}/><p className="textalign">Easy and quick investment process</p></div>
                        </div>
                        <br/>

                    </div>
            </div>


            </div>
        );
    }
}

InvestorsInfo.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(InvestorsInfo);
