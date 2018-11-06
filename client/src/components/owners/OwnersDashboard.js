import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faChartLine, faMapSigns, faUserFriends} from '@fortawesome/free-solid-svg-icons'

import OwnersNavbar from './OwnersNavbar'
import './css/sidebar.css';

class OwnersDashboard extends Component {

    // This checks if user authenticated if yes automatically sends to dashboard - if enabled
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            // this.props.history.push('/dashboard');
        }
    }

    render() {
        return (
            <div>
                <OwnersNavbar/>

                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                            <div className="sidebar-sticky">
                                {/*<ul className="nav flex-column">*/}
                                    {/*<li className="nav-item">*/}
                                        {/*<a className="nav-link active" href="#">*/}
                                            {/*<FontAwesomeIcon icon={faHome} className='iconCSS'/>*/}
                                            {/*Dashboard <span className="sr-only">(current)</span>*/}
                                        {/*</a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                        {/*<a className="nav-link" href="#">*/}
                                            {/*<FontAwesomeIcon icon={faChartLine} className='iconCSS'/>*/}
                                            {/*Charts<span className="badge badge-primary" style={{marginLeft: "15px"}}>8</span>*/}
                                        {/*</a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                        {/*<a className="nav-link" href="#">*/}

                                            {/*<FontAwesomeIcon icon={faMapSigns} className='iconCSS'/>Maps*/}
                                        {/*</a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                        {/*<a className="nav-link" href="#">*/}
                                            {/*<FontAwesomeIcon icon={faUserFriends} className='iconCSS'/>Leasers*/}
                                        {/*</a>*/}
                                    {/*</li>*/}

                                {/*</ul>*/}



                            </div>
                        </nav>

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div
                                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Degron | Property Owner’s Dashboard</h1>
                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group mr-2">

                                    </div>

                                    {/*<div className="dropdown show">*/}
                                        {/*<a className="btn btn-secondary dropdown-toggle" href="#" role="button"*/}
                                           {/*id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"*/}
                                           {/*aria-expanded="false">*/}
                                            {/*Sort*/}
                                        {/*</a>*/}

                                        {/*<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">*/}
                                            {/*<a className="dropdown-item" href="#">Buildings</a>*/}
                                            {/*<a className="dropdown-item" href="#">Offices</a>*/}
                                            {/*<a className="dropdown-item" href="#">Large Spaces</a>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>

                            <h2>Fill out your property</h2>
                            <p>Your company name * ________________________________________________</p>
                            <p>Business Email * ________________________________________________</p>
                            <p>Mobile phone * ________________________________________________</p>
                            <p>Address * ________________________________________________</p>
                            {/*<div className="card-deck">*/}
                                {/*<div className="card">*/}
                                    {/*<img className="card-img-top" src="https://user-images.githubusercontent.com/21117852/47975662-b72d4800-e0e9-11e8-8420-c7073e5ebbc1.jpg" alt="Card image cap"/>*/}
                                    {/*<div className="card-body">*/}
                                        {/*<h5 className="card-title">Hangzhou Xintiandi Office Towers</h5>*/}
                                        {/*<p className="card-text">This is a wider card with supporting text below as*/}
                                            {/*a natural lead-in to additional content. This content is a little bit*/}
                                            {/*longer.</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="card-footer">*/}
                                        {/*<small className="text-muted">Hangzhou Xintiandi Office Towers, China</small>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="card">*/}
                                    {/*<img className="card-img-top" src="https://user-images.githubusercontent.com/21117852/47975664-b7c5de80-e0e9-11e8-9845-307e3dfa8fd1.jpg" alt="Card image cap"/>*/}
                                    {/*<div className="card-body">*/}
                                        {/*<h5 className="card-title">Hongkou Technology and Financial Building</h5>*/}
                                        {/*<p className="card-text">This card has supporting text below as a natural*/}
                                            {/*lead-in to additional content.</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="card-footer">*/}
                                        {/*<small className="text-muted">No.463 Tanggu Road, Hongkou District, Shanghai, China</small>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="card">*/}
                                    {/*<img className="card-img-top" src="https://user-images.githubusercontent.com/21117852/47975665-b85e7500-e0e9-11e8-8f78-2212413f600b.jpg" alt="Card image cap"/>*/}
                                    {/*<div className="card-body">*/}
                                        {/*<h5 className="card-title">IFFG Office - Hangzhou</h5>*/}
                                        {/*<p className="card-text">This is a wider card with supporting text below as*/}
                                            {/*a natural lead-in to additional content. This card has even longer*/}
                                            {/*content than the first to show that equal height action.</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="card-footer">*/}
                                        {/*<small className="text-muted">IFFG Office-Hangzhou, Shanghai Shi, China</small>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<hr/>*/}

                            {/*<div className="card-deck">*/}
                                {/*<div className="card">*/}
                                    {/*<img className="card-img-top" src="https://user-images.githubusercontent.com/21117852/47975666-b85e7500-e0e9-11e8-90a8-8a025077979d.jpg" alt="Card image cap"/>*/}
                                    {/*<div className="card-body">*/}
                                        {/*<h5 className="card-title">Jin Mao Tower</h5>*/}
                                        {/*<p className="card-text">This is a wider card with supporting text below as*/}
                                            {/*a natural lead-in to additional content. This content is a little bit*/}
                                            {/*longer.</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="card-footer">*/}
                                        {/*<small className="text-muted">88 Century Ave, LuJiaZui, Pudong Xinqu, China</small>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="card">*/}
                                    {/*<img className="card-img-top" src="https://user-images.githubusercontent.com/21117852/47975668-b85e7500-e0e9-11e8-8749-2485ece91c2d.jpg" alt="Card image cap"/>*/}
                                    {/*<div className="card-body">*/}
                                        {/*<h5 className="card-title">Office Building No 463</h5>*/}
                                        {/*<p className="card-text">This card has supporting text below as a natural*/}
                                            {/*lead-in to additional content.</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="card-footer">*/}
                                        {/*<small className="text-muted">No.463 Tanggu Road, Hongkou District, Shanghai, China</small>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="card">*/}
                                    {/*<img className="card-img-top" src="https://user-images.githubusercontent.com/21117852/47975672-b98fa200-e0e9-11e8-891b-8a70b5bb1d7c.jpg" alt="Card image cap"/>*/}
                                    {/*<div className="card-body">*/}
                                        {/*<h5 className="card-title">One Lujiazui</h5>*/}
                                        {/*<p className="card-text">This is a wider card with supporting text below as*/}
                                            {/*a natural lead-in to additional content. This card has even longer*/}
                                            {/*content than the first to show that equal height action.</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="card-footer">*/}
                                        {/*<small className="text-muted">Lujiazui Ring Rd, LuJiaZui, Pudong Xinqu, Shanghai Shi, China</small>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}




                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

OwnersDashboard.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(OwnersDashboard);
