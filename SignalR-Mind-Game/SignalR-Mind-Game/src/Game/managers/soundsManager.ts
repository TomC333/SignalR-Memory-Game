import { Howl } from 'howler';

export enum CatSounds {
    SCat0 = 0,
    SCat1 = 1,
    SCat2 = 2,
    SCat3 = 3,
}

export class SoundsManager {


    static sCat0 = new Howl({
        src: ['assets/sounds/sCat0.mp3'],
        volume: 1,
        loop: false,
    });

    static sCat1 = new Howl({
        src: ['assets/sounds/sCat1.mp3'],
        volume: 1,
        loop: false,
    });

    static sCat2 = new Howl({
        src: ['assets/sounds/sCat2.mp3'],
        volume: 1,
        loop: false,
    });

    static sCat3 = new Howl({
        src: ['assets/sounds/sCat3.mp3'],
        volume: 1,
        loop: false,
    });

    static playSound(sound: CatSounds) {

        switch (sound) {
            case CatSounds.SCat0:
                this.sCat0.play();
                break
            case CatSounds.SCat1:
                this.sCat1.play();
                break
            case CatSounds.SCat2:
                this.sCat2.play();
                break
            case CatSounds.SCat3:
                this.sCat3.play();
                break
        }
    }


    
}