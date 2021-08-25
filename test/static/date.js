$('.datepicker').datepicker({
        daysOfWeekDisabled: [0],
        timepicker : 'true',
        format: 'dd/mm/yyyy',
        startDate: "today"
    });

const dateField = document.getElementById("id_date_field")
const timeField = document.getElementById("id_time_field")

const times_regular = [
'08:00', '08:30',
'09:00', '09:30',
'10:00', '10:30',
'11:00', '11:30',
'12:00', '12:30',
'13:00', '13:30',
'14:00', '14:30',
'15:00', '15:30',
'16:00', '16:30',
'17:00', '17:30',
'18:00', '18:30',
'19:00', '19:30',
'20:00'
]

const times_saturday = [
'08:00', '08:30',
'09:00', '09:30',
'10:00', '10:30',
'11:00', '11:30',
'12:00', '12:30',
'13:00',
]

//event triggered on date selection release
dateField.addEventListener("blur", (e) => {
    value = e.currentTarget.value
    values = e.currentTarget.value.split("/");
    
    date = new Date(values[2], values[1]-1, values[0]);

    //toggling time input based on date
    if (value === "") {
        timeField.selectedIndex = -1;
        timeField.options.length=0;
        timeField.disabled=true;
    }
    else {
        timeField.disabled=false;
    }

    //checking if date entered is a saturday
    if (date.getDay() == 6) {
        //populate list of time inputs up until 13:00
        timeField.options.length=0;
        Array.from(times_saturday).forEach(function(el) {

                let option = new Option(el, el);
                timeField.appendChild(option);
        });
    }
    //populate list of time inputs up until 20:00
    else {
        timeField.options.length=0
        Array.from(times_regular).forEach(function(el) {
                let option = new Option(el, el);
                timeField.appendChild(option);
        });
        
    }

});

