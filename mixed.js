//array of bands (10 in total)
const bandList = ['Megadeth', 'Black Sabbath', 'AC/DC', 'Iron Maiden', 'Slipknot', 'Pantera', 'Tool', 'Deftones', 'Dio', 'Kreator'];
//array of actions (4 in total)
const locationActions = [   'once performed in', 
                            'once travelled through', 
                            'once stayed in', 
                            'once went to'];
//array of locations (12 in total)
const locationList =   ['London',
                        'Tokyo',
                        'Paris',
                        'Sydney',
                        'Hong Kong',
                        'LA',
                        'New York',
                        'Rome',
                        'Moscow',
                        'Berlin',
                        'Seoul',
                        'Cape Town'];
//array of verbs (12 in total)
const verbList = [
                'played DnD with',
                 'played leap frog with',
                'gave an unwanted massageto',
                'invented golf with',
                'ran away from a horde with',
                'pretended to be',
                'punched',
                'insulted',
                'ate with',
                'played with',
                'ate fondue off',
                'very ineffectually punched'];
//array of other people (12 in total)
const otherPersonList = [
                'the Pope',
                'Joe Biden',
                'Trump',
                'a human statue',
                'a German eunuch',
                'Mike Trout',
                'Elmer Fudd',
                'Thor',
                'Odin',
                'a gangster',
                'God',
                'the first person ever to say Wazaap'
]

//start of function to create random text
function bandFacts() {
//create a random number based ont input array
function getRandNum(array){
    return Math.floor(Math.random() * array.length);
}
//choosing random indexes from the different arrays
let band = bandList[getRandNum(bandList)];
let locationVerb = locationActions[getRandNum(locationActions)];
let location = locationList[getRandNum(locationList)];
let verb = verbList[getRandNum(verbList)];
let otherPerson = otherPersonList[getRandNum(otherPersonList)];

//putting it together
let fullString = `${band} ${locationVerb} ${location} and ${verb} ${otherPerson}`;
console.log('Did you know:')
console.log(fullString + '?');
};

bandFacts();