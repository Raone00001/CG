class Form {

    constructor(){



    }

    display(){

        var title = createElement('h2');
            title.html('Car Racing Game');
            title.position(150,0);

        var input = createInput('Name');
        
        var button = createButton('Play');

        var greetings = createElement('h3');

        button.mousePressed(function(){

            input.hide();
            button.hide();

            var name = input.value();
            
            playerCount = playerCount+1;
            player.update(name);
            player.updateCount(playerCount);

            greetings.html("Hello!" + name);
            greetings.position(150,150);

        });

    }

}