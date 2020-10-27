import React from 'react';

function Food({ name, picture }) {
  // {fav} = props.fav
// console.log(props)
// return <h1>I like {fav}</h1>;
return (
  <div>
    <h1>I like { name }</h1>
    <image src={picture}></image>
  </div>
);
}
const foodIlike = [
{
  name: 'Kimchi',
  image: 'https://i.ytimg.com/vi/DfhkYNgnYYg/maxresdefault.jpg'
},
{
  name: 'Ramen',
  image: 'http://cfile221.uf.daum.net/image/999083345CA821C81A74E7'
},
{
  name: 'Bibimbap',
  image: 'http://cfile26.uf.tistory.com/image/234670415552F3990D533F'
},
{
  name: 'Doncasu',
  image: 'https://i.ytimg.com/vi/2cAbT8QEUY4/maxresdefault.jpg'
},
];


function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodIlike.map(dish => (<Food name={dish.name} picture={dish.image}></Food>))}
      {/* <Food fav="ramen"></Food>
      <Food fav="samgiosal"></Food>
      <Food fav="chukumi"></Food> */}
    </div>
  );
}

export default App;
