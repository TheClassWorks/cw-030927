// // $(this)

// // $("#test")

// $(document).ready(function () {
//   // $("#titr").show();
//   //   $(".btn").click(function () {
//   // $("#titr").toggle('slow');
//   // $("#titr").fadeTo(2000,0.1);
//   // $("#titr").fadeOut(2000);
//   // $("#titr").fadeIn(2000);
//   // $("#titr").fadeToggle(2000);
//   // $(".box").animate(
//   //   {
//   //     // width: "150px",
//   //     height: "300px",
//   //     // left: "50px",
//   //     opacity: "0.3",
//   //   },
//   //   2000
//   // );
//   // console.log($("#titr").text());
//   // $("#titr").text("goodbye");
//   // $("#titr").html("<i>goodbye</i>");
//   // $(".list").append("<li>text</li>");
//   // $(".list").prepend("<li>text2</li>");
//   // $(".list").after("<p>text3</p>");
//   // $(".list").before("<p>text4</p>");
//   // // $(".list").remove();
//   // $(".list").empty();
//   // $("#titr").css({ color: "red" });
//   //   });
//   // accardion

//   $(".accardion div").click(function () {
//     $(".accardion ul").slideUp();
//     $(this).next().slideToggle(500);
//   });
// });
let now = new Date();
console.log(now.getTime());

now.setTime(now.getTime() + 2 * 24 * 60 * 60 * 1000);

document.cookie = `username=${mansuri};path=/;expires=${now}`;
console.log(document.cookie);
