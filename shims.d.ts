// Auto-generated. Do not edit.



    //% color=50 weight=19
    //% icon="\uf1eb"
declare namespace Mbit_IR {

    /**
     * button pushed.
     */
    //% blockId=ir_received_left_event
    //% block="当 |%btn| 按钮 按下" shim=Mbit_IR::onPressEvent
    function onPressEvent(btn: RemoteButton, body: () => void): void;

    /**
     * initialises local variablesssss
     */
    //% blockId=ir_init
    //% block="连接 信号 接收器 到 %pin" shim=Mbit_IR::init
    function init(pin: Pins): void;
}

// Auto-generated. Do not edit. Really.
