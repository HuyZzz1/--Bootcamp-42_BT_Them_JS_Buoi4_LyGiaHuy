//Bài tập 1: Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ).tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.
//Input: ngày, tháng, năm
//Output: ngày, tháng, năm của ngày tiếp theo, ngày, tháng, năm của ngày trước đó
document.getElementById("submit_1").onclick = function () {
  let day = +document.getElementById("day").value;
  let month = +document.getElementById("month").value;
  let year = +document.getElementById("year").value;

  if (day == 0 && month == 0 && year == 0) {
    return (document.getElementById(
      "message"
    ).innerHTML = `Vui lòng nhập dữ liệu`);
  }
  if (day == 1) {
    switch (month - 1) {
      case 4:
      case 6:
      case 9:
      case 11:
        day = 30;
        break;
      case 2:
        day = 28 + ((year1 % 4 == 0 && year % 100) || year % 400 == 0);
        break;
      default:
        day = 31;
    }
    if (month == 1) {
      month = 12;
      year--;
    } else {
      month--;
    }
  } else {
    day--;
  }

  document.getElementById("message").innerHTML = `${day}/${month}/  ${year}`;
};

document.getElementById("submit_2").onclick = function () {
  let day = +document.getElementById("day").value;
  let month = +document.getElementById("month").value;
  let year = +document.getElementById("year").value;

  if (day == 0 && month == 0 && year == 0) {
    return (document.getElementById(
      "message"
    ).innerHTML = `Vui lòng nhập dữ liệu`);
  }

  let tg = 0;
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      tg = 30;
      break;
    case 2:
      tg = 28 + ((year % 4 == 0 && year % 100) || year % 400 == 0);
      break;
    default:
      tg = 31;
  }

  // Hiển thị ngày mai
  day = (day % tg) + 1;
  if (day == 1) {
    month = (month % 12) + 1;
  }

  document.getElementById("message").innerHTML = `${day}/${month}/${
    year + (month === 1 && day === 1)
  }`;
};

//Bài tập 2:Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng của năm nhuận).
document.getElementById("submit_3").onclick = function () {
  // Input : tháng , năm

  let month = +document.getElementById("numberMonth").value;
  let year = +document.getElementById("numberYear").value;

  // Ouput : xuất ra có bao nhiêu ngày
  if (month == 0 && year == 0) {
    return (document.getElementById(
      "message_2"
    ).innerHTML = `Vui lòng nhập dữ liệu`);
  }

  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      document.getElementById(
        "message_2"
      ).innerHTML = `Tháng ${month} năm ${year} có 30 ngày`;
      break;
    case 2:
      if ((year % 4 == 0 && year % 100) || year % 400 == 0) {
        document.getElementById(
          "message_2"
        ).innerHTML = `Tháng ${month} năm ${year} có 29 ngày`;
      } else {
        document.getElementById(
          "message_2"
        ).innerHTML = `Tháng ${month} năm ${year} có 28 ngày`;
      }
      break;
    default:
      document.getElementById(
        "message_2"
      ).innerHTML = `Tháng ${month} năm ${year} có 31 ngày`;
  }
};

