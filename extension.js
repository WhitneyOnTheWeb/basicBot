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
                    //API.sendChat(subChat(basicBot.chat.bacon, {name: chat.un}));
                    //API.sendChat("/me http://big.assets.huffingtonpost.com/slide_297900_2459978_free.gif");
                    API.sendChat("/me [@" + chat.un + "] http://big.assets.huffingtonpost.com/slide_297900_2459978_free.gif");
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
        
        // !test
        bot.commands.testCommand = {
            command: 'test',  //The command to be called. With the standard command literal this would be: !pizza
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
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
                                      ':slots_seven:'];
                     
                     //Pick Three Random Symbols from valid symbols
                     var pickOne = slotArray[Math.floor(Math.Random() * (slotArray.length - 1))]; 
                     var pickTwo = slotArray[Math.floor(Math.Random() * (slotArray.length - 1))]; 
                     var pickThree = slotArray[Math.floor(Math.Random() * (slotArray.length - 1))]; 
                     
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me " + pickOne + " " + pickTwo + " " + pickThree);
                }
            }
        };
        
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
                    var bet = msg.substring(space + 2); 
                    
                    //Check Users TOKEn count...
                    
                    //Assign value to each valid symbol
                        /* :tangerine:   2x
                           :strawberry:  2.5x
                           :pineapple:   3x
                           :lemon:       1.5x
                           :cherries:    5x
                           :apple:       3.5x
                           :grapes:      4x
                           :watermelon:  4.5x
                           :bell:        6x
                           :green_heart: 5.5x
                           :gem:         6.5x
                           :slots_seven: 7x
                         */
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
                                      ':slots_seven:'];
                      var winnings;
                     
                     //Pick Three Random Symbols from valid symbols
                     var pickOne = slotArray[Math.floor(Math.Random() * (slotArray.length - 1))]; 
                     var pickTwo = slotArray[Math.floor(Math.Random() * (slotArray.length - 1))]; 
                     var pickThree = slotArray[Math.floor(Math.Random() * (slotArray.length - 1))]; 
                    
                    //Display Slots
                         if (bet <= 0) { 
                                 return API.sendChat("/me @" + chat.un + " tries to bet " + bet + " TOKEns at the ChemSlots, but doesn't have enough! How embarassing."); 
                             } 
                         else if (space === -1) { 
                            //Start Slots
                            API.sendChat("/me @" + chat.un + " bets one TOKEn at the ChemSlots, and pulls the handle to spin...");
                            API.sendChat("/me @" + chat.un + " watches the ChemSlots spin... it finally stops on: " + pickOne + pickTwo + pickThree); 
                            
                            //Determine Winnings
                            if (pickOne == slotArray[0] && pickTwo == slotArray[0] && pickThree == slotArray[0]) {
                                winnings = Math.round(bet * 1.5);  
                            }      
                            else if (pickOne == slotArray[1] && pickTwo == slotArray[1] && pickThree == slotArray[1]) {
                                winnings = bet * 2;  
                            }
                            else if (pickOne == slotArray[2] && pickTwo == slotArray[2] && pickThree == slotArray[2]) {
                                winnings = Math.round(bet * 2.5);  
                            }
                            else if (pickOne == slotArray[3] && pickTwo == slotArray[3] && pickThree == slotArray[3]) {
                                winnings = bet * 3;  
                            }
                            else if (pickOne == slotArray[4] && pickTwo == slotArray[4] && pickThree == slotArray[4]) {
                                winnings = Math.round(bet * 3.5);  
                            }
                            else if (pickOne == slotArray[5] && pickTwo == slotArray[5] && pickThree == slotArray[5]) {
                                winnings = bet * 4;   
                            }
                            else if (pickOne == slotArray[6] && pickTwo == slotArray[6] && pickThree == slotArray[6]) {
                                winnings = Math.round(bet * 4.5);  
                            }
                            else if (pickOne == slotArray[7] && pickTwo == slotArray[7] && pickThree == slotArray[7]) {
                                winnings = bet * 5;  
                            }
                            else if (pickOne == slotArray[8] && pickTwo == slotArray[8] && pickThree == slotArray[8]) {
                                winnings = Math.round(bet * 5.5);   
                            }
                            else if (pickOne == slotArray[9] && pickTwo == slotArray[8] && pickThree == slotArray[9]) {
                                winnings = bet * 6;   
                            }
                            else if (pickOne == slotArray[10] && pickTwo == slotArray[10] && pickThree == slotArray[10]) {
                                winnings = Math.round(bet * 6.5);  
                            }
                            else if (pickOne == slotArray[11] && pickTwo == slotArray[11] && pickThree == slotArray[11]) {
                                winnings = bet * 7;   
                            }
                            else{
                                winnings = 0;  
                            }
                            
                            //Display Outcome
                            if (winnings == 0) {
                                API.sendChat("/me @" + chat.un + ", tough luck... you didn't win anything. I hear gambling is more addictive than marijuana... want to try again?"); 
                            }
                            else if (winnings == (bet * 7)) {
                                API.sendChat("/me @" + chat.un + ", you hit the JACKPOT and won " + winnings + " TOKEns! Lucky number seven strikes again -- don't spend them all in one place!");   
                            }
                            else {
                                API.sendChat("/me @" + chat.un + ", excellent spin! You've won " + winnings + " TOKEns! How about another spin?"); 
                            }
                            return false; 
                         } 
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
        cmdDeletion: true,
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
        voteSkip: false,
        voteSkipLimit: 10,
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
        intervalMessages: [
                           ["Nice tracks, keep em' coming!"],
                           ["I'm really getting into the music!"],
                           ["Take a toke, pass it around and play some more groovy toons!"],
                           ["Once you replace negative thoughts with positive ones, you'll start having positive results... like my drug test."],
                           ["My doctor tells me I should start slowing it down - but there are more old drunks than there are old doctors so let's all have another round."],
                           ["I believe that all roads lead to the same place - and that is wherever all roads lead to."],
                           ["I didn't come here and I ain't leavin'."],
                           ["Great songs stand out wherever they're from."],
                           ["There are only so many notes so there must be only so many melodies."],
                           ["If music be the food of love, play on."],
                           ["Where words fail, music speaks."],
                           ["Switch it up! Musical chairs for musical songs!"],
                           ["Music is the strongest form of magic."],
                           ["Anyone got a light?"],
                           ["Music in the soul can be heard by the universe."],
                           ["You are the music while the music lasts."],
                           ["Music is my religion."],
                           ["How much longer until Burning Man?"],
                           ["The true object of all human life is play."],
                           ["Lose your dream, you lose your mind"],
                           ["Words make you think. Music makes you feel. A song makes you feel a thought."],
                           ["I think there is a song out there to describe just about any situation."],
                           ["!passit @Chembot"],
                           ["Man, I love you guys..."],
                           ["/me grooves to the music"],
                           ["Troubling times we're in... troubling times."]
                          ],
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
