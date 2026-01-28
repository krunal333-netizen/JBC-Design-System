import SwiftUI

struct JBCColor {
    static let accentPrimary = Color("JBC_Cyan") // Assets should map to #03FDDA (Dark) / #00BFA5 (Light)
    static let accentSecondary = Color("JBC_Gold") // Assets should map to #FFD700 (Dark) / #FFCC00 (Light)
    static let appBackground = Color("JBC_BG")
    static let surface = Color("JBC_Surface")
    static let textPrimary = Color("JBC_Text_Primary")
    static let textSecondary = Color("JBC_Text_Secondary")
    
    // Semantic States
    static let error = Color(hex: "#DA3633")
    static let success = Color(hex: "#2EA043")
}

extension Color {
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let a, r, g, b: UInt64
        switch hex.count {
        case 3: (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6: (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        default: (a, r, g, b) = (1, 1, 1, 0)
        }
        self.init(.sRGB, red: Double(r) / 255, green: Double(g) / 255, blue: Double(b) / 255, opacity: Double(a) / 255)
    }
}