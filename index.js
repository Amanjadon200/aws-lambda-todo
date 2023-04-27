const Todo = require('./src/models/todo.js')
const connectDatabase = require('./src/database/db')
module.exports.hello = async (event,context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    await connectDatabase();
    let data = event.body;
    console.log(data)
    data = JSON.parse(data);
    const todo = new Todo(data);
    await todo.save();
    return {
      statusCode: 200,
      body: JSON.stringify(
        todo
      ),
    };
  } catch (error) {
    console.log(error, "*****error")
    return {
      statusCode: 400,
      body:'error comes'
    };
  }
};
