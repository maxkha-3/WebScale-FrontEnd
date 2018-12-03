// A connector to the Event Server


function isValidJson(s) {
    try {
        JSON.parse(s);
    } catch (e) {
        return false;
    }
    return true;
}

function es_connect_dummy(address, callback) {
    var url = "ws://" + address + "/ws-dummy";
    var ws = new WebSocket(url);
    ws.onmessage = function (msg) {
        var line = "";
        if (isValidJson(msg.data)) {
            var result = JSON.parse(msg.data);
            callback(result);
        } else { // TODO: Delte
            callback(msg.data);
        }

    };
    ws.onclose = function () {
        console.log("Disconnected from server, attempting reconnect in 5 seconds");
        setTimeout(function(){es_connect(address, callback)}, 5000);
    };
}

function es_connect(address, callback) {
    var url = "ws://" + address + "/ws";
    var ws = new WebSocket(url);
    ws.onmessage = function (msg) {
        var line = "";
        if (isValidJson(msg.data)) {
            var result = JSON.parse(msg.data);
            callback(result);
        } else { // TODO: Delte
            callback(msg.data);
        }

    };
    ws.onclose = function () {
        console.log("Disconnected from server, attempting reconnect in 5 seconds");
        setTimeout(function(){es_connect(address, callback)}, 5000);
    };
}

function es_connect_test(address) {
    var url = "ws://" + address + "/ws";
    var ws = new WebSocket(url);
    var name = "Guest" + Math.floor(Math.random() * 1000);
    var chat = document.getElementById("chat");
    var text = document.getElementById("text");
    var now = function () {
        var iso = new Date().toISOString();
        return iso.split("T")[1].split(".")[0];
    };
    ws.onmessage = function (msg) {
        var line =  now() + " " + msg.data + "\n";
        chat.innerText += line;
    };
    text.onkeydown = function (e) {
        if (e.keyCode === 13 && text.value !== "") {
            ws.send("<" + name + "> " + text.value);
            text.value = "";
        }
    };
}