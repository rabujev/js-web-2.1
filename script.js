
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

/*
  Put the JavaScript code you want below.
*/

import axios from 'axios';

let imgTag = document.querySelector('#theImg');
async function getRandCatImgWithApi() {
  let randImg = await axios.get('https://aws.random.cat/meow');
  imgTag.src = randImg.data.file;
}
setInterval (getRandCatImgWithApi, 1000);
