class Traductor {
    constructor() {
        this.arrData = [];
    }
    addWord(lang, word) {
        let w = new Word(lang, word);
        this.arrData.push(w);
        return w;
    }
    translateTo(lang) {
        this.translateTo = lang;
        return this;
    }
    translate() {
        let _this = this;
        $( ".traducir" ).each(function( index ) {
            let value = $( this ).text().trim();
            for (let i=0; i < _this.arrData.length; i++) {
                let w = _this.arrData[i];
                if (w.getWord() == value) {
                    $(this).text( w.getTranslation(_this.translateTo));
                }
            }
        });
        $( ".traducir-placeholder" ).each(function( index ) {
            let value = $(this).attr('placeholder').trim();
            for (let i=0; i < _this.arrData.length; i++) {
                let w = _this.arrData[i];
                if (w.getWord() == value) {
                    $(this).attr('placeholder', w.getTranslation(_this.translateTo));
                }
            }
        });
    }
}

class Word {
    constructor(lang, word) {
        this.mainLang = lang;
        this.mainWord = word;
        this.translations = [];
    }
    addLang(lang, translation) {
        let obj = {
            'lang':lang,
            'translation':translation
        };
        this.translations.push(obj);
    }
    getWord() {
        return this.mainWord;
    }
    getLang() {
        return this.mainLang;
    }
    getTranslation(lang) {
        for (let i=0; i < this.translations.length; i++) {
            let w = this.translations[i];
            if (w.lang == lang) return w.translation;
        }
        return '';
    }
}

