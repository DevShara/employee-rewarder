import { useDispatch } from "react-redux";
import { signup } from "../../src/store/actions";

exports.handler = async function (event, context, callback) {
    const dispatch = useDispatch();

    const { identity, user } = context.clientContext;

    dispatch(signup('user.email', 'user.name'))

    return {
        statusCode:200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user}),

    }
    

}