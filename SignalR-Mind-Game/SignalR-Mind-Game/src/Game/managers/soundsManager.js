import { Howl } from 'howler';
export var CatSounds;
(function (CatSounds) {
    CatSounds[CatSounds["SCat0"] = 0] = "SCat0";
    CatSounds[CatSounds["SCat1"] = 1] = "SCat1";
    CatSounds[CatSounds["SCat2"] = 2] = "SCat2";
    CatSounds[CatSounds["SCat3"] = 3] = "SCat3";
})(CatSounds || (CatSounds = {}));
export class SoundsManager {
    static playSound(sound) {
        switch (sound) {
            case CatSounds.SCat0:
                this.sCat0.play();
                break;
            case CatSounds.SCat1:
                this.sCat1.play();
                break;
            case CatSounds.SCat2:
                this.sCat2.play();
                break;
            case CatSounds.SCat3:
                this.sCat3.play();
                break;
        }
    }
}
SoundsManager.sCat0 = new Howl({
    src: ['assets/sounds/sCat0.mp3'],
    volume: 1,
    loop: false,
});
SoundsManager.sCat1 = new Howl({
    src: ['assets/sounds/sCat1.mp3'],
    volume: 1,
    loop: false,
});
SoundsManager.sCat2 = new Howl({
    src: ['assets/sounds/sCat2.mp3'],
    volume: 1,
    loop: false,
});
SoundsManager.sCat3 = new Howl({
    src: ['assets/sounds/sCat3.mp3'],
    volume: 1,
    loop: false,
});
