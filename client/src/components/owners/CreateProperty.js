import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from '../../actions/profileActions';
import {faChair, faHome} from "@fortawesome/free-solid-svg-icons/index";
import OwnersNavbar from './OwnersNavbar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


class CreateProperty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySocialInputs: false,
            handle: '',
            company: '',
            website: '',
            location: '',
            status: '',
            skills: '',
            githubusername: '',
            bio: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
            instagram: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const profileData = {
            company: this.state.company,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.location,
            propertyvalue: this.state.propertyvalue,
            handle: this.state.handle,
            website: this.state.website,
            status: this.state.status,
            skills: this.state.skills,
            githubusername: this.state.githubusername,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            youtube: this.state.youtube,
            instagram: this.state.instagram
        };

        this.props.createProfile(profileData, this.props.history);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors, displaySocialInputs } = this.state;

        let socialInputs;

        if (displaySocialInputs) {
            socialInputs = (
                <div>
                    <InputGroup
                        placeholder="Linkedin Profile URL"
                        name="linkedin"
                        icon="fab fa-linkedin"
                        value={this.state.linkedin}
                        onChange={this.onChange}
                        error={errors.linkedin}
                    />
                </div>
            );
        }

        // Select options for professional status
        const options = [
            { label: '* Select Professional Status', value: 0 },
            { label: 'Developer', value: 'Developer' },
            { label: 'Junior Developer', value: 'Junior Developer' },
            { label: 'Senior Developer', value: 'Senior Developer' },
            { label: 'Manager', value: 'Manager' },
            { label: 'Student or Learning', value: 'Student or Learning' },
            { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
            { label: 'Intern', value: 'Intern' },
            { label: 'Other', value: 'Other' }
        ];

        return (
            <div>
                <OwnersNavbar/>

                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="OwnersDashboard">
                                            <FontAwesomeIcon icon={faHome} className='iconCSS'/>
                                            Dashboard <span className="sr-only">(current)</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="CreateProperty">
                                            <FontAwesomeIcon icon={faChair} className='iconCSS'/>
                                            Create Property
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div
                                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Degron | Property Owner’s Dashboard</h1>
                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group mr-2">
                                    </div>
                                </div>
                            </div>


                            <div className="create-profile">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-8 m-auto">
                                            <h1 className="display-4 text-center">Create Your Property</h1>
                                            <p className="lead text-center">
                                                Let's get some information to make your property stand out
                                            </p>
                                            <small className="d-block pb-3">* = required fields</small>
                                            <form onSubmit={this.onSubmit}>

                                                <TextFieldGroup
                                                    placeholder="Company"
                                                    name="company"
                                                    value={this.state.company}
                                                    onChange={this.onChange}
                                                    error={errors.company}
                                                    info="Your company name"
                                                />
                                                <TextFieldGroup
                                                    placeholder="Full Name"
                                                    name="name"
                                                    value={this.state.name}
                                                    onChange={this.onChange}
                                                    error={errors.company}
                                                    info="Your full Name"
                                                />
                                                <TextFieldGroup
                                                    placeholder="Your Business Email"
                                                    name="email"
                                                    value={this.state.email}
                                                    onChange={this.onChange}
                                                    error={errors.company}
                                                    info="Enter you business email"
                                                />
                                                <TextFieldGroup
                                                    placeholder="Location"
                                                    name="location"
                                                    value={this.state.location}
                                                    onChange={this.onChange}
                                                    error={errors.location}
                                                    info="City or city & state suggested (eg. Boston, MA)"
                                                />
                                                <TextFieldGroup
                                                    placeholder="Property Value"
                                                    name="propertyvalue"
                                                    value={this.state.propertyvalue}
                                                    onChange={this.onChange}
                                                    error={errors.company}
                                                    info="City or city & state suggested (eg. Boston, MA)"
                                                />

                                                <TextFieldGroup
                                                    placeholder="* Profile Handle"
                                                    name="handle"
                                                    value={this.state.handle}
                                                    onChange={this.onChange}
                                                    error={errors.handle}
                                                    info="A unique handle for your profile URL. Your full name, company name, nickname"
                                                />
                                                {/*<SelectListGroup*/}
                                                {/*placeholder="Status"*/}
                                                {/*name="status"*/}
                                                {/*value={this.state.status}*/}
                                                {/*onChange={this.onChange}*/}
                                                {/*options={options}*/}
                                                {/*error={errors.status}*/}
                                                {/*info="Give us an idea of where you are at in your career"*/}
                                                {/*/>*/}

                                                {/*<TextFieldGroup*/}
                                                {/*placeholder="Website"*/}
                                                {/*name="website"*/}
                                                {/*value={this.state.website}*/}
                                                {/*onChange={this.onChange}*/}
                                                {/*error={errors.website}*/}
                                                {/*info="Could be your own website or a company one"*/}
                                                {/*/>*/}

                                                {/*<TextFieldGroup*/}
                                                {/*placeholder="* Skills"*/}
                                                {/*name="skills"*/}
                                                {/*value={this.state.skills}*/}
                                                {/*onChange={this.onChange}*/}
                                                {/*error={errors.skills}*/}
                                                {/*info="Please use comma separated values (eg.*/}
                                                {/*HTML,CSS,JavaScript,PHP"*/}
                                                {/*/>*/}
                                                {/*<TextFieldGroup*/}
                                                {/*placeholder="Github Username"*/}
                                                {/*name="githubusername"*/}
                                                {/*value={this.state.githubusername}*/}
                                                {/*onChange={this.onChange}*/}
                                                {/*error={errors.githubusername}*/}
                                                {/*info="If you want your latest repos and a Github link, include your username"*/}
                                                {/*/>*/}
                                                {/*<TextAreaFieldGroup*/}
                                                {/*placeholder="Short Bio"*/}
                                                {/*name="bio"*/}
                                                {/*value={this.state.bio}*/}
                                                {/*onChange={this.onChange}*/}
                                                {/*error={errors.bio}*/}
                                                {/*info="Tell us a little about yourself"*/}
                                                {/*/>*/}

                                                {/*<div className="mb-3">*/}
                                                {/*<button*/}
                                                {/*type="button"*/}
                                                {/*onClick={() => {*/}
                                                {/*this.setState(prevState => ({*/}
                                                {/*displaySocialInputs: !prevState.displaySocialInputs*/}
                                                {/*}));*/}
                                                {/*}}*/}
                                                {/*className="btn btn-light"*/}
                                                {/*>*/}
                                                {/*Add Social Network Links*/}
                                                {/*</button>*/}
                                                {/*<span className="text-muted">Optional</span>*/}
                                                {/*</div>*/}
                                                {/*{socialInputs}*/}
                                                <input
                                                    type="submit"
                                                    value="Submit"
                                                    className="btn btn-info btn-block mt-4"
                                                />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </main>
                            </div>
                    </div>
                </div>

        );
    }
}

CreateProperty.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { createProfile })(
    withRouter(CreateProperty)
);
