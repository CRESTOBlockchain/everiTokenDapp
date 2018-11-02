import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {faHandshake, faWifi} from "@fortawesome/free-solid-svg-icons/index";

import './css/team.css';

class Team extends Component {

    render() {
        return (
            <div>
                <h1 className="display-3 mb-4 text-center">TEAM</h1>
                <div className="container">

                    <div className="card-deck justify-content-center">
                        <div className="card border-white teamBorderSize">
                            <img className="card-img-top img teamImgSize" src="https://user-images.githubusercontent.com/21117852/47724521-d2372c80-dc91-11e8-8142-6fc4f4ffc5d6.png" alt="Card image cap" />
                            <div className="text-center teamColors"><h5><a target="_blank" href='https://www.linkedin.com/in/mariakutkina/'>Mariia Kutkina</a></h5></div>
                            <div className="card-body" style={{background: "#D3D3D3"}}>
                                <ul className='ulTeam'>
                                    <li className="card-text">Above 10 years of experience in commercial real estate markets in UAE, Spain & Russia;
                                    </li>
                                    <li className="card-text">Above 8 years of entrepreneurial experience, 2 startups successfully launched
                                    </li>
                                    <li className="card-text">IESE / CEIBS MBA</li>
                                </ul>
                            </div>
                            <div className="text-center teamColors" ><h5>Business Strategy</h5></div>
                        </div>

                        <div className="card border-white teamBorderSize">
                            <img className="card-img-top img teamImgSize" src="https://user-images.githubusercontent.com/21117852/47820975-10b80e80-dd9a-11e8-8f3a-b09395b89129.png" alt="Card image cap" />
                            <div className="text-center teamColors"><h5><a target="_blank" href='https://www.linkedin.com/in/shangzhi-bian-83903639/'>Brian Bian</a></h5></div>
                            <div className="card-body" style={{background: "#D3D3D3"}}>
                                <ul className='ulTeam'>
                                    <li className="card-text">Above 7 years of experience in real estate investments, development projects and asset management
                                    </li>
                                    <li className="card-text">Co-founder of Vnet blockchain project </li>
                                    <li className="card-text">CEIBS MBA & CFA level 3</li>
                                </ul>
                            </div>
                            <div className="text-center teamColors" ><h5>Finance (due diligence)</h5></div>
                        </div>

                        <div className="card border-white teamBorderSize">
                            <img className="card-img-top img teamImgSize" src="https://user-images.githubusercontent.com/21117852/47821008-2fb6a080-dd9a-11e8-9bd3-e3933c16634a.png" alt="Card image cap" />
                            <div className="text-center teamColors"><h5><a target="_blank" href='https://www.linkedin.com/in/otto-kafka-50899b7a/'>Otto Kafka</a></h5></div>
                            <div className="card-body" style={{background: "#D3D3D3"}}>
                                <ul className='ulTeam'>
                                    <li className="card-text">Above 10 years of entrepreneurial experience in the tech industry

                                    </li>
                                    <li className="card-text">Full stack developer with mastery of React, Node JS, Express. JS, and MongoDB </li>
                                    <li className="card-text">Successfully launched projects in California, Beijing and Shanghai.
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center teamColors" ><h5>Technology</h5></div>
                        </div>

                        <div className="card border-white teamBorderSize">
                            <img className="card-img-top img teamImgSize" src="https://user-images.githubusercontent.com/21117852/47821034-4957e800-dd9a-11e8-87b1-8d6ff4332595.png" alt="Card image cap" />
                            <div className="text-center teamColors">
                                <h5><a target="_blank" href='https://www.linkedin.com/in/leesky/'>Sky Li</a></h5></div>
                            <div className="card-body" style={{background: "#D3D3D3"}}>
                                <ul className='ulTeam'>
                                    <li className="card-text">Serial entrepreneur, founded 2 startups during 2014-2018

                                    </li>
                                    <li className="card-text">Experience of orchestration from product development to operation. </li>
                                    <li className="card-text">Prior startup life, had 9 years of talent function across digital media, tech & startup spaces.</li>
                                </ul>
                            </div>
                            <div className="text-center teamColors" ><h5>Product & operation</h5></div>
                        </div>
                    </div>

                    <hr/>

                    <div className="card-deck justify-content-center">
                        <div className="card border-white teamBorderSize">
                            <img className="card-img-top img teamImgSize" src="https://user-images.githubusercontent.com/21117852/47821058-6391c600-dd9a-11e8-87d3-abe905a2c961.png" alt="Card image cap" />
                            <div className="text-center teamColors"><h5><a target="_blank" href='https://www.linkedin.com/in/joe-santiago-484166170/'>Joe Santiago</a></h5></div>
                            <div className="card-body" style={{background: "#D3D3D3"}}>
                                <ul className='ulTeam'>
                                    <li className="card-text">Serial entrepreneur & marketer</li>
                                    <li className="card-text">More than 10 years experiences in Asian and international market.</li>
                                    <li className="card-text">CMO/COO of Laplace network, Cofounder AGE Blockchain Art Appraisal</li>
                                    <li className="card-text">Former COO of Tian Yuan Fang Real Estate & Resorts. </li>
                                </ul>
                            </div>
                            <div className="text-center teamColors"><h5>Marketing</h5></div>
                        </div>

                        <div className="card border-white teamBorderSize">
                            <img className="card-img-top img teamImgSize" src="https://user-images.githubusercontent.com/21117852/47821083-76a49600-dd9a-11e8-864e-632bc5cad147.png" alt="Card image cap" />
                            <div className="text-center teamColors">
                                <h5><a target="_blank" href='https://www.linkedin.com/in/mark-perry-b268a744/'>Mark Perry</a></h5></div>
                            <div className="card-body" style={{background: "#D3D3D3"}}>
                                <ul className='ulTeam'>
                                    <li className="card-text">London CASS MSc in Economics and Finance

                                    </li>
                                    <li className="card-text">7 years experience in Private Equity and Asset Management offshore oil & gas, logistic and trading
                                    </li>
                                    <li className="card-text">Co-founder of AGE Blockchain art appraisal</li>
                                </ul>
                            </div>
                            <div className="text-center teamColors" ><h5>Partnership</h5></div>
                        </div>

                        <div className="card border-white teamBorderSize">
                            <img className="card-img-top img teamImgSize" src="https://user-images.githubusercontent.com/21117852/47821109-891ecf80-dd9a-11e8-89fd-a32306b61666.png" alt="Card image cap" />
                            <div className="text-center teamColors">
                                <h5><a target="_blank" href='https://linkedin.com/in/mobinarablou'>Mobin Arablou</a></h5></div>
                            <div className="card-body" style={{background: "#D3D3D3"}}>
                                <ul className='ulTeam'>
                                    <li className="card-text">8 years experiences in software development(Machine learning, Blockchain, App development)
                                    </li>
                                    <li className="card-text">Security expert
                                    </li>
                                    <li className="card-text">Holder of 3 degrees; Postgrad in CS</li>
                                </ul>
                            </div>
                            <div className="text-center teamColors" ><h5>Technology</h5></div>
                        </div>

                        <div className="card border-white teamBorderSize">
                            <img className="card-img-top img teamImgSize" src="https://user-images.githubusercontent.com/21117852/47821133-a358ad80-dd9a-11e8-851a-1e4934ea7418.png" alt="Card image cap" />
                            <div className="text-center teamColors">
                                <h5><a target="_blank" href='https://linkedin.com/in/amjadkhan5191'>Amjad Gul</a></h5></div>
                            <div className="card-body" style={{background: "#D3D3D3"}}>
                                <ul className='ulTeam'>
                                    <li className="card-text">2 years plus experience in software technology industry</li>
                                    <li className="card-text">Backend developer with experience in frontend as well</li>
                                </ul>
                            </div>
                            <div className="text-center teamColors" ><h5>Technology</h5></div>
                        </div>
                    </div>




                </div>
                <hr/>


            </div>
        );
    }
}

Team.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Team);
