import WS from 'jest-websocket-mock';
import 'regenerator-runtime/runtime';
describe('simple server intergration tests', () => {

    test('start message', async () => {
        console.log("start message");
        var server = 'ws://localhost:8009';
        var wsc = new WS(server);

        const client = new WebSocket(server);

        await wsc.connected;

        wsc.on('connect', function open() {
            console.log('connect');
            const array = new Float32Array(5);

            for (var i = 0; i < array.length; ++i) {
                array[i] = i / 2;
            }
            ws.send(array);
        });

        wsc.on('message', function message(data) {
            console.log('received %s', data);
        });


        client.send("hello");
        await(expect(wsc).toReceiveMessage("hello"));
        expect(wsc).toHaveReceivedMessages(["hello"]);
        wsc.send("hello back");
        wsc.error();
        wsc.close();

    });
});
