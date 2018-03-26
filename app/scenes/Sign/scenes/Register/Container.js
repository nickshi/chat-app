import RegisterScreen from './Component';

import actionsCreator from "../../../../store/session/actions";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import style from './style';



const mapDispatchToProps = (dispatch) => {
    return {
        session: bindActionCreators(actionsCreator, dispatch),
    }
};

export default connect(null, mapDispatchToProps)(RegisterScreen);