function a() {
    setTimeout(() => {
        console.log('how are you');
    }, 1000);
}

function b() {
    setTimeout(() => {
        console.log("I'm fine, Thankyou!");
    }, 2000);
}

function c() {
    setTimeout(() => {
        console.log('byeee');
    }, 3000);
}

a(b(c(
    console.log('Hello')
)))