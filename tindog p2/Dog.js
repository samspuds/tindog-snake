import dogs from "./data.js";
class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return ` <div>
                <img class="avatar" src="${avatar}" alt="" />
                <h4 class="name"> ${name}, ${age} </h4>
                <h5 id="bio"> ${bio}</h5>
            </div>`;
  }

  likedPic() {
    const { name, avatar, age, bio } = this;
    return `<div>
              <div class="imgcont">
              <img class="sign" src="images/badge-like.png" alt="" />
              <img class="avatar" src="${avatar}" alt="" />
              </div>
              <h4 class="name"> ${name}, ${age} </h4>
              <h5 id="bio"> ${bio}</h5>
            </div>`;
  }
  nopedPic() {
    const { name, avatar, age, bio } = this;
    return `<div>
              <div class="imgcont">
              <img class="sign" src="images/badge-nope.png" alt="" />
              <img class="avatar" src="${avatar}" alt="" />
              </div>
              <h4 class="name"> ${name}, ${age} </h4>
              <h5 id="bio"> ${bio}</h5>
            </div>`;
  }
}

// const displayMain = new Dog(dogs.Rex);
// const displayMain1 = new Dog(dogs.Bella);
// const displayMain2 = new Dog(dogs.Teddy);

// const dogArray = [displayMain, displayMain1, displayMain2];
// console.log(dogArray);
// for (let doggy of dogArray) {
//   document.getElementById("MAIN-default-state").innerHTML = doggy.getDogHtml();
// }
export default Dog;
