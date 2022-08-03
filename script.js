// let f1 = document.forms["f1"];
// let f1 = document.forms.f1
// let f1 = document.forms[0]
// console.log(f1.tb.selected);

// // f1.name = "f2"
// f1.tb.onclick = function (){
//       // let login = f1.tt.value;
//       // let password  = f1.tp.value
//       let formValue = {
//             login: f1.tt.value,
//             password:  f1.tp.value
//       }
//       console.log(formValue);
//       f1.tt.value = "";
//       f1.tp.value= "";
// }

// f1.tr.onclick = function (){
//       f1.tt.value = "";
//       f1.tp.value= "";
// }

// let f2 = document.forms["f2"]

// console.log(f2.elements);
// console.log(f2.children);

// console.log(f2.tr);

// for (let i = 0; i < f2.length; i++) {
//       f2.children[i].addEventListener('click', function () {
//             console.log(this.value);
//           document.body.style.background = this.value
//       })
//       console.log( f2.children[i].value)
//       console.log(f2.children)
//   }

//   let f3 = document.forms['f3'];
//   f3.ch.addEventListener('click', function () {
//       if (this.checked) {
//           document.querySelector('.form-box').style.display = 'none'
//       }
//       else {
//           document.querySelector('.form-box').style.display = 'block'
//       }
//   })

//selected
//index
//text

// let f4 = document.forms["f4"];
// f4.colors.onchange = function () {
//       for (let i = 0; i < f4.colors.options.length; i++) {
//           if (f4.colors.options[i].selected) {
//               document.body.style.background = this.value;
//           }
//       }
//   }

// f1.tt.onchange = function (e){
//       // let login = f1.tt.value;
// console.log(e.target.value);
// }

// let f5 = document.forms["f5"];

// f5.change.oninput = function(){

//       if (this.value.length <5){
//       document.getElementById("result").innerHTML = this.value
//       }
//       console.log(this.value.length);
// }

// function displayWindowSize (){
//       const w = document.documentElement.clientWidth
//       const h = document.documentElement.clientHeight

//       document.getElementById("result").innerHTML =
//       `Width  = ${w} , Height = ${h}`
// }

// window.addEventListener("resize", displayWindowSize)

// let scrollHeight = Math.max(
//       document.body.scrollHeight, document.documentElement.scrollHeight,
//       document.body.offsetHeight, document.documentElement.offsetHeight,
//       document.body.clientHeight, document.documentElement.clientHeight
//   );

//   console.log(document.body.scrollHeight, document.documentElement.scrollHeight,
//       document.body.offsetHeight, document.documentElement.offsetHeight,
//       document.body.clientHeight, document.documentElement.clientHeight)

//   console.log('Повна висота документа з прокручуваною частиною: ' + scrollHeight)

// let h = Math.max(
//       document.body.scrollHeight, document.documentElement.scrollHeight,
//       document.body.offsetHeight, document.documentElement.offsetHeight,
//       document.body.clientHeight, document.documentElement.clientHeight
//   )

// console.log ('Поточна прокрутка зверху:' + window.pageYOffset);
// console.log ('Поточна прокрутка зліва:' + window.pageXOffset);

// document.getElementById("btn").onclick = function(){
//       console.log("click")
// // }
// const p = document.getElementById("p")
// document.getElementById("btn").addEventListener("click", ()=>{
//       console.log("click")
// p.scrollIntoView()
// })

// let df = document.forms.f1;
// df.check.onclick = function () { //check
//       console.log(df.elements);
//     for (let i = 0; i < df.length - 2; i++) {
//         df.elements[i].style.background = "red";
//     }
// }
// df.uncheck.onclick = function () { //uncheck
//     for (let i = 0; i < df.length - 2; i++) {
//         df.elements[i].checked = false;
//     }
// }

// const getByClass = (value) => document.getElementsByClassName(value)[0]
// const getById = (value) => document.getElementById(value)
// const styleBtn = getByClass("style")
// const editBtn = getByClass("edit")
// const controlBlock = getById("control")
// const previewContainer = getById("preview")

