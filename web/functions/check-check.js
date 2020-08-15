exports.handler = async function (event, context, callback) {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Awesome. This works.',
      }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'There was problem',
      }),
    }
  }
}
