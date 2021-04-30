// A personality quiz

// This is an array of objects that stores the personality trait that is prompted to the user and the weight for each prompt. 
// If a personality trait is considered more introverted, it will have a negative weight.
// If a personlity trait is considered more extroverted, it will have a positive weight.

var prompts_o = [
    {
        prompt: 'Am the life of the party.',
        weight: 1,
        class: 'group0',
        trait: 0
    },
    {
        prompt: 'Feel comfortable around people.',
        weight: 1,
        class: 'group1',
        trait: 0
    },
    {
        prompt: 'Start conversations.',
        weight: 1,
        class: 'group2',
        trait: 0
    },
    {
        prompt: 'Talk to a lot of different people at parties.',
        weight: 1,
        class: 'group3',
        trait: 0
    },
    {
        prompt: "Don't mind being the center of attention.",
        weight: 1,
        class: 'group4',
        trait: 0
    },
    {
        prompt: "Don't talk a lot.",
        weight: -1,
        class: 'group5',
        trait: 0
    },
    {
        prompt: 'Keep in the background.',
        weight: -1,
        class: 'group6',
        trait: 0
    },
    {
        prompt: 'Usually have little to say.',
        weight: -1,
        class: 'group7',
        trait: 0
    },
    {
        prompt: "Don't like to draw attention to myself.",
        weight: -1,
        class: 'group8',
        trait: 0
    },
    {
        prompt: 'Am quiet around strangers.',
        weight: -1,
        class: 'group9',
        trait: 0
    },
    {
        prompt: 'Am interested in people.',
        weight: 1,
        class: 'group10',
        trait: 1
    },
    {
        prompt: "Sympathize with others' feelings.",
        weight: 1,
        class: 'group11',
        trait: 1
    },
    {
        prompt: "Have a soft heart.",
        weight: 1,
        class: 'group12',
        trait: 1
    },
    {
        prompt: "Take time out for others.",
        weight: 1,
        class: 'group13',
        trait: 1
    },
    {
        prompt: "Feel others' emotions.",
        weight: 1,
        class: 'group14',
        trait: 1
    },
    {
        prompt: "Make people feel at ease.",
        weight: 1,
        class: 'group15',
        trait: 1
    },
    {
        prompt: "Am not really interested in others.",
        weight: -1,
        class: 'group16',
        trait: 1
    },
    {
        prompt: "	Insult people.",
        weight: -1,
        class: 'group17',
        trait: 1
    },
    {
        prompt: "Am not interested in other people's problems.",
        weight: -1,
        class: 'group18',
        trait: 1
    },
    {
        prompt: "Feel little concern for others.",
        weight: -1,
        class: 'group19',
        trait: 1
    },
    {
        prompt: "Am always prepared.",
        weight: 1,
        class: 'group20',
        trait: 2
    },
    {
        prompt: "Pay attention to details.",
        weight: 1,
        class: 'group21',
        trait: 2
    },
    {
        prompt: "Get chores done right away.",
        weight: 1,
        class: 'group22',
        trait: 2
    },
    {
        prompt: "Like order.",
        weight: 1,
        class: 'group23',
        trait: 2
    },
    {
        prompt: "Follow a schedule.",
        weight: 1,
        class: 'group24',
        trait: 2
    },
    {
        prompt: "Am exacting in my work.",
        weight: 1,
        class: 'group25',
        trait: 2
    },
    {
        prompt: "Leave my belongings around.",
        weight: -1,
        class: 'group26',
        trait: 2
    },
    {
        prompt: "Make a mess of things.",
        weight: -1,
        class: 'group127',
        trait: 2
    },
    {
        prompt: "Often forget to put things back in their proper place.",
        weight: -1,
        class: 'group28',
        trait: 2
    },
    {
        prompt: "Shirk my duties.",
        weight: -1,
        class: 'group29',
        trait: 2
    },
    {
        prompt: "Am relaxed most of the time.",
        weight: 1,
        class: 'group30',
        trait: 3
    },
    {
        prompt: "Seldom feel blue.",
        weight: 1,
        class: 'group31',
        trait: 3
    },
    {
        prompt: "Get stressed out easily.",
        weight: -1,
        class: 'group32',
        trait: 3
    },
    {
        prompt: "Worry about things.",
        weight: -1,
        class: 'group33',
        trait: 3
    },
    {
        prompt: "Am easily disturbed.",
        weight: -1,
        class: 'group34',
        trait: 3
    },
    {
        prompt: "Get upset easily.",
        weight: -1,
        class: 'group35',
        trait: 3
    },
    {
        prompt: "Change my mood a lot.",
        weight: -1,
        class: 'group36',
        trait: 3
    },
    {
        prompt: "Have frequent mood swings.",
        weight: -1,
        class: 'group37',
        trait: 3
    },
    {
        prompt: "Get irritated easily.",
        weight: -1,
        class: 'group38',
        trait: 3
    },
    {
        prompt: "Often feel blue.",
        weight: -1,
        class: 'group39',
        trait: 3
    },
    {
        prompt: "Have a rich vocabulary.",
        weight: 1,
        class: 'group40',
        trait: 4
    },
    {
        prompt: "Have a vivid imagination.",
        weight: 1,
        class: 'group41',
        trait: 4
    },
    {
        prompt: "Have excellent ideas.",
        weight: 1,
        class: 'group42',
        trait: 4
    },
    {
        prompt: "Am quick to understand things.",
        weight: 1,
        class: 'group43',
        trait: 4
    },
    {
        prompt: "Use difficult words.",
        weight: 1,
        class: 'group44',
        trait: 4
    },
    {
        prompt: "Spend time reflecting on things.",
        weight: 1,
        class: 'group45',
        trait: 4
    },
    {
        prompt: "Am full of ideas.",
        weight: 1,
        class: 'group46',
        trait: 4
    },
    {
        prompt: "Have difficulty understanding abstract ideas.",
        weight: -1,
        class: 'group47',
        trait: 4
    },
    {
        prompt: "Am not interested in abstract ideas.",
        weight: -1,
        class: 'group48',
        trait: 4
    },
    {
        prompt: "Do not have a good imagination.",
        weight: -1,
        class: 'group49',
        trait: 4
    }

    
]

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}
    
