const loadNews = async() =>{
    const res= await fetch(' https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    data.posts.forEach((items) => {
      //console.log(items);  
    })
}

loadNews();