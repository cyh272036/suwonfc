let data2 = [
  {

    id: 1,
    title: "수원FC 유니폼 종이 방향제(양면)",
    imgUrl: "/img/goods_16.png",
    content: "c",
    price: 6000

  },

  {

    id: 2,
    title: "수원FC 페이스 마스크",
    imgUrl: "/img/goods_17.png",
    content: "c",
    price: 5000

  },

  {

    id: 3,
    title: "수원FC 스텐 텀블러",
    imgUrl: "/img/goods_18.png",
    content: "c",
    price: 12000
  },
];


// price를 3자리(천단위)마다 콤마를 추가하는 함수
// function addCommasToPrice(price) {
//   return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// data2 배열을 수정하여 price 속성에 콤마를 추가
// data2.forEach(item => {
//   item.price = addCommasToPrice(item.price);
// });

export default data2;