var prompts = shuffle(prompts_o)
    // This array stores all of the possible values and the weight associated with the value. 
    // The stronger agreeance/disagreeance, the higher the weight on the user's answer to the prompt.
var prompt_values = [
    {
        value: 'Strongly Agree', 
        class: 'btn-default btn-strongly-agree',
        posweight: 5,
        negweight: 1
    },
    {
        value: 'Agree',
        class: 'btn-default btn-agree',
        posweight: 4,
        negweight: 2
    }, 
    {
        value: 'Neutral', 
        class: 'btn-default',
        posweight: 3,
        negweight: 3
    },
    {
        value: 'Disagree',
        class: 'btn-default btn-disagree',
        posweight: 2,
        negweight: 4
    },
    { 
        value: 'Strongly Disagree',
        class: 'btn-default btn-strongly-disagree',
        posweight: 1,
        negweight: 5
    }
]


    // For each prompt, create a list item to be inserted in the list group
function createPromptItems() {
    
    for (var i = 0; i < prompts.length; i++) {
        var prompt_li = document.createElement('li');
        var prompt_p = document.createElement('p');
        var prompt_text = document.createTextNode(prompts[i].prompt);
    
        prompt_li.setAttribute('class', 'list-group-item prompt');
        prompt_p.appendChild(prompt_text);
        prompt_li.appendChild(prompt_p);
    
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
                button.className = prompts[li_index].class + ' trait ' + prompts[li_index].trait + ' value-btn btn ' + prompt_values[i].class;     //group trait number
                button.appendChild(button_text);
    
                btn_group.appendChild(button);
                group.appendChild(btn_group);
    
                document.getElementsByClassName('prompt')[li_index].appendChild(group);
            }
        }
    }
    
    createPromptItems();
    createValueButtons();
    
    // Keep a running total of the values they have selected. If the total is negative, the user is introverted. If positive, user is extroverted.
    // Calculation will sum all of the answers to the prompts using weight of the value * the weight of the prompt.
    var total = 0;

    var extra1 = 0, agree2 = 0, consc3 = 0, stabl4 = 0, imagin5 = 0;
    var scores = [0, 0, 0, 0, 0];
    
    // Get the weight associated to group number
    function findPromptWeight(prompts, group) {
        var weight = 0;
    
        for (var i = 0; i < prompts.length; i++) {
            if (prompts[i].class === group) {
                weight = prompts[i].weight;
            }
        }
    
        return weight;
    }
    
    // Get the weight associated to the value
    function findValueWeight(values, value, prompts, group) {
        var weight = 0;
        var promptWeight = findPromptWeight(prompts, group);
        // console.log(group);
        for (var i = 0; i < values.length; i++) {
            if (values[i].value === value) {
                if(promptWeight == 1)
                    weight = values[i].posweight;
                else if (promptWeight == -1)
                    weight = values[i].negweight;
            }
        }
    
        return weight;
    }
    
    // When user clicks a value to agree/disagree with the prompt, display to the user what they selected
    $('.value-btn').mousedown(function () {
        var classList = $(this).attr('class');
        // console.log(classList);
        var classArr = classList.split(" ");
        // console.log(classArr);
        var this_group = classArr[0];           //revert to classArr[0]
        // console.log(this_group);
        var this_trait = classArr[2];
    
        // If button is already selected, de-select it when clicked and subtract any previously added values to the total
        // Otherwise, de-select any selected buttons in group and select the one just clicked
        // And subtract deselected weighted value and add the newly selected weighted value to the total
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            scores[this_trait] -= findValueWeight(prompt_values, $(this).text(), prompts, this_group);
        } else {
            // $('[class='thisgroup).prop('checked', false);
            scores[this_trait] -= findValueWeight(prompt_values, $('.'+this_group+'.active').text(), prompts, this_group);
            // console.log($('.'+this_group+'.active').text());
            $('.'+this_group).removeClass('active');
    
            // console.log('group' + findValueWeight(prompt_values, $('.'+this_group).text()));
            // $(this).prop('checked', true);
            $(this).addClass('active');
            scores[this_trait] += findValueWeight(prompt_values, $(this).text(), prompts, this_group);
        }
    
        console.log(scores);
    })
    
    
    
    $('#submit-btn').click(function () {
        localStorage.setItem("global_array", JSON.stringify(scores));
        var x = localStorage.getItem("global_array");
        console.log(x);
    })
    
    $('#retake-btn').click(function () {
        $('#quiz').removeClass('hide');
        $('#submit-btn').removeClass('hide');
        $('#retake-btn').addClass('hide');
    
        $('.results').addClass('hide');
        $('.results').removeClass('show');
    })