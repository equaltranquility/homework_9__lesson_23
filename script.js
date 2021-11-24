"use strict";

console.log("-----------");
console.log("Пункт №1:");
console.log("-----------");
const DATA = fetch("https://reqres.in/api/users?per_page=12")
    .then((response) => {
      return response.json();
    })
    .then(({data}) => {
          // console.log(data)
          return data;
    });


DATA.then((data) => {
    console.log("-----------");
    console.log("Пункт №2:");
    console.log("-----------");
    data.forEach((item) => {
        console.log(item?.last_name);
    });
});

DATA.then((data) => {
    console.log("-----------");
    console.log("Пункт №3:");
    console.log("-----------");
    data.filter((item) => {
        if (item?.last_name[0] === "F") {
            console.log(item);
        }
    });
});

DATA.then((data) => {
    console.log("-----------");
    console.log("Пункт №4:");
    console.log("-----------");
    const resultAcc = data.reduce((accumulator, item) => {
        accumulator = accumulator + `${item?.first_name} ${item?.last_name}, `;
        return accumulator;
    }, '')
        console.log(resultAcc);
});

DATA.then((data) => {
  console.log("-----------");
  console.log("Пункт №5:");
  console.log("-----------");
  Object.entries(data[0]).forEach((key) => {
    console.log('Ключ: ', key[0])
  } )
});
