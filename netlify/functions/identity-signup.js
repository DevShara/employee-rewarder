exports.handler = async function (event, context, callback) {
    const { identity, user } = context.clientContext;

    

    const statusCode = 200;


    // Do stuff and return a response...
   return callback(null, {
		statusCode,
		body: {
            "event": "login|signup|validate",
            "user": {
                user
            }
          }
	})

}