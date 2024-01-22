let Lights = [
    "#light_5",
    "#light_4",
    "#light_3",
    "#light_2",
    "#light_1",
]

window.addEventListener("message", function (event) {
    if (event.data.action == "SHOW_UI") return $("#UI").fadeIn(500);
    if (event.data.action == "HIDE_UI") return $("#UI").fadeOut(1500);
    if (event.data.action == "COUNTDOWN") {
        let Count = event.data.payload;
        console.log(Count);
        if (Count == "GO") {
            Lights.forEach(Light => {
                $(Light).addClass("green").removeClass("red");
            })
        } else {
            $(Lights[Count-1]).removeClass("green").addClass("red");
        }
    }
    if (event.data.action == "RESET") {
        Lights.forEach(Light => {
            $(Light).removeClass("red green");
        })
    }
});
$("#UI").hide();