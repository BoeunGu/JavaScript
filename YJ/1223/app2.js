const fileInput = document.getElementById("file-input");
const imgBox = document.getElementById("img-box");

function isValid(type) {
  return type.split("/")[0] === "image";
}

function displayImg(file) {
  const img = document.createElement("img");

  // 로컬스토리지로 저장한 파일을 읽어오는 경우 이쪽으로 들어옴
  if (typeof file === "string") {
    img.src = file;
  }
  //사용자가 맨 처음에 업로드한 파일은 객체이므로 이쪽으로 들어옴
  else {
    img.src = URL.createObjectURL(file); //파일 데이터로 부터 임시경로를 만들어주는 역할
  }
  imgBox.appendChild(img);
}

function rememberImg(e) {
  console.log(e.target.result); // reader객체로 읽어온 데이터 (이미지 경로)
  localStorage.setItem("file", JSON.stringify(e.target.result)); // 문자열로 저장하기 위해서 JSON.strungify() 사용
}

function uploading(e) {
  const file = e.target.files[0];
  const reader = new FileReader(); //사용자가 업로드한 파일데이터를 읽어오기위한 파일 객체
  if (!isValid(file.type)) {
    imgBox.innerHTML = "File type is not valid";
    return;
  }

  displayImg(file); //화면에 이미지를 보여주기

  reader.onload = rememberImg; // 파일 읽기가 끝나면  rememberImg 실행
  reader.readAsDataURL(file); // reader객체가 파일을 읽어오기
}

//저장된 이미지를 다시 디스플레이 해줌
function renderImg() {
  localStorage.getItem("file"); //

  if (fileStored) {
    displayImg(fileStored);
  }
}

fileInput.addEventListener("change", uploading);
window.addEventListener("load", renderImg);
