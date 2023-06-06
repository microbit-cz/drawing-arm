## Jazyk
- [English](./README.md)
- [https://img.shields.io/badge/CZ-Czech%20language-brightgreen](./README.cs.md)


# StardrawMegalink - Robotické kreslící rameno :tokyo_tower::mechanical_arm::clamp:

## Obsah

- [Úvod](#Úvod)
- [Potřebné vybavení](#Potřebné_vybavení)
- [Tisk](#Tisk)
- [Složení](#Složení)
- [Software](#Software)


## Úvod
Projekt má za cíl vytvoření experimentálního prototypu kreslícího ramene s podstavou. Je určen k testování inverzní kinematiky. Softwarovou část zajišťuje mikropočítač Micro:bit s vlastně napsanou knihovnou pro digitální serva ovládající ramena.


## Potřebné vybavení
- 3D tiskárna s filamentem (doporučeno PLA) cca 400 gramů o tiskové ploše alespoň 18×18 cm
- Matice k zatížení (12 matic M14)
- 8 magnetů (4 menší: průmer 6 mm, tloušťka 1.3mm, 4 větší: průměr 6 mm, tloušťka 2.6 mm)
- Páječka
- 5× [závitové vložky](https://eshop.sharplayers.cz/p/zavitove-vlozky-m3?gclid=CjwKCAjwsvujBhAXEiwA_UXnACFnVo32Ehh4C0-VzjGK4OnDROmtyTXOmKyot6yBNGM73W3FBH5FuBoCpv0QAvD_BwE#1555) 
- 2× servo SG90
- Drobné lineární [mikroservo](https://www.aliexpress.com/item/1005004339409489.html?pdp_npi=2%40dis%21USD%21US%20%248.43%21US%20%248.43%21%21%21%21%21%402103242516849089387838247e4354%2112000028817829408%21btf&_t=pvid:decffea6-7b81-4ac8-801d-0f80278e7e29&afTraceInfo=1005004339409489__pc__pcBridgePPC__xxxxxx__1684908939&spm=a2g0o.ppclist.product.mainProduct)
- [Micro:bit](https://www.amazon.com/GeeekPi-Micro-Original-Batteries-Programming/dp/B0BB6T186P/ref=sr_1_1_sspa?keywords=micro+bit&qid=1686042679&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExR1hMUzlaRkk4M0ZZJmVuY3J5cHRlZElkPUEwMzU5NDcxMjZDVzZWNjFaVkRFVCZlbmNyeXB0ZWRBZElkPUEwNTc5NTI5QVlLVFU0VEMwN1MyJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==)
- Rozšiřující deska pro microbit
- Micro USB kabel 
- [Micro USB adaptér](https://www.aliexpress.com/item/1005002500157420.html)
- Nářadí pro prodloužení napájecích kabelů a prodlužovací kabel pro mikroservo

## Tisk
Níže zmíněné komponenty vytiskněte na **3D tiskárně**.
Doporučený materiál pro tisk všech komponent je **PLA**.

### Ramena
Odkazy ke stažení ramen v .STL formátu: [1. rameno](./MODELS/models/STARDRAWMEGALINK_arm-1.STL), [2. rameno](./MODELS/models/STARDRAWMEGALINK_arm-2.STL).
V případě potřeby vlastní úpravy ramen jsou dostupné i ramena v .SLDPRT formátu: [1. rameno](./MODELS/solidworks_models/STARDRAWMEGALINK_arm-1.SLDPRT), [2. rameno](./MODELS/solidworks_models/STARDRAWMEGALINK_arm-2.SLDPRT).

### Podstava s víkem a kostkou pro uchycení USB
Odkazy ke stažení podstavy s víkem a kostkou v .STL formátu: [Podstava](./MODELS/models/STARDRAWMEGALINK_base.STL), [Víko](./MODELS/models/STARDRAWMEGALINK_base--cover.STL), [Kostka](./MODELS/models/STARDRAWMEGALINK_usb--block.STL). 
V případě potřeby vlastní úpravy ramen jsou dostupné i komponenty v .SLDPRT formátu: [Podstava](./MODELS/solidworks_models/STARDRAWMEGALINK_base.SLDPRT), [Víko](./MODELS/solidworks_models/STARDRAWMEGALINK_base--cover.SLDPRT), [Kostka](./MODELS/models/STARDRAWMEGALINK_usb--block.SLDPRT).

### Držák pera
Odkaz na stažení držáku pera v .STL formátu: [Držák pera](./MODELS/models/STARDRAWMEGALINK_pen-grabber.stl).
V případě potřeby vlastní úpravy držáku je dostupný držák i v .SLDPRT formátu: [Držák pera](./MODELS/solidworks_models/STARDRAWMEGALINK_pen-grabber.SLDPRT).


## Složení



## Software
Softwarovou část zajišťuje prostředí microsoft makecode pro micro:bit https://makecode.microbit.org/.

Pro tento projekt byla vytvořená externí [pxt-smooth-servo](https://github.com/Kraus-Ivan/pxt-smooth-servo) knihovna napsaná v *Typescript*. Knihovna zajišťuje ovládání serv a mikroserva.
Knihovna má vlastní dokumentaci v souboru [main.ts](https://github.com/Kraus-Ivan/pxt-smooth-servo/blob/master/main.ts) s kódem.
Implementace této knihovny je popsaná v [readme.md](https://github.com/Kraus-Ivan/pxt-smooth-servo/blob/master/README.md).
