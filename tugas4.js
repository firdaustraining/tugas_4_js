var a = 100;
var b = 170;
var c = 120;

if (a > b && a > c) {
  console.log("A tertinggi");
  if (b > c) {
    console.log("urutan tinggi adalah : A,B,C");
  } else {
    console.log("Urutan tinggi adalah : A,C,B");
  }
} else if (b > a && b > c) {
  console.log("B Tertinggi");
  if (a > c) {
    console.log("Urutan tinggi adalah : B,A,C");
  } else {
    console.log("Urutan tinggi adalah : B,C,A");
  }
} else {
  console.log("C Tertinggi");
  if (a > b) {
    console.log("Urutan tinggi adalah : C,A,B");
  } else {
    console.log("Urutan tinggi adalah : C,B,A");
  }
}
