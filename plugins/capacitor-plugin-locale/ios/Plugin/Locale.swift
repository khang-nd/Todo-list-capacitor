import Foundation

@objc public class Locale: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
