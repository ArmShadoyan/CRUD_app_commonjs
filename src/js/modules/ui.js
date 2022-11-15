module.exports = {
	title: document.createElement("h1"),
	subTitle : document.createElement("p"),
	form : document.createElement("form"),
	screenBlock: document.createElement("div"),
	screenInput: document.createElement("input"),
	screenAddBtn: document.createElement("button"),
	listsBlock: document.createElement("div"),

elementOptions () {
	this.title.textContent = "CRUD";
	this.subTitle.textContent = "Asyn Application"

	this.form.id = "app-form";
	this.screenBlock.id = "screenBlock";
	this.screenInput.type = "text";
	this.screenInput.placeholder = "Type here...";
	this.screenAddBtn.textContent = "ADD";
	this.screenAddBtn.classList.add("fa", "fa-plus-circle");
	this.screenAddBtn.id = "screenAddBtn";
	this.listsBlock.id = "listsBlock";
},

appendElements () {
	root.append(this.title, this.subTitle, this.form, this.listsBlock);
	this.form.append(this.screenBlock);
	this.screenBlock.append(this.screenInput, this.screenAddBtn);
},

toHTML(id,title,state = false){
	this.listsBlock.innerHTML += `
	<div class="listsBlockItem">
			<div class="listsBlockItemContent">
				<span>${id}</span>
				<input type="text" value="${title}" readonly>
			</div>

			<div class="buttons">
				<input type="checkbox" class="checkbox" name="item${id}" ${state ? "checked" : ""}>
				<button class="removeBtn fa fa-trash"></button>
				<button class="editBtn fa fa-pencil"></button>
				<button class="saveBtn fa fa-save"></button>
			</div>
			
	</div>
	`
},
start () {
	this.elementOptions();
	this.appendElements();
}
};