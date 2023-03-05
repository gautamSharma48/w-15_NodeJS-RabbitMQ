# rabbit mq
 -open source distributed message queue
 -supports many communication protocol
 -act just like a middle ware where producer can produce a request 
  on  a server and consumer consume that request by pushing the server
-use amqp protocol
-establish a two way communication

# docker command for running server
docker run --name rabbitmq -p 5672:5672 rabbitmq


# rabbit mq protocol  
-use aqmp and aqmp have lots of client and node js has that client
 -queue
 -producer
 -consumer

# basics:-
  -A producer is a user application that sends messages.
  -A queue is a buffer that stores messages.
  -A consumer is a user application that receives messages.


-producer never sends any messages directly to a queue. Actually, 
quite often the producer doesn't even know if a message will be
 delivered to any queue at all.

-Instead, the producer can only send messages to an exchange. An exchange is a very simple thing. On one side it receives messages from producers and the other side it pushes them to queues. The exchange must know exactly what to do with a message it receives. Should it be appended to a particular queue? Should it be appended to many queues? Or should it get discarded. The rules for that are defined by the exchange type.

-There are a few exchange types available: direct, topic, headers and fanout. 
We'll focus on the last one -- the fanout. 
Let's create an exchange of this type, and call it logs:

Now, we can publish to our named exchange instead:

# channel.publish('logs', '', Buffer.from('Hello World!'));
The empty string as second parameter means that we don't want to send the message to any specific queue. We want only to publish it to our 'logs' exchange.

# binding:-
We've already created a fanout exchange and a queue. Now we need to tell the exchange to send messages to our queue. That relationship between exchange and a queue is called a binding.

# Buffer:-
 -buffer is a class that provide you handle binary data.
 -it is a raw memory allocation that can store and manipulate binary data, such as bytes of an image file, audio file, or any other file that contains non-textual data.

 -A buffer is similar to an array of integers but corresponds to a raw memory allocation 
