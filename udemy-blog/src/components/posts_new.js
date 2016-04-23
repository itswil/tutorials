import React from 'react'
import { reduxForm } from 'redux-form'
import { createPost } from '../actions/index'
import { Link } from 'react-router'

class PostsNew extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  handleMySubmit(props) {
    this.props.createPost(props)
      .then(() => {
        this.context.router.push('/')
      })
  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.handleMySubmit.bind(this))}>
        <h3>Create a new post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content}></textarea>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button className="btn btn-primary" type="submit">Create my post</button>
        <Link to="/" className="btn btn-danger">Back to Home</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}

  if (!values.title) {
    errors.title = 'Please enter a title'
  }

  if (!values.categories) {
    errors.categories = 'Please enter a category'
  }

  if (!values.content) {
    errors.content = 'Please enter some content'
  }

  return errors
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew)
