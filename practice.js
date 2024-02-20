// prompt("hello");


//                                 ........... <<<<<<<prtice test   1  >>>>>>>>>>............


// const product ={
//     title : "ballpen",
//     rating : 4,
//     offer : 5 ,
//     price : 220,
// };
// console.log(product);
// console.log(typeof product)

//                                ........... <<<<<<<prtice test  2   >>>>>>>>>>............

// ({QUESTION})...............get input by user by prompt and cheak is it a multiple of 5 or not 

// let a=prompt("enter a number");
// console.log( a); 
// if(a%5===0){
//     console.log( a,"is multiple of 5"
// }else{
//     console.log(a,"is not multiple of 5")
// }


//  {(QUESTION NO 3 )}            ........... <<<<<<<prtice test  2 >>>>>>>>>>............


//        ............................. GRADING OF STUDENT MARKS................


// let marks=prompt("enter the marks")
// console.log("the marks are",marks)
// if(marks>=90){
//     console.log("grade A");
// }else if(marks>=80 && marks<90)
// {
//     console.log("grade B");
// }else if(marks>=70 && marks<80)
// {
//     console.log("grade C");
// }else if(marks>=60 && marks<70)
// {
//     console.log("grade D");
// }
// else{
//     console.log("grade F");
// }



//  {(QUESTION NO 1)}            ........... <<<<<<<prtice test  3>>>>>>>>>>............
// (QUESTION NO 1)                         print all the even number from 1 ---100



// let n=100;
// for(let i=1; i<=100;i++ ){
//     if(i%2==0){
//         console.log("the even no is",i )
//     }    
// }


// (QUESTION NO 2) -----------take the no. from the user until user guess the right no.-------------------


// let a=5;
// let b=prompt("guess the number")
// while(b!=a){
//     b=prompt("please try agian")
// }
// console.log("you enter the correct no.",b)


// (QUESTION NO 2)-------------------take username by prompt and add @ on start and end with string lenght------------


// let INPUTname=prompt("enter your name")
// let fulname="@"+ INPUTname+ INPUTname.Lenght;
// console.log(fulname)




//  {(QUESTION NO 1)}            ........... <<<<<<<prtice test  4>>>>>>>>>>............
//  {(QUESTION NO 1)}  -----------array of marks and find the average of marks-----------------


// let sum=0
// let marks=[1,2,3,4,5]
// console.log(marks.lenght);


// // for(let value of marks){
// //     // console.log(value)
// //     sum += value
// // }
// // // console.log(marks.lenght)
// // let avg = sum / marks.lenght
// // console.log(avg)

                                                // not solved               
   // -----------------------------------------------------------------------------------------------------------

//  {(QUESTION NO 2)}            ........... <<<<<<<prtice test  4>>>>>>>>>>........................
//  make array of five no. and make 10% discount and save the new values


let prices=[100,200,300,400,500]
let i=0
for(let value of prices){
   let offer= vlaue/10
   prices[i]=prices[i]-offer
   console.log(prices[i])

}
