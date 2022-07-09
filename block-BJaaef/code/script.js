

let allPeople=got.houses.reduce((acc,cv)=>{
   acc=acc.concat(cv.people)
   return acc;
},[])






let ul=document.querySelector("ul");

allPeople.forEach((people)=>{
  let li=document.createElement("li");
  let img=document.createElement("img");
  img.src=people.image;
  img.alt=people.name;
  let h2=document.createElement("h2");
  h2.innerText=people.name;
  let p=document.createElement("p");
  p.innerText=people.description;
  let button=document.createElement("button");
  button.innerText="Learn More";
  li.append(img,h2,p,button);
  console.log(li);
  ul.append(li);

})