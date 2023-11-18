// 1)
// #
// ##
// ###
// ####
// #####
// ######

var n = 6;
var firstPattern = "";

for (i = 1; i <= n; i++) {
  for (j = 0; j < i; j++) {
    firstPattern += "#";
  }
  firstPattern += "<br/>";
}

document.write("1)<br/>", firstPattern, "<br/>");


// 2) 

// 1
// 1 4
// 1 8 27

n = 3;
var secondPattern = "";

for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    secondPattern += j ** i + " ";
  }
  secondPattern += "<br/>";
}

document.write("2)<br/>", secondPattern, "<br/>");


// 3) 

//     *
//    * *
//   *   *
//  *     *
// *********

n = 5;
var thirdPattern = "";

for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= n - i; j++) {
    thirdPattern += "&nbsp; ";
  }
  for (var k = 0; k < 2 * i - 1; k++) {
    if (i === 1 || i === n) {
      thirdPattern += "*";
    }
    else {
      if (k === 0 || k === 2 * i - 2) {
        thirdPattern += "*";
      }
      else {
        thirdPattern += "&nbsp; ";
      }
    }
  }
  thirdPattern += "<br/>";
}
document.write("3)<br/>", thirdPattern, "<br/>");



// 4) 

//      *
//     *A*
//    *A*A*
//   *A*A*A*

n = 4;
var fourthPattern = "";

for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= n - i; j++) {
    fourthPattern += "&nbsp; ";
  }
  for (var k = 0; k < 2 * i - 1; k++) {
    if (k % 2 == 0) {
      fourthPattern += "*";
    }
    else {
      fourthPattern += "A";
    }
  }
  fourthPattern += "<br/>";
}
document.write("4)<br/>", fourthPattern, "<br/>");


// 5) 

// **********
// ****  ****
// ***    ***
// **      **
// *        *
// **      **
// ***    ***
// ****  ****
// **********

n = 5;
var fifthPattern = "";

for (var i = 1; i <= n; i++) {
  for (var j = n; j >= i; j--) {
    fifthPattern += "*";
  }
  for (var k = 1; k < i * 2 - 1; k++) {
    fifthPattern += " &nbsp;";
  }

  for (var j = n; j >= i; j--) {
    fifthPattern += "*";
  }
  fifthPattern += "<br/>";
}

for (var i = 1; i <= n - 1; i++) {
  for (var j = 0; j <= i; j++) {
    fifthPattern += "*";
  }
  for (var k = (n-i) * 2-1; k > 1; k--) {
    fifthPattern += " &nbsp;";
  }

  for (var j = 0; j <= i; j++) {
    fifthPattern += "*";
  }
  fifthPattern += "<br/>";
}
document.write("5)<br/>", fifthPattern, "<br/>");


// 6)

//     1
//    232
//   34543
//  4567654
// 567898765

n = 5;
var sixthPattern = "";

for(i=1; i<=n; i++) {
  for(j=1; j<=n-i; j++) {
    sixthPattern += "&nbsp; ";
  }

  for(k=i; k<=2*i-1; k++) {
    sixthPattern += k;
  }

  for(j=2*i-2; j>=i; j--) {
    sixthPattern += j;
  }

  sixthPattern += "<br/>"
}

document.write("6)<br/>", sixthPattern, "<br/>");


// 7)

// *        * 
// **      **
// ***    ***
// ****  ****
// **********
// **********
// ****  ****
// ***    ***
// **      **
// *        *

n = 5;
let seventhPattern = "";

for (var i = 0; i <= n-1; i++) {
  for (var j = 0; j <= i; j++) {
    seventhPattern += "*";
  }
  for (var k = (n-i) * 2-1; k > 1; k--) {
    seventhPattern += " &nbsp;";
  }

  for (var j = 0; j <= i; j++) {
    seventhPattern += "*";
  }
  seventhPattern += "<br/>";
}

for (var i = 1; i <= n; i++) {
  for (var j = n; j >= i; j--) {
    seventhPattern += "*";
  }
  for (var k = 1; k < i * 2 - 1; k++) {
    seventhPattern += " &nbsp;";
  }

  for (var j = n; j >= i; j--) {
    seventhPattern += "*";
  }
  seventhPattern += "<br/>";
}

document.write("7)<br/>", seventhPattern, "<br/>");
