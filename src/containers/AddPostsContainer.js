/**
 * Created by rohitgirme on 3/12/17.
 */
import AddPosts from '../components/AddPosts';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addPost} from '../actions/index';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPost }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddPosts);
