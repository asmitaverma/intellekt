var prompts = [
    {
        prompt: 1,
        weight: 1,
        class: 'group0',
        trait: 0,
        ans: 'c'
    },
    {
        prompt: 2,
        weight: 1,
        class: 'group1',
        trait: 0,
        ans: 'e'
    },
    {
        prompt: 3,
        weight: 1,
        class: 'group2',
        trait: 0,
        ans: 'e'
    },
    {
        prompt: 4,
        weight: 1,
        class: 'group3',
        trait: 0,
        ans: 'd'
    },
    {
        prompt: 5,
        weight: 1,
        class: 'group4',
        trait: 0,
        ans: 'e'
    },
    {
        prompt: 6,
        weight: -1,
        class: 'group5',
        trait: 0,
        ans: 'e'
    },
    {
        prompt: 7,
        weight: -1,
        class: 'group6',
        trait: 0,
        ans: 'c'
    },
    {
        prompt: 8,
        weight: -1,
        class: 'group7',
        trait: 0,
        ans: 'e'
    },
    {
        prompt: 9,
        weight: -1,
        class: 'group8',
        trait: 0,
        ans: 'c'
    },
    {
        prompt: 10,
        weight: -1,
        class: 'group9',
        trait: 0,
        ans: 'e'
    }     
]

    // This array stores all of the possible values and the weight associated with the value. 
    // The stronger agreeance/disagreeance, the higher the weight on the user's answer to the prompt.
    // If the weight of a question is negative for some trait, then the weight of their answer gets inverted
var prompt_values = [
    {
        value: 'a', 
        class: 'btn-default btn-strongly-agree',
        btnvalue: 1,
    },
    {
        value: 'b',
        class: 'btn-default btn-agree',
        btnvalue: 2
    }, 
    {
        value: 'c', 
        class: 'btn-default xyz',
        btnvalue: 3
    },
    {
        value: 'd',
        class: 'btn-default btn-disagree',
        btnvalue: 4
    },
    { 
        value: 'e',
        class: 'btn-default btn-strongly-disagree',
        btnvalue: 5
    }
]


    // For each prompt, create a list item to be inserted in the list group
function createPromptItems() {
    
    for (var i = 0; i < prompts.length; i++) {
        var prompt_li = document.createElement('li');
        var img_url = "images/nonverb/" + prompts[i].prompt.toString() + ".png";
        var prompt_img = document.createElement('img');
        prompt_img.src = img_url;
        
        prompt_li.setAttribute('class', 'list-group-item prompt');
        prompt_li.appendChild(prompt_img);
    
        document.getElementById('quiz').appendChild(prompt_li);
    }
}
    
function createValueButtons() {
    for (var li_index = 0; li_index < prompts.length; li_index++) {
        var group = document.createElement('div');
        group.className = 'btn-group btn-group-justified';
    
        for (var i = 0; i < prompt_values.length; i++) {
            var btn_group = document.createElement('div');
            btn_group.className = 'btn-group';
    
            var button = document.createElement('button');
            var button_text = document.createTextNode(prompt_values[i].value);
            button.className = prompts[li_index].class + ' value-btn btn ' + prompt_values[i].class + ' value ' + prompt_values[i].btnvalue;     //group trait number
            button.appendChild(button_text);
    
            btn_group.appendChild(button);
            group.appendChild(btn_group);
    
            document.getElementsByClassName('prompt')[li_index].appendChild(group);
        }
    }
}
    
createPromptItems();
createValueButtons();
    
    // Keep a running total of the values user has selected. 
    // Calculation will sum all of the answers 
var total = 0;

    
    // Get the correct answer associated to group number
function findPromptAnswer(prompts, group) {
    var answer = 0;
    
    for (var i = 0; i < prompts.length; i++) {
        if (prompts[i].class === group) {
            answer = prompts[i].ans;
        }
    }
    
    return answer;
}
    
    // Get the score associated to the user's response
    // parameters: button text, prompts(questions), this_group (question number)
function findValueWeight(value, prompts, group) {
    var promptAnswer = findPromptAnswer(prompts, group);
    
    if(promptAnswer.toString() == value.toString())   return 1;
    return 0;
}
    
    // When user clicks a value to respond to the prompt, display to the user what they selected
$('.value-btn').mousedown(function () {
    var classList = $(this).attr('class');
        // console.log(classList);
    var classArr = classList.split(" ");
        // console.log(classArr);
    var this_group = classArr[0];           //question number group0, group1, group2, ..., group9
        // console.log(this_group);
    var this_value = classArr[6];           //button value 1,2,3,4,5
    // console.log(this_value);
    
        // If button is already selected, de-select it when clicked and subtract any previously added values to the total
        // Otherwise, de-select any selected buttons in group and select the one just clicked
        // And subtract deselected weighted value and add the newly selected weighted value to the total
    if($(this).hasClass('active')) {
        $(this).removeClass('active');
        total -= findValueWeight($(this).text(), prompts, this_group)
    } else {
        total -= findValueWeight($('.'+this_group+'.active').text(), prompts, this_group);
        $('.'+this_group).removeClass('active');
    
        $(this).addClass('active');
        total += findValueWeight($(this).text(), prompts, this_group);
    }
    
    console.log(total);
})
        
$('#submit-btn').click(function () {
    localStorage.setItem("nonverb_score", JSON.stringify(total));
    var x = localStorage.getItem("nonverb_score");
    console.log(x);
})

// "[23, 34, 12, 89, 4], 8, 3, 4"