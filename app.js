$(document).ready(function() {
    const submitButton = $(".submit");
    const displayInput = $(".display");
    const fillerInput = $(".filler");
  
    submitButton.on('click', function() {
        $("#comments").prepend(`
        <div class="response">
            <input class="deleteButton" type="button" value="Delete">
            <input class="editButton" type="button" value="Edit">
        </div> `
        )
      const name = displayInput.val();
      const opinion = fillerInput.val();

      const response = $("#comments .response:first");
  
      const newParagraph = $(`<p class="name">${name}</p>`);
      newParagraph.append(`<p class="opinion">${opinion}</p>`);
  
      response.append(newParagraph);

      const deleteButtons = document.querySelectorAll(".deleteButton");
        deleteButtons.forEach(function(deleteButton) {
        deleteButton.addEventListener("click", function() {
      const responseBox = this.closest(".response");
      responseBox.remove();
            });
        });
const nameInput = document.querySelector(".display");
const opinionInput = document.querySelector(".filler");
const editButtons = document.querySelectorAll(".editButton");

editButtons.forEach(function(editButton) {
  editButton.addEventListener("click", function() {
    nameInput.value = $(this).closest(".response").find(".name").text();
    opinionInput.value = $(this).closest(".response").find(".opinion").text();
  });
});
    });
  });



  

const deleteButtons = document.querySelectorAll(".deleteButton");
    deleteButtons.forEach(function(deleteButton) {
    deleteButton.addEventListener("click", function() {
      const responseBox = this.closest(".response");
      responseBox.remove();
    });
});


const nameInput = document.querySelector(".display");
const opinionInput = document.querySelector(".filler");
const editButtons = document.querySelectorAll(".editButton");

editButtons.forEach(function(editButton) {
  editButton.addEventListener("click", function() {
    nameInput.value = $(this).closest(".response").find(".name").text();
    opinionInput.value = $(this).closest(".response").find(".opinion").text();
  });
});



