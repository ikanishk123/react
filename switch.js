const marks = 66;

let Branch;

switch (true) {
    case marks >= 90 && marks<= 100:
        Branch = "CSE";
        break;
    case marks >= 80 && marks<=90:
        Branch = "ME";
        break;
    case marks >= 70 && marks<=80:
        Branch = "ECE";
        break;
    case marks >= 60 && marks<= 70:
        Branch = "CIVIL";
        break;
    case marks >= 50 && marks<=60:
        Branch = "CHEMICAL";
        break;
    default:
        Branch = "BIOTECH";
        break;
}

        console.log(Branch);