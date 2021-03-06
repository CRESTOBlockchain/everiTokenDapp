import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserShield, faMoneyCheck, faMoneyBill, faWarehouse,faCode, faHourglass, faCoffee, faHandsHelping, faBriefcase} from '@fortawesome/free-solid-svg-icons'
import './css/landing.css';
import Navbar from '../landing-page/Navbar'

class Landing extends Component {

    // This checks if user authenticated if yes automatically sends to dashboard - if enabled
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            // this.props.history.push('/dashboard');
        }
    }

    render() {
        return (
            <div>
                <Navbar/>
                <section className="home bg-img-1 parallax" data-stellar-background-ratio="0.5">
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="home-wrapper text-center">
                                    <h1 className="animated fadeInDown wow" data-wow-delay=".1s">A more efficient real
                                        estate market</h1>
                                    <h4>Degron represents next generation of crowdfunding for real estate market.
                                        Our fintech solution based on EveriToken blockchain brings new opportunities:
                                    </h4>

                                    <ul>
                                        <li>For Investors – fractional ownership and dividends from properties all over the world
                                        </li>
                                        <li>For Property owners – access to range of investors as broad as never before
                                        </li>
                                        <li>For both parties – safe and convenient investment process  powered by Safe contract and using everiTokens as means of transaction
                                        </li>
                                    </ul>

                                    <Link className='btn btn-primary btn-rounded w-lg animated fadeInDown wow' to="InvestorsDashboard" style={{marginRight: '20px'}}>
                                        <div style={{fontSize: "12px"}}>I am a property </div>
                                        <div style={{fontSize: "16px"}}>INVESTOR</div>
                                    </Link>

                                    <Link className='btn btn-primary btn-rounded w-lg animated fadeInDown wow' to="OwnersDashboard" style={{marginLeft: '20px'}}>
                                        <div style={{fontSize: "12px"}}>I am property</div>
                                        <div style={{fontSize: "16px"}}>OWNER</div>
                                    </Link>
                                </div>
                            </div>



                        </div>
                    </div>
                </section>
                <section className="section" id="how-it-work">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <h2 className="title zoomIn animated wow" data-wow-delay=".1s">How It Works ?</h2>
                                <h4 className="sub-title zoomIn animated wow" data-wow-delay=".2s">Degron lets you
                                    easily create digital secure assets of lease contracts. It does this by using the
                                    power of blockchain, with a combination of <a href="https://www.everitoken.io/"
                                                                                      target="_blank">Everitoken</a></h4>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-md-4 text-center">
                                <div className="service-item animated fadeInLeft wow" data-wow-delay=".1s">
                                    <FontAwesomeIcon icon={faUserShield} size='2x'/>


                                    <div className="service-detail">
                                        <h4>Ultra secure</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center">
                                <div className="service-item animated fadeInDown wow" data-wow-delay=".3s">
                                    <FontAwesomeIcon icon={faMoneyBill} size='2x'/>
                                    <div className="service-detail">
                                        <h4>Saves loads of costs</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center">
                                <div className="service-item animated fadeInRight wow" data-wow-delay=".5s">
                                    <FontAwesomeIcon icon={faWarehouse} size='2x'/>
                                    <div className="service-detail">
                                        <h4>A more efficient real estate market</h4>
                                    </div>
                            </div>
                        </div>

                    </div>
                    </div>
                </section>

                <section className="fun-facts bg-img-2 parallax" data-stellar-background-ratio="0.5">
                    <div className="bg-overlay"></div>
                    <div className="container">

                        <div className="row text-center">
                            <div className="col-md-3 col-sm-3 facts">
                                <FontAwesomeIcon icon={faCode} size='2x'/>
                                <h1><span className="counter">6577</span> k</h1>
                                <h4>Lines Coded</h4>
                            </div>
                            <div className="col-md-3 col-sm-3 facts">
                                <FontAwesomeIcon icon={faHourglass} size='2x'/>
                                <h1><span className="counter">7800</span> +</h1>
                                <h4>Working Hours</h4>
                            </div>
                            <div className="col-md-3 col-sm-3 facts">
                                <FontAwesomeIcon icon={faCoffee} size='2x'/>
                                <h1 className="counter">399</h1>
                                <h4>No. Of offices</h4>
                            </div>
                            <div className="col-md-3 col-sm-3 facts">
                                <FontAwesomeIcon icon={faHandsHelping} size='2x'/>
                                <h1 className="counter">9995</h1>
                                <h4>Leasers helped</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Landing);
