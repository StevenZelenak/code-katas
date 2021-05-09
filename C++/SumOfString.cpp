//https://www.codewars.com/kata/5966e33c4e686b508700002d/train/cpp

//Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

#include <iostream>
#include <sstream>
#include <string>

using namespace std;

string sum_str(const string &a, const string &b)
{

  int numIntOne;
  int numIntTwo;
  int sum;
  string zeroValue = "0";
  string sumString;
  stringstream firstEntry;
  stringstream secondEntry;

  if (a == "")
  {

    firstEntry << zeroValue;
    firstEntry >> numIntOne;

    secondEntry << b;
    secondEntry >> numIntTwo;

    sum = numIntOne + numIntTwo;

    sumString = to_string(sum);
  }
  else if (b == "")
  {

    firstEntry << a;
    firstEntry >> numIntOne;

    secondEntry << zeroValue;
    secondEntry >> numIntTwo;

    sum = numIntOne + numIntTwo;

    sumString = to_string(sum);
  }
  else if (a == "" && b == "")
  {
    firstEntry << zeroValue;
    firstEntry >> numIntOne;

    secondEntry << zeroValue;
    secondEntry >> numIntTwo;

    sum = numIntOne + numIntTwo;

    sumString = to_string(sum);
  }
  else
  {
    firstEntry << a;
    firstEntry >> numIntOne;

    secondEntry << b;
    secondEntry >> numIntTwo;

    sum = numIntOne + numIntTwo;

    sumString = to_string(sum);
  }

  return sumString;
}

//shortest answer on codekata

//#include <string>
/*
std::string sum_str(const std::string& a, const std::string& b) {
return std::to_string(std::stoi(a == "" ? "0" : a) + std::stoi(b == "" ? "0" : b));
}
*/
