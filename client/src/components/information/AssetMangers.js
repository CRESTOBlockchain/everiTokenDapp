import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import './css/Asset-Manger.css';
import  secure  from  './img/secure.jpg';
import  commerical  from  './img/commerical.jpg';

class AssetMangers extends Component {

    render() {
        return (

            <div className="container">

                <div className="row">

                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">

                        <nav className="navbar navbar-light bg-light AMbg-light AMnavbar-light">
  <span className=" navbar-text AMnavbar-text">

   STO for Real Estate Asset Managers and Owners
                                 Our Base Principles
  </span>
                        </nav>
                    </div>
                    <div className="col-sm-2"></div>
                </div>

                <div className="row custom-card-body AMcustom-card-body">
                    <div className="col-sm-3">

                        <div className="card">
                            <div className="card-body AMcard-body">

                                <p className="card-text">Seamless integration with existing financial processes
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">

                        <div className="card">
                            <div className="card-body AMcard-body">

                                <p className="card-text">STO underlying principles comply with regulations on traditional securities market
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">

                        <div className="card">
                            <div className="card-body AMcard-body">

                                <p className="card-text">Active cooperation with relevant financial and legal authorities in order to boost development of STO regulations

                                </p>
                            </div>
                        </div>
                    </div>



                    <div className="col-sm-3">

                        <div className="card">
                            <div className="card-body AMcard-body">


                                <p className="card-text">STechnology is there to serve existing business models on real estate market, not to disrupt them
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <hr/>


                <div className="rectangleBar AMrectangleBar">


                    <div className="row">

                        <div className="col-sm-2">
                            <div className="rectangle AMrectangle">
                                Asset Managers / Owners
                            </div>

                        </div>

                        <div className="col-sm-2">
                            <div className="oval AMoval">
                                <p className="ovalparagraph"> Private REITs </p>

                            </div>
                        </div>


                        <div className="col-sm-2">
                            <div className="oval AMoval">
                                <p className="ovalparagraph">Private Equity </p>
                            </div>
                        </div>

                        <div className="col-sm-2">
                            <div className="oval AMoval">
                                <p className="ovalparagraph">Developers </p>

                            </div>
                        </div>

                        <div className="col-sm-2">
                            <div className="oval AMoval">
                                <p className="ovalparagraph"> Individual asset
                                </p>
                            </div>
                        </div>


                    </div>

                </div>

                <hr/>

                <div className="rectangleBar AMrectangleBar">


                    <div className="row">

                        <div className="col-sm-3">
                            <div className="rectangle AMrectangle">
                                Existing Pains
                            </div>

                        </div>



                        <div className="col-sm-4">

                            <p className="textalign">
                                Illiquidity –
                                no flexible exit opportunities for partners.
                                The only current alternative is costly and tedious  IPO
                            </p>


                        </div>

                        <div className="col-sm-5">

                            <p className=""> Limited range of investors –
                                high dependence on institutional investors and HNWI,
                                lack of access to retail investors from markets with different yield and risk appetites

                            </p>

                        </div>


                    </div>

                </div>

                <hr/>


                <div className="rectangleBar AMrectangleBar">


                    <div className="row">

                        <div className="col-sm-3">
                            <div className="rectangle AMrectangle">
                                Solutions through STO

                            </div>

                        </div>

                        <div className="col-sm-2">

                            <p className="textalign">
                                More retail investors  more flexibility and bargaining power


                            </p>


                        </div>

                        <div className="col-sm-2">

                            <p className=""> Alternative exit opportunity for limited partners</p>

                        </div>
                        <div className="col-sm-2">

                            <p className=""> Attracting investors from countries with low returns</p>

                        </div>
                        <div className="col-sm-2">

                            <p className=""> More flexibility on investor fee structuring</p>

                        </div>

                    </div>

                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-2">

                            <p className=""> Addressing the problem of information asymmetry
                            </p>

                        </div>
                        <div className="col-sm-2">

                            <p className=""> Alternative way of raising bridge financing for new developments

                            </p>

                        </div>
                        <div className="col-sm-2">

                            <p className=""> Opportunity to scale portfolio for small asset holders </p>

                        </div>
                    </div>

                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">

                        <div className="myNavbar AMmyNavbar">
  <span className=" navbar-text AMnavbar-text">

   Who Are Eligible Candidates for Holding STO</span>
                        </div>


                    </div>
                    <div className="STDList">
                        <ul className="b">
                            <li>Real estate investment entities with extensive experience of managing funds, investing into similar asset class</li>
                            <li>Real estate developers with proven track record of completed projects, which generated returns for their lenders/investors
                            </li>
                            <li>SMEs and Individuals with proven record of successfully managing income generating properties, who have sensible business plan for scaling their portfolio through co-investing
                            </li>
                            <li>Companies having a clear vision of how raising capital through STO can seamlessly integrate with their existing capital raising models</li>
                            <li>Companies looking to be first adopters of blockchain technology in order to create more efficient real estate ecosystem
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <hr/>

                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">

                        <div className="myNavbar AMmyNavbar">
  <span className=" navbar-text AMnavbar-text">

    Expected Criteria for Real Estate Assets Submitted for Securitization</span>
                        </div>
                        <div className="Securitization">
                            <img src={secure} alt=""/>
                        </div>


                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <div className="row">
                    <img src={commerical} alt=""/>
                </div>
            </div>

        );
    }
}

AssetMangers.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(AssetMangers);
