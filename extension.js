(function () {
    
    //Change this to your GitHub username so you don't have to modify so many things.
    var fork = "WhitneyOnTheWeb";
		
    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }
        
        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         
         Model code for a bot command:
         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }
         */
        

        // !bacon
        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me [@" + chat.un + "] http://big.assets.huffingtonpost.com/slide_297900_2459978_free.gif");
                    setTimeout(API.sendChat("/me Bacon!"), 1000);
                }
            }
        };
        
        // !badtrip
        bot.commands.badtripCommand = {
            command: 'badtrip',  //The command to be called. With the standard command literal this would be: !badtrip
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.badtrip, {name: chat.un}));
                    //API.sendChat("/me http://big.assets.huffingtonpost.com/slide_297900_2459978_free.gif");
                    API.sendChat("/me [@" + chat.un + "] http://i.imgur.com/JJAo5CW.gif");
                }
            }
        };
        
        // !blazing
        bot.commands.blazingCommand = {
            command: ['blaze', 'blazing'],  //The command to be called. With the standard command literal this would be: !blazing
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.blazing, {name: chat.un}));
                    //API.sendChat("/me http://i.imgur.com/tcnm9.gif");
                    API.sendChat("/me [@" + chat.un + "] http://i.imgur.com/tcnm9.gif");
                }
            }
        };
        
        // !420
        bot.commands.fourtwentyCommand = {
            command: '420',  //The command to be called. With the standard command literal this would be: !420
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.420, {name: chat.un}));
                    //API.sendChat("/me https://33.media.tumblr.com/tumblr_m9g0owW0XJ1rqfhi2o1_400.gif");
                    API.sendChat("/me [@" + chat.un + "] http://theredspeechballoon.files.wordpress.com/2011/04/420.gif");
                }
            }
        };
        
        // !celebrate
        bot.commands.celebrateCommand = {
            command: 'celebrate',  //The command to be called. With the standard command literal this would be: !crab
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chatcrab, {name: chat.un}));
                    //API.sendChat("/me https://33.media.tumblr.com/tumblr_m9g0owW0XJ1rqfhi2o1_400.gif");
                    API.sendChat("/me [@" + chat.un + "] http://i205.photobucket.com/albums/bb200/bobbadowski/gif/wtf.gif");
                }
            }
        };
        
        // !crab
        bot.commands.crabCommand = {
            command: 'crab',  //The command to be called. With the standard command literal this would be: !crab
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chatcrab, {name: chat.un}));
                    //API.sendChat("/me https://33.media.tumblr.com/tumblr_m9g0owW0XJ1rqfhi2o1_400.gif");
                    API.sendChat("/me [@" + chat.un + "] http://media.giphy.com/media/Ehl2Haxp48wP6/giphy.gif");
                }
            }
        };
        
        // !derp
        bot.commands.derpCommand = {
            command: 'derp',  //The command to be called. With the standard command literal this would be: !derp
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.derp, {name: chat.un}));
                    //API.sendChat("/me http://media0.giphy.com/media/CzQ9Kl1UIt8hG/giphy.gif");
                    API.sendChat("/me [@" + chat.un + "] http://media0.giphy.com/media/CzQ9Kl1UIt8hG/giphy.gif");
                }
            }
        };
        
        // !derp2
        bot.commands.derptwoCommand = {
            command: 'derp2',  //The command to be called. With the standard command literal this would be: !derp2
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.derp, {name: chat.un}));
                    //API.sendChat("/me http://i1201.photobucket.com/albums/bb342/Sleepy-eyed-teen/Gifs/1254425341423.gif");
                    API.sendChat("/me [@" + chat.un + "] http://i1201.photobucket.com/albums/bb342/Sleepy-eyed-teen/Gifs/1254425341423.gif");
                }
            }
        };
        
        // !error
        bot.commands.errorCommand = {
            command: 'error',  //The command to be called. With the standard command literal this would be: !error
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.error, {name: chat.un}));
                    //API.sendChat("/me screams ""PHYSICAL FUCKING INVENTORY!"" and looks around the room to see who is here.");
                    API.sendChat("/me [@" + chat.un + "] http://i.imgur.com/OoeleLF.gif");
                }
            }
        };
        
        // !fez
        bot.commands.fezCommand = {
            command: 'fez',  //The command to be called. With the standard command literal this would be: !fez
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.fez, {name: chat.un}));
                    //API.sendChat("/me http://media.giphy.com/media/byEgkAL2zWPq8/giphy.gif");
                    API.sendChat("/me [@" + chat.un + "] http://media.giphy.com/media/byEgkAL2zWPq8/giphy.gif");
                }
            }
        };
        
        // !glam
        bot.commands.glamCommand = {
            command: 'glam',  //The command to be called. With the standard command literal this would be: !glam
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.glam, {name: chat.un}));
                    //API.sendChat("/me screams ""PHYSICAL FUCKING INVENTORY!"" and looks around the room to see who is here.");
                    API.sendChat("/me [@" + chat.un + "] http://image.blingee.com/images19/content/output/000/000/000/80f/833866944_641688.gif");
                }
            }
        };
        
        // !goog
        bot.commands.googCommand = {
            command: 'goog',  //The command to be called. With the standard command literal this would be: !goog
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.goog, {name: chat.un}));
                    //API.sendChat("/me https://33.media.tumblr.com/869693b999179e6d54a7e23133740167/tumblr_nplshl0zFv1tbdiu9o1_400.gif");
                    API.sendChat("/me [@" + chat.un + "] https://33.media.tumblr.com/869693b999179e6d54a7e23133740167/tumblr_nplshl0zFv1tbdiu9o1_400.gif");
                }
            }
        };
        
        // !rum
        bot.commands.rumCommand = {
            command: 'rum',  //The command to be called. With the standard command literal this would be: !derp
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.derp, {name: chat.un}));
                    //API.sendChat("/me http://media0.giphy.com/media/CzQ9Kl1UIt8hG/giphy.gif");
                    API.sendChat("/me [@" + chat.un + "] https://33.media.tumblr.com/tumblr_md1xf6FRbP1rxf6yzo1_500.gif");
                }
            }
        };
        
        // !bunny
        bot.commands.bunnyCommand = {
            command: 'bunny',  //The command to be called. With the standard command literal this would be: !bunny
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.bunny, {name: chat.un}));
                    //API.sendChat("/me screams ""PHYSICAL FUCKING INVENTORY!"" and looks around the room to see who is here.");
                    API.sendChat("/me [@" + chat.un + "] http://image.blingee.com/images19/content/output/000/000/000/80f/833867504_485902.gif");
                }
            }
        };
        
        
        // !inventory
        bot.commands.inventoryCommand = {
            command: ['inventory', 'pfi'],  //The command to be called. With the standard command literal this would be: !inventory
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.inventory, {name: chat.un}));
                    //API.sendChat("/me screams ""PHYSICAL FUCKING INVENTORY!"" and looks around the room to see who is here.");
                    API.sendChat("/me [@" + chat.un + "] http://i.imgur.com/Y6Ebyp0.gif");
                }
            }
        };
        
        // !food
        bot.commands.foodCommand = {
            command: 'food',  //The command to be called. With the standard command literal this would be: !food
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.food, {name: chat.un}));
                    //API.sendChat("/me http://media.giphy.com/media/10ipb798xgDruE/giphy.gif");
                    API.sendChat("/me [@" + chat.un + "] http://media.giphy.com/media/7Qztpv5mTzgqs/giphy.gif");
                }
            }
        };
        
        // !fucked
        bot.commands.fuckedCommand = {
            command: 'fucked',  //The command to be called. With the standard command literal this would be: !fucked
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.fucked, {name: chat.un}));
                    //API.sendChat("/me http://media.giphy.com/media/10ipb798xgDruE/giphy.gif");
                    API.sendChat("/me [@" + chat.un + "] http://media.giphy.com/media/JNa20imi2DWZG/giphy.gif");
                }
            }
        };
        
        // !lunch
        bot.commands.lunchCommand = {
            command: 'lunch',  //The command to be called. With the standard command literal this would be: !lunch
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.lunch, {name: chat.un}));
                    //API.sendChat("/me http://media.giphy.com/media/10ipb798xgDruE/giphy.gif");
                    API.sendChat("/me [@" + chat.un + "] http://media.giphy.com/media/10ipb798xgDruE/giphy.gif");
                }
            }
        };
        
        // !mlady
        bot.commands.mladyCommand = {
            command: 'mlady',  //The command to be called. With the standard command literal this would be: !mlady
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.mlady, {name: chat.un}));
                    //API.sendChat("/me http://media.giphy.com/media/iqzBgjLQtlwn6/giphy.gif");
                    API.sendChat("/me [@" + chat.un + "] http://media.giphy.com/media/iqzBgjLQtlwn6/giphy.gif");
                }
            }
        };
        
        // !multipass
        bot.commands.multipassCommand = {
            command: 'multipass',  //The command to be called. With the standard command literal this would be: !multipass
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.multipass, {name: chat.un}));
                    //API.sendChat("/me http://33.media.tumblr.com/tumblr_lfrui39J1Y1qds45xo1_500.gif");
                    API.sendChat("/me [@" + chat.un + "] http://33.media.tumblr.com/tumblr_lfrui39J1Y1qds45xo1_500.gif");
                }
            }
        };
        
        // !heisenberg
        bot.commands.heisenbergCommand = {
            command: ['breakingbad', 'heisenberg'],  //The command to be called. With the standard command literal this would be: !heisenberg
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.heisenberg, {name: chat.un}));
                    //API.sendChat("/me http://i.imgur.com/tcnm9.gif");
                    API.sendChat("/me [@" + chat.un + "] http://media.giphy.com/media/B1wNXKUJy6qu4/giphy.gif");
                }
            }
        };
        
        // !parov
        bot.commands.parovCommand = {
            command: ['parov', 'swingtempo'],  //The command to be called. With the standard command literal this would be: !parov
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.parov, {name: chat.un}));
                    //API.sendChat("/me http://i.imgur.com/tcnm9.gif");
                    API.sendChat("/me [@" + chat.un + "] http://media.giphy.com/media/my2K6hWbwhqak/giphy.gif");
                }
            }
        };
        
        // !passit
		bot.commands.passitCommand = { 
            command: ['passit', 'passesit'],  //The command to be called. With the standard command literal this would be: !passit
            rank: 'user', 
            type: 'startsWith',  
            functionality: function (chat, cmd) { 
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0); 
                if (!bot.commands.executable(this.rank, chat)) return void (0); 
                else { 
                    var msg = chat.message; 
					var space = msg.indexOf(' '); 
                         if (space === -1) { 
                             API.sendChat("/me @" + chat.un + " takes one quick puff and then passes it to the left :herb: :smoking:"); 
                             return false; 
                         } 
                         else { 
                             var name = msg.substring(space + 2); 
                             var user = bot.userUtilities.lookupUserName(name); 
                             if (user === false || !user.inRoom) { 
                                 return API.sendChat("/me @" + chat.un + " takes one quick puff and looks around for @" + name + ", but doesn't see them :herb: :smoking: @" + chat.un + " passes it to @Chembot instead."); 
                             } 
                             else if (user.username === chat.un) { 
                                 return API.sendChat("/me @" + chat.un + " sparks one up and burns it all the way to the ground. :herb: :smoking: Share next time!"); 
                             } 
                             else { 
                                 return API.sendChat("/me @" + chat.un + " takes one quick puff and passes it to @" + name + " :herb: :smoking: Keep it going!"); 
                             } 
                        } 
                 } 
            } 
        }; 
        
        // !pizza
        bot.commands.pizzaCommand = {
            command: 'pizza',  //The command to be called. With the standard command literal this would be: !pizza
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.pizza, {name: chat.un}));
                    //API.sendChat("/me http://33.media.tumblr.com/tumblr_lfrui39J1Y1qds45xo1_500.gif");
                    API.sendChat("/me [@" + chat.un + "] http://media.giphy.com/media/osfGFZAb12gvu/giphy.gif");
                }
            }
        };

        // !pot
        bot.commands.potCommand = {
            command: 'pot',  //The command to be called. With the standard command literal this would be: !pot
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.pot, {name: chat.un}));
                    //API.sendChat("/me http://33.media.tumblr.com/tumblr_lfrui39J1Y1qds45xo1_500.gif");
                    API.sendChat("/me [@" + chat.un + "] http://media0.giphy.com/media/GZpts562aXPDW/giphy.gif");
                }
            }
        };
        
        /*':lemon:',  1.5
          ':tangerine:', 
          ':strawberry:', 
          ':pineapple:', 
          ':apple:', 
          ':grapes:', 
          ':watermelon:', 
          ':cherries:', 
          ':green_heart:', 
          ':bell:', 
          ':gem:', 
          ':slot_seven:'*/
        
        function spinSlots() {
            var slotArray = [':lemon:',
                             ':tangerine:', 
                             ':strawberry:', 
                             ':pineapple:', 
                             ':apple:', 
                             ':grapes:', 
                             ':watermelon:', 
                             ':cherries:', 
                             ':green_heart:', 
                             ':bell:', 
                             ':gem:', 
                             ':slot_seven:'];
            var slotValue = [1.5, 
                             2, 
                             2.5, 
                             3, 
                             3.5, 
                             4, 
                             4.5, 
                             5, 
                             5.5, 
                             6, 
                             6.5, 
                             7];
                             
            var rand =  Math.floor(Math.random() * (slotArray.length));                
            return [slotArray[rand], slotValue[rand]]; 
        }
        
        function spinOutcome(bet) {
            var winnings;
            var outcome1 = spinSlots(); 
            var outcome2 = spinSlots(); 
            var outcome3 = spinSlots();   
            
            if (bet == null || bet == "" || bet == " ") {
                bet = 1;
            }

            //Determine Winnings
            if (outcome1[0] == outcome2[0] && outcome1[0] == outcome3[0]) {
                winnings = Math.round(bet * outcome1[1]);
            }
            else if (outcome1[0] == outcome2[0] && outcome1[0] != outcome3[0]) {
                winnings = Math.round(bet * (.3 * outcome1[1]));
            }
            else if (outcome1[0] == outcome3[0] && outcome1[0] != outcome2[0]) {
                winnings = Math.round(bet * (.35 * outcome1[1]));
            }
            else if (outcome2[0] == outcome3[0] && outcome2[0] != outcome1[0]) {
                winnings = Math.round(bet * (.25 * outcome2[1]));
            }
            else{
                winnings = 0;  
            }
                            
             return [outcome1[0], outcome2[0], outcome3[0], winnings];                      
        }

        //slots
        bot.commands.slotsCommand = { 
            command: ['slots', 'slot'],  //The command to be called. With the standard command literal this would be: !slots
            rank: 'user', 
            type: 'startsWith',  
            functionality: function (chat, cmd) { 
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0); 
                if (!bot.commands.executable(this.rank, chat)) return void (0); 
                else { 
                    var msg = chat.message; 
					var space = msg.indexOf(' '); 
                    var bet = msg.substring(space + 1);                     
                    var outcome = spinOutcome(bet);
                    //Check Users TOKEn count...
                    
                    //Display Slots
                         if (bet <= 0) { 
                                 return API.sendChat("/me @" + chat.un + " tries to bet " + bet + " TOKEns at the ChemSlots, but doesn't have enough! How embarassing."); 
                             } 
                         else if (space === -1) { 
                            //Start Slots
                            API.sendChat("/me @" + chat.un + " bets one TOKEn at the ChemSlots, and pulls the handle to spin... " + chat.un + " watches the ChemSlots spin. It finally stops on: ");
                            setTimeout(function() {API.sendChat("/me " + outcome[0] + outcome[1] + outcome[2])}, 1000);
                            setTimeout(function() {API.sendChat("\"" + bet + "\"")}, 1000);
                         } 
                         else if (bet >= 1) { 
                            //Start Slots
                            API.sendChat("/me @" + chat.un + " bets " + bet + " TOKEns at the ChemSlots, and pulls the handle to spin... " + chat.un + " watches the ChemSlots spin. It finally stops on: ");
                            setTimeout(function() {API.sendChat("/me " + outcome[0] + outcome[1] + outcome[2])}, 1000);
                            setTimeout(function() {API.sendChat("\"" + bet + "\"")}, 1000);
                         } 
                         else {
                            return false; 
                         }
                         
                         //Display Outcome
                         if (outcome[3] == 0) {
                             setTimeout(function() {API.sendChat("/me @" + chat.un + ", tough luck, loser! You didn't win anything. I hear gambling is addictive... want to try again?")}, 2000); 
                         }
                         else if (outcome[3] == (bet * 7)) {
                             setTimeout(function() {API.sendChat("/me @" + chat.un + ", you hit the JACKPOT and won " + outcome[3] + " TOKEns! Lucky number seven strikes again -- don't spend them all in one place!")}, 2000);   
                         }
                         else {
                             setTimeout(function() {API.sendChat("/me @" + chat.un + ", you're a WINNER! You've won " + outcome[3] + " TOKEns! How about another spin?")}, 2000);
                         }
                     } 
            } 
        }; 
        
        // !test
        bot.commands.testCommand = {
            command: 'test',  //The command to be called. With the standard command literal this would be: !pizza
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {                     
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var outcome1 = spinSlots();
                    var outcome2 = spinSlots();
                    var outcome3 = spinSlots();
                    API.sendChat("/me " + outcome1[0] + " " + outcome2[0] + " " + outcome3[0]);
                }
            }
        };
        
        // !spirit
        bot.commands.spiritCommand = {
            command: 'spirit',  //The command to be called. With the standard command literal this would be: !spirit
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.spirit, {name: chat.un}));
                    //API.sendChat("/me http://33.media.tumblr.com/tumblr_lfrui39J1Y1qds45xo1_500.gif");
                    API.sendChat("/me [@" + chat.un + "] http://media.giphy.com/media/YvOjs0FETL6fe/giphy.gif");
                }
            }
        };
        
        // !upvote
        bot.commands.upvoteCommand = {
            command: 'upvote',  //The command to be called. With the standard command literal this would be: !upvote
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.pot, {name: chat.un}));
                    //API.sendChat("/me http://33.media.tumblr.com/tumblr_lfrui39J1Y1qds45xo1_500.gif");
                    API.sendChat("/me [@" + chat.un + "] http://i.imgur.com/uM6gTer.gif");
                }
            }
        };
        
        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

   localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "Chembot",
        language: "english",
        chatLink: "https://rawgit.com/WhitneyOnTheWeb/basicBot/master/lang/en.json",
        startupCap: 10, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: true, // true or false
        autowoot: true,
        smartSkip: true,
        cmdDeletion: false,
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: true,
        voteSkipLimit: 3,
        historySkip: false,
        timeGuard: true,
        maximumSongLength: 20,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        skipPosition: 2,
        skipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 25,
        motd: "Welcome to Chemical Cowboys - play what you want!",
        filterChat: false,
        etaRestriction: false,
        welcome: true,
        opLink: "https://github.com/WhitneyOnTheWeb/basicBot/blob/master/blacklists/OPlist.json",
        rulesLink: null,
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: "http://rawrmedusa.wix.com/chemical-cowboys",
        intervalMessages: ["Nice tracks, keep em' coming!",
                           "I'm really getting into the music!",
                           "Take a toke, pass it around and play some more groovy toons!",
                           "!passit @Chembot",
                           "Once you replace negative thoughts with positive ones, you'll start having positive results... like my drug test.",
                           "My doctor tells me I should start slowing it down - but there are more old drunks than there are old doctors so let's all have another round.",
                           "I believe that all roads lead to the same place - and that is wherever all roads lead to.",
                           "I didn't come here and I ain't leavin'.",
                           "Great songs stand out wherever they're from.",
                           "There are only so many notes so there must be only so many melodies.",
                           "If music be the food of love, play on.",
                           "Where words fail, music speaks.",
                           "Switch it up! Musical chairs for musical songs!",
                           "Music is the strongest form of magic.",
                           "Anyone got a light?",
                           "!passit @Chembot",
                           "Music in the soul can be heard by the universe.",
                           "You are the music while the music lasts.",
                           "Music is my religion.",
                           "How much longer until Burning Man?",
                           "The true object of all human life is play.",
                           "Lose your dream, you lose your mind",
                           "Words make you think. Music makes you feel. A song makes you feel a thought.",
                           "I think there is a song out there to describe just about any situation.",
                           "!passit @Chembot",
                           "Man, I love you guys...",
                           "/me grooves to the music",
                           "Troubling times we're in... troubling times.",
                           "Not on the rug, maaaaan!",
                           "The rug really ties the room together."],
        messageInterval: 6,
        songstats: true,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/WhitneyOnTheWeb/basicBot/master/blacklists/NSFWlist.json",
            OP: "https://rawgit.com/WhitneyOnTheWeb/basicBot/master/blacklists/OPlist.json",
            BANNED: "https://rawgit.com/WhitneyOnTheWeb/basicBot/master/blacklists/BANNEDlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/Yemasthui/basicBot/master/basicBot.js", extend);

}).call(this);
