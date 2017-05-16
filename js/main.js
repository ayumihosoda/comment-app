function commentApp() {
	// pull input data and store in variable
	var nameInput = document.getElementById("name").value
	var commentInput = document.getElementById("comment").value
	// make the above var into text node and name them as var
	var nameText = document.createTextNode("My Name: " + nameInput)
	var commentText = document.createTextNode("Message : " + commentInput)
	//create li
	var newList = document.createElement("li")
	// //create class for li
	newList.className = "list-group-item"
	// create h3 and p tags for nameText and comment Text
	var newName = document.createElement("h3")
	newName.appendChild(nameText)
	// create p tag
	var newComment = document.createElement("p")
	newComment.appendChild(commentText)
	// add var nameText and commentText under li
	newList.appendChild(newName)
	newList.appendChild(newComment)
	// append li to ul
	document.getElementById("list").appendChild(newList)
}
