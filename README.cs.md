## Jazyk
- [English](./README.md)
- [Čeština](./README.cs.md)


# StardrawMegalink - Robotické kreslící rameno ⛩️🦾達

## Obsah

- [Úvod](#Úvod)
- [Tisk](#Tisk)
- [Software](#Software)

## Úvod
Projekt má za cíl vytvoření experimentálního prototypu kreslícího ramene s podstavou. Je určen k testování inverzní kinematiky. Softwarovou část zajišťuje mikropočítač Micro:bit s vlastně napsanou knihovnou pro digitální serva ovládající ramena.

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

## Software
Softwarovou část zajišťuje prostředí microsoft makecode pro micro:bit https://makecode.microbit.org/.

Pro tento projekt byla vytvořená externí [pxt-smooth-servo](https://github.com/Kraus-Ivan/pxt-smooth-servo) knihovna napsaná v *Typescript*. 
Knihovna má vlastní dokumentaci v souboru [main.ts](https://github.com/Kraus-Ivan/pxt-smooth-servo/blob/master/main.ts) s kódem.
Implementace této knihovny je popsaná v [readme.md](https://github.com/Kraus-Ivan/pxt-smooth-servo/blob/master/README.md).
