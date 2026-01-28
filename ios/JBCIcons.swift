import SwiftUI

/// JBC Design System Icon Mapper
/// Maps design tokens to native SwiftUI Image resources or SF Symbols
enum JBCIconName: String {
    case stake = "ri-database-2-line"
    case portfolio = "ri-briefcase-4-line"
    case migration = "ri-arrow-left-right-line"
    case rewards = "ri-gift-line"
    
    /// Returns the mapped SF Symbol name for native iOS integration
    var sfSymbol: String? {
        switch self {
        case .stake: return "cylinder.split.1x2"
        case .portfolio: return "briefcase"
        case .migration: return "arrow.left.and.right.circle"
        case .rewards: return "gift"
        }
    }
}

struct JBCIcon: View {
    let name: JBCIconName
    var size: CGFloat = 24
    var color: Color = .primary
    var isGradient: Bool = false
    var useNativeSymbols: Bool = true
    
    var body: some View {
        Group {
            if useNativeSymbols, let symbol = name.sfSymbol {
                Image(systemName: symbol)
                    .resizable()
            } else {
                Image(name.rawValue)
                    .resizable()
            }
        }
        .aspectRatio(contentMode: .fit)
        .frame(width: size, height: size)
        .foregroundColor(isGradient ? .clear : color)
        .overlay(
            Group {
                if isGradient {
                    LinearGradient(
                        colors: [Color("JBC_Cyan"), Color("JBC_Gold")],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                    .mask(
                        Group {
                            if useNativeSymbols, let symbol = name.sfSymbol {
                                Image(systemName: symbol).resizable()
                            } else {
                                Image(name.rawValue).resizable()
                            }
                        }
                    )
                }
            }
        )
    }
}