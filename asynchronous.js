function kanishk() {
    setTimeout(() => {
        console.log('hello');
    }, 2000);

    setTimeout(() => {
        console.log('Yesssss');
    }, 2500);
}

kanishk();

function a() {
    setTimeout(() => {
        console.log('how are you');
    }, 1000);
}

function b() {
    setTimeout(() => {
        console.log("I'm fine, Thankyou!");
    }, 1500);
}

function c() {
    setTimeout(() => {
        console.log('byeee');
    }, 2000);
}

a(b(c(
    console.log('Hello')
)))
