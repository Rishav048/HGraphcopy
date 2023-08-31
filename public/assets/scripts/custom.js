// Adds "active-link" class to the current link (highlights it) - in sidebar //
const navLinks = document.querySelectorAll(".nav-links");
// Loop through each anchor tag
navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    // event.preventDefault();

    // Remove the "active-link" class from all anchor tags
    navLinks.forEach(function (link) {
      link.classList.remove("active-link");
    });

    // Add the "active-link" class to the clicked anchor tag
    this.classList.add("active-link");
  });
});

// Adds "line-active" class to the current link (highlights it) - in sidebar //
const barLinks = document.querySelectorAll(".list-pair");
// Loop through each anchor tag
barLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    barLinks.forEach(function (link) {
      link.classList.remove("line-active");
    });
    this.classList.add("line-active");
  });
});

// Add category in dropdown menu & tags //
$(document).ready(function () {
  // Add click event handler to checkboxes
  $("input[name='category']").on("change", function () {
    const selectedCategories = [];
    // Loop through all checked checkboxes and collect their labels
    $("input[name='category']:checked").each(function () {
      const label = $(this).siblings("label").find(".fw700").text();
      selectedCategories.push(label);
    });

    // Update the <p> tag with selected categories
    const $previewTags = $(".preview-tags");
    $previewTags.empty();
    selectedCategories.forEach(function (category) {
      const categoryTag = `<li>
                            <div class="bdrs10 p-tag">
                              <span class="fz12 text-nowrap text-uppercase">${category}</span>
                              <a href="#">
                                <img src="./assets/images/icons/icon-close-light.svg" alt="" />
                              </a>
                            </div>
                          </li>`;
      $previewTags.append(categoryTag);
    });
  });
});

// Datatable customize //
$(document).ready(function () {
  let table = $(".holograf-table");

  let oTable = table.DataTable({
    // dom: '<"top"f>rt<"bottom"ipl><"clear">',
    dom: "Bfrt<'bottom'ipl>",
    buttons: ["copy", "pdf", "excel", "csv"],
    language: {
      paginate: {
        first: '<img src="../images/icons/First.svg" alt=""',
        previous: '<img src="../images/icons/Prev.svg" alt=""',
        next: '<img src="../images/icons/Next.svg" alt=""',
        last: '<img src="../images/icons/Last.svg" alt=""',
      },
    },
    scrollY: "650px",
    scrollCollapse: true,
    paging: true,
    pageLength: 10,
    pagingType: "full_numbers",
    // sPaginationType: "listbox",
    // lengthMenu: "Page _MENU_ of 10",
    // lengthMenu: [
    //   [10, 20, 30, -1],
    //   ["1", "2", "3", "Show all"],
    // ],
    // initComplete: (settings, json) => {
    //   $(".dataTables_paginate").appendTo(".cdt-pagination");
    //   $(".dataTables_info").appendTo(".cdt-info");
    //   $('.dataTables_length').appendTo('.cdt-length');
    // },
    drawCallback: function (settings) {
      // Gets executed after the table is redrawn
    },
  });

  $(".datatable-search").on("keyup search", function () {
    oTable.search($(this).val()).draw();
  });

  $(".cdt-copy").click(function () {
    $(this)
      .closest(".custom-data-table")
      .find(".buttons-copy")
      .trigger("click");
  });

  $(".cdt-export-pdf").click(function () {
    $(this).closest(".custom-data-table").find(".buttons-pdf").trigger("click");
  });

  $(".cdt-export-excel").click(function () {
    $(this)
      .closest(".custom-data-table")
      .find(".buttons-excel")
      .trigger("click");
  });

  $(".cdt-export-csv").click(function () {
    $(this).closest(".custom-data-table").find(".buttons-csv").trigger("click");
  });
});

// Customize check blocks
$(document).ready(function () {
  // Add click event handler to checkboxes
  $("input[name='category']").on("change", function () {
    const selectedCategories = [];
    // Loop through all checked checkboxes and collect their labels
    $("input[name='category']:checked").each(function () {
      const label = $(this).siblings("label").find(".fw700").text();
      selectedCategories.push(label);
    });

    // Update the <p> tag with selected categories
    const $previewTags = $(".preview-tags");
    $previewTags.empty();
    selectedCategories.forEach(function (category) {
      const categoryTag = `<li>
                          <div class="bdrs10 p-tag">
                            <span class="fz12 text-nowrap text-uppercase">${category}</span>
                            <a href="#">
                              <img src="./assets/images/icons/icon-close-light.svg" alt="" />
                            </a>
                          </div>
                        </li>`;
      $previewTags.append(categoryTag);
    });
  });
});

// Customize number field arrows
$(document).ready(function () {
  jQuery(
    '<div class="form-group--number-nav"><button class="form-group--number-button form-group--number-up">&#xf106;</button><button class="form-group--number-button form-group--number-down">&#xf107</button></div>'
  ).insertAfter(".form-group--number input");
  jQuery(".form-group--number").each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".form-group--number-up"),
      btnDown = spinner.find(".form-group--number-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      event.preventDefault();
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      event.preventDefault();
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });
});




// For OTP integration in Login/OTP page

// const otpInputs = document.querySelectorAll(".otp-input");

// function moveFocus(currentIndex) {
//   if (currentIndex < otpInputs.length - 1) {
//     otpInputs[currentIndex].blur();
//     otpInputs[currentIndex + 1].removeAttribute("disabled");
//     otpInputs[currentIndex + 1].focus();
//   } else {
//     otpInputs[currentIndex].blur();
//   }
// }

// otpInputs.forEach((input, index) => {
//   input.addEventListener("input", () => {
//     const currentValue = input.value;
//     if (currentValue.length === 1) {
//       moveFocus(index);
//     }
//   });

//   input.addEventListener("keydown", (event) => {
//     // Allow only digits (0-9) and some special keys like Backspace, Arrow Left/Right
//     const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight"];
//     if (!/^\d$/.test(event.key) && !allowedKeys.includes(event.key)) {
//       event.preventDefault();
//     }
//   });
// });

// otpInputs[0].focus()
