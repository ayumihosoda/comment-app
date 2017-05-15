function commentApp() {
	// pull input data and store in variable
	var name = document.getElementById("name").value
	var comment = document.getElementById("comment").value
	// make the above var into text node and name them as var
	var nameText = document.createTextNode("Name: " + name)
	var commentText = document.createTextNode("Comment: " + comment)
	// create element h3, p
	var newName = document.createElement("h3")
	var newComment = document.createElement("p")
	// add nameText and commentText inside newly created elements
	newName.appendChild(nameText)
	newComment.appendChild(commentText)
	// create element li and add this u
	var newList = document.createElement("li")
	newList.className = "list-group-item"
	// add newName and newComment under newList
	newList.appendChild(newName)
	newList.appendChild(newComment)
	document.getElementById("list").appendChild(newList)

}
