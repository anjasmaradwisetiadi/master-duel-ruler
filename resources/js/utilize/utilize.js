export const utilize = {
    characterEncodingUrl(text){
        if(text){
            if(text.includes('&')){
                return text.replaceAll('&','%26')
            } else if(text.includes(`"`)){
                return text.replaceAll(`"`,'%22')
            }  else {
                return text;
            }
        }
    },

    textTypeMonster(data){
        if( data === 'link' || data === 'xyz' ){
            return data.toUpperCase();
        } else {
            return data ? data[0].toUpperCase()+data.substr(1).toLowerCase() : data;
        }
     },

     textEffectMonster(data){
        return data !== 'effect' ? '/ Effect' : ''
     },

     decodeHTML(htmlText){
        let txt = document.createElement("textarea");
        txt.innerHTML = htmlText;
        return txt.value;
     },

     textDef(type,def=0){
        let txt = document.createElement("textarea");
        let htmlText = type === 'link' ? '' : `<b>DEF/</b>${def}`
        txt.innerHTML = htmlText;
        return txt.value;
     },

     sliceCardToMainOrExtraDeck(data){
        if(data){
            let dataFrame = ['xyz', 'link', 'fusion', 'synchro'];
            if(dataFrame.includes(data.frameType)){
                return 'extra deck';
            } else {
                return 'main deck';
            }
        }
     }
}