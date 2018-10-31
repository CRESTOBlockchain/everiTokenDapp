import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {faHandshake, faWifi} from "@fortawesome/free-solid-svg-icons/index";


class Team extends Component {

    render() {
        return (
            <div>
                <h1 className="display-3 mb-4 text-center">TEAM</h1>
                <div className="container">
                    {/*<div className="card-deck">*/}
                        {/*<div className="card border-white">*/}
                            {/*<img className="card-img-top img" src="https://user-images.githubusercontent.com/21117852/47724521-d2372c80-dc91-11e8-8142-6fc4f4ffc5d6.png" alt="Card image cap" style={{maxWidth: "150px", maxHeight: "140px"}}/>*/}
                            {/*<div className="text-center" style={{background: "#283e4a"}}><h5 style={{color: "white" }}>Mariia Kutkina</h5></div>*/}
                            {/*<div className="card-body" style={{background: "#D3D3D3"}}>*/}
                                {/*<ul className='ul'>*/}
                                    {/*<li className="card-text">Above 10 years of experience in commercial real estate markets in UAE, Spain & Russia;*/}
                                    {/*</li>*/}
                                    {/*<li className="card-text">Above 8 years of entrepreneurial experience, 2 startups successfully launched*/}
                                    {/*</li>*/}
                                    {/*<li className="card-text">IESE / CEIBS MBA</li>*/}
                                {/*</ul>*/}
                            {/*</div>*/}
                            {/*<div className="text-center" style={{background: "#283e4a"}}><h5 style={{color: "white" }}>Business Strategy</h5></div>*/}
                        {/*</div>*/}

                        {/*<div className="card border-white ">*/}
                            {/*<img className="card-img-top img" src="https://user-images.githubusercontent.com/21117852/47724627-06125200-dc92-11e8-8d23-038226e4b3b3.png" alt="Card image cap" style={{maxWidth: "150px", maxHeight: "140px"}}/>*/}
                            {/*<div className="text-center" style={{background: "#283e4a"}}><h5 style={{color: "white" }}>Mariia Kutkina</h5></div>*/}
                            {/*<div className="card-body" style={{background: "#D3D3D3"}}>*/}
                                {/*<ul className='ul'>*/}
                                    {/*<li className="card-text">Above 10 years of experience in commercial real estate markets in UAE, Spain & Russia*/}
                                    {/*</li>*/}
                                    {/*<li className="card-text">Above 8 years of entrepreneurial experience, 2 startups successfully launched*/}
                                    {/*</li>*/}
                                    {/*<li className="card-text">IESE / CEIBS MBA</li>*/}
                                {/*</ul>*/}
                            {/*</div>*/}
                            {/*<div className="text-center" style={{background: "#283e4a"}}><h5 style={{color: "white" }}>Business Strategy</h5></div>*/}
                        {/*</div>*/}

                        {/*<div className="card border-white">*/}
                            {/*<img className="card-img-top img" src="https://user-images.githubusercontent.com/21117852/47724665-1b877c00-dc92-11e8-884f-0da92fe51510.png" alt="Card image cap" style={{maxWidth: "150px", maxHeight: "140px"}}/>*/}
                            {/*<div className="text-center" style={{background: "#283e4a"}}><h5 style={{color: "white" }}>Mariia Kutkina</h5></div>*/}
                            {/*<div className="card-body" style={{background: "#D3D3D3"}} >*/}
                                {/*<ul className='ul'>*/}
                                    {/*<li className="card-text">Above 10 years of experience in commercial real estate markets in UAE, Spain & Russia*/}
                                    {/*</li>*/}
                                    {/*<li className="card-text">Above 8 years of entrepreneurial experience, 2 startups successfully launched*/}
                                    {/*</li>*/}
                                    {/*<li className="card-text">IESE / CEIBS MBA</li>*/}
                                {/*</ul>*/}
                            {/*</div>*/}
                            {/*<div className="text-center" style={{background: "#283e4a"}}><h5 style={{color: "white" }}>Business Strategy</h5></div>*/}
                        {/*</div>*/}

                        {/*<div className="card border-white">*/}
                            {/*<img className="card-img-top img" src="https://user-images.githubusercontent.com/21117852/47724665-1b877c00-dc92-11e8-884f-0da92fe51510.png" alt="Card image cap" style={{maxWidth: "150px", maxHeight: "140px"}}/>*/}
                            {/*<div className="text-center" style={{background: "#283e4a"}}><h5 style={{color: "white" }}>Mariia Kutkina</h5></div>*/}
                            {/*<div className="card-body" style={{background: "#D3D3D3"}} >*/}
                                {/*<ul className='ul' >*/}
                                    {/*<li className="card-text">Above 10 years of experience in commercial real estate markets in UAE, Spain & Russia*/}
                                    {/*</li>*/}
                                    {/*<li className="card-text">Above 8 years of entrepreneurial experience, 2 startups successfully launched*/}
                                    {/*</li>*/}
                                    {/*<li className="card-text">IESE / CEIBS MBA</li>*/}
                                {/*</ul>*/}
                            {/*</div>*/}
                            {/*<div className="text-center" style={{background: "#283e4a"}}><h5 style={{color: "white" }}>Business Strategy</h5></div>*/}
                        {/*</div>*/}

                    {/*</div>*/}





                    <div className="d-flex flex-wrap">

                        <div className=" text-center" >

                            <img src='https://user-images.githubusercontent.com/21117852/47626168-be41dc80-db64-11e8-8b0e-40f71bc09495.png'/>
                        </div>
                        <div className=" text-center">
                            <img src='https://user-images.githubusercontent.com/21117852/47626182-cc8ff880-db64-11e8-8ad9-923fd10fb9db.png'/>
                        </div>
                        <div className=" text-center">
                            <img src='https://user-images.githubusercontent.com/21117852/47626197-d7e32400-db64-11e8-963c-ef489b7be89c.png'/>
                        </div>
                        <div className=" text-center">
                            <img src='https://user-images.githubusercontent.com/21117852/47626208-e3364f80-db64-11e8-912d-f2b43c198ce9.png'/>
                        </div>

                        <div className=' text-center'>
                            <img src="https://user-images.githubusercontent.com/21117852/47626225-f3e6c580-db64-11e8-996c-9747c1401f3e.png"/>
                        </div>
                        <div className=' text-center'>
                            <img src="https://user-images.githubusercontent.com/21117852/47626242-05c86880-db65-11e8-934a-e7fdcf91e96f.png"/>
                        </div>
                        <div className=' text-center'>
                            <img src="https://user-images.githubusercontent.com/21117852/47626258-14af1b00-db65-11e8-9bb1-6ad387bd11a1.png"/>
                        </div>
                        <div className=' text-center'>
                            <img src="https://user-images.githubusercontent.com/21117852/47626269-2690be00-db65-11e8-97a1-805dae774e8d.png"/>
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
