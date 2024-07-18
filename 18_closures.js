function k() {
    let name = 'kanishk';

    function printName() {
        name = 'kansihkanishk'
        console.log(name)
    }

    name = 'Lamba Ji'
    console.log(name);
    return printName;
}

const pName = k();
pName();

//var is global variables