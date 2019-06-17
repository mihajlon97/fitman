const mongoose             = require('mongoose');
const { AccountSchema }    = require('./Account');

let schema = new mongoose.Schema({
	title            : { type: String },
	text             : { type: String },
	media_url        : { type: String },
	type             : { type: String },
	field            : { type: String },
	start            : { type: String },
	end              : { type: String },
	trainer          : { type: AccountSchema },
	manager          : { type: AccountSchema },
});

module.exports.RequestSchema = schema;
module.exports.Requests = mongoose.model('Requests', schema);
