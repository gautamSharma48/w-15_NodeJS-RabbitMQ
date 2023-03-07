const amqp = require("amqplib");

async function connect() {
  try {
    //create a connection-
    const connection = await amqp.connect("amqp://localhost:5672");
    //create a channel
    const channel = await connection.createChannel();
    //listen a queue
    const result = await channel.assertQueue("asdf");
    //consume msg on queue
    console.log("waiting for messages");
    await channel.consume("asdf", (message) => {
      const res = JSON.parse(message.content);
      console.log(`Received job with input ${res.number}`);
          //acknowledge when received the message
    },{noAck:true});
  } catch (err) {
    console.log(err);
  }
}

connect();

