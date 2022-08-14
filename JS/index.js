$(document).ready(function () {
  $(".btn").click(function (e) {
    const linked = document
      .querySelector(".lingking")
      .getAttribute("data-show");

    if (linked === "false") {
      $(".lingking").attr("data-show", "true");
      $(".btn").html(`<i class="fas fa-times fa-2x"></i>`);
    } else {
      $(".lingking").attr("data-show", "false");
      $(".btn").html(`<i class="fas fa-bars fa-2x"></i>`);
    }
    e.preventDefault();
  });
});
