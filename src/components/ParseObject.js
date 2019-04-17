import React from 'react';

const parseObject = (props) => {
    let myObj = {};
    let propertyNames = [];
    let noEnglishKey = {};
    let languageKeys = [];

    if(typeof props.myObjectFilePath !== 'undefined' && props.myObjectFilePath !== ''){

        const loadScript = ( url, callback ) => {
            var script = document.createElement( "script" )
            script.type = "text/javascript";
              script.onload = function() {
                callback();
              };
        
            script.src = url;
            document.getElementsByTagName( "head" )[0].appendChild( script );
        }
          
        // call the function...
        loadScript(props.myObjectFilePath, function() {
            var _obj = window.templateDictionary

            // make a array with all languages from the json(obj)
            languageKeys = Object.keys(_obj);
    
            languageKeys.forEach((_language, _index)=>{
                // make a object with all the property that don't have english key and with ther language
                noEnglishKey[_language] = [];
    
                // make a array with all the property on the english language
                Object.keys(_obj[_language]).forEach((_key,_in)=>{
                    if(propertyNames.indexOf(_key) === -1 && _obj[_language][_key].length) {
                        return propertyNames.push(_key);
                    }
                });
            });
    
            propertyNames.forEach((property, _index)=>{
                if(typeof _obj['en'][property] !== 'undefined') {
                    // make a propery with a empty array for every propety from english language on the new object "myObj"
                    myObj[_obj['en'][property]] = [];
                }
    
                languageKeys.forEach((_language, _index)=>{
                    if(typeof _obj[_language][property] !== 'undefined' && _obj[_language][property].length) { 
                        if(typeof myObj[_obj['en'][property]] === 'undefined') {
                            // push the property that don't have a language key in noEnglishKey object (every property to his language key)
                            noEnglishKey[_language].push(_obj[_language][property])
                        }
                        if(typeof myObj[_obj['en'][property]] !== 'undefined') {
                            // populate the myObj with property from disponible language
                            myObj[_obj['en'][property]].push({[_language] :_obj[_language][property]})
                           
                        }
                    }
                });
            }); 
            console.log('>>>>',myObj)
        });
    };

    return (
    <div>
        <p><b>Support</b></p>
        <ul>
            <span>language</span>
            <li><span>Поддержка</span> - <span>edit</span></li>
        </ul>
    </div>
    )   
};

export default parseObject;