const noteModel = require('../models/NotesModel.js');
const express = require('express');
const router = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/notes', async (req, res) => {	
    //TODO - Write your code here to save the note
		const note = new noteModel(req.body);
		try{
			await note.save();
			res.send(note);
		}
		catch(err){
			res.status(500).send(err);
		}	
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', async (req, res) => {
		//TODO - Write your code here to returns all note
		const notes = await noteModel.find({});
		try{
			res.send(notes);
		}
		catch{
			res.status(500).send(err);
		}
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', async (req, res) => {
    //TODO - Write your code here to return onlt one note using noteid
		try{
			let note = await noteModel.findById(req.params.noteId);
			res.send(note);
		}
		catch(err){
			res.status(500).send(err);
		}
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/notes/:noteId', async (req, res) => {
	//TODO - Write your code here to update the note using noteid
	try{
		let note = await noteModel.findByIdAndUpdate(req.params.noteId, req.body)
		await noteModel.save();
		res.send(note);
	}
	catch (err){
		res.status(500).send(err);
	}
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/notes/:noteId', async (req, res) => {
  //TODO - Write your code here to delete the note using noteid
	try{
		let note = await noteModel.findByIdAndDelete(req.params.noteId)
		if(!note){
			res.status(200).send();
		}
	}
	catch(err){
		res.status(500).send(err);
	}
});

module.exports = router;
