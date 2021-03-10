//
//  ViewController.m
//  HelloCpp
//
//  Created by Roben Kleene on 3/10/21.
//

#import "ViewController.h"
#import "Greeting.hpp"

@interface ViewController () {
    Greeting greeting;
}
@property (weak, nonatomic) IBOutlet UIButton *helloButton;
- (IBAction)showGreeting:(id)sender;
@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (IBAction)showGreeting:(id)sender {
    NSString *newTitle = [NSString stringWithCString:greeting.greet().c_str()
                                         encoding:[NSString defaultCStringEncoding]];
    [self.helloButton setTitle:newTitle forState:UIControlStateNormal];
}

@end
