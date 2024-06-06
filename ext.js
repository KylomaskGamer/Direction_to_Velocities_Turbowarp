class DirectionConverter {
    getInfo() {
        return {
            "id": "hdiuhfiuefhoirhfowu", //dont mind this :3
            "name": "Direction Converter",
            "blocks": [
                {
                    "opcode": "convertToVelocity",
                    "blockType": "reporter",
                    "text": "convert direction [DIRECTION] to [VELOCITY]",
                    "arguments": {
                        "DIRECTION": {
                            "type": "number",
                            "defaultValue": 90
                        },
                        "VELOCITY": {
                            "type": "string",
                            "menu": "xy",
                            "defaultValue": "x"
                        }
                    }
                }
            ],
            "menus": {
                "xy": ["x", "y"]
            }
        };
    }

    convertToVelocity({DIRECTION, VELOCITY}) {
        var radians = DIRECTION * (Math.PI / 180); // Convert degrees to radians
        var xVelocity = Math.sin(radians);
        var yVelocity = Math.cos(radians);

        // Round the values to handle precision issues
        xVelocity = Math.abs(xVelocity) < 1e-10 ? 0 : xVelocity;
        yVelocity = Math.abs(yVelocity) < 1e-10 ? 0 : yVelocity;

        if (VELOCITY === 'x') {
            return xVelocity;
        } else {
            return yVelocity;
        }
    }
}

Scratch.extensions.register(new DirectionConverter());
