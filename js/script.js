$('#videowrap').addClass('col-lg-10').removeClass('col-lg-7');
$('#chatwrap').addClass('col-lg-2').removeClass('col-lg-5');
$('#rightpane').removeClass('col-lg-7').removeClass('col-md-7');
if ($("#chatwrap > .nav").length === 0) {
	$('head').append('<link rel="shortcut icon" href="https://puu.sh/Ce3nN/8c9f825915.ico">');
	$('<ul class="nav nav-tabs"><li class="active tab"><a data-toggle="tab" href="#chatmate"><span class="glyphicon glyphicon-user"></span>Чат</a></li><li class="tab"><a data-toggle="tab" href="#playlistmate"><span class="glyphicon glyphicon-film"></span>Плейлист</a></li></ul>').prependTo($('#chatwrap'));
	$('<div class="tab-content"><div id="chatmate" class="tab-pane fade in active"></div><div id="playlistmate" class="tab-pane fade"></div></div>').appendTo($('#chatwrap'));
	$('#chatmate').append($('#messagebuffer,#chatline,#guestlogin'));
	$('#playlistmate').append($('#controlsrow,#playlistrow'));
	$('.credit').html('Мурк! <span>♥</span>');
	$('#plcontrol').append($('#videocontrols'));
	$('#rightcontrols').attr( "class", "");
	$('<div class="row"><div class="col-md-12" id="inp-tex"></div><div class="col-md-1" id="but-smi"></div></div>').appendTo($('#chatmate'));
	$('#inp-tex').append($('#chatline,#guestlogin'));
	$('#but-smi').append($('#emotelistbtn'));	
	$('#emotelistbtn').removeClass('btn-sm').removeClass('btn-default').html('<span class="firstb">♡</span><span class="secb">♥</span>');
}

function handleWindowResize() {
    if ($("body").hasClass("chatOnly")) {
        var h = $("body").outerHeight() - $("#chatline").outerHeight() -
                $("#chatheader").outerHeight();
        $("#messagebuffer").outerHeight(h-55);
        $("#userlist").outerHeight(h);
        return;
    } else {
        handleVideoResize();
    }
}

function handleVideoResize() {
    if ($("#ytapiplayer").length === 0) return;

    var intv, ticks = 0;
    var resize = function () {
        if (++ticks > 10) clearInterval(intv);
        if ($("#ytapiplayer").parent().outerHeight() <= 0) return;
        clearInterval(intv);

        var responsiveFrame = $("#ytapiplayer").parent();
        var height = responsiveFrame.outerHeight() - $("#chatline").outerHeight() - 2;
        $("#messagebuffer").height(height-55);
        $("#userlist").height(height);

        $("#ytapiplayer").attr("height", VHEIGHT = responsiveFrame.outerHeight());
        $("#ytapiplayer").attr("width", VWIDTH = responsiveFrame.outerWidth());
    };

    if ($("#ytapiplayer").height() > 0) resize();
    else intv = setInterval(resize, 500);
}