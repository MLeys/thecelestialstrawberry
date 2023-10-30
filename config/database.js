import mongoose from 'mongoose'

// DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false`
// by default in Mongoose 7.
mongoose.set('strictQuery', false)

mongoose.connect(
	'mongodb://127.0.0.1:27017/myapp' // < replace with your database name!
);

const db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', err => {
	console.log(err);
});