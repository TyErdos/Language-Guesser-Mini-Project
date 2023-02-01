import {franc, francAll} from 'franc';
import langs from 'langs';
import color from 'colors';

const userInput = process.argv[2];

const langCode = franc(userInput);


if(langCode === 'und')
{
    console.log('Sorry, could not detect language, input more text'.red)
}
else
{
    const language = langs.where('3', langCode);
    console.log(`Our best guess is: ${language.name}`.green);
}

