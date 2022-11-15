"use strict";

//CRAD = crate (post),read(get),update(put),delete(delete);
const UI = require("./modules/ui");
const POST = require("./modules/postMethod");
const GET = require("./modules/getMethode");
const PUT = require("./modules/putMethode");
const DELETE = require("./modules/deleteMethode");
const COMPLETE = require("./modules/complete");

const root = document.querySelector("#root");
const url = "http://localhost:8888/todo";

UI.start(); 

const { form, screenInput} = UI;

POST(form,screenInput,url);

async function engine (){
	await GET(UI,url);
	PUT (
		document.querySelectorAll(".editBtn"),
		document.querySelectorAll(".saveBtn"),
		document.querySelectorAll(".listsBlockItemContent"),
		url
	);
	DELETE (
		document.querySelectorAll(".removeBtn"),
		url
	);
	COMPLETE(
		 url,
		 document.querySelectorAll(".buttons input"), 
		 document.querySelectorAll(".listsBlockItemContent")
		 );

}
engine();



