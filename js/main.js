function commentApp() {
	// pull input data and store in variable
	var nameInput = document.getElementById("name").value
	var commentInput = document.getElementById("comment").value
	//create variable for timeStamp
	var timeStamp =  new Date();
	//make the above var into text node and name them as var
	var timeStampOn = document.createTextNode(" On " + timeStamp)
	var nameText = document.createTextNode(nameInput + " says ...")
	var commentText = document.createTextNode(commentInput)
	//create li
	var newList = document.createElement("li")
	// create class for li
	newList.className = "list-group-item"
	// create h3 and p tags for nameText and comment Text
	var newName = document.createElement("h3")
	newName.appendChild(nameText)
	// create p tag for newComment
	var newComment = document.createElement("p")
	newComment.appendChild(commentText)
	//create p tag for timestamp
	var newTimeStamp = document.createElement("p")
	//append Date() to timeStamp
	newTimeStamp.appendChild(timeStampOn)

	// add var nameText and commentText under li
	newList.appendChild(newTimeStamp)
	newList.appendChild(newName)
	newList.appendChild(newComment)
	// append li to ul
	document.getElementById("list").appendChild(newList)

}
