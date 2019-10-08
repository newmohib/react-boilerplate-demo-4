/**
 *
 * Login
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Joi from '@hapi/joi';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLogin , { makeSelectUsers ,makeSelectLoginInput } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Input, DateInput, Select } from 'components/Form';
import { LoginForm } from './loginForm';
import { onChangeLoginInput,loginSubmit } from './actions';


export function Login(props) {
  //console.log('index',props.users);
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  const schema = Joi.object({
    username: Joi.string().required()
   // username: Joi.number().required()
  });

  const validateProperty = (input) => {
    const { name, value } = input;
    // const obj = { [name]: value };
    let errors = null;
    if (value == '') {
      errors = "Required";
    }
    return errors;
  }

  const handleChange = (event) => {
    //console.log("namew", event.target.value, event.target.name);
    let { name, value } = event.target;
   let resul= schema.validate({ username: value});
   console.log("resul",resul);
    const errors = {};
     const loginInputObj = { ...props.loginInput };
    const errorMessage = validateProperty(event.target);
    if (errorMessage) {
      errors[name] = "Required";
    } else {
      delete errors[name];
    };
    loginInputObj[name] = value;
    props.onChangeLogin(loginInputObj);
    //  this.setState({ createPassword: createPassword, errors: errors });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let formObject = {};
    for (let entry of formData.entries()) {
      let name = [entry[0]]
      let value = entry[1]
      formObject[name] = value;
    }
   // console.log(formObject);

    const loginInputObj = { ...props.loginInput };

    props.loginSubmitToAction()

   // console.log(loginInputObj);
  }



  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <div className="container form-wrapper" style={{ height: "calc(100vh - 65px)" }}>
        <div className="row justify-content-center h-100" >
          <div className="col-10 col-lg-6 col-md-8 col-sm-10 h-100 d-flex align-items-center">
            <div className="form-container formStyle">
              <h3 className="text-center headerStyle">Login</h3>
              <div className="container">
                <hr />
                <LoginForm
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                ></LoginForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  users: makeSelectUsers(),
  loginInput :makeSelectLoginInput(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeLogin: value => dispatch(onChangeLoginInput(value)),
    loginSubmitToAction: () => dispatch(loginSubmit()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Login);