//Bài tập 3: Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.
document.getElementById("submit_4").onclick = function () {
  //Input: 1 số có 3 chữ số
  let number = +document.getElementById("number").value;
  // Ouput: Đọc số

  let hundred = Math.floor(number / 100);
  let ten = Math.floor((number % 100) / 10);
  let unit = number % 10;

  if (number < 100 || number > 999) {
    document.getElementById(
      "message_3"
    ).innerHTML = `Vui lòng nhập số có 3 chữ số`;
  } else {
    switch (hundred) {
      case 1:
        document.getElementById("message_3").innerHTML = "Một trăm ";
        break;
      case 2:
        document.getElementById("message_3").innerHTML = "Hai trăm ";
        break;
      case 3:
        document.getElementById("message_3").innerHTML = "Ba trăm ";
        break;
      case 4:
        document.getElementById("message_3").innerHTML = "Bốn trăm ";
        break;
      case 5:
        document.getElementById("message_3").innerHTML = "Năm trăm ";
        break;
      case 6:
        document.getElementById("message_3").innerHTML = "Sáu trăm ";
        break;
      case 7:
        document.getElementById("message_3").innerHTML = "Bảy trăm ";
        break;
      case 8:
        document.getElementById("message_3").innerHTML = "Tám trăm ";
        break;
      case 9:
        document.getElementById("message_3").innerHTML = "Chín trăm ";
        break;
    }
    if (ten % 10 == 0 && unit != 0) {
      document.getElementById("message_3").innerHTML += "lẻ ";
    }
    switch (ten) {
      case 1:
        document.getElementById("message_3").innerHTML += "mười ";
        break;
      case 2:
        document.getElementById("message_3").innerHTML += "hai mươi ";
        break;
      case 3:
        document.getElementById("message_3").innerHTML += "ba mươi ";
        break;
      case 4:
        document.getElementById("message_3").innerHTML += "bốn mươi ";
        break;
      case 5:
        document.getElementById("message_3").innerHTML += "năm mươi ";
        break;
      case 6:
        document.getElementById("message_3").innerHTML += "sáu mươi ";
        break;
      case 7:
        document.getElementById("message_3").innerHTML += "bảy mươi ";
        break;
      case 8:
        document.getElementById("message_3").innerHTML += "tám mươi ";
        break;
      case 9:
        document.getElementById("message_3").innerHTML += "chín mươi ";
        break;
    }
    switch (unit) {
      case 1:
        document.getElementById("message_3").innerHTML += "một ";
        break;
      case 2:
        document.getElementById("message_3").innerHTML += "hai ";
        break;
      case 3:
        document.getElementById("message_3").innerHTML += "ba ";
        break;
      case 4:
        document.getElementById("message_3").innerHTML += "bốn  ";
        break;
      case 5:
        document.getElementById("message_3").innerHTML += "năm  ";
        break;
      case 6:
        document.getElementById("message_3").innerHTML += "sáu ";
        break;
      case 7:
        document.getElementById("message_3").innerHTML += "bảy  ";
        break;
      case 8:
        document.getElementById("message_3").innerHTML += "tám  ";
        break;
      case 9:
        document.getElementById("message_3").innerHTML += "chín ";
        break;
    }
  }
};

// Bài tập 4: Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương trình in tên sinh viên xa trường nhất
// Input: Tên, tọa độ của 3 sinh viên và tọa độ của trường
document.getElementById("submit_5").onclick = function () {
  let name1 = document.getElementById("name").value;
  let name2 = document.getElementById("name2").value;
  let name3 = document.getElementById("name3").value;
  let coordinatesX1 = +document.getElementById("coordinates-x1").value;
  let coordinatesX2 = +document.getElementById("coordinates-x2").value;
  let coordinatesX3 = +document.getElementById("coordinates-x3").value;
  let coordinatesXSchool = +document.getElementById("coordinates-x4").value;
  let coordinatesY1 = +document.getElementById("coordinates-y1").value;
  let coordinatesY2 = +document.getElementById("coordinates-y2").value;
  let coordinatesY3 = +document.getElementById("coordinates-y3").value;
  let coordinatesYSchool = +document.getElementById("coordinates-x4").value;

  // Output: xuất ra kết quả sinh viên xa trường nhất
  if (
    coordinatesX1 < 0 ||
    coordinatesX2 < 0 ||
    coordinatesX3 < 0 ||
    coordinatesXSchool < 0 ||
    coordinatesY1 < 0 ||
    coordinatesY2 < 0 ||
    coordinatesYSchool < 0 ||
    coordinatesY3 < 0 ||
    name1 === "" ||
    name2 === "" ||
    name3 === ""
  ) {
    return (document.getElementById(
      "message_4"
    ).innerHTML = `Dữ liệu không hợp lệ vui lòng nhập lại`);
  }

  let d1 = Math.sqrt(
    Math.pow(coordinatesXSchool - coordinatesX1, 2) +
      Math.pow(coordinatesYSchool - coordinatesY1, 2)
  );
  let d2 = Math.sqrt(
    Math.pow(coordinatesXSchool - coordinatesX2, 2) +
      Math.pow(coordinatesYSchool - coordinatesY2, 2)
  );
  let d3 = Math.sqrt(
    Math.pow(coordinatesXSchool - coordinatesX3, 2) +
      Math.pow(coordinatesYSchool - coordinatesY3, 2)
  );

  if (d1 > d2 && d1 > d3) {
    document.getElementById(
      "message_4"
    ).innerHTML = `Sinh viên xa trường nhất: ${name1}`;
  } else if (d2 > d3 && d2 > d1) {
    document.getElementById(
      "message_4"
    ).innerHTML = `Sinh viên xa trường nhất: ${name2}`;
  } else {
    document.getElementById(
      "message_4"
    ).innerHTML = `Sinh viên xa trường nhất: ${name3}`;
  }
};
