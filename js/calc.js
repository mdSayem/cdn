var value_1 = 1.00;
            var value_2 = 1.0;
            var value_3 = 0.25;
            var elm_value_1 = document.getElementById("value_1");
            var elm_value_2 = document.getElementById("value_2");
            var elm_value_3 = document.getElementById("value_3");
            var calc_result = document.getElementById("calc_result");

            function formatNumber(num) {
                return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }

            function calculate_result(num1, num2, num3) {
                var result = (((10 * num2 * num3 * (1 - 0.25)) / num1) - 1) * 100
                calc_result.innerHTML = parseFloat(result).toFixed(2) + "%";
            }
            calculate_result(value_1, value_2, value_3);

            $(function () {
                $('[data-toggle="popover"]').popover()
            });

            $(".js-range-slider").ionRangeSlider({
                type: "single",
                skin: "round",
                grid: true,
                min: 0,
                max: 5,
                from: 1.0,
                step: 0.25,
                from_min: 0.25,      // set min position for FROM handle (replace FROM to TO to change handle)
                from_max: 5,      // set max position for FROM handle
                from_shadow: false,
                drag_interval: false,
                min_interval: null,
                max_interval: null,
                // max_postfix: "+",
                force_edges: false,     // force UI in the box
                hide_min_max: false,    // show/hide MIN and MAX labels
                hide_from_to: false,
                block: false,
                // prefix: "Age: ",
                // postfix: " years",
                onStart: function (data) {
                    // Called right after range slider instance initialised
                    console.log(data.input);        // jQuery-link to input
                    console.log(data.slider);       // jQuery-link to range sliders container
                    console.log(data.min);          // MIN value
                    console.log(data.max);          // MAX values
                    console.log(data.from);         // FROM value
                    console.log(data.from_percent); // FROM value in percent
                    console.log(data.from_value);   // FROM index in values array (if used)
                    console.log(data.to);           // TO value
                    console.log(data.to_percent);   // TO value in percent
                    console.log(data.to_value);     // TO index in values array (if used)
                    console.log(data.min_pretty);   // MIN prettified (if used)
                    console.log(data.max_pretty);   // MAX prettified (if used)
                    console.log(data.from_pretty);  // FROM prettified (if used)
                    console.log(data.to_pretty);    // TO prettified (if used)
                },

                onChange: function (data) {
                    // Called every time handle position is changed

                    console.log(data.from);
                    value_1 = data.from;
                    elm_value_1.innerHTML = "$" + formatNumber(parseFloat(data.from).toFixed(2));
                    calculate_result(value_1, value_2, value_3);
                },

                onFinish: function (data) {
                    // Called then action is done and mouse is released

                    console.log(data.to);
                },

                onUpdate: function (data) {
                    // Called then slider is changed using Update public method

                    console.log(data.from_percent);
                }
            });
            $(".js-range-slider2").ionRangeSlider({
                type: "single",
                skin: "round",
                grid: true,
                min: 0.0,
                max: 5.0,
                from: 1.0,
                step: 0.5,
                from_min: 0.5,      // set min position for FROM handle (replace FROM to TO to change handle)
                from_max: 5.0,      // set max position for FROM handle
                from_shadow: false,
                drag_interval: false,
                // min_interval: null,
                // max_interval: null,
                // max_postfix: "+",
                force_edges: false,     // force UI in the box
                hide_min_max: false,    // show/hide MIN and MAX labels
                hide_from_to: false,
                block: false,
                // prefix: "Age: ",
                // postfix: " years",
                onStart: function (data) {
                    // Called right after range slider instance initialised
                    console.log(data.input);        // jQuery-link to input
                    console.log(data.slider);       // jQuery-link to range sliders container
                    console.log(data.min);          // MIN value
                    console.log(data.max);          // MAX values
                    console.log(data.from);         // FROM value
                    console.log(data.from_percent); // FROM value in percent
                    console.log(data.from_value);   // FROM index in values array (if used)
                    console.log(data.to);           // TO value
                    console.log(data.to_percent);   // TO value in percent
                    console.log(data.to_value);     // TO index in values array (if used)
                    console.log(data.min_pretty);   // MIN prettified (if used)
                    console.log(data.max_pretty);   // MAX prettified (if used)
                    console.log(data.from_pretty);  // FROM prettified (if used)
                    console.log(data.to_pretty);    // TO prettified (if used)
                },

                onChange: function (data) {
                    // Called every time handle position is changed

                    console.log(data.from);
                    value_2 = data.from;
                    elm_value_2.innerHTML = parseFloat(data.from).toFixed(1) + "%";
                    calculate_result(value_1, value_2, value_3);
                },

                onFinish: function (data) {
                    // Called then action is done and mouse is released

                    console.log(data.to);
                },

                onUpdate: function (data) {
                    // Called then slider is changed using Update public method

                    console.log(data.from_percent);
                }
            });
            $(".js-range-slider3").ionRangeSlider({
                type: "single",
                skin: "round",
                grid: true,
                min: 0.00,
                max: 2.00,
                from: 0.25,
                step: 0.05,
                from_min: 0.05,      // set min position for FROM handle (replace FROM to TO to change handle)
                from_max: 2.00,      // set max position for FROM handle
                from_shadow: false,
                drag_interval: false,
                min_interval: null,
                max_interval: null,
                // max_postfix: "+",
                force_edges: false,     // force UI in the box
                hide_min_max: false,    // show/hide MIN and MAX labels
                hide_from_to: false,
                block: false,
                // prefix: "Age: ",
                // postfix: " years",
                onStart: function (data) {
                    // Called right after range slider instance initialised
                    console.log(data.input);        // jQuery-link to input
                    console.log(data.slider);       // jQuery-link to range sliders container
                    console.log(data.min);          // MIN value
                    console.log(data.max);          // MAX values
                    console.log(data.from);         // FROM value
                    console.log(data.from_percent); // FROM value in percent
                    console.log(data.from_value);   // FROM index in values array (if used)
                    console.log(data.to);           // TO value
                    console.log(data.to_percent);   // TO value in percent
                    console.log(data.to_value);     // TO index in values array (if used)
                    console.log(data.min_pretty);   // MIN prettified (if used)
                    console.log(data.max_pretty);   // MAX prettified (if used)
                    console.log(data.from_pretty);  // FROM prettified (if used)
                    console.log(data.to_pretty);    // TO prettified (if used)
                },

                onChange: function (data) {
                    // Called every time handle position is changed

                    console.log(data.from);
                    value_3 = data.from;
                    elm_value_3.innerHTML = "$" + parseFloat(data.from).toFixed(2);
                    calculate_result(value_1, value_2, value_3);
                },

                onFinish: function (data) {
                    // Called then action is done and mouse is released

                    console.log(data.to);
                },

                onUpdate: function (data) {
                    // Called then slider is changed using Update public method

                    console.log(data.from_percent);
                }
            });
