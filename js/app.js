const loadNews = async() =>{
    const res= await fetch(' https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const fortrainContainer = document.getElementById('fortrain-container');
    data.posts.forEach((items) => {
      //console.log(items);
      const div = document.createElement('div');

      div.innerHTML = ` <div class="container flex gap-2 gap-10 p-5 bg-[#797DFC1A] rounded-2xl mx-auto">
      <div>
      <!--indicat-->
      <div class="indicator ">
          <span class="indicator-item badge  ${items.isActive? "bg-[#10B981]":"bg-[#FF3434]"} "></span> 
          <div class="grid w-20 h-20 rounded-2xl bg-base-300 place-items-center"><img src="${items.image}" alt=""></div>
        </div>
  </div>
  <div>
      <!--details-->
      <div class="flex gap-5">
      <div><p class="text-sm" >${items.category}</p></div>
      <div> <p class="text-sm">Author:<span>${items.author.name}</span></p></div>
      </div>
      <h3 class="font-extrabold py-2" >${items.title}</h3>
      <p class="py-5">${items.description}</p>
   <hr>
      <div class="flex gap-12 py-5">
          <div class="flex gap-5">

          
      <!--last part of icon-->
      <div class="flex gap-2">
         <div>
          <img src="images/Group 13.png" alt="">
         </div>
         <div>
          <p>${items.comment_count}</p>
         </div>
      </div>
      <div class="flex gap-2">
          <div>
           <img src="images/tabler-icon-eye.png" alt="">
          </div>
          <div>
           <p>${items.view_count}</p>
          </div>
       </div>
       <div class="flex gap-2">
          <div>
           <img src="images/Group 18.png" alt="">
          </div>
          <div>
           <p>${items.posted_time}<span>min</span></p>
          </div>
       </div>
      </div>
      <div>
        <button class="btn"><img src="images/email 1.png" alt=""></button>
          
      </div>
    </div>
   </div>
  </div>` ; 
  fortrainContainer.appendChild(div);
    });

}





const addReading = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts?category=categoryName');
    const data = await res.json();
   // console.log(data);

    const container = document.getElementById('container');

    data.posts.forEach((items) => {
        const div = document.createElement('div');
        div.innerHTML=`<div class="flex gap-2">
        <div>
          <p>${items.description}</p>
        </div>

        <div>
          <div class="flex gap-2">
            <div>
             <img src="images/tabler-icon-eye.png" alt="">
            </div>
            <div>
             <p>${items.view_count}</p>
            </div>
         </div>
        </div>
       </div>`;  
       container.appendChild(div);
         
    });
}  
//addReading();
/**
 * here the count
 */
/*const button = document.getElementsByClassName('btn');
for(const btn of button){

  let count =0;
  const buttons = document.getElementsByClassName('btn');
  for(const btn of buttons){
  btn.addEventListener('click',function(){
    count= count+1;
    document.getElementById('count').innerText=count;
  })}
}*/

const addForman = async() =>{
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
  const data =await res.json();
  const cardsContainer= document.getElementById('cards-container');
  data.forEach((items) => {
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="card w-75 bg-base-100 shadow-xl">
  <figure><img src="${items.cover_image}" alt="Shoes" /></figure>
  <div class="card-body">
    <div class="flex">
      <div><img src="images/Frame (1).png" alt=""></div>
      <div>${items.author.posted_date}</div>
    </div>
    <h5 class="card-title font-extrabold text-sm">${items.title}</h5>
    <p class="text-sm">${items.description}</p>
    <div class="flex gap-2">
      <div class="grid w-20 h-20">
         <img src="${items.profile_image}" alt="">
      </div>
      <div>
        <p class="text-sm">${items.author.name}</p>
        <p class="text-sm">${items.author.designation}</p>
      </div>
    </div>
  </div>
  </div>
  `;
  cardsContainer.appendChild(div);
  });
}
loadNews();
addForman();
