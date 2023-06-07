## Language
[![En](https://img.shields.io/badge/lang-en-blue)](https://github.com/pslib-cz/2022-p2a-mme-pppp-Kraus-Ivan/blob/main/README.md)
[![En](https://img.shields.io/badge/lang-cs-red)](https://github.com/pslib-cz/2022-p2a-mme-pppp-Kraus-Ivan/blob/main/README.cs.md)


# StardrawMegalink - Robotic drawing arm :tokyo_tower::mechanical_arm::clamp:

## Contents

- [Introduction](#Introduction)
- [Equipment needed](#Equipment-needed)
- [Printing](#printprinter)
- [Composition](#Composition)
- [Software](#Software)


## Introduction
The project aims to create an experimental prototype of a drawing arm with a base. It is designed to test inverse kinematics. The software part is provided by a Micro:bit microcomputer with a library actually written for the digital servos controlling the arms.


## Equipment needed
- 3D printer with filament (PLA recommended) of about 400 grams with a print area of at least 18×18 cm
- Nuts to load (12 M14 nuts)
- 8 magnets (4 smaller: diameter 6 mm, thickness 1.3 mm, 4 larger: diameter 6 mm, thickness 2.6 mm)
- Soldering iron
- 5× [threaded inserts](https://eshop.sharplayers.cz/p/zavitove-vlozky-m3?gclid=CjwKCAjwsvujBhAXEiwA_UXnACFnVo32Ehh4C0-VzjGK4OnDROmtyTXOmKyot6yBNGM73W3FBH5FuBoCpv0QAvD_BwE#1555) 
- 2× [SG90 servo](https://www.aliexpress.com/item/4000903254039.html)
- Drobné lineární [mikroservo](https://www.aliexpress.com/item/1005004339409489.html?pdp_npi=2%40dis%21USD%21US%20%248.43%21US%20%248.43%21%21%21%21%21%402103242516849089387838247e4354%2112000028817829408%21btf&_t=pvid:decffea6-7b81-4ac8-801d-0f80278e7e29&afTraceInfo=1005004339409489__pc__pcBridgePPC__xxxxxx__1684908939&spm=a2g0o.ppclist.product.mainProduct)
- [Micro:bit](https://www.amazon.com/GeeekPi-Micro-Original-Batteries-Programming/dp/B0BB6T186P/ref=sr_1_1_sspa? keywords=micro+bit&qid=1686042679&sr=8-1- spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExR1hMUzlaRkk4M0ZZJmVuY3J5cHRlZElkPUEwMzU5NDcxMjZDVzZWNjFaVkRFVCZlbmNyeXB0ZWRBZElkPUEwNTc5NTI5QVlLVFU0VEMwN1MyJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==)
- [Expansion board for microbit
](https://campaign.aliexpress.com/wow/gcp/tesla-pc-new/index?UTABTest=aliabtest377151_530968&src=google&src=google&albch=shopping&acnt=494-037-6276&slnk=&plac=&mtctp=&albbt=Google_7_shopping&albagn=888888&isSmbAutoCall=false&needSmbHouyi=false&albcp=19374404636&albag=&trgt=&crea=en32919813638&netw=x&device=c&albpg=&albpd=en32919813638&gad=1&gclid=CjwKCAjw1YCkBhAOEiwA5aN4AWF3JHqWqZg_oN6JqZttoZp75ZzobjrEqrCE3kOS40wbZjK0dLMC1BoCTrcQAvD_BwE&gclsrc=aw.ds&aff_fcid=ddc743c6ce104a35bf6536f50c1ff099-1686125398647-02721-UneMJZVf&aff_fsk=UneMJZVf&aff_platform=aaf&sk=UneMJZVf&aff_trace_key=ddc743c6ce104a35bf6536f50c1ff099-1686125398647-02721-UneMJZVf&terminal_id=284860dbb5e14a15ad06232ddc3eb903&wh_weex=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&bt_src=ppc_direct_lp&scenario=pcBridgePPC&productId=32919813638&OLP=1085100208_f_group2&o_s_id=1085100208)
- Micro USB cable 
- [Micro USB Adapter](https://www.aliexpress.com/item/1005002500157420.html)
- Power cable extension tool and micro USB extension cable
- [Microbit Extension Board](https://campaign.aliexpress.com/wow/gcp/tesla-pc-new/index?UTABTest=aliabtest377151_530968&src=google&src=google&albch=shopping&acnt=494-037-6276&slnk=&plac=&mtctp=&albbt=Google_7_shopping&albagn=888888&isSmbAutoCall=false&needSmbHouyi=false&albcp=19374404636&albag=&trgt=&crea=en32919813638&netw=x&device=c&albpg=&albpd=en32919813638&gad=1&gclid=CjwKCAjw1YCkBhAOEiwA5aN4AWF3JHqWqZg_oN6JqZttoZp75ZzobjrEqrCE3kOS40wbZjK0dLMC1BoCTrcQAvD_BwE&gclsrc=aw.ds&aff_fcid=ddc743c6ce104a35bf6536f50c1ff099-1686125398647-02721-UneMJZVf&aff_fsk=UneMJZVf&aff_platform=aaf&sk=UneMJZVf&aff_trace_key=ddc743c6ce104a35bf6536f50c1ff099-1686125398647-02721-UneMJZVf&terminal_id=284860dbb5e14a15ad06232ddc3eb903&wh_weex=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&bt_src=ppc_direct_lp&scenario=pcBridgePPC&productId=32919813638&OLP=1085100208_f_group2&o_s_id=1085100208)
## Print:printer:
Print the components below on a **3D printer**.
The recommended material for printing all components is **PLA**.

### Arms
Download links for arms in .STL format: [1st arm](./MODELS/models/STARDRAWMEGALINK_arm-1.STL), [2nd arm](./MODELS/models/STARDRAWMEGALINK_arm-2.STL).
If you need to customize the arms, they are also available in .SLDPRT format: [1st arm](./MODELS/solidworks_models/STARDRAWMEGALINK_arm-1.SLDPRT), [2nd arm](./MODELS/solidworks_models/STARDRAWMEGALINK_arm-2.SLDPRT).

### Base with lid and USB mounting cube
Download links for base with cover and cube in .STL format: [Base](./MODELS/models/STARDRAWMEGALINK_base.STL), [Cover](./MODELS/models/STARDRAWMEGALINK_base--cover.STL), [Cube](./MODELS/models/STARDRAWMEGALINK_usb--block.STL). 
If you need to customize the arms, components in .SLDPRT format are also available: [Base](./MODELS/solidworks_models/STARDRAWMEGALINK_base.SLDPRT), [Lid](./MODELS/solidworks_models/STARDRAWMEGALINK_base--cover.SLDPRT), [Cube](./MODELS/models/STARDRAWMEGALINK_usb--block.SLDPRT).

### Pen holder
Link to download the pen holder in .STL format: [Pen holder](./MODELS/models/STARDRAWMEGALINK_pen-grabber.stl).
If you need to customize the holder, the holder is also available in .SLDPRT format: [Pen holder](./MODELS/solidworks_models/STARDRAWMEGALINK_pen-grabber.SLDPRT).


## Composition



## Software
The software part is provided by the microsoft makecode environment for micro:bit https://makecode.microbit.org/.

An external [pxt-smooth-servo](https://github.com/Kraus-Ivan/pxt-smooth-servo) library written in *Typescript* was created for this project. The library provides servo and microservo control.
The library has its own documentation in the [main.ts](https://github.com/Kraus-Ivan/pxt-smooth-servo/blob/master/main.ts) code file.
The way to add this extension to the project's macrocode is described in [readme.md](https://github.com/Kraus-Ivan/pxt-smooth-servo/blob/master/README.md).
### Implementation of this class:

``typescript
basic.forever(function () {
    basic.pause(50);
	smoothServo.SmoothServo.update();
});

let servo1 = smoothServo.SmoothServo.createServo(AnalogPin.P0);
let servo2 = smoothServo.SmoothServo.createServo(AnalogPin.P1);

input.onButtonPressed(Button.A,() => {
    servo1.moveTo(2000);
    console.log(servo1.buffer());
    console.log(servo1.toString());
});
```
