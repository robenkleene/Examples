//
//  ViewController.swift
//  LottieDemoMac
//
//  Created by Roben Kleene on 9/17/19.
//  Copyright © 2019 Roben Kleene. All rights reserved.
//

import Cocoa
import Lottie

class ViewController: NSViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        
        let animationView = AnimationView(name: "SolarSystem")
        animationView.frame = self.view.bounds
        animationView.contentMode = .scaleAspectFill
        animationView.loopMode = .loop
        view.addSubview(animationView)
        
        animationView.play()
    }

    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
        }
    }


}

