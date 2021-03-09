//
//  GameScene.swift
//  Particles
//
//  Created by Roben Kleene on 3/9/21.
//

import SpriteKit
import GameplayKit

class GameScene: SKScene {
    override func didMove(to view: SKView) {
        backgroundColor = UIColor.black
            
        if let rainParticles = SKEmitterNode(fileNamed: "Rain.sks") {
            rainParticles.position = CGPoint(x: size.width/2, y: size.height)
            rainParticles.name = "rainParticle"
            rainParticles.targetNode = scene

            addChild(rainParticles)
        }
    }
}
