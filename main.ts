
//% color="#2c3e50" weight=10
namespace ultrasonicsensor {
    /**
     * Send a ping and get the echo time (in microseconds) as a result
     * @param trig tigger pin
     * @param echo echo pin
     * @param maxCmDistance maximum distance in centimeters
     */
    //% blockId=sonar_ping block="ping trig %trig|echo %echo,maxCmDistance %maxCmDistance"
    export function ping(trig: DigitalPin, echo: DigitalPin,  maxCmDistance: number): number {
        // send pulse
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        // read pulse
        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);
        return Math.idiv(d, 58);
    }
}
