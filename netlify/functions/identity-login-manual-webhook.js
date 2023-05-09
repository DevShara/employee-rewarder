exports.handler = async function (event, context, callback) {
    const { identity, user } = context.clientContext;

    return {
        statusCode:200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user}),

    }

}