                                                                               


var input1 = $('<input>', {
    type:'text',
    name: 'fname',
    id: 'fname',
    placeholder: 'First Name',
    class: 'formContainerInput',
    required: 'required'
})
var input2 = $('<input>', {
    type:'text',
    name: 'lname',
    id: 'lname',
    placeholder: 'Last Name',
    class: 'formContainerInput',
    required: 'required'
})
var input3 = $('<input>', {
    type:'text',
    name: 'phone',
    id: 'phone',
    placeholder: 'Phone Number',
    class: 'formContainerInput',
    required: 'required'
})
var input4 = $('<input>', {
    type:'text',
    name: 'email',
    id: 'email',
    placeholder: 'Email',
    class: 'formContainerInput',
    required: 'required'
})
var input5 = $('<select>', {
    name: 'trades',
    id: 'trades',
    class: 'formContainerInput'

})
var input6 = $('<input>', {
    type:'text',
    name: 'location',
    id: 'location',
    placeholder: 'Enter your County: e.g. Nairobi',
    class: 'formContainerInput',
    required: 'required'


})

var input7 = $('<input>', {
    type:'button',
    name: 'submitInfo',
    id: 'submitInfo',
    class: 'submitInfo',
}).val("Submit")

var option1 = $('<option>', {
    value: 'Electrician',
   text: 'Electrician'
})
var option2 = $('<option>', {
    value: 'Plumber',
   text: 'Plumber'
})
var option3 = $('<option>', {
    value: 'Carpenter',
   text: 'Carpenter'
})
var option4 = $('<option>', {
    value: 'Mason',
   text: 'Mason'
})
var option5 = $('<option>', {
    value: 'Welder/Fabricator',
   text: 'Welder/Fabricator'
})
var option6 = $('<option>', {
    value: 'Tailor',
   text: 'Tailor'
})


var label1 = $('<label>', {
     for: 'fname',
     class: 'label'
}).text('First Name:')

var label2 = $('<label>', {
    for: 'lname',
    class: 'label'
}).text('Last Name')

var label3 = $('<label>', {
    for: 'phone',
    class: 'label'
}).text('Phone Number: ')

var label4 = $('<label>', {
    for: 'email',
    class: 'label'
}).text('Email: ')

var label5 = $('<label>', {
    for: 'email',
    class: 'label'
}).text('What is your trade?')

var label6 = $('<label>', {
    for: 'location',
    class: 'location'
}).text('What is your Location?')



     


        
         


      


$(document).ready(function() {

    $(".signUpButton").click(function(event){
        event.preventDefault()
      
        $(".formContainer").append(label1,input1,label2,input2,label3,input3,label4,
            input4,label5,input5.append(option1,option2,option3,option4,option5,option6),label6,input6,input7)

    })

    $(input7).click(function(event){

        console.log(event)
        const firstField = $(input1).val()
        const secondField = $(input2).val()
        const thirdField = $(input3).val()
        const fourthField = $(input4).val()
        const fifthField = $(input5).val()
        const sixthField = $(input6).val()


        const dataToSend = {
            first_name : firstField,
            last_name : secondField,
            phone_number: thirdField,
            email: fourthField,
            trade: fifthField,
            location: sixthField

        }

        if (!firstField || !secondField || !thirdField || !fourthField || !fifthField || !sixthField) {
            alert("Please fill out all the fields!")
        }
        else{
            const dataToSend = {
                first_name : firstField,
                last_name : secondField,
                phone_number: thirdField,
                email: fourthField,
                trade: fifthField,
                location: sixthField
    
            }
            const url = '/submit'
        $.ajax({
            type: 'POST',
            url: url,
            data: dataToSend,
            success: function(response) {
                console.log('Server Response:', response);
            
            if (response.message === 'Data received and processed.') {
                // var success = $('<h2>', {
                //     id: 'successH2',
                //     class: 'successH2',
                //     text: 'Profile created successfully!'
                // });
                // $(".formContainer").append(success);
                alert("Profile Created Successfully!")
            }
            },
            error: function() {

                console.error('Error sending data to the server');
            }
        })
        }
        
    })


});


