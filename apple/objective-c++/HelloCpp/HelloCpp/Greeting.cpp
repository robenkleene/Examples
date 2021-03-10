//
//  Greeting.cpp
//  HelloCpp
//
//  Created by Roben Kleene on 3/10/21.
//

#include "Greeting.hpp"

Greeting::Greeting() {
    greeting = "Hello C++!";
}

std::string Greeting::greet() {
    return greeting;
}
