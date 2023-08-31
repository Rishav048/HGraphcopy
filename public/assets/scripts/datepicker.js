// Date-Pikers
// note --> Add this plugin in your page <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>

if (typeof customDatepicker === 'undefined' || typeof customDatepicker === 'undefined') {
  const customDatepicker = (idname) => {
    $(function () {
      var currdate = new Date();
      $(`#${idname}`).datepicker({
        dateFormat: "yy-mm-dd",
        duration: "fast",
      });

      //   .datepicker("setDate", currdate);
    });
  };

  // Product-S1 Page
  customDatepicker("date-picker1-product-s1");
  customDatepicker("date-picker2-product-s1");
  customDatepicker("date-picker3-product-s1");

  // Batch-S1
  customDatepicker("date-picker1-batch-s1");
  customDatepicker("date-picker2-batch-s1");

  // Batch-S2
  customDatepicker("date-picker1-batch-s2");

  // Inventory Pl-2 S2
  customDatepicker("date-picker1-inventorypl02-s2");
  customDatepicker("date-picker2-inventorypl02-s2");

  const ButtonClickDatePicker = (buttonId, container) => {
    // Initialize a flag to track whether the date-picker container is open
    let isContainerOpen = false;
    $(document).ready(function () {
      // Show date-picker container on button click
      $(`#${buttonId}`).click(function () {
        // If the container is already open, clicking the button again should close it
        if (isContainerOpen) {
          $(`#${container}`).hide();
          isContainerOpen = false;
        } else {
          $(`#${container}`)
            .show()
            .position({
              my: "right top",
              at: "right bottom",
              of: $(this),
            });
          isContainerOpen = true;
        }
      });
      // Initialize date-picker with options
      $(`#${container}`).datepicker({
        dateFormat: "yy-mm-dd", // Change the date format if needed
        onSelect: function () {
          // When a date is selected, hide the container and reset the flag
          $(`#${container}`).hide();
          isContainerOpen = false;
        },
      });

      // const containerclass = ".ui-datepicker-header";
      // $(document).on("click", function (event) {
      //   const target = event.target;
      //   const containerElement = $(containerclass)[0];

      //   // Check if the clicked element is not the container or a descendant of the container
      //   if (target !== containerElement && !$(containerElement).has(target).length) {
      //     // If it's not the container or a descendant of the container, hide the datepicker
      //     $(`#${container}`).hide();
      //   }
      // });

      //Hide the date-picker on document click if the click is outside the date-picker container or the button
      $(document).click(function (event) {
        if (!$(event.target).closest(`#${container}, #${buttonId}`).length) {
          $(`#${container}`).hide();
          isContainerOpen = false;
        }
      });
    });
  };

  ButtonClickDatePicker(`datepicker-btn-b-s2`, `datepicker-container-b-s2`);
  ButtonClickDatePicker(`datepicker-btn-pg-s5`, `datepicker-container-pg-s5`);
  ButtonClickDatePicker(
    `datepicker-btn-p-ng-s5`,
    `datepicker-container-p-ng-s5`
  );
  ButtonClickDatePicker(`datepicker-btn-ig-l`, `datepicker-container-ig-l`);
  ButtonClickDatePicker(`datepicker-btn-i-s5`, `datepicker-container-i-s5`);
  ButtonClickDatePicker(`datepicker-btn-p-g-l`, `datepicker-container-p-g-l`);
  ButtonClickDatePicker(`datepicker-btn-p-01`, `datepicker-container-p-01`);
  ButtonClickDatePicker(`datepicker-btn-p-02`, `datepicker-container-p-02`);
  ButtonClickDatePicker(`datepicker-btn-p-03`, `datepicker-container-p-03`);
  ButtonClickDatePicker(`datepicker-btn-p-04`, `datepicker-container-p-04`);
  ButtonClickDatePicker(`datepicker-btn-tc-01`, `datepicker-container-tc-01`);
    ButtonClickDatePicker(`datepicker-btn-tc-02`, `datepicker-container-tc-02`);
  ButtonClickDatePicker(
    `datepicker-btn-tc-null`,
    `datepicker-container-tc-null`
  );
  ButtonClickDatePicker(
    `datepicker-btn1-in-pl03`,
    `datepicker-container-in-pl03`
  );

  ButtonClickDatePicker(
    `datepicker-btn-index-01`,
    `datepicker-container-index-01`
  );
  ButtonClickDatePicker(
    `datepicker-btn-index-02`,
    `datepicker-container-index-02`
  );

  ButtonClickDatePicker(
    `datepicker-btn-index-03`,
    `datepicker-container-index-03`
  );

  ButtonClickDatePicker(
    `datepicker-btn-index-04`,
    `datepicker-container-index-04`
  );
  ButtonClickDatePicker(
    `datepicker-btn1-in-viewpage`,
    `datepicker-container1-in-viewpage`
  );
  ButtonClickDatePicker(
    `datepicker-btn2-in-viewpage`,
    `datepicker-container2-in-viewpage`
  );
  ButtonClickDatePicker(
    `datepicker-btn-reports-01`,
    `datepicker-container-reports-01`
  );
  ButtonClickDatePicker(
    `datepicker-btn-reports-02`,
    `datepicker-container-reports-02`
  );
  ButtonClickDatePicker(
    `datepicker-btn-reports-03`,
    `datepicker-container-reports-03`
  );
  ButtonClickDatePicker(
    `datepicker-btn-p-list-01`,
    `datepicker-container-p-list-01`
  );
  ButtonClickDatePicker(
    `datepicker-btn-p-list-02`,
    `datepicker-container-p-list-02`
  );

  }