// styleBtn.onclick = function(){
//     controlBlock.innerHTML = `<div class="styleBlock">
//     <form action="" name="radioBtnForm">
//       <label for="">
//         14px
//         <input type="radio" name="font" />
//       </label>
//       <label for="">
//         16px
//         <input type="radio" name="font" />
//       </label>
//     </form>
//   </div>`

// getById("styleBlock").style.display = "block";
// getById("editBlock").style.display = "none"
// }

// editBtn.onclick = function(){
//     getById("editBlock").style.display = "block";
//     getById("styleBlock").style.display = "none"

// //     controlBlock.innerHTML = `<div id="editBlock">
// //     <textarea id="textarea" name="" id="" cols="30" rows="10">123</textarea>
// //     <div>
// //       <div id="addBtn">ADD</div>
// //       <div id="saveBtn" onclick="handleSave()" >SAVE</div>
// //     </div>
// //   </div>`
//   getById("textarea").value = getById("preview").innerHTML
// }
// // const saveBtn = getById("saveBtn")
// // saveBtn.onclick = () => {
// //     previewContainer.innerHTML = getById("textarea").value
// // }

// getById("saveBtn").onclick = () => {
//     getById("preview").innerHTML = getById("textarea").value

//     console.log(getById("16").value);
// }

// console.log("start");
// const func = ()=> console.log('5 seconds have passed')
// let timeoutID = window.setTimeout(func, 5000)

// console.log("start");
// let counter = 0;
// const func = ()=> {
//   counter += 2;
//   console.log('2 seconds have passed', counter)
//   counter >19 && clearInterval(timeoutID)
// }
// let timeoutID = window.setInterval(func, 2000)

// let bodyChild = document.getElementById("id") // усі дочірні боді

//         	function f1(){
//         		let p = document.createElement("p");
//         		p.innerHTML="t2xt";
//         		bodyChild.appendChild(p);
//             console.log(bodyChild.children);
//         		if(bodyChild.children.length==5){
//         			clearInterval(t);
//         		} // зупиняє виконання коду*/
//         }

//         let t = setInterval (f1,1000);// запускає іменну створену раніше функцію кожної секунди
// let d = new Date(); // створення об'єкту Date
// // console.log(d); // Повертає стрічку з даними про поточну дату і час
// console.log(d.toDateString())
// console.log(d.getUTCDay()) //нумерація дня тижня з 0(неділя)
// console.log(d.getDate()) // поточна дата
// console.log(d.getMonth()) // нумерація місяця з 0(січень)
// console.log(d.getYear()) // рік з 1900 року // не користуватись
// console.log(d.getFullYear()) // поточний рік
// console.log(d.getHours()) // години
// console.log(d.getMinutes()) // хвилини
// console.log(d.getSeconds()) // секунди
// console.log(d.getMilliseconds()) // мілісекунди
// console.log(d.parse());

// const getById = (value) => document.getElementById(value)
// const setTime = () => {
//   const d = new Date();

// getById('datePreview').innerText = `${d.getDate()}.${d.getMonth()+1 < 10 ? `0${d.getMonth()+1}` : d.getMonth()+1}.${d.getFullYear()}`

// getById('time').innerText = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds()}`
// }

// const timer = () => setInterval(setTime, 1000)

// timer();
// let text = "wvdvcwdhelowee";

// let regExp1 = new RegExp("hello");

// console.log(text.includes("hello"));

// console.log(/^hello/.test("shello World! /\n/hello is my string"))

// console.log(/^hello$/.test("hello hello"));

// console.log(/^hello.*world!$/.test("hello world !"));

// console.log(/\d/.test('9'));
// console.log(/[9-0z-aZ-A]/.test('a'));

// console.log(/^\w\S{3,}$/.test("wvWF12341352@!@#$"));

// console.log( /^\d{3}\w?$/.test('123a'));
// let regE = /\d{3,5}\{3,5}$/.test('{3,5}')
// let regE =/^\$$/.test('$')
// console.log();

// console.log(/^(\d{3})+$/.test('123334'));

// /^(\d{2})+$/.test('12')   // ✅
//         /^(\d{2})+$/.test('123')  // ❌
//         /^(\d{2})+$/.test('1234') // ✅

