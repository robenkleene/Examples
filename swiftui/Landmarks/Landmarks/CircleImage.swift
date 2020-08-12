//
//  CircleImage.swift
//  Landmarks
//
//  Created by Roben Kleene on 8/11/20.
//  Copyright © 2020 Roben Kleene. All rights reserved.
//

import SwiftUI

struct CircleImage: View {
    var body: some View {
        Image("turtlerock")
        .clipShape(Circle())
            .overlay(Circle().stroke(Color.gray, lineWidth: 4))
    }
}

struct CircleImage_Previews: PreviewProvider {
    static var previews: some View {
        CircleImage()
    }
}
