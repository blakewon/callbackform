const table = document.getElementById("mytable")


table.addEventListener("click", (event) => {
    //archive button
    if (event.target.textContent === "Archive") {
        const button = event.target;
        const pk = button.getAttribute('id').slice(0, -1);
        const targetNode = document.getElementById(pk)

        //remove item from page
        targetNode.parentNode.removeChild(targetNode);

        //send POST, this is handled in views.py
        var http = new XMLHttpRequest();
        http.open("POST", '', true);
        http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        token ="archived=True&csrfmiddlewaretoken=" + csrftoken + "&pk="+pk;
        http.send(token)
    }
    else if (event.target.textContent === "Comment") {

        //get target node, id and the button itself
        const button = event.target;
        const pk = button.getAttribute('id').slice(0, -1);
        const targetNode = document.getElementById(pk + 'c');

        //initialize text-box
        const input = document.createElement('input');
        input.type='text';
        input.value=targetNode.textContent.slice(9);
        targetNode.parentNode.insertBefore(input, targetNode);

        //cleanup
        targetNode.parentNode.removeChild(targetNode);
        button.textContent="Save";
        button.className = "btn btn-sm btn-success";
    }   
    else if (event.target.textContent === "Save") {
        const button = event.target;
        const pk = button.getAttribute('id').slice(0, -1);
        const targetNode = document.getElementById(pk + 'l');

        //initialize list node
        const input = targetNode.lastElementChild;
        const li = document.createElement("LI");
        li.setAttribute("id", pk + "c")
        li.textContent = "Comment: " + input.value;

        //cleanup
        targetNode.removeChild(targetNode.lastElementChild);
        targetNode.appendChild(li);
        button.textContent="Comment";
        button.className = "btn btn-sm btn-info";

        //send POST, this is handled in views.py
        var http = new XMLHttpRequest();
        http.open("POST", '', true);
        http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        token ="comment=" + input.value+ "&csrfmiddlewaretoken=" + csrftoken + "&pk="+pk;
        http.send(token)
    }   
    
})