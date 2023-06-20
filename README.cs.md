## Jazyk
[![En](https://img.shields.io/badge/lang-en-blue)](https://github.com/pslib-cz/2022-p2a-mme-pppp-Kraus-Ivan/blob/main/README.md)
[![Cs](https://img.shields.io/badge/lang-cs-red)](https://github.com/pslib-cz/2022-p2a-mme-pppp-Kraus-Ivan/blob/main/README.cs.md)


# StardrawMegalink - Robotické kreslící rameno :tokyo_tower::mechanical_arm::clamp:

## Obsah

- [Úvod](#Úvod)
- [Potřebné vybavení a cena](#potřebné-vybavení-a-cena)
- [Sestavení a tisk](#sestavení-a-tisk)
- [Software](#software)


## Úvod
Projekt má za cíl vytvoření experimentálního prototypu kreslícího ramene s podstavou. Je určen k testování inverzní kinematiky. Softwarovou část zajišťuje mikropočítač Micro:bit s vlastně napsanou knihovnou pro digitální serva ovládající ramena.


## Potřebné vybavení a cena
- 3D tiskárna s filamentem (doporučeno PLA) cca 400 gramů o tiskové ploše alespoň 18×18 cm **(cena cca 42 Kč)**
- Matice k zatížení (12 matic M14)
- 8 magnetů (4 menší: průmer 6 mm, tloušťka 1.3mm, 4 větší: průměr 6 mm, tloušťka 2.6 mm) **(cena cca 40 Kč)**
- Páječka 
- Vteřinové lepidlo
- 5× [závitové vložky](https://eshop.sharplayers.cz/p/zavitove-vlozky-m3?gclid=CjwKCAjwsvujBhAXEiwA_UXnACFnVo32Ehh4C0-VzjGK4OnDROmtyTXOmKyot6yBNGM73W3FBH5FuBoCpv0QAvD_BwE#1555) **(cena cca 18 Kč)**
- 2× [servo SG90](https://www.aliexpress.com/item/4000903254039.html) **(cena cca 26 Kč)**
- 2× Plastové madlo pro uchycení ramene na servo (obsaženu k servu)
- Drobné lineární [mikroservo](https://www.aliexpress.com/item/1005004339409489.html?pdp_npi=2%40dis%21USD%21US%20%248.43%21US%20%248.43%21%21%21%21%21%402103242516849089387838247e4354%2112000028817829408%21btf&_t=pvid:decffea6-7b81-4ac8-801d-0f80278e7e29&afTraceInfo=1005004339409489__pc__pcBridgePPC__xxxxxx__1684908939&spm=a2g0o.ppclist.product.mainProduct) **(cena cca 185 Kč)**
- [Micro:bit](https://www.amazon.com/GeeekPi-Micro-Original-Batteries-Programming/dp/B0BB6T186P/ref=sr_1_1_sspa?keywords=micro+bit&qid=1686042679&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExR1hMUzlaRkk4M0ZZJmVuY3J5cHRlZElkPUEwMzU5NDcxMjZDVzZWNjFaVkRFVCZlbmNyeXB0ZWRBZElkPUEwNTc5NTI5QVlLVFU0VEMwN1MyJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==) **(cena cca 750 Kč)**
- [Rozšiřující deska pro microbit
](https://www.aliexpress.com/item/32919813638.html) **(cena cca 257 Kč)**
- Micro USB kabel **(cena cca 20 Kč)**
- [Micro USB adaptér](https://www.aliexpress.com/item/1005002500157420.html) **(cena cca 50 Kč)**
- Nářadí pro prodloužení napájecích kabelů a prodlužovací kabel pro mikroserv0o
 
***Celková cena: okolo 1388 Kč s micro:bitem***

<img src="https://github.com/pslib-cz/2022-p2a-mme-pppp-Kraus-Ivan/blob/main/images/20230615_111352.jpg" width="400" height="350">
Podobné vruty a šroub je nutné sehnat pro sestavení. Rozměry jsou udány v poměru šířka/délka (milimetry). Stříbrný vrut (druhý zleva) je dodán v balení se servy.

## Sestavení a tisk

### Tisk
Níže zmíněné komponenty vytiskněte na **3D tiskárně**.
Doporučený materiál pro tisk všech komponent je **PLA**.

#### Ramena
Odkazy ke stažení ramen v .STL formátu: [1. rameno](./MODELS/models/STARDRAWMEGALINK_arm-1.STL), [2. rameno](./MODELS/models/STARDRAWMEGALINK_arm-2.STL).
V případě potřeby vlastní úpravy ramen jsou dostupné i ramena v .SLDPRT formátu: [1. rameno](./MODELS/solidworks_models/STARDRAWMEGALINK_arm-1.SLDPRT), [2. rameno](./MODELS/solidworks_models/STARDRAWMEGALINK_arm-2.SLDPRT).

#### Držák pera
Odkaz na stažení držáku pera v .STL formátu: [Držák pera](./MODELS/models/STARDRAWMEGALINK_pen-grabber.stl).
V případě potřeby vlastní úpravy držáku je dostupný držák i v .SLDPRT formátu: [Držák pera](./MODELS/solidworks_models/STARDRAWMEGALINK_pen-grabber.SLDPRT).

#### Podstava s víkem a kostkou pro uchycení USB
Odkazy ke stažení podstavy s víkem a kostkou v .STL formátu: [Podstava](./MODELS/models/STARDRAWMEGALINK_base.STL), [Víko](./MODELS/models/STARDRAWMEGALINK_base--cover.STL), [Kostka](./MODELS/models/STARDRAWMEGALINK_usb--block.STL). 
V případě potřeby vlastní úpravy ramen jsou dostupné i komponenty v .SLDPRT formátu: [Podstava](./MODELS/solidworks_models/STARDRAWMEGALINK_base.SLDPRT), [Víko](./MODELS/solidworks_models/STARDRAWMEGALINK_base--cover.SLDPRT), [Kostka](./MODELS/models/STARDRAWMEGALINK_usb--block.SLDPRT).
**Pozor!** je nutné ve vašem programu ovládajícím tisk na 3D tiskárně nastavit breakpoint na pozici těsně před zatisknutím místa pro vložení magnetů a zatisknutím místa pro vložení matic během tisku.

<div>
<img src="https://github.com/pslib-cz/2022-p2a-mme-pppp-Kraus-Ivan/blob/main/images/20230614_074527.jpg" width="300" height="350">

<img src="https://github.com/pslib-cz/2022-p2a-mme-pppp-Kraus-Ivan/blob/main/images/20230614_113205.jpg" width="300" height="350">
</div>

### Sestavení
Pokud máte vytisknuté všechny komponenty, do podstavy zapuštěné magnetky a matice a zajištěné všechny díly, můžete pokračovat k sestavení.

#### 1. Zapájení závitových vložek
Nahřejte páječku asi na 220 °C. Vezměte podstavu a držák pera. Do otvorů v podstavě vložte závitové vložky. Postupně na každou vložku položte špičkou páječku, čekejte dokud se nezačne filament lehce tavit a vložka se do něj začne zapouštět. V tento moment odeberte páječku a dotlačte vložku do zarovnané pozice pomocí tupého předmětu (například konec fixu). Stejný proces proveďte i u zapuštění vložky do držáku pera. **Po zapuštění počkejte minimálně 5 minut pro stuhnutí**

<div>
<img src="https://github.com/pslib-cz/2022-p2a-mme-pppp-Kraus-Ivan/blob/main/images/20230616_092746.jpg" width="300" height="350">
<img src="https://github.com/pslib-cz/2022-p2a-mme-pppp-Kraus-Ivan/blob/main/images/20230616_092806.jpg" width="350" height="350">
</div>

#### 2. Zasazení micro USB adaptéru
Zasaďte micro USB adaptér do otvoru zevnitř podstvy. Poté vezměte vytisknutou kostku, na ni na stranách naneste vteřinové lepidlo a kostku vsuňte za micro USB adaptér tak, aby fixovala micro USB adaptér v otvoru.

<div>
<img src="https://github.com/pslib-cz/2022-p2a-mme-pppp-Kraus-Ivan/blob/main/images/20230620_100146.jpg" width="300" height="350">
<img src="https://github.com/pslib-cz/2022-p2a-mme-pppp-Kraus-Ivan/blob/main/images/20230620_094711.jpg" width="300" height="350">
<img src="https://github.com/pslib-cz/2022-p2a-mme-pppp-Kraus-Ivan/blob/main/images/20230620_094705.jpg" width="300" height="350">	
</div>

#### 3. Přišroubování rozšiřující micro:bit desky
Vezměte vhodné šroubky a přišroubujte s nimi rozšiřující micro:bit desku k podstavě do zapuštěných vložek.

<img src="https://github.com/pslib-cz/2022-p2a-mme-pppp-Kraus-Ivan/blob/main/images/20230616_093503.jpg" width="300" height="350">

#### 4. Zašroubování serv do podstavy a ramene
Vezměte si servo motory a pomocí k nim přibalených šroubků jeden přišroubujte do otvoru v podstavě. Druhý servo motor přišroubujte do otvoru v ramenu 1.

<img src="https://github.com/pslib-cz/2022-p2a-mme-pppp-Kraus-Ivan/blob/main/images/20230615_113624.jpg" width="300" height="350">

#### 5. Přišroubování lineárního motoru
Vezměte lineární motor a pomocí šroubků ho přišroubujte k držáku pera ze zadní strany. Dejte si pozor, aby byl zašroubován směrem jako na obrázku.

<img src="https://github.com/pslib-cz/2022-p2a-mme-pppp-Kraus-Ivan/blob/main/images/20230615_113752.jpg" width="300" height="350">

#### 6. Přišroubování madel serv
Přišroubujte pomocí přiložených šroubků k servu madla do zdířek v ramenou.

<div>
<img src="https://github.com/pslib-cz/2022-p2a-mme-pppp-Kraus-Ivan/blob/main/images/20230615_112823.jpg" width="300" height="350">

<img src="https://github.com/pslib-cz/2022-p2a-mme-pppp-Kraus-Ivan/blob/main/images/20230615_113159.jpg" width="300" height="350">
</div>

#### 7. Přišroubujte ramena k sobě a k podstavě a přidělejte držák pera
Přišroubujte nejprve druhé rameno k servu na prvním rameni pomocí přiloženého šroubku k servu. Poté přišroubujte první rameno k servu v podstavě.
Také přidělejte držák pera k druhému rameni a kápněte horké lepidlo mezi špičku lineárního serva a druhého ramene.

<img src="https://github.com/pslib-cz/2022-p2a-mme-pppp-Kraus-Ivan/blob/main/images/IMG_2264.JPG" width="450" height="350">

***Voila máte složené robotické rameno***

## Software
Softwarovou část zajišťuje prostředí microsoft makecode pro micro:bit https://makecode.microbit.org/.

Pro tento projekt byla vytvořená externí [pxt-smooth-servo](https://github.com/Kraus-Ivan/pxt-smooth-servo) knihovna napsaná v *Typescript*. Knihovna zajišťuje ovládání serv a mikroserva.
Knihovna má vlastní dokumentaci v souboru [main.ts](https://github.com/Kraus-Ivan/pxt-smooth-servo/blob/master/main.ts) s kódem.
Způsob přidání tohoto rozšíření do makecode projektu je popsaný v [readme.md](https://github.com/Kraus-Ivan/pxt-smooth-servo/blob/master/README.md).
### Implementace této třídy:

```typescript
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
