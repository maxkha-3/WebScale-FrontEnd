// A connector to the Event Server


function isValidJson(s) {
    try {
        JSON.parse(s);
    } catch (e) {
        return false;
    }
    return true;
}

function es_connect_dummy(address, filter, callback) {
    var connector = es_connector("ws://"+address+"/ws-dummy", filter, function(){
        console.log("Connected.")
    }, function(){
        console.log("disconnected")
    }, callback);
    connector.connect();
}

function es_connector(address, filter, onconnect, ondisconnect, onmessage) {
    var obj = {};
    obj.address = address;
    obj.filter = filter;
    obj.onconnect = onconnect;
    obj.ondisconnect = ondisconnect;
    obj.onmessage = onmessage;
    obj.connect = function() {
        var url = address;
        var ws = new WebSocket(url);
        ws.onmessage = function (msg) {
            var line = "";
            if (isValidJson(msg.data)) {
                var result = JSON.parse(msg.data);
                obj.onmessage(result);
            } else { // TODO: Delte
                obj.onmessage(msg.data);
            }

        };
        ws.onopen = function(event) {
            ws.send(JSON.stringify(filter));
            if (obj.onconnect != null) {
                obj.onconnect();
            }
        };
        ws.onclose = function () {
            // console.log("Disconnected from server, attempting reconnect in 5 seconds");
            if (obj.ondisconnect != null) {
                obj.ondisconnect();
            }
            setTimeout(function(){obj.connect()}, 5000);
        };
    };
    return obj;
}

function es_connect(address, filter, callback) {
    var url = address;
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
    ws.onopen = function(event) {
        ws.send(JSON.stringify(filter));
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