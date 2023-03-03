const amqp = require("amqplib");

const msg = { number: 5 };
async function connect() {
  try {
    //create a connection
    const connection = await amqp.connect("amqp://localhost:5672");
    //create a channel
    const channel = await connection.createChannel();
    //create a queue
    const result = await channel.assertQueue("logdata",{durable:false});
    //send msg on queue
    channel.sendToQueue("logdata",Buffer.from(JSON.stringify(msg)));

    console.log(`job sent successfully ${msg.number}`);
    setTimeout(function() {
      connection.close();
      process.exit(0)
      }, 500);
    
  } catch (err) {
    console.log(err);
  }
}

connect();