// console.log('1234'.match(/^(\d{3})(\w+)$/));
// console.log(/^(\d{3})(\w+)$/.exec('1234'));

// console.log(/^(\s)(\d{3,})?(\s)(\w+)$/.exec(' 1234 35') );

// const re = /^(\d{4})-(\d{2})?-(?<day>\d{2})/

// const result = re.exec('2015-01-02')

// console.log('123 s'.match(/^(\d{3})(\s)(\w+)$/));

// console.log("http".match(/^http[s]?[t]?$/));

$(function () {
  // $("#get").click(function () {
  //   console.log("click");
  // });

  // $("#get").click(function(){
  //       console.log("Text: " + $("#box").text());
  //       console.log("HTML: " + $("#box").html());
  //       console.log("Value: " + $("#text").val());
  //   });

  //  $("#get").click(function(){
  //       console.log(($("#link").attr("name")));
  //  });

  //  $("#get").click(function(){
  //       // $("#box").html("<h2>New Box</h2>")
  //       $("#text").val("new value");
  //  });

  //  $("#get").click(function(){
  //       // $('#box').append('<p>append</p>');
  //       $('#box').before('<p>before</p>');
  //       $('#box').after('<p>after</p>');
  //  });

//   function appendText() {
//       let txt1 = "<p>Text.</p>";               // Create element with HTML  
//       let txt2 = $("<p></p>").text("Text.");   // Create with jQuery
//       let txt3 = document.createElement("p");  // Create with DOM
//       txt3.innerHTML = "Text.";
//       $("#box").append(txt1, txt2, txt3);      // Append the new elements 
  
// }
//   function afterText() {
//       let txt1 = "<b>I</b>";                    // Create element with HTML  
//       let txt2 = $("<i></i>").text("love ");    // Create with jQuery
//       let txt3 = document.createElement("b");   // Create with DOM
//       txt3.innerHTML = "jQuery!";
//       $("#box").after(txt1, txt2, txt3);        // Insert
//       appendText();
// }
// $('li:first').css('color','red');
// $('li:last').css({
//           color: 'blue',
//           backgroundColor: 'gray'
//       });

      // $('li:odd').css({
      //     color: 'red'
      // })
      // $('li:even').css({
      //     color: 'blue'
      // })

      // $('li:gt(0)').css({
      //     color: 'red'
      // })
      // $('li:lt(1)').css({
      //     color: 'blue'
      // })
      // $('li:eq(3)').css({
      //     color: 'green'
      // })

      // $('li:contains("item 3")').css({
      //     color: 'red'
      // })
      // $('li:has(i)').css({
      //     backgroundColor: 'gray'
      // })
      $('#add').click(function () {
            $('.test-box').addClass('showBlock');
            $('.test-box').show();
            $('.test-box').fadeIn(2000);
            $('.test-box').slideDown(4000);
            // $(selector).animate({params},speed,timingFunc,callback)
            // $('.test-box').show().animate({
            //     width: '300px',
            //     height: '250px'
            // }, 100).animate({
            //     width: '10px',
            //     height: '250px'
            // }, 10000).animate({
            //       width: '350px',
            //       height: '250px'
            //   }, 10000)
        })

        $('#remove').click(function () {
            $('.test-box').removeClass('showBlock');
            $('.test-box').hide();
            $('.test-box').fadeOut();
            $('.test-box').slideUp();
            // $('.test-box').animate({
            //     width: '250px',
            //     height: '350px'
            // }, 1000).animate({
            //     width: '150px',
            //     height: '250px'
            // }, 1000, function () {
            //     $(this).hide()
            // })
        })

        $('#toggle').click(function () {
            $('.test-box').toggleClass('showBlock');
            $('.test-box').toggle();
            $('.test-box').fadeToggle();
            $('.test-box').fadeToggle(1000);
            $('.test-box').fadeToggle(1000,function(){
                // alert('callback')
                $(this).css({
                    backgroundColor: 'gray'
                })
            });
            // $(selector).fadeToggle(speed,callback)
            $('.test-box').slideToggle();
        });










});
