/**
 * Created by rohitgirme on 3/12/17.
 */
import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router';

class AddPosts extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit = (post) => {
    this.props.addPost(post);//.then(() => {
    this.context.router.push('/');
    //});
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h3>Create New Post</h3>
        
          <Field
            name="title"
            component={renderField}
            label="Title"
            type="text"
            className="form-control"
          />

        
          <Field
            name="categories"
            component={renderField}
            label="Category"
            type="text"
            className="form-control"
          />

        
          <Field
            name="content"
            component={renderField}
            label="Content"
            className="form-control"
          />


        <button className="btn btn-primary" type="submit">Submit</button>
        <Link className="btn btn-danger" to="/">
          Cancel
        </Link>
      </form>
    );
  }
}

// Shown when there is no input. When the user enters something, error goes
// away.
// If errors present, submit does not call action creator, hence no API call.
const renderField = ({ input, label, type, meta: { touched, error } }) => {
  let errorEl = touched && error ? (<span className="text-help">{error}</span>) : '';
  let errorClass = touched && error ? 'has-danger' : '';
  let classNames = `form-group ${errorClass}`;

  return (
    <div className={classNames}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}
             className="form-control"/>
      {errorEl}
    </div>
  );
};


const validate = (values) => {
  // touched is set for that field when the onBlur event occurs.
  let errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }

  if (!values.categories) {
    errors.categories = 'Required';
  }

  if (!values.content) {
    errors.content = 'Required';
  }

  return errors;
};

export default reduxForm({
  form: 'AddPosts',
  validate
})(AddPosts)