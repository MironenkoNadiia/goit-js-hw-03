let message = '';
const user = {
    age: 20,
    hobby: 'html',
    name: 'Mango',
    premium: true,
};

//Write code under this line  
user.mood = 'happy'; 
user['full time'] = 'true';
user.hobby = 'skydiving';
user.premium = false;
console.log(user);



    const keys = Object.keys(user);
for (const key of keys) {
    message += `${key} : ${user[key]}\n`;
}


    console.log(message);
