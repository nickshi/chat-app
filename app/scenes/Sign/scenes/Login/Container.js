import LoginScreen from './Component';

import actionsCreator from "../../../../store/session/actions";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        session: bindActionCreators(actionsCreator, dispatch),
    }
};

export default connect(null, mapDispatchToProps)(LoginScreen);