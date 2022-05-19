localStorage.setItem("number", 1);

console.log(localStorage.getItem("number"));

localStorage.removeItem("number");

localStorage.clear();

let json= '{"id":2}'

try {

    let user = JSON.parse(json);
    console.log(user);

    if (!user.name) {
        throw new Error("В этих данных нет имени!")
    }
    console.log('Normal');
    console.log(a);
    console.log('Результат');

} catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`Мы получили ошибку: ${error.name}`)
} finally {
    console.log('А я выполняюсь сюда');
}


console.log('А я буду работать дальше');