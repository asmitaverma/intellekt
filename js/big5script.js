// A personality quiz

// This is an array of objects that stores the personality trait that is prompted to the user and the weight for each prompt. 
// If a personality trait is considered more introverted, it will have a negative weight.
// If a personlity trait is considered more extroverted, it will have a positive weight.

var prompts_o = [
    {
        prompt: 'Am the life of the party.',
        weight: 1,
        class: 'group0',
        trait: 1
    },
    {
        prompt: 'Feel comfortable around people.',
        weight: 1,
        class: 'group1',
        trait: 1
    },
    {
        prompt: 'Start conversations.',
        weight: 1,
        class: 'group2',
        trait: 1
    },
    {
        prompt: 'Talk to a lot of different people at parties.',
        weight: 1,
        class: 'group3',
        trait: 1
    },
    {
        prompt: "Don't mind being the center of attention.",
        weight: 1,
        class: 'group4',
        trait: 1
    },
    {
        prompt: "Don't talk a lot.",
        weight: -1,
        class: 'group5',
        trait: 1
    },
    {
        prompt: 'Keep in the background.',
        weight: -1,
        class: 'group6',
        trait: 1
    },
    {
        prompt: 'Usually have little to say.',
        weight: -1,
        class: 'group7',
        trait: 1
    },
    {
        prompt: "Don't like to draw attention to myself.",
        weight: -1,
        class: 'group8',
        trait: 1
    },
    {
        prompt: 'Am quiet around strangers.',
        weight: -1,
        class: 'group9',
        trait: 1
    },
    {
        prompt: 'Am interested in people.',
        weight: 1,
        class: 'group10',
        trait: 2
    },
    {
        prompt: "Sympathize with others' feelings.",
        weight: 1,
        class: 'group11',
        trait: 2
    },
    {
        prompt: "Have a soft heart.",
        weight: 1,
        class: 'group12',
        trait: 2
    },
    {
        prompt: "Take time out for others.",
        weight: 1,
        class: 'group13',
        trait: 2
    },
    {
        prompt: "Feel others' emotions.",
        weight: 1,
        class: 'group14',
        trait: 2
    },
    {
        prompt: "Make people feel at ease.",
        weight: 1,
        class: 'group15',
        trait: 2
    },
    {
        prompt: "Am not really interested in others.",
        weight: -1,
        class: 'group16',
        trait: 2
    },
    {
        prompt: "	Insult people.",
        weight: -1,
        class: 'group17',
        trait: 2
    },
    {
        prompt: "Am not interested in other people's problems.",
        weight: -1,
        class: 'group18',
        trait: 2
    },
    {
        prompt: "Feel little concern for others.",
        weight: -1,
        class: 'group19',
        trait: 2
    },
    {
        prompt: "Am always prepared.",
        weight: 1,
        class: 'group20',
        trait: 3
    },
    {
        prompt: "Pay attention to details.",
        weight: 1,
        class: 'group21',
        trait: 3
    },
    {
        prompt: "Get chores done right away.",
        weight: 1,
        class: 'group22',
        trait: 3
    },
    {
        prompt: "Like order.",
        weight: 1,
        class: 'group23',
        trait: 3
    },
    {
        prompt: "Follow a schedule.",
        weight: 1,
        class: 'group24',
        trait: 3
    },
    {
        prompt: "Am exacting in my work.",
        weight: 1,
        class: 'group25',
        trait: 3
    },
    {
        prompt: "Leave my belongings around.",
        weight: -1,
        class: 'group26',
        trait: 3
    },
    {
        prompt: "Make a mess of things.",
        weight: -1,
        class: 'group127',
        trait: 3
    },
    {
        prompt: "Often forget to put things back in their proper place.",
        weight: -1,
        class: 'group28',
        trait: 3
    },
    {
        prompt: "Shirk my duties.",
        weight: -1,
        class: 'group29',
        trait: 3
    },
    {
        prompt: "Am relaxed most of the time.",
        weight: 1,
        class: 'group30',
        trait: 4
    },
    {
        prompt: "Seldom feel blue.",
        weight: 1,
        class: 'group31',
        trait: 4
    },
    {
        prompt: "Get stressed out easily.",
        weight: -1,
        class: 'group32',
        trait: 4
    },
    {
        prompt: "Worry about things.",
        weight: -1,
        class: 'group33',
        trait: 4
    },
    {
        prompt: "Am easily disturbed.",
        weight: -1,
        class: 'group34',
        trait: 4
    },
    {
        prompt: "Get upset easily.",
        weight: -1,
        class: 'group35',
        trait: 4
    },
    {
        prompt: "Change my mood a lot.",
        weight: -1,
        class: 'group36',
        trait: 4
    },
    {
        prompt: "Have frequent mood swings.",
        weight: -1,
        class: 'group37',
        trait: 4
    },
    {
        prompt: "Get irritated easily.",
        weight: -1,
        class: 'group38',
        trait: 4
    },
    {
        prompt: "Often feel blue.",
        weight: -1,
        class: 'group39',
        trait: 4
    },
    {
        prompt: "Have a rich vocabulary.",
        weight: 1,
        class: 'group40',
        trait: 5
    },
    {
        prompt: "Have a vivid imagination.",
        weight: 1,
        class: 'group41',
        trait: 5
    },
    {
        prompt: "Have excellent ideas.",
        weight: 1,
        class: 'group42',
        trait: 5
    },
    {
        prompt: "Am quick to understand things.",
        weight: 1,
        class: 'group43',
        trait: 5
    },
    {
        prompt: "Use difficult words.",
        weight: 1,
        class: 'group44',
        trait: 5
    },
    {
        prompt: "Spend time reflecting on things.",
        weight: 1,
        class: 'group45',
        trait: 5
    },
    {
        prompt: "Am full of ideas.",
        weight: 1,
        class: 'group46',
        trait: 5
    },
    {
        prompt: "Have difficulty understanding abstract ideas.",
        weight: -1,
        class: 'group47',
        trait: 5
    },
    {
        prompt: "Am not interested in abstract ideas.",
        weight: -1,
        class: 'group48',
        trait: 5
    },
    {
        prompt: "Do not have a good imagination.",
        weight: -1,
        class: 'group49',
        trait: 5
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
        weight: 5
    },
    {
        value: 'Agree',
        class: 'btn-default btn-agree',
        weight: 4,
    }, 
    {
        value: 'Neutral', 
        class: 'btn-default',
        weight: 3
    },
    {
        value: 'Disagree',
        class: 'btn-default btn-disagree',
        weight: 2
    },
    { 
        value: 'Strongly Disagree',
        class: 'btn-default btn-strongly-disagree',
        weight: 1
    }
]
    
// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;
      
//         // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
      
//           // Pick a remaining element...
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
      
//           // And swap it with the current element.
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }
      
//     return array;
// }


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
                button.className = 'group' + li_index + ' value-btn btn ' + prompt_values[i].class;
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
    function findValueWeight(values, value) {
        var weight = 0;
    
        for (var i = 0; i < values.length; i++) {
            if (values[i].value === value) {
                weight = values[i].weight;
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
        var this_group = classArr[0];
        // console.log(this_group);
    
        // If button is already selected, de-select it when clicked and subtract any previously added values to the total
        // Otherwise, de-select any selected buttons in group and select the one just clicked
        // And subtract deselected weighted value and add the newly selected weighted value to the total
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
        } else {
            // $('[class='thisgroup).prop('checked', false);
            total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
            // console.log($('.'+this_group+'.active').text());
            $('.'+this_group).removeClass('active');
    
            // console.log('group' + findValueWeight(prompt_values, $('.'+this_group).text()));
            // $(this).prop('checked', true);
            $(this).addClass('active');
            total += (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
        }
    
        console.log(total);
    })
    
    
    
    $('#submit-btn').click(function () {
        // After clicking submit, add up the totals from answers
        // For each group, find the value that is active
        $('.results').removeClass('hide');
        $('.results').addClass('show');
        
        if(total < 0) {
            // document.getElementById('intro-bar').style.width = ((total / 60) * 100) + '%';
            // console.log(document.getElementById('intro-bar').style.width);
            // document.getElementById('intro-bar').innerHTML= ((total / 60) * 100) + '%';
            document.getElementById('results').innerHTML = '<b>You are introverted!</b><br><br>\
            Introverts are tricky to understand, since it’s so easy for us to assume that introversion is the same as being shy, when, in fact, introverts are simply people who find it tiring to be around other people.\n\
    <br><br>\
    I love this explanation of an introvert’s need to be alone:\n\
    <br><br>\
    For introverts, to be alone with our thoughts is as restorative as sleeping, as nourishing as eating.\n\n\
    <br><br>\
    Introverted people are known for thinking things through before they speak, enjoying small, close groups of friends and one-on-one time, needing time alone to recharge, and being upset by unexpected changes or last-minute surprises. Introverts are not necessarily shy and may not even avoid social situations, but they will definitely need some time alone or just with close friends or family after spending time in a big crowd.\
            ';
        } else if(total > 0) {
            document.getElementById('results').innerHTML = '<b>You are extroverted!</b><br><br>\
            On the opposite side of the coin, people who are extroverted are energized by people. They usually enjoy spending time with others, as this is how they recharge from time spent alone focusing or working hard.\
    <br><br>\
    I like how this extrovert explains the way he/she gains energy from being around other people:\
    <br><br>\
    When I am among people, I make eye contact, smile, maybe chat if there’s an opportunity (like being stuck in a long grocery store line). As an extrovert, that’s a small ‘ping’ of energy, a little positive moment in the day.';
        } else {
            document.getElementById('results').innerHTML = '<b>You are ambiverted!</b><br><br>\
            Since introverts and extroverts are the extremes of the scale, the rest of us fall somewhere in the middle. Many of us lean one way or the other, but there are some who are quite balanced between the two tendencies. These people are called ambiverts.\
    <br><br>\
    So let’s look at how an ambivert compares.\
    <br><br>\
    Ambiverts exhibit both extroverted and introverted tendencies. This means that they generally enjoy being around people, but after a long time this will start to drain them. Similarly, they enjoy solitude and quiet, but not for too long. Ambiverts recharge their energy levels with a mixture of social interaction and alone time.'
        }
    
        // Hide the quiz after they submit their results
        $('#quiz').addClass('hide');
        $('#submit-btn').addClass('hide');
        $('#retake-btn').removeClass('hide');
    })
    
    // Refresh the screen to show a new quiz if they click the retake quiz button
    $('#retake-btn').click(function () {
        $('#quiz').removeClass('hide');
        $('#submit-btn').removeClass('hide');
        $('#retake-btn').addClass('hide');
    
        $('.results').addClass('hide');
        $('.results').removeClass('show');
    })