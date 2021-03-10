//
//  Greeting.hpp
//  HelloCpp
//
//  Created by Roben Kleene on 3/10/21.
//

#ifndef Greeting_hpp
#define Greeting_hpp

#include <stdio.h>
#include <string>

class Greeting {
    std::string greeting;
public:
    Greeting();
    std::string greet();
};

#endif /* Greeting_hpp */
