const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated
const NoteSchema = new mongoose.Schema({
	noteTitle: {
		type: String,
		required: true
	},
	noteDescription: String,
	priority: {
		type: String,
		required: true,
		validate(v){
			if(v !== "HIGH" && v !== "MEDIUM" && v !== "LOW"){
				throw new Error("Priority is invalid.");
			}
		}
	},
	dateAdded: Date,
	dateUpdated: Date
});

const Note = mongoose.model("notes", NoteSchema);
module.exports = Note;
