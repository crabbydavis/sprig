import Foundation

@objc public class Sprig: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
