const callback = document.getElementById("callback");
const creation = document.getElementById("creation");

function sort_table_by_date_callback(table,  asc=true, column) {
    const dir_modifier = asc ? 1 : -1;
    const t_body = table.tBodies[0];
    const rows = Array.from(t_body.querySelectorAll("tr"));


    //sort each row
    const sorted_rows = rows.sort((a, b) => {
        if (column == "callback") {
            a_content = a.children[1];
            b_content = b.children[1];
        }
        else {
            a_content = a.children[2];
            b_content = b.children[2];
        }
        if (a_content.textContent.trim()=="") {
            return 1;
        }
        if (b_content.textContent.trim()=="") {
            return -1;
        }
            //string formatting..
            tmp_date_a = a_content.textContent.trim().split(" ")[0].split("/");
            tmp_date_b = b_content.textContent.trim().split(" ")[0].split("/");
            tmp_time_a = a_content.textContent.trim().split(" ")[1];
            tmp_time_b = b_content.textContent.trim().split(" ")[1];

            //initializing dates for comparing
            date_a = new Date(tmp_date_a[0], tmp_date_a[1] -1, tmp_date_a[2], tmp_time_a.split(":")[0], tmp_time_a.split(":")[1]);
            date_b = new Date(tmp_date_b[0], tmp_date_b[1] -1, tmp_date_b[2], tmp_time_b.split(":")[0], tmp_time_b.split(":")[1]);
           

        return (date_a - date_b)*dir_modifier;
    });
    //remove all existing tr's from table
    while (t_body.firstChild) {
        t_body.removeChild(t_body.firstChild)
    }
    //re-add newly sorted rows
    t_body.append(...sorted_rows);

}

callback.addEventListener("click", (e) => {

    if (e.target.getAttribute("sorted") == "true") {
        sort_table_by_date_callback(document.querySelector("table"), false, "callback");
        e.target.setAttribute("sorted", "false")
    }
    else {
        sort_table_by_date_callback(document.querySelector("table"), true, "callback");
        e.target.setAttribute("sorted", "true")
    }
});

creation.addEventListener("click", (e) => {
    if (e.target.getAttribute("sorted") == "true") {
        sort_table_by_date_callback(document.querySelector("table"), false, "creation");
        e.target.setAttribute("sorted", "false")
    }
    else {
        sort_table_by_date_callback(document.querySelector("table"), true, "creation");
        e.target.setAttribute("sorted", "true")
    }
});

