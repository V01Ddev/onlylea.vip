let sections = [];
let images = [];

async function loadData() {
    try {
        const image_Response = await fetch("api/images");
        const files_Data = await image_Response.json();
        files_Data.forEach(val => {
            images.push(val);
        });


        const sections_Response = await fetch("/api/sections");
        const sections_Data = await sections_Response.json();
        sections_Data.forEach(val => {
            sections.push(val);
        });

    } catch(error) {
        console.error("Failed to get the data", error);
    }
}

$(document).ready(async function() {
    console.log("Document Loaded, running code.");
    $('#landing-id').css('filter', 'blur(0)');
    await loadData();

        /*
            $("<label>", {class: "page-label"})
                .append($("<h2>").text(page_no))
                .append($("<img>", {src: "/static/tmp_files/thm/" + id + ".png"}))
                .append($("<input>", {type: "checkbox", value: 'True', name: "checkbox_" + id}).prop('checked', true))
                .append($("<input>", {type: "text", name: 'text_' + id, value: text_to_append[i][j]}))
                .appendTo(".checkboxes-" + i);
        */

    for (var i=0; i<sections.length; i++){
        var sectionClass = sections[i]+"-section"
        $("<section>", {class: sectionClass}).appendTo(".content-section");
        $("<h3>").text(sections[i]+" pics").appendTo("." + sectionClass);
        $("<ul>", {class: sections[i]+"-ul"}).appendTo("." + sectionClass)

        for (var j=0; j<images[i].length; j++){
            console.log(images[i][j]);
            var img_src="static/src/" + sections[i] + "/" + images[i][j];
            $("<li>").append($("<img>", {class: "the-images", src:img_src})).appendTo("."+sections[i]+"-ul");
        }
    }
});                                                                                         
