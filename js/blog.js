import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase,get,ref } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getDatabase(app)




function getPostData (){
    const user_ref = ref(db,'post/');
    get(user_ref).then((snapshot)=>{
        const data = snapshot.val()
       
       let html = "";
       const table = document.querySelector('.main')
        for (const key in data){
          const{title,post_content} = data[key]
  
          console.log(post_content);
         
         
           html+= `
           <div class="post"> 
               <h2>${title}</h2>
               <p>
                 ${post_content}
               </p>
           </div>
          `
  
        }


        <div class="card1" >
     
        <img class="img" src="{{ post.data.image}}" alt=""  >
        <div class="card__content"> <a  class="eve1" href="{{ post.url }}">
          <p class="card__title" style="background: -webkit-linear-gradient(rgb(188, 12, 241), rgb(212, 4, 4));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;"> {{ post.data.title}}  </p>

          
          <p class="card__description">{{ post.data.description}} <br><br> <b>Date:</b> {{post.data.date}}  <br> <b>veneu:</b> {{post.data.venu}} </p>
        </a></div>
      </div>
    
    
    
    
    </div>
  table.innerHTML =html
  
    })
  }
  
  getPostData()
  