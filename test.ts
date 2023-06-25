basic.forever(function () {
    basic.pause(50);
    smoothServo.SmoothServo.update();
});

let first_servo = smoothServo.SmoothServo.createServo(AnalogPin.P0);
let second_servo = smoothServo.SmoothServo.createServo(AnalogPin.P1);

input.onButtonPressed(Button.A, () => {
    first_servo.moveTo(2000);
    console.log(first_servo.buffer());
    console.log(first_servo.toString());
});
