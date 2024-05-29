$(document).ready(function() {

    $("[name='my-checkbox']").bootstrapSwitch();
    $('[data-toggle="tooltip"]').tooltip();
    $('body').fadeIn(1000);
    setInterval(newActivity, 2000);

    function newActivity() {

        var users = [ '441Binder','Johnny', 'Attacklord_bro', 'pewdiepie', "Marko", "PesaJajar", "Ivan", "xxMine", "9814Bind", "P!xel", "haxhack", "EarthHacker", "9/4gen", "ClashHacker", 'new_kid',
                  'BloodMaster', 'lovegaming', 'Johnny', 'NaneK', 'Marko_991', 'JackHammer9999', 'fuzzzy', 'tester', 'yearboy1007', 'Ministar', 'Haxajmo', 'Pottato', 'GirlHackingxD', 'Anaconda_2',
                  'Coder', 'Hillck23', 'Creeper', 'zaCk', 'only123', 'gunshaxer', 'MyNameIsShoost' ];
        var user = users[Math.floor(Math.random() * users.length)];
        var values = ["980", "1,980", "3,280", "6,480"]
        var diamondsRand = values[Math.floor(Math.random() * values.length)];

        $('.live-stats').last().remove();

        $('.activityContent').hide().prepend('<div class="live-stats">' +
            '<ul>' +
            '<li><b><i class="fa fa-user-circle"></i> ' + user + '</b></li>' +
            '<li><font size=4>jus got</font> <span class="text-green"><img src="images/1.png"/>' + diamondsRand + '</span>&#160;&#160;<font size=4>lunite</font><font size=4> successfully</font></li>' +
            '<li><i class="fa fa fa-clock-o"></i>&#160;&#160; few seconds ago</li>' +
            '</ul>' +
            '</div>').fadeIn();
    }

    var number = Math.floor(Math.random() * 100) + 425;
    var randomnumber = setInterval(randomuser, 2000);
    var d = new Date(new Date().getTime() - (86400 * 1000 * 5));
    var date = ("0" + (d.getMonth() + 1)).slice(-2) + "/" + ('0' + d.getDate()).slice(-2) + "/" + d.getFullYear();
    var today = new Date();
    var dd = ('0' + today.getDate()).slice(-2);
    var mm = ("0" + (today.getMonth() + 1)).slice(-2); //January is 0!
    var yyyy = today.getFullYear();

    function randomuser() {
        number = number + Math.floor(Math.random() * 10) - 4;
        $('.num-online-usrs').html(number);
    }

    if (dd < 10) {

        dd = '0' + dd;

    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    $('.update-date').html(date);

    $('#hack-mode').on('switchChange.bootstrapSwitch', function() {

        if ($('#hack-mode').bootstrapSwitch('state') == true) {
            $('.mode-text').html('Mod Hack Enabled');
            $('.mode-text').addClass('text-green');
            $('.mode-text').removeClass('text-disabled');

        } else {
            $('.mode-text').html('Mod Hack Disabled');
            $('.mode-text').addClass('text-disabled');
            $('.mode-text').removeClass('text-green');
        }
    });

    $('.platforms li').click(function() {

        $('.platforms li').removeClass("active");
        $(this).addClass("active");

    });
    var $usernameInput = $('.usernameInput');

    /* Gems */
    var $gen_diamonds = $('.diamonds-input');
    $gen_diamonds.updown({

        step: 3,
        min: 3,
        max: 12
    });

    var customDiamonds = [1, 2, 3, 4];
    var $change_diamonds = $gen_diamonds.data('updown');
    $('.plus-diamonds').click(function(event) {
        var currentVal;
        currentVal = $('.diamonds-input').val();
        if (currentVal == customDiamonds[customDiamonds.length - 1]) {
            return;
        }
        var nextValue;
        for (var i = 0; i < customDiamonds.length; i++) {
            if (currentVal == customDiamonds[i]) {
                nextValue = customDiamonds[i + 1];
            }
        }
        $('.diamonds-input').val(nextValue);
        //$change_diamonds.increase( event );
        //$change_diamonds.triggerEvents();

    });
    $('.minus-diamonds').click(function(event) {
        var currentVal;
        currentVal = $('.diamonds-input').val();
        if (currentVal == customDiamonds[0]) {
            return;
        }
        var nextValue;
        for (var i = 1; i < customDiamonds.length; i++) {
            if (currentVal == customDiamonds[i]) {
                nextValue = customDiamonds[i - 1];
            }
        }
        $('.diamonds-input').val(nextValue);
        //$change_diamonds.decrease( event );
        //$change_diamonds.triggerEvents();
    });

    function goToByScroll(id) {
        $('html, body').animate({
                scrollTop: $("." + id).offset().top
            },
            'slow');
    }

    function progressBar() {
        var width = 1;
        var intervalProgress = setInterval(frame, 160);
        goToByScroll('step-3');

        function frame() {
            if (width == 5) $('.load-textJS').html('Searching for kurogame.net server...');
            if (width == 11) $('.load-textJS').html('Encrypting data connection...');
            if (width == 16) $('.load-textJS').html("Checking username <font color =red>" + $(".usernameInput").val() + "</font> in kurogame.net server.");
            if (width == 17) $('.load-textJS').html("Checking username <font color =red>" + $(".usernameInput").val() + "</font> in kurogame.net server..");
			if (width == 18) $('.load-textJS').html("Checking username <font color =red>" + $(".usernameInput").val() + "</font> in kurogame.net server...");
			if (width == 19) $('.load-textJS').html("Checking username <font color =red>" + $(".usernameInput").val() + "</font> in kurogame.net server....");
			if (width == 20) $('.load-textJS').html("Checking username <font color =red>" + $(".usernameInput").val() + "</font> in kurogame.net server.....");
			if (width == 27) $('.load-textJS').html("Username <font color =red>" + $(".usernameInput").val() + "</font> is valid");
            if (width == 39) $('.load-textJS').html('Parsing lunite value data...');
            if (width == 43) $('.load-textJS').html('Inject lunite into user accounts...');
            if (width == 47) $('.load-textJS').html("Change lunite value to <img src='images/1.png'/> <font color =red>" + $(".diamonds-input").val() + "</font> in kurogame.net server.");
            if (width == 48) $('.load-textJS').html("Change lunite value to <img src='images/1.png'/> <font color =red>" + $(".diamonds-input").val() + "</font> in kurogame.net server..");
            if (width == 49) $('.load-textJS').html("Change lunite value to <img src='images/1.png'/> <font color =red>" + $(".diamonds-input").val() + "</font> in kurogame.net server...");
            if (width == 50) $('.load-textJS').html("Change lunite value to <img src='images/1.png'/> <font color =red>" + $(".diamonds-input").val() + "</font> in kurogame.net server....");
            if (width == 51) $('.load-textJS').html("Change lunite value to <img src='images/1.png'/> <font color =red>" + $(".diamonds-input").val() + "</font> in kurogame.net server.....");
            if (width == 53) $('.load-textJS').html("Change lunite value to <img src='images/1.png'/> <font color =red>" + $(".diamonds-input").val() + "</font> in kurogame.net server... <font color =green>Successful</font>");          
			if (width == 56) $('.load-textJS').html("Start to send <img src='images/1.png'/> <font color =red>" + $(".diamonds-input").val() + "</font> to wuthering waves account <font color =red>" + $(".usernameInput").val() + "</font>");
            if (width == 59) $('.load-textJS').html('Processing.');
            if (width == 60) $('.load-textJS').html('Processing..');
            if (width == 61) $('.load-textJS').html('Processing...');	
			if (width == 62) $('.load-textJS').html('Processing....');
			if (width == 63) $('.load-textJS').html('Processing.....');
			if (width == 66) $('.load-textJS').html("Process to send <img src='images/1.png'/> <font color =red>" + $(".diamonds-input").val() + "</font> to wuthering waves account <font color =red>" + $(".usernameInput").val() + "</font> now.");
            if (width == 68) $('.load-textJS').html("Process to send <img src='images/1.png'/> <font color =red>" + $(".diamonds-input").val() + "</font> to wuthering waves account <font color =red>" + $(".usernameInput").val() + "</font> now..");
            if (width == 70) $('.load-textJS').html("Process to send <img src='images/1.png'/> <font color =red>" + $(".diamonds-input").val() + "</font> to wuthering waves account <font color =red>" + $(".usernameInput").val() + "</font> now...");
            if (width == 72) $('.load-textJS').html("Process to send <img src='images/1.png'/> <font color =red>" + $(".diamonds-input").val() + "</font> to wuthering waves account <font color =red>" + $(".usernameInput").val() + "</font> now....");          
			if (width == 75) $('.load-textJS').html("Process to send <img src='images/1.png'/> <font color =red>" + $(".diamonds-input").val() + "</font> to wuthering waves account <font color =red>" + $(".usernameInput").val() + "</font> now....."); 
			if (width == 77) $('.load-textJS').html("Process to send <img src='images/1.png'/> <font color =red>" + $(".diamonds-input").val() + "</font> to wuthering waves account <font color =red>" + $(".usernameInput").val() + "</font> now......");
			if (width == 79) $('.load-textJS').html("Process to send <img src='images/1.png'/> <font color =red>" + $(".diamonds-input").val() + "</font> to wuthering waves account <font color =red>" + $(".usernameInput").val() + "</font> now.......");
            if (width == 91) $('.load-textJS').html('Waiting for kurogame.net server response...');
            if (width == 93) $('.load-textJS').html('Server response OK...');
            if (width == 95) $('.load-textJS').html("Complete sending <img src='images/1.png'/> <font color =red>" + $(".diamonds-input").val() + "</font> to wuthering waves account <font color =red>" + $(".usernameInput").val() + "</font> now");
            
            if (width >= 99) {
                clearInterval(intervalProgress);
                $('.step-3').fadeOut(function() {
                    $('.step-5').fadeIn();
                    goToByScroll('step-5');
                });

            } else {
                width++;
                $(".progress-bar").css("width", width + '%');
                $(".progress-bar").html(width * 1 + '%');
            }
        }
    }

    /* Buttons Starts Here */

    $(".btnFirst").click(function() {
        var platformName = $('.active').attr('data-name');
        var usernameInput = $('.usernameInput').val();
        var emailRegex = /^[A-Z0-9-]+$/i;

        if (usernameInput == "") {
            $('.usernameAlert2').fadeOut(function() {
                $('.usernameAlert').fadeIn();
            });

        } else if (emailRegex.test(usernameInput)) {
            $('.step-1').fadeOut(function() {
                $('.step-2').fadeIn();
                goToByScroll('step-2');
            });
        } else {
            $('.usernameAlert').fadeOut(function() {
                $('.usernameAlert2').fadeIn();
            });
        }
    });

    /* Buttons Verification Here */

    $(".btnSecond").click(function() {
        var activationInput = $('.activationInput').val();
        if (activationInput == "") {
            $('.activationAlert2').fadeOut(function() {
                $('.activationAlert3').fadeOut(function() {
                    $('.activationAlert').fadeIn();
                });
            });
        } else if (activationInput == "mN6Yf1FR5dx59KZ3xeoW") {
            $('.activationAlert').fadeOut(function() {
                $('.activationAlert2').fadeOut(function() {
                    $('.activationAlert3').fadeIn();
                });
            });

        } else if (activationInput == "sywZNbj7PbOkyAwMq8P9") {
            $('.activationAlert').fadeOut(function() {
                $('.activationAlert2').fadeOut(function() {
                    $('.activationAlert3').fadeIn();
                });
            });

        } else if (activationInput == "WKJp5Z9xGtq0gMt2AWVo") {
            $('.activationAlert').fadeOut(function() {
                $('.activationAlert2').fadeOut(function() {
                    $('.activationAlert3').fadeIn();
                });
            });

        } else if (activationInput == "HNFZVZbEDh4wBqW9IF3R") {
            $('.activationAlert').fadeOut(function() {
                $('.activationAlert2').fadeOut(function() {
                    $('.activationAlert3').fadeIn();
                });
            });

        } else if (activationInput == "skabtjQffvXJ6bgxJ1EV") {
            $('.activationAlert').fadeOut(function() {
                $('.activationAlert2').fadeOut(function() {
                    $('.activationAlert3').fadeIn();
                });
            });

        } else {
            $('.activationAlert').fadeOut(function() {
                $('.activationAlert3').fadeOut(function() {
                    $('.activationAlert2').fadeIn();
                });
            });
        }
    });

    $(".btnAxtn").click(function() {
        window.open("https://passingfiles.com/1569895", "_blank");
    });

    /* Generator Starts Here */
    $(".btnGenerate").click(function() {
        $('.diamondsJS').html($('.diamonds-input').val());
        $('.usernameInputJS').html($('.usernameInput').val());
        $('.step-2').fadeOut(function() {
            $('.step-3').fadeIn();
            progressBar();
        });
    